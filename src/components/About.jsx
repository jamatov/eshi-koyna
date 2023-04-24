import React from 'react'
import Logo from '../images/logo.png'

import { getText } from '../locale'


export default function About() {
  return (
    <div className='About'>
      <div className="container">
        <div className="row">

          <div data-aos="fade-left" data-aos-duration="1500" className="about-img col-md-6 d-flex">
            <img src={Logo} alt="" />
          </div> 

          <div data-aos="fade-right" data-aos-duration="1500" className="about-info col-md-6">
            <h2>{getText("aboutTittle")}</h2>
            <p>{getText("aboutInfo")}</p>
          </div>


        </div>
      </div>
    </div>
  )
}
