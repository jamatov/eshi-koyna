import React from 'react'
import Logo from '../images/logo.png'

export default function About() {
  return (
    <div className='About'>
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <h2>Biz haqimizda</h2>
            <p>«RUSTAM PROFIL» xususiy korxonasi 2017 yilda tashkil topgan bo’lib, bugungi kunda qurilish sohasida kerakli bo’lgan profnastil, gipsokarton uchun profillar ishlab chiqarish bilan bir qatorda alyumin yoki plastik eshik va oynalar yasash va o’rnatish ishlarini ham amalga oshirib kelmoqda. Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi. Mahsulotlarimiz sifatli bo’lishi uchun biz yurtimizda mashxur bo’lgan AKFA, IMZO va ENGELBERG kabi brendga ega profillarini ishlatamiz</p>
          </div>

          <div className="col-md-6 d-flex">
            <img src={Logo} alt="" />
          </div>  

        </div>
      </div>
    </div>
  )
}
