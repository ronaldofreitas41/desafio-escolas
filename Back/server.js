import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// rota raiz
app.get('/', (req, res) => {
  res.send(`Opa, servidor rodando na porta ${port}`);
});

// usa o agrupamento de rotas
app.use('/', routes);

// função principal para iniciar o servidor
const startServer = async () => {
  try {
    const pool = await mysql.createPool({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    console.log('✅ Conectado ao MySQL com sucesso!');

    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar ao MySQL:', error.message);
  }
};

startServer();