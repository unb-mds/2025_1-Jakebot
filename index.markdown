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
    <li><strong>Machine Learning (Análise de Sentimentos):</strong> O sistema emprega um modelo BERT multilíngue pré-treinado e ajustado (fine-tuned) para classificação de sentimento, capaz de processar texto em vários idiomas, incluindo Português. Especificamente, utilizamos a variante <code>cardiffnlp/twitter-xlm-roberta-base-sentiment</code>, que atribui de 1 a 5 estrelas a cada comentário. No nosso fluxo, mapeamos:
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
  <h3>1. Introdução</h3>
  <h4>1.1 Objetivo</h4>
  <p>Apresentar a ferramenta de Análise de Sentimentos - Brasil Participativo, desenvolvida na disciplina de Métodos e Desenvolvimento de Software (MDS) da Universidade de Brasília - FGA.</p>
  <p>O sistema classifica sentimentos em comentários públicos da plataforma oficial, apoiando gestores e cidadãos com dados úteis.</p>

  <h4>1.2 Escopo</h4>
  <ul>
    <li>Coletar comentários via API GraphQL</li>
    <li>Classificá-los com modelo BERT</li>
    <li>Apresentar resultados visualmente no blog</li>
    <li>Oferecer filtros e busca por sentimentos, palavras-chave e período</li>
  </ul>

  <h4>1.3 Tecnologias Utilizadas</h4>
  <ul>
    <li>Frontend: HTML, CSS, Jekyll</li>
    <li>Backend: Python, Django</li>
    <li>API: GraphQL</li>
    <li>ML: BERT via HuggingFace</li>
    <li>Prototipação: Figma</li>
    <li>Versionamento: Git + GitHub</li>
  </ul>

  <h3>2. Descrição</h3>
  <h4>2.1 Visão Geral</h4>
  <p>O sistema é dividido em 3 camadas: coleta, análise e visualização. O blog permite navegação entre os módulos.</p>

  <h4>2.2 Objetivos do Usuário</h4>
  <ul>
    <li>Identificar rapidamente a opinião pública</li>
    <li>Explorar sentimentos por tema ou palavra-chave</li>
    <li>Acessar visualizações gráficas e filtros</li>
  </ul>

  <h3>3. Requisitos Funcionais</h3>
  <ul>
    <li>Coletar e classificar comentários via GraphQL e ML</li>
    <li>Interface amigável e responsiva com Jekyll</li>
    <li>Buscar por termos, aplicar filtros por sentimentos</li>
  </ul>

  <h3>4. Requisitos Não-Funcionais</h3>
  <ul>
    <li><strong>Desempenho:</strong> rápida resposta</li>
    <li><strong>Segurança:</strong> sem expor credenciais</li>
    <li><strong>Compatibilidade:</strong> acessível por dispositivos variados</li>
    <li><strong>Acessibilidade:</strong> contraste e legibilidade</li>
    <li><strong>Manutenção:</strong> modular e bem organizado</li>
  </ul>

  <h3>5. Execução Local</h3>
  <ul>
    <li><strong>Rodar o blog:</strong>
      <pre><code>sudo apt install ruby-full build-essential zlib1g-dev
sudo gem install jekyll bundler
git clone https://github.com/unb-mds/2025_1-Jakebot.git
cd 2025_1-Jakebot
bundle install
bundle exec jekyll serve</code></pre>
    </li>
    <li><strong>Rodar o backend:</strong>
      <pre><code>cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver</code></pre>
    </li>
  </ul>

  <h3>6. Links Úteis</h3>
  <ul>
    <li><a href="https://github.com/unb-mds/2025_1-Jakebot">GitHub</a></li>
    <li><a href="https://unb-mds.github.io/2025_1-Jakebot/">GitHub Pages</a></li>
    <li><a href="https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/">Protótipo no Figma</a></li>
  </ul>
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
    <div class="collaborator-item"><strong>Davi Muniz</strong><br> (Pipeline e front)</div>
    <div class="collaborator-item"><strong>Artur Guanaes</strong><br> (Design)</div>
  </div>
</div>













