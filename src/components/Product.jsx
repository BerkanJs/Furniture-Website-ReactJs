import React from 'react'
import{products} from '../data/mockData'
import ProductSlider from '../components/ProductSlider'
import {motion} from "framer-motion"


const Product = () => {
  const {title,subtitle}=products;
  return (
    <section className='section text-center'>
      <motion.div
                initial={{opacity:0,x:-500}}
                animate={{ opacity:1,x:0 }}
                transition={{ duration: 3 }}



      
      
      className='container mx-auto'>
        <div>
          <h2 className='title font'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{ subtitle}</p>



        </div>
        <ProductSlider/>





      </motion.div>
    </section>
  )
}

export default Product