import { DashboardHeader } from "../../components/dashboard-header"
import { EscolasTable } from "../../components/escolas-table"
import { Button } from "../../components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function EscolasPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Escolas</h1>
            <p className="text-muted-foreground mt-2">Gerencie todas as escolas cadastradas no sistema</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/escolas/nova">
              <Plus className="mr-2 h-4 w-4" />
              Nova Escola
            </Link>
          </Button>
        </div>

        <EscolasTable />
      </main>
    </div>
  )
}
