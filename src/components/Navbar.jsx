import React, {useState} from 'react'
import Logo from '../images/logo.png'

import { ESHIKOYNA_LANGUAGE } from '../tools/constants'
import { getLanguage, getText } from '../locale'

export default function Navbar() {
  const [active, setActive]  = useState("nav-list")
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')


  const navToglle = () => {
    active === "nav-list"
      ? setActive("nav-list nav-active")
      : setActive("nav-list");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const changeLanguage = (e) => {
    localStorage.setItem(ESHIKOYNA_LANGUAGE, e)
    document.location.reload(true)
  }

  return (
    <div className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <img src={Logo} alt="logo" />

          <ul className={active}>
            <li><a href="#Header">{getText('home')}</a></li>
            <li><a href="#Maxsulotlar">{getText('products')}</a></li>
            <li><a href="#Contact">{getText('contact')}</a></li>
            <li className='langWrap'>
              <h5 className='nav-link d-flex align-items-center'>
                {getLanguage() === 'uz' ? <><span className="fi fi-uz"></span> </> : <><span className="fi fi-ru"></span></>}

              </h5>
              <div className="wrap">
                <p onClick={() => changeLanguage('uz')}><span className="fi fi-uz"></span> </p>
                <p onClick={() => changeLanguage('ru')}> <span className='fi fi-ru'></span></p>
              </div>
            </li>
            <li><a className='tel' href="tel:+998909089477">+998 90 908 94 77</a></li>
          </ul>

          <div onClick={navToglle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
