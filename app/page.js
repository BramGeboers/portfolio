'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Filler from '../components/Filler'
import Intro from '../components/Intro'
import References from '../components/References'
import Footer from '@/components/Footer'

const page = () => {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Intro/>
      <References/>
      <Footer/>
    </main>
  )
}

export default page