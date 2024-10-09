import React from 'react'
import {footer} from '../data/mockData'
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white section'>
      <div className="container mx-auto ">
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='text-3xl font-bold font-serif text-white' href="#">
            Furniture
          </a>
          <div className='flex gap-x-4'>

            {footer.social.map((item,index)=>{
              return(
                <div className='w-12 h-12 text-2xl bg-gray-700 rounded-full flex justify-center items-center hover:bg-slate-300 transition duration-300' key={index}>
                  <a href="#"><item.icon/></a>
                </div>
              )
            })}

          </div>
        </div>
        <p className='text-center'>
          &copy; Furniture 2024 -All right reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer