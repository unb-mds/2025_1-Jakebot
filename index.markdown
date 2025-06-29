---
layout: default
title: Análise de Sentimentos – Brasil Participativo
---

<style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; color: #333; }
  .header { background-color: #28a745; padding: 30px 0; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
  .header h1 { color: white; margin: 0; font-size: 2.8em; }
  .navbar { background-color: #ffffff; padding: 15px 0; text-align: center; border-bottom: 1px solid #ddd; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .navbar a { color: #28a745; text-decoration: none; padding: 10px 20px; margin: 0 10px; font-weight: bold; transition: color 0.3s ease; }
  .navbar a:hover { color: #1e7e34; background-color: #e9ecef; border-radius: 5px; }
  .content-section { background-color: white; margin: 20px auto; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 900px; line-height: 1.6; }
  .content-section h2 { color: #28a745; border-bottom: 2px solid #28a745; padding-bottom: 10px; margin-bottom: 20px; font-size: 2em; }
  .content-section ul { list-style-type: none; padding: 0; }
  .content-section ul li { margin-bottom: 10px; padding-left: 25px; position: relative; }
  .content-section ul li:before { content: '•'; color: #28a745; position: absolute; left: 0; }
  .collaborator-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 20px; }
  .collaborator-item { background-color: #f9f9f9; border: 1px solid #eee; border-radius: 5px; padding: 15px; text-align: center; width: 200px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .collaborator-item strong { color: #28a745; }
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
  <a href="#documentacao">Documentacao</a>
  <a href="#prototipo">Protótipo</a>
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
    <li><strong>Machine Learning (BERT/DistilBERT):</strong> Modelos de Processamento de Linguagem Natural (PLN) de última geração para a análise de sentimentos. A capacidade desses modelos em entender o contexto e as nuances da linguagem garante alta precisão na classificação dos comentários.</li>
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
  <p>Toda a documentação técnica e de uso do projeto está disponível de forma clara e organizada em nosso <a href="https://github.com/unb-mds/2025_1-Jakebot" style="color: #28a745; text-decoration: none; font-weight: bold;">repositório no GitHub</a>. Isso inclui guias de instalação, uso, contribuição e detalhes sobre a arquitetura e as tecnologias empregadas, garantindo que qualquer interessado possa entender e colaborar com o projeto.</p>
</div>

<div class="content-section" id="prototipo">
  <h2>Protótipo</h2>
  <p>Para visualizar a experiência do usuário e o design da interface antes da implementação completa, desenvolvemos um protótipo interativo no Figma. Este protótipo serve como um guia visual para o desenvolvimento do frontend e pode ser acessado através do link:</p>
  <p><a href="(link do Figma aqui)" style="color: #28a745; text-decoration: none; font-weight: bold;">(link do Figma aqui)</a></p>
</div>

<div class="content-section" id="colaboradores">
  <h2>Colaboradores</h2>
  <p>Agradecemos a dedicação e o trabalho árduo de cada membro da Squad 08, que tornam este projeto possível:</p>
  <div class="collaborator-list">
    <div class="collaborator-item"><strong>Artur Alves Fernandes</strong><br>Frontend (Blog)</div>
    <div class="collaborator-item"><strong>Eduardo Ribeiro</strong><br>Frontend (Blog)</div>
    <div class="collaborator-item"><strong>Danilo Barros</strong><br>Frontend (Blog)</div>
    <div class="collaborator-item"><strong>Lucas Chaves</strong><br>Frontend (Blog)</div>
    <div class="collaborator-item"><strong>Davi Muniz</strong><br>Frontend (Blog)</div>
    <div class="collaborator-item"><strong>Artur Guanaes</strong><br>Frontend (Blog)</div>
  </div>
</div>




