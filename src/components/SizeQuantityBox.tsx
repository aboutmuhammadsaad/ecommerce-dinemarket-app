"use client"
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

let info:{
  pslug:string,
  selectedSize: string,
  selectedcount:number
};
export let arr:any=[];

function SizeQuantityBox({proslug}) {
  const [click, setClick] = useState(0);
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);
  
  info={
    pslug: proslug.pslug,
    selectedSize: size,
    selectedcount:count
  }
   
  useEffect(()=>{
    arr.push(info);
  },[click])
  
  function dncreaseCount() {
    if(count === 1){
      return;  
    }
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
  }
  function handleClick(){
    setClick(click+1);
    toast.success('Successfully added to the Cart!');
  }

  return (
    <div className="flex flex-col gap-10 py-4 md:w-[35%] mt-4">
      <div>
        <div className="font-bold text-[0.9rem] leading-4 tracking-wider">SELECT SIZE</div>
        <div className="flex gap-4 mt-4">
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={()=>setSize('XS')}>XS</Button>
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={()=>setSize('S')}>S</Button>
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={()=>setSize('M')}>M</Button>
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={()=>setSize('L')}>L</Button>
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={()=>setSize('XL')}>XL</Button>
          <div>{size}</div>
        </div>
      </div>  
      <div className="flex items-center gap-4 ">
        <div>Quantity:</div>
        <div className="flex justify-center items-center gap-2">
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={dncreaseCount}>-</Button>
          <div>{count}</div>
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={increaseCount}>+</Button>
        </div>
      </div>
      <div className="flex items-center gap-4">      
        <Button className="gap-2 rounded-none bg-black" onClick={handleClick} >
          <ShoppingCart className='h-5 font-bold'/>
          Add to Cart
        </Button>
        <Toaster />         
        <div className="font-bold text-2xl leading-8 tracking-widest text-[#212121]">{proslug.price}</div>
      </div>
    </div>
  )
}

export default SizeQuantityBox;