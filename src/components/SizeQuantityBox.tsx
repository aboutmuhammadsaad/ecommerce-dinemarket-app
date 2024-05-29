"use client";
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import toast, { Toaster } from 'react-hot-toast';

// Define the types for the product and cart item
interface Product {
  data: {
    name: string;
    Type: string;
    price: number;
  };
}

interface CartItem {
  id: number;
  name: string;
  type: string;
  price: number;
  selectedSize: string;
  selectedcount: number;
}

// Create a context for the cart array
interface CartContextType {
  arr: CartItem[];
  setArr: Dispatch<SetStateAction<CartItem[]>>;
}

// Provide a default value that matches the CartContextType
const defaultCartContext: CartContextType = {
  arr: [],
  setArr: () => {},
};

export const CreateArrayContext = createContext<CartContextType>(defaultCartContext);

interface SizeQuantityBoxProps {
  proslug: Product;
}

function SizeQuantityBox({ proslug }: SizeQuantityBoxProps) {
  const { arr, setArr } = useContext(CreateArrayContext);
  const [size, setSize] = useState<string>('');
  const [count, setCount] = useState<number>(1);

  function decreaseCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function increaseCount() {
    setCount(count + 1);
  }

  function handleAddToCart() {
    const newItem: CartItem = {
      id: arr.length,
      name: proslug.data.name,
      type: proslug.data.Type,
      price: proslug.data.price,
      selectedSize: size,
      selectedcount: count,
    };

    setArr([...arr, newItem]);
    toast.success(`${count} ${proslug.data.name} of size ${size} added to the Cart!`);
  }

  return (
    <div className="flex flex-col gap-10 py-4 md:w-[35%] mt-4">
      <div>
        <div className="font-bold text-[0.9rem] leading-4 tracking-wider">SELECT SIZE</div>
        <div className="flex gap-4 mt-4">
          {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
            <Button
              key={s}
              className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white"
              onClick={() => setSize(s)}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>Quantity:</div>
        <div className="flex justify-center items-center gap-2">
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={decreaseCount}>
            -
          </Button>
          <div>{count}</div>
          <Button className="rounded-full text-base border border-white bg-[#f1f1f1] text-black hover:border-black hover:bg-white" onClick={increaseCount}>
            +
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button className="gap-2 rounded-none bg-black" onClick={handleAddToCart}>
          <ShoppingCart className="h-5 font-bold" />
          Add to Cart
        </Button>
        <Toaster />
        <div className="font-bold text-2xl leading-8 tracking-widest text-[#212121]">{proslug.data.price}</div>
      </div>
    </div>
  );
}

interface AppProps {
  proslug: Product;
}

function App({ proslug }: AppProps) {
  const [arr, setArr] = useState<CartItem[]>([]);
  
  return (
    <CreateArrayContext.Provider value={{ arr, setArr }}>
      <SizeQuantityBox proslug={proslug} />
    </CreateArrayContext.Provider>
  );
}

export default App;
