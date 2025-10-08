import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

// Rota de login
router.post('/', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Busca os usuários da API externa
    const response = await fetch(`${process.env.BACKURL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const users = await response.json();

    // Verifica se o usuário existe
    const user = users.find(u => u.email === email && u.senha === senha);

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { email: user.email, nome: user.nome },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({ token });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error.message);
    return res.status(500).json({ error: 'Erro interno ao autenticar' });
  }
});

export default router;