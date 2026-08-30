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
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Libri" className="logo-image" onError={(e)=>{e.target.style.display='none'}} />
        <span>Libri</span>
      </div>
      <div className="nav-links">
        <Link to="/"><i className="fas fa-search"></i>Catálogo</Link>
        <Link to="/discover"><i className="fas fa-compass"></i>Descubrir</Link>
        <Link to="/collections"><i className="fas fa-th-large"></i>Colecciones</Link>
        <Link to="/favorites"><i className="fas fa-star"></i>Favoritos</Link>
        <Link to="/events"><i className="fas fa-calendar-alt"></i>Eventos</Link>
        <Link to="/profile"><i className="fas fa-user"></i>Mi cuenta</Link>
      </div>
      <div className="header-actions">
        <Link to="/cart" className="cart-btn" aria-label="Carrito">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-badge">{cartCount}</span>
        </Link>
        {user ? (
          <Link to="/profile" className="btn-outline">{user.username}</Link>
        ) : (
          <>
            <Link to="/login" className="btn-outline">Iniciar sesión</Link>
            <Link to="/register" className="btn-primary">Regístrate</Link>
          </>
        )}
      </div>
    </header>
  )
}
