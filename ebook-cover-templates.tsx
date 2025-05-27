"use client"

import ViverSaudavelLogo from "./dna-logo"

interface CoverTemplateProps {
  title: string
  subtitle: string
  author: string
  theme: "health" | "nutrition" | "fitness" | "mental" | "recipes" | "prevention" | "lifestyle"
  variant?: "modern" | "minimal" | "bold" | "organic"
  customColors?: {
    primary: string
    secondary: string
    accent: string
  }
}

export function EbookCoverTemplate({
  title,
  subtitle,
  author,
  theme,
  variant = "modern",
  customColors,
}: CoverTemplateProps) {
  const themeConfig = {
    health: {
      colors: customColors || {
        primary: "from-blue-600 to-cyan-500",
        secondary: "from-blue-100 to-cyan-50",
        accent: "#3B82F6",
      },
      icon: "🏥",
      pattern: "medical",
    },
    nutrition: {
      colors: customColors || {
        primary: "from-emerald-600 to-green-500",
        secondary: "from-emerald-100 to-green-50",
        accent: "#10B981",
      },
      icon: "🥗",
      pattern: "organic",
    },
    fitness: {
      colors: customColors || {
        primary: "from-orange-600 to-red-500",
        secondary: "from-orange-100 to-red-50",
        accent: "#EA580C",
      },
      icon: "💪",
      pattern: "dynamic",
    },
    mental: {
      colors: customColors || {
        primary: "from-purple-600 to-indigo-500",
        secondary: "from-purple-100 to-indigo-50",
        accent: "#7C3AED",
      },
      icon: "🧠",
      pattern: "calm",
    },
    recipes: {
      colors: customColors || {
        primary: "from-amber-600 to-orange-500",
        secondary: "from-amber-100 to-orange-50",
        accent: "#D97706",
      },
      icon: "👨‍🍳",
      pattern: "kitchen",
    },
    prevention: {
      colors: customColors || {
        primary: "from-teal-600 to-cyan-500",
        secondary: "from-teal-100 to-cyan-50",
        accent: "#0D9488",
      },
      icon: "🛡️",
      pattern: "shield",
    },
    lifestyle: {
      colors: customColors || {
        primary: "from-pink-600 to-rose-500",
        secondary: "from-pink-100 to-rose-50",
        accent: "#EC4899",
      },
      icon: "🌟",
      pattern: "lifestyle",
    },
  }

  const config = themeConfig[theme]

  if (variant === "minimal") {
    return (
      <div className="w-80 h-[480px] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden relative">
        {/* Minimal header */}
        <div className="p-6 border-b border-gray-100">
          <ViverSaudavelLogo variant="compact" size={120} />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-4xl">{config.icon}</div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800 leading-tight">{title}</h1>
              <p className="text-gray-600 text-sm leading-relaxed">{subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`h-1 bg-gradient-to-r ${config.colors.primary} rounded-full`}></div>
            <p className="text-gray-500 text-sm font-medium">{author}</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "bold") {
    return (
      <div
        className={`w-80 h-[480px] bg-gradient-to-br ${config.colors.primary} rounded-2xl shadow-xl overflow-hidden relative text-white`}
      >
        {/* Bold background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="boldPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#boldPattern)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          <div className="space-y-6">
            <ViverSaudavelLogo variant="horizontal" size={160} />

            <div className="space-y-4">
              <div className="text-5xl">{config.icon}</div>
              <h1 className="text-3xl font-bold leading-tight">{title}</h1>
              <p className="text-white/90 leading-relaxed">{subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/20 h-px w-full"></div>
            <p className="text-white/80 font-medium">{author}</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "organic") {
    return (
      <div className="w-80 h-[480px] bg-white rounded-2xl shadow-xl overflow-hidden relative">
        {/* Organic background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.colors.secondary}`}>
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 600">
            <path d="M0,300 Q100,200 200,300 T400,300 L400,600 L0,600 Z" fill={config.colors.accent} opacity="0.1" />
            <path d="M0,400 Q150,350 300,400 T600,400 L600,600 L0,600 Z" fill={config.colors.accent} opacity="0.05" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          <div className="space-y-6">
            <ViverSaudavelLogo variant="compact" size={140} />

            <div className="space-y-4">
              <div className="text-4xl">{config.icon}</div>
              <h1 className="text-2xl font-bold text-gray-800 leading-tight">{title}</h1>
              <p className="text-gray-600 leading-relaxed">{subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`h-2 bg-gradient-to-r ${config.colors.primary} rounded-full`}></div>
            <p className="text-gray-700 font-medium">{author}</p>
          </div>
        </div>
      </div>
    )
  }

  // Default: modern variant
  return (
    <div
      className={`w-80 h-[480px] bg-gradient-to-br ${config.colors.primary} rounded-2xl shadow-xl overflow-hidden relative`}
    >
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 600">
          <defs>
            <linearGradient id="modernGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon points="0,0 400,0 300,200 0,150" fill="url(#modernGrad)" />
          <polygon points="400,600 0,600 100,400 400,450" fill="url(#modernGrad)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
        <div className="space-y-6">
          <ViverSaudavelLogo variant="horizontal" size={160} />

          <div className="space-y-4">
            <div className="text-4xl">{config.icon}</div>
            <h1 className="text-3xl font-bold leading-tight">{title}</h1>
            <p className="text-white/90 leading-relaxed">{subtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/30 h-px w-full"></div>
          <p className="text-white/90 font-medium">{author}</p>
        </div>
      </div>
    </div>
  )
}
