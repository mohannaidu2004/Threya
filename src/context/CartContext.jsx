import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Thraya Crimson Sindhoor',
      size: '100g',
      price: 100,
      priceUSD: 10.0,
      qty: 1,
      image: 'https://images.pexels.com/photos/7686264/pexels-photo-7686264.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    },
  ])

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const subtotal = cart.reduce((sum, item) => sum + (item.price ?? item.priceUSD) * item.qty, 0)
  const shipping = cart.length > 0 ? 50 : 0
  const total = subtotal + shipping

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, subtotal, shipping, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
