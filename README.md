# Sprint Design - Vacinação Infantil

Apresentação web interativa do documento "SPRINT DESIGN-ETAPA 1: ENTENDER" sobre o problema da vacinação infantil no Brasil.

## 📋 Descrição

Esta é uma web app desenvolvida com **HTML semântico**, **CSS responsivo** e **JavaScript vanilla** que apresenta de forma clara e interativa o conteúdo do Sprint Design focado em entender o problema da queda nas taxas de vacinação infantil.

## 🎯 Características

- **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Intuitiva**: Abas para alternar entre diferentes seções
- **HTML Semântico**: Estrutura clara e acessível
- **CSS Moderno**: Variáveis CSS, Grid, Flexbox e animações suaves
- **JavaScript Vanilla**: Sem dependências externas
- **Acessibilidade**: Suporte a modo escuro e redução de movimento
- **Pronto para Deploy**: Estrutura otimizada para produção

## 📁 Estrutura de Arquivos

```
sprint-design-app/
├── index.html          # Arquivo HTML semântico principal
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript interativa
├── README.md           # Este arquivo
└── .gitignore          # Configuração Git (opcional)
```

## 🚀 Como Usar

### Localmente

1. **Clone ou baixe os arquivos** para seu computador
2. **Abra o arquivo `index.html`** em seu navegador preferido
3. **Navegue** entre as seções usando os botões de navegação

### Estrutura de Seções

- **Problema**: Visão geral do problema central da vacinação infantil
- **Causas**: Análise das causas raiz em 3 categorias
- **Soluções**: Produtos e serviços similares existentes
- **Stakeholders**: Necessidades de diferentes atores envolvidos
- **HMW**: Perguntas provocadoras para inovação

## 🌐 Deploy

### Opção 1: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá para Settings → Pages
4. Selecione "Deploy from a branch" e escolha `main` branch
5. Sua app estará disponível em `https://seu-usuario.github.io/seu-repositorio`

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git" ou arraste os arquivos
3. Sua app estará online em minutos

### Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório Git ou faça upload dos arquivos
3. Clique em "Deploy"

### Opção 4: Servidor Próprio

```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js (com http-server)
npm install -g http-server
http-server

# Usando PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

## 🛠️ Personalização

### Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... mais cores */
}
```

### Conteúdo

Edite o arquivo `index.html` para adicionar, remover ou modificar seções.

### Funcionalidades JavaScript

O arquivo `script.js` expõe as seguintes funções globalmente:

```javascript
// Exportar conteúdo como JSON
SprintDesign.exportContent('json');

// Copiar texto para clipboard
SprintDesign.copyToClipboard('texto');

// Imprimir página
SprintDesign.printPage();

// Log de eventos
SprintDesign.logEvent('nome-do-evento', { dados: 'aqui' });
```

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

## ♿ Acessibilidade

- Suporte a **modo escuro** (prefers-color-scheme)
- Suporte a **redução de movimento** (prefers-reduced-motion)
- Navegação por **teclado** totalmente funcional
- Estrutura **semântica** com tags HTML apropriadas
- Contraste de cores adequado para leitura

## 📊 Tecnologias

- **HTML5**: Semântico e acessível
- **CSS3**: Variáveis, Grid, Flexbox, Media Queries
- **JavaScript ES6+**: Vanilla, sem frameworks

## 📝 Notas

- Todos os arquivos são **independentes** (sem dependências externas)
- A aplicação funciona **offline** após carregamento inicial
- Otimizada para **performance** e **SEO**

## 👥 Autores

**Curso**: Negócios Digitais

**Alunos**: 
- Arthur Uady
- Eduardo Belli
- Luiz Felipe
- Matheus Peres

## 📄 Licença

Livre para uso e modificação.

---

**Última atualização**: Outubro de 2025

