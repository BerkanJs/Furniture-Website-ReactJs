import React from 'react'
import { newInStore } from '../data/mockData'
import NewItemsSlider from '../components/NewItemsSlider'
import{motion} from 'framer-motion'
import {FadeUp} from '../utility/animation'
const NewItems = () => {

  const{title,subtitle,link}=newInStore;

  return (
    <section >
      <div className="container mx-auto ">
        <div className='flex flex-col lg:flex-row'>

          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
            <motion.h2
              variants={FadeUp(0.2)}
              initial={"hidden"}
              whileInView={"visible"}  
          
            
            className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>{title}</motion.h2>
            <motion.p
              variants={FadeUp(0.4)}
              initial={"hidden"}
              whileInView={"visible"}   
            
            className='max-w-[245px] lg:mb-12'>{subtitle}</motion.p>
            <div className='hidden lg:flex items-center'>
              <a className='hover:border-b border-gray-900 lg:items-center font-medium transition-all duration-200' href="#">{link}</a>
              <div><newInStore.icon className='text-3xl'/></div>
            </div>
          </div>
          {/* slider */}
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:right-24'>
          <NewItemsSlider/>
          </div>


        </div>



      </div>




    </section>
  )
}

export default NewItems