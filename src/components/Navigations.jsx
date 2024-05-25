import React, { useState } from 'react';

const Navigations = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='h-[10vh] flex flex-col md:flex-row justify-between items-center border-b-[1.5px] border-black px-4 md:px-8'>
      <div className='flex justify-between items-center md:w-auto w-full h-full '>
        <img src="src/assets/logos/logo.svg" width={118} alt="Logo" />
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-slate-500 hover:text-black transition duration-200'>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16v2H4V5zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"/></svg>
          </button>
        </div>
      </div>
      <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex list-none gap-5 mt-4 md:mt-0`}>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Home</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Shop</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Women</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Men</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Accessories</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>About Us</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Contact Us</li>
        <li className='cursor-pointer text-slate-500 hover:text-black transition duration-200'>Blog</li>
      </ul>
      <div className='gap-5 mt-4 hidden sm:hidden lg:flex lg:my-auto'>
        <img src="src/assets/logos/image.png" alt="Search" width={20} />
        <img src="src/assets/logos/heart.png" alt="Wishlist" width={20} />
        <img src="src/assets/logos/bag.png" alt="Cart" width={20} />
        <img src="src/assets/logos/user.png" alt="User" width={20} />
      </div>
    </div>
  );
}

export default Navigations;
