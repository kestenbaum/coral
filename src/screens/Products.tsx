import React, {FC} from 'react';
import filterIcon from '../assets/filter.svg';
import {data} from '../data/data'
import {CardProduct} from "../components/CardProduct";


export const Products: FC = () => {
    return (
        <section className='max-w-[1280px] mx-auto px-4 py-[100px]'>
            <h2 className='w-full text-center text-black text-3xl font-bold font-sans'>New Products</h2>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <span className='text-[#777777] text-base cursor-pointer'>All Products</span>
                    <span className='text-[#777777] text-base cursor-pointer'>T-Shirt</span>
                    <span className='text-[#777777] text-base cursor-pointer'>Hoodies</span>
                    <span className='text-[#777777] text-base cursor-pointer'>Jacket</span>
                </div>
                    <span className='flex items-center gap-4 px-[15px] py-[5px] mb-0 sm:mb-[35px] bg-[#1E2832] cursor-pointer'>
                        <img src={filterIcon} alt="filter" className='max-w-[12px] max-h-[12px]'/>
                        <span className='text-white'>Filter</span>
                    </span>
            </div>
            <div className='flex flex-wrap gap-2 justify-center sm:justify-between'>
                {data.map(card =>
                    <CardProduct
                        key={card.id}
                        title={card.name}
                        img={card.img}
                        type={card.type}
                        price={card.price}
                        hot={card.hot}
                        sale={card.sale}
                    />)}
            </div>
        </section>
    );
};
