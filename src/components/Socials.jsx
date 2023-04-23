import React from 'react'
import icon1 from '../images/social1.svg'
import icon2 from '../images/social2.svg'
import icon3 from '../images/social3.svg'


export default function Socials() {
  return (
    <div className='Socials' id='Contact'>
      <div className="container">
        <div className="row">

          <div className="col-md-4 text-center">  
            <img src={icon1} alt="" />
            <h3>Elektron Pochta</h3>
            <p>Barcha o’zingizni qiziqtirgan savollaringizni pochta manzilimizga jo’natishingiz mumkin</p>
            <a href="mailto:juraev.shuhrat1988@gmail.com">juraev.shuhrat1988@gmail.com</a>
          </div>  

          <div className="col-md-4 text-center">
            <img src={icon2} alt="" />
            <h3>Elektron Pochta</h3>
            <p>Buyurtma uchun quyidagi nomerlarimizga aloqaga chiqishingiz mumkin</p>
            <a href="tel:+998909089477">+998 90 908 94 77</a> <br />
            <a href="tel:+998946666988">+998 94 666 69 88</a>

          </div>

          <div className="col-md-4 text-center">
            <img src={icon3} alt="" />
            <h3>Elektron Pochta</h3>
            <p>Manzilimizga soat 09:00 dan 19:00 gacha tashrif buyurishingiz mumkin</p>
            <a href="mailto:juraev.shuhrat1988@gmail.com">						Toshkent shahar, Mirzo Ulug’bek tumani, Alisherobod MFY, Nurli zamin ko’chasi, 83 – А						</a>
          </div>

        </div>
      </div>
    </div>
  )
}
