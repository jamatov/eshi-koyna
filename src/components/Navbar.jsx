import React from 'react'
import Logo from '../images/logo.png'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <img src={Logo} alt="logo" />

          <ul>
            <li><a href="#">Bosh sahifa</a></li>
            <li><a href="#">Mahsulotlar</a></li>
            <li><a href="#">Aloqa</a></li>
            <li><button>til</button></li>
            <li><a href="#">+998 90 908 94 77</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
