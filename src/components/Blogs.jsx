import React from 'react';
import '../App.css'; // Ensure you import your custom styles

const blogs = [
  {
    id: 1,
    title: 'Trendy fashion',
    date: 'July 23, 2023',
    author: 'H&M',
    description: 'Trendy fashion represents the latest, most popular styles and trends, constantly evolving to reflect current tastes and preferences.',
    image: 'https://via.placeholder.com/300x400?text=Trendy+fashion',
  },
  {
    id: 2,
    title: 'New trend fo clothing',
    date: 'July 23, 2023',
    author: 'H&M',
    description: 'Discover the newest fashion sensations with our latest clothing collection, showcasing cutting-edge designs and captivating styles to elevate your wardrobe.',
    image: 'https://via.placeholder.com/300x400?text=New+trend+fo+clothing',
  },
  {
    id: 3,
    title: 'High selling product',
    date: 'July 23, 2023',
    author: 'Roster',
    description: 'Discover our top-selling product, delivering unmatched quality and style. Renowned for its innovation and durability, it\'s a must-have for every discerning shopper.',
    image: 'https://via.placeholder.com/300x400?text=High+selling+product',
  },
];

const BlogSection = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Latest News & Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="neon-border p-4">
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <div className="">
                <div className="text-gray-500 text-sm">{blog.date} | {blog.author}</div>
                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
