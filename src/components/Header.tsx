import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { APP_LINKS } from '@/utils/constants';
import { Input } from "@/components/ui/input";
import { Search,ShoppingCart } from 'lucide-react';

function Header() {
  return (
    <div className='flex justify-between items-center gap-5 h-24 pt-2'>
        <div>
            <Image
                src={"/images/logo.png"}
                alt='image'
                width={140}
                height={180} 
            />     
        </div>
        <div className="flex justify-between items-center gap-10">
            {
                APP_LINKS.map((link) =>(
                   <Link href={link.href} key={link.id}>
                    <p>{link.name}</p>
                   </Link> 
                ))
            }
        </div>
        <div className='flex items-center justify-center p-1'>
            <Search  className='text-slate-500 h-4'/>
            <Input placeholder="What you looking for" className='h-4 w-72'/>
        </div>
        <div className='w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center relative'>
            <div className='w-4 h-4 text-xs absolute rounded-full flex justify-center items-center bg-red-500 text-white right-1 top-0'>0</div>
            <ShoppingCart className='h-5'/>
        </div>    
    </div>
  )
} 
export default Header
