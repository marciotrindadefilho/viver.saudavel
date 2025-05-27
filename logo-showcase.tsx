import ViverSaudavelLogo from "./dna-logo"

export default function EbookLogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Logo Viver Saudável</h1>
          <p className="text-lg text-gray-600">Ebooks de Saúde, Alimentação Saudável e Esportes</p>
        </div>

        {/* Logo Variations */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Variações do Logo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Full Logo */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Completo</h3>
              <div className="flex justify-center">
                <ViverSaudavelLogo variant="full" size={180} />
              </div>
            </div>

            {/* Horizontal */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Horizontal</h3>
              <div className="flex justify-center items-center h-24">
                <ViverSaudavelLogo variant="horizontal" size={200} />
              </div>
            </div>

            {/* Compact */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Compacto</h3>
              <div className="flex justify-center items-center h-24">
                <ViverSaudavelLogo variant="compact" size={180} />
              </div>
            </div>

            {/* Icon */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Ícone</h3>
              <div className="flex justify-center items-center h-24">
                <ViverSaudavelLogo variant="icon" size={120} />
              </div>
            </div>
          </div>
        </div>

        {/* Ebook Cover Mockups */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Aplicação em Capas de Ebooks</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Health Ebook */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-2xl shadow-xl text-white aspect-[3/4] flex flex-col justify-between">
              <div className="space-y-4">
                <ViverSaudavelLogo variant="horizontal" size={160} className="text-white" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Guia Completo de Saúde Preventiva</h3>
                  <p className="text-blue-100 text-sm">
                    Como manter seu corpo saudável através de hábitos simples e eficazes
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Dr. João Silva</p>
              </div>
            </div>

            {/* Nutrition Ebook */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-500 p-8 rounded-2xl shadow-xl text-white aspect-[3/4] flex flex-col justify-between">
              <div className="space-y-4">
                <ViverSaudavelLogo variant="horizontal" size={160} />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Alimentação Inteligente</h3>
                  <p className="text-emerald-100 text-sm">Receitas nutritivas e práticas para uma vida mais saudável</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Nutricionista Ana Costa</p>
              </div>
            </div>

            {/* Sports Ebook */}
            <div className="bg-gradient-to-br from-pink-600 to-orange-500 p-8 rounded-2xl shadow-xl text-white aspect-[3/4] flex flex-col justify-between">
              <div className="space-y-4">
                <ViverSaudavelLogo variant="horizontal" size={160} />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Exercícios em Casa</h3>
                  <p className="text-pink-100 text-sm">Treinos eficazes sem equipamentos para todos os níveis</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Personal Trainer Carlos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Headers */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Cabeçalhos de Capítulos</h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Chapter 1 */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4 mb-4">
                <ViverSaudavelLogo variant="icon" size={40} />
                <div>
                  <span className="text-sm text-gray-500 font-medium">CAPÍTULO 1</span>
                  <h3 className="text-xl font-bold text-gray-800">Fundamentos da Saúde</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Neste capítulo, exploraremos os pilares fundamentais para uma vida saudável...
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4 mb-4">
                <ViverSaudavelLogo variant="icon" size={40} />
                <div>
                  <span className="text-sm text-gray-500 font-medium">CAPÍTULO 2</span>
                  <h3 className="text-xl font-bold text-gray-800">Nutrição Balanceada</h3>
                </div>
              </div>
              <p className="text-gray-600">Aprenda como criar um plano alimentar equilibrado e sustentável...</p>
            </div>

            {/* Chapter 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <ViverSaudavelLogo variant="icon" size={40} />
                <div>
                  <span className="text-sm text-gray-500 font-medium">CAPÍTULO 3</span>
                  <h3 className="text-xl font-bold text-gray-800">Atividade Física Regular</h3>
                </div>
              </div>
              <p className="text-gray-600">Descubra exercícios práticos que se adaptam à sua rotina...</p>
            </div>
          </div>
        </div>

        {/* Digital Formats */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Formatos Digitais</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kindle Format */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <ViverSaudavelLogo variant="compact" size={120} />
                  <span className="text-gray-400 text-xs">KINDLE</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Guia de Alimentação Saudável</h3>
                <p className="text-gray-300 text-sm">Transforme sua relação com a comida...</p>
              </div>
            </div>

            {/* PDF Format */}
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <ViverSaudavelLogo variant="compact" size={120} />
                  <span className="text-gray-500 text-xs">PDF</span>
                </div>
                <h3 className="text-gray-800 text-lg font-semibold">Manual de Exercícios</h3>
                <p className="text-gray-600 text-sm">Treinos ilustrados para casa...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Elements */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">Elementos da Marca</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800">Saúde</h3>
              <p className="text-sm text-gray-600">DNA e ciência representam conhecimento baseado em evidências</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800">Alimentação</h3>
              <p className="text-sm text-gray-600">Elementos orgânicos simbolizam nutrição natural</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800">Esportes</h3>
              <p className="text-sm text-gray-600">Linhas dinâmicas transmitem movimento e energia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
