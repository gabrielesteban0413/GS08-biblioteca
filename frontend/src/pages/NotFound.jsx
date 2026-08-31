import React from 'react'

export default function NotFound(){
  return (
    <div className="container" style={{textAlign:'center',padding:'4rem 0'}}>
      <h1 style={{fontSize:48}}>404</h1>
      <h2>Lo sentimos — página no encontrada</h2>
      <p>La ruta solicitada no existe o fue movida. Regresa al inicio para continuar explorando el catálogo.</p>
      <div style={{marginTop:24}}>
        <a href="/" className="btn-primary">Volver al inicio</a>
      </div>
    </div>
  )
}
