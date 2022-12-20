import React, { FC } from 'react'
import acc from '../assets/acc.svg'
import shop from '../assets/shop.svg'

export const Navbar:FC = () => {
  return (
    <div className='flex justify-between gap-2 items-center'>
        <div className='flex justify-between gap-2 items-center cursor-pointer'>
            <img src={acc} alt="acc-icon" />
            <span>Account</span>
        </div>
         <div className='flex justify-between gap-2 items-center cursor-pointer'>
            <img src={shop} alt="shop-icon" />
            <span>Shoping</span>
        </div>
    </div>
  )
}
