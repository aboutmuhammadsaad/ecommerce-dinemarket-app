'useClient'
import React, { useState, useContext } from 'react'
// import {arr} from './SizeQuantityBox';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import {CreateArrayContext} from "./SizeQuantityBox"
import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';

function NotEmptyCart() {
  const arr=useContext(CreateArrayContext) 
  console.log(arr.length)
  const [count, setCount] = useState(1);
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
    <div className='flex gap-6'>
      <div className='w-2/3'>
        {/* {arr.map((obj:any , idx:any)=>(
          <Card key={idx}>
            <div className='flex justify-between items-center gap-5'>
              <div className='flex flex-col'>
                
                <div className='text-xl'>{obj.selectedSize}</div>
                <div>{obj.selectedcount}</div>
              </div>
              <div></div>
            </div>
          </Card>               
        ))
        } */}
        <Card>
          <div className='flex gap-5'>
            <Image
              src={"/images/product-1.png"}
              alt='Image'
              width={150}
              height={200}
              className='h-[200px] w-[25%]'
            />
            <div className='w-[75%] flex flex-col gap-4 pt-2'>
              <div className=' w-full flex justify-between'>
                <p className='text-xl text-[#212121] font-light'>Brushed Raglan Sweatshirt</p>
                <Trash2 />
              </div>
              <div className='text-base font-semibold leading-4 text-[#666]'>Dress</div>
              <div className='text-base font-semibold leading-5 text-[#212121]'>Delivery Estimation</div>
              <div className='text-base font-semibold leading-5 text-[#ffc700]'>5 Working Days</div>
              <div className='flex justify-between'>
                <div>$195</div>
                <div>
                <div className="flex justify-center items-center gap-2">
                  <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={dncreaseCount}>-</Button>
                  <div>{count}</div>
                  <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={increaseCount}>+</Button>
                </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </Card>
      </div>
      <div className='w-1/3'>order summery </div>
      
    </div>
  )
}

export default NotEmptyCart
