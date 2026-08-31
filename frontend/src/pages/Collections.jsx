import React, { useState } from 'react'
import BookCard from '../components/BookCard'
import Button from '../components/ui/Button.jsx'

export default function Collections(){
  const [query, setQuery] = useState('')
  const cols = [
    {title:'Clásicos', books:3},
    {title:'Ciencia ficción', books:5},
    {title:'Nuevas voces', books:8}
  ]

  const onSearch = (e) => { e.preventDefault(); alert('Buscar colecciones: '+query) }

  return (
    <div className="container">
      <h1>Colecciones</h1>
      <p className="lead">Colecciones temáticas curadas por nuestro equipo.</p>

      <form onSubmit={onSearch} style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar en colecciones..." style={{flex:1,padding:'0.6rem 0.9rem',borderRadius:12,border:'1px solid #eef2f6'}} />
        <Button type="submit">Buscar</Button>
      </form>

      <div style={{marginTop:18,display:'flex',flexDirection:'column',gap:18}}>
        {cols.map((c,idx)=> (
          <section key={idx} className="feature-card" style={{padding:'12px 16px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <h3 style={{margin:0}}>{c.title}</h3>
                <div style={{fontSize:13,color:'#6a7a92'}}>{c.books} libros · Curado por Libri</div>
              </div>
              <div>
                <Button variant="outline">Ver colección</Button>
              </div>
            </div>

            <div className="collection-list" style={{display:'flex',gap:12,marginTop:12,overflowX:'auto',paddingBottom:6}}>
              {Array.from({length:Math.min(8,c.books)}).map((_,i)=> (
                <BookCard key={i} book={{title:`Muestra ${i+1}`,author:'Autor'}} size="small" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
