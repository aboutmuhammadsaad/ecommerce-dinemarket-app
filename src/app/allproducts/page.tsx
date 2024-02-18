
import {client} from "@/lib/sanity";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

async function getData(){
  const query = `
  *[_type=='product'] | order(_createdAt desc){
    name,
    price,
    category,  
    "currentSlug":slug.current,
    productImage,
  }`;
  
  const data= await client.fetch(query);
  return data
}


async function Products() {
  const data = await getData();
  return (
    <div >
      Products
    </div>
  )
}

export default Products
