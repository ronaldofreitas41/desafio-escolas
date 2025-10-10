"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Alert, AlertDescription } from "./ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Escola } from "../utils/types"

export function EscolaFormCreate() {
    const router = useRouter()
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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        const body = JSON.stringify({
                    "NOMEDEP": nomeDep,
                    "DE": de,
                    "MUN": mun,
                    "CD_IBGE": cdIBGE,
                    "DISTR": distr,
                    "COD_ESC": codEsc,
                    "CODESCMEC": codEscMec,
                    "NOMESC": nomeEsc,
                    "SITUACAO": situacao,
                    "TIPOESC": tipoEsc,
                    "ENDESC": endEsc,
                    "NUMESC": numEsc,
                    "COMPLEND": compleEnd,
                    "CEP": cep,
                    "BAIESC": baiEsc,
                    "ZONA": zona,
                    "DS_LONGITUDE":dsLongitude,
                    "DS_LATITUDE": dsLatitude,
                    "CODVINC": codVinc
                })

            console.log(body)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            });

            if (res.ok){
                router.push("/dashboard/escolas")
            }else{
                alert("Erro no POST")
            }
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
                <CardTitle>{"Nova Escola"}</CardTitle>
                <CardDescription>
                    {"Preencha os dados da nova escola"}
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
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setCodEsc(isNaN(value) ? 0 : value);
                                }}

                                placeholder="Código da Escola"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="CodMEC">Codigo da Escola no MEC:</Label>
                            <Input
                                id="CodMec"
                                value={codEscMec}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setCodEscMec(isNaN(value) ? 0 : value);
                                }}

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
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setNumEsc(isNaN(value) ? 0 : value);
                                }}

                                placeholder="Numero do Endereco"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="comp">Complemento:</Label>
                            <Input
                                id="comp"
                                value={compleEnd}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setCompleEnd(isNaN(value) ? 0 : value);
                                }}

                                placeholder="Complemento"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="Cep">CEP:</Label>
                            <Input
                                id="Cep"
                                value={cep}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setCep(isNaN(value) ? 0 : value);
                                }}

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
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setDsLatitude(isNaN(value) ? 0 : value);
                                }}

                                placeholder="Latitude"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="latitude">Longitude:</Label>
                            <Input
                                id="Longitude"
                                value={dsLongitude}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setDsLongitude(isNaN(value) ? 0 : value);
                                }}

                                placeholder="Longitude"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="vinculadora">Codigo da Vinculadora:</Label>
                            <Input
                                id="vinculadora"
                                value={codVinc}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setCodVinc(isNaN(value) ? 0 : value);
                                }}

                                placeholder="Latitude"
                                required
                            />
                        </div>

                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button type="submit" disabled={loading} className="flex-1">
                            {"Criar Escola"}
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
