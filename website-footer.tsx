import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import ViverSaudavelLogo from "./dna-logo"

export default function WebsiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <ViverSaudavelLogo variant="compact" size={160} />
            <p className="text-gray-300 leading-relaxed">
              Dedicados ao bem-estar e qualidade de vida das pessoas com mais de 50 anos desde 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nossos Ebooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Exercícios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nutrição
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Saúde Mental
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Prevenção
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">João Pessoa, PB</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">(83) 9 9910-5011</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-pink-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">contato@viversaudavel.com</span>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-3">Receba dicas de saúde semanalmente</p>
              <div className="flex gap-2 w-full">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 min-w-0 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
                />
                <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium flex-shrink-0">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Viver Saudável. Todos os direitos reservados. Fundada por Georgia Espinola Moura.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
