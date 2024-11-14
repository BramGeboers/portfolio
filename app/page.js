// ParentComponent.js
"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import References from '@/components/References';
import Footer from '@/components/Footer';
import FotoScroll from '@/components/FotoScroll';
import CustomCursor from '@/components/CustomCursor';
import { useState } from "react";

const ParentComponent = () => {

  const path = "/"
  
  const [isHovering, setIsHovering] = useState(false);

  const handleHeroHoverEnter = () => {
    setIsHovering(true)
  };

  const handleHeroHoverLeave = () => {
    setIsHovering(false)
  };

  return (
    <main className='bg-black'>
      <CustomCursor
        isHovering={isHovering}
      />
      <Navbar
        pathname={path}
        onHoverEnter={handleHeroHoverEnter}
        onHoverLeave={handleHeroHoverLeave}/>
      <Hero/>
      <Intro/>
      <References
        onHoverEnter={handleHeroHoverEnter}
        onHoverLeave={handleHeroHoverLeave}/>
      <FotoScroll/>
      {/* <Footer/> */}
    </main>
  );
};

export default ParentComponent;
