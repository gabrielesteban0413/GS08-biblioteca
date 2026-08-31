import React from 'react'

export default function Button({children, variant='primary', onClick, className='', ...props}){
  const cls = variant === 'outline' ? 'btn-outline' : 'btn-primary'
  return (
    <button onClick={onClick} className={`${cls} ${className}`.trim()} {...props}>{children}</button>
  )
}
