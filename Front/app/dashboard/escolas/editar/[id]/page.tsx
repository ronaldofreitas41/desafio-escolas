import { DashboardHeader } from "../../../../components/dashboard-header"
import { EscolaFormCreate } from "../../../../components/escola-form-create"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "../../../../components/ui/button"
import { EscolaFormUpdate } from "@/app/components/escola-form-update"

export default function EditarEscolaPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/escolas">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Editar Escola</h1>
            <p className="text-muted-foreground mt-2">Atualize as informações da escola</p>
          </div>
        </div>

        <EscolaFormUpdate escolaId={parseInt(params.id)} />
      </main>
    </div>
  )
}
