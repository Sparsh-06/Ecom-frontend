import React from 'react';

const instagramPosts = [
  {
    id: 1,
    image: 'src/assets/logos/instas/img_rectangle_137.png',
  },
  {
    id: 2,
    image: 'src/assets/logos/instas/img_rectangle_138.png',
  },
  {
    id: 3,
    image: 'src/assets/logos/instas/img_rectangle_139.png',
  },
  {
    id: 4,
    image: 'src/assets/logos/instas/img_rectangle_141.png',
  },
];

const InstagramSection = () => {
  return (
    <div className="bg-gray-800 p-8 h-auto flex items-center my-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">Follow Us On Instagram</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {instagramPosts.map(post => (
            <div key={post.id} className="w-full">
              <img draggable={false} src={post.image} alt={`Post ${post.id}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
