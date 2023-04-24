import React from 'react'

import { getText } from '../locale'


export default function Header() {
  return (
    <div className='Header' id='Header'>
      <div className="container">
        <div className="header-body">
          <div className="text-center">
            <div className='button'>
              <span>{getText('button')}</span><i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
