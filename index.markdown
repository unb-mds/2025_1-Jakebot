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
  <p>Toda a documentação técnica e de uso do projeto está disponível de forma clara e organizada em nosso <a href="https://github.com/unb-mds/2025_1-Jakebot" style="color: var(--primary-color); text-decoration: none; font-weight: bold;">repositório no GitHub</a>. Isso inclui guias de instalação, uso, contribuição e detalhes sobre a arquitetura e as tecnologias empregadas, garantindo que qualquer interessado possa entender e colaborar com o projeto.</p>
</div>

<div class="content-section" id="prototipos">
  <h2>Protótipos</h2>
  <p>Para visualizar a experiência do usuário e o design da interface antes da implementação completa, desenvolvemos protótipos interativos no Figma. Eles servem como um guia visual para o desenvolvimento do frontend.</p>

  <h3>Protótipo de Alta Fidelidade</h3>
  <div class="prototype-gallery">
    <div class="prototype-item">
      <img src="https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=70-5&t=dcpIxJR9aki5W7wJ-1" alt="Protótipo de Alta Fidelidade">
      <div class="caption">Protótipo de Alta Fidelidade</div>
    </div>
  </div>
  <p>Acesse o protótipo de alta fidelidade no Figma: <a href="https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=70-5&t=dcpIxJR9aki5W7wJ-1" style="color: var(--primary-color); text-decoration: none; font-weight: bold;">https://www.figma.com/design/R3l1XIVdDhJXnQedtGVrkX/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=70-5&t=dcpIxJR9aki5W7wJ-1</a></p>

  <h3>Protótipo de Baixa Fidelidade</h3>
  <div class="prototype-gallery">
    <div class="prototype-item">
      <img src="/home/ubuntu/low_fidelity_prototype.jpeg" alt="Protótipo de Baixa Fidelidade">
      <div class="caption">Protótipo de Baixa Fidelidade</div>
    </div>
  </div>
  <p>Acesse o protótipo de baixa fidelidade no Figma: <a href="(link do Figma de baixa fidelidade aqui)" style="color: var(--primary-color); text-decoration: none; font-weight: bold;">(link do Figma de baixa fidelidade aqui)</a></p>
</div>

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













