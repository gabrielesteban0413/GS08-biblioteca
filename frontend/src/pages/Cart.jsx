import React from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function Cart(){
  const { items, removeItem, clear } = useCart()
  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      <p className="lead">Revisa los artículos seleccionados antes de pagar.</p>
      {items.length === 0 ? (
        <div className="feature-card">Tu carrito está vacío.</div>
      ) : (
        <div style={{display:'grid',gap:12}}>
          {items.map((it, idx)=> (
            <div key={idx} className="feature-card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontWeight:600}}>{it.title || 'Sin título'}</div>
                <div style={{color:'#6a7a92'}}>{it.author || ''}</div>
              </div>
              <div style={{display:'flex',gap:8}}>
                <button className="btn-outline" onClick={()=>removeItem(idx)}>Quitar</button>
              </div>
            </div>
          ))}
          <div style={{display:'flex',justifyContent:'flex-end',gap:12}}>
            <button className="btn-outline" onClick={clear}>Vaciar carrito</button>
            <button className="btn-primary">Proceder al pago</button>
          </div>
        </div>
      )}
    </div>
  )
}
