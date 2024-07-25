'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import FotoScroll from '@/components/FotoScroll'
import Footer from '@/components/Footer'
import Video from '@/components/Video'
import CustomCursor from '@/components/CustomCursor'
import { useState } from "react";


const page = () => {

  const path = "/cases/car4rent"

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
        <Video/>
      <FotoScroll/>
      <Footer/>
    </main>
  )
}

export default page