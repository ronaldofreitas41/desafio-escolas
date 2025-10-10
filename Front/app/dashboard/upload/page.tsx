import { DashboardHeader } from "../../components/dashboard-header"
import { UploadForm } from "../../components/upload-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function UploadPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Importar CSV</h1>
            <p className="text-muted-foreground mt-2">Faça upload do arquivo com dados das escolas</p>
          </div>
        </div>

        <UploadForm />
      </main>
    </div>
  )
}
