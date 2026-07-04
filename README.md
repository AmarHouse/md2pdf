# MD2EPUB Premium

🚀 Sistema premium de conversão de Markdown para EPUB e PDF.

## 📋 Características

- ✨ Interface moderna e intuitiva
- 📱 Totalmente responsivo
- 🌙 Modo escuro
- 🌐 Suporte multi-idioma (PT-BR, EN)
- 💾 Armazenamento local com localStorage
- ♿ Acessível
- ⚡ Rápido e eficiente

## 🎨 Tecnologias

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript Vanilla (módulos)
- LocalStorage API

## 🚀 Deploy

### Cloudflare Pages

1. Push do código para GitHub:
```bash
git push origin main
```

2. Conecte seu repositório no Cloudflare Pages:
   - Vá para `https://pages.cloudflare.com/`
   - Selecione seu repositório GitHub
   - Build command: `echo 'Static site'`
   - Build output directory: `public`

### Alternativa: Vercel

1. Conecte seu repositório no Vercel
2. Framework preset: `Other`
3. Build command: deixe em branco
4. Output directory: `public`

## 📂 Estrutura do Projeto

```
md2pdf/
├── public/                    # Arquivos estáticos para produção
│   ├── index.html            # Página principal
│   ├── 404.html              # Página de erro
│   ├── css/                  # Estilos
│   │   ├── main.css
│   │   ├── modals.css
│   │   └── print.css
│   └── js/                   # Scripts
│       ├── storage.js        # Gerenciamento de localStorage
│       ├── preview.js        # Preview do arquivo
│       ├── epub-generator.js # Gerador EPUB
│       ├── pdf-generator.js  # Gerador PDF
│       ├── themes.js         # Gerenciamento de temas
│       ├── theme-editor.js   # Editor de temas
│       ├── pix.js            # Integração PIX
│       └── i18n.js           # Internacionalização
├── wrangler.toml             # Configuração Cloudflare
├── .gitignore                # Arquivos ignorados
└── README.md                 # Este arquivo
```

## 🛠️ Desenvolvimento

### Requisitos

- Node.js 16+
- Git

### Setup Local

```bash
# Clonar repositório
git clone https://github.com/AmarHouse/md2pdf.git
cd md2pdf

# Servir com servidor local (Python)
python -m http.server 8000 --directory public

# Ou com Node.js
npx serve public
```

Acesse `http://localhost:8000`

## 📝 Como Usar

1. Abra a aplicação
2. Carregue um arquivo Markdown
3. Visualize o conteúdo
4. Escolha o formato de exportação (EPUB ou PDF)
5. Baixe seu arquivo convertido

## 🔧 Configuração de Temas

Edite as variáveis CSS em `public/css/main.css`:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... mais cores ... */
}
```

## 🌐 Internacionalização

Adições novas traduções em `public/js/i18n.js`:

```javascript
translations: {
    'es': {
        'title': 'MD2EPUB Premium',
        // ... mais traduções ...
    }
}
```

## 💾 Dados Locais

A aplicação usa `localStorage` para:
- Guardar preferências do usuário
- Armazenar tema customizado
- Salvar último arquivo carregado

## 📄 Licença

MIT License - Veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [AmarHouse](https://github.com/AmarHouse)

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou faça um pull request.

---

**Acesse a aplicação ao vivo em:** [seu-dominio.pages.dev](https://seu-dominio.pages.dev)
