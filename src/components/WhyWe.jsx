import React from 'react'
import icon1 from '../images/weicon1.png'
import icon2 from '../images/weicon2.png'
import icon3 from '../images/weicon3.png'
import icon4 from '../images/weicon4.png'

import { getText } from '../locale'


export default function WhyWe() {
  return (
    <div className='WhyWe'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>{getText("whyWeTittle")}</h2>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="  col-md-6 col-lg-3 mb-3 text-center">
            <img src={icon1} alt="" />
            <h3>{getText("whyCard1Tittle")}</h3>
            <p>{getText("whyCard1Info")}</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="  col-md-6 col-lg-3 mb-3 text-center">
            <img src={icon2} alt="" />
            <h3>{getText("whyCard2Tittle")}</h3>
            <p>{getText("whyCard2Info")}</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="  col-md-6 col-lg-3 mb-3 text-center">
            <img src={icon3} alt="" />
            <h3>{getText("whyCard3Tittle")}</h3>
            <p>{getText("whyCard3Info")}</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="  col-md-6 col-lg-3 mb-3 text-center">
            <img src={icon4} alt="" />
            <h3>{getText("whyCard4Tittle")}</h3>
            <p>{getText("whyCard4Info")}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
