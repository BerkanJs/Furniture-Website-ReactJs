import React from 'react'
import{features} from '../data/mockData'
import {motion} from 'framer-motion'
const Feature = () => {
  const {title,subtitle,image,buttonText,items}=features
  return (
    <section className='section'>
      <motion.div
      initial={{opacity:0,x:-500}}
      animate={{ opacity:1,x:0 }}
      
      transition={{ duration: 3 }}
      
      className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            {/* IMG ABTEILUNG */}
          <div className='w-full '>
            <img className='max-h-[550px] ' src={image} alt="" />
          </div>

          <div className='flex flex-col'> 
          {/* TEXT ABTEILUNG */}
          <div className=''>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
          </div>
          {/* ITEMS ABTEILUNG */}
          <div>
           {items.map((item,index)=>(
           
            <div className=' flex mb-6' key={index}>
             
             
             
              <div className='text-2xl mr-4 lg:text-3xl'><item.icon/></div>

              <div>
              <h4 className='text-base lg:text-xl font-semibold mb-3'>{item.title}</h4>
              <p>{item.subtitle}</p>



              </div>
           
             




            </div>
           ))}



          </div>

          </div>
   

      </div>
    </motion.div>




    </section>
  )
}

export default Feature