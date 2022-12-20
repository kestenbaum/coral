import React, {FC} from 'react';
import brand1 from '../assets/brand-icon/brand-1.svg';
import brand2 from '../assets/brand-icon/brand-2.svg';
import brand3 from '../assets/brand-icon/brand-3.svg';
import brand4 from '../assets/brand-icon/brand-4.svg';
import brand5 from '../assets/brand-icon/brand-5.svg';

export const Brands:FC = () => {
    return (
        <div className='max-w-[1280px] px-4 mx-auto min-h-[100vh]'>
           <div className='flex justify-between'>
               <img src={brand1} alt=""/>
               <img src={brand2} alt=""/>
               <img src={brand3} alt=""/>
               <img src={brand4} alt=""/>
               <img src={brand5} alt=""/>
           </div>
           <div></div>
        </div>
    );
};

