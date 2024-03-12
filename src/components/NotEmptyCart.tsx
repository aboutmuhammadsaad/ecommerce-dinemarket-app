'useClient'
import React, { useState } from 'react'
import {arr} from './SizeQuantityBox';
import { Card } from './ui/card';
import Image from 'next/image';
import {datato} from '@/app/product/[slug]/page'

function NotEmptyCart() {
  // console.log(datato)
  return (
    <div className='flex flex-col gap-6'>
      {arr.map((obj:any , idx:any)=>(
        <Card key={idx}>
          <div className='flex justify-between items-center gap-5'>
            <div className='flex flex-col'>
              <Image
              src={datato.productImage}
              alt='Image'
              width={150}
              height={200}
              className='h-[180px]'
              />
              <div>{obj.selectedSize}</div>
              <div>{obj.selectedcount}</div>
            </div>
            <div></div>
          </div>
        </Card>
               
      ))
      }
    </div>
  )
}

export default NotEmptyCart
