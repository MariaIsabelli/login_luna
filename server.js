const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(bodyParser.json());

// Conectando ao SQLite
const db = new sqlite3.Database(':memory:');

// Criando a tabela de usuários
db.serialize(() => {
  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);

  // Inserindo um usuário para teste
  db.run("INSERT INTO users (email, password) VALUES ('usuario@exemplo.com', '123456')");
});

// Endpoint para autenticação de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (row) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ error: 'Email ou senha inválidos' });
    }
  });
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
