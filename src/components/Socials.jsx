import React from 'react'
import icon1 from '../images/social1.svg'
import icon2 from '../images/social2.svg'
import icon3 from '../images/social3.svg'
import { getText } from '../locale'



export default function Socials() {
  return (
    <div className='Socials' id='Contact'>
      <div className="container">
        <div className="row">

          <div data-aos="fade-up" data-aos-duration="1500" className="col-md-4 text-center">  
            <img src={icon1} alt="" />
            <h3>{getText("social1tittle")}</h3>
            <p>{getText("social1info")}</p>
            <a href="mailto:juraev.shuhrat1988@gmail.com">juraev.shuhrat1988@gmail.com</a>
          </div>  

          <div data-aos="fade-up" data-aos-duration="1500" className="col-md-4 text-center">
            <img src={icon2} alt="" />
            <h3>{getText("social2tittle")}</h3>
            <p>{getText("social2info")}</p>
            <a href="tel:+998909089477">+998 90 908 94 77</a> <br />
            <a href="tel:+998946666988">+998 94 666 69 88</a>

          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="col-md-4 text-center">
            <img src={icon3} alt="" />
            <h3>{getText("social3tittle")}</h3>
            <p>{getText("social3info")}</p>
            <a href="mailto:juraev.shuhrat1988@gmail.com">{getText("social3link")}</a>
          </div>

        </div>
      </div>
    </div>
  )
}
