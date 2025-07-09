# Arquitetura de Software - 🤖 Jake Bot

## Introdução

### O que é Arquitetura de Software?

Arquitetura de Software é a estrutura fundamental de um sistema de software. Ela envolve decisões de alto nível relacionadas à organização do sistema, seus componentes, suas interações e os princípios que orientam seu design e evolução ao longo do tempo.

Em termos simples, é a “planta” do sistema que descreve **como** o software será dividido, **quais** tecnologias serão utilizadas e **como** os componentes se comunicarão.

O presente documento visa registrar as decisões técnicas, tecnologias escolhidas, estratégias de integração e principais pontos de atenção para o sucesso do projeto.

### Contextualização

A plataforma Brasil Participativo é uma iniciativa do governo federal brasileiro com o objetivo de promover a participação da sociedade civil na formulação e aprimoramento de políticas públicas. A plataforma permite que os cidadãos contribuam com ideias, comentários e sugestões sobre propostas em análise.

Este projeto visa desenvolver uma ferramenta baseada em tecnologias de código aberto, capaz de coletar comentários publicados na plataforma Brasil Participativo, realizar uma análise de sentimentos desses comentários utilizando modelos de machine learning de código aberto e disponibilizar os resultados de forma transparente e acessível por meio de uma interface estática desenvolvida com Jekyll.

## Visão Geral da Arquitetura

A arquitetura do Jake Bot será baseada em um estilo de camadas em conjunto com um padrão client-server, separando claramente as responsabilidades de apresentação, lógica de negócio, armazenamento e processamento de dados.

O sistema será composto pelas seguintes camadas:

1. **Front-end**
2. **Back-end**
3. **Banco de Dados**

Cada uma dessas camadas possui subcomponentes específicos, conforme descrito a seguir.

### 1. Front-end

- **Client (Web)**: O front-end do projeto é responsável pela exibição dos resultados da análise de sentimentos realizada nos comentários coletados da plataforma Brasil Participativo. Como não há necessidade de um back-end complexo ou persistência de dados no lado cliente, a interface será estática utilizando o framework Jekyll em conjunto da plataforma gratuita GitHub Pages. O design e a interface são desenvolvidos utilizando Figma para estilização e responsividade.

### 2. Back-end

- **Bots**: Ambos os bots de **Coleta** e **Análise** dos comentários serão desenvolvidos em Python, utilizando o framework Django para facilitar a organização do código e permitir futuras expansões, caso necessário.
  - **Bot de Coleta de Comentários**: O Bot de Coleta de Comentários é responsável por se conectar ao banco de comentários da plataforma Brasil Participativo, identificar as propostas configuradas para análise e extrair os comentários associados a elas. Ele armazena esses dados no banco de dados SQLite com informações como texto do comentário, autor e data, garantindo que os dados estejam organizados e prontos para a etapa seguinte.
  - **Bot de Análise de Sentimentos**: O Bot de Análise de Sentimentos processa os comentários previamente coletados utilizando um modelo de Machine Learning para análise dos sentimentos. Ele classifica cada comentário como positivo, negativo ou neutro e salva essa informação no banco de dados. Esses resultados estruturados são então utilizados pela interface estática para exibir análises visuais ao usuário final.

- **Django**: O framework principal do sistema, responsável por gerenciar as requisições HTTP, lógica de autenticação e rotas de API. Django é utilizado para orquestrar as chamadas aos módulos da API e coordenar o acesso ao banco de dados.

### 3. Banco de Dados

- **SQLite**: O banco de dados será utilizado para armazenar os dados coletados e os resultados da análise de sentimentos. Como o projeto é pequeno e não requer alta performance ou escala imediata, o SQLite é uma escolha ideal por ser simples, rápido e não exigir instalação externa.

A arquitetura **cliente-servidor** é adequada para o projeto por permitir uma **separação clara de responsabilidades** entre as partes envolvidas no sistema, mesmo que ele seja simples e utilize componentes automatizados como bots. Apesar de o front-end ser estático (hospedado com Jekyll no GitHub Pages), o back-end composto pelos bots de coleta e análise atua como um "servidor" lógico ao processar dados, gerenciar requisições e armazenar informações no banco de dados SQLite.

Essa divisão permite:

- **Escalabilidade futura**: caso surja a necessidade de expor uma API REST ou hospedar os bots em um servidor dedicado, a arquitetura já está preparada para isso.
- **Reutilização de dados**: o back-end processa e armazena os dados em um local centralizado (SQLite), permitindo que a interface cliente acesse essas informações estruturadas de forma eficiente.
- **Automatização confiável**: os bots podem rodar periodicamente no servidor (por exemplo, usando GitHub Actions) e atualizar os dados sem interferência do front-end.
- **Separação de camadas**: o front-end se preocupa apenas com a exibição dos dados, enquanto o back-end trata da coleta, processamento e persistência, facilitando manutenção e evolução do projeto.

##

![imagem modelo cliente-servidor](https://github.com/user-attachments/assets/abbadf01-f9dd-413e-84dd-0870937f13f4)

---

## Tecnologias Utilizadas

O sistema utiliza algumas tecnologias para garantir escalabilidade, modularidade e facilidade de manutenção:

- **DevOps**:
  - **GitHub Pages**: A interface final será hospedada gratuitamente no GitHub Pages, aproveitando a integração nativa do Jekyll com essa plataforma.

- **Design/Front-end**:
  - **Figma**: Ferramenta de design utilizada para criar protótipos e garantir uma UI consistente.

- **Back-end**: 
  - **Django**: Framework web em Python, escolhido pela sua robustez e capacidade de integração com o SQLite.
  - **SQLite**: Banco de dados relacional utilizado para armazenamento de dados, levando em conta o escopo do projeto, garante simplicidade e não exigi instalação externa.

## Diagrama de Arquitetura

![image diagrama de arquitetura](https://github.com/user-attachments/assets/64fe493a-1f7a-48b0-913d-1ccd2de4a960)

---

## Considerações Finais

O projeto adota uma arquitetura simples, modular e altamente alinhada com os princípios de software livre e transparência. Ao utilizar tecnologias open source, como Jekyll, Python e modelos de IA disponíveis publicamente, o sistema atende aos requisitos técnicos e ideológicos da iniciativa Brasil Participativo OSS.
