import React from 'react'
import Logo from '../images/logo.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Logo} alt="" />
          </div>
          <div className="col-md-4 text-center">
            <p>Toshkent shahar, Mirzo Ulug’bek tumani, Alisherobod MFY, Nurli zamin ko’chasi, 83 – А</p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  )
}
