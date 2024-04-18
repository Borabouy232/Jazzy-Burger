import React, { useEffect} from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../layouts/Footer'

const Home = () => {
   useEffect(() =>{
    document.title = "Home Page"
    
   })
  return (
    <>
    <main className='container'>
      <Hero/>
      <Products/>
      <Footer/>

    </main>
    </>
  )
}

export default Home