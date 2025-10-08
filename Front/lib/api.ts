// Configuração da API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

// Tipos
export interface Escola {
  id: string
  nome: string
  endereco: string
  bairro: string
  distrito: string
  tipo: string
  capacidade?: number
  telefone?: string
  email?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
  }
}

// Helper para fazer requisições
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  }

  if (token) {
//headers["Authorization"] = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Erro na requisição" }))
    throw new Error(error.message || `Erro: ${response.status}`)
  }

  return response.json()
}

// API de Autenticação
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return fetchAPI("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
  },

  getCurrentUser: () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user")
      return user ? JSON.parse(user) : null
    }
    return null
  },
}

// API de Escolas
export const escolasAPI = {
  getAll: async (): Promise<Escola[]> => {
    return fetchAPI("/api/escolas")
  },

  getById: async (id: string): Promise<Escola> => {
    return fetchAPI(`/api/escolas/${id}`)
  },

  create: async (escola: Omit<Escola, "id">): Promise<Escola> => {
    return fetchAPI("/api/escolas", {
      method: "POST",
      body: JSON.stringify(escola),
    })
  },

  update: async (id: string, escola: Partial<Escola>): Promise<Escola> => {
    return fetchAPI(`/api/escolas/${id}`, {
      method: "PUT",
      body: JSON.stringify(escola),
    })
  },

  delete: async (id: string): Promise<void> => {
    return fetchAPI(`/api/escolas/${id}`, {
      method: "DELETE",
    })
  },

  uploadCSV: async (file: File): Promise<{ count: number; escolas: Escola[] }> => {
    const formData = new FormData()
    formData.append("file", file)

    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

    const response = await fetch(`${API_BASE_URL}/api/escolas/upload`, {
      method: "POST",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "Erro no upload" }))
      throw new Error(error.message || `Erro: ${response.status}`)
    }

    return response.json()
  },
}
