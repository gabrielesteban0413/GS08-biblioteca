import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function NavBar(){
  const { auth } = useAuth()
  const user = auth?.user
  const { cartCount } = useCart()

  return (
    <header className="site-header fade-in">
      <div className="container" style={{display:'flex',alignItems:'center',gap:20}}>
        <div className="logo" style={{flex:'0 0 auto'}}>
          <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:10}}>
            <img src="/assets/images/logo.png" alt="nombrelibreria" className="logo-image" onError={(e)=>{e.target.style.display='none'}} />
            <span>nombrelibreria</span>
          </Link>
        </div>

        <nav style={{flex:1}} aria-label="Main navigation">
          <div className="nav-links">
            <Link to="/"><i className="fas fa-search"></i>Catálogo</Link>
            <Link to="/discover"><i className="fas fa-compass"></i>Descubrir</Link>
            <Link to="/collections"><i className="fas fa-th-large"></i>Colecciones</Link>
            <Link to="/favorites"><i className="fas fa-star"></i>Favoritos</Link>
            <Link to="/events"><i className="fas fa-calendar-alt"></i>Eventos</Link>
          </div>
        </nav>

        <div className="header-actions" style={{flex:'0 0 auto'}}>
          <Link to="/cart" className="cart-btn" aria-label="Carrito">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-badge">{cartCount}</span>
          </Link>

          {/* quick links for authenticated users */}
          {user ? (
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              {user.roles?.includes('ADMIN') && <Link to="/admin" className="btn-outline">Admin</Link>}
              {user.roles?.includes('EMPLOYEE') && <Link to="/employee" className="btn-outline">Empleado</Link>}
              <Link to="/profile" className="btn-outline">{user.username}</Link>
            </div>
          ) : (
            <div style={{display:'flex',gap:8}}>
              <Link to="/login" className="btn-outline">Iniciar sesión</Link>
              <Link to="/register" className="btn-primary">Regístrate</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
