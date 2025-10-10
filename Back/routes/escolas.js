import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM escolas');
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
    const [result] = await pool.execute(
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

router.delete('/', async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }


  try {
    const [result] = await pool.execute(
      'DELETE FROM escolas WHERE id = ?',
      [id]
    );

    res.status(201).json({
      mensagem: 'Escola Deletada com sucesso',
    });
  } catch (error) {
    console.error('Erro ao Deletar Escolas:', error.message);
    res.status(500).json({ error: 'Erro ao Deletar Escolas' });
  }
});

router.put('/', async (req, res) => {
  const { NOMEDEP, DE, MUN, CD_IBGE, DISTR, COD_ESC, CODESCMEC, NOMESC, SITUACAO, TIPOESC, ENDESC, NUMESC, COMPLEND, CEP, BAIESC, ZONA, DS_LONGITUDE, DS_LATITUDE, CODVINC, id } = req.body;

  if (!NOMEDEP || !DE || !MUN || !CD_IBGE || !DISTR || !COD_ESC || !CODESCMEC || !NOMESC || !SITUACAO || !TIPOESC || !ENDESC || !NUMESC || !COMPLEND || !CEP || !BAIESC || !ZONA || !DS_LONGITUDE || !DS_LATITUDE || !CODVINC || !id) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }


  try {
    const [result] = await pool.execute(
      `UPDATE escolas SET NOMEDEP = ?, DE = ?, MUN = ?, CD_IBGE = ?, DISTR = ?, COD_ESC = ?, CODESCMEC = ?, NOMESC = ?, SITUACAO = ?, TIPOESC = ?, ENDESC = ?, NUMESC = ?, COMPLEND = ?, CEP = ?, BAIESC = ?, ZONA = ?, DS_LONGITUDE = ?, DS_LATITUDE = ?, CODVINC = ? 
  WHERE id = ?`,
      [NOMEDEP, DE, MUN, CD_IBGE, DISTR, COD_ESC, CODESCMEC, NOMESC, SITUACAO, TIPOESC, ENDESC, NUMESC, COMPLEND, CEP, BAIESC, ZONA, DS_LONGITUDE, DS_LATITUDE, CODVINC, id]
    );


    res.status(201).json({
      mensagem: 'Escola Atualizada com sucesso',
    });
  } catch (error) {
    console.error('Erro ao Atualizar Escolas:', error.message);
    res.status(500).json({ error: 'Erro ao Atualizar Escolas' });
  }
});

export default router;