"useClient";
import React, { useState, useContext } from "react";
// import {arr} from './SizeQuantityBox';
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useAppSelector } from "@/utils/constants";

// function NotEmptyCart_() {
//   // const { valuesArr} = useContext(ArrContext)
//   const valuesArr =useAppSelector((state:any)=> state.productarr)
//   const [count, setCount] = useState();
//   function dncreaseCount() {
//     if (count === 1) {
//       return;
//     }
//     setCount(count - 1);
//   }
//   function increaseCount() {
//     setCount(count + 1);
//   }
//   // console.log(valuesArr.name ,"FROM CART NOT EMPTY");
//   console.log(`${valuesArr} new item added`, valuesArr[0].arr.name);
 
//   return (
//     <div className=" w-full py-8 flex flex-col md:flex-row gap-x-3 ">
//       <div className="w-[70%] flex flex-col gap-4 ">
//         {valuesArr.map((valueArr:any,idx:number )=>(
//           <Card key={valueArr.id}>
//             <div className="flex flex-col md:flex-row">
//               <div className="flex flex-col md:flex-row w-[100%] ">
//               <Image
//                 src={""}
//                 alt="Image"
//                 width={150}
//                 height={200}
//                 className="h-[100%] w-[100%] md:w-[25%]"
//               />
//               <div className="w-[100%] md:w-[75%] text-center md:text-start flex flex-col gap-5 p-4">
//                 <div className=" w-full flex flex-col-reverse gap-2 md:gap-0 md:flex-row md:justify-between ">
//                   <p className="text-xl text-[#212121] font-light">
//                     {/* Brushed Raglan Sweatshirt */}
//                     {valuesArr[0].arr.name}
                    
//                   </p>
//                   <Trash2  className="my-0 mx-auto md:mx-0"/>
//                 </div>
//                 <div className="text-base font-semibold leading-4 text-[#666]">
//                   Dress
//                 </div>
//                 <div className="text-base font-semibold leading-5 text-[#212121]">
//                   Delivery Estimation
//                 </div>
//                 <div className="text-base font-semibold leading-5 text-[#ffc700]">
//                   5 Working Days
//                 </div>
//                 <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between">
//                   <div>$ {195 * count}</div>
//                   <div>
//                     <div className="flex justify-center items-center gap-2">
//                       <Button
//                         className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white"
//                         onClick={dncreaseCount}
//                       >
//                         -
//                       </Button>
//                       <div>{count}</div>
//                       <Button
//                         className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white"
//                         onClick={increaseCount}
//                       >
//                         +
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               </div>  
              
//             </div>
//           </Card>               
//           ))
//         }
        
//       </div>
//       <div className="w-[30%] md:w-[30%] bg-[#fbfcff] p-8 flex flex-col gap-5">
//                 <p className="font-bold text-xl">Order Summary</p>
//                 <div className="flex justify-between text-lg">
//                   <p>Quantity</p>
//                   <p>{count} Product</p>
//                 </div>
//                 <div className="flex justify-between text-lg">
//                   <p>Sub Total</p>
//                   <p>$ {195 * count}</p>
//                 </div>
//                 <Button>Proceed to Checkout</Button>
//       </div>
//     </div>
//   );
// }
function NotEmptyCart() {
  const valuesArr = useAppSelector((state: any) => state.productarr);
  
  // Manage item quantities individually
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  function decreaseCount(id: string) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) - 1),
    }));
  }

  function increaseCount(id: string) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  }

  console.log(valuesArr)
  return (
    <div className="w-full py-8 flex flex-col md:flex-row gap-x-3">
      <div className="w-[70%] flex flex-col gap-4">
        {valuesArr.map((valueArr: any, idx: number) => (
          <Card key={valueArr.id}>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col md:flex-row w-[100%]">
                <Image
                  src={valueArr.productImage}
                  alt="Product Image"
                  width={150}
                  height={200}
                  className="h-[100%] w-[100%] md:w-[25%]"
                />
                <div className="w-[100%] md:w-[75%] text-center md:text-start flex flex-col gap-5 p-4">
                  <div className="w-full flex flex-col-reverse gap-2 md:gap-0 md:flex-row md:justify-between">
                    <p className="text-xl text-[#212121] font-light">
                      {valueArr.name}
                    </p>
                    <Trash2 className="my-0 mx-auto md:mx-0" />
                  </div>
                  <div className="text-base font-semibold leading-4 text-[#666]">
                    {valueArr.type}
                  </div>
                  <div className="text-base font-semibold leading-5 text-[#212121]">
                    Delivery Estimation
                  </div>
                  <div className="text-base font-semibold leading-5 text-[#ffc700]">
                    5 Working Days
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between">
                    <div>$ {valueArr.price * (quantities[valueArr.id] || 1)}</div>
                    <div>
                      <div className="flex justify-center items-center gap-2">
                        <Button
                          className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white"
                          onClick={() => decreaseCount(valueArr.id)}
                        >
                          -
                        </Button>
                        <div>{quantities[valueArr.id] || 1}</div>
                        <Button
                          className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white"
                          onClick={() => increaseCount(valueArr.id)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="w-[30%] md:w-[30%] bg-[#fbfcff] p-8 flex flex-col gap-5">
        <p className="font-bold text-xl">Order Summary</p>
        <div className="flex justify-between text-lg">
          <p>Quantity</p>
          <p>{valuesArr.length} Products</p>
        </div>
        <div className="flex justify-between text-lg">
          <p>Sub Total</p>
          <p>
            $
            {valuesArr.reduce(
              (total: number, valueArr: any) =>
                total + valueArr.price * (quantities[valueArr.id] || 1),
              0
            )}
          </p>
        </div>
        <Button>Proceed to Checkout</Button>
      </div>
    </div>
  );
}

export default NotEmptyCart;
