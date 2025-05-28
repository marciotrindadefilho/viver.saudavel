"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface CartItem {
  id: string
  ebook: {
    id: string
    title: string
    price: number
    cover_image: string
  }
  quantity: number
}

export default function CarrinhoPage() {
  const { user } = useAuth()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }
    fetchCartItems()
  }, [user])

  const fetchCartItems = async () => {
    if (!user) return

    const { data, error } = await supabase
      .from("cart_items")
      .select(`
        id,
        quantity,
        ebook:ebooks(id, title, price, cover_image)
      `)
      .eq("user_id", user.id)

    if (!error && data) {
      setCartItems(data as CartItem[])
    }
    setLoading(false)
  }

  const removeFromCart = async (itemId: string) => {
    const { error } = await supabase.from("cart_items").delete().eq("id", itemId)

    if (!error) {
      setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    }
  }

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
      return
    }

    const { error } = await supabase.from("cart_items").update({ quantity: newQuantity }).eq("id", itemId)

    if (!error) {
      setCartItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const total = cartItems.reduce((sum, item) => sum + item.ebook.price * item.quantity, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando carrinho...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Meu Carrinho</h1>
            <Link href="/ebooks" className="text-blue-600 hover:text-blue-700 font-semibold">
              Continuar Comprando
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Carrinho Vazio</h2>
              <p className="text-gray-600 mb-6">Adicione alguns ebooks ao seu carrinho</p>
              <Link
                href="/ebooks"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Ver Ebooks
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 p-6 border border-gray-200 rounded-xl">
                  <img
                    src={item.ebook.cover_image || "/placeholder.svg"}
                    alt={item.ebook.title}
                    className="w-20 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{item.ebook.title}</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">R$ {item.ebook.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
                    🗑️
                  </button>
                </div>
              ))}

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-gray-800">Total:</span>
                  <span className="text-3xl font-bold text-blue-600">R$ {total.toFixed(2)}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                  Finalizar Compra
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
