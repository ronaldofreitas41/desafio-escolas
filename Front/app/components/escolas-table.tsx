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
import { Escola } from "../utils/types"

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
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await response.json();
            console.log("Dados recebidos:", data)
            const dataValues = Object.values(data) as Escola[];
            setEscolas(dataValues)
            setFilteredEscolas(dataValues)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao carregar escolas")
            console.error("[v0] Erro ao carregar escolas:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: String) => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            })
            await loadEscolas() // Recarregar lista
            setDeleteId(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao excluir escola")
            console.error("[v0] Erro ao excluir escola:", err)
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

    const headers = ["Nome da Rede de Ensino",
        "Nome da Diretoria de Ensino",
        "Nome do Muncípio",
        "CODIGO IBGE",
        "Nome do Distrito",
        "Código da Escola",
        "Código da Escola no MEC",
        "Nome da Escola",
        "Situação da Escola",
        "Tipo da Escola",
        "Endereço",
        "Número do Endereço",
        "Complemento do Endereço",
        "CEP",
        "Bairro",
        "Zona",
        "Longitude",
        "Latitude",
        "Código da Vinculadora"
    ]

    const cells = [
        "NOMEDEP",
        "DE",
        "MUN",
        "CD_IBGE",
        "DISTR",
        "COD_ESC",
        "CODESCMEC",
        "NOMESC",
        "SITUACAO",
        "TIPOESC",
        "ENDESC",
        "NUMESC",
        "COMPLEND",
        "CEP",
        "BAIESC",
        "ZONA",
        "DS_LONGITUDE",
        "DS_LATITUDE",
        "CODVINC"
    ]

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
                                        {headers.map((header) => (
                                            <TableHead className="min-w-[150px]" key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</TableHead>
                                        ))}
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredEscolas.map((escola) => (
                                        <TableRow key={escola.id?.toString()}>
                                            {cells.map((header) => (
                                                <TableCell key={header}>{String(escola[header as keyof Escola] ?? "-")}</TableCell>
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
