"use client"

import { useState } from "react"
import ViverSaudavelLogo from "./dna-logo"
import { Menu, X, ShoppingCart, User, Phone, Book, Store } from "lucide-react"

export default function WebsiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <ViverSaudavelLogo variant="horizontal" size={180} />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#loja"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <Store size={18} />
              <span>Loja</span>
            </a>
            <a
              href="#ebooks"
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              <Book size={18} />
              <span>Ebooks</span>
            </a>
            <a
              href="#carrinho"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative"
            >
              <ShoppingCart size={18} />
              <span>Carrinho</span>
              <span
                className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                style={{ backgroundColor: "#ef4444" }}
              >
                0
              </span>
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              <Phone size={18} />
              <span>Fale Conosco</span>
            </a>
            <a
              href="#login"
              className="flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
              style={{
                background: "linear-gradient(to right, #2563eb, #10b981)",
              }}
            >
              <User size={18} />
              <span>Login</span>
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              style={{ border: "none", background: "none" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <a
                href="#loja"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              >
                <Store size={20} />
                <span>Loja</span>
              </a>
              <a
                href="#ebooks"
                className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
              >
                <Book size={20} />
                <span>Ebooks</span>
              </a>
              <a
                href="#carrinho"
                className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
              >
                <ShoppingCart size={20} />
                <span>Carrinho</span>
              </a>
              <a
                href="#contato"
                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
              >
                <Phone size={20} />
                <span>Fale Conosco</span>
              </a>
              <a
                href="#login"
                className="flex items-center gap-3 text-white px-4 py-3 rounded-lg font-medium mt-2 shadow-md"
                style={{
                  background: "linear-gradient(to right, #2563eb, #10b981)",
                }}
              >
                <User size={20} />
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
