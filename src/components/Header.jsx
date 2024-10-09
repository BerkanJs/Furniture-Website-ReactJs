import { useEffect ,useState} from "react"
import React from 'react'
import {CgMenuRight, CgClose} from 'react-icons/cg' 
import {navigation} from '../data/mockData'
import NavMobile from './NavMobile'
const Header = () => {
  const [bg,setBg]=useState(false);
  const [mobileNav,setMobileNav]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY> 50 ? setBg(true) : setBg(false);
    })
  })
  return (
    <header className={`${bg ? 'bg-gray-900 p-4 lg:py-6': 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-150 `}>

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a className={`${bg ? 'text-white'  : 'text-[#453a2f]' } text-4xl md:text-3xl lg:text-5xl font-bold text-white `} href="#">
            <span className="text-[#453a2f]">F</span>urniture


          </a>
          <div onClick={()=>setMobileNav(!mobileNav)} className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer">{mobileNav ? <CgClose/> : <CgMenuRight/> }</div>
        
        <nav className="hidden md:flex">

          <ul className="md:flex md:gap-x-12">
            {navigation.map((item,index)=>{
              return(
                <li  key={index}>
                  <a className={`${bg ? 'text-white' : 'text-[#453a2f]' } font-bold capitalize text-white hover-border-b transition-all`} href={item.href}>{item.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={`${mobileNav ? 'left-0' : 'left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
        <NavMobile/>
        </div>

        </div>



      </div>




    </header>
  )
}

export default Header