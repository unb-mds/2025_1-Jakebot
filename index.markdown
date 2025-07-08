---
layout: default
title: Análise de Sentimentos – Brasil Participativo
---

<style>
  :root {
    --primary-color: #28a745; /* Verde vibrante */
    --secondary-color: #1e7e34; /* Verde mais escuro para hover */
    --text-color: #333;
    --background-color: #f8f9fa;
    --card-background: #ffffff;
    --border-color: #e0e0e0;
    --shadow-light: rgba(0, 0, 0, 0.1);
    --shadow-medium: rgba(0, 0, 0, 0.15);
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  .header {
    background-color: var(--primary-color);
    padding: 40px 0;
    text-align: center;
    box-shadow: 0 4px 8px var(--shadow-medium);
    margin-bottom: 20px;
  }

  .header h1 {
    color: white;
    margin: 0;
    font-size: 3.2em;
    text-shadow: 2px 2px 4px var(--shadow-medium);
  }

  .navbar {
    background-color: var(--card-background);
    padding: 15px 0;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 2px 4px var(--shadow-light);
    margin-bottom: 30px;
  }

  .navbar a {
    color: var(--primary-color);
    text-decoration: none;
    padding: 12px 25px;
    margin: 0 10px;
    font-weight: bold;
    transition: all 0.3s ease;
    border-radius: 5px;
  }

  .navbar a:hover {
    color: white;
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }

  .content-section {
    background-color: var(--card-background);
    margin: 20px auto;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 4px 12px var(--shadow-light);
    max-width: 960px;
    animation: fadeIn 0.8s ease-out;
  }

  .content-section h2 {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
    padding-bottom: 15px;
    margin-bottom: 25px;
    font-size: 2.4em;
    text-align: center;
  }

  .content-section p {
    margin-bottom: 15px;
  }

  .content-section ul {
    list-style-type: none;
    padding: 0;
  }

  .content-section ul li {
    margin-bottom: 12px;
    padding-left: 30px;
    position: relative;
  }

  .content-section ul li:before {
    content: '✓'; /* Checkmark for list items */
    color: var(--primary-color);
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 1.2em;
  }

  .collaborator-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    margin-top: 30px;
    justify-content: center;
  }

  .collaborator-item {
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 6px var(--shadow-light);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .collaborator-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px var(--shadow-medium);
  }

  .collaborator-item strong {
    color: var(--primary-color);
    font-size: 1.1em;
    display: block;
    margin-bottom: 5px;
  }

  .prototype-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .prototype-item {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px var(--shadow-light);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .prototype-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px var(--shadow-medium);
  }

  .prototype-item img {
    width: 100%;
    height: auto;
    display: block;
  }

  .prototype-item .caption {
    padding: 15px;
    background-color: var(--background-color);
    text-align: center;
    font-weight: bold;
    color: var(--primary-color);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="header">
  <h1>Análise de Sentimentos – Brasil Participativo</h1>
</div>

<div class="navbar">
  <a href="#projeto">Projeto</a>
  <a href="#tecnologias">Tecnologias</a>
  <a href="#grupo">Grupo</a>
  <a href="#ambiente">Ambiente</a>
  <a href="#arquitetura">Arquitetura</a>
  <a href="#documentacao">Documentação</a>
  <a href="#prototipos">Protótipos</a>
  <a href="#colaboradores">Colaboradores</a>
</div>

<div class="content-section" id="projeto">
  <h2>Projeto</h2>
  <p>Nosso projeto visa desenvolver uma ferramenta robusta e intuitiva para coletar e analisar os sentimentos expressos nos comentários da plataforma <strong>Brasil Participativo</strong>. O objetivo principal é transformar grandes volumes de dados textuais em <em>insights</em> acionáveis, ajudando gestores públicos e cidadãos a compreenderem de forma mais clara e objetiva a opinião pública sobre as propostas e discussões.</p>
  <p>Através da análise de sentimentos (positivo, neutro ou negativo), a ferramenta permitirá uma visualização acessível e dinâmica dos dados, facilitando a identificação de tendências, pontos de apoio e áreas de crítica, contribuindo assim para um processo decisório mais informado e participativo.</p>
</div>

<div class="content-section" id="tecnologias">
  <h2>Tecnologias</h2>
  <p>Para garantir a eficiência e escalabilidade da nossa solução, optamos por um conjunto de tecnologias modernas e amplamente utilizadas no mercado:</p>
  <ul>
    <li><strong>Python + Django:</strong> Utilizado no backend para a construção de uma API robusta e para a orquestração da coleta de dados e do processamento de Machine Learning. Django oferece um framework seguro e com rápido desenvolvimento.</li>
    <li><strong>GraphQL:</strong> Interface de comunicação com a plataforma Brasil Participativo, permitindo uma coleta de dados eficiente e flexível, solicitando apenas o que é necessário.</li>
    <li><strong>Jekyll + GitHub Pages:</strong> Escolhido para o frontend e o blog do projeto, proporcionando um site estático rápido, seguro e de fácil manutenção, hospedado gratuitamente no GitHub Pages.</li>
    <li><strong>Machine Learning (Análise de Sentimentos):</strong> O sistema emprega um modelo BERT multilíngue pré-treinado e ajustado (fine-tuned) para classificação de sentimento, capaz de processar texto em vários idiomas, incluindo Português. Especificamente, utilizamos a variante <code>nlptown/bert-base-multilingual-uncased-sentiment</code>, que atribui de 1 a 5 estrelas a cada comentário. No nosso fluxo, mapeamos:
      <ul>
        <li>1–2 estrelas &rarr; Comentário Negativo</li>
        <li>4–5 estrelas &rarr; Comentário Positivo</li>
        <li>Comentários de 3 estrelas &rarr; Comentário Neutro (não exibidos).</li>
      </ul>
    </li>
  </ul>
</div>

<div class="content-section" id="grupo">
  <h2>Grupo</h2>
  <p>Este projeto está sendo desenvolvido com dedicação e expertise pela <strong>Squad 08</strong>, composta por estudantes de Engenharia de Software da Universidade de Brasília (UnB Gama). Nossa equipe multidisciplinar combina diferentes habilidades para entregar uma solução completa e de alta qualidade.</p>
</div>

<div class="content-section" id="ambiente">
  <h2>Ambiente</h2>
  <p>O desenvolvimento do projeto é centralizado no <strong>GitHub</strong>, utilizando um fluxo de trabalho colaborativo e versionamento de código. O deploy do frontend é realizado de forma contínua no <strong>GitHub Pages</strong>, garantindo que a versão mais recente do site esteja sempre acessível. Para o desenvolvimento local, incentivamos o uso de <strong>ambientes virtuais</strong> para isolar as dependências do projeto e garantir a reprodutibilidade.</p>
</div>

<div class="content-section" id="arquitetura">
  <h2>Arquitetura</h2>
  <p>A arquitetura da nossa ferramenta é modular e bem definida, dividida em três componentes principais para otimizar o desenvolvimento e a manutenção:</p>
  <ul>
    <li><strong>Frontend (Jekyll):</strong> Responsável pela interface do usuário, apresentação dos resultados da análise de sentimentos (dashboard, gráficos, filtros) e informações gerais sobre o projeto.</li>
    <li><strong>Backend (Django):</strong> Gerencia a comunicação com a API GraphQL do Brasil Participativo para coleta de dados e integra o modelo de Machine Learning para a análise de sentimentos.</li>
    <li><strong>Modelo de ML (BERT/DistilBERT):</strong> Componente dedicado à inteligência artificial, responsável por processar os comentários e classificá-los em positivo, neutro ou negativo.</li>
  </ul>
</div>

<div class="content-section" id="documentacao">
  <h2>Documentação</h2>
  Documentação do Projeto

1. Introdução

1.1 Objetivo

Este documento tem como objetivo apresentar todos os detalhes do projeto "Análise de Sentimentos - Brasil Participativo", desenvolvido na disciplina de Métodos e Desenvolvimento de Software (MDS) do curso de Engenharia de Software da Universidade de Brasília (UnB) - FGA, durante o semestre 2025.1.

O projeto visa criar uma ferramenta capaz de coletar, analisar e visualizar os sentimentos expressos nos comentários da plataforma Brasil Participativo. Os sentimentos são classificados como positivos, neutros ou negativos, com o objetivo de auxiliar governos, pesquisadores e cidadãos na compreensão da opinião pública sobre políticas públicas.

1.2 Escopo

Coletar comentários da plataforma Brasil Participativo via API GraphQL;

Classificar os comentários usando um modelo de Machine Learning (ex: BERT);

Exibir os resultados de forma visual e interativa por meio de um blog estático em Jekyll, publicado no GitHub Pages;

Fornecer filtros por sentimento, palavras-chave e período de tempo (em desenvolvimento).

1.3 Tecnologias Utilizadas

Frontend: HTML, CSS, Jekyll (GitHub Pages)

Backend: Python, Django

Análise de Sentimentos: BERT / DistilBERT (via HuggingFace Transformers)

API: GraphQL (Brasil Participativo)

Prototipação: Figma

Controle de Versão: Git + GitHub

2. Descrição

2.1 Visão Geral do Sistema

O sistema é dividido em três grandes camadas:

Coleta de Dados: via API GraphQL da Brasil Participativo;

Análise de Sentimentos: com modelo pré-treinado BERT para classificação textual;

Visualização: os resultados são apresentados em um blog responsivo com seções informativas, filtros e visualizações gráficas.

2.2 Objetivos do Usuário

Visualizar rapidamente a opinião pública sobre temas importantes;

Obter insights através de filtros por palavras, temas ou datas;

Entender o volume de sentimentos positivos, negativos e neutros;

Ter uma interface amigável e responsiva.

3. Requisitos Funcionais

3.1 Coleta e Processamento

A ferramenta deve coletar comentários públicos da API GraphQL.

Deve processar o texto usando um modelo de classificação de sentimentos.

Os resultados devem ser armazenados ou diretamente exibidos.

3.2 Visualização via Blog

Deve haver uma interface responsiva criada com Jekyll.

Os resultados da análise devem ser exibidos de forma clara.

Deve conter seções como: Projeto, Tecnologias, Arquitetura, Documentação, Protótipo, etc.

3.3 Filtros e Busca

Implementar busca por palavras-chave (em desenvolvimento).

Permitir filtro por sentimentos (positivo e negativo).

Filtro temporal e por tema (em desenvolvimento).

4. Requisitos Não-Funcionais

Desempenho: os resultados devem carregar rapidamente.

Segurança: API utilizada de forma segura, sem expor credenciais.

Compatibilidade: blog responsivo para diferentes dispositivos.

Acessibilidade: uso de cores contrastantes e legibilidade garantida.

Manutenção: código modular, com separação clara entre front e back.

4.1 Usabilidade

Interface intuitiva e limpa;

Feedback visual nos elementos interativos;

Navegação simples e organizada.

5. Execução Local

5.1 Rodando o Blog (Linux)

# Instalar Ruby, Jekyll e Bundler
sudo apt install ruby-full build-essential zlib1g-dev
sudo gem install jekyll bundler

# Clonar o projeto
git clone https://github.com/unb-mds/2025_1-Jakebot.git
cd 2025_1-Jakebot

# Instalar dependências e rodar localmente
bundle install
bundle exec jekyll serve

5.2 Rodando o Backend (exemplo)

cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver

6. Links Importantes

Repositório GitHub: https://github.com/unb-mds/2025_1-Jakebot

Protótipo Figma: https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=70-5&t=dcpIxJR9aki5W7wJ-1

GitHub Pages: https://unb-mds.github.io/2025_1-Jakebot/

7. Equipe

Nome

Função

Artur Fernandes

Frontend (Jekyll) + Documentação

Eduardo Ribeiro

Bot e Backend

Danilo Barros

Blog e Documentação

Lucas Chaves

Bot e Backend

Davi Muniz

Pipeline

Artur Guanaes

Design

8. Referências

Jekyll - Site Oficial

GitHub Pages - Docs

HuggingFace Transformers

Brasil Participativo

</div>

<div class="content-section" id="prototipos">
  <h2>Protótipos</h2>
  <p>Para visualizar a experiência do usuário e o design da interface antes da implementação completa, desenvolvemos protótipos interativos no Figma. Eles servem como um guia visual para o desenvolvimento do frontend.</p>
    
  <p>Acesse os protótipo de alta e baixa fidelidade no Figma: <a href="https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=70-5&t=dcpIxJR9aki5W7wJ-1" style="color: var(--primary-color); text-decoration: none; font-weight: bold;">https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=70-5&t=dcpIxJR9aki5W7wJ-1</a></p>

<div class="content-section" id="colaboradores">
  <h2>Colaboradores</h2>
  <p>Agradecemos a dedicação e o trabalho árduo de cada membro da Squad 08, que tornam este projeto possível:</p>
  <div class="collaborator-list">
    <div class="collaborator-item"><strong>Artur Alves Fernandes</strong><br> (Blog e documentação)</div>
    <div class="collaborator-item"><strong>Eduardo Ribeiro</strong><br> (Bot e Backend)</div>
    <div class="collaborator-item"><strong>Danilo Barros</strong><br> (Blog e Documentação)</div>
    <div class="collaborator-item"><strong>Lucas Chaves</strong><br> (Bot e Backend)</div>
    <div class="collaborator-item"><strong>Davi Muniz</strong><br> (Pipeline)</div>
    <div class="collaborator-item"><strong>Artur Guanaes</strong><br> (Design)</div>
  </div>
</div>













