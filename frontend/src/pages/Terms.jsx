import React from 'react'

export default function Terms(){
  return (
    <div className="container">
      <header style={{margin:'1.5rem 0'}}>
        <h1>Términos y Condiciones</h1>
        <p className="lead">Condiciones de uso del servicio Libri. Lee atentamente antes de utilizar la plataforma.</p>
      </header>

      <section className="feature-card">
        <h2>Uso de la plataforma</h2>
        <p>Libri proporciona acceso a catálogo, bibliotecas digitales y herramientas de comunidad. El acceso está sujeto a las normas descritas aquí.</p>
      </section>

      <section className="feature-card">
        <h2>Responsabilidades</h2>
        <ul>
          <li>El usuario es responsable de mantener la privacidad de su cuenta.</li>
          <li>No se permite el uso indebido del contenido protegido por derechos.</li>
        </ul>
      </section>
    </div>
  )
}
