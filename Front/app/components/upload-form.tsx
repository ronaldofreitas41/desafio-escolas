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
  const [uploadStats, setUploadStats] = useState({ total: 0, success: 0, failed: 0 })

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

      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        const lines = text.split(";").slice(0, 6)
        const data = lines.map((line) => line.split(","))
        setPreview(data)
      }
      reader.readAsText(selectedFile)
    }
  }
  const parseCSVToJSON = (csvText: string): Record<string, any>[] => {
    const delimiter = csvText.includes(";") ? ";" : ","; // detecta delimitador automaticamente
    const lines = csvText.split("\n").filter((line) => line.trim() !== "");

    if (lines.length === 0) return [];

    const headers = lines[0].split(delimiter).map((h) => h.trim());
    const data: Record<string, any>[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(delimiter);
      const row: Record<string, any> = {};

      headers.forEach((header, index) => {
        const value = values[index]?.trim() || "";

        if (value === "" || value === "null" || value === "NULL") {
          row[header] = null;
        } else if (!isNaN(Number(value)) && value !== "") {
          row[header] = Number(value);
        } else {
          row[header] = value;
        }
      });

      data.push(row);
    }

    return data;
  };  

  const handleUpload = async () => {
    if (!file) {
      setError("Por favor, selecione um arquivo")
      return
    }

    setUploading(true)
    setProgress(0)
    setError("")
    setUploadStats({ total: 0, success: 0, failed: 0 })

    try {
      const text = await file.text()
      const rows = parseCSVToJSON(text)

      if (rows.length === 0) {
        throw new Error("O arquivo CSV está vazio ou não possui dados válidos")
      }

      const total = rows.length
      let successCount = 0
      let failedCount = 0

      setUploadStats({ total, success: 0, failed: 0 })

      console.log("Rows", JSON.stringify(rows[0]))
      const body = JSON.stringify(rows[0])
      console.log("Body: ", body);

      for (let i = 0; i < rows.length; i++) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/escolas`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(rows[i]),
          })

          if (response.ok) {
            successCount++
          } else {
            failedCount++
            console.error(`Erro ao importar linha ${i + 1}:`, await response.text())
          }
        } catch (err) {
          failedCount++
          console.error(`Erro ao importar linha ${i + 1}:`, err)
        }

        const currentProgress = Math.round(((i + 1) / total) * 100)
        setProgress(currentProgress)
        setUploadStats({ total, success: successCount, failed: failedCount })
      }

      setUploading(false)
      setSuccess(true)

      if (failedCount > 0) {
        setError(`${successCount} escolas importadas com sucesso. ${failedCount} falharam.`)
      }

      setTimeout(() => {
        // router.push("/dashboard/escolas")
      }, 3000)
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
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Total: {uploadStats.total}</span>
                <span className="text-green-600">Sucesso: {uploadStats.success}</span>
                <span className="text-red-600">Falhas: {uploadStats.failed}</span>
              </div>
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
