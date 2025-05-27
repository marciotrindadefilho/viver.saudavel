import { ArrowRight, Heart, Users, BookOpen } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center">
      {/* DNA Hero Background Image with Static Fallback */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dna-hero-background.png"
          alt="DNA Structure Background"
          className="w-full h-full object-cover opacity-80"
          style={{ objectPosition: "center center" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23111827'/%3E%3Cstop offset='100%25' style='stop-color:%230f172a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23bg)'/%3E%3Cpath d='M100 100 Q200 50 300 100 Q400 150 500 100 Q600 50 700 100' stroke='%2322d3ee' strokeWidth='3' fill='none' opacity='0.3'/%3E%3Cpath d='M100 200 Q200 150 300 200 Q400 250 500 200 Q600 150 700 200' stroke='%233b82f6' strokeWidth='3' fill='none' opacity='0.3'/%3E%3Cpath d='M100 300 Q200 250 300 300 Q400 350 500 300 Q600 250 700 300' stroke='%2310b981' strokeWidth='3' fill='none' opacity='0.3'/%3E%3C/svg%3E"
          }}
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.6))",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{
                  background: "linear-gradient(to right, #22d3ee, #3b82f6, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "#22d3ee", // fallback color
                }}
              >
                Viver com Saúde e Vitalidade
              </h1>
              <p
                className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
                style={{
                  background: "linear-gradient(to right, #22d3ee, #3b82f6, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "#22d3ee", // fallback color
                }}
              >
                Dedicados ao bem-estar e qualidade de vida das pessoas com mais de 50 anos. Descubra como viver de forma
                mais saudável, ativa e plena.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button
                className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl min-w-[280px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                style={{
                  background: "linear-gradient(to right, #06b6d4, #3b82f6, #10b981)",
                  border: "1px solid rgba(34, 211, 238, 0.3)",
                }}
                aria-label="Explorar ebooks disponíveis"
              >
                Explore Nossos Ebooks
                <ArrowRight size={20} />
              </button>
              <button
                className="text-cyan-300 px-10 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm min-w-[200px] hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                style={{
                  border: "2px solid rgba(34, 211, 238, 0.5)",
                  backgroundColor: "rgba(6, 182, 212, 0.05)",
                }}
                aria-label="Saber mais sobre a empresa"
              >
                Saiba Mais
              </button>
            </div>

            {/* Stats with better alignment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                    style={{
                      background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                      boxShadow: "0 10px 25px rgba(6, 182, 212, 0.25)",
                    }}
                  >
                    <Users className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-gray-300 font-medium">Pessoas Atendidas</div>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                    style={{
                      background: "linear-gradient(to right, #10b981, #059669)",
                      boxShadow: "0 10px 25px rgba(16, 185, 129, 0.25)",
                    }}
                  >
                    <BookOpen className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-300 font-medium">Ebooks Publicados</div>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                    style={{
                      background: "linear-gradient(to right, #ec4899, #a855f7)",
                      boxShadow: "0 10px 25px rgba(236, 72, 153, 0.25)",
                    }}
                  >
                    <Heart className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-gray-300 font-medium">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <div className="text-gray-400 text-sm mb-3">Role para descobrir mais</div>
          <div
            className="w-6 h-10 rounded-full flex justify-center mx-auto"
            style={{ border: "2px solid rgba(34, 211, 238, 0.5)" }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{
                background: "linear-gradient(to bottom, #22d3ee, transparent)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
