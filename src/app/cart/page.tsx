'use client'
import React from 'react';
import EmptyCart from '@/components/EmptyCart';
import NotEmptyCart from '@/components/NotEmptyCart';

 
// let content:any;
// if (info.selectedSize=="") {
//   content = <EmptyCart />;
// } else {
//   content = <NotEmptyCart />;
// }

function CartPage() {
  return (
    <div className=" min-h-screen w-[80%] mx-auto">
      {/* {info.selectedSize===null ? (<EmptyCart />) : (<NotEmptyCart />) } */}
      <NotEmptyCart />
    </div>
  )
}

export default CartPage
