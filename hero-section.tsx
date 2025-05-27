import { ArrowRight, Heart, Users, BookOpen } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center">
      {/* DNA Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/dna-hero-background.png"
          alt="DNA Structure Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Viver com Saúde e Vitalidade
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Dedicados ao bem-estar e qualidade de vida das pessoas com mais de 50 anos. Descubra como viver de forma
                mais saudável, ativa e plena.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:via-blue-600 hover:to-emerald-600 transition-all flex items-center justify-center gap-3 shadow-2xl border border-cyan-400/30 min-w-[280px]">
                Explore Nossos Ebooks
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-cyan-400/50 text-cyan-300 px-10 py-4 rounded-xl font-semibold text-lg hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-400/10 transition-all backdrop-blur-sm min-w-[200px]">
                Saiba Mais
              </button>
            </div>

            {/* Stats with better alignment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Users className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-gray-300 font-medium">Pessoas Atendidas</div>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <BookOpen className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-300 font-medium">Ebooks Publicados</div>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/25">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-gray-400 text-sm mb-3">Role para descobrir mais</div>
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
