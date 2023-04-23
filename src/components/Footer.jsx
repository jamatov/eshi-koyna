import React from 'react'
import Logo from '../images/logo.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-blog text-center">
            <img src={Logo} alt="" />
          </div>
          <div className="col-md-4 footer-blog text-center">
            <a className='number-link' href='#'>Toshkent shahar, Mirzo Ulug’bek tumani, Alisherobod MFY, Nurli zamin ko’chasi, 83 – А</a>
          </div>

          <div className="col-md-4 footer-blog text-center">
            <a className='number-link' href="tel:+998909089477">+998 90 908 94 77</a> <br />
            <a className='number-link' href="tel:+998946666988">+998 94 666 69 88</a>
          </div>

          <div className="col-12 footer-blog number-link text-center">
            © 2023 Eshikoyna.uz | Powered by <a className='service-link' href="https://t.me/from_developer/">Taskin Agency</a> 
          </div>
        </div>
      </div>
    </div>
  )
}
