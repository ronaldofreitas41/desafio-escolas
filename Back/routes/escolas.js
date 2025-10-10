import { Router } from "express"
import { pool } from "../db.js"

const router = Router()

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM escolas")
    res.json(rows)
  } catch (error) {
    console.error("Erro ao buscar escolas:", error.message)
    res.status(500).json({ error: "Erro ao buscar escolas" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const [rows] = await pool.execute("SELECT * FROM escolas WHERE id = ?", [id])

    if (rows.length === 0) {
      return res.status(404).json({ error: "Escola não encontrada" })
    }

    res.json(rows[0])
  } catch (error) {
    console.error("Erro ao buscar escola por ID:", error.message)
    res.status(500).json({ error: "Erro ao buscar escola por ID" })
  }
})

router.post("/", async (req, res) => {
  const {
    NOMEDEP,
    DE,
    MUN,
    DISTR,
    CODESC,
    NOMESC,
    TIPOESC,
    TIPOESC_DESC,
    SITUACAO,
    SALAS_AULA,
    SALAS_ED_INF,
    SALAS_ED_ESP,
    SALAS_ED_ART,
    SALA_RECURSO,
    TOT_SALAS_AULA,
    AUDITORIO,
    ANFITEATRO,
    TEATRO,
    CANTINA,
    COPA,
    COZINHA,
    REFEITORIO,
    DEPOSITO_ALIMENTOS,
    DESPENSA,
    TOT_DESPENSA,
    SALA_LEITURA,
    BIBLIOTECA,
    TOT_SALA_LEITURA,
    QUADRA_COBERTA,
    QUADRA_DESCOBERTA,
    GINASIO,
    TOT_QUADRA,
    QUADRA_AREIA,
    QUADRA_GRAMA,
    CAMPO_FUTEBOL,
    GABINETE_DENTARIO,
    CONSULTORIO_MEDICO,
    ENFERMARIA,
    AMBULATORIO,
    ALMOXARIFADO,
    ARQUIVO,
    REPROGRAFIA,
    SALA_GREMIO,
    DIRETORIA,
    VICEDIRETORIA,
    SALA_PROF,
    SECRETARIA,
    SALA_ORIENT_ED,
    SALA_COORD_PEDAG,
    PATIO_COBERTO,
    PATIO_DESCOBERTO,
    ZELADORIA,
    VESTIARIO_FEM,
    VESTIARIO_MASC,
    TOT_VESTIARIO,
    VIDEOTECA,
    SALA_TV,
    LAB_INFO,
    LAB_CIENCIAS,
    LAB_FISICA,
    LAB_QUIMICA,
    LAB_BIOLOGIA,
    LAB_CIENCIA_FISICA_BIOLOGICA,
    TOT_LAB_CIENCIA,
    LAB_LINGUAS,
    LAB_MULTIUSO,
    OFICINA,
    PLAYGROUND,
    DORMITORIO,
    BERCARIO,
    SANITARIO_ADEQ_PRE,
    SANITARIO_ADEQ_PRE_FEM,
    SANITARIO_ADEQ_PRE_MASC,
    SANITARIO_ADEQ_DEF,
    SANITARIO_ADEQ_DEF_MASC,
    SANITARIO_AL_MASC,
    SANITARIO_AL_FEM,
    TOT_SANITARIO_AL,
    SANITARIO_FUNC_FEM,
    SANITARIO_FUNC_MASC,
    TOT_SANITARIO_FUNC,
    DEPEND_ADEQ_DEF,
    SALA_ED_FISICA,
    PISCINA,
    PORTARIA,
    SALA_PROG_ESC_FAMILIA,
    BRINQUEDOTECA,
    FRALDARIO,
    LACTARIO,
    LAVANDERIA,
    SOLARIO,
    SALA_ESPERA,
    SALA_INSPETOR,
    SALA_REUNIAO,
    TESOURARIA,
    SALA_REFORCO,
    SALA_DIRETOR_TECNICO,
    GARAGEM_ONIBUS,
    SALA_FISIOTERAPIA,
    SALA_PSICOLOGIA,
    SALA_FONOAUDIOLOGIA,
    SALA_EVENTOS,
    SALA_ASSIST_SOCIAL,
    SALA_TERAPIA_EDUC,
    ABATEDOURO,
    ALOJAMENTO_FEM,
    ALOJAMENTO_MASC,
    TOT_ALOJAMENTO,
    AREA_SERVICO,
    BAZAR,
    CASA_MAQUINA,
    CASA_FUNC,
    CHURRASQUEIRA,
    DEPOSITOS_CEREAIS,
    ELEVADOR,
    ESTACIONAMENTO,
    ESTUFA,
    GALPAO_AVES_CORTE,
    GALPAO_AVES_POSTURA,
    GALPAO_BOVINOS_LEITE,
    GALPAO_CUNICULTURA,
    GALPAO_MAQ_AGRICOLA,
    GALPAO_OVINOS_CAPRINOS,
    GALPAO_SUINO,
    GRAFICA,
    HORTA,
    LAB_DIDATICA,
    LAB_JUNIOR,
    LAB_ENFERMAGEM,
    LAB_ESTETICA,
    LAB_PSICOPEDAGOGIA,
    LAB_TURISMO,
    LAVATORIO,
    MANGUEIRA,
    MINHOCARIO,
    PACKING_HOUSE,
    POMAR,
    PSICULTURA,
    RECEPCAO,
    SALA_ATENDIMENTO,
    SALA_ATEND_PSICOLOGICO,
    SALA_AUX_COORDENACAO,
    SALA_DADOS,
    SALA_DEP_PESSOAL,
    SALA_ED_RELIGIOSA,
    SALA_ENERGIA_ELETRICA,
    SALA_ENTRETENIMENTO,
    SALA_ESTAGIO,
    SALA_GINASTICA,
    SALA_INSUMO_AGRICOLA,
    SALA_INSUMO_VETERINARIO,
    SALA_MARKETING,
    SALA_MATRICULA,
    SALA_MUSICA,
    SALA_POS_GRADUACAO,
    SALA_ORDENHA,
    SALA_PROC_PROD_AGROPECUARIOS,
    SALA_SEGURANCA,
    SALA_TELEFONIA,
    SALA_FINANCEIRO,
    SALA_PASTORAL,
    SALA_RESERV_AGUA,
    SERVIDOR,
    SILO,
    VARANDA,
    VIVEIRO,
    SALA_REORG_NEURO,
    SALA_TERAPIA_OCUP,
    SALA_SERIGRAFIA,
    SALA_MARCENARIA,
    QUIOSQUE,
  } = req.body

  if (!NOMEDEP || !NOMESC) {
    return res.status(400).json({ error: "NOMEDEP e NOMESC são obrigatórios" })
  }

  try {
    const fields = Object.keys(req.body).join(", ")
    const placeholders = Object.keys(req.body)
      .map(() => "?")
      .join(", ")
    const values = Object.values(req.body)

    const [result] = await pool.execute(`INSERT INTO escolas (${fields}) VALUES (${placeholders})`, values)

    res.status(201).json({
      mensagem: "Escola cadastrada com sucesso",
      id: result.insertId,
    })
  } catch (error) {
    console.error("Erro ao cadastrar escola:", error.message)
    res.status(500).json({ error: "Erro ao cadastrar escola" })
  }
})

router.delete("/", async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({ error: "ID é obrigatório para deletar" })
  }

  try {
    const [result] = await pool.execute("DELETE FROM escolas WHERE id = ?", [id])

    res.status(200).json({ mensagem: "Escola deletada com sucesso" })
  } catch (error) {
    console.error("Erro ao deletar escola:", error.message)
    res.status(500).json({ error: "Erro ao deletar escola" })
  }
})

router.put("/", async (req, res) => {
  const { id, ...updateData } = req.body

  if (!id) {
    return res.status(400).json({ error: "ID é obrigatório para atualização" })
  }

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: "Nenhum campo para atualizar" })
  }

  try {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ")
    const values = [...Object.values(updateData), id]

    const [result] = await pool.execute(`UPDATE escolas SET ${setClause} WHERE id = ?`, values)

    res.status(200).json({ mensagem: "Escola atualizada com sucesso" })
  } catch (error) {
    console.error("Erro ao atualizar escola:", error.message)
    res.status(500).json({ error: "Erro ao atualizar escola" })
  }
})

export default router
