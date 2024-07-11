import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-container'>
            <div className='footer-text'>
            <p>&copy; 2024 Minahil Waseem. All rights reserved.</p>
            </div>
            <div className='footer-links'>
                <Link to="https://github.com/Minahil7776" target='_blank'><i className='fab fa-github'></i></Link>
                <Link to="mailto:minahil7776@gmail.com" target='_blank'><i className='far fa-envelope'></i></Link>
                <Link to="www.linkedin.com/in/minahil-waseem-8bb834291" target='_blank'><i className='fab fa-linkedin'></i></Link>
            </div>
    </div>
  )
}
