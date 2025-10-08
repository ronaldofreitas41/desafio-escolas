import { Router } from "express";
import { connection } from "../db.js";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM escolas');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar escolas:', error.message);
    res.status(500).json({ error: 'Erro ao buscar escolas' });
  }
});

// Rota POST para cadastrar nova Escola
router.post('/', async (req, res) => {
  const { NOMEDEP, DE, MUN, CD_IBGE, DISTR, COD_ESC, CODESCMEC, NOMESC, SITUACAO, TIPOESC, ENDESC, NUMESC, COMPLEND, CEP, BAIESC, ZONA, DS_LONGITUDE, DS_LATITUDE, CODVINC } = req.body;

  if (!NOMEDEP || !DE || !MUN || !CD_IBGE || !DISTR || !COD_ESC || !CODESCMEC || !NOMESC || !SITUACAO || !TIPOESC || !ENDESC || !NUMESC || !COMPLEND || !CEP || !BAIESC || !ZONA || !DS_LONGITUDE || !DS_LATITUDE || !CODVINC) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }


  try {
    const [result] = await connection.execute(
      'INSERT INTO escolas (NOMEDEP, DE,MUN,CD_IBGE,DISTR,COD_ESC,CODESCMEC,NOMESC,SITUACAO,TIPOESC,ENDESC,NUMESC,COMPLEND,CEP,BAIESC,ZONA,DS_LONGITUDE,DS_LATITUDE,CODVINC) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [NOMEDEP, DE, MUN, CD_IBGE, DISTR, COD_ESC, CODESCMEC, NOMESC, SITUACAO, TIPOESC, ENDESC, NUMESC, COMPLEND, CEP, BAIESC, ZONA, DS_LONGITUDE, DS_LATITUDE, CODVINC]
    );

    res.status(201).json({
      mensagem: 'Escola cadastrado com sucesso',
      id: result.insertId,
    });
  } catch (error) {
    console.error('Erro ao cadastrar Escolas:', error.message);
    res.status(500).json({ error: 'Erro ao cadastrar Escolas' });
  }
});

export default router;