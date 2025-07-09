# Estudo sobre Jekyll

Este documento tem como objetivo fornecer uma visão geral sobre **Arquitetura de Software**, servindo como material de apoio para os integrantes do grupo no contexto da disciplina.

> ⚠️ O resumo serve como ponto de partida para aprofundar os estudos conforme o projeto avança, portanto, pode ser modificado.

---

## 📌 O que é o Jekyll?

**Jekyll** é um gerador de sites estáticos escrito em Ruby. Ele transforma arquivos Markdown, HTML e dados estruturados (como YAML ou JSON) em um site completo e leve, ideal para blogs, portfólios e páginas pessoais.

---

## 🔧 Como funciona?

- O Jekyll lê os arquivos em pastas específicas como `_posts`, `_layouts`, `_includes`, entre outras.
- Converte conteúdo escrito em Markdown para HTML, aplicando layouts e templates.
- Gera um site estático que pode ser hospedado em qualquer servidor — incluindo **GitHub Pages**, de forma gratuita.

---

## 🧱 Principais Recursos

- ✅ Templates reutilizáveis com o sistema de **layouts**
- ✅ Suporte nativo a **Markdown** para escrever posts e páginas com facilidade
- ✅ Uso de **front matter em YAML** para definir metadados nos arquivos
- ✅ Suporte a **plugins** e **temas** para personalização do site
- ✅ **Integração direta com GitHub Pages**, sem necessidade de backend

---

## 📁 Estrutura básica de um projeto Jekyll

```text
my-site/
├── _posts/
├── _layouts/
├── _includes/
├── _config.yml
├── index.md
└── about.md
