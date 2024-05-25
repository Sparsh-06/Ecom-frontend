import React from 'react'

const LimitedOffer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 px-20 my-20 ">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img draggable={false} src="src/assets/logos/limited.png" alt="Fashion Offer" width={"80%"} className='h-full' />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-left lg:p-10">
        <h3 className="text-gray-500 text-lg mb-2">Limited Time Offers</h3>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Get 50% Off All Fashion - Limited Time Offer!
        </h1>
        <p className="text-gray-700 mb-6">
          Discover Your Signature Look for Less - Enjoy discount on All Fashion Items! Limited Time Offer, Act Fast!
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default LimitedOffer