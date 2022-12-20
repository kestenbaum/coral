import React, {FC} from 'react';
import {brand1, brand2, brand3, brand4, brand5} from '../assets/brand-icon/'
import {category, category2, category3, category4, category5} from '../assets/category/'

export const Brands: FC = () => {
    const arrayImg = [category2, category3, category4, category5]
    const arrayLogo = [brand2, brand3, brand4, brand5, brand1]

    return (
        <div className='hidden md:block md:max-w-[1280px] md:px-4 md:mx-auto md:min-h-[100vh]'>
            <div className='flex justify-between flex-wrap'>
                {arrayLogo.map(logo => <img key={String(logo)} src={logo} alt="logo"/>)}
            </div>
            e
            <div className='grid grid-cols-4 py-24 gap-4'>
                <div className='col-span-2 grid'>
                    <img src={category} alt=""/>
                </div>
                <div className='grid grid-cols-2 col-span-2 gap-4'>
                    {arrayImg.map(element =>
                        <div key={String(element)} className='relative cursor-pointer'>
                            <img src={element} alt="image" className='z-10 absolute hover:z-0'/>
                            <div
                                className='absolute bottom-0 left-0 right-0 flex justify-between items-center h-[52px] bg-[#1E2832] px-2'>
                                <span className='text-white'>Jacket</span>
                                <span className='text-white'>103 Product</span>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

