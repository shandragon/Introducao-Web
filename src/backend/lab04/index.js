const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
  console.log('Acesse a url http://localhost:3000');
});

app.get('/', (req, res) => res.send('Servidor rodando, tudo ok!'));

app.get('/jogos', (req, res) => {
    let jogos = [
        { nome: "The Legend of Zelda: Ocarina of Time", ano: 1998, categoria: "RPG" },
        { nome: "Super Mario World", ano: 1990, categoria: "Plataforma" },
        { nome: "Age of Empires II", ano: 1999, categoria: "Estratégia" },
        { nome: "Dark Souls III", ano: 2016, categoria: "RPG" },
        { nome: "The Witcher 3", ano: 2015, categoria: "RPG" },
        { nome: "Street Fighter 2", ano: 1991, categoria: "Luta" },
        { nome: "The Elder Scrolls V: Skyrim", ano: 2011, categoria: "RPG" },
        { nome: "The Last of Us", ano: 2013, categoria: "Aventura" },
        { nome: "God of War", ano: 2018, categoria: "Ação" },
        { nome: "Half-Life 2", ano: 2004, categoria: "FPS" }
    ];
    
    res.send(jogos);
});