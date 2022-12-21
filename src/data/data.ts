import {product7, product6,product8, product5, product4, product3, product1, product2} from '../assets/product'

interface data {
    id: number,
    name: string,
    img?: any
    price: string,
    action?: string,
    type: string,
    hot: boolean,
    sale?: boolean,
    seller: boolean
}

export const data: data[] = [
    {
        id: 1,
        img: product1,
        name: 'Adicolor Classics Joggers',
        type: 'Dress',
        price: '63.85',
        hot: false,
        sale: false,
        seller: false
    },
    {
        id: 2,
        img: product2,
        name: 'Nike Sportswear Futura Luxe',
        type: 'Bag',
        price: '130.00',
        hot: false,
        sale: false,
        seller: true
    },
    {
        id: 3,
        img: product3,
        name: 'Yellow Reserved Hoodie',
        type: 'Dress',
        price: '364.00',
        action: '155.00',
        hot: false,
        sale: false,
        seller: false
    },
    {
        id: 4,
        img: product4,
        name: 'Basic Dress Green',
        type: 'Dress',
        price: '236.00',
        hot: false,
        sale: true,
        seller: true
    },
    {
        id: 5,
        img: product5,
        name: 'Nike Air Zoom Pegasus',
        type: 'Shoe',
        price: '220.00',
        action: '198.00',
        hot: true,
        sale: false,
        seller: true
    },
    {
        id: 6,
        img: product6,
        name: 'Nike Repel Miler',
        type: 'Dress',
        price: '120.50',
        hot: false,
        sale: true,
        seller: true
    },
    {
        id: 7,
        img: product7,
        name: 'Polarised Sunglasses',
        type: 'Glasses',
        price: '160.00',
        hot: false,
        sale: false,
        seller: false
    },
    {
        id: 8,
        img: product8,
        name: 'Geometric print Scarf',
        type: 'Scarf',
        price: '53.00',
        hot: false,
        sale: false,
        seller: false
    },
]