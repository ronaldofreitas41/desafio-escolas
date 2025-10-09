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

export function EscolaForm({ escolaId }: EscolaFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<Partial<Escola>>({
    nome: "",
    endereco: "",
    bairro: "",
    distrito: "",
    tipo: "",
    capacidade: 0,
    telefone: "",
    email: "",
  })
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
      const escola = await escolasAPI.getById(escolaId!)
      setFormData(escola)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar escola")
    } finally {
      setLoadingData(false)
    }
  }

  const handleChange = (field: keyof Escola, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      if (escolaId) {
        await escolasAPI.update(escolaId, formData)
      } else {
        await escolasAPI.create(formData as Omit<Escola, "id">)
      }

      setSuccess(true)

      setTimeout(() => {
        router.push("/dashboard/escolas")
      }, 1500)
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
              <Label htmlFor="nome">Nome da Escola</Label>
              <Input
                id="nome"
                value={formData.nome || ""}
                onChange={(e) => handleChange("nome", e.target.value)}
                placeholder="Digite o nome da escola"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                value={formData.endereco || ""}
                onChange={(e) => handleChange("endereco", e.target.value)}
                placeholder="Digite o endereço"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                id="bairro"
                value={formData.bairro || ""}
                onChange={(e) => handleChange("bairro", e.target.value)}
                placeholder="Digite o bairro"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="distrito">Distrito</Label>
              <Input
                id="distrito"
                value={formData.distrito || ""}
                onChange={(e) => handleChange("distrito", e.target.value)}
                placeholder="Digite o distrito"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo</Label>
              <Input
                id="tipo"
                value={formData.tipo || ""}
                onChange={(e) => handleChange("tipo", e.target.value)}
                placeholder="Ex: EMEI, EMEF, CEU"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="capacidade">Capacidade</Label>
              <Input
                id="capacidade"
                type="number"
                value={formData.capacidade || ""}
                onChange={(e) => handleChange("capacidade", Number.parseInt(e.target.value) || 0)}
                placeholder="Número de alunos"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={formData.telefone || ""}
                onChange={(e) => handleChange("telefone", e.target.value)}
                placeholder="(11) 1234-5678"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="escola..exemplo.com"
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
