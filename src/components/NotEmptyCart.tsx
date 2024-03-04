import React from 'react'
import {arr} from './SizeQuantityBox';

function NotEmptyCart() {
  console.log(arr);
  return (
    <div>
      Not empty cart
      {arr.map((obj:any , idx:any)=>(
        <li key={idx}>
          {obj.selectedSize}
        </li>        
      ))
      }
    </div>
  )
}

export default NotEmptyCart
