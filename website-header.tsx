"use client"

import { useState } from "react"
import ViverSaudavelLogo from "./dna-logo"
import { Menu, X, ShoppingCart, User, Phone, Book, Store } from "lucide-react"

export default function WebsiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ViverSaudavelLogo variant="horizontal" size={180} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#loja"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <Store size={18} />
              Loja
            </a>
            <a
              href="#ebooks"
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              <Book size={18} />
              Ebooks
            </a>
            <a
              href="#carrinho"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative"
            >
              <ShoppingCart size={18} />
              Carrinho
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              <Phone size={18} />
              Fale Conosco
            </a>
            <a
              href="#login"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-emerald-700 font-medium transition-all"
            >
              <User size={18} />
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#loja"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              >
                <Store size={20} />
                Loja
              </a>
              <a
                href="#ebooks"
                className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
              >
                <Book size={20} />
                Ebooks
              </a>
              <a
                href="#carrinho"
                className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
              >
                <ShoppingCart size={20} />
                Carrinho
              </a>
              <a
                href="#contato"
                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
              >
                <Phone size={20} />
                Fale Conosco
              </a>
              <a
                href="#login"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-3 rounded-lg font-medium mt-2"
              >
                <User size={20} />
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
