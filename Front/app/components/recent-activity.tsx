"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { FileUp, Edit, Trash2, Plus } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "upload",
      description: "Upload de arquivo CSV realizado",
      time: "Há 2 horas",
      icon: FileUp,
      color: "text-primary",
      bgColor: "bg-primary",
    },
    {
      type: "edit",
      description: "Escola 'EMEF João Silva' atualizada",
      time: "Há 5 horas",
      icon: Edit,
      color: "text-chart-3",
      bgColor: "bg-chart-3",
    },
    {
      type: "create",
      description: "Nova escola adicionada ao sistema",
      time: "Ontem",
      icon: Plus,
      color: "text-chart-2",
      bgColor: "bg-chart-2",
    },
    {
      type: "delete",
      description: "Registro duplicado removido",
      time: "Há 2 dias",
      icon: Trash2,
      color: "text-destructive",
      bgColor: "bg-destructive",
    },
  ]

  return (
    <Card className="bg-white border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Atividades Recentes</CardTitle>
        <CardDescription>Últimas ações realizadas no sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2.5 rounded-lg ${activity.bgColor}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
