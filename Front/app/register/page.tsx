'use Client'
import { GraduationCap, Shield, Zap, Database } from "lucide-react"
import { RegisterForm } from "../components/register-form"
import Link from "next/link"



export default function RegisterPage() {
    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex lg:w-1/2 bg-card border-r border-border flex-col justify-between p-12">
                <div>
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <GraduationCap className="h-12 w-12 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Infra Manager</h2>
                            <p className="text-sm text-muted-foreground">Sistema de Gestão Escolar</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight mb-4">
                                Gerencie todas as escolas de São Paulo em um só lugar
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Plataforma completa para administração de instalações físicas e dados escolares
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-chart-1/10 rounded-lg mt-1">
                                    <Database className="h-15 w-15 text-chart-1" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mt-5">Gestão Centralizada</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Todos os dados das escolas em uma única plataforma segura
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-chart-2/10 rounded-lg mt-1">
                                    <Zap className="h-15 w-15 text-chart-2" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Importação Rápida</h3>
                                    <p className="text-sm text-muted-foreground">Upload de arquivos CSV com processamento instantâneo</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-chart-4/10 rounded-lg mt-1">
                                    <Shield className="h-15 w-15 text-chart-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Segurança Garantida</h3>
                                    <p className="text-sm text-muted-foreground">Autenticação robusta e controle de acesso por usuário</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground">© 2025 Todos os direitos reservados.</div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-2">
                    <div className="text-center space-y-2 lg:hidden">
                        <div className="flex justify-center mb-2">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <GraduationCap className="h-10 w-10 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">EduSP Manager</h1>
                        <p className="text-muted-foreground">Sistema de Gestão Escolar</p>
                    </div>

                    <div className="hidden lg:block space-y-1">
                        <h2 className="text-2xl font-bold tracking-tight">Bem-vindo!</h2>
                        <p className="text-muted-foreground">Entre com suas credenciais para acessar o sistema</p>
                    </div>

                    <div>

                        <RegisterForm />
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        Possui conta?{" "}
                        <Link
                        className="text-primary hover:underline"
                        href = '/login'
                        >
                            Log In
                        </Link>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        Problemas para registrar?{" "}
                        <button 
                        className="text-primary hover:underline"
                        >
                            Entre em contato com o suporte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
