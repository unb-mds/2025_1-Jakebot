
# 🧠 Conversor de Comentários CSV → JSON

Este script Python tem como objetivo **processar um arquivo CSV exportado da plataforma [Brasil Participativo](https://brasilparticipativo.presidencia.gov.br/)** contendo comentários, transformando-o em um **arquivo JSON organizado e mais legível**, pronto para análise ou uso em aplicações.

## 📂 Estrutura do Projeto

```
.
├── comentarios_organizados.json   # Arquivo gerado com os comentários organizados
├── query_result_*.csv             # CSV de entrada exportado da plataforma
├── processador_comentarios.py     # Script Python para processamento
└── README.md                      # Este arquivo de documentação
```

## 🧩 Funcionalidade

O script realiza os seguintes passos:

1. **Lê o CSV de entrada**, extraído da plataforma.
2. **Filtra apenas os comentários reais**, ignorando entradas que não são do tipo `Decidim::Comments::Comment`.
3. **Extrai e formata**:
   - ID do comentário
   - ID do comentário pai (se houver)
   - ID do autor
   - Data de criação
   - Corpo/texto do comentário (campo `Body`, que está em formato JSON `{ "pt-BR": "..." }`)
   - Profundidade (se é resposta, sub-resposta etc.)
   - Alinhamento (se for contra, a favor ou neutro)
4. **Ordena por data de criação**.
5. **Salva no arquivo JSON final**.

## 📝 Exemplo de Uso

```bash
python processador_comentarios.py
```

Ou, se preferir importar como função:

```python
from processador_comentarios import processar_csv_para_json

processar_csv_para_json("query_result_2025-04-28T13_17_30.156542Z.csv", "comentarios_organizados.json")
```

## ✅ Pré-requisitos

- Python 3.7+
- Não requer bibliotecas externas além da biblioteca padrão (`csv`, `json`, `datetime`)

## 🗃️ Exemplo de saída (`comentarios_organizados.json`)

```json
[
  {
    "id": "12345",
    "id_comentavel": "67890",
    "id_autor": "111",
    "data_criacao": "2025-04-25T15:30:00Z",
    "corpo": "Esse projeto é muito importante!",
    "nivel": "0",
    "alinhamento": "positive",
    "id_comentavel_raiz": "67890",
    "tipo_comentavel_raiz": "Decidim::Proposal"
  },
  ...
]
```


