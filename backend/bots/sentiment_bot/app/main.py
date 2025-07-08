from fastapi import FastAPI, Query, HTTPException
from transformers import pipeline
import json
import os

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


dir_atual = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.normpath(os.path.join(
    dir_atual, "../comentarios_organizados.json"))

# Carrega os comentários ao iniciar
try:
    with open(json_path, "r", encoding="utf-8") as f:
        comentarios_raw = json.load(f)
    print(f"DEBUG: Carregados {len(comentarios_raw)} comentários")
except FileNotFoundError:
    print(f"ERROR: Arquivo não encontrado em {json_path}")
    comentarios_raw = []

# Inicializa pipeline multilíngue (usa estrelas de 1 a 5)
sentiment_model = pipeline(
    "sentiment-analysis",
    model="nlptown/bert-base-multilingual-uncased-sentiment"
)


@app.get("/debug/keys/")
def debug_keys():
    primeiro = comentarios_raw[0] if comentarios_raw else {}
    return {"keys_do_primeiro_comentario": list(primeiro.keys())}


@app.get("/comentarios/")
def listar_comentarios():
    comentarios_ordenados = sorted(
        comentarios_raw,
        key=lambda c: c.get("data_criacao", ""),
        reverse=True
    )
    return [
        {
            "id": c.get("id"),
            "id_autor": c.get("id_autor"),
            "comentario": c.get("corpo", "").strip(),
            "data_criacao": c.get("data_criacao"),
        }
        for c in comentarios_ordenados
        if c.get("corpo", "").strip()
    ]


@app.get("/debug/")
def debug():
    return {"total_comentarios": len(comentarios_raw)}


def listar_propostas():
    # extrai todos os IDs únicos de id_comentavel_raiz
    ids_unicos = sorted({c["id_comentavel_raiz"] for c in comentarios_raw})
    # monta lista de objetos com id e título (ou nome que preferir)
    return [{"id": i, "titulo": f"Proposta {i}"} for i in ids_unicos]


@app.get("/sentimentos/")
def analisar_sentimentos(id_proposta: str = Query(..., alias="id")):
    # Filtra apenas comentários da proposta
    filtrados = [
        c for c in comentarios_raw
        if str(c.get("id_comentavel_raiz")) == id_proposta
    ]
    if not filtrados:
        raise HTTPException(
            status_code=404,
            detail=f"Nenhum comentário encontrado para id {id_proposta}"
        )

    resultados = []
    for c in filtrados:
        texto = c.get("corpo", "").strip()
        if not texto:
            continue

        analysis = sentiment_model(texto, truncation=True)
        pred = analysis[0]
        label = pred.get("label", "")       # e.g. '1 star', '4 stars'
        score = round(pred.get("score", 0.0), 3)

        # Extrai número de estrelas
        try:
            n_stars = int(label.split()[0])
        except ValueError:
            continue

        # Classifica como Positivo (>3) ou Negativo (<3)
        if n_stars > 3:
            sentimento = "Positivo"
        elif n_stars < 3:
            sentimento = "Negativo"
        else:
            # pula neutros (3 estrelas)
            continue

        resultados.append({
            "id":         c.get("id"),
            "id_autor":   c.get("id_autor"),
            "comentario": texto,
            "data_criacao": c.get("data_criacao"),
            "stars":      n_stars,
            "score":      score,
            "sentimento": sentimento

        })

    if not resultados:
        raise HTTPException(
            status_code=404,
            detail=f"Nenhum comentário Positivo ou Negativo para id {id_proposta}"
        )

    return {
        "id_proposta": id_proposta,
        "quantidade":  len(resultados),
        "comentarios": resultados
    }
