import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Viver Saudável - Ebooks de Saúde para 50+",
  description: "Ebooks especializados em saúde, alimentação saudável e exercícios para pessoas com mais de 50 anos",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="font-sans antialiased bg-white">{children}</body>
    </html>
  )
}
