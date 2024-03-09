import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-20 gap-5'>
      <div className='cardcontainer w-1/2 h-[68vh]'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-44' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute text-lg text-[#CDEA68] border-[#CDEA68] px-5 py-1 rounded-full border-2 left-10 bottom-10'>©2024-2025</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[68vh]'>
      <div className='card relative rounded-xl w-full h-full text-white bg-[#212121] flex items-center justify-center'>
        <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute text-lg px-5 py-1 rounded-full border-2 left-10 bottom-10 capitalize'>Rating 5.0 on clutch</button>
      </div>
      <div className='card relative rounded-xl w-full h-full text-white bg-[#212121] flex items-center justify-center'>
        <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute text-lg px-5 py-1 rounded-full border-2 left-10 bottom-10 capitalize'>business bootcamp alumni</button>
      </div>
      </div>
    </div>
  )
}

export default Cards
