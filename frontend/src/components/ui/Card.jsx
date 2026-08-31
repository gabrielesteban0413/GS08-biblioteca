import React from 'react'

export default function Card({children, className='', title}){
  return (
    <div className={`feature-card ${className}`.trim()}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}
