import { DashboardHeader } from "../components/dashboard-header"
import { DashboardStats } from "../components/dashboard-stats"
import { QuickActions } from "../components/quick-actions"
import { RecentActivity } from "../components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Sistema de Infraestrutura de Escolas</h1>
            <p className="text-lg text-blue-100">
              Gerencie todas as instalações físicas das escolas da cidade de São Paulo de forma centralizada e eficiente
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-8 space-y-8">
        <DashboardStats />

        <div className="grid gap-6 lg:grid-cols-2">
          <QuickActions />
          <RecentActivity />
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Uma educação que vai além</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Gestão Centralizada</h3>
              <p className="text-gray-600 text-sm">Todos os dados das escolas em uma única plataforma integrada</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-chart-2/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Importação Rápida</h3>
              <p className="text-gray-600 text-sm">Upload de arquivos CSV com processamento instantâneo</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-chart-4/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-chart-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Segurança Total</h3>
              <p className="text-gray-600 text-sm">Autenticação robusta e controle de acesso por usuário</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
