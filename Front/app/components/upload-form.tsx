"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Progress } from "../components/ui/progress"
import { FileUp, CheckCircle2, AlertCircle, Upload } from "lucide-react"

export function UploadForm() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [preview, setPreview] = useState<string[][]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type !== "text/csv" && !selectedFile.name.endsWith(".csv")) {
        setError("Por favor, selecione um arquivo CSV válido")
        return
      }
      setFile(selectedFile)
      setError("")
      setSuccess(false)

      // Preview do CSV
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        const lines = text.split("\n").slice(0, 6) // Primeiras 6 linhas
        const data = lines.map((line) => line.split(","))
        setPreview(data)
      }
      reader.readAsText(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Por favor, selecione um arquivo")
      return
    }

    setUploading(true)
    setProgress(0)
    setError("")

    try {
      // Simular progresso visual
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

    // Enviar arquivo para API
    //   const result = await escolasAPI.uploadCSV(file)

      clearInterval(progressInterval)
      setProgress(100)
      setUploading(false)
      setSuccess(true)

    //   console.log(` ${result.count} escolas importadas com sucesso`)

      setTimeout(() => {
        router.push("/dashboard/escolas")
      }, 2000)
    } catch (err) {
      setUploading(false)
      setProgress(0)
      setError(err instanceof Error ? err.message : "Erro ao fazer upload do arquivo")
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Upload de Arquivo CSV</CardTitle>
          <CardDescription>
            Selecione um arquivo CSV contendo os dados das instalações físicas das escolas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500 bg-green-500/10 text-green-500">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>Arquivo importado com sucesso! Redirecionando...</AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/80 border-border transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FileUp className="w-10 h-10 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                </p>
                <p className="text-xs text-muted-foreground">Arquivo CSV (MAX. 10MB)</p>
                {file && <p className="mt-2 text-sm font-medium text-foreground">Arquivo selecionado: {file.name}</p>}
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept=".csv"
                onChange={handleFileChange}
                disabled={uploading}
              />
            </label>
          </div>

          {uploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Processando arquivo...</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            {uploading ? "Importando..." : "Importar Dados"}
          </Button>
        </CardContent>
      </Card>

      {preview.length > 0 && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Preview dos Dados</CardTitle>
            <CardDescription>Primeiras linhas do arquivo CSV</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {preview[0]?.map((header, index) => (
                      <th key={index} className="text-left p-2 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {preview.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-border">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-2 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
