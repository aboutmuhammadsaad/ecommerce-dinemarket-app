'useClient'
import React, { useState } from 'react'
import {arr} from './SizeQuantityBox';
import { Card } from './ui/card';
import Image from 'next/image';
import datato from '@/app/product/[slug]/page'

function NotEmptyCart() {
  // console.log(arr);
  console.log(datato)
  return (
    <div>
      Not empty cart
      <Card>
          <div className='flex justify-between items-center gap-5'>
            <div>
              <Image
              src={'/images/product-1.png'}
              alt='Image'
              width={150}
              height={200}
              className='h-[180px]'
              />
            </div>
            <div></div>
          </div>
        </Card> 
      {/* {arr.map((obj:any , idx:any)=>(
        // <ul key={idx}>
        //   <li>{obj.selectedSize}</li>
        //   <li>{obj.pslug}</li>
        //   <li>{obj.selectedcount}</li>
        // </ul>
               
      ))
      } */}
    </div>
  )
}

export default NotEmptyCart
