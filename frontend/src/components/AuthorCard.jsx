import React from 'react'

export default function AuthorCard({author}){
  return (
    <div className="feature-card">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{width:64,height:64,borderRadius:8,background:'#f5f7ff',display:'flex',alignItems:'center',justifyContent:'center'}}>
          {author?.photo ? <img src={author.photo} alt={author.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/> : <i className="fas fa-user"/>}
        </div>
        <div>
          <h3 style={{margin:0}}>{author?.name || 'Nombre'}</h3>
          <div style={{color:'#6a7a92',fontSize:14}}>{author?.works || 'Obras principales'}</div>
        </div>
      </div>
    </div>
  )
}
