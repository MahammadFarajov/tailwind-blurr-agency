import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Logo from '../../shared/Logo'

export default function Menu() {
    const [hoverFirst, setHoverFirst] = useState(false)
    const [hoverSecond, setHoverSecond] = useState(false)
    const [hoverThird, setHoverThird] = useState(false)
    const [hoverFourth, setHoverFourth] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
  return (
        <motion.div
        initial={{
            clipPath: "circle(0.4% at 95% 5.5%)"
        }}
        animate={{
            clipPath: "circle(144.4% at 100% 0)",
        }}
        exit={{clipPath: "circle(0.4% at 95% 5.5%)"}}
        transition={{
        duration: 0.5,
        }}
        className='bg-white h-screen fixed w-full z-10 top-0 left-0 text-customblack'
        >
            {hoverFirst && (<img src='bg.png1.png' className='fixed z-[11] object-cover  w-full h-full opacity-100' />)}
            {hoverSecond && (<img src='bg.png2.png' className='fixed z-[11] object-cover  w-full h-full opacity-100' />)}
            {hoverThird && (<img src='bg.png3.png' className='fixed z-[11] object-cover  w-full h-full opacity-100' />)}
            {hoverFourth && (<img src='bg.png4.png' className='fixed z-[11] object-cover  w-full h-full opacity-100' />)}
            <nav className='flex items-center justify-between px-10 py-10'>
                <div className='invert'>
                <Logo />
                </div>
                <motion.div animate={isOpen ? "open" : "closed"} className='w-[120px] relative  z-30 cursor-pointer ml-auto h-6 flex flex-col justify-between items-center'>
                <motion.div 
                 variants={{
                  open: {
                    height: "2px",
                    width: "100%",
                    marginLeft: "auto",
                  },
                  closed: {
                    height: "2px",
                    width: "100%",
                    marginLeft: "auto",
                  },
                }}
                className='h-0.5 bg-customblack w-full'></motion.div>
                <motion.div
                 variants={{
                  open: {
                    height: "2px",
                    width: "100%",
                    marginLeft: "auto",
                  },
                  closed: {
                    height: "2px",
                    width: "75%",
                    marginLeft: "auto",
                  },
                }}
                className='h-0.5 bg-customblack w-full'></motion.div>
                <motion.div
                 variants={{
                  open: {
                    height: "2px",
                    width: "100%",
                    marginLeft: "auto",
                  },
                  closed: {
                    height: "2px",
                    width: "50%",
                    marginLeft: "auto",
                  },
                }}
                className='h-0.5 bg-customblack w-full'></motion.div>
            </motion.div>
            </nav>
                <ul className='flex flex-col mt-24 gap-12 font-bold w-fit'>
                    <motion.div whileHover={{ opacity: 0.8, }} onHoverStart={() => {setHoverFirst(true)}} onHoverEnd={() => {setHoverFirst(false)}} className='text-9xl leading-[100px] cursor-pointer'>HOME</motion.div>
                    <motion.div whileHover={{ opacity: 0.8, }} onHoverStart={() => {setHoverSecond(true)}} onHoverEnd={() => {setHoverSecond(false)}} className='text-9xl leading-[100px] cursor-pointer'>ABOUT</motion.div>
                    <motion.div whileHover={{ opacity: 0.8, }} onHoverStart={() => {setHoverThird(true)}} onHoverEnd={() => {setHoverThird(false)}} className='text-9xl leading-[100px] cursor-pointer'>WORKS</motion.div>
                    <motion.div whileHover={{ opacity: 0.8, }} onHoverStart={() => {setHoverFourth(true)}} onHoverEnd={() => {setHoverFourth(false)}} className='text-9xl leading-[100px] cursor-pointer'>FEATURES</motion.div>
                </ul>
        </motion.div>
  )
}
