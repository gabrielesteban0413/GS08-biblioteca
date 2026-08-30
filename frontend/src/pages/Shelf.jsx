import React from 'react'
import BookCard from '../components/BookCard'

export default function Shelf(){
  const my = Array.from({length:6}).map((_,i)=>({title:`Mi libro ${i+1}`,author:'Yo'}))
  return (
    <div className="container">
      <h1>Mi estantería</h1>
      <p className="lead">Tus libros guardados, préstamos y listas de lectura.</p>
      <div className="grid" style={{marginTop:16}}>
        {my.map((b,i)=> <BookCard key={i} book={b} />)}
      </div>
    </div>
  )
}
