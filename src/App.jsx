import { useState } from 'react'


import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Feature'
import NewItems from './components/NewItems'
import FeaturesSecond from './components/FeaturesSecond'
import Product from './components/Product'
import Testimonial from './components/Testimonial'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <div  className='w-full max-w-[1449px] mx-auto bg-white'>

      <Header/>
      <Hero/>
      <Features/>
      <NewItems/>
      <FeaturesSecond/>
      <Product/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>

     </div>
    </>
  )
}

export default App
