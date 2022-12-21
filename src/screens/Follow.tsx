import React, {FC} from 'react';
import {person1, person2, person3, person4, person5, person6} from '../assets/person/index'

export const Follow: FC = () => {
    const person: any[] = [person1, person3, person4, person5, person6, person2]

    return (
        <div className='flex justify-center items-center flex-col max-w-[1280px] mx-auto px-4 py-[30px]'>
            <h2 className='w-full text-center text-5xl py-[60px] font-sans'>Follow products and discounts on Instagram</h2>
            <div className='grid grid-cols-6 gap-4'>
                {person.map(person =>
                    <img src={person} alt='person' className='cursor-pointer'/>
                )}
            </div>
            <div className='flex flex-col items-center max-w-[766px]'>
                <h2 className='w-full text-center text-5xl py-[60px] font-sans'>Or subscribe to the newsletter</h2>
                <form className='flex justify-between w-full bg-[#F1F1F1] gap-[30px]'>
                    <input
                        type="text"
                        placeholder='Email address...'
                        className='bg-[#F1F1F1] border-b-2 border-black w-full'
                    />
                    <button className='bg-[#F1F1F1] border-b-2 border-black w-full max-w-[90px]'>Submit</button>
                </form>
            </div>
        </div>
    );
};
