import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import Button from './ui/Button.jsx'

export default function BookCard({book, size='normal'}){
  const { addItem } = useCart()
  const small = size === 'small'
  return (
    <article className={`book-card ${small? 'small':''}`} style={{transition:'transform .24s ease'}}>
      <div style={{position:'relative',width:'100%'}}>
        <div className="book-cover" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          {book?.cover ? <img src={book.cover} alt={book.title} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:12}}/> : <i className="fas fa-book" style={{fontSize:28}}></i>}
        </div>
        <button className="add-circle" onClick={()=>addItem(book)} aria-label="Añadir">
          <i className="fas fa-plus"></i>
        </button>
      </div>
        <div style={{marginTop:8,width:'100%'}}>
        <div className="book-title">{book?.title || 'Título desconocido'}</div>
        <div className="book-author">{book?.author || 'Autor desconocido'}</div>
        <div className="book-meta"><span>{book?.year || ''}</span></div>
        <div style={{marginTop:10,display:'flex',gap:8,justifyContent:'center'}}>
          <Button variant="outline">Detalles</Button>
        </div>
      </div>
    </article>
  )
}
