import React from 'react'
import { Button } from './ui/button';
import { Input } from "@/components/ui/input";

function NewsletterSection() {
  return (
    <div className='w-[80%] mx-auto flex items-center relative py-[10rem]'>
      <div className=' w-full font-extrabold text-[3.5rem] leading-[151px] text-[#f2f3f7] md:w-[60%] md:mx-auto md:text-[7.5rem]'>Newsletter</div>
      <div className='w-full text-center absolute z-10 left-0 md:w-[50%] md:left-[25%] '>
        <div className='mb-4 font-bold text-[2rem] tracking-wide leading-[40px] text-[#212121]'>Subscribe Our Newsletter</div>
        <div className='mb-8 font-light text-base text-[#212121]'>Get the latest information and promo offers directly</div>
        <div className='flex justify-center items-center gap-2 md:w-[80%] mx-auto'>
            <Input type='email' placeholder='Input email address' className='border border-gray-500 rounded-none pl-5'/>
            <Button className='rounded-none'>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection
