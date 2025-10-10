import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users');
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
    const [result] = await pool.execute(
      'INSERT INTO users (nome, email, senha, cpf, telefone) VALUES (?, ?, ?, ?, ?)',
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

router.delete('/', async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const [result] = await pool.execute(
      'DELETE FROM users WHERE id = ?',
      [id]
    );

    res.status(201).json({
      mensagem: 'Usuário deletado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error.message);
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
});

router.put('/', async (req, res) => {
  const { id,nome, email, senha, cpf, telefone } = req.body;

  if (!nome || !email || !senha || !id|| !cpf|| !telefone ) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const [result] = await pool.execute(
      'UPDATE users SET nome = ?, email = ?, senha = ?, cpf = ?, telefone = ? WHERE id = ?',
      [nome, email, senha, cpf, telefone, id]
    );

    res.status(201).json({
      mensagem: 'Usuário atualizado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

export default router;