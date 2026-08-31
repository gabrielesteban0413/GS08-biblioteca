import React from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function BookCard({book}){
  const { addItem } = useCart()
  return (
    <article className="book-card" style={{transition:'transform .24s ease'}}>
      <div className="book-cover" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        {book?.cover ? <img src={book.cover} alt={book.title} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:12}}/> : <i className="fas fa-book" style={{fontSize:28}}></i>}
      </div>
      <div style={{marginTop:8,width:'100%'}}>
        <div className="book-title">{book?.title || 'Título desconocido'}</div>
        <div className="book-author">{book?.author || 'Autor desconocido'}</div>
        <div className="book-meta"><span>{book?.year || ''}</span></div>
        <div style={{marginTop:10,display:'flex',gap:8}}>
          <button className="btn-primary" onClick={()=>addItem(book)}>Agregar al carrito</button>
          <button className="btn-outline">Detalles</button>
        </div>
      </div>
    </article>
  )
}
