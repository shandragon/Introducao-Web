const express = require('express');
const fs = require('fs');

const app = express();
const arquivo = 'jogos.db';

// Realiza um parse do body para uma estrutura JSON
app.use(express.json());

app.listen(3000, () => {
  console.log('API de jogo em execução na porta 3000.');
  console.log('Acesse a url http://localhost:3000');

  fs.access(arquivo, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`${arquivo} não existe. Criando arquivo...`);
      let jogosIniciais = [
        { id: 1, nome: "The Legend of Zelda: Ocarina of Time", ano: 1998, categoria: "RPG" },
        { id: 2, nome: "Super Mario World", ano: 1990, categoria: "Plataforma" },
        { id: 3, nome: "Age of Empires II", ano: 1999, categoria: "Estratégia" },
        { id: 4, nome: "Dark Souls III", ano: 2016, categoria: "RPG" },
        { id: 5, nome: "The Witcher 3", ano: 2015, categoria: "RPG" },
        { id: 6, nome: "Street Fighter 2", ano: 1991, categoria: "Luta" },
        { id: 7, nome: "The Elder Scrolls V: Skyrim", ano: 2011, categoria: "RPG" },
        { id: 8, nome: "The Last of Us", ano: 2013, categoria: "Aventura" },
        { id: 9, nome: "God of War", ano: 2018, categoria: "Ação" },
        { id: 10, nome: "Half-Life 2", ano: 2004, categoria: "FPS" }
      ];
      fs.writeFileSync(arquivo, JSON.stringify(jogosIniciais));
    }
  });    
});

app.get('/', (req, res) => res.send('API Version 1.0.0 on-line!'));

app.get('/jogos', (req, res) => {
  let data = fs.readFileSync(arquivo);
  let jogos = JSON.parse(data);

  // Verificando se foi passado um parâmetro de busca
  if (req.query.categoria) {
    jogos = jogos.filter(jogo => jogo.categoria.toLowerCase().includes(req.query.categoria.toLowerCase()));
  }

  res.send(jogos);
});

app.get('/jogos/:id', (req, res) => {
  let data = fs.readFileSync(arquivo);
  let jogos = JSON.parse(data);
  let jogo = jogos.find(jogo => jogo.id == req.params.id);

  if (jogo) {
    res.send(jogo);
  } else {
    res.status(404).send('Jogo não encontrado.');
  }
});

app.post('/jogos', (req, res) => {
  let data = fs.readFileSync(arquivo);
  let jogos = JSON.parse(data);
  let novoJogo = req.body;

  novoJogo.id = jogos.length + 1;
  jogos.push(novoJogo);

  fs.writeFileSync(arquivo, JSON.stringify(jogos));
  res.status(201).send(novoJogo);
});