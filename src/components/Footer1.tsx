import React from 'react'

function Footer1() {
  return (
    <div className=' mt-16 py-4 border-t border-black '>
      <div className='w-[85%] md:w-[80%] mx-auto flex flex-col justify-between items-center md:flex-row gap-y-5 '>  
        <div className='w-full font-light md:w-1/5'>

          <p>Copyright © 2024 Dine Market</p>
        </div>
        <div className='font-light w-full md:w-1/6'> 
          <p>Design by. <span className='font-bold'>Weird Design Studio</span></p>
        </div>
        <div className=' w-full font-light md:w-1/4'>
          <p>Code by. <span className='font-bold'>aboutmuhammadsaad on github</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Footer1
