import React from 'react';
import { ShoppingBag } from 'lucide-react';

function EmptyCart() {
  return (
    <div className='p-16 '> 
      <div className='font-bold text-[1.5rem]'>Shopping Cart</div>
      <div className='flex flex-col justify-center items-center mt-8'>
        <ShoppingBag className='h-[150px] w-[150px]'/>
        <div className=' text-[2rem] font-bold'>Your shopping bag is empty</div>
      </div>

    </div>
  )
}

export default EmptyCart
