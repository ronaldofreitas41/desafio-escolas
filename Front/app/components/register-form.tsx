"use client"

import type React from "react"

import { useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription } from "./ui/alert"
import { IdCard, Lock, Mail, Phone } from "lucide-react"
import { authAPI } from "@/lib/api"
import InputMask from "react-input-mask";

export function RegisterForm() {
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [CPF, setCPF] = useState("")
  const [telefone, setTelefone] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    redirect("/dashbooard");
  }

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é número
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto depois do terceiro dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto depois do sexto dígito
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen depois do nono dígito
  };

  const formatTelefone = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é número
      .replace(/^(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos dois primeiros dígitos
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen depois do quinto dígito
      .slice(0, 15); // Limita o tamanho total
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCPF(formatted);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTelefone(e.target.value);
    setTelefone(formatted);
  };


  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Registre-se</CardTitle>
        <CardDescription>Informe seus dados para acessar o sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="nome"
                type="nome"
                placeholder="seu@nome.com"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="relative">
            <IdCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              value={CPF}
              onChange={handleCPFChange}
              placeholder="000.000.000-00"
              maxLength={14}
              className="pl-10"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passwordConfirmation">Confirme sua Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="passwordConfirmation"
                type="passwordConfirmation"
                placeholder="••••••••"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="Phone">Telefone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={handleTelefoneChange}
                placeholder="(XX) XXXXX-XXXX"
                className="pl-10"
                required
              />

            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Salvando..." : "Registrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
