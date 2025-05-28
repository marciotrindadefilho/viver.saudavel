"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

interface Ebook {
  id: string
  title: string
  description: string
  price: number
  category: string
  cover_image: string
  rating: number
}

export default function EbooksPage() {
  const { user } = useAuth()
  const [ebooks, setEbooks] = useState<Ebook[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetchEbooks()
  }, [])

  const fetchEbooks = async () => {
    const { data, error } = await supabase.from("ebooks").select("*").order("created_at", { ascending: false })

    if (!error && data) {
      setEbooks(data)
    }
    setLoading(false)
  }

  const addToCart = async (ebookId: string) => {
    if (!user) {
      alert("Faça login para adicionar ao carrinho")
      return
    }

    const { error } = await supabase.from("cart_items").upsert({
      user_id: user.id,
      ebook_id: ebookId,
      quantity: 1,
    })

    if (!error) {
      alert("Ebook adicionado ao carrinho!")
    }
  }

  const filteredEbooks = filter === "all" ? ebooks : ebooks.filter((ebook) => ebook.category.toLowerCase() === filter)

  const categories = ["all", "fitness", "nutrição", "bem-estar"]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando ebooks...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Ebooks</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conteúdo especializado para uma vida mais saudável e ativa após os 50 anos
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-4 bg-white rounded-xl p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {category === "all" ? "Todos" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Ebooks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEbooks.map((ebook) => (
            <div
              key={ebook.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-6xl">
                  {ebook.category === "Fitness" ? "🏃‍♂️" : ebook.category === "Nutrição" ? "🥗" : "🧠"}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                      ebook.category === "Fitness"
                        ? "bg-orange-500"
                        : ebook.category === "Nutrição"
                          ? "bg-green-500"
                          : "bg-purple-500"
                    }`}
                  >
                    {ebook.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-semibold text-gray-700">{ebook.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{ebook.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ebook.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-800">R$ {ebook.price.toFixed(2)}</div>
                  <button
                    onClick={() => addToCart(ebook.id)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      ebook.category === "Fitness"
                        ? "bg-gradient-to-r from-orange-500 to-red-500"
                        : ebook.category === "Nutrição"
                          ? "bg-gradient-to-r from-emerald-500 to-green-500"
                          : "bg-gradient-to-r from-purple-500 to-indigo-500"
                    } text-white hover:shadow-lg`}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEbooks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Nenhum ebook encontrado</h2>
            <p className="text-gray-600">Tente outro filtro ou volte mais tarde</p>
          </div>
        )}

        {/* Botão do Carrinho */}
        {user && (
          <div className="fixed bottom-6 right-6">
            <Link
              href="/carrinho"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              🛒
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
