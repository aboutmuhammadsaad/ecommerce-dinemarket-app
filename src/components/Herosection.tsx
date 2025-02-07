import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

function Herosection() {
  return (
    <div className='w-[80%] mx-auto gap-16 flex flex-col md:flex-row justify-between '>
      <div className='w-full pt-8 pb-4 flex flex-col justify-between md:w-[40%] md:pt-16 gap-4'>
        <div className='flex flex-col justify-center gap-10'> 
          <Button className='bg-blue-100 text-blue-600 font-bold text-base px-6 w-[120px]'>Sale 70%</Button>
          <p className='font-bold text-[2.5rem] leading-none tracking-wider md:text-[3.5rem]'>An Industrial Take on Streetwear</p>
          <p className='w-full md:w-[70%] text-[#666] text-base'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <div>
            <Link href={"/allproducts"}>
              <Button className='w-[65%] p-4 text-base flex justify-center items-center rounded-none gap-2 md:w-[35%] md:h-20'>
                <div><ShoppingCart className='h-6'/></div>
                <div className=' flex flex-row gap-x-2 md:flex-col font-bold'><div>Start</div><div> Shopping</div></div>
              </Button>
            </Link>
          </div>
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
      <div className='w-[95%] mx-auto relative flex flex-1 items-center justify-center md:w-[60%] '>
        <div className='absolute h-[90%] w-[100%] bg-[#ffece3] rounded-full'></div>
        <Image 
          src={"/images/header.png"} 
          alt='image' 
          width={650} 
          height={650}
          className='h-[320px] mx-auto z-10 md:h-[650px]'
        />
      </div>      
    </div>
  )
}

export default Herosection
