# DuarteX Solutions — Website & API

Landing page interativa com experiência 3D em Three.js, calculadora de perda de vendas em tempo real, suporte bilíngue (PT/EN) e integração de backend para captura de leads.

## 📁 Estrutura do Projeto

```text
duartex-solutions/
├── index.html            # Estrutura HTML semântica
├── css/
│   └── styles.css        # Estilos, variáveis e temas claro/escuro
├── js/
│   ├── pipeline3d.js     # Cena 3D interativa em Three.js e animação do fluxo
│   ├── calculator.js     # Lógica matemática da calculadora de oportunidade
│   └── main.js           # Gerenciamento de idioma, BI e submissão de formulário
├── server.js             # API Express para recepção e webhook de leads
├── package.json          # Dependências do backend
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Instruções de execução e deploy
```

---

## 🚀 Como Executar

### 1. Visualizar o Frontend Localmente
Você pode simplesmente abrir o `index.html` em qualquer navegador ou usar a extensão **Live Server** no VS Code.

### 2. Rodar a API Backend (Node.js)
```bash
npm install
npm start
```
A API iniciará na porta `3000` com os endpoints:
- `GET /health`: Diagnóstico de status do serviço
- `POST /api/leads`: Envio de novos leads

---

## 🌐 Deploy Recomendado

- **Frontend (Estático):** Cloudflare Pages, Netlify ou Vercel (basta apontar para a raiz do repositório).
- **Backend (API):** Render, Railway, Fly.io ou VPS.
