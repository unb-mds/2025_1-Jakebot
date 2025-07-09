# Estudo Resumido sobre Arquitetura de Software

Este documento tem como objetivo fornecer uma visão geral sobre **Arquitetura de Software**, servindo como material de apoio para os integrantes do grupo no contexto da disciplina.

> O resumo serve como ponto de partida para aprofundar os estudos conforme o projeto avança, portanto, pode ser modificado.

## O que é Arquitetura de Software?

Arquitetura de Software é a estrutura fundamental de um sistema de software. Ela envolve decisões de alto nível relacionadas à organização do sistema, seus componentes, suas interações e os princípios que orientam seu design e evolução ao longo do tempo.

Em termos simples, é a “planta” do sistema que descreve **como** o software será dividido, **quais** tecnologias serão utilizadas e **como** os componentes se comunicarão.

## Por que a Arquitetura de Software é Importante?

- **Organiza o sistema** de forma lógica e sustentável, facilitando sua evolução.
- **Permite escalabilidade**, ou seja, o sistema pode crescer sem perder desempenho.
- **Facilita a manutenção**, tornando mais simples corrigir erros ou adicionar funcionalidades.
- **Define padrões e boas práticas** que o time deve seguir.
- **Aumenta a qualidade do produto final**, com foco em desempenho, segurança, usabilidade e robustez.
- **Minimiza riscos** ao antecipar problemas técnicos e decisões críticas logo no início do projeto.

![](https://martinfowler.com/articles/is-quality-worth-cost/both.png)

---

## **Componentes e Conectores**
- **Componentes**: Unidades modulares do sistema (ex: classes, serviços, módulos).
- **Conectores**: Mecanismos de comunicação entre componentes (ex: chamadas de função, eventos, protocolos de rede).

## **Estilos Arquiteturais**
Estilos arquiteturais são padrões amplamente utilizados para estruturar sistemas. Alguns dos principais são:

- **Monolítica**: Toda a aplicação é construída como um único bloco.
- **Camadas**: A aplicação é dividida em camadas (ex: apresentação, lógica de negócios, persistência).
- **Cliente-Servidor**: Divisão entre cliente (interface) e servidor (processamento).
- **Microserviços**: Sistema dividido em pequenos serviços independentes, que se comunicam por APIs.
- **Event-Driven**: Baseada em eventos e assinantes, muito usada em sistemas reativos.

## **Padrões de Arquitetura**
Além dos estilos, existem padrões que orientam decisões específicas de projeto:

- **MVC (Model-View-Controller)**: Separação entre dados (Model), interface (View) e lógica (Controller).
  - *Model*: Gerencia a lógica de dados e regras de negócio.
  - *View*: Interface que exibe os dados.
  - *Controller*: Lida com as solicitações do usuário e atualiza o modelo e a visão.
- **MVVM (Model-View-ViewModel)**: Parecido com o MVC, mas com uma camada de ViewModel que facilita a comunicação entre a interface e os dados.
- **Repository Pattern**: Centraliza o acesso a dados, desacoplando a lógica de negócio da persistência.

## **Qualidade Arquitetural (Atributos de Qualidade)**
São características não-funcionais que a arquitetura deve atender, como:

- **Escalabilidade**: Capacidade de lidar com aumento de carga.
- **Manutenibilidade**: Facilidade para corrigir, adaptar ou melhorar o sistema.
- **Desempenho**: Tempo de resposta e uso de recursos.
- **Segurança**: Proteção contra acessos não autorizados ou falhas.
- **Disponibilidade**: Capacidade do sistema de permanecer funcional.

## **Documentação Arquitetural**
Documentar a arquitetura é essencial para que o time compreenda e mantenha o sistema. Normalmente inclui:

- Diagrama de componentes
- Diagrama de implantação
- Justificativas de decisões arquiteturais
- Tecnologias utilizadas

---

## **Stacks ou Pilhas**

A **stack de tecnologia** é o conjunto de ferramentas, linguagens e plataformas utilizadas no desenvolvimento de um sistema. Ela normalmente está dividida em:

- **Frontend**: Interface com o usuário (ex: React, Vue.js, Angular)
- **Backend**: Lógica do sistema (ex: Node.js, Java, Python)
- **Banco de Dados**: Armazenamento de dados (ex: MySQL, PostgreSQL, MongoDB)
- **DevOps/Infraestrutura**: Implantação e monitoramento (ex: Docker, Kubernetes, AWS, Jenkins.)

A escolha da stack afeta diretamente:
- O desempenho do sistema
- A facilidade de manutenção
- O tempo de desenvolvimento
- A escalabilidade e a segurança

## **Frameworks**

Frameworks são **estruturas de desenvolvimento reutilizáveis**, compostas por conjuntos de bibliotecas, ferramentas e boas práticas que facilitam a criação de sistemas. Eles fornecem uma base pré-configurada que padroniza a forma como o código é escrito e organizado, permitindo que os desenvolvedores se concentrem na lógica de negócio, em vez de reinventar funcionalidades comuns.

> Um framework define o **esqueleto da aplicação**, enquanto o desenvolvedor preenche os detalhes.

### Vantagens:
- Redução do tempo de desenvolvimento
- Ajudam a seguir boas práticas e padrões
- Possuem comunidades ativas e muita documentação
- Integração com bibliotecas, autenticação, segurança e mais
- Facilitam a manutenção e a escalabilidade do sistema

### Desvantagens:
- Alguns frameworks são complexos e exigem conhecimento prévio.
- Projetos muito dependentes de um framework específico podem ser difíceis de migrar ou atualizar no futuro.
- Ao impor uma estrutura, frameworks podem limitar escolhas de arquitetura e desenvolvimento.

## Tipos de Frameworks:
- **Frameworks Web**: Facilitam o desenvolvimento de aplicações web, fornecendo estruturas para backend e frontend. Exemplos incluem **Django** e **Flask** (backend em Python), **Spring** (backend em Java), **React** e **Angular** (frontend em JavaScript).
- **Frameworks Mobile**: São voltados para a criação de aplicativos móveis, como **React Native** e **Flutter**, que possibilitam a construção de apps multiplataforma (iOS e Android) com um único código.
- **Frameworks para Desenvolvimento Desktop**: Usados para criar aplicativos de desktop, como o **Electron** (JavaScript) e o **Qt** (C++).

---

## Referências Sugeridas

- [O que é uma arquitetura de software? - YouTube](https://youtube.com/playlist?list=PLX0VJrazYICCC2a_Ab-sZwLn_LIO8gc4T&si=u5KLfSUoHoVn5SMU)
  - O link acima leva a uma playlist no YouTube contendo 6 vídeos de até 4 minutos explicando conceitos de **Arquitetura de Software**
