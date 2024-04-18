import React from 'react'
import heroimg from '../assets/Jazz.jpeg.jpg'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <>

    <main className='my-3'>
        <img src={heroimg} alt="hero-image" className='img-fluid w-100 hero-img'/>
    </main>

    </>
  )
}

export default Hero