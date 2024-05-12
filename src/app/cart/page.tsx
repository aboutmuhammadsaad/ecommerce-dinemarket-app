'use client'
import React,{useContext} from 'react';
import EmptyCart from '@/components/EmptyCart';
import NotEmptyCart from '@/components/NotEmptyCart';
import {CreateArrayContext} from '@/components/SizeQuantityBox'
 
function CartPage() {
  const arr=useContext(CreateArrayContext) 
  console.log( arr, "<---- comparision")

  return (
    <div className=" min-h-screen w-[80%] mx-auto py-16 px-10">
      <div className='font-bold text-[1.5rem]'>Shopping Cart</div>
      {arr.length === 0 ? (<EmptyCart />) : (<NotEmptyCart />) }
    </div>
  )
}

export default CartPage
