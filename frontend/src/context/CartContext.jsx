import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({children}){
  const [items, setItems] = useState([])
  const addItem = (item) => setItems(prev => [...prev, item])
  const removeItem = (index) => setItems(prev => prev.filter((_,i)=>i!==index))
  const clear = () => setItems([])
  const cartCount = items.length
  return (
    <CartContext.Provider value={{items, addItem, removeItem, clear, cartCount}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){ return useContext(CartContext) }
