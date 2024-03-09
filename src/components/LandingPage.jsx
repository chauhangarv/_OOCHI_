import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-200 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["we Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex overflow-hidden items-center'>
              {index === 1 && (
              // <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
              //  className='w-[9vw] h-[6vw] relative top-[.5vw] bg-red-200'>
                <motion.img initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
               className='w-[9vw] h-[6vw] relative top-[.5vw]' src="https://images.unsplash.com/photo-1515041219749-89347f83291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              //  </motion.div>
              )}
          <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-[Founders Grotesk_X-Condensed] font-medium'>{item}</h1>
          </div>
        </div>
        })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO",].map((item, index) => (
            <p className='text-lg font-light tracking-tight leading-none'>{item}</p>
          ))}
          <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-600 font-normal text-md uppercase rounded-full'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full'>
             <span className='rotate-[-135deg]'>
               <FaArrowDownLong />
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage
