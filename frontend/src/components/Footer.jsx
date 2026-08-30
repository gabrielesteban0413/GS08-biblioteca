import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer>
      <span>© {new Date().getFullYear()} Libri · Biblioteca moderna</span>
      <div className="socials">
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  )
}
