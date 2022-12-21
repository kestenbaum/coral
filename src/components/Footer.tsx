import React, {FC} from 'react';
import {arrow, icons} from '../assets/icons/index'

export const Footer: FC = () => {
    return (
        <footer className='bg-[#1E2832]'>
            <div className='max-w-[1280px] mx-auto px-4'>
                <div className='flex justify-between items-center h-[52px]'>
                    <div className='text-white'>© 2022 Coral , Inc.</div>
                    <div>
                        <img src={icons} alt="icons"/>
                    </div>
                    <div className='flex gap-4 cursor-pointer'>
                        <span className='text-white'>Scroll to top</span>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};
