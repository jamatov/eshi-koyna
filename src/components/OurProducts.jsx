import React from 'react'
import Img1 from '../images/product-card1.jpeg'
import Img2 from '../images/product-card2.jpeg'
import Img3 from '../images/product-card3.jpeg'
import Img4 from '../images/product-card4.jpeg'


export default function OurProducts() {
  return (
    <div className='OurProducts' id='Maxsulotlar'> 
      <div className="container-fluid">
        <div className="row">
          <div className="col12 text-center">
            <h2 className='product-tittle'>Bizning mahsulotlar</h2>
          </div>
          <div className="col-3">
            <div className='product-card'>
              <img src={Img1} alt="" />
              <div className='card-footer'>
                <h2>PVH yoki alyumindan eshik va oynalar</h2>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className='product-card'>
              <img src={Img2} alt="" />
              <div className='card-footer'>
                <h2>Qalin shishalik peregorodkalar</h2>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className='product-card'>
              <img src={Img3} alt="" />
              <div className='card-footer'>
                <h2>Podokonniklar</h2>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className='product-card'>
              <img src={Img4} alt="" />
              <div className='card-footer'>
                <h2>Moskitniy setkalar</h2>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
