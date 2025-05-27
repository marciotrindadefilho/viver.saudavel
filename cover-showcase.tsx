import { EbookCoverTemplate } from "./ebook-cover-templates"

export default function CoverShowcase() {
  const coverExamples = [
    {
      title: "Saúde Preventiva",
      subtitle: "Estratégias científicas para prevenir doenças e manter o bem-estar",
      author: "Dr. João Silva",
      theme: "health" as const,
      variant: "modern" as const,
    },
    {
      title: "Nutrição Inteligente",
      subtitle: "Guia completo para uma alimentação equilibrada e saborosa",
      author: "Nutricionista Ana Costa",
      theme: "nutrition" as const,
      variant: "organic" as const,
    },
    {
      title: "Fitness em Casa",
      subtitle: "Treinos eficazes sem equipamentos para todos os níveis",
      author: "Personal Trainer Carlos",
      theme: "fitness" as const,
      variant: "bold" as const,
    },
    {
      title: "Mente Saudável",
      subtitle: "Técnicas de mindfulness e gestão do estresse para o dia a dia",
      author: "Psicóloga Maria Santos",
      theme: "mental" as const,
      variant: "minimal" as const,
    },
    {
      title: "Receitas Funcionais",
      subtitle: "50 receitas deliciosas que nutrem corpo e mente",
      author: "Chef Nutricionista Pedro",
      theme: "recipes" as const,
      variant: "modern" as const,
    },
    {
      title: "Prevenção Natural",
      subtitle: "Como fortalecer sua imunidade através de hábitos saudáveis",
      author: "Dr. Fernanda Lima",
      theme: "prevention" as const,
      variant: "organic" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Templates de Capa Personalizáveis</h1>
          <p className="text-lg text-gray-600">Ebooks Viver Saudável - Diferentes temas e estilos</p>
        </div>

        {/* Style Variants */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Estilos Disponíveis</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Modern Style */}
            <div className="text-center space-y-4">
              <EbookCoverTemplate
                title="Exemplo Moderno"
                subtitle="Design contemporâneo com elementos geométricos"
                author="Autor Exemplo"
                theme="health"
                variant="modern"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Moderno</h3>
                <p className="text-sm text-gray-600">Gradientes vibrantes com formas geométricas</p>
              </div>
            </div>

            {/* Minimal Style */}
            <div className="text-center space-y-4">
              <EbookCoverTemplate
                title="Exemplo Minimalista"
                subtitle="Design limpo e elegante para leitura profissional"
                author="Autor Exemplo"
                theme="mental"
                variant="minimal"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Minimalista</h3>
                <p className="text-sm text-gray-600">Fundo branco com elementos sutis</p>
              </div>
            </div>

            {/* Bold Style */}
            <div className="text-center space-y-4">
              <EbookCoverTemplate
                title="Exemplo Impactante"
                subtitle="Design chamativo para máximo impacto visual"
                author="Autor Exemplo"
                theme="fitness"
                variant="bold"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Impactante</h3>
                <p className="text-sm text-gray-600">Cores vibrantes com padrões dinâmicos</p>
              </div>
            </div>

            {/* Organic Style */}
            <div className="text-center space-y-4">
              <EbookCoverTemplate
                title="Exemplo Orgânico"
                subtitle="Design natural com formas fluidas e suaves"
                author="Autor Exemplo"
                theme="nutrition"
                variant="organic"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Orgânico</h3>
                <p className="text-sm text-gray-600">Formas naturais e cores suaves</p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Examples */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Exemplos por Tema</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverExamples.map((cover, index) => (
              <div key={index} className="text-center space-y-4">
                <EbookCoverTemplate {...cover} />
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">{cover.title}</h3>
                  <p className="text-sm text-gray-600 capitalize">
                    {cover.theme} • {cover.variant}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customization Options */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">Opções de Personalização</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Cores Personalizadas</h3>
              <p className="text-sm text-gray-600">Defina sua própria paleta de cores para combinar com seu conteúdo</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Textos Editáveis</h3>
              <p className="text-sm text-gray-600">Título, subtítulo e autor completamente personalizáveis</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Layouts Flexíveis</h3>
              <p className="text-sm text-gray-600">4 estilos diferentes para diferentes tipos de conteúdo</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Temas Específicos</h3>
              <p className="text-sm text-gray-600">7 temas pré-definidos com cores e ícones apropriados</p>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Como Usar os Templates</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-800">Escolha o Tema</h3>
              <p className="text-sm text-gray-600">
                Selecione entre saúde, nutrição, fitness, mental, receitas, prevenção ou lifestyle
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-800">Defina o Estilo</h3>
              <p className="text-sm text-gray-600">Escolha entre moderno, minimalista, impactante ou orgânico</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-800">Personalize</h3>
              <p className="text-sm text-gray-600">Adicione seu título, subtítulo, autor e cores personalizadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
