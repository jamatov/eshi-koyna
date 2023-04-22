import React from 'react'
import img from '../images/info2.jpeg'


export default function Info2() {
  return (
    <div className='Info1'>
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <img src={img} alt="" />
          </div>

          <div className="col-md-6 info1-texts text-center">
            <div>
              <p>
                Bizning korxona o’z zimmasiga yuklatilgan <br />
                vazifalarni belgilangan muddatlarda tez va <br />
                sifatli bajarib berilishi, romlar uchun eng sifatli <br />
                homashyolari ishlatilishi hamda mijozlarga <br />
                qulay shartlar asosida ish olib borilishi bilan <br />
                ajralib turadi.
              </p>
              <button className="button">Bog'lanish <i class="fa-solid fa-arrow-right-long"></i> </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
