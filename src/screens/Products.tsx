import React, {FC} from 'react';
import filterIcon from '../assets/filter.svg';
import {CardProduct} from "../components/CardProduct";


export const Products: FC = () => {
    return (
        <section className='max-w-[1280px] mx-auto px-4'>
            <h2 className='w-full text-center text-black text-3xl font-bold font-sans'>New Products</h2>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <span className='text-[#777777] text-base cursor-pointer'>All Products</span>
                    <span className='text-[#777777] text-base cursor-pointer'>T-Shirt</span>
                    <span className='text-[#777777] text-base cursor-pointer'>Hoodies</span>
                    <span className='text-[#777777] text-base cursor-pointer'>Jacket</span>
                </div>
                <div>
                    <span className='flex items-center gap-4 px-[15px] py-[5px] mb-[35px] bg-[#1E2832] cursor-pointer'>
                        <img src={filterIcon} alt="filter" className='max-w-[12px] max-h-[12px]'/>
                        <span className='text-white'>Filter</span>
                    </span>
                </div>
            </div>
            <div>
                <CardProduct/>
            </div>
        </section>
    );
};
