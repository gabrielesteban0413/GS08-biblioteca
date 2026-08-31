import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import api from '../services/api.js'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const res = await api.login({username,password})
      setAuth({user: res.user, token: res.token})
      navigate('/')
    }catch(err){
      alert('Login failed')
    }finally{setLoading(false)}
  }

  return (
    <div className="container">
      <div className="feature-card" style={{maxWidth:900,display:'flex',gap:20,alignItems:'center',margin:'2rem auto'}}>
        <div style={{flex:'1 1 320px'}}>
          <h2>Bienvenido de nuevo</h2>
          <p>Accede a tu cuenta para ver préstamos, reservas y recomendaciones personalizadas.</p>
          <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12,marginTop:16}}>
            <input placeholder="Usuario" value={username} onChange={e=>setUsername(e.target.value)} />
            <input placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <div style={{display:'flex',gap:12}}>
              <button className="btn-primary" type="submit" disabled={loading}>{loading? 'Entrando...' : 'Entrar'}</button>
              <button className="btn-outline" type="button" onClick={()=>navigate('/register')}>Regístrate</button>
            </div>
          </form>
        </div>
        <div style={{flex:'0 0 320px',textAlign:'center'}}>
          <img src="/assets/login-visual.jpg" alt="Login visual" style={{width:'100%',borderRadius:12,objectFit:'cover'}} onError={(e)=>{e.target.style.display='none'}}/>
        </div>
      </div>
    </div>
  )
}
