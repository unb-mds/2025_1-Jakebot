# React + Vite

Este documento reúne todo o trabalho realizado até o momento, incluindo a criação do bot de análise de sentimentos (back‑end) e do dashboard em React + Vite (front‑end), além de instruções de uso.

## Visão Geral

- **Back‑end**: API Python + FastAPI que carrega comentários de CSV/JSON, filtra por `id_comentavel_raiz` e utiliza o modelo BERT multilíngue (`nlptown/bert-basemultilingual-uncased-sentiment`) para classificar cada comentário em Positivo ou Negativo.
- **Front‑end**: Aplicação React criada com Vite, estilizada com Tailwind CSS, que consome a API, exibe o total de comentários Positivos/Negativos e um gráfico de pizza.

## Estrutura de Diretórios

```
2025-1-SQUAD08/
├── backend/
│ └── bots/
│ └── sentiment_bot/
│ ├── app/
│ │ └── main.py           # API FastAPI
│ ├── comentarios.csv     # Dados de exemplo (CSV) ou JSON
│ ├── requirements.txt    # Dependências Python
│ └── venv/               # Ambiente virtual (ignorado no Git)
├── frontend/
│ ├── index.html          # Entry HTML do Vite
│ ├── package.json        # Dependências JS
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── src/
│ ├── main.jsx            # Bootstrapping React + CSS
│ ├── index.css           # Import Tailwind
│ ├── App.jsx             # Layout principal
│ └── components/         # Componentes React:
│ ├── LogoBar.jsx         # Exibe o logo topo
│ ├── NavBar.jsx          # Menu de navegação
│ ├── SearchBar.jsx       # Campo de busca de ID
│ └── SentimentStats.jsx  # Cards e gráfico de pizza
└── README.md
```

## Configuração de Ambiente

### Back‑end

```bash
# 1. Clone o repo e navegue até a pasta do bot
cd backend/bots/sentiment_bot
# 2. Crie e ative venv
python3 -m venv venv
# Windows PowerShell:
venv\Scripts\Activate.ps1
# macOS/Linux:
source venv/bin/activate
# 3. Instale dependências
pip install --upgrade pip
pip install -r requirements.txt
```

### Front‑end

```bash
# 1. Na raiz do projeto, navegue até frontend/
cd frontend
# 2. Instale dependências
npm install
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
npm install axios recharts @heroicons/react
# 3. (Opcional) Inicialize Tailwind
npx tailwindcss init -p
# ou crie manualmente tailwind.config.js e postcss.config.js
```

## Dependências Principais

### backend/requirements.txt

```
fastapi
uvicorn
transformers
torch
pandas
sentencepiece
```

### frontend/package.json (pontos-chave)

```bash
"dependencies": {
    "react": "^19.x",
    "react-dom": "^19.x",
    "axios": "^1.x",
    "recharts": "^2.x",
    "@heroicons/react": "^2.x"
},
"devDependencies": {
    "vite": "^7.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^4.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "@tailwindcss/postcss": "^1.x"
}
```

## Como Executar

### Iniciar Back‑end

```bash
# dentro de backend/bots/sentiment_bot, com venv ativo
env\Scripts\Activate.ps1 # ou source venv/bin/activate\pip install -r
requirements.txt
uvicorn app.main:app --reload
```

Servidor disponível em http://127.0.0.1:8000

### Iniciar Front‑end

```bash
# dentro da pasta frontend
npm run dev
```

Acesse http://localhost:5173 para ver o dashboard

## Uso da API

- **GET** `/sentimentos/?id=<id_proposta>`
- **Parâmetro**: `id`(string)
- **Resposta 200**:

```bash
{
    "id_proposta": "11668",
    "quantidade": 111,
    "comentarios": [
        {"id":"37","comentario":"...","stars":5,"score":
0.650,"sentimento":"Positivo"},
        ...
    ]
}
```

- **404**: quando não encontra comentários ou todos são neutros.

## Uso do Dashboard

1. Com API e front‑end rodando, abra o navegador em `http://localhost:5173`.
2. Digite o **ID da proposta** no campo “Buscar Comentário” e pressione a seta.
3. O dashboard exibirá:
4. Dois cards: **Positivos** (verde) e **Negativos** (vermelho).
5. Gráfico de pizza com distribuição.
6. Em caso de erro (ID não existe), aparece mensagem em vermelho.

---

Fim da documentação. Qualquer dúvida ou ajuste, estamos à disposição!
