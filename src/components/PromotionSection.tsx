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
        <div className='w-full md:w-[45%] flex flex-col gap-4'>
          {/* left uppercard */}
          <div className='px-8 flex flex-col md:flex-row justify-between items-center tracking-wider bg-[#d6d6d8] dark:text-black'>
            <div className='pt-8 md:pt-0'>
              <p className='font-bold text-[1.5rem] leading-9 md:text-[1.75rem]'>GET UP TO <span className=' font-extrabold text-[2rem] leading-10 md:text-[2.25rem]'>60%</span></p>
              <p className='text-lg tracking-wide leading-6'>For the summer season</p>
            </div>
            <div>
              <Image
                src={"/images/event1.png"}
                alt='image'
                width={380}
                height={150}
                className='h-[150px] w-[200px] md:w-[380px] md:h-[190px]'
              />
            </div>
          </div>
          {/* left lowercard */}
          <div className='flex flex-col justify-center items-center px-8 pt-12 pb-8 bg-[#212121] text-white  tracking-wide'>
            <p className=' font-extrabold text-3xl mb-4 md:text-4xl'>GET 30% Off</p>
            <p className=' text-sm mb-2'>USE PROMO CODE</p>
            <Button className='font-bold leading-6 bg-[#474747] md:px-[2.5rem] py-[0.5rem] '>DINEWEEKENDSALE</Button>
          </div>
        </div>
        <div className='w-full md:w-[55%] flex flex-col gap-4 md:flex-row'>
          <Card className='w-full md:w-[50%] pt-6 bg-[#efe1c7] dark:text-black rounded-none'>
            <CardContent>
              <p className=' text-base'>Flex Sweatshirt</p>
              <div className='text-[18px]'>
                <span className='line-through'>$100.00</span><span className='font-semibold pl-2'>$75.00</span>
              </div>
              
            </CardContent>
            <Image
              src={"/images/event2.png"}
              alt='image'
              width={280}
              height={308}
              className='h-[250px] md:h-[310px] mx-auto'
              />
          </Card>
          <Card className='w-full md:w-[50%] pt-6 bg-[#d7d7d9] dark:text-black rounded-none '>
            <CardContent>
              <p className=' text-base'>Flex Push Button Bomber</p>
              <div className='text-[18px]'>
                <span className='line-through'>$255.00</span><span className='font-semibold pl-2'>$190.00</span>
              </div>
            </CardContent>
            <Image
              src={"/images/event3.png"}
              alt='image'
              width={280}
              height={300}
              className='h-[250px] md:h-[310px] mx-auto'
              />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PromotionSection
