import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 62,
      location: "João Pessoa, PB",
      text: "Os ebooks da Viver Saudável mudaram minha vida! Aos 62 anos, nunca me senti tão ativa e saudável. As orientações são claras e fáceis de seguir.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "João Santos",
      age: 58,
      location: "Campina Grande, PB",
      text: "Excelente conteúdo! Como alguém que sempre teve dificuldades com exercícios, encontrei aqui um guia perfeito para minha idade. Recomendo muito!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ana Costa",
      age: 65,
      location: "Recife, PE",
      text: "A Georgia é uma profissional excepcional. Seus ebooks são baseados em ciência e experiência real. Me sinto mais confiante sobre minha saúde.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black">O que nossos leitores dizem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com nossos conteúdos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-2xl relative">
              <Quote className="absolute top-4 right-4 text-blue-200" size={32} />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-blue-100">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}, {testimonial.age} anos
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Junte-se a milhares de pessoas que já transformaram suas vidas!</h3>
            <p className="text-blue-100 mb-6">Comece hoje mesmo sua jornada para uma vida mais saudável e ativa</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
