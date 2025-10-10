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


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.execute('SELECT * FROM escolas WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Escola não encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Erro ao buscar escola por ID:', error.message);
    res.status(500).json({ error: 'Erro ao buscar escola por ID' });
  }
});


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
      mensagem: 'Escola cadastrada com sucesso',
      id: result.insertId,
    });
  } catch (error) {
    console.error('Erro ao cadastrar escola:', error.message);
    res.status(500).json({ error: 'Erro ao cadastrar escola' });
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID é obrigatório para deletar' });
  }

  try {
    const [result] = await pool.execute('DELETE FROM escolas WHERE id = ?', [id]);

    res.status(200).json({ mensagem: 'Escola deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar escola:', error.message);
    res.status(500).json({ error: 'Erro ao deletar escola' });
  }
});

router.put('/', async (req, res) => {
  const { NOMEDEP, DE, MUN, CD_IBGE, DISTR, COD_ESC, CODESCMEC, NOMESC, SITUACAO, TIPOESC, ENDESC, NUMESC, COMPLEND, CEP, BAIESC, ZONA, DS_LONGITUDE, DS_LATITUDE, CODVINC, id } = req.body;

  if (!NOMEDEP || !DE || !MUN || !CD_IBGE || !DISTR || !COD_ESC || !CODESCMEC || !NOMESC || !SITUACAO || !TIPOESC || !ENDESC || !NUMESC || !COMPLEND || !CEP || !BAIESC || !ZONA || !DS_LONGITUDE || !DS_LATITUDE || !CODVINC || !id) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios para atualização' });
  }

  try {
    const [result] = await pool.execute(
      `UPDATE escolas SET NOMEDEP = ?, DE = ?, MUN = ?, CD_IBGE = ?, DISTR = ?, COD_ESC = ?, CODESCMEC = ?, NOMESC = ?, SITUACAO = ?, TIPOESC = ?, ENDESC = ?, NUMESC = ?, COMPLEND = ?, CEP = ?, BAIESC = ?, ZONA = ?, DS_LONGITUDE = ?, DS_LATITUDE = ?, CODVINC = ? 
  WHERE id = ?`,
      [NOMEDEP, DE, MUN, CD_IBGE, DISTR, COD_ESC, CODESCMEC, NOMESC, SITUACAO, TIPOESC, ENDESC, NUMESC, COMPLEND, CEP, BAIESC, ZONA, DS_LONGITUDE, DS_LATITUDE, CODVINC, id]
    );

    res.status(200).json({ mensagem: 'Escola atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar escola:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar escola' });
  }
});

export default router;