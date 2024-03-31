'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Filler from '@/components/Filler'
import Intro from '@/components/Intro'
import References from '@/components/References'

const page = () => {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Intro/>
      <References/>
      <Filler/>
    </main>
  )
}

export default page