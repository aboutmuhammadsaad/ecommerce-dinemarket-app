'use client'
import React from 'react';
import EmptyCart from '@/components/EmptyCart';
import NotEmptyCart from '@/components/NotEmptyCart';
import arr from '@/components/SizeQuantityBox'
 
function CartPage() {
  console.log(arr)
  return (
    <div className=" min-h-screen w-[80%] mx-auto py-16 px-10">
      <div className='font-bold text-[1.5rem]'>Shopping Cart</div>
      {arr.length === 0 ? (<EmptyCart />) : (<NotEmptyCart />) }
    </div>
  )
}

export default CartPage
