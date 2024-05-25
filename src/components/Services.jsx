import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Free Shipping",
            para: "Free Shipping for order above $180",
        },
        {
            title: "Flexible Payment",
            para: "Multiple secure payment options",
        },
        {
            title: "24/7 Support",
            para: "We Support Online all days",
        },
    ];

    return (
        <div className='mx-5 lg:mx-10'>
            <div className='flex-col'>
                {/* Services Section */}
                <div className='flex flex-col sm:flex-row justify-around items-center my-[5vh] lg:my-[10vh] gap-6 lg:gap-0'>
                    {services.map((item, index) => (
                        <div key={index} className='flex gap-5 items-center'>
                            <img draggable={false} src="src/assets/logos/delivery.png" width={60} alt="Service Icon" />
                            <div className=' flex-col text-center'>
                                <h2 className='text-xl lg:text-2xl font-semibold '>{item.title}</h2>
                                <p className='text-slate-600'>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Categories Section */}
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-10'>
                        <div className='relative flex justify-center items-center'>
                            <h2 className='absolute text-3xl lg:text-4xl text-white font-semibold mb-10'>Women</h2>
                            <img draggable={false} src="src/assets/logos/women.png" className='w-full' alt="Women" />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <h2 className='absolute text-3xl lg:text-4xl text-white font-semibold mb-10'>Men</h2>
                            <img draggable={false} src="src/assets/logos/men.png" className='w-full' alt="Men" />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <h2 className='absolute text-3xl lg:text-4xl text-white font-semibold mb-10'>Kids</h2>
                            <img draggable={false} src="src/assets/logos/kids.png" className='w-full' alt="Kids" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
