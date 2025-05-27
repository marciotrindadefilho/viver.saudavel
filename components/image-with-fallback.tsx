"use client"

import type React from "react"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  style?: React.CSSProperties
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=400&width=800",
  className = "",
  style = {},
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${className}`} style={style}>
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-200"
          style={{
            background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
            backgroundSize: "200% 100%",
          }}
        >
          <span className="text-gray-500 text-sm">Carregando...</span>
        </div>
      )}
      <img
        src={imgSrc || fallbackSrc}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        style={style}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
          setImgSrc(fallbackSrc)
        }}
      />
      {hasError && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
          Imagem alternativa
        </div>
      )}
    </div>
  )
}
