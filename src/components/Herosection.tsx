import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

function Herosection() {
  return (
    <div className='w-[80%] mx-auto flex flex-col md:flex-row justify-between '>
      <div className='w-full pt-20 pb-4 flex flex-col gap-9 md:w-[40%]'>
          <Button className='bg-blue-100 text-blue-600 font-bold text-base px-6 w-[120px]'>Sale 70%</Button>
          <p className='font-bold text-[3rem] leading-none tracking-wider md:text-[3.5rem]'>An Industrial Take on Streetwear</p>
          <p className='w-full font-light md:w-[70%]'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <div>
            <Link href={"/products"}>
              <Button className='w-[80%] p-4 bg-black text-base flex justify-center items-center rounded-none gap-2 md:w-[35%] h-20'>
                <div><ShoppingCart className='h-6'/></div>
                <div className=' flex flex-row gap-x-2 md:flex-col'><p>Start</p><p> Shopping</p></div>
              </Button>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 '>
            <Image 
              src={"/images/Featured1.png"} 
              alt='image' 
              width={100} 
              height={35}
            />
            <Image 
              src={"/images/Featured2.png"} 
              alt='image' 
              width={100} 
              height={35}
            />
            <Image 
              src={"/images/Featured3.png"} 
              alt='image' 
              width={100} 
              height={35}
            />
            <Image 
              src={"/images/Featured4.png"} 
              alt='image' 
              width={100} 
              height={35}
            />
          </div>
      </div>
      <div className='w-full relative flex items-center justify-center md:w-[55%] '>
      {/* relative flex items-center justify-center before:absolute before:h-[340px] before:w-[340px] before:bg-orange-100 before:rounded-full */}
        <div className='absolute h-[90%] w-[100%] bg-orange-100 rounded-full'></div>
        <Image 
          src={"/images/header.png"} 
          alt='image' 
          width={750} 
          height={650}
          className='h-[400px] mx-auto z-10 md:h-[650px]'
        />
      </div>      
    </div>
  )
}

export default Herosection
