import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { Card,CardContent } from './ui/card';

function PromotionSection() {
  return (
    <div className='w-[85%] md:w-[80%] mx-auto py-16 '>
      {/* heading */}
      <div className='text-center flex flex-col gap-4 mb-8'>
        <p className='text-xs font-bold text-blue-700 tracking-widest'>PROMOTIONS</p>
        <p className=' text-3xl font-bold tracking-wide'>Our Promotions Events</p>
      </div>
      {/* main box */}
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        {/* left card */}
        <div className='w-full md:w-[45%] flex flex-col gap-4'>
          {/* left uppercard */}
          <div className='px-8 flex flex-col md:flex-row justify-between items-center tracking-wider bg-[#d6d6d8]'>
            <div className='pt-8 md:pt-0'>
              <p className='font-bold text-[1.75rem] leading-9 '>GET UP TO <span className=' font-extrabold text-[2.25rem] leading-10'>60%</span></p>
              <p className='text-lg tracking-wide leading-6'>For the summer season</p>
            </div>
            <div>
            <Image
              src={"/images/event1.png"}
              alt='image'
              width={380}
              height={150}
              className='h-[190px] w-[200px] md:w-[380px]'
              />
            </div>
          </div>
          {/* left lowercard */}
          <div className='flex flex-col justify-center items-center px-8 pt-12 pb-8 bg-[#212121] text-white tracking-wide'>
            <p className=' font-extrabold text-4xl mb-4'>GET 30% Off</p>
            <p className=' text-sm'>USE PROMO CODE</p>
            <Button className='font-bold leading-6 bg-[#474747] md:px-[2.5rem] py-[0.5rem] '>DINEWEEKENDSALE</Button>
          </div>
        </div>
        <div className='w-full md:w-[55%] flex flex-col gap-4 md:flex-row'>
          <Card className='w-full md:w-[50%] pt-6 bg-[#efe1c7] rounded-none'>
            <CardContent>
              <p className=' text-base'>Flex Sweatshirt</p>
              <div className=' relative'>
                <span className='text-[18px] absolute top-[-7px]'>_______</span>
                <p className='text-[18px]'>$100.00 <span className='font-semibold pl-2'>$75.00</span></p>
              </div>
              
            </CardContent>
            <Image
              src={"/images/event2.png"}
              alt='image'
              width={280}
              height={308}
              className='h-[300px] mx-auto'
            />
          </Card>
          <Card className='w-full md:w-[50%] pt-6 bg-[#d7d7d9] rounded-none '>
            <CardContent>
              <p className=' text-base'>Flex Push Button Bomber</p>
              <div className=' relative'>
                <span className='text-[18px] absolute top-[-7px]'>_______</span>
                <p className='text-[18px]'>$255.00 <span className='font-semibold pl-2'>$190.00</span></p>
              </div>
            </CardContent>
            <Image
            src={"/images/event3.png"}
            alt='image'
            width={280}
            height={250}
            className='h-[300px] mx-auto'
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PromotionSection
