"use client"
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useState, createContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';


let info:{
  selectedSize: string,
  selectedcount:number
};
// export let arr:any=[];
// {id:any; name:any; type:any; price:any; selectedSize:anyl selectedcount:any }
// console.log(arr, "<---")
export const CreateArrayContext=createContext([{}]);

function SizeQuantityBox({proslug}:any) {
  const [arr, setarr] = useState([{}]);
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);
  
  let nextid:number=0;
  info={
    selectedSize: size,
    selectedcount:count
  }
  
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
    // setClick(click+1);
     
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
          {/* <div>{size}</div> */}
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
        <Button className="gap-2 rounded-none bg-black" onClick={()=>{
          arr.push({
            id:nextid++,
            name:proslug.data.name,
            type:proslug.data.Type,
            price:proslug.data.price,
            selectedSize: size,
            selectedcount:count
          });
          <CreateArrayContext.Provider value={arr}></CreateArrayContext.Provider>
          toast.success(`${count} ${proslug.data.name} of ${size} added to the Cart!`);
        }} >
          <ShoppingCart className='h-5 font-bold'/>
          Add to Cart
        </Button>
        <Toaster />         
        <div className="font-bold text-2xl leading-8 tracking-widest text-[#212121]">{proslug.data.price}</div>
      </div>
    </div>
  )
}

export default SizeQuantityBox;