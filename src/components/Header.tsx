import React, { FC } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { Logo } from './Logo'
import { Navbar } from './Navbar'

const Header:FC = () => {
  return (
    <div className='flex sm:flex-row md:flex-row flex-col max-w-[1280px] justify-between items-center h-[70px] w-full mx-auto px-4 bg-[#F1F1F1]'>
         <div className='hidden md:flex cursor-pointer min-w-[100px]'>
            <BiSearchAlt2 size={30}/>
        </div>   
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Header