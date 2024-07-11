import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className='navbar-links'>
        <div className='navLink1'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className='myName'>
          <h1>Minahil Waseem</h1>
        </div>
        <div className='navLink2'>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
      </div>
    </div>
  )
}