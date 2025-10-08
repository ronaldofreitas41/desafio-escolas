import { Router } from "express";
import { connection } from "../db.js";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM escolas');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error.message);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Rota POST para cadastrar novo usuário
router.post('/', async (req, res) => {
  const { nome, email, senha, cpf, telefone } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const [result] = await connection.execute(
      'INSERT INTO escolas (nome, email, senha, cpf, telefone) VALUES (?, ?, ?, ?, ?)',
      [nome, email, senha, cpf, telefone]
    );

    res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso',
      id: result.insertId,
    });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

export default router;