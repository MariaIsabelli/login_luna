# 🐾 Luna Landing Page

Este projeto é uma landing page interativa inspirada na personagem **Luna** de Sailor Moon. A página apresenta um formulário de login com interações visuais divertidas e integrações com backend para autenticação de usuários.

## 🌟 Funcionalidades

- **Interatividade com animações**:
  - Os olhos da Luna se movem enquanto o usuário digita o e-mail.
  - A Lua muda de expressão caso ocorra um erro no formulário.
- **Formulário de Login**:
  - Validação de e-mail e senha com alertas visuais para entradas inválidas.
  - Integração com um servidor backend para autenticação.
- **Autenticação Backend**:
  - O backend em Node.js usa SQLite para gerenciar usuários.
  - Verificação de login e mensagens personalizadas para sucesso ou erro.

## 🚀 Tecnologias Utilizadas

### Frontend
- HTML5, CSS3, JavaScript (jQuery)
- Design responsivo com animações e interações.

### Backend
- **Node.js**: Framework para criação do servidor.
- **Express.js**: Middleware para rotas e manipulação de requests.
- **SQLite**: Banco de dados leve para armazenar usuários.

## 📂 Estrutura do Projeto

├── index.html # Estrutura principal da página ├── style.css # Estilo visual do projeto ├── luna.js # Lógica interativa da página ├── script.js # Integração com jQuery ├── server.js # Backend em Node.js ├── package.json # Gerenciador de dependências do Node.js └── README.md # Documentação do projeto


## 🛠️ Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 14 ou superior)
- **npm** (ou yarn) instalado

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/luna-landing-page.git
   cd luna-landing-page
2. Instale as dependências do backend:
   ```bash
   npm install
3. Inicie o servidor:
   ```bash
   node server.js
Abra o arquivo index.html no navegador ou configure um servidor local (exemplo: Live Server no VS Code).

Acesse o backend no navegador:

URL do servidor: http://localhost:3000
📑 Endpoints da API
POST /login
Descrição: Autentica o usuário com e-mail e senha.
Parâmetros:
json
Copiar
Editar
{
  "email": "usuario@exemplo.com",
  "password": "123456"
}
Respostas:
200: Login bem-sucedido.
json
Copiar
Editar
{ "message": "Login bem-sucedido" }
401: Credenciais inválidas.
json
Copiar
Editar
{ "error": "Email ou senha inválidos" }
## 🎨 Créditos
Design inspirado por Sailor Moon.
Animações feitas com criatividade e amor 💖.
## 📜 Licença
Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usá-lo e adaptá-lo como preferir!
