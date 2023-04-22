import React from 'react'
import img from '../images/info1.jpeg'

export default function Info1() {
  return (
    <div className='Info1'>
      <div className="container">
        <div className="row">

          <div className="col-md-6 info1-texts text-center">
            <div>
              <p>
                Bizning korxonada turli hil o’lchamdagi eshik <br />
                va oynalar ishlab chiqariladi. Undan <br />
                tashqari, hozirgi zamonaviy ofislar uchun <br />
                xonalarda devor o’rniga qalin shishalar <br />
                yasash va o’rnatish xizmatlari ham mavjud. <br />
              </p>
              <button className="button">Bog'lanish <i class="fa-solid fa-arrow-right-long"></i> </button>
            </div>
          </div>

          <div className="col-md-6">
            <img src={img} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}
