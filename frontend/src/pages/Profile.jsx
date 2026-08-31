import React from 'react'

export default function Profile(){
  return (
    <div className="container">
      <div className="feature-card" style={{display:'flex',gap:20,alignItems:'center'}}>
        <div style={{flex:'0 0 140px'}}>
          <div className="book-cover" style={{width:140,height:140,borderRadius:80,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <i className="fas fa-user" style={{fontSize:48}}></i>
          </div>
        </div>
        <div style={{flex:1}}>
          <h2>Nombre de Usuario</h2>
          <p className="lead">Miembro desde: 2024 · Rol: Usuario</p>
          <p>Resumen de actividad, préstamos actuales y recomendaciones personalizadas.</p>
        </div>
      </div>
    </div>
  )
}
