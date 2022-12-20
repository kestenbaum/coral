import React, {FC} from 'react'

export const Menu: FC = () => {

    const menu: string[] = [
        'Jewelry & Accessories',
        'Clothing & Shoes',
        'Home & Living',
        'Wedding & Party',
        'Toys & Entertainment',
        'Craft Supplies & Tools'
    ]


    return (
        <div className='hidden md:block border-t-2 max-w-[1280px] mx-auto px-4'>
            <ul className='flex w-full justify-between py-[20px] flex-wrap items-center'>
                {menu.map(menu =>
                    <li className='cursor-pointer hover:font-bold'>{menu}</li>)
                }
            </ul>
        </div>
    )
}
