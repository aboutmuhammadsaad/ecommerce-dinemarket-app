'use client'
import React,{useContext} from 'react';
import EmptyCart from '@/components/EmptyCart';
import NotEmptyCart from '@/components/NotEmptyCart';
import {CreateArrayContext} from '@/components/SizeQuantityBox'
 
function CartPage() {
  const arr=useContext(CreateArrayContext) 
  console.log( arr)

  return (
    <div className=" min-h-screen w-[80%] mx-auto py-16 md:px-10 ">
      <div className='font-bold text-[1.5rem]'>Shopping Cart</div>
      {/* {arr.arr.length===0 ? (<EmptyCart />) : (<NotEmptyCart />) } */}
      <NotEmptyCart />
    </div>
  )
}

export default CartPage
