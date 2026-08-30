import React from 'react'
import BookCard from '../components/BookCard'

export default function Collections(){
  const cols = [
    {title:'Colección: Clásicos', books:3},
    {title:'Colección: Ciencia ficción', books:5},
    {title:'Colección: Nuevas voces', books:8}
  ]
  return (
    <div className="container">
      <h1>Colecciones</h1>
      <p className="lead">Colecciones temáticas curadas por nuestro equipo.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16,marginTop:16}}>
        {cols.map((c,idx)=> (
          <div className="feature-card" key={idx}>
            <h3>{c.title}</h3>
            <p>{c.books} libros · Curado por Libri</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginTop:12}}>
              {Array.from({length:3}).map((_,i)=> <BookCard key={i} book={{title:`Muestra ${i+1}`,author:'Autor'}} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
