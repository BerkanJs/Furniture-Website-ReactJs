import React from 'react'
import{features} from '../data/mockData'
import {motion} from 'framer-motion'
const FeaturesSecond = () => {
  const {title,subtitle,image}=features.feature2
  return (
    
    <section className='section'>
    <motion.div 
          initial={{opacity:0,x:-500}}
          animate={{ opacity:1,x:0 }}
          transition={{ duration: 4 }}
    
    
    
    className=' container mx-auto '>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* IMG ABTEILUNG */}
        <div className='w-full order-last xl:ml-14 '>
          <img className='max-h-[550px]  xl:w-[650px] ' src={image} alt="" />
        </div>

        <div className='flex flex-col'> 
        {/* TEXT ABTEILUNG */}
        <div className=''>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
        </div>


        </div>
 

    </div>
  </motion.div>




  </section>
  )
}

export default FeaturesSecond