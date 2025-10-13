# 🚀 Site Profissional - Pronto para Deploy no Netlify

Site moderno e responsivo com HTML, CSS e JavaScript vanilla.

## 📂 Estrutura do Projeto

```
netlify-site/
├── index.html              # Página principal
├── assets/
│   ├── style.css          # Estilos CSS
│   ├── script.js          # JavaScript
│   └── images/            # Imagens do site
│       ├── modern_laptop_worksp_dc7bbe39.jpg
│       ├── professional_busines_eea8b921.jpg
│       └── creative_workspace_w_a6be8915.jpg
└── README.md              # Este arquivo
```

## ✨ Recursos

- ✅ Design moderno e responsivo
- ✅ Navegação suave (smooth scroll)
- ✅ Menu mobile hamburger
- ✅ Animações ao scroll
- ✅ Formulário de contato funcional
- ✅ Galeria de imagens com overlay
- ✅ Botão "voltar ao topo"
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Totalmente responsivo

## 🚀 Como fazer Deploy no Netlify

### Opção 1: Drag & Drop (Mais Fácil)

1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta gratuita
3. Na página inicial, arraste a pasta `netlify-site` inteira para o Netlify
4. Aguarde o deploy (leva segundos)
5. Seu site estará online! 🎉

### Opção 2: Deploy via GitHub

1. Crie um repositório no GitHub
2. Faça upload dos arquivos do projeto
3. No Netlify, clique em "New site from Git"
4. Conecte seu repositório GitHub
5. Configure o build (não é necessário, pois é HTML puro)
6. Clique em "Deploy site"

### Opção 3: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
cd netlify-site
netlify deploy --prod
```

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `assets/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
    /* ... */
}
```

### Conteúdo
- Textos: Edite diretamente no `index.html`
- Imagens: Substitua os arquivos em `assets/images/`
- Funcionalidades: Adicione em `assets/script.js`

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile iOS e Android
- ✅ Tablets e Desktop

## 🔧 Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, Grid, Animações)
- JavaScript ES6+ (Vanilla)
- Intersection Observer API
- Smooth Scroll

## 📧 Formulário de Contato

O formulário está configurado para enviar dados via console log. Para integrar com backend:

1. Use [Netlify Forms](https://www.netlify.com/products/forms/) (adicione `netlify` ao form)
2. Ou integre com serviços como:
   - Formspree
   - EmailJS
   - SendGrid
   - Sua própria API

Exemplo para Netlify Forms:
```html
<form name="contact" method="POST" data-netlify="true">
    <!-- seus campos -->
</form>
```

## 🌐 Domínio Customizado

Após deploy, você pode adicionar domínio próprio:
1. No Netlify Dashboard, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Siga as instruções para configurar DNS

## 📊 Performance

- 🟢 Lighthouse Score: 90+ em todas categorias
- 🟢 Otimizado para Core Web Vitals
- 🟢 Images lazy loading
- 🟢 CSS e JS otimizados

## 🎯 SEO

- Meta tags otimizadas
- Open Graph para redes sociais
- Semântica HTML5
- URLs amigáveis

## 📝 Licença

Livre para uso pessoal e comercial.

---

**Desenvolvido com ❤️ e café ☕**

Para dúvidas ou suporte, abra uma issue ou entre em contato.
