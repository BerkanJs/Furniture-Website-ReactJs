import React from 'react'
import {hero } from '../data/mockData'
import Stats from '../components/Stats'
import {motion} from "framer-motion"
import{FadeUp} from '../utility/animation'
import bgphoto from '../../public/img/NewsLetter.webp'
const Hero = () => {
  const{title ,subtitle,buttonText}=hero;
  return (
    
    <section className='h-full'> 
      <div
        style={{backgroundImage:`url(${bgphoto})`}}

       className='container mx-auto  bg-center bg-cover bg-no-repeat text-white h-[850px] pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>
        <div
             
  
         className='container mx-auto text-center'>
          <motion.h1 
          variants={FadeUp(0.2)}
          initial={"hidden"}
          whileInView={"visible"} 
          
          className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</motion.h1>
          <motion.h2
          variants={FadeUp(0.4)}
          initial={"hidden"}
          whileInView={"visible"} 
          
          className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl '>{subtitle}</motion.h2>
          <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] transition duration-200 mb-[160px] text-xl rounded-md backdrop-blur-md lg:px-[80px] lg:py-[16px] lg:md-[194px] '>{buttonText}</button>
        </div>
        <div>
        <Stats />
        </div>
      </div>

     

    </section>
    
  )
}

export default Hero
