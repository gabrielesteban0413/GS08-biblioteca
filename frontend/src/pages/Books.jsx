import React, { useState } from 'react'

export default function Books(){
  const [query, setQuery] = useState('')
  const onSearch = (e) => {
    e.preventDefault()
    if(!query.trim()) return alert('Escribe el título o autor que buscas.')
    alert(`Buscando: "${query}"\n(Simulación de búsqueda en la biblioteca)`)
  }

  const mockBooks = [
    {title:'Cien años de soledad', author:'Gabriel G. Márquez', year:1967, lang:'ES', status:'Disponible'},
    {title:'Fundación', author:'Isaac Asimov', year:1951, lang:'EN', status:'Préstamo'},
    {title:'El nombre del viento', author:'Patrick Rothfuss', year:2007, lang:'EN', status:'Disponible'},
    {title:'Sapiens', author:'Yuval N. Harari', year:2011, lang:'ES', status:'Disponible'},
    {title:'Juego de tronos', author:'George R. R. Martin', year:1996, lang:'EN', status:'Préstamo'},
    {title:'El mundo y sus demonios', author:'Carl Sagan', year:1995, lang:'ES', status:'Disponible'}
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="badge"><i className="fas fa-gem"></i> Nuevo · Club de lectura</div>
          <h1>Tu biblioteca digital <span>siempre abierta</span></h1>
          <p>Miles de libros, revistas y audiolibros a un clic. Descubre, aprende y comparte.</p>
          <div className="hero-actions">
            <button className="btn-primary"> <i className="fas fa-arrow-right"></i> Explorar ahora</button>
            <button className="btn-outline"> <i className="fas fa-play-circle"></i> Ver tour</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="number">+12k</span><span className="label">Libros disponibles</span></div>
            <div className="stat"><span className="number">240</span><span className="label">Eventos al mes</span></div>
            <div className="stat"><span className="number">4.9★</span><span className="label">Valoración</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="book-stack">
            <div className="book"><i className="fas fa-book"></i> Cien años...</div>
            <div className="book"><i className="fas fa-book"></i> 1984</div>
            <div className="book"><i className="fas fa-book"></i> El Principito</div>
            <div className="book"><i className="fas fa-book"></i> La sombra...</div>
          </div>
          <div className="ticker">
            <span><i className="fas fa-star" style={{color:'#f5b342'}}></i> Más leídos</span>
            <span><i className="fas fa-clock"></i> Novedades</span>
            <span><i className="fas fa-fire"></i> Tendencia</span>
          </div>
        </div>
      </section>

      <div className="search-section">
        <form className="search-box" onSubmit={onSearch}>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar por título, autor o género..." />
          <button type="submit"><i className="fas fa-search"></i> Buscar</button>
        </form>
      </div>

      <div className="categories">
        <span className="pill"><i className="fas fa-robot"></i> Ciencia ficción</span>
        <span className="pill"><i className="fas fa-heart"></i> Romance</span>
        <span className="pill"><i className="fas fa-skull"></i> Misterio</span>
        <span className="pill"><i className="fas fa-history"></i> Historia</span>
        <span className="pill"><i className="fas fa-chart-line"></i> Negocios</span>
        <span className="pill"><i className="fas fa-child"></i> Infantil</span>
      </div>

      <section className="library-grid">
        <div className="section-header">
          <h2><i className="fas fa-fire" style={{color:'#394eff'}}></i> Más populares</h2>
          <a href="#">Ver todos <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="grid">
          {mockBooks.map((b, i) => (
            <div className="book-card" key={i}>
              <div className="book-cover"><i className="fas fa-book"></i></div>
              <div className="book-title">{b.title}</div>
              <div className="book-author">{b.author}</div>
              <div className="book-meta"><span><i className="far fa-calendar-alt"></i> {b.year}</span><span><i className="fas fa-language"></i> {b.lang}</span></div>
              <div className="book-status">{b.status}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2><i className="fas fa-cogs" style={{color:'#394eff'}}></i> Servicios</h2>
          <a href="#">Más info <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="features-grid">
          <div className="feature-card"><div className="icon"><i className="fas fa-book-reader"></i></div><h3>Préstamo digital</h3><p>Lleva libros electrónicos y audiolibros a tu dispositivo favorito.</p></div>
          <div className="feature-card"><div className="icon"><i className="fas fa-users"></i></div><h3>Clubes de lectura</h3><p>Únete a grupos por género y comparte tus impresiones.</p></div>
          <div className="feature-card"><div className="icon"><i className="fas fa-calendar-check"></i></div><h3>Eventos culturales</h3><p>Charlas, presentaciones y talleres con autores invitados.</p></div>
          <div className="feature-card"><div className="icon"><i className="fas fa-magic"></i></div><h3>Recomendaciones</h3><p>Algoritmo inteligente que sugiere libros según tus gustos.</p></div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Únete a la comunidad lectora</h2>
        <p>Regístrate gratis y accede a todo el catálogo, eventos y más.</p>
        <button className="btn-primary"><i className="fas fa-user-plus"></i> Crear cuenta gratis</button>
      </div>
    </>
  )
}
