import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Autoplay,Navigation} from 'swiper/modules'
import {testimonial} from '../data/mockData'
const TestimonialSlider = () => {
  return (
     <Swiper className='testimonialSlider' modules={[Navigation,Autoplay]} navigation={true} autoplay={true}>
      {testimonial.persons.map((person,index)=>{
        const {avatar,name,occupation,message}=person;
        return <SwiperSlide key={index}>
          <div className='flex flex-col min-h-[400px]'>
            <div className='flex gap-x-5 '>

              <img className='h-[180px] w-[180px] rounded-full object-cover object-top ' src={avatar} alt="" />
              <div className='m-5'>
              <div className='text-xl font-bold'>{name}</div>
              <div className='text-gray-500'>{occupation}</div>


              </div>

            </div>
          
            <div className='mt-4 max-w-[570px] text-xl text-left'>{message}</div>


          </div>




        </SwiperSlide>
      })}




     </Swiper>
  )
}

export default TestimonialSlider