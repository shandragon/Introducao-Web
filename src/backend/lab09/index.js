const express = require('express');
const JogoController = require('./controllers/JogoController');
const EmpresaController = require('./controllers/EmpresaController');

const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

// Realiza um parse do body para uma estrutura JSON
app.use(express.json());

app.listen(APP_PORT, '0.0.0.0', () => {
  console.log(`API de jogo em execução na porta ${APP_PORT}.`);
  console.log(`Acesse a url http://localhost:${APP_PORT}`);


});

app.get('/', (req, res) => res.send('API Version 1.2.0 on-line!'));

app.get('/empresas', EmpresaController.index);
app.get('/empresas/:id', EmpresaController.show);

app.get('/jogos', JogoController.index);
app.get('/jogos/:id', JogoController.show);
app.post('/jogos', JogoController.create);
app.put('/jogos/:id', JogoController.update);
app.delete('/jogos/:id', JogoController.delete);