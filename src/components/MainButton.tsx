import React, {FC} from 'react';
import icon from "../assets/logo2.svg";

interface MainButton extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: string
}

export const MainButton: FC<MainButton> = ({children}) => {
    return (
        <button className='flex gap-2 p-4 bg-[#1E2832] px-4 items-center w-full sm:max-w-[250px]'>
            <img src={icon} alt="icon-shop"/>
            <span className='text-white font-sans'>{children}</span>
        </button>
    );
};
