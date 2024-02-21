import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

function Herosection() {
  return (
    <div className='flex flex-col md:flex-row px-32'>
      <div className='basis-1/2 pt-16'>
          <Button className='bg-blue-100 text-blue-600 font-bold text-base px-6'>Sale 70%</Button>
          <p className='py-10 font-bold text-6xl tracking-wider'>An Industrial Take on Streetwear</p>
          <p className='pb-12 w-72 font-light'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <div>
            <Link href={"/products"}>
              <Button className='gap-3 h-16 w-40 bg-black flex items-center'>
                <div><ShoppingCart className='h-5'/></div>
                <div className=''>Start Shopping</div>
              </Button>
            </Link>
          </div>
          <div className='flex items-center gap-5 py-8'>
            <Image 
              src={"/images/Featured1.png"} 
              alt='image' 
              width={100} 
              height={100}
            />
            <Image 
              src={"/images/Featured2.png"} 
              alt='image' 
              width={100} 
              height={100}
            />
            <Image 
              src={"/images/Featured3.png"} 
              alt='image' 
              width={100} 
              height={100}
            />
            <Image 
              src={"/images/Featured4.png"} 
              alt='image' 
              width={100} 
              height={100}
            />
          </div>
      </div>
      <div className='basis-1/2'>
        <div className='bg-orange-100'></div>
        <Image 
          src={"/images/header.png"} 
          alt='image' 
          width={800} 
          height={800}
          className='h-[700px]'
        />
      </div>      
    </div>
  )
}

export default Herosection
