import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">FashionFlow</h2>
            <p className="mb-4">
              Style Flows Here: Your Ultimate Fashion Destination! Explore Trendsetting Collections, Shop the Latest Looks, and Let Your Fashion Flow with Us!
            </p>
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:FashionFlow@Gmail.com" className="underline">FashionFlow@Gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className=''>
                <li><a href="#" className="hover:underline">Landing pages</a></li>
                <li><a href="#" className="hover:underline">Shop</a></li>
                <li><a href="#" className="hover:underline">Women</a></li>
                <li><a href="#" className="hover:underline">Men</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Tools</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <p>© 2020 All Right Reserved</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* Instagram SVG */}
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 6.75A5.25 5.25 0 1 1 6.75 12 5.26 5.26 0 0 1 12 6.75zm0 2a3.25 3.25 0 1 0 3.25 3.25A3.25 3.25 0 0 0 12 8.75zm5.75-1.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* Twitter SVG */}
                <path d="M22.23 5.924c-.793.35-1.64.587-2.53.69a4.409 4.409 0 0 0 1.942-2.44 8.776 8.776 0 0 1-2.79 1.065A4.377 4.377 0 0 0 16.08 4c-2.422 0-4.388 1.966-4.388 4.388 0 .344.038.678.113.999A12.443 12.443 0 0 1 3.075 4.909a4.379 4.379 0 0 0-.593 2.206c0 1.523.776 2.866 1.955 3.652a4.364 4.364 0 0 1-1.987-.548v.056c0 2.126 1.514 3.9 3.52 4.302a4.372 4.372 0 0 1-1.981.075 4.383 4.383 0 0 0 4.094 3.043 8.78 8.78 0 0 1-5.441 1.875c-.354 0-.705-.02-1.05-.061a12.375 12.375 0 0 0 6.695 1.963c8.034 0 12.435-6.655 12.435-12.435 0-.19-.004-.379-.012-.566A8.872 8.872 0 0 0 22.23 5.924z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* LinkedIn SVG */}
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.41c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.41h-3v-5c0-1.09-.89-2-2-2s-2 .91-2 2v5h-3v-10h3v1.45c.69-.82 1.69-1.45 2.86-1.45 2.21 0 4 1.79 4 4v6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
