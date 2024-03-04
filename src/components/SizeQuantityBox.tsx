"use client"
import React, { use } from 'react';
import { Button } from './ui/button';
import { useState, useCallback, useEffect } from 'react';

export let info:{
  pslug:string,
  selectedSize: string,
  selectedcount:number
};
export let arr:any=[];

function SizeQuantityBox({proslug}) {
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);
  const objectgenrater = useCallback(()=>{
    info={
      pslug: proslug,
      selectedSize: size,
      selectedcount:count
    }
    if (!size){
      arr.push(info)
    }
  },[size])  
  
  useEffect(()=>{
    objectgenrater();
  },[size , count])
  
  function dncreaseCount() {
    if(count === 1){
      return;  
    }
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
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
    </div>
  )
}

export default SizeQuantityBox;