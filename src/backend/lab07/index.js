const express = require('express');
const JogoDAO = require('./daos/JogoDAO');
const EmpresaDAO = require('./daos/EmpresaDAO');

const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

// Realiza um parse do body para uma estrutura JSON
app.use(express.json());

app.listen(APP_PORT, () => {
  console.log(`API de jogo em execução na porta ${APP_PORT}.`);
  console.log(`Acesse a url http://localhost:${APP_PORT}`);


});

app.get('/', (req, res) => res.send('API Version 1.2.0 on-line!'));

app.get('/empresas', (req, res) => {
  EmpresaDAO.findAll(req.query.nome, (err, empresas) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(empresas);
  });
});

app.get('/empresas/:id', (req, res) => {
  const id = req.params.id;
  EmpresaDAO.findById(id, (err, empresa) => {
    if (err) return res.status(500).json({ error: err.message });
    if (empresa) {
      res.json(empresa);
    } else {
      res.status(404).json('Empresa não encontrada.');
    }
  });
});

app.get('/jogos', (req, res) => {
  JogoDAO.findAll(req.query.categoria, (err, jogos) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(jogos);
  });
});

app.get('/jogos/:id', (req, res) => {
  const id = req.params.id;
  JogoDAO.findById(id, (err, jogo) => {
    if (err) return res.status(500).json({ error: err.message });
    if (jogo) {
      res.json(jogo);
    } else {
      res.status(404).json('Jogo não encontrado.');
    }
  });
});

app.post('/jogos', (req, res) => {
  const { nome, categoria, ano, fkEmpresa } = req.body;
  if (!nome && !categoria && !ano && !fkEmpresa) return res.status(400).json({ error: "Campos nome, categoria e ano são obrigatórios" });

  JogoDAO.create(nome, categoria, ano, fkEmpresa, (err, jogo) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(jogo);
  });
});

app.put('/jogos/:id', (req, res) => {
  const { nome, categoria, ano } = req.body;
  const id = req.params.id;

  JogoDAO.update(id, nome, categoria, ano, (err, jogo) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!jogo) return res.status(404).json({ error: "Jogo não encontrado" });
    res.json(jogo);
  });
});

app.delete('/jogos/:id', (req, res) => {
  const id = req.params.id;

  JogoDAO.delete(id, (err, jogo) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!jogo) return res.status(404).json({ error: "Jogo não encontrado." });
    res.json({ message: "Jogo removido com sucesso." });
  });
});