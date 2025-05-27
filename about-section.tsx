import { Award, MapPin, Calendar, Stethoscope } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Nossa{" "}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Missão
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Viver Saudável foi criada em 2019 com o intuito de contribuir com a saúde e bem-estar das pessoas de
                maior idade, especialmente aquelas com mais de 50 anos, baseando-se em conhecimento científico e
                evidências.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="text-white" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">Georgia Espinola Moura</h3>
                  <p className="text-blue-600 font-semibold">Fisioterapeuta • Fundadora</p>
                  <p className="text-gray-600">
                    Especialista em reabilitação e bem-estar para a terceira idade, com vasta experiência em João
                    Pessoa. Comprometida com a aplicação de conhecimento científico na promoção da saúde.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Calendar className="text-blue-600" size={20} />
                <div>
                  <div className="font-semibold text-gray-800">Fundada em</div>
                  <div className="text-gray-600">2019</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <MapPin className="text-emerald-600" size={20} />
                <div>
                  <div className="font-semibold text-gray-800">Localização</div>
                  <div className="text-gray-600">João Pessoa, PB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Nossos Valores</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Cuidado Especializado</h4>
                    <p className="text-gray-600 text-sm">
                      Conteúdo desenvolvido especificamente para as necessidades do público 50+
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Conhecimento Científico</h4>
                    <p className="text-gray-600 text-sm">
                      Informações baseadas em evidências científicas e experiência profissional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Acessibilidade</h4>
                    <p className="text-gray-600 text-sm">
                      Conteúdo claro, prático e fácil de entender para todos os níveis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Qualidade de Vida</h4>
                    <p className="text-gray-600 text-sm">Foco no bem-estar integral: físico, mental e emocional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-yellow-400" size={24} />
                <h4 className="text-lg font-semibold">Nossa Expertise</h4>
              </div>
              <p className="text-gray-200">
                Com formação em Fisioterapia e anos de experiência no atendimento à terceira idade, oferecemos conteúdo
                confiável e prático baseado em ciência para uma vida mais saudável e ativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
