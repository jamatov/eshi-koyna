import React from 'react'
import Img1 from '../images/product-card1.jpeg'
import Img2 from '../images/product-card2.jpeg'
import Img3 from '../images/product-card3.jpeg'
import Img4 from '../images/product-card4.jpeg'

import { getText } from '../locale'



export default function OurProducts() {
  return (
    <div className='OurProducts' id='Maxsulotlar'> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className='product-tittle'>{getText("productsTittle")}</h2>
          </div>
          <div className="product col-md-6 col-lg-3">
            <div className='product-card'>
              <img src={Img1} alt="" />
              <div className='card-footer'>
                <h2>{getText("productsCard1")}</h2>
              </div>
            </div>
          </div>

          <div className="product col-md-6 col-lg-3">
            <div className='product-card'>
              <img src={Img2} alt="" />
              <div className='card-footer'>
                <h2>{getText("productsCard2")}</h2>
              </div>
            </div>
          </div>

          <div className="product col-md-6 col-lg-3">
            <div className='product-card'>
              <img src={Img3} alt="" />
              <div className='card-footer'>
                <h2>{getText("productsCard3")}</h2>
              </div>
            </div>
          </div>

          <div className="product col-md-6 col-lg-3">
            <div className='product-card'>
              <img src={Img4} alt="" />
              <div className='card-footer'>
                <h2>{getText("productsCard4")}</h2>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
