import React from 'react'
import{newsletter} from '../data/mockData'

const NewsLetter = () => {
  const{title,subtitle,placeholder,buttonText}=newsletter;
  return (
    <section className='section bg-NewsLetter min-h-[490px] '>
      <div className='container mx-auto flex justify-center lg:justify-end'>
        <div className='w-full max-w-[558px] text-center text-[#605041] lg:text-left'>
          <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal'>{title}</h2>
          <p className='text-xl  mb-10 font-semibold'>{subtitle}</p>
          <div className='flex flex-col lg:flex-row gap-[22px]'>
          <input className='h-[60px] px-6 outline-none placeholder:text-gray-400 text-gray-600' type="text" placeholder={placeholder} />
          <button className='bg-gray-900 h-[60px] hover:bg-slate-900 px-7 rounded-lg text-white font-medium text-xl transition'>{buttonText}</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter