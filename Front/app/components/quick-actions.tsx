"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { FileUp, List, Plus, BarChart3 } from "lucide-react"

export function QuickActions() {
  const router = useRouter()

  const actions = [
    {
      title: "Importar CSV",
      description: "Upload de arquivo com dados das escolas",
      icon: FileUp,
      action: () => router.push("/dashboard/upload"),
      color: "text-primary",
      bgColor: "bg-primary",
    },
    {
      title: "Ver Escolas",
      description: "Visualize e gerencie todas as escolas",
      icon: List,
      action: () => router.push("/dashboard/escolas"),
      color: "text-chart-2",
      bgColor: "bg-chart-2",
    },
    {
      title: "Nova Escola",
      description: "Adicione uma escola manualmente",
      icon: Plus,
      action: () => router.push("/dashboard/escolas/nova"),
      color: "text-chart-3",
      bgColor: "bg-chart-3",
    },
    {
      title: "Relatórios",
      description: "Visualize estatísticas e análises",
      icon: BarChart3,
      action: () => {},
      color: "text-chart-4",
      bgColor: "bg-chart-4",
    },
  ]

  return (
    <Card className="bg-white border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Ações Rápidas</CardTitle>
        <CardDescription>Acesse as principais funcionalidades do sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <button
                key={action.title}
                onClick={action.action}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-5 text-left transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${action.bgColor}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 mb-1">{action.title}</div>
                    <div className="text-sm text-gray-600">{action.description}</div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
