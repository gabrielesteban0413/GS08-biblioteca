import React from 'react'

export default function BookDetail(){
  return (
    <div className="container">
      <div style={{display:'grid',gridTemplateColumns:'320px 1fr',gap:20,marginTop:20}}>
        <div>
          <div style={{width:320,height:440,borderRadius:14,background:'#f5f7ff',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <i className="fas fa-book" style={{fontSize:48}}></i>
          </div>
        </div>
        <div>
          <h1>Título del libro</h1>
          <p className="lead">Autor — 2020 · Novela</p>
          <p>Descripción larga del libro: resumen profesional y ganchos para el lector. Aquí puedes pegar el texto del editor.</p>
          <div style={{display:'flex',gap:12,marginTop:16}}>
            <button className="btn-primary">Leer ahora</button>
            <button className="btn-outline">Agregar a mi estantería</button>
          </div>
        </div>
      </div>
    </div>
  )
}
