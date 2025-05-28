"use client"

export default function ViverSaudavelLogo({
  size = 200,
  variant = "full",
  className = "",
}: {
  size?: number
  variant?: "full" | "compact" | "horizontal" | "icon"
  className?: string
}) {
  const scale = size / 200

  if (variant === "icon") {
    return (
      <div className={`${className}`} style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
        <svg width="60" height="60" viewBox="0 0 60 60" className="overflow-visible">
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="33%" stopColor="#10B981" />
              <stop offset="66%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>

          {/* Simplified DNA + Leaf + Sport elements */}
          <circle cx="30" cy="30" r="25" fill="url(#iconGradient)" opacity="0.1" />

          {/* DNA helix simplified */}
          <path
            d="M15 15 Q30 25 45 15 Q30 35 15 45 Q30 35 45 45"
            stroke="url(#iconGradient)"
            strokeWidth="3"
            fill="none"
          />

          {/* Organic leaf element */}
          <path d="M35 20 Q40 15 45 20 Q40 25 35 20" fill="#10B981" opacity="0.7" />

          {/* Dynamic sport line */}
          <path d="M20 40 Q25 35 30 40 Q35 35 40 40" stroke="#EC4899" strokeWidth="2" fill="none" />
        </svg>
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div
        className={`flex items-center gap-3 ${className}`}
        style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
      >
        {/* Simplified DNA */}
        <svg width="40" height="50" viewBox="0 0 40 50">
          <defs>
            <linearGradient id="compactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="compactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          <path d="M10 5 Q5 15 10 25 Q15 35 10 45" stroke="url(#compactGradient1)" strokeWidth="2.5" fill="none" />
          <path d="M30 5 Q35 15 30 25 Q25 35 30 45" stroke="url(#compactGradient2)" strokeWidth="2.5" fill="none" />

          {[12, 20, 28, 36].map((y, index) => (
            <line
              key={index}
              x1="10"
              y1={y}
              x2="30"
              y2={y}
              stroke={index % 2 === 0 ? "#3B82F6" : "#EC4899"}
              strokeWidth="1.5"
              opacity="0.7"
            />
          ))}
        </svg>

        <div className="flex flex-col">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Viver Saudável
          </span>
          <span className="text-xs text-gray-500 font-medium">EBOOKS</span>
        </div>
      </div>
    )
  }

  if (variant === "horizontal") {
    return (
      <div
        className={`flex items-center gap-4 ${className}`}
        style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
      >
        {/* DNA with nutrition and sport elements */}
        <svg width="60" height="40" viewBox="0 0 60 40">
          <defs>
            <linearGradient id="horizGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="horizGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          {/* Horizontal DNA */}
          <path
            d="M5 15 Q15 10 25 15 Q35 20 45 15 Q55 10 60 15"
            stroke="url(#horizGradient1)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M5 25 Q15 30 25 25 Q35 20 45 25 Q55 30 60 25"
            stroke="url(#horizGradient2)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Connecting elements */}
          {[10, 20, 30, 40, 50].map((x, index) => (
            <line
              key={index}
              x1={x}
              y1="15"
              x2={x}
              y2="25"
              stroke={index % 2 === 0 ? "#3B82F6" : "#EC4899"}
              strokeWidth="1.5"
              opacity="0.6"
            />
          ))}

          {/* Nutrition leaf */}
          <path d="M50 8 Q55 5 58 8 Q55 12 50 8" fill="#10B981" opacity="0.8" />

          {/* Sport dynamic element */}
          <path d="M8 32 Q12 30 16 32" stroke="#EC4899" strokeWidth="2" fill="none" />
        </svg>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Viver
          </span>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Saudável
          </span>
          <span className="text-sm text-gray-500 font-medium ml-2">EBOOKS</span>
        </div>
      </div>
    )
  }

  // Full variant (default)
  return (
    <div
      className={`flex items-center gap-4 ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
    >
      {/* Enhanced DNA with health elements */}
      <div className="relative">
        <svg width="80" height="100" viewBox="0 0 80 100" className="overflow-visible">
          <defs>
            <linearGradient id="dnaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="dnaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          {/* DNA strands */}
          <path
            d="M20 10 Q10 25 20 40 Q30 55 20 70 Q10 85 20 100"
            stroke="url(#dnaGradient1)"
            strokeWidth="3"
            fill="none"
            className="drop-shadow-sm"
          />
          <path
            d="M60 10 Q70 25 60 40 Q50 55 60 70 Q70 85 60 100"
            stroke="url(#dnaGradient2)"
            strokeWidth="3"
            fill="none"
            className="drop-shadow-sm"
          />

          {/* Base pairs */}
          {[15, 25, 35, 45, 55, 65, 75, 85].map((y, index) => {
            const leftX = 20 + Math.sin((y - 10) * 0.1) * 10
            const rightX = 60 - Math.sin((y - 10) * 0.1) * 10

            return (
              <g key={index}>
                <line
                  x1={leftX}
                  y1={y}
                  x2={rightX}
                  y2={y}
                  stroke={index % 2 === 0 ? "#3B82F6" : "#EC4899"}
                  strokeWidth="2"
                  opacity="0.8"
                />
                <circle cx={leftX} cy={y} r="2" fill={index % 2 === 0 ? "#3B82F6" : "#EC4899"} />
                <circle cx={rightX} cy={y} r="2" fill={index % 2 === 0 ? "#06B6D4" : "#F59E0B"} />
              </g>
            )
          })}

          {/* Nutrition elements (organic shapes) */}
          <path d="M75 20 Q80 15 85 20 Q80 25 75 20" fill="#10B981" opacity="0.7" />
          <path d="M-5 60 Q0 55 5 60 Q0 65 -5 60" fill="#10B981" opacity="0.7" />

          {/* Sport/movement elements (dynamic lines) */}
          <path d="M85 70 Q90 65 95 70 Q90 75 85 80" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M-10 30 Q-5 25 0 30 Q-5 35 -10 40" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* Enhanced text */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
          Viver
        </h1>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 bg-clip-text text-transparent leading-tight -mt-1">
          Saudável
        </h2>
        <div className="text-xs text-gray-500 font-medium tracking-wider mt-1">SAÚDE • ALIMENTAÇÃO • ESPORTES</div>
      </div>
    </div>
  )
}
