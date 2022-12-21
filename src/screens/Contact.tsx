import React, {FC} from 'react';
import {Logo} from "../components/Logo";
import {facebook, dribble, twitter, linkedin} from '../assets/icons/index'


export const Contact: FC = () => {
    const catalog: string[] = ['Necklaces', 'Hoodies', 'Jewelry Box', 'T-Shirt', 'Jacket']
    const about: string[] = ['Our Producers', 'Sitemap', 'FAQ', 'About Us', 'Terms & Conditions']
    const services: string[] = ['Contact Us', 'Track Your Order', 'Product Care & Repair', 'Book an Appointment', 'Shipping & Returns']
    const social:any[] = [facebook, dribble, twitter, linkedin]


    return (
        <section className='w-full bg-white'>
            <div className='max-w-[1280px] mx-auto px-4'>
                <div className='grid grid-cols-4 gap-4 pt-[130px] pb-[90px]'>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='max-w-[180px]'>
                            <Logo/>
                        </div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua</span>
                        <div className='grid grid-cols-4'>
                            {social.map(social => <img src={social} alt="social-icon"/>)}
                        </div>
                    </div>
                    <div>
                        <h2 className='mb-[30px] font-sans font-bold'>CATALOG</h2>
                        <ul className='flex flex-col gap-[12px]'>
                            {catalog.map(string => <li>{string}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-[30px] font-sans font-bold'>ABOUT US</h2>
                        <ul className='flex flex-col gap-[12px]'>
                            {about.map(string => <li>{string}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-[30px] font-sans font-bold'>CUSTOMER SERVICES</h2>
                        <ul className='flex flex-col gap-[12px]'>
                            {services.map(string => <li>{string}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
