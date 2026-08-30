import React from 'react'
import BookCard from '../components/BookCard'

const sample = Array.from({length:8}).map((_,i)=>({title:`Libro ${i+1}`,author:'Autor Ejemplo',year:2000+i}))

export default function Discover(){
  return (
    <div className="container">
      <div className="section-header" style={{marginTop:18}}>
        <h2>Descubre</h2>
        <p className="lead">Explora novedades, recomendaciones y colecciones seleccionadas.</p>
      </div>
      <div className="grid" style={{marginTop:16}}>
        {sample.map((b,i)=> <BookCard key={i} book={b} />)}
      </div>
    </div>
  )
}
