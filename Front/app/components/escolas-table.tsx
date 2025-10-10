"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog"
import { Edit, Trash2, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Escola } from "../utils/types"

export function EscolasTable() {
    const router = useRouter()
    const [escolas, setEscolas] = useState<Escola[]>([])
    const [filteredEscolas, setFilteredEscolas] = useState<Escola[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        loadEscolas()
    }, [])

    useEffect(() => {
        if (searchTerm) {
            const filtered = escolas.filter((escola) =>
                Object.values(escola).some((value) => value?.toString().toLowerCase().includes(searchTerm.toLowerCase())),
            )
            setFilteredEscolas(filtered)
        } else {
            setFilteredEscolas(escolas)
        }
    }, [searchTerm, escolas])

    const loadEscolas = async () => {
        try {
            setLoading(true)
            setError("")
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const data = await response.json()
            const dataValues = Object.values(data) as Escola[]
            setEscolas(dataValues)
            setFilteredEscolas(dataValues)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao carregar escolas")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }),
            })
            await loadEscolas()
            setDeleteId(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao excluir escola")
        }
    }

    const handleEdit = (id: string) => {
        router.push(`/dashboard/escolas/editar/${id}`)
    }

    if (loading) {
        return (
            <Card className="border-border">
                <CardContent className="py-12">
                    <p className="text-center text-muted-foreground">Carregando escolas...</p>
                </CardContent>
            </Card>
        )
    }

    if (error) {
        return (
            <Card className="border-border">
                <CardContent className="py-12">
                    <p className="text-center text-destructive">{error}</p>
                    <div className="flex justify-center mt-4">
                        <Button onClick={loadEscolas}>Tentar Novamente</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    // Display key fields in table
    const heads = ["Nome da Rede de Ensino","Nome da Diretoria de Ensino","Nome do Município","Nome do Distrito","Código da Escola","Nome da Escola","Tipo da Escola","Tipo Descrição Escola","Situação Escola","Sala de Aula","Sala de Educação Infantil","Sala de Educação Especial","Sala de Educação Artística","Sala_Recurso","Total_Salas_Aula","Auditório","Anfiteatro","Teatro","Cantina","Copa","Cozinha","Refeitório","Depósito de Alimentos","Despensa","Total Despensa","Sala de Leitura","Biblioteca","Total Sala Leitura","Quadra Coberta","Quadra Descoberta","Ginásio de Esportes","Total Quadra","Quadra de Areia - Futebol/Volei","Quadra de Grama","Campo de Futebol","Gabinete Dentario","Consultorio Medico","Enfermaria","Ambulatório","Almoxarifado","Arquivo","Repografia/Xerox","Sala do Grêmio","Diretoria","Vice Diretoria","Sala de Professores","Secretaria","Sala Orientação Educacional","Sala_Orient_Ed","Sala de Coordenador Pedagógico","Pátio Coberto","Pátio Descoberto","Zeladoria","Vestiário Feminino","Vestiário Masculino","Total Vestiário","Videoteca","Sala TV","Laboratório de Informática","Laboratório de Ciências","Laboratório de Física","Laboratório de Química","Laboratório de Biologia","Laboratório de Ciências Física e Biológica","Total Laboratório Ciência","Laboratório de Línguas","Laboratório Multiuso","Oficina","Playground","Dormitório","Berçario","Sanitário Adequado a Pré Escola","Sanitário Adequado a Pré Escola Feminino","Sanitário Adequado a Pré Escola Masculino","Sanitário Adequado a Portadores de Deficiência","Sanitário Adequado a Portadores de Deficiência Masculino","Sanitário Aluno Masculino","Sanitário Aluno Feminino","Total Sanitario Alunos","Sanitário Funcionário Feminino","Sanitário Funcionário Masculino","Total Sanitario Funcionário","Dependência e Via Adequada a Deficientes","Sala de Educação Física","Piscina","Portaria","Sala do Programa Escola da Família","Brinquedoteca","Fraldario","Lactario","Lavanderia","Solário","Sala de Espera","Sala de Inspetor de Aluno","Sala de Reunião","Tesouraria","Sala de Reforço","Sala de Diretor Técnico","Garagem de Ônibus","Sala de Fisioterapia","Sala de Psicologia","Sala de Fonoaudiologia","Sala Eventos","Sala Assistente Social","Sala Terapia Educacional","Abatedouro","Alojamento Feminino","Alojamento Masculino","Total Alojamento","Área de Serviço","Bazar","Casa Maquina","Casa de Funcionários","Churrasqueira","Depósito para Cereais e Outros Produtos de Colheita","Elevador","Estacionamento","Estufa","Galpão para Aves de Corte","Galpão para Aves de Postura","Galpão para Bovinos de Leite","Galpão para Cunicultura","Galpão para Máquinas e Veículos Agrícolas","Galpão para Ovinos/Caprinos","Galpão para Suínos","Gráfica","Horta","Laboratório de Didática","Laboratório Junior","Laboratório de Enfermagem","Laboratório de Estética","Laboratório de Psicopedagogia","Laboratório de Turismo","Lavatório","Mangueira para Manejo de Bovinos de Corte","Minhocário","Packing House","Pomar","Piscicultura","Recepcao","Sala de Atendimento","Sala de Atendimento Psicológico","Sala de Auxiliar de Coordenação","Sala de Dados","Sala de Departamento Pessoal","Sala de Educação Religiosa","Sala de Energia Elétrica","Sala de Entretenimentos","Sala de Estágio","Sala de Ginástica","Sala de Insumos Agrícolas","Sala de Insumos Veterinários","Sala de Marketing","Sala de Matrícula","Sala de Música","Sala de Núcleo de Pós-Graduação","Sala de Ordenha","Sala de Processamento de Produtos Agropecuários","Sala de Segurança","Sala de Telefonia","Sala do Financeiro","Sala Pastoral","Sala Reservatório de Água","Servidor","Silo","Varanda","Viveiro","Sala de Reorganização Neurológica","Sala de Terapia Ocupacional","Sala de Serigrafia","Sala de Marcenaria","Quiosques"];

    const cells: (keyof Escola)[] = ["NOMEDEP",
        "DE",
        "MUN",
        "DISTR",
        "CODESC",
        "NOMESC",
        "TIPOESC",
        "TIPOESC_DESC",
        "SITUACAO",
        "SALAS_AULA",
        "SALAS_ED_INF",
        "SALAS_ED_ESP",
        "SALAS_ED_ART",
        "SALA_RECURSO",
        "TOT_SALAS_AULA",
        "AUDITORIO",
        "ANFITEATRO",
        "TEATRO",
        "CANTINA",
        "COPA",
        "COZINHA",
        "REFEITORIO",
        "DEPOSITO_ALIMENTOS",
        "DESPENSA",
        "TOT_DESPENSA",
        "SALA_LEITURA",
        "BIBLIOTECA",
        "TOT_SALA_LEITURA",
        "QUADRA_COBERTA",
        "QUADRA_DESCOBERTA",
        "GINASIO",
        "TOT_QUADRA",
        "QUADRA_AREIA",
        "QUADRA_GRAMA",
        "CAMPO_FUTEBOL",
        "GABINETE_DENTARIO",
        "CONSULTORIO_MEDICO",
        "ENFERMARIA",
        "AMBULATORIO",
        "ALMOXARIFADO",
        "ARQUIVO",
        "REPROGRAFIA",
        "SALA_GREMIO",
        "DIRETORIA",
        "VICEDIRETORIA",
        "SALA_PROF",
        "SECRETARIA",
        "SALA_ORIENT_ED",
        "SALA_COORD_PEDAG",
        "PATIO_COBERTO",
        "PATIO_DESCOBERTO",
        "ZELADORIA",
        "VESTIARIO_FEM",
        "VESTIARIO_MASC",
        "TOT_VESTIARIO",
        "VIDEOTECA",
        "SALA_TV",
        "LAB_INFO",
        "LAB_CIENCIAS",
        "LAB_FISICA",
        "LAB_QUIMICA",
        "LAB_BIOLOGIA",
        "LAB_CIENCIA_FISICA_BIOLOGICA",
        "TOT_LAB_CIENCIA",
        "LAB_LINGUAS",
        "LAB_MULTIUSO",
        "OFICINA",
        "PLAYGROUND",
        "DORMITORIO",
        "BERCARIO",
        "SANITARIO_ADEQ_PRE",
        "SANITARIO_ADEQ_PRE_FEM",
        "SANITARIO_ADEQ_PRE_MASC",
        "SANITARIO_ADEQ_DEF",
        "SANITARIO_ADEQ_DEF_MASC",
        "SANITARIO_AL_MASC",
        "SANITARIO_AL_FEM",
        "TOT_SANITARIO_AL",
        "SANITARIO_FUNC_FEM",
        "SANITARIO_FUNC_MASC",
        "TOT_SANITARIO_FUNC",
        "DEPEND_ADEQ_DEF",
        "SALA_ED_FISICA",
        "PISCINA",
        "PORTARIA",
        "SALA_PROG_ESC_FAMILIA",
        "BRINQUEDOTECA",
        "FRALDARIO",
        "LACTARIO",
        "LAVANDERIA",
        "SOLARIO",
        "SALA_ESPERA",
        "SALA_INSPETOR",
        "SALA_REUNIAO",
        "TESOURARIA",
        "SALA_REFORCO",
        "SALA_DIRETOR_TECNICO",
        "GARAGEM_ONIBUS",
        "SALA_FISIOTERAPIA",
        "SALA_PSICOLOGIA",
        "SALA_FONOAUDIOLOGIA",
        "SALA_EVENTOS",
        "SALA_ASSIST_SOCIAL",
        "SALA_TERAPIA_EDUC",
        "ABATEDOURO",
        "ALOJAMENTO_FEM",
        "ALOJAMENTO_MASC",
        "TOT_ALOJAMENTO",
        "AREA_SERVICO",
        "BAZAR",
        "CASA_MAQUINA",
        "CASA_FUNC",
        "CHURRASQUEIRA",
        "DEPOSITOS_CEREAIS",
        "ELEVADOR",
        "ESTACIONAMENTO",
        "ESTUFA",
        "GALPAO_AVES_CORTE",
        "GALPAO_AVES_POSTURA",
        "GALPAO_BOVINOS_LEITE",
        "GALPAO_CUNICULTURA",
        "GALPAO_MAQ_AGRICOLA",
        "GALPAO_OVINOS_CAPRINOS",
        "GALPAO_SUINO",
        "GRAFICA",
        "HORTA",
        "LAB_DIDATICA",
        "LAB_JUNIOR",
        "LAB_ENFERMAGEM",
        "LAB_ESTETICA",
        "LAB_PSICOPEDAGOGIA",
        "LAB_TURISMO",
        "LAVATORIO",
        "MANGUEIRA",
        "MINHOCARIO",
        "PACKING_HOUSE",
        "POMAR",
        "PSICULTURA",
        "RECEPCAO",
        "SALA_ATENDIMENTO",
        "SALA_ATEND_PSICOLOGICO",
        "SALA_AUX_COORDENACAO",
        "SALA_DADOS",
        "SALA_DEP_PESSOAL",
        "SALA_ED_RELIGIOSA",
        "SALA_ENERGIA_ELETRICA",
        "SALA_ENTRETENIMENTO",
        "SALA_ESTAGIO",
        "SALA_GINASTICA",
        "SALA_INSUMO_AGRICOLA",
        "SALA_INSUMO_VETERINARIO",
        "SALA_MARKETING",
        "SALA_MATRICULA",
        "SALA_MUSICA",
        "SALA_POS_GRADUACAO",
        "SALA_ORDENHA",
        "SALA_PROC_PROD_AGROPECUARIOS",
        "SALA_SEGURANCA",
        "SALA_TELEFONIA",
        "SALA_FINANCEIRO",
        "SALA_PASTORAL",
        "SALA_RESERV_AGUA",
        "SERVIDOR",
        "SILO",
        "VARANDA",
        "VIVEIRO",
        "SALA_REORG_NEURO",
        "SALA_TERAPIA_OCUP",
        "SALA_SERIGRAFIA",
        "SALA_MARCENARIA",
        "QUIOSQUE",
        "id"]

    return (
        <>
            <Card className="border-border">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Lista de Escolas</CardTitle>
                            <CardDescription>
                                {filteredEscolas.length} {filteredEscolas.length === 1 ? "escola encontrada" : "escolas encontradas"}
                            </CardDescription>
                        </div>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Buscar escolas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {filteredEscolas.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">Nenhuma escola cadastrada ainda.</p>
                            <Button className="mt-4" onClick={() => router.push("/dashboard/upload")}>
                                Importar CSV
                            </Button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {heads.map((header) => (
                                            <TableHead className="min-w-[150px]" key={header}>
                                                {header}
                                            </TableHead>
                                        ))}
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredEscolas.map((escola) => (
                                        <TableRow key={escola.id?.toString()}>
                                            {cells.map((cell) => (
                                                <TableCell key={cell}>{String(escola[cell] ?? "-")}</TableCell>
                                            ))}
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="ghost" size="icon" onClick={() => handleEdit(escola.id.toString())}>
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" onClick={() => setDeleteId(escola.id.toString())}>
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                        <AlertDialogDescription>
                            Tem certeza que deseja excluir esta escola? Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteId && handleDelete(deleteId)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Excluir
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
