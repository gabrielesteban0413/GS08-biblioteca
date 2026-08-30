import React from 'react'

const mockRoles = [
  {name:'USER', description:'Usuario normal'},
  {name:'ADMIN', description:'Administrador'}
]

export default function Roles(){
  return (
    <div className="container">
      <h1>Roles y permisos</h1>
      <p className="lead">Descripción de roles en la plataforma Libri y sus permisos asociados.</p>
      <div className="features-grid" style={{marginTop:20}}>
        {mockRoles.map(r=> (
          <div className="feature-card" key={r.name}>
            <h3>{r.name}</h3>
            <p>{r.description}</p>
            <ul>
              <li>Acceso al catálogo</li>
              <li>Reservas y préstamos</li>
              {r.name === 'ADMIN' && <li>Gestión de contenidos y usuarios</li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
