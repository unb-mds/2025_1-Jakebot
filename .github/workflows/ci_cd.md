# Histórico de Alterações da Pipeline CI/CD

## [Versão Atual] - 2025-07-08

### CI

*   **🧪 Configura ambiente Python e testes para Django**
    Adiciona passos para criar e ativar um ambiente virtual Python (`venv`),
    atualizar o `pip` e instalar as dependências do `requirements.txt`
    no job `build_and_test_django`.

    Isso garante que os testes do Django sejam executados em um ambiente
    isolado e com todas as dependências necessárias, aumentando a
    confiabilidade dos resultados.

*   **✨ Adiciona job para deploy da aplicação Uvicorn**
    Cria um novo job `deploy_uvicorn_app` na pipeline para gerenciar
    o processo de deploy de uma aplicação baseada em Uvicorn.

    Este job inclui a configuração de um ambiente virtual Python e a
    instalação das dependências necessárias. Atualmente, o passo de
    deploy é um placeholder, aguardando a definição do método de deploy
    (
