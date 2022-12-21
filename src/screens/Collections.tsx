import React, {FC} from 'react';
import bg from '../assets/backgroundbg.jpg';
import logo from '../assets/logoZara.png'
export const Collections: FC = () => {
    return (
        <div
            className={`min-h-[776px]`}
            style={{backgroundImage: `url(${bg})`}}
        >
            <div className='flex flex-end max-w-[1280px] mx-auto px-4 justify-end'>
                <div className='flex flex-col justify-center h-full gap-[56px] min-h-[776px]'>
                    <img src={logo} alt="logo" className='max-w-[191px] max-h-[81px]'/>
                    <h2 className='text-white max-w-[504px]'>Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.</h2>
                    <span className='flex items-center justify-center text-black bg-white px-[30px] py-[5px] cursor-pointer'>See Collection</span>
                </div>
            </div>
        </div>
    );
};
