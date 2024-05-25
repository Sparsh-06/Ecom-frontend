import { useEffect, useState } from 'react'
import './index.css'
import Navigations from './components/Navigations'
import Home from './components/Home'
import Services from './components/Services'
import Products from './components/Products'
import LimitedOffer from './components/LimitedOffer'
import DealsOfTheDay from './components/Banners'
import InstagramSection from './components/Instas.jsx'
import BlogSection from './components/Blogs.jsx'
import FAQ from './components/FAQs.jsx'
import Footer from './components/Footer.jsx'


function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);
  

  return (
    <div>
      <div><Navigations/></div>
      <div>
      <Home/>
      <Services/>
      <Products/>
      <LimitedOffer/>
      <DealsOfTheDay/>
      <InstagramSection/>
      <BlogSection/>
      <FAQ/>
      </div>
      <Footer/>

    </div>
  )
}

export default App
