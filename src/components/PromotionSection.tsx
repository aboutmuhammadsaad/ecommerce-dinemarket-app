import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { Card,CardContent } from './ui/card';

function PromotionSection() {
  return (
    <div className='w-[80%] mx-auto py-16 '>
      {/* heading */}
      <div className='text-center flex flex-col gap-4 mb-8'>
        <p className='text-xs font-bold text-blue-700 tracking-widest'>PROMOTIONS</p>
        <p className=' text-3xl font-bold tracking-wide'>Our Promotions Events</p>
      </div>
      {/* main box */}
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        {/* left card */}
        <div className='flex flex-1 flex-col gap-4'>
          {/* left uppercard */}
          <div className='py px-8 flex justify-between items-center tracking-wider bg-[#d6d6d8]'>
            <div>
              <p className='font-bold text-[1.75rem] leading-9 '>GET UP TO <span className=' font-extrabold text-[2.25rem] leading-10'>60%</span></p>
              <p className='text-lg tracking-wide leading-6'>For the summer season</p>
            </div>
            <div>
            <Image
              src={"/images/event1.png"}
              alt='image'
              width={282}
              height={218}
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
        <div className='flex flex-col gap-4 md:flex-row'>
          <Card className='pt-6 bg-[#efe1c7]'>
            <CardContent>
              <p>Flex Sweatshirt</p>
              <div className=' relative text-lg'>
                <span className=' absolute top-[-7px]'>_______</span>
                <p>$100.00 <span className='font-semibold pl-2'>$75.00</span></p>
              </div>
              
            </CardContent>
            <Image
              src={"/images/event2.png"}
              alt='image'
              width={282}
              height={368}
              className='h-[368px]'
            />
          </Card>
          <Card className='pt-6 bg-[#d7d7d9]'>
            <CardContent>
              <p>Flex Push Button Bomber</p>
              <div className=' relative text-lg'>
                <span className=' absolute top-[-7px]'>_______</span>
                <p>$255.00 <span className='font-semibold pl-2'>$190.00</span></p>
              </div>
            </CardContent>
            <Image
            src={"/images/event3.png"}
            alt='image'
            width={282}
            height={368}
            className='h-[368px]'
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PromotionSection
