// ParentComponent.js
"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import About from '@/components/About'
import { useState } from "react";

const ParentComponent = () => {

  const path = "/about"
  
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
      <About/>
      <Footer/>
    </main>
  );
};

export default ParentComponent;
