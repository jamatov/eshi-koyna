import React from 'react'
import Logo from '../images/logo.png'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <img src={Logo} alt="logo" />

          <ul>
            <li><a href="#Header">Bosh sahifa</a></li>
            <li><a href="#Maxsulotlar">Mahsulotlar</a></li>
            <li><a href="#Contact">Aloqa</a></li>
            <li><button>til</button></li>
            <li><a href="tel:+998909089477">+998 90 908 94 77</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
