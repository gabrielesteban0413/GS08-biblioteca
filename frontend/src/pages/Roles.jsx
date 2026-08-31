import React, { useEffect, useState } from 'react'
import api from '../services/api.js'
import Button from '../components/ui/Button.jsx'

export default function Roles(){
  const [users, setUsers] = useState([])

  useEffect(()=>{
    api.getUsers().then(u=>setUsers(u))
  },[])

  return (
    <div className="container">
      <h1>Roles y usuarios de ejemplo</h1>
      <p className="lead">Usuarios de ejemplo para probar roles y permisos en la plataforma.</p>

      <div style={{marginTop:20,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12}}>
        {users.map(u=> (
          <div className="feature-card" key={u.email} style={{display:'flex',flexDirection:'column',gap:8}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <h3 style={{marginBottom:4}}>{u.username}</h3>
                <div style={{color:'#6a7a92',fontSize:13}}>{u.email}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontWeight:700}}>{u.roles.join(', ')}</div>
              </div>
            </div>
            <p style={{marginTop:6,color:'#3d4b62'}}>Ejemplo de usuario para pruebas. Contraseña: <strong>password</strong></p>
            <div style={{display:'flex',gap:8}}>
              {u.roles.includes('ADMIN') && <Button>Panel Admin</Button>}
              {u.roles.includes('EMPLOYEE') && <Button variant="outline">Tareas de empleado</Button>}
              <Button variant="outline">Ver perfil</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
