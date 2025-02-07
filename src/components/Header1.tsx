"use client"
import React, { useState ,useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { APP_LINKS } from '@/utils/constants';
import { Input } from "@/components/ui/input";
import { Search,ShoppingCart } from 'lucide-react';
import { ArrContext } from '@/utils/Arrcontext';
import { useAppSelector } from "@/utils/constants";
import {ModeToggle} from '@/components/ToggleButton'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const valuesArr = useAppSelector((state:any)=> state.productarr)
  // const {valuesArr}=useContext(ArrContext);

  // const arr=useContext(CreateArrayContext) 
  
  // const [productCount, setProductCount] = useState(0);
  // setProductCount(arr.length);
  // if (productCount < arr.length) {
  //   setProductCount(arr.length)
  // }
 
  return (
    <header className={`flex w-full items-center gap-5 my-6 `}>
      <div className="w-[80%] mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 cursor-pointer">
            <Link href="/#" className="block w-full py-5">
              <Image
                src={"/images/Logo.png"}
                alt="logo"
                width={140}
                height={180}
                className="dark:hidden"
              />
              <Image
                src={"/images/Logo.png"}
                alt="logo"
                width={140}
                height={180}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <Button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden bg-white dark:bg-slate-900 `}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-900 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-900 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-900 dark:bg-white"></span>
              </Button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-slate-900 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                   <div className="md:hidden">
                    <ModeToggle/>
                   </div>
                  <Link href={"/cart"}>
                    <div className='md:hidden w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-900 flex justify-center items-center relative'>
                      <div className='w-4 h-4 text-xs absolute rounded-full flex justify-center items-center bg-red-500 text-white right-1 top-1'>{valuesArr.length}</div>
                      <ShoppingCart className='h-5 font-bold'/>
                    </div>
                  </Link>
                  <div className="md:flex flex-wrap justify-between items-center gap-x-10">
                    {
                      APP_LINKS.map((link) =>(
                        <Link href={link.href} key={link.id}>
                          <p>{link.name}</p>
                        </Link> 
                      ))
                    }
                  </div>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end sm:flex lg:pr-0">
              <div className="flex justify-center items-center gap-5">
              <div className='md:flex items-center justify-center p-3 h-4 border'>
                <Search  className='text-slate-500 h-4'/>
                <Input placeholder="What you looking for" className='h-4 w-72 border-none rounded-none p-0'/>
              </div>
              <Link href={"/cart"}>
                <div className='w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-900 flex justify-center items-center relative'>
                  <div className='w-4 h-4 text-xs absolute rounded-full flex justify-center items-center bg-red-500 text-white right-1 top-1'>{valuesArr.length}</div>
                  <ShoppingCart className='h-5 font-bold'/>
                </div>
              </Link>
              <ModeToggle/>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

