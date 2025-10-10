"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Alert, AlertDescription } from "./ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"
import type { Escola } from "../utils/types"

export function EscolaFormCreate() {
  const router = useRouter()
  const [formData, setFormData] = useState<Partial<Escola>>({
    NOMEDEP: "",
    DE: "",
    MUN: "",
    DISTR: "",
    CODESC: "",
    NOMESC: "",
    TIPOESC: 0,
    TIPOESC_DESC: "",
    SITUACAO: "",
    SALAS_AULA: 0,
    SALAS_ED_INF: 0,
    SALAS_ED_ESP: 0,
    SALAS_ED_ART: 0,
    SALA_RECURSO: 0,
    TOT_SALAS_AULA: 0,
    AUDITORIO: 0,
    ANFITEATRO: 0,
    TEATRO: 0,
    CANTINA: 0,
    COPA: 0,
    COZINHA: 0,
    REFEITORIO: 0,
    DEPOSITO_ALIMENTOS: 0,
    DESPENSA: 0,
    TOT_DESPENSA: 0,
    SALA_LEITURA: 0,
    BIBLIOTECA: 0,
    TOT_SALA_LEITURA: 0,
    QUADRA_COBERTA: 0,
    QUADRA_DESCOBERTA: 0,
    GINASIO: 0,
    TOT_QUADRA: 0,
    QUADRA_AREIA: 0,
    QUADRA_GRAMA: 0,
    CAMPO_FUTEBOL: 0,
    GABINETE_DENTARIO: 0,
    CONSULTORIO_MEDICO: 0,
    ENFERMARIA: 0,
    AMBULATORIO: 0,
    ALMOXARIFADO: 0,
    ARQUIVO: 0,
    REPROGRAFIA: 0,
    SALA_GREMIO: 0,
    DIRETORIA: 0,
    VICEDIRETORIA: 0,
    SALA_PROF: 0,
    SECRETARIA: 0,
    SALA_ORIENT_ED: 0,
    SALA_COORD_PEDAG: 0,
    PATIO_COBERTO: 0,
    PATIO_DESCOBERTO: 0,
    ZELADORIA: 0,
    VESTIARIO_FEM: 0,
    VESTIARIO_MASC: 0,
    TOT_VESTIARIO: 0,
    VIDEOTECA: 0,
    SALA_TV: 0,
    LAB_INFO: 0,
    LAB_CIENCIAS: 0,
    LAB_FISICA: 0,
    LAB_QUIMICA: 0,
    LAB_BIOLOGIA: 0,
    LAB_CIENCIA_FISICA_BIOLOGICA: 0,
    TOT_LAB_CIENCIA: 0,
    LAB_LINGUAS: 0,
    LAB_MULTIUSO: 0,
    OFICINA: 0,
    PLAYGROUND: 0,
    DORMITORIO: 0,
    BERCARIO: 0,
    SANITARIO_ADEQ_PRE: 0,
    SANITARIO_ADEQ_PRE_FEM: 0,
    SANITARIO_ADEQ_PRE_MASC: 0,
    SANITARIO_ADEQ_DEF: 0,
    SANITARIO_ADEQ_DEF_MASC: 0,
    SANITARIO_AL_MASC: 0,
    SANITARIO_AL_FEM: 0,
    TOT_SANITARIO_AL: 0,
    SANITARIO_FUNC_FEM: 0,
    SANITARIO_FUNC_MASC: 0,
    TOT_SANITARIO_FUNC: 0,
    DEPEND_ADEQ_DEF: 0,
    SALA_ED_FISICA: 0,
    PISCINA: 0,
    PORTARIA: 0,
    SALA_PROG_ESC_FAMILIA: 0,
    BRINQUEDOTECA: 0,
    FRALDARIO: 0,
    LACTARIO: 0,
    LAVANDERIA: 0,
    SOLARIO: 0,
    SALA_ESPERA: 0,
    SALA_INSPETOR: 0,
    SALA_REUNIAO: 0,
    TESOURARIA: 0,
    SALA_REFORCO: 0,
    SALA_DIRETOR_TECNICO: 0,
    GARAGEM_ONIBUS: 0,
    SALA_FISIOTERAPIA: 0,
    SALA_PSICOLOGIA: 0,
    SALA_FONOAUDIOLOGIA: 0,
    SALA_EVENTOS: 0,
    SALA_ASSIST_SOCIAL: 0,
    SALA_TERAPIA_EDUC: 0,
    ABATEDOURO: 0,
    ALOJAMENTO_FEM: 0,
    ALOJAMENTO_MASC: 0,
    TOT_ALOJAMENTO: 0,
    AREA_SERVICO: 0,
    BAZAR: 0,
    CASA_MAQUINA: 0,
    CASA_FUNC: 0,
    CHURRASQUEIRA: 0,
    DEPOSITOS_CEREAIS: 0,
    ELEVADOR: 0,
    ESTACIONAMENTO: 0,
    ESTUFA: 0,
    GALPAO_AVES_CORTE: 0,
    GALPAO_AVES_POSTURA: 0,
    GALPAO_BOVINOS_LEITE: 0,
    GALPAO_CUNICULTURA: 0,
    GALPAO_MAQ_AGRICOLA: 0,
    GALPAO_OVINOS_CAPRINOS: 0,
    GALPAO_SUINO: 0,
    GRAFICA: 0,
    HORTA: 0,
    LAB_DIDATICA: 0,
    LAB_JUNIOR: 0,
    LAB_ENFERMAGEM: 0,
    LAB_ESTETICA: 0,
    LAB_PSICOPEDAGOGIA: 0,
    LAB_TURISMO: 0,
    LAVATORIO: 0,
    MANGUEIRA: 0,
    MINHOCARIO: 0,
    PACKING_HOUSE: 0,
    POMAR: 0,
    PSICULTURA: 0,
    RECEPCAO: 0,
    SALA_ATENDIMENTO: 0,
    SALA_ATEND_PSICOLOGICO: 0,
    SALA_AUX_COORDENACAO: 0,
    SALA_DADOS: 0,
    SALA_DEP_PESSOAL: 0,
    SALA_ED_RELIGIOSA: 0,
    SALA_ENERGIA_ELETRICA: 0,
    SALA_ENTRETENIMENTO: 0,
    SALA_ESTAGIO: 0,
    SALA_GINASTICA: 0,
    SALA_INSUMO_AGRICOLA: 0,
    SALA_INSUMO_VETERINARIO: 0,
    SALA_MARKETING: 0,
    SALA_MATRICULA: 0,
    SALA_MUSICA: 0,
    SALA_POS_GRADUACAO: 0,
    SALA_ORDENHA: 0,
    SALA_PROC_PROD_AGROPECUARIOS: 0,
    SALA_SEGURANCA: 0,
    SALA_TELEFONIA: 0,
    SALA_FINANCEIRO: 0,
    SALA_PASTORAL: 0,
    SALA_RESERV_AGUA: 0,
    SERVIDOR: 0,
    SILO: 0,
    VARANDA: 0,
    VIVEIRO: 0,
    SALA_REORG_NEURO: 0,
    SALA_TERAPIA_OCUP: 0,
    SALA_SERIGRAFIA: 0,
    SALA_MARCENARIA: 0,
    QUIOSQUE: 0,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (field: keyof Escola, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setTimeout(() => router.push("/dashboard/escolas"), 1500)
      } else {
        setError("Erro ao criar escola")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao salvar escola. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Nova Escola</CardTitle>
        <CardDescription>Preencha os dados da nova escola</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500 bg-green-500/10 text-green-500">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>Escola salva com sucesso! Redirecionando...</AlertDescription>
            </Alert>
          )}

          {/* Informações Básicas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações Básicas</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="NOMEDEP">Nome da Rede de Ensino *</Label>
                <Input
                  id="NOMEDEP"
                  value={formData.NOMEDEP as string}
                  onChange={(e) => handleChange("NOMEDEP", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DE">Diretoria de Ensino</Label>
                <Input id="DE" value={formData.DE as string} onChange={(e) => handleChange("DE", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="MUN">Município</Label>
                <Input id="MUN" value={formData.MUN as string} onChange={(e) => handleChange("MUN", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DISTR">Distrito</Label>
                <Input
                  id="DISTR"
                  value={formData.DISTR as string}
                  onChange={(e) => handleChange("DISTR", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CODESC">Código da Escola</Label>
                <Input
                  id="CODESC"
                  value={formData.CODESC as string}
                  onChange={(e) => handleChange("CODESC", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="NOMESC">Nome da Escola *</Label>
                <Input
                  id="NOMESC"
                  value={formData.NOMESC as string}
                  onChange={(e) => handleChange("NOMESC", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TIPOESC">Tipo da Escola</Label>
                <Input
                  id="TIPOESC"
                  value={formData.TIPOESC}
                  onChange={(e) => handleChange("TIPOESC", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TIPOESC_DESC">Descrição do Tipo</Label>
                <Input
                  id="TIPOESC_DESC"
                  value={formData.TIPOESC_DESC as string}
                  onChange={(e) => handleChange("TIPOESC_DESC", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SITUACAO">Situação</Label>
                <Input
                  id="SITUACAO"
                  value={formData.SITUACAO as string}
                  onChange={(e) => handleChange("SITUACAO", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Salas de Aula */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Salas de Aula</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="SALAS_AULA">Salas de Aula</Label>
                <Input
                  id="SALAS_AULA"
                  type="number"
                  value={formData.SALAS_AULA as number}
                  onChange={(e) => handleChange("SALAS_AULA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALAS_ED_INF">Salas Ed. Infantil</Label>
                <Input
                  id="SALAS_ED_INF"
                  type="number"
                  value={formData.SALAS_ED_INF as number}
                  onChange={(e) => handleChange("SALAS_ED_INF", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALAS_ED_ESP">Salas Ed. Especial</Label>
                <Input
                  id="SALAS_ED_ESP"
                  type="number"
                  value={formData.SALAS_ED_ESP as number}
                  onChange={(e) => handleChange("SALAS_ED_ESP", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALAS_ED_ART">Salas Ed. Artística</Label>
                <Input
                  id="SALAS_ED_ART"
                  type="number"
                  value={formData.SALAS_ED_ART as number}
                  onChange={(e) => handleChange("SALAS_ED_ART", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_RECURSO">Sala de Recurso</Label>
                <Input
                  id="SALA_RECURSO"
                  type="number"
                  value={formData.SALA_RECURSO as number}
                  onChange={(e) => handleChange("SALA_RECURSO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_SALAS_AULA">Total de Salas</Label>
                <Input
                  id="TOT_SALAS_AULA"
                  type="number"
                  value={formData.TOT_SALAS_AULA as number}
                  onChange={(e) => handleChange("TOT_SALAS_AULA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Espaços Culturais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Espaços Culturais e Eventos</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="AUDITORIO">Auditório</Label>
                <Input
                  id="AUDITORIO"
                  type="number"
                  value={formData.AUDITORIO as number}
                  onChange={(e) => handleChange("AUDITORIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ANFITEATRO">Anfiteatro</Label>
                <Input
                  id="ANFITEATRO"
                  type="number"
                  value={formData.ANFITEATRO as number}
                  onChange={(e) => handleChange("ANFITEATRO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TEATRO">Teatro</Label>
                <Input
                  id="TEATRO"
                  type="number"
                  value={formData.TEATRO as number}
                  onChange={(e) => handleChange("TEATRO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Alimentação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Alimentação</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="CANTINA">Cantina</Label>
                <Input
                  id="CANTINA"
                  type="number"
                  value={formData.CANTINA as number}
                  onChange={(e) => handleChange("CANTINA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="COPA">Copa</Label>
                <Input
                  id="COPA"
                  type="number"
                  value={formData.COPA as number}
                  onChange={(e) => handleChange("COPA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="COZINHA">Cozinha</Label>
                <Input
                  id="COZINHA"
                  type="number"
                  value={formData.COZINHA as number}
                  onChange={(e) => handleChange("COZINHA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="REFEITORIO">Refeitório</Label>
                <Input
                  id="REFEITORIO"
                  type="number"
                  value={formData.REFEITORIO as number}
                  onChange={(e) => handleChange("REFEITORIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DEPOSITO_ALIMENTOS">Depósito Alimentos</Label>
                <Input
                  id="DEPOSITO_ALIMENTOS"
                  type="number"
                  value={formData.DEPOSITO_ALIMENTOS as number}
                  onChange={(e) => handleChange("DEPOSITO_ALIMENTOS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DESPENSA">Despensa</Label>
                <Input
                  id="DESPENSA"
                  type="number"
                  value={formData.DESPENSA as number}
                  onChange={(e) => handleChange("DESPENSA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_DESPENSA">Total Despensa</Label>
                <Input
                  id="TOT_DESPENSA"
                  type="number"
                  value={formData.TOT_DESPENSA as number}
                  onChange={(e) => handleChange("TOT_DESPENSA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Biblioteca e Leitura */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Biblioteca e Leitura</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="SALA_LEITURA">Sala de Leitura</Label>
                <Input
                  id="SALA_LEITURA"
                  type="number"
                  value={formData.SALA_LEITURA as number}
                  onChange={(e) => handleChange("SALA_LEITURA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="BIBLIOTECA">Biblioteca</Label>
                <Input
                  id="BIBLIOTECA"
                  type="number"
                  value={formData.BIBLIOTECA as number}
                  onChange={(e) => handleChange("BIBLIOTECA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_SALA_LEITURA">Total Sala Leitura</Label>
                <Input
                  id="TOT_SALA_LEITURA"
                  type="number"
                  value={formData.TOT_SALA_LEITURA as number}
                  onChange={(e) => handleChange("TOT_SALA_LEITURA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Esportes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Esportes</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="QUADRA_COBERTA">Quadra Coberta</Label>
                <Input
                  id="QUADRA_COBERTA"
                  type="number"
                  value={formData.QUADRA_COBERTA as number}
                  onChange={(e) => handleChange("QUADRA_COBERTA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="QUADRA_DESCOBERTA">Quadra Descoberta</Label>
                <Input
                  id="QUADRA_DESCOBERTA"
                  type="number"
                  value={formData.QUADRA_DESCOBERTA as number}
                  onChange={(e) => handleChange("QUADRA_DESCOBERTA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GINASIO">Ginásio</Label>
                <Input
                  id="GINASIO"
                  type="number"
                  value={formData.GINASIO as number}
                  onChange={(e) => handleChange("GINASIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_QUADRA">Total Quadras</Label>
                <Input
                  id="TOT_QUADRA"
                  type="number"
                  value={formData.TOT_QUADRA as number}
                  onChange={(e) => handleChange("TOT_QUADRA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="QUADRA_AREIA">Quadra de Areia</Label>
                <Input
                  id="QUADRA_AREIA"
                  type="number"
                  value={formData.QUADRA_AREIA as number}
                  onChange={(e) => handleChange("QUADRA_AREIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="QUADRA_GRAMA">Quadra de Grama</Label>
                <Input
                  id="QUADRA_GRAMA"
                  type="number"
                  value={formData.QUADRA_GRAMA as number}
                  onChange={(e) => handleChange("QUADRA_GRAMA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CAMPO_FUTEBOL">Campo de Futebol</Label>
                <Input
                  id="CAMPO_FUTEBOL"
                  type="number"
                  value={formData.CAMPO_FUTEBOL as number}
                  onChange={(e) => handleChange("CAMPO_FUTEBOL", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PISCINA">Piscina</Label>
                <Input
                  id="PISCINA"
                  type="number"
                  value={formData.PISCINA as number}
                  onChange={(e) => handleChange("PISCINA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ED_FISICA">Sala Ed. Física</Label>
                <Input
                  id="SALA_ED_FISICA"
                  type="number"
                  value={formData.SALA_ED_FISICA as number}
                  onChange={(e) => handleChange("SALA_ED_FISICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Saúde */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Saúde</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="GABINETE_DENTARIO">Gabinete Dentário</Label>
                <Input
                  id="GABINETE_DENTARIO"
                  type="number"
                  value={formData.GABINETE_DENTARIO as number}
                  onChange={(e) => handleChange("GABINETE_DENTARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CONSULTORIO_MEDICO">Consultório Médico</Label>
                <Input
                  id="CONSULTORIO_MEDICO"
                  type="number"
                  value={formData.CONSULTORIO_MEDICO as number}
                  onChange={(e) => handleChange("CONSULTORIO_MEDICO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ENFERMARIA">Enfermaria</Label>
                <Input
                  id="ENFERMARIA"
                  type="number"
                  value={formData.ENFERMARIA as number}
                  onChange={(e) => handleChange("ENFERMARIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="AMBULATORIO">Ambulatório</Label>
                <Input
                  id="AMBULATORIO"
                  type="number"
                  value={formData.AMBULATORIO as number}
                  onChange={(e) => handleChange("AMBULATORIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Administrativo */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Administrativo</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="ALMOXARIFADO">Almoxarifado</Label>
                <Input
                  id="ALMOXARIFADO"
                  type="number"
                  value={formData.ALMOXARIFADO as number}
                  onChange={(e) => handleChange("ALMOXARIFADO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ARQUIVO">Arquivo</Label>
                <Input
                  id="ARQUIVO"
                  type="number"
                  value={formData.ARQUIVO as number}
                  onChange={(e) => handleChange("ARQUIVO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="REPROGRAFIA">Reprografia</Label>
                <Input
                  id="REPROGRAFIA"
                  type="number"
                  value={formData.REPROGRAFIA as number}
                  onChange={(e) => handleChange("REPROGRAFIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_GREMIO">Sala Grêmio</Label>
                <Input
                  id="SALA_GREMIO"
                  type="number"
                  value={formData.SALA_GREMIO as number}
                  onChange={(e) => handleChange("SALA_GREMIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DIRETORIA">Diretoria</Label>
                <Input
                  id="DIRETORIA"
                  type="number"
                  value={formData.DIRETORIA as number}
                  onChange={(e) => handleChange("DIRETORIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="VICEDIRETORIA">Vice-Diretoria</Label>
                <Input
                  id="VICEDIRETORIA"
                  type="number"
                  value={formData.VICEDIRETORIA as number}
                  onChange={(e) => handleChange("VICEDIRETORIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_PROF">Sala Professores</Label>
                <Input
                  id="SALA_PROF"
                  type="number"
                  value={formData.SALA_PROF as number}
                  onChange={(e) => handleChange("SALA_PROF", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SECRETARIA">Secretaria</Label>
                <Input
                  id="SECRETARIA"
                  type="number"
                  value={formData.SECRETARIA as number}
                  onChange={(e) => handleChange("SECRETARIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ORIENT_ED">Sala Orient. Educacional</Label>
                <Input
                  id="SALA_ORIENT_ED"
                  type="number"
                  value={formData.SALA_ORIENT_ED as number}
                  onChange={(e) => handleChange("SALA_ORIENT_ED", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_COORD_PEDAG">Sala Coord. Pedagógica</Label>
                <Input
                  id="SALA_COORD_PEDAG"
                  type="number"
                  value={formData.SALA_COORD_PEDAG as number}
                  onChange={(e) => handleChange("SALA_COORD_PEDAG", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PORTARIA">Portaria</Label>
                <Input
                  id="PORTARIA"
                  type="number"
                  value={formData.PORTARIA as number}
                  onChange={(e) => handleChange("PORTARIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TESOURARIA">Tesouraria</Label>
                <Input
                  id="TESOURARIA"
                  type="number"
                  value={formData.TESOURARIA as number}
                  onChange={(e) => handleChange("TESOURARIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Áreas Comuns */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Áreas Comuns</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="PATIO_COBERTO">Pátio Coberto</Label>
                <Input
                  id="PATIO_COBERTO"
                  type="number"
                  value={formData.PATIO_COBERTO as number}
                  onChange={(e) => handleChange("PATIO_COBERTO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PATIO_DESCOBERTO">Pátio Descoberto</Label>
                <Input
                  id="PATIO_DESCOBERTO"
                  type="number"
                  value={formData.PATIO_DESCOBERTO as number}
                  onChange={(e) => handleChange("PATIO_DESCOBERTO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ZELADORIA">Zeladoria</Label>
                <Input
                  id="ZELADORIA"
                  type="number"
                  value={formData.ZELADORIA as number}
                  onChange={(e) => handleChange("ZELADORIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PLAYGROUND">Playground</Label>
                <Input
                  id="PLAYGROUND"
                  type="number"
                  value={formData.PLAYGROUND as number}
                  onChange={(e) => handleChange("PLAYGROUND", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Vestiários */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vestiários</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="VESTIARIO_FEM">Vestiário Feminino</Label>
                <Input
                  id="VESTIARIO_FEM"
                  type="number"
                  value={formData.VESTIARIO_FEM as number}
                  onChange={(e) => handleChange("VESTIARIO_FEM", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="VESTIARIO_MASC">Vestiário Masculino</Label>
                <Input
                  id="VESTIARIO_MASC"
                  type="number"
                  value={formData.VESTIARIO_MASC as number}
                  onChange={(e) => handleChange("VESTIARIO_MASC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_VESTIARIO">Total Vestiários</Label>
                <Input
                  id="TOT_VESTIARIO"
                  type="number"
                  value={formData.TOT_VESTIARIO as number}
                  onChange={(e) => handleChange("TOT_VESTIARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Tecnologia */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tecnologia</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="VIDEOTECA">Videoteca</Label>
                <Input
                  id="VIDEOTECA"
                  type="number"
                  value={formData.VIDEOTECA as number}
                  onChange={(e) => handleChange("VIDEOTECA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_TV">Sala de TV</Label>
                <Input
                  id="SALA_TV"
                  type="number"
                  value={formData.SALA_TV as number}
                  onChange={(e) => handleChange("SALA_TV", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_INFO">Lab. Informática</Label>
                <Input
                  id="LAB_INFO"
                  type="number"
                  value={formData.LAB_INFO as number}
                  onChange={(e) => handleChange("LAB_INFO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Laboratórios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Laboratórios</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="LAB_CIENCIAS">Lab. Ciências</Label>
                <Input
                  id="LAB_CIENCIAS"
                  type="number"
                  value={formData.LAB_CIENCIAS as number}
                  onChange={(e) => handleChange("LAB_CIENCIAS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_FISICA">Lab. Física</Label>
                <Input
                  id="LAB_FISICA"
                  type="number"
                  value={formData.LAB_FISICA as number}
                  onChange={(e) => handleChange("LAB_FISICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_QUIMICA">Lab. Química</Label>
                <Input
                  id="LAB_QUIMICA"
                  type="number"
                  value={formData.LAB_QUIMICA as number}
                  onChange={(e) => handleChange("LAB_QUIMICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_BIOLOGIA">Lab. Biologia</Label>
                <Input
                  id="LAB_BIOLOGIA"
                  type="number"
                  value={formData.LAB_BIOLOGIA as number}
                  onChange={(e) => handleChange("LAB_BIOLOGIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_CIENCIA_FISICA_BIOLOGICA">Lab. Ciên./Fís./Biol.</Label>
                <Input
                  id="LAB_CIENCIA_FISICA_BIOLOGICA"
                  type="number"
                  value={formData.LAB_CIENCIA_FISICA_BIOLOGICA as number}
                  onChange={(e) => handleChange("LAB_CIENCIA_FISICA_BIOLOGICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_LAB_CIENCIA">Total Lab. Ciências</Label>
                <Input
                  id="TOT_LAB_CIENCIA"
                  type="number"
                  value={formData.TOT_LAB_CIENCIA as number}
                  onChange={(e) => handleChange("TOT_LAB_CIENCIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_LINGUAS">Lab. Línguas</Label>
                <Input
                  id="LAB_LINGUAS"
                  type="number"
                  value={formData.LAB_LINGUAS as number}
                  onChange={(e) => handleChange("LAB_LINGUAS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_MULTIUSO">Lab. Multiuso</Label>
                <Input
                  id="LAB_MULTIUSO"
                  type="number"
                  value={formData.LAB_MULTIUSO as number}
                  onChange={(e) => handleChange("LAB_MULTIUSO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_DIDATICA">Lab. Didática</Label>
                <Input
                  id="LAB_DIDATICA"
                  type="number"
                  value={formData.LAB_DIDATICA as number}
                  onChange={(e) => handleChange("LAB_DIDATICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_JUNIOR">Lab. Júnior</Label>
                <Input
                  id="LAB_JUNIOR"
                  type="number"
                  value={formData.LAB_JUNIOR as number}
                  onChange={(e) => handleChange("LAB_JUNIOR", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_ENFERMAGEM">Lab. Enfermagem</Label>
                <Input
                  id="LAB_ENFERMAGEM"
                  type="number"
                  value={formData.LAB_ENFERMAGEM as number}
                  onChange={(e) => handleChange("LAB_ENFERMAGEM", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_ESTETICA">Lab. Estética</Label>
                <Input
                  id="LAB_ESTETICA"
                  type="number"
                  value={formData.LAB_ESTETICA as number}
                  onChange={(e) => handleChange("LAB_ESTETICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_PSICOPEDAGOGIA">Lab. Psicopedagogia</Label>
                <Input
                  id="LAB_PSICOPEDAGOGIA"
                  type="number"
                  value={formData.LAB_PSICOPEDAGOGIA as number}
                  onChange={(e) => handleChange("LAB_PSICOPEDAGOGIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAB_TURISMO">Lab. Turismo</Label>
                <Input
                  id="LAB_TURISMO"
                  type="number"
                  value={formData.LAB_TURISMO as number}
                  onChange={(e) => handleChange("LAB_TURISMO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Oficinas e Ateliês */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Oficinas e Ateliês</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="OFICINA">Oficina</Label>
                <Input
                  id="OFICINA"
                  type="number"
                  value={formData.OFICINA as number}
                  onChange={(e) => handleChange("OFICINA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_SERIGRAFIA">Sala Serigrafia</Label>
                <Input
                  id="SALA_SERIGRAFIA"
                  type="number"
                  value={formData.SALA_SERIGRAFIA as number}
                  onChange={(e) => handleChange("SALA_SERIGRAFIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_MARCENARIA">Sala Marcenaria</Label>
                <Input
                  id="SALA_MARCENARIA"
                  type="number"
                  value={formData.SALA_MARCENARIA as number}
                  onChange={(e) => handleChange("SALA_MARCENARIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GRAFICA">Gráfica</Label>
                <Input
                  id="GRAFICA"
                  type="number"
                  value={formData.GRAFICA as number}
                  onChange={(e) => handleChange("GRAFICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Educação Infantil */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Educação Infantil</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="DORMITORIO">Dormitório</Label>
                <Input
                  id="DORMITORIO"
                  type="number"
                  value={formData.DORMITORIO as number}
                  onChange={(e) => handleChange("DORMITORIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="BERCARIO">Berçário</Label>
                <Input
                  id="BERCARIO"
                  type="number"
                  value={formData.BERCARIO as number}
                  onChange={(e) => handleChange("BERCARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="BRINQUEDOTECA">Brinquedoteca</Label>
                <Input
                  id="BRINQUEDOTECA"
                  type="number"
                  value={formData.BRINQUEDOTECA as number}
                  onChange={(e) => handleChange("BRINQUEDOTECA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="FRALDARIO">Fraldário</Label>
                <Input
                  id="FRALDARIO"
                  type="number"
                  value={formData.FRALDARIO as number}
                  onChange={(e) => handleChange("FRALDARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LACTARIO">Lactário</Label>
                <Input
                  id="LACTARIO"
                  type="number"
                  value={formData.LACTARIO as number}
                  onChange={(e) => handleChange("LACTARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SOLARIO">Solário</Label>
                <Input
                  id="SOLARIO"
                  type="number"
                  value={formData.SOLARIO as number}
                  onChange={(e) => handleChange("SOLARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Sanitários */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sanitários</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_ADEQ_PRE">Sanitário Adequado Pré</Label>
                <Input
                  id="SANITARIO_ADEQ_PRE"
                  type="number"
                  value={formData.SANITARIO_ADEQ_PRE as number}
                  onChange={(e) => handleChange("SANITARIO_ADEQ_PRE", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_ADEQ_PRE_FEM">Sanitário Pré Fem.</Label>
                <Input
                  id="SANITARIO_ADEQ_PRE_FEM"
                  type="number"
                  value={formData.SANITARIO_ADEQ_PRE_FEM as number}
                  onChange={(e) => handleChange("SANITARIO_ADEQ_PRE_FEM", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_ADEQ_PRE_MASC">Sanitário Pré Masc.</Label>
                <Input
                  id="SANITARIO_ADEQ_PRE_MASC"
                  type="number"
                  value={formData.SANITARIO_ADEQ_PRE_MASC as number}
                  onChange={(e) => handleChange("SANITARIO_ADEQ_PRE_MASC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_ADEQ_DEF">Sanitário Def.</Label>
                <Input
                  id="SANITARIO_ADEQ_DEF"
                  type="number"
                  value={formData.SANITARIO_ADEQ_DEF as number}
                  onChange={(e) => handleChange("SANITARIO_ADEQ_DEF", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_ADEQ_DEF_MASC">Sanitário Def. Masc.</Label>
                <Input
                  id="SANITARIO_ADEQ_DEF_MASC"
                  type="number"
                  value={formData.SANITARIO_ADEQ_DEF_MASC as number}
                  onChange={(e) => handleChange("SANITARIO_ADEQ_DEF_MASC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_AL_MASC">Sanitário Aluno Masc.</Label>
                <Input
                  id="SANITARIO_AL_MASC"
                  type="number"
                  value={formData.SANITARIO_AL_MASC as number}
                  onChange={(e) => handleChange("SANITARIO_AL_MASC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_AL_FEM">Sanitário Aluno Fem.</Label>
                <Input
                  id="SANITARIO_AL_FEM"
                  type="number"
                  value={formData.SANITARIO_AL_FEM as number}
                  onChange={(e) => handleChange("SANITARIO_AL_FEM", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_SANITARIO_AL">Total Sanitário Alunos</Label>
                <Input
                  id="TOT_SANITARIO_AL"
                  type="number"
                  value={formData.TOT_SANITARIO_AL as number}
                  onChange={(e) => handleChange("TOT_SANITARIO_AL", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_FUNC_FEM">Sanitário Func. Fem.</Label>
                <Input
                  id="SANITARIO_FUNC_FEM"
                  type="number"
                  value={formData.SANITARIO_FUNC_FEM as number}
                  onChange={(e) => handleChange("SANITARIO_FUNC_FEM", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SANITARIO_FUNC_MASC">Sanitário Func. Masc.</Label>
                <Input
                  id="SANITARIO_FUNC_MASC"
                  type="number"
                  value={formData.SANITARIO_FUNC_MASC as number}
                  onChange={(e) => handleChange("SANITARIO_FUNC_MASC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_SANITARIO_FUNC">Total Sanitário Func.</Label>
                <Input
                  id="TOT_SANITARIO_FUNC"
                  type="number"
                  value={formData.TOT_SANITARIO_FUNC as number}
                  onChange={(e) => handleChange("TOT_SANITARIO_FUNC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DEPEND_ADEQ_DEF">Depend. Adequada Def.</Label>
                <Input
                  id="DEPEND_ADEQ_DEF"
                  type="number"
                  value={formData.DEPEND_ADEQ_DEF as number}
                  onChange={(e) => handleChange("DEPEND_ADEQ_DEF", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LAVATORIO">Lavatório</Label>
                <Input
                  id="LAVATORIO"
                  type="number"
                  value={formData.LAVATORIO as number}
                  onChange={(e) => handleChange("LAVATORIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Serviços de Apoio */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços de Apoio</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="LAVANDERIA">Lavanderia</Label>
                <Input
                  id="LAVANDERIA"
                  type="number"
                  value={formData.LAVANDERIA as number}
                  onChange={(e) => handleChange("LAVANDERIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_PROG_ESC_FAMILIA">Sala Prog. Esc. Família</Label>
                <Input
                  id="SALA_PROG_ESC_FAMILIA"
                  type="number"
                  value={formData.SALA_PROG_ESC_FAMILIA as number}
                  onChange={(e) => handleChange("SALA_PROG_ESC_FAMILIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ESPERA">Sala de Espera</Label>
                <Input
                  id="SALA_ESPERA"
                  type="number"
                  value={formData.SALA_ESPERA as number}
                  onChange={(e) => handleChange("SALA_ESPERA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_INSPETOR">Sala Inspetor</Label>
                <Input
                  id="SALA_INSPETOR"
                  type="number"
                  value={formData.SALA_INSPETOR as number}
                  onChange={(e) => handleChange("SALA_INSPETOR", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_REUNIAO">Sala de Reunião</Label>
                <Input
                  id="SALA_REUNIAO"
                  type="number"
                  value={formData.SALA_REUNIAO as number}
                  onChange={(e) => handleChange("SALA_REUNIAO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_REFORCO">Sala de Reforço</Label>
                <Input
                  id="SALA_REFORCO"
                  type="number"
                  value={formData.SALA_REFORCO as number}
                  onChange={(e) => handleChange("SALA_REFORCO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_DIRETOR_TECNICO">Sala Diretor Técnico</Label>
                <Input
                  id="SALA_DIRETOR_TECNICO"
                  type="number"
                  value={formData.SALA_DIRETOR_TECNICO as number}
                  onChange={(e) => handleChange("SALA_DIRETOR_TECNICO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GARAGEM_ONIBUS">Garagem Ônibus</Label>
                <Input
                  id="GARAGEM_ONIBUS"
                  type="number"
                  value={formData.GARAGEM_ONIBUS as number}
                  onChange={(e) => handleChange("GARAGEM_ONIBUS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="RECEPCAO">Recepção</Label>
                <Input
                  id="RECEPCAO"
                  type="number"
                  value={formData.RECEPCAO as number}
                  onChange={(e) => handleChange("RECEPCAO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="AREA_SERVICO">Área de Serviço</Label>
                <Input
                  id="AREA_SERVICO"
                  type="number"
                  value={formData.AREA_SERVICO as number}
                  onChange={(e) => handleChange("AREA_SERVICO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Salas Especializadas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Salas Especializadas</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="SALA_FISIOTERAPIA">Sala Fisioterapia</Label>
                <Input
                  id="SALA_FISIOTERAPIA"
                  type="number"
                  value={formData.SALA_FISIOTERAPIA as number}
                  onChange={(e) => handleChange("SALA_FISIOTERAPIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_PSICOLOGIA">Sala Psicologia</Label>
                <Input
                  id="SALA_PSICOLOGIA"
                  type="number"
                  value={formData.SALA_PSICOLOGIA as number}
                  onChange={(e) => handleChange("SALA_PSICOLOGIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_FONOAUDIOLOGIA">Sala Fonoaudiologia</Label>
                <Input
                  id="SALA_FONOAUDIOLOGIA"
                  type="number"
                  value={formData.SALA_FONOAUDIOLOGIA as number}
                  onChange={(e) => handleChange("SALA_FONOAUDIOLOGIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_EVENTOS">Sala de Eventos</Label>
                <Input
                  id="SALA_EVENTOS"
                  type="number"
                  value={formData.SALA_EVENTOS as number}
                  onChange={(e) => handleChange("SALA_EVENTOS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ASSIST_SOCIAL">Sala Assist. Social</Label>
                <Input
                  id="SALA_ASSIST_SOCIAL"
                  type="number"
                  value={formData.SALA_ASSIST_SOCIAL as number}
                  onChange={(e) => handleChange("SALA_ASSIST_SOCIAL", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_TERAPIA_EDUC">Sala Terapia Educacional</Label>
                <Input
                  id="SALA_TERAPIA_EDUC"
                  type="number"
                  value={formData.SALA_TERAPIA_EDUC as number}
                  onChange={(e) => handleChange("SALA_TERAPIA_EDUC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_REORG_NEURO">Sala Reorg. Neuro</Label>
                <Input
                  id="SALA_REORG_NEURO"
                  type="number"
                  value={formData.SALA_REORG_NEURO as number}
                  onChange={(e) => handleChange("SALA_REORG_NEURO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_TERAPIA_OCUP">Sala Terapia Ocupacional</Label>
                <Input
                  id="SALA_TERAPIA_OCUP"
                  type="number"
                  value={formData.SALA_TERAPIA_OCUP as number}
                  onChange={(e) => handleChange("SALA_TERAPIA_OCUP", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ATENDIMENTO">Sala Atendimento</Label>
                <Input
                  id="SALA_ATENDIMENTO"
                  type="number"
                  value={formData.SALA_ATENDIMENTO as number}
                  onChange={(e) => handleChange("SALA_ATENDIMENTO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ATEND_PSICOLOGICO">Sala Atend. Psicológico</Label>
                <Input
                  id="SALA_ATEND_PSICOLOGICO"
                  type="number"
                  value={formData.SALA_ATEND_PSICOLOGICO as number}
                  onChange={(e) => handleChange("SALA_ATEND_PSICOLOGICO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_MUSICA">Sala de Música</Label>
                <Input
                  id="SALA_MUSICA"
                  type="number"
                  value={formData.SALA_MUSICA as number}
                  onChange={(e) => handleChange("SALA_MUSICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_GINASTICA">Sala de Ginástica</Label>
                <Input
                  id="SALA_GINASTICA"
                  type="number"
                  value={formData.SALA_GINASTICA as number}
                  onChange={(e) => handleChange("SALA_GINASTICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Outras Salas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Outras Salas</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="SALA_AUX_COORDENACAO">Sala Aux. Coordenação</Label>
                <Input
                  id="SALA_AUX_COORDENACAO"
                  type="number"
                  value={formData.SALA_AUX_COORDENACAO as number}
                  onChange={(e) => handleChange("SALA_AUX_COORDENACAO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_DADOS">Sala de Dados</Label>
                <Input
                  id="SALA_DADOS"
                  type="number"
                  value={formData.SALA_DADOS as number}
                  onChange={(e) => handleChange("SALA_DADOS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_DEP_PESSOAL">Sala Dep. Pessoal</Label>
                <Input
                  id="SALA_DEP_PESSOAL"
                  type="number"
                  value={formData.SALA_DEP_PESSOAL as number}
                  onChange={(e) => handleChange("SALA_DEP_PESSOAL", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ED_RELIGIOSA">Sala Ed. Religiosa</Label>
                <Input
                  id="SALA_ED_RELIGIOSA"
                  type="number"
                  value={formData.SALA_ED_RELIGIOSA as number}
                  onChange={(e) => handleChange("SALA_ED_RELIGIOSA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ENERGIA_ELETRICA">Sala Energia Elétrica</Label>
                <Input
                  id="SALA_ENERGIA_ELETRICA"
                  type="number"
                  value={formData.SALA_ENERGIA_ELETRICA as number}
                  onChange={(e) => handleChange("SALA_ENERGIA_ELETRICA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ENTRETENIMENTO">Sala Entretenimento</Label>
                <Input
                  id="SALA_ENTRETENIMENTO"
                  type="number"
                  value={formData.SALA_ENTRETENIMENTO as number}
                  onChange={(e) => handleChange("SALA_ENTRETENIMENTO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ESTAGIO">Sala de Estágio</Label>
                <Input
                  id="SALA_ESTAGIO"
                  type="number"
                  value={formData.SALA_ESTAGIO as number}
                  onChange={(e) => handleChange("SALA_ESTAGIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_MARKETING">Sala Marketing</Label>
                <Input
                  id="SALA_MARKETING"
                  type="number"
                  value={formData.SALA_MARKETING as number}
                  onChange={(e) => handleChange("SALA_MARKETING", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_MATRICULA">Sala Matrícula</Label>
                <Input
                  id="SALA_MATRICULA"
                  type="number"
                  value={formData.SALA_MATRICULA as number}
                  onChange={(e) => handleChange("SALA_MATRICULA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_POS_GRADUACAO">Sala Pós-Graduação</Label>
                <Input
                  id="SALA_POS_GRADUACAO"
                  type="number"
                  value={formData.SALA_POS_GRADUACAO as number}
                  onChange={(e) => handleChange("SALA_POS_GRADUACAO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_SEGURANCA">Sala Segurança</Label>
                <Input
                  id="SALA_SEGURANCA"
                  type="number"
                  value={formData.SALA_SEGURANCA as number}
                  onChange={(e) => handleChange("SALA_SEGURANCA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_TELEFONIA">Sala Telefonia</Label>
                <Input
                  id="SALA_TELEFONIA"
                  type="number"
                  value={formData.SALA_TELEFONIA as number}
                  onChange={(e) => handleChange("SALA_TELEFONIA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_FINANCEIRO">Sala Financeiro</Label>
                <Input
                  id="SALA_FINANCEIRO"
                  type="number"
                  value={formData.SALA_FINANCEIRO as number}
                  onChange={(e) => handleChange("SALA_FINANCEIRO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_PASTORAL">Sala Pastoral</Label>
                <Input
                  id="SALA_PASTORAL"
                  type="number"
                  value={formData.SALA_PASTORAL as number}
                  onChange={(e) => handleChange("SALA_PASTORAL", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_RESERV_AGUA">Sala Reserv. Água</Label>
                <Input
                  id="SALA_RESERV_AGUA"
                  type="number"
                  value={formData.SALA_RESERV_AGUA as number}
                  onChange={(e) => handleChange("SALA_RESERV_AGUA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Agropecuária */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Agropecuária</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="ABATEDOURO">Abatedouro</Label>
                <Input
                  id="ABATEDOURO"
                  type="number"
                  value={formData.ABATEDOURO as number}
                  onChange={(e) => handleChange("ABATEDOURO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ESTUFA">Estufa</Label>
                <Input
                  id="ESTUFA"
                  type="number"
                  value={formData.ESTUFA as number}
                  onChange={(e) => handleChange("ESTUFA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_AVES_CORTE">Galpão Aves Corte</Label>
                <Input
                  id="GALPAO_AVES_CORTE"
                  type="number"
                  value={formData.GALPAO_AVES_CORTE as number}
                  onChange={(e) => handleChange("GALPAO_AVES_CORTE", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_AVES_POSTURA">Galpão Aves Postura</Label>
                <Input
                  id="GALPAO_AVES_POSTURA"
                  type="number"
                  value={formData.GALPAO_AVES_POSTURA as number}
                  onChange={(e) => handleChange("GALPAO_AVES_POSTURA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_BOVINOS_LEITE">Galpão Bovinos Leite</Label>
                <Input
                  id="GALPAO_BOVINOS_LEITE"
                  type="number"
                  value={formData.GALPAO_BOVINOS_LEITE as number}
                  onChange={(e) => handleChange("GALPAO_BOVINOS_LEITE", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_CUNICULTURA">Galpão Cunicultura</Label>
                <Input
                  id="GALPAO_CUNICULTURA"
                  type="number"
                  value={formData.GALPAO_CUNICULTURA as number}
                  onChange={(e) => handleChange("GALPAO_CUNICULTURA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_MAQ_AGRICOLA">Galpão Máq. Agrícola</Label>
                <Input
                  id="GALPAO_MAQ_AGRICOLA"
                  type="number"
                  value={formData.GALPAO_MAQ_AGRICOLA as number}
                  onChange={(e) => handleChange("GALPAO_MAQ_AGRICOLA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_OVINOS_CAPRINOS">Galpão Ovinos/Caprinos</Label>
                <Input
                  id="GALPAO_OVINOS_CAPRINOS"
                  type="number"
                  value={formData.GALPAO_OVINOS_CAPRINOS as number}
                  onChange={(e) => handleChange("GALPAO_OVINOS_CAPRINOS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GALPAO_SUINO">Galpão Suíno</Label>
                <Input
                  id="GALPAO_SUINO"
                  type="number"
                  value={formData.GALPAO_SUINO as number}
                  onChange={(e) => handleChange("GALPAO_SUINO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="HORTA">Horta</Label>
                <Input
                  id="HORTA"
                  type="number"
                  value={formData.HORTA as number}
                  onChange={(e) => handleChange("HORTA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="MANGUEIRA">Mangueira</Label>
                <Input
                  id="MANGUEIRA"
                  type="number"
                  value={formData.MANGUEIRA as number}
                  onChange={(e) => handleChange("MANGUEIRA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="MINHOCARIO">Minhocário</Label>
                <Input
                  id="MINHOCARIO"
                  type="number"
                  value={formData.MINHOCARIO as number}
                  onChange={(e) => handleChange("MINHOCARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PACKING_HOUSE">Packing House</Label>
                <Input
                  id="PACKING_HOUSE"
                  type="number"
                  value={formData.PACKING_HOUSE as number}
                  onChange={(e) => handleChange("PACKING_HOUSE", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="POMAR">Pomar</Label>
                <Input
                  id="POMAR"
                  type="number"
                  value={formData.POMAR as number}
                  onChange={(e) => handleChange("POMAR", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PSICULTURA">Psicultura</Label>
                <Input
                  id="PSICULTURA"
                  type="number"
                  value={formData.PSICULTURA as number}
                  onChange={(e) => handleChange("PSICULTURA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_INSUMO_AGRICOLA">Sala Insumo Agrícola</Label>
                <Input
                  id="SALA_INSUMO_AGRICOLA"
                  type="number"
                  value={formData.SALA_INSUMO_AGRICOLA as number}
                  onChange={(e) => handleChange("SALA_INSUMO_AGRICOLA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_INSUMO_VETERINARIO">Sala Insumo Veterinário</Label>
                <Input
                  id="SALA_INSUMO_VETERINARIO"
                  type="number"
                  value={formData.SALA_INSUMO_VETERINARIO as number}
                  onChange={(e) => handleChange("SALA_INSUMO_VETERINARIO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_ORDENHA">Sala de Ordenha</Label>
                <Input
                  id="SALA_ORDENHA"
                  type="number"
                  value={formData.SALA_ORDENHA as number}
                  onChange={(e) => handleChange("SALA_ORDENHA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SALA_PROC_PROD_AGROPECUARIOS">Sala Proc. Prod. Agropec.</Label>
                <Input
                  id="SALA_PROC_PROD_AGROPECUARIOS"
                  type="number"
                  value={formData.SALA_PROC_PROD_AGROPECUARIOS as number}
                  onChange={(e) => handleChange("SALA_PROC_PROD_AGROPECUARIOS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="VIVEIRO">Viveiro</Label>
                <Input
                  id="VIVEIRO"
                  type="number"
                  value={formData.VIVEIRO as number}
                  onChange={(e) => handleChange("VIVEIRO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Alojamentos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Alojamentos</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="ALOJAMENTO_FEM">Alojamento Feminino</Label>
                <Input
                  id="ALOJAMENTO_FEM"
                  type="number"
                  value={formData.ALOJAMENTO_FEM as number}
                  onChange={(e) => handleChange("ALOJAMENTO_FEM", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ALOJAMENTO_MASC">Alojamento Masculino</Label>
                <Input
                  id="ALOJAMENTO_MASC"
                  type="number"
                  value={formData.ALOJAMENTO_MASC as number}
                  onChange={(e) => handleChange("ALOJAMENTO_MASC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="TOT_ALOJAMENTO">Total Alojamentos</Label>
                <Input
                  id="TOT_ALOJAMENTO"
                  type="number"
                  value={formData.TOT_ALOJAMENTO as number}
                  onChange={(e) => handleChange("TOT_ALOJAMENTO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Outras Instalações */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Outras Instalações</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="BAZAR">Bazar</Label>
                <Input
                  id="BAZAR"
                  type="number"
                  value={formData.BAZAR as number}
                  onChange={(e) => handleChange("BAZAR", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CASA_MAQUINA">Casa de Máquina</Label>
                <Input
                  id="CASA_MAQUINA"
                  type="number"
                  value={formData.CASA_MAQUINA as number}
                  onChange={(e) => handleChange("CASA_MAQUINA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CASA_FUNC">Casa Funcionário</Label>
                <Input
                  id="CASA_FUNC"
                  type="number"
                  value={formData.CASA_FUNC as number}
                  onChange={(e) => handleChange("CASA_FUNC", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CHURRASQUEIRA">Churrasqueira</Label>
                <Input
                  id="CHURRASQUEIRA"
                  type="number"
                  value={formData.CHURRASQUEIRA as number}
                  onChange={(e) => handleChange("CHURRASQUEIRA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DEPOSITOS_CEREAIS">Depósito Cereais</Label>
                <Input
                  id="DEPOSITOS_CEREAIS"
                  type="number"
                  value={formData.DEPOSITOS_CEREAIS as number}
                  onChange={(e) => handleChange("DEPOSITOS_CEREAIS", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ELEVADOR">Elevador</Label>
                <Input
                  id="ELEVADOR"
                  type="number"
                  value={formData.ELEVADOR as number}
                  onChange={(e) => handleChange("ELEVADOR", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ESTACIONAMENTO">Estacionamento</Label>
                <Input
                  id="ESTACIONAMENTO"
                  type="number"
                  value={formData.ESTACIONAMENTO as number}
                  onChange={(e) => handleChange("ESTACIONAMENTO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="QUIOSQUE">Quiosque</Label>
                <Input
                  id="QUIOSQUE"
                  type="number"
                  value={formData.QUIOSQUE as number}
                  onChange={(e) => handleChange("QUIOSQUE", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SERVIDOR">Servidor</Label>
                <Input
                  id="SERVIDOR"
                  type="number"
                  value={formData.SERVIDOR as number}
                  onChange={(e) => handleChange("SERVIDOR", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="SILO">Silo</Label>
                <Input
                  id="SILO"
                  type="number"
                  value={formData.SILO as number}
                  onChange={(e) => handleChange("SILO", Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="VARANDA">Varanda</Label>
                <Input
                  id="VARANDA"
                  type="number"
                  value={formData.VARANDA as number}
                  onChange={(e) => handleChange("VARANDA", Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Criando..." : "Criar Escola"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/escolas")}
              disabled={loading}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
