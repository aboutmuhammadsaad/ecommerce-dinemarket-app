import {client, urlFor} from "@/lib/sanity";
import Image from "next/image";
import { simpleProduct } from "@/lib/interface";


async function getData(slug:string){
  const query = `
  *[_type=='product'&& slug.current=="${slug}"] {
    name,
    price,
    category,  
    "currentSlug":slug.current,
    productImage,
  }`;
  
  const data= await client.fetch(query);
  return data
}

async function Productpage({params}:{params: {slug: string}}) {
  const data:simpleProduct = await getData(params.slug);
  console.log(data);
  return (
    <div>
      {params.slug}
      <div>{data.name}</div>
      <div>{data.price}</div>
    </div>
  )
}

export default Productpage
