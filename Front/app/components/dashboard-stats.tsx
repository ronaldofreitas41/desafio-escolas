"use client"

import { Card, CardContent } from "../components/ui/card"
import { Building2, Database, FileUp, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export function DashboardStats() {
  const [totalEscolas, setTotalEscolas] = useState(0)

  useEffect(() => {
    const escolas = localStorage.getItem("escolas")
    if (escolas) {
      const data = JSON.parse(escolas)
      setTotalEscolas(data.length)
    }
  }, [])

  const stats = [
    {
      title: "Total de Escolas",
      value: totalEscolas.toString(),
      description: totalEscolas > 0 ? `${totalEscolas} escolas cadastradas` : "Nenhuma escola cadastrada",
      icon: Building2,
      trend: "+12%",
      bgColor: "bg-primary",
      iconColor: "text-white",
    },
    {
      title: "Registros no Banco",
      value: totalEscolas.toString(),
      description: totalEscolas > 0 ? "Sincronizado" : "Aguardando importação",
      icon: Database,
      trend: "+8%",
      bgColor: "bg-chart-2",
      iconColor: "text-white",
    },
    {
      title: "Último Upload",
      value: totalEscolas > 0 ? "Hoje" : "Nenhum",
      description: totalEscolas > 0 ? "Há 2 horas" : "Faça o primeiro upload",
      icon: FileUp,
      trend: "Recente",
      bgColor: "bg-chart-3",
      iconColor: "text-white",
    },
    {
      title: "Status do Sistema",
      value: "100%",
      description: "Todos os serviços operacionais",
      icon: TrendingUp,
      trend: "Ativo",
      bgColor: "bg-chart-2",
      iconColor: "text-white",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="bg-white border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
