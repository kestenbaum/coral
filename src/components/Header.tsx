import React, {FC} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {Logo} from './Logo'
import {Navbar} from './Navbar'

export const Header: FC = () => {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-[#F1F1F1] border-b-2 border-[#E3E3E3]'>
            <div
                className='flex sm:flex-row md:flex-row flex-col max-w-[1280px] justify-between items-center h-[70px] w-full mx-auto px-4'>
                <div className='hidden md:flex cursor-pointer min-w-[100px]'>
                    <BiSearchAlt2 size={30}/>
                </div>
                <Logo/>
                <Navbar/>
            </div>
        </header>
    )
}
