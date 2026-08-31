import React from 'react'
import BookCard from '../components/BookCard'

export default function Favorites(){
  const fav = Array.from({length:4}).map((_,i)=>({title:`Favorito ${i+1}`,author:'Autor'}))
  return (
    <div className="container">
      <h1>Favoritos</h1>
      <p className="lead">Libros marcados como favoritos.</p>
      <div className="grid" style={{marginTop:16}}>
        {fav.map((b,i)=> <BookCard key={i} book={b} />)}
      </div>
    </div>
  )
}
