# Meu Site

Um site estático moderno e responsivo, construído com HTML, CSS e JavaScript puro, pronto para deploy no GitHub e Vercel.

## 🚀 Características

- ✅ HTML5 semântico
- 🎨 CSS3 moderno com variáveis CSS
- 💫 Animações suaves e interativas
- 📱 Design totalmente responsivo
- ⚡ Performance otimizada
- 🔧 Configuração pronta para Vercel

## 📂 Estrutura do Projeto

```
meu-site/
│
├── css/
│   └── style.css          # Estilos principais
│
├── js/
│   └── script.js          # Funcionalidades JavaScript
│
├── images/                # Pasta para imagens
│
├── index.html             # Página principal
├── vercel.json           # Configuração do Vercel
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📦 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/meu-site.git
cd meu-site
```

### 2. Abra localmente

Simplesmente abra o arquivo `index.html` no seu navegador, ou use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve .
```

### 3. Deploy no Vercel

#### Opção A: Via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe seu repositório do GitHub
4. Clique em "Deploy"

#### Opção B: Via CLI

```bash
npm i -g vercel
vercel
```

### 4. Deploy no GitHub Pages

1. Vá em Settings > Pages no seu repositório
2. Em "Source", selecione a branch `main`
3. Selecione a pasta `/ (root)`
4. Clique em "Save"

Seu site estará disponível em: `https://seu-usuario.github.io/meu-site`

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --text-color: #333;
    --bg-color: #f4f4f4;
}
```

### Conteúdo

Edite o arquivo `index.html` para alterar textos, seções e estrutura.

### Funcionalidades

Adicione novas funcionalidades em `js/script.js`.

## 📋 Funcionalidades

- ✨ Navegação suave entre seções
- 🎯 Animações de entrada ao rolar a página
- 📝 Formulário de contato funcional
- 🔗 Links de navegação ativos destacados
- 📱 Menu responsivo

## 🌐 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👨‍💻 Autor

Seu Nome - [GitHub](https://github.com/seu-usuario)

---

⭐ Se este projeto foi útil, considere dar uma estrela!
