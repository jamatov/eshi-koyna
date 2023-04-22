import React from 'react'
import icon1 from '../images/weicon1.png'
import icon2 from '../images/weicon2.png'
import icon3 from '../images/weicon3.png'
import icon4 from '../images/weicon4.png'


export default function WhyWe() {
  return (
    <div className='WhyWe'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Nega bizni tanlashingiz kerak?</h2>
          </div>

          <div className="col-md-3 text-center">
            <img src={icon1} alt="" />
            <h3>Tajriba</h3>
            <p>Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi</p>
          </div>

          <div className="col-md-3 text-center">
            <img src={icon2} alt="" />
            <h3>Tajriba</h3>
            <p>Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi</p>
          </div>

          <div className="col-md-3 text-center">
            <img src={icon3} alt="" />
            <h3>Tajriba</h3>
            <p>Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi</p>
          </div>

          <div className="col-md-3 text-center">
            <img src={icon4} alt="" />
            <h3>Tajriba</h3>
            <p>Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi</p>
          </div>

        </div>
      </div>
    </div>
  )
}
