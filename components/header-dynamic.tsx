"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "./auth-provider"
import { signOut } from "@/lib/auth"

export default function HeaderDynamic() {
  const { user, loading } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">VS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Viver Saudável
              </h1>
              <p className="text-xs text-gray-500">SAÚDE • ALIMENTAÇÃO • ESPORTES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Início
            </Link>
            <Link href="/ebooks" className="text-gray-700 hover:text-emerald-600 font-medium">
              Ebooks
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-purple-600 font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-orange-600 font-medium">
              Contato
            </Link>

            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-4">
                    <Link href="/carrinho" className="text-gray-700 hover:text-blue-600">
                      🛒
                    </Link>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Olá, {user.user_metadata?.name || user.email}</span>
                      <button onClick={handleSignOut} className="text-sm text-red-600 hover:text-red-700">
                        Sair
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                      Login
                    </Link>
                    <Link
                      href="/cadastro"
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Cadastrar
                    </Link>
                  </div>
                )}
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Início
              </Link>
              <Link href="/ebooks" className="text-gray-700 hover:text-emerald-600 font-medium">
                Ebooks
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-purple-600 font-medium">
                Sobre
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-orange-600 font-medium">
                Contato
              </Link>

              {!loading && (
                <>
                  {user ? (
                    <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                      <Link href="/carrinho" className="text-gray-700 hover:text-blue-600">
                        🛒 Carrinho
                      </Link>
                      <span className="text-sm text-gray-600">Olá, {user.user_metadata?.name || user.email}</span>
                      <button onClick={handleSignOut} className="text-left text-sm text-red-600 hover:text-red-700">
                        Sair
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                      <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                        Login
                      </Link>
                      <Link
                        href="/cadastro"
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                      >
                        Cadastrar
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
