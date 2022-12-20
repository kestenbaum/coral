import React, { FC } from 'react'
import icon from '../assets/logo.svg'

export const Logo:FC = () => {
  return (
    <div className='flex justify-between gap-4 cursor-pointer'>
        <img src={icon} alt="icon" className='max-w-[31px]'/>
        <div className='flex text-3xl'>CORAL</div>
        <img src={icon} alt="icon" className='max-w-[31px]'/>
    </div>
  )
}

