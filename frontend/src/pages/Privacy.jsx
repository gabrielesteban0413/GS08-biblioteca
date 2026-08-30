import React from 'react'

export default function Privacy(){
  return (
    <div className="container">
      <header style={{margin:'1.5rem 0'}}>
        <h1>Política de Privacidad</h1>
        <p className="lead">Protegemos tus datos. Esta política explica cómo recopilamos, usamos y protegemos tu información.</p>
      </header>

      <section className="feature-card">
        <h2>Datos que recopilamos</h2>
        <p>Información de registro, actividad en la plataforma y preferencias. Los datos se usan para mejorar la experiencia y ofrecer recomendaciones.</p>
      </section>

      <section className="feature-card">
        <h2>Control y eliminación</h2>
        <p>Puedes solicitar la eliminación de tus datos o exportarlos contactando al soporte.</p>
      </section>
    </div>
  )
}
