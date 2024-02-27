import {Card, CardContent} from '@/components/ui/card';
import {client, urlFor} from "@/lib/sanity";
import Image from "next/image";
import Link from 'next/link';
import { simpleProductCard } from '@/lib/interface';

async function getData(){
    const query = `
    *[_type=='product' && category=="Male"] | order(_createdAt asc){
      name,
      price,
      category,  
      Type,
      "currentSlug":slug.current,
      productImage,
    }`;
    
    const data= await client.fetch(query);
    return data
}
  

async function MaleProductsPage() {
    const data:simpleProductCard[] = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-16 pl-32 pr-8 pt-5">
       {data.map((post:any , idx:any)=>(
        <Card key={idx} className='border-none rounded-s-sm'>
          <Link href={`/product/${post.currentSlug}`}>
          <Image
            src={urlFor(post.productImage).url()}
            alt='Product Image'
            width={300}
            height={300}
          />
          <CardContent className='p-0'>
            <div className='font-medium pt-3 pb-2 text-lg'>{post.name}</div>
            <div className='font-semibold text-gray-500 '>{post.Type}</div>
            <div className='pt-2 font-semibold text-xl'>{post.price}</div>
          </CardContent>
          </Link>
        </Card>
      ))
      }
    </div>
  )
}

export default MaleProductsPage
