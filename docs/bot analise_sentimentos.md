# Bot Análise de Sentimentos

O bot carrega comentários de um arquivo JSON, filtra por ID_COMENTAVEL_RAIZ, analisa o sentimento usando um modelo multilíngue e retorna apenas os comentários como Positivos ou Negativos.

# 1. Visão Geral

- Objetivo: Fornecer um API Web para anãlise de sentimento de comentários de propostas.

# Tecnologias principais

- FastAPI: Framework Python de alta performance para construção de APIs RESTful.

\*HuggingFace Transformers: Biblioteca de ponta para processamento de linguagem neural(NLP).

- Modelo: nlptown/bert-base-multilingual-uncased-sentiment, um BERT multilíngue treinado para classificação de sentimentos em 1–5 estrelas.

# COLOCAR AQUI DETALHES SOBRE A TECNOLOGIA DE MACHINE LEARNING

# Configuração de ambiente

1. Clone o repositório e navegue até bot/sentiment_bot.

2. Crie e ative um ambiente virtual:

```bash
python -m venv venv
venv/Scripts/activate
```

3. Instalação de Dependências

No diretório bots/sentiment_bot, instale:

```bash
pip install fastapi uvicorn transformers torch sentencepiece
```

Em seguida, crie(ou atualize) o requirements.txt com:

```bash
fastapi
uvicorn
transformers
torch
sentencepiece
```

4. Execução e testes

```bash
uvicorn app.main:app --reload
```

- Acesse http://127.0.0.1:8000/sentimentos/?id=(id da proposta aqui) para consultar e realizar testes
