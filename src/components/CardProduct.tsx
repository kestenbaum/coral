import React, {FC} from 'react';
import shopIcon from '../assets/logo2.svg';
import searchIcon from '../assets/icons/search.svg';
import favoriteIcon from '../assets/icons/favorite.svg';

interface CardProduct {
    title: string,
    hot: boolean,
    sale?: boolean,
    img: any,
    type: string,
    price: string,
    action?: string
}

export const CardProduct: FC<CardProduct> = ({title, hot, price, img, type, sale, action}) => {
    return (
        <div className='block max-w-[300px] mb-2'>
            <div className='relative'>
                <img src={img} alt="img-product"
                     className='relative max-w-[312px] max-h-[400px] cursor-pointer z-10 hover:z-0'/>
                <span
                    className={`${sale ? `block` : `hidden `} absolute top-[26px] left-[0] bg-[#1E2832] text-white z-20 px-[15px] py-[4px]`}>SALE</span>
                <span
                    className={`${hot ? `block`: `hidden`} absolute top-[26px] left-[0] bg-[#FF6F61] text-white z-20 px-[15px] py-[4px]`}>HOT</span>
                <div
                    className='absolute bottom-0 left-0 right-0 flex items-center justify-between h-[56px] bg-[#1E2832] px-[16px] hover:z-15'>
                    <div className='flex gap-[25px] items-center'>
                        <img src={favoriteIcon} alt="favorite-icon"/>
                        <img src={searchIcon} alt='search-icon'/>
                    </div>
                    <div className='flex gap-[5px] items-center'>
                        <img src={shopIcon} alt="shop-icon"/>
                        <span className='text-base font-sans text-white font-bold'>Shop Now</span>
                    </div>
                </div>
            </div>
            <span className='font-bold text-base font-sans'>{title}</span>
            <div className='flex w-full justify-between'>
                <span className='text-[#777777] text-base font-sans'>{type}</span>
                <div className='flex gap-[12px]'>
                    <span className='text-base font-sans font-bold'>${price}</span>
                    {action && <span className='text-base font-sans font-bold text-[#FF6F61]'>${action}</span>}
                </div>
            </div>
        </div>
    );
};
