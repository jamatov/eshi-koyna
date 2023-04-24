import React from 'react'
import img from '../images/info2.jpeg'
import { getText } from '../locale'



export default function Info2() {
  return (
    <div className='Info1'>
      <div className="container">
        <div className="row">

          <div data-aos="fade-right" data-aos-duration="1500"  className="col-md-6 mb-3">
            <img src={img} alt="" />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500"  className="col-md-6 info1-texts text-center">
            <div>
              <p>
                {getText("info2Texts")}
              </p>
              <button className="button"> {getText("button")}<i class="fa-solid fa-arrow-right-long"></i> </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
