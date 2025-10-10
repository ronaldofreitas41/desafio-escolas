"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Alert, AlertDescription } from "../components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"


interface EscolaFormProps {
    escolaId?: string
}

interface Escola {
    NOMEDEP: String,
    DE: String,
    MUN: String,
    CD_IBGE: String,
    DISTR: String,
    COD_ESC: Number,
    CODESCMEC: Number,
    NOMESC: String,
    SITUACAO: String,
    TIPOESC: String,
    ENDESC: String,
    NUMESC: Number,
    COMPLEND: Number,
    CEP: Number
    BAIESC: String,
    ZONA: String,
    DS_LONGITUDE: Number,
    DS_LATITUDE: Number,
    CODVINC: Number
}

export function EscolaForm({ escolaId }: EscolaFormProps) {
    const router = useRouter()
    const [formData, setFormData] = useState<Escola>()
    const [nomeDep, setNomeDep] = useState("");
    const [de, setDe] = useState("");
    const [mun, setMun] = useState("");
    const [cdIBGE, setcdIBGE] = useState("");
    const [distr, setDistr] = useState("");
    const [codEsc, setCodEsc] = useState(0);
    const [codEscMec, setCodEscMec] = useState(0);
    const [nomeEsc, setNomeEsc] = useState("");
    const [situacao, setSituacao] = useState("");
    const [tipoEsc, setTipoEsc] = useState("");
    const [endEsc, setEndesc] = useState("");
    const [numEsc, setNumEsc] = useState(0);
    const [compleEnd, setCompleEnd] = useState(0);
    const [cep, setCep] = useState(0);
    const [baiEsc, setBaiEsc] = useState("");
    const [zona, setZona] = useState("");
    const [dsLongitude, setDsLongitude] = useState(0);
    const [dsLatitude, setDsLatitude] = useState(0);
    const [codVinc, setCodVinc] = useState(0);
    const [loading, setLoading] = useState(false)
    const [loadingData, setLoadingData] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (escolaId) {
            loadEscola()
        }
    }, [escolaId])

    const loadEscola = async () => {
        try {
            setLoadingData(true)
            const escola = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
                method: 'GET',

            })
            // setFormData(escola)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao carregar escola")
        } finally {
            setLoadingData(false)
        }
    }

    const handleChange = (field: keyof Escola, value: string | number) => {
        // setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {

        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao salvar escola. Tente novamente.")
            setLoading(false)
        }
    }

    if (loadingData) {
        return (
            <Card className="border-border">
                <CardContent className="py-12">
                    <p className="text-center text-muted-foreground">Carregando dados...</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="border-border">
            <CardHeader>
                <CardTitle>{escolaId ? "Editar Escola" : "Nova Escola"}</CardTitle>
                <CardDescription>
                    {escolaId ? "Atualize as informações da escola" : "Preencha os dados da nova escola"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="nomeDEP">Nome da Rede de Ensino:</Label>
                            <Input
                                id="nomeDEP"
                                value={nomeDep}
                                onChange={(e) => setNomeDep(e.target.value)}
                                placeholder="Rede de Ensino"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="DE">Nome da Diretoria de Ensino:</Label>
                            <Input
                                id="DE"
                                value={de}
                                onChange={(e) => setDe(e.target.value)}
                                placeholder="Diretoria de Ensino"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="Mun">Nome do Municipio:</Label>
                            <Input
                                id="MUN"
                                value={mun}
                                onChange={(e) => setMun(e.target.value)}
                                placeholder="Municipio"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="cdIBGE">Codigo do IBGE:</Label>
                            <Input
                                id="cdIBGE"
                                value={cdIBGE}
                                onChange={(e) => setcdIBGE(e.target.value)}
                                placeholder="Codigo do IBGE"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="distr">Nome do Distrito:</Label>
                            <Input
                                id="distr"
                                value={distr}
                                onChange={(e) => setDistr(e.target.value)}
                                placeholder="Distrito"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="codESC">Código da Escola:</Label>
                            <Input
                                id="codEsc"
                                value={codEsc}
                                onChange={(e) => setCodEsc(parseInt(e.target.value))}
                                placeholder="Código da Escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="CodMEC">Codigo da Escola no MEC:</Label>
                            <Input
                                id="CodMec"
                                value={codEscMec}
                                onChange={(e) => setCodEscMec(parseInt(e.target.value))}
                                placeholder="Codigo do MEC"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="nome">Nome da Escola:</Label>
                            <Input
                                id="nome"
                                value={nomeEsc}
                                onChange={(e) => setNomeEsc(e.target.value)}
                                placeholder="Digite o nome da escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="situ">Situação:</Label>
                            <Input
                                id="situ"
                                value={situacao}
                                onChange={(e) => setSituacao(e.target.value)}
                                placeholder="Situação:"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tipo">Tipo da Escola:</Label>
                            <Input
                                id="tipo"
                                value={tipoEsc}
                                onChange={(e) => setTipoEsc(e.target.value)}
                                placeholder="Tipo da Escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="endereco">Endereço da Escola:</Label>
                            <Input
                                id="endereco"
                                value={endEsc}
                                onChange={(e) => setEndesc(e.target.value)}
                                placeholder="Endereço"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="numero">Numero do Endereco:</Label>
                            <Input
                                id="numero"
                                value={numEsc}
                                onChange={(e) => setNumEsc(parseInt(e.target.value))}
                                placeholder="Numero do Endereco"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="complemento">Complemento do Endereço:</Label>
                            <Input
                                id="complemento"
                                value={tipoEsc}
                                onChange={(e) => setCompleEnd(parseInt(e.target.value))}
                                placeholder="Complemento"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="Cep">CEP:</Label>
                            <Input
                                id="Cep"
                                value={cep}
                                onChange={(e) => setCep(parseInt(e.target.value))}
                                placeholder="Cep da Escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="Bairro">Bairro da Escola:</Label>
                            <Input
                                id="Bairro"
                                value={baiEsc}
                                onChange={(e) => setBaiEsc(e.target.value)}
                                placeholder="Bairro da Escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="Zona">Zona da Escola:</Label>
                            <Input
                                id="Zona"
                                value={zona}
                                onChange={(e) => setZona(e.target.value)}
                                placeholder="Zona da Escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="latitude">Latitude:</Label>
                            <Input
                                id="latitude"
                                value={dsLatitude}
                                onChange={(e) => setDsLatitude(parseInt(e.target.value))}
                                placeholder="Latitude"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="latitude">Longitude:</Label>
                            <Input
                                id="Longitude"
                                value={dsLongitude}
                                onChange={(e) => setDsLongitude(parseInt(e.target.value))}
                                placeholder="Longitude"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="vinculadora">Codigo da Vinculadora:</Label>
                            <Input
                                id="vinculadora"
                                value={codVinc}
                                onChange={(e) => setCodVinc(parseInt(e.target.value))}
                                placeholder="Latitude"
                                required
                            />
                        </div>

                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button type="submit" disabled={loading} className="flex-1">
                            {loading ? "Salvando..." : escolaId ? "Atualizar Escola" : "Criar Escola"}
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
