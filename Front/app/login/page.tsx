
import Image from "next/image"
import { LoginForm } from "../components/login-form"
import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
                    <div className="max-w-md space-y-8 text-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold text-white">Infraestrutura de Qualidade</h1>
                            <p className="text-lg text-blue-50">Bem-vindo ao sistema de gestão de Infraestrutura escolar da cidade de São Paulo</p>
                        </div>

                        <div className="relative w-full aspect-square max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                            <div className="relative p-8 flex items-center justify-center h-full">
                                <div className="space-y-6 text-white">
                                    <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg" />
                                            <div className="flex-1 text-left">
                                                <div className="h-2 bg-white/30 rounded w-24 mb-1" />
                                                <div className="h-2 bg-white/20 rounded w-16" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg" />
                                            <div className="flex-1 text-left">
                                                <div className="h-2 bg-white/30 rounded w-20 mb-1" />
                                                <div className="h-2 bg-white/20 rounded w-24" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                            fill="white"
                            fillOpacity="0.1"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-6">
                        <div className="flex justify-center">
                            <Image
                                src="/img/logoSP.png"
                                alt="Prefeitura de São Paulo - Educação"
                                width={400}
                                height={240}
                                className="h-24 w-auto"
                            />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-gray-900">Login de Usuário</h2>
                            <p className="text-gray-600">Acesse o sistema de gestão de escolas</p>
                        </div>
                    </div>

                    <LoginForm />

                    <div className="text-center space-y-4">
                        {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" id="remember" className="rounded" />
                            <label htmlFor="remember">Lembrar-me</label>
                            <span className="mx-2">•</span>
                            <button className="text-primary hover:underline">Esqueceu a senha?</button>
                        </div> */}

                        <div className="pt-4 border-t">
                            <Link href="/register" className="text-primary hover:underline text-sm font-medium">Criar Conta</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
