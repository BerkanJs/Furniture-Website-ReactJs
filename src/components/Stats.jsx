import React from 'react'
import {stats } from '../data/mockData'
import{motion} from "framer-motion";
import{FadeRight} from '../utility/animation'
const Stats = () => {
  return (
    <motion.div
    variants={FadeRight(0.2)}
    initial={"hidden"}
    whileInView={"visible"} 
    
    
    className='bg-[#aa917a] rounded-[20px] p-12'>
      <div className='flex flex-wrap gap-y-8'>
        {stats.map((item,index)=>
          <div className=' text-center min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none' key={index}>
            <div className='text-2xl font-semibold lg:text-4xl'>
              {item.value}
            </div>
            <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>
              {item.text}
            </div>



          </div>
        )}


      </div>





    </motion.div>
  )
}

export default Stats