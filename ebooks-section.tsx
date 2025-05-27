import { Download, Star, Clock } from "lucide-react"

export default function EbooksSection() {
  const ebooks = [
    {
      title: "Exercícios para Seniors",
      description: "Guia completo de atividades físicas seguras e eficazes para pessoas 50+",
      price: "R$ 29,90",
      rating: 4.8,
      downloads: 1200,
      image: "/placeholder.svg?height=300&width=200",
      category: "Fitness",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Alimentação Saudável 50+",
      description: "Nutrição adequada para manter energia e vitalidade na maturidade",
      price: "R$ 24,90",
      rating: 4.9,
      downloads: 980,
      image: "/placeholder.svg?height=300&width=200",
      category: "Nutrição",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Saúde Mental na Maturidade",
      description: "Estratégias para manter o bem-estar emocional e mental",
      price: "R$ 27,90",
      rating: 4.7,
      downloads: 750,
      image: "/placeholder.svg?height=300&width=200",
      category: "Bem-estar",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* DNA Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40">
          <img src="/images/dna-background.png" alt="DNA" className="w-full h-full object-cover rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32">
          <img src="/images/dna-background.png" alt="DNA" className="w-full h-full object-cover -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
          <img src="/images/dna-background.png" alt="DNA" className="w-full h-full object-cover opacity-30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Ebooks</span>
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col"
            >
              {/* Image with DNA accent */}
              <div
                className={`h-48 bg-gradient-to-br ${ebook.color} p-6 flex items-center justify-center relative overflow-hidden`}
              >
                {/* DNA background in card */}
                <div className="absolute inset-0 opacity-10">
                  <img src="/images/dna-background.png" alt="DNA" className="w-full h-full object-cover" />
                </div>
                <img
                  src={ebook.image || "/placeholder.svg"}
                  alt={ebook.title}
                  className="h-full w-auto rounded-lg shadow-lg relative z-10"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${ebook.color} text-white text-xs font-semibold rounded-full`}
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
                    className={`bg-gradient-to-r ${ebook.color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all`}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all shadow-lg">
            Ver Todos os Ebooks
          </button>
        </div>
      </div>
    </section>
  )
}
