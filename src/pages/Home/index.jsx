import { motion } from 'framer-motion'
import React from 'react'
import { FiArrowUpRight, FiLinkedin } from 'react-icons/fi'
import { RiDribbbleLine } from 'react-icons/ri'
import { SiInstagram } from 'react-icons/si'
export default function Homepage() {
  return (
    <div className='flex flex-col'>
      <div className='px-10 flex flex-col justify-between h-[835px] pb-10'>
        <motion.img initial={{opacity: 0,}} animate={{opacity: 1,}} transition={{duration: 0.5,}} src="logo-large.png" className='-mt-14 w-fit' alt="" />
        <div className='flex justify-between items-center '>
            <motion.h4 initial={{opacity: 0,}} animate={{opacity: 1,}} transition={{duration: 0.5,}} className='uppercase font-semibold leading-[42px] tracking-[-2%] text-[42px]'>design studio BASED IN OSAKA — TOKYO</motion.h4>
            <motion.button initial={{opacity: 0,}} animate={{opacity: 1,}} transition={{duration: 0.5,}} className='border-white border-2 px-5 py-2 flex rounded-[17px] font-bold text-4  hover:bg-white hover:text-customblack  transition-all uppercase gap-2'>Get in touch <FiArrowUpRight size={24} /></motion.button>
        </div>
      </div>
      <div className='flex flex-col px-10 py-[350px]'>
        <h1 className='uppercase font-semibold text-[240px] tracking-[-4%] leading-[210px]'>pixel obsession</h1>
        <h1 className='uppercase font-semibold text-[#565656] text-[240px] tracking-[-4%] leading-[210px]'>— since</h1>
        <h1 className='uppercase font-semibold text-[#565656] text-[240px] tracking-[-4%] leading-[210px] items-center flex gap-5'>1996 <img src="Image (2).png"  alt="" /></h1>
      </div>
      <div className='px-10 flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <h2 className='uppercase text-[100px] font-semibold'>works</h2>
          <p className='font-semibold text-[42px] text-[#B6B6B6] w-[478px]'>PHOTOGRAPHER BASED IN OSAKA — TOKYO</p>
        </div>
        <div className='flex flex-col gap-5'>
          <img src="Worls Card (1).png" className='' alt="" />
          <img src="Worls Card (2).png" className='' alt="" />
          <img src="Worls Card (3).png" className='' alt="" />
          <img src="Worls Card (4).png" className='' alt="" />
          <button className='border-2 border-[#646467]/50 uppercase py-2 leading-8 font-bold tracking-[2%] flex rounded-[17px]  justify-center items-center gap-2 '> View ALL WORKS <FiArrowUpRight size={24} /></button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-20 justify-center py-[250px]'>
        <p className='font-semibold text-[100px] text-white w-[1138px] leading-[98px]'>PHOTOGRAPHER BASED IN OSAKA — TOKYO</p>
        <div className='flex items-center w-[1138px] justify-between'>
          <div className='flex flex-col'>
            <p className='uppercase flex gap-[19px] items-center leading-[98px] font-semibold text-[100px]'><img src="Image (1).png" alt="" /> ART</p>
            <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>FASHION</p>
            <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>MUSIC</p>
            <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>CINEMA</p>
          </div>
          <div className='flex flex-col'>
          <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>BUSINESS</p>
            <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>FASHION</p>
            <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>MUSIC</p>
            <p className='uppercase flex gap-[19px] items-center font-semibold leading-[98px] text-[#646467] text-[100px]'>CINEMA</p>
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#646467]/50 pl-10 flex justify-between items-center">
        <img src="logo-large.png" className='pt-10 pr-[110px] pb-[146px] border-r border-r-[#646467]/50 w-[389px]' alt="" />
        <div className='flex flex-col w-full mt-auto'>
          <div className='flex justify-end items-end pr-10 pb-10 border-b border-b-[#646467]/50'>
            <h4 className='uppercase font-semibold leading-[42px] tracking-[-2%] text-[42px]'>HELLO@ <br />BLURR.IO</h4>
          </div>
          <div className='flex justify-between items-center p-10 '>
            <div className='flex items-center gap-[25px]'>
              <SiInstagram color='#646467'  />
              <RiDribbbleLine color='#646467' />
              <FiLinkedin color='#646467' />
            </div>
            <h2 className='font-semibold text-2xl leading-[32px] text-[#646467]'>© 2024</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
