import React, {FC} from 'react';
import {MainButton} from "../components/MainButton";
import woman from '../assets/woman.jpg';
import vector from '../assets/Vectorbg.svg';

export const FirstScreen: FC = () => {
    return (
        <div
            className='flex flex-col justify-between flex-auto gap-4 max-w-[1280px] mx-auto px-4 pt-[130px] min-h-[100vh] md:flex-row items-center'>
            <div className='flex h-[100%]'>
                <div className='relative flex items-start flex-col gap-4'>
                    <h1 className='text-3xl text-black leading-10 font-sans'>Collections</h1>
                    <p className='text-2xl text-black leading-10 font-sans'>You can explore ans shop many differnt
                        collection from various barands here.</p>
                    <MainButton children={'Sho P Now'} />
                    <img src={vector} alt="vector" className='hidden md:block absolute top-[-70%] left-[70%]'/>
                    <img src={vector} alt="vector" className='hidden md:block absolute top-[20%] right-[60%]'/>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={woman} alt=""
                     className='max-w-full max-h-full w-[350px] h-[400px] rounded-tl-[75px] rounded-br-[75px]'/>
            </div>
        </div>
    );
};
