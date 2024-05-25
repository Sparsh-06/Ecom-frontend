import React from 'react';

const deals = [
  {
    id: 1,
    title: 'Womens Denim Jacket',
    brand: 'ZARA',
    rating: 4.4,
    price: 700,
    originalPrice: 1000,
    discount: '30% off',
    image: 'src/assets/logos/img_portrait_man_we.png',
  },
  {
    id: 2,
    title: 'Stylish V-Neck Shirt',
    brand: 'ZARA',
    rating: 4.4,
    price: 700,
    originalPrice: 1000,
    discount: '30% off',
    image: 'src/assets/logos/img_portrait_young.png',
  },
  {
    id: 3,
    title: 'Bold Statement Tee',
    brand: 'ZARA',
    rating: 4.4,
    price: 700,
    originalPrice: 1000,
    discount: '30% off',
    image: 'src/assets/logos/img_rectangle_145_1.png',
  },
];

const DealsOfTheDay = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Deals of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
        {deals.map(deal => (
          <div key={deal.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={deal.image} alt={deal.title} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <p className="text-gray-500">{deal.brand}</p>
              <p className="text-yellow-500">{deal.rating} ★</p>
              <div className="mt-2">
                <span className="text-xl font-bold">Rs. {deal.price}</span>
                <span className="text-gray-500 line-through ml-2">Rs. {deal.originalPrice}</span>
                <span className="text-green-500 ml-2">({deal.discount})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
