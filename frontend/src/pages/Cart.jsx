import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import Button from '../components/ui/Button.jsx'

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
                <Button variant="outline" onClick={()=>removeItem(idx)}>Quitar</Button>
              </div>
            </div>
          ))}
          <div style={{display:'flex',justifyContent:'flex-end',gap:12}}>
            <Button variant="outline" onClick={clear}>Vaciar carrito</Button>
            <Button>Proceder al pago</Button>
          </div>
        </div>
      )}
    </div>
  )
}
