import React, { useState } from 'react';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ["All", "Men", "Women", "Kids"];

    const products = [
        {
            id: 1,
            name: 'Product 1',
            Off: '25% Off',
            src: 'src/assets/logos/men.png',
            type: "Men",
            price: 10
        },
        {
            id: 2,
            name: 'Product 2',
            Off: '55% Off',
            src: 'src/assets/logos/kids.png',
            type: "Men",
            price: 10
        },
        {
            id: 3,
            name: 'Product 3',
            Off: '35% Off',
            src: 'src/assets/logos/prod1.png',
            type: "Women",
            price: 10
        },
        {
            id: 4,
            name: 'Product 4',
            Off: '15% Off',
            src: 'src/assets/logos/prod2.png',
            type: "Women",
            price: 10
        },
        {
            id: 5,
            name: 'Product 5',
            Off: '55% Off',
            src: 'src/assets/logos/kids.png',
            type: "Kids",
            price: 10
        },
        {
            id: 6,
            name: 'Product 6',
            Off: '35% Off',
            src: 'src/assets/logos/prod3.png',
            type: "Kids",
            price: 10
        },
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.type === selectedCategory);

    return (
        <div className='mx-5 lg:mx-20 py-10'>
            <div className='p-5'>
                <h2 className='text-3xl font-semibold text-center'>Our Bestselling Products</h2>
                <ul className='list-none flex flex-wrap gap-2 py-6 text-lg justify-center'>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer py-1 px-3 rounded-md text-white bg-black border-[1px] hover:text-black hover:bg-white border-black duration-300 ${selectedCategory === category ? 'bg-white text-black' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14 mx-5 lg:mx-20'>
                {filteredProducts.map(product => (
                    <div key={product.id} className='border p-4 rounded-md shadow-lg hover:scale-105 duration-200 cursor-pointer'>
                        <div className='relative'>
                            <img draggable={false} src={product.src} alt={product.name} className='w-full' />
                            <span className='absolute top-0 left-0 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-br-lg'>{product.Off}</span>
                        </div>
                        <h3 className='text-xl mt-2'>{product.name}</h3>
                        <p className='text-2xl font-semibold'>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
