import express from 'express';
import routes from './routes/index.js'; // importa o index das rotas

const app = express();
const port = 3000;

// rota raiz
app.get('/', (req, res) => {
  res.send('Opa, servidor rodando na porta 3000');
});

// usa o agrupamento de rotas
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
