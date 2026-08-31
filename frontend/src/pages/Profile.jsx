import React, { useState } from 'react'

const tabs = ['Perfil','Libros','Aspectos destacados','Marcadores','Diccionario','Grupos','Amigos','Reseñas','Estadísticas']

export default function Profile(){
  const [active, setActive] = useState('Perfil')

  return (
    <div className="container">
      <div style={{display:'flex',gap:20,alignItems:'flex-start',marginTop:12}}>
        <div style={{flex:'0 0 220px'}}>
          <div className="feature-card" style={{textAlign:'center'}}>
            <div className="book-cover" style={{width:120,height:120,borderRadius:80,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 8px'}}>
              <i className="fas fa-user" style={{fontSize:40}}></i>
            </div>
            <h3>Nombre de Usuario</h3>
            <div style={{color:'#6a7a92',fontSize:13}}>Miembro desde 2024 · Rol: Usuario</div>
            <div style={{marginTop:12}}>
              <button className="btn-outline">Editar perfil</button>
            </div>
          </div>
        </div>
        <div style={{flex:1}}>
          <div className="feature-card">
            <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:12}}>
              {tabs.map(t=> (
                <button key={t} onClick={()=>setActive(t)} className={active===t? 'btn-primary' : 'btn-outline'} style={{padding:'6px 10px',borderRadius:20}}>{t}</button>
              ))}
            </div>

            <div style={{minHeight:220}}>
              {active === 'Perfil' && (
                <div>
                  <h3>Resumen</h3>
                  <p>Vista rápida de actividad, préstamos actuales y recomendaciones.</p>
                </div>
              )}
              {active === 'Libros' && (
                <div>
                  <h3>Mis libros</h3>
                  <p>Lista de libros guardados, en préstamo y compras.</p>
                </div>
              )}
              {active === 'Aspectos destacados' && (
                <div>
                  <h3>Aspectos destacados</h3>
                  <p>Extractos y notas resaltadas por el usuario.</p>
                </div>
              )}
              {active === 'Marcadores' && (
                <div>
                  <h3>Marcadores</h3>
                  <p>Capítulos y páginas marcadas.</p>
                </div>
              )}
              {active === 'Diccionario' && (
                <div>
                  <h3>Diccionario personal</h3>
                  <p>Términos guardados y definiciones.</p>
                </div>
              )}
              {active === 'Grupos' && (
                <div>
                  <h3>Grupos</h3>
                  <p>Clubes de lectura y grupos activos.</p>
                </div>
              )}
              {active === 'Amigos' && (
                <div>
                  <h3>Amigos</h3>
                  <p>Contactos y actividad compartida.</p>
                </div>
              )}
              {active === 'Reseñas' && (
                <div>
                  <h3>Reseñas</h3>
                  <p>Tus reseñas y valoraciones.</p>
                </div>
              )}
              {active === 'Estadísticas' && (
                <div>
                  <h3>Estadísticas</h3>
                  <p>Tiempos de lectura, progreso y más.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
