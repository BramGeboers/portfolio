'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import References from '../components/References'
import Footer from '@/components/Footer'
import FotoScroll from '@/components/FotoScroll'

const page = () => {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Intro/>
      <References/>
      <FotoScroll/>
      <Footer/>
    </main>
  )
}

export default page