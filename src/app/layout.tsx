import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viver Saudável - Ebooks de Saúde para 50+",
  description:
    "Ebooks especializados em saúde, alimentação saudável e exercícios para pessoas com mais de 50 anos. Baseado em conhecimento científico.",
  keywords:
    "saúde, ebooks, terceira idade, bem-estar, alimentação saudável, exercícios, fisioterapia, Georgia Espinola Moura",
  authors: [{ name: "Georgia Espinola Moura" }],
  creator: "Viver Saudável",
  publisher: "Viver Saudável",
  robots: "index, follow",
  openGraph: {
    title: "Viver Saudável - Ebooks de Saúde para 50+",
    description: "Ebooks especializados em saúde, alimentação saudável e exercícios para pessoas com mais de 50 anos.",
    url: "https://marciotrindadefilho.github.io/viver.saudavel.github.io/",
    siteName: "Viver Saudável",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viver Saudável - Ebooks de Saúde",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viver Saudável - Ebooks de Saúde para 50+",
    description: "Ebooks especializados em saúde, alimentação saudável e exercícios para pessoas com mais de 50 anos.",
    images: ["/images/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
