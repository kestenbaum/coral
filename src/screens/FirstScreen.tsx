import React, {FC} from 'react';
import woman from '../assets/woman.jpg';
import {MainButton} from "../components/MainButton";

export const FirstScreen:FC = () => {
    return (
        <div className='flex max-w-[1280px] mx-auto px-4 pt-[130px] min-h-[100vh]'>
            <div>
                <h1>Collections</h1>
                <p>you can explore ans shop many differnt collection from various barands here.</p>
               <MainButton children={'Sho P Now'}/>
            </div>
            <div>
                <img src={woman} alt="woman"/>
            </div>
        </div>
    );
};
