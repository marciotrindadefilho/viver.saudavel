import { Download, Star, Clock } from "lucide-react"

export default function EbooksSection() {
  const ebooks = [
    {
      title: "Exercícios para Seniors",
      description: "Guia completo de atividades físicas seguras e eficazes para pessoas 50+",
      price: "R$ 29,90",
      rating: 4.8,
      downloads: 1200,
      category: "Fitness",
      color: "from-orange-500 to-red-500",
      emoji: "🏃‍♂️",
    },
    {
      title: "Alimentação Saudável 50+",
      description: "Nutrição adequada para manter energia e vitalidade na maturidade",
      price: "R$ 24,90",
      rating: 4.9,
      downloads: 980,
      category: "Nutrição",
      color: "from-emerald-500 to-green-500",
      emoji: "🥗",
    },
    {
      title: "Saúde Mental na Maturidade",
      description: "Estratégias para manter o bem-estar emocional e mental",
      price: "R$ 27,90",
      rating: 4.7,
      downloads: 750,
      category: "Bem-estar",
      color: "from-purple-500 to-indigo-500",
      emoji: "🧠",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* DNA Background Pattern with Static SVG */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            className="w-full h-full rotate-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 20 Q40 10 60 20 Q80 30 100 20 Q120 10 140 20" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M20 40 Q40 30 60 40 Q80 50 100 40 Q120 30 140 40" stroke="#10b981" strokeWidth="2" fill="none" />
            <path d="M20 60 Q40 50 60 60 Q80 70 100 60 Q120 50 140 60" stroke="#ec4899" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32">
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            className="w-full h-full -rotate-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 16 Q32 8 48 16 Q64 24 80 16 Q96 8 112 16" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M16 32 Q32 24 48 32 Q64 40 80 32 Q96 24 112 32" stroke="#10b981" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nossos{" "}
            <span
              style={{
                background: "linear-gradient(to right, #2563eb, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ebooks
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conteúdo especializado desenvolvido por profissionais da saúde para promover seu bem-estar e qualidade de
            vida, baseado em evidências científicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col transform hover:scale-105 duration-300"
            >
              {/* Image with DNA accent using SVG */}
              <div
                className={`h-48 bg-gradient-to-br ${ebook.color} p-6 flex items-center justify-center relative overflow-hidden`}
              >
                {/* DNA background in card using SVG */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10 Q20 5 30 10 Q40 15 50 10"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <path
                      d="M10 20 Q20 15 30 20 Q40 25 50 20"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <path
                      d="M10 30 Q20 25 30 30 Q40 35 50 30"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                {/* Emoji for visual appeal */}
                <div className="text-6xl relative z-10" role="img" aria-label={ebook.category}>
                  {ebook.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 text-white text-xs font-semibold rounded-full`}
                      style={{
                        background: `linear-gradient(to right, ${ebook.color.replace("from-", "").replace(" to-", ", ")})`,
                      }}
                    >
                      {ebook.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-semibold text-gray-700">{ebook.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{ebook.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ebook.description}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Download size={14} />
                    <span>{ebook.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>Leitura rápida</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-800">{ebook.price}</div>
                  <button
                    className={`text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    style={{
                      background: `linear-gradient(to right, ${ebook.color.replace("from-", "").replace(" to-", ", ")})`,
                    }}
                    aria-label={`Comprar ebook ${ebook.title}`}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              background: "linear-gradient(to right, #2563eb, #10b981)",
            }}
          >
            Ver Todos os Ebooks
          </button>
        </div>
      </div>
    </section>
  )
}
