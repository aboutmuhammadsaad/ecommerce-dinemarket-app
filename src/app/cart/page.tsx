'use client'
import React,{useContext} from 'react';
import EmptyCart from '@/components/EmptyCart';
import NotEmptyCart from '@/components/NotEmptyCart';
import { useAppSelector } from '@/utils/constants';
 
function CartPage() {
  // const arr=useContext(CreateArrayContext) 
  // console.log( arr)
  const valuesArr =useAppSelector((state:any)=> state.productarr)
  // const {valuesArr}=useContext(ArrContext);
  console.log(valuesArr+"from cART")

  return (
    <div className=" min-h-screen w-[80%] mx-auto py-16 md:px-10 ">
      <div className='font-bold text-[1.5rem]'>Shopping Cart</div>
      
      {valuesArr.length===0 ? (<EmptyCart />) : (<NotEmptyCart />) }
      {/* <NotEmptyCart /> */}
    </div>
  )
}

export default CartPage
