import React from 'react'

export default function Events(){
  const events = [
    {title:'Encuentro con autor',date:'2026-09-15'},
    {title:'Club de lectura: Ciencia ficción',date:'2026-09-22'}
  ]
  return (
    <div className="container">
      <h1>Eventos</h1>
      <p className="lead">Próximos eventos y actividades culturales.</p>
      <div style={{display:'grid',gap:12,marginTop:16}}>
        {events.map((e,i)=> (
          <div key={i} className="feature-card">
            <h3>{e.title}</h3>
            <div style={{color:'#6a7a92'}}>{e.date}</div>
            <p>Descripción breve del evento y cómo registrarse.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
