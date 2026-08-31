import React from 'react'
import AuthorCard from '../components/AuthorCard'

export default function Author(){
  const a = {name:'Nombre Autor',works:'Obra1, Obra2'}
  return (
    <div className="container">
      <div style={{display:'flex',gap:20,alignItems:'center',marginTop:20}}>
        <AuthorCard author={a} />
        <div>
          <h1>{a.name}</h1>
          <p className="lead">Biografía breve del autor y su trayectoria literaria.</p>
          <p>Lista de obras destacadas y enlaces a sus libros.</p>
        </div>
      </div>
    </div>
  )
}
