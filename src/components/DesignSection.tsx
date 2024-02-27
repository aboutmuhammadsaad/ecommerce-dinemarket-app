import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';
import Link from 'next/link';

function DesignSection() {
  return (
    <div className=' relative md:py-32'>
        <div className='bg-[#fbfcff]'>
            <div className='w-[80%] mx-auto py-16'>
                <div className='w-[80%] flex md:justify-end md:absolute md:top-[3%] md:right-[10%] '>
                    <p className='w-full font-bold text-[2.5rem] tracking-wide leading-[55px] text-[#212121] md:text-[2.75rem] md:w-[45%]'>Unique and Authentic Vintage Designer Jewellery</p>
                </div>
                <div className='flex flex-col justify-between md:flex-row'>
                    <div className='w-full flex gap-6 md:w-[50%] relative '>
                        <div className='w-full font-extrabold text-[4.5rem] leading-[110px] text-[#f2f3f7] py-5 md:text-[6.875rem]'>Different from others</div>
                        <div className='w-full absolute z-10 grid grid-cols-[1fr,1fr] gap-5 md:gap-8 pt-5'>
                            <div className='w-full md:w-[70%]'>
                                <p className='font-semibold text-[1.125rem] leading-5 tracking-wide mb-4 '>Using Good Quality Materials</p>
                                <p className=' font-light text-base leading-5 tracking-wider text-[#212121]'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                            <div className='w-full md:w-[70%]'>
                            <p className='font-semibold text-[1.125rem] leading-5 tracking-wide mb-4'>100% Handmade Products</p>
                                <p className=' font-light text-base leading-5 tracking-wider text-[#212121]'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                            <div className='w-full md:w-[70%]'>
                            <p className='font-semibold text-[1.125rem] leading-5 tracking-wide mb-4'>Modern Fashion Design</p>
                                <p className=' font-light text-base leading-5 tracking-wider text-[#212121]'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                            <div className='w-full md:w-[70%]'>
                            <p className='font-semibold text-[1.125rem] leading-5 tracking-wide mb-4'>Discount for Bulk Orders</p>
                                <p className=' font-light text-base leading-5 tracking-wider text-[#212121]'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col justify-between items-center gap-10 md:flex-row'>
                        <div className='flex items-center  md:w-[50%] ' >
                            <Image
                            src={"/images/feature.png"}
                            alt='image'
                            width={250}
                            height={350}
                            className=''
                            />
                        </div>
                        <div className='w-[90%] md:w-[50%] flex flex-col gap-8'>
                            <p className='font-light text-base text-justify text-[#212121]'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <Button className='w-[60%]'><Link href={"/allproducts"}>See All Products</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DesignSection
