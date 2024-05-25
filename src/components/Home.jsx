import React from 'react'

const Home = () => {
    return (
        <div className=' bg-[#F5F8FA] items-center flex flex-col lg:flex-row overflow-hidden'>
            <div className='lg:max-w-[50vw] w-full flex-col m-5 lg:m-[100px] flex gap-5'>
                <p className='py-2 px-6 flex rounded-xl text-lg  bg-white max-w-[90%] lg:max-w-[60%] justify-center font-semibold mx-auto lg:mx-0'>
                    <img draggable={false} src="src/assets/logos/discount.png" className='mx-2 w-[15%] sm:w-[15%]'  alt="" />
                    Enjoy 50% OFF in Our Summer Super Sale!
                </p>
                <strong className='text-2xl lg:text-5xl lg:leading-[68px] text-center lg:text-left'>
                    Step into Fashion at Your Ultimate Style Destination!
                </strong>
                <p className='font-[360] text-center lg:text-left'>
                    Explore a World of Fashion Possibilities with Exclusive Discounts - Dive into Your Ultimate
                    Style Destination and Elevate Your Wardrobe Today!
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <button className='py-2 px-4 bg-blue-300 rounded-md font-semibold flex items-center gap-2'>
                        Shop Now 
                        <img draggable={false} src="src/assets/logos/right.png" width={20} alt="" />
                    </button>
                </div>
            </div>
            <div className='h-full flex justify-center lg:justify-end w-full sm:w-[78%] lg:w-auto'>
                <img draggable={false} src="src/assets/logos/lady.png" className='drop-shadow-lg max-h-full' alt="" />
            </div>
        </div>
    )
}

export default Home
