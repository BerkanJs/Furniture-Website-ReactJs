import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import {newInStore} from '../data/mockData';
import{motion} from 'framer-motion'
import {FadeLeft} from '../utility/animation'

const NewItemsSlider = () => {
  return (
    <Swiper  grabCursor={true} breakpoints={{
      320:{
        slidesPerView:2,
        spaceBetween:18,

      },
      768:{
        slidesPerView:3,
        spaceBetween:20,

      }
    }}>

      {newInStore.products.map((product,index)=>(
        <SwiperSlide className='max-w-[265px]' key={index}>
          <motion.div 
          variants={FadeLeft(0.4)}
          initial={"hidden"}
          whileInView={"visible"}  
      
          
          
          
          className='relative'>
            <img src={product.image} alt="" />
            <div className='absolute text-gray-950 font-bold bottom-[8px] right-5  text-center w-full text-[18px] lg:text-2xl capitalize'>{product.name}</div>

          </motion.div>
        </SwiperSlide>





))}





    </Swiper>
  )
}

export default NewItemsSlider