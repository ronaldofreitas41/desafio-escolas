"use client"

import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"
import { LogOut, User, Settings, Bell, Menu, Home, FileUp, List } from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { authAPI } from "@/lib/api"

export function DashboardHeader() {
  const router = useRouter()

  const handleLogout = () => {
    authAPI.logout()
    router.push("/login")
  }

  const user = typeof window !== "undefined" ? authAPI.getCurrentUser() : null
  const userEmail = user?.email || ""

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/img/logoSP.png"
              alt="Prefeitura de São Paulo"
              width={120}
              height={60}
              className="h-14 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => router.push("/dashboard")}
              className="text-gray-700 hover:text-primary"
            >
              <Home className="h-4 w-4 mr-2" />
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/dashboard/escolas")}
              className="text-gray-700 hover:text-primary"
            >
              <List className="h-4 w-4 mr-2" />
              Escolas
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/dashboard/upload")}
              className="text-gray-700 hover:text-primary"
            >
              <FileUp className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Minha Conta</p>
                    <p className="text-xs text-muted-foreground">{userEmail}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
