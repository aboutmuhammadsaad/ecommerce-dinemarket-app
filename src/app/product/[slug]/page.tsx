
import SizeQuantityBox from "@/components/SizeQuantityBox";
import {client, urlFor} from "@/lib/sanity";
import Image from "next/image";
import { simpleProduct } from "@/lib/interface";

async function getData(slug:string){
  const query = `
  *[_type=='product'&& slug.current=="${slug}"] {
    name,
    price,
    Type,  
    productdetails,
    productcare,
    "currentSlug":slug.current,
    productImage,
  }[0]`;
  
  const data= await client.fetch(query);
  return data;
}

async function Productpage({params}:{params: {slug: string}}) {
  const data:simpleProduct = await getData(params.slug);
  // console.log(data);
  
  return (
    <div className="  ">
      <div className="w-[80%] mx-auto py-16">
        <div className="flex flex-col justify-between md:flex-row py-4 ">
          <div className="flex md:w-[70%] gap-8 pr-4">
            <div className="flex flex-col gap-4">
              <Image
                src={urlFor(data.productImage).url()}
                alt='Product Image'
                width={150}
                height={150}
              />
              {/* <Image
                src={"/images/product-2-1.png"}
                alt='Product Image'
                width={150}
                height={150}
              />
              <Image
                src={"/images/product-2-2.png"}
                alt='Product Image'
                width={150}
                height={150}
              />
              <Image
                src={"/images/product-2-3.png"}
                alt='Product Image'
                width={150}
                height={150}
              /> */}
            </div>
            <div>
              <Image
                src={urlFor(data.productImage).url()}
                alt='Product Image'
                width={900}
                height={900}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 py-4 md:w-[35%] mt-4">
            {/* name */}
            <div>
              <div className=" text-[1.625rem] leading-8 tracking-wider ">{data.name}</div>
              <div className="font-semibold text-[1.3rem] opacity-30">{data.Type}</div>
            </div>
            {/* size */}
            <SizeQuantityBox propslug={{prodName:data.name, prodType:data.Type, prodPrice: data.price, prodImage:data.productImage} }/>
          </div>
        </div>        
        <div className=" py-10">
          <div className="w-[90%] mx-auto">
            <div className="border-b border-black dark:border-white relative flex items-center pb-3">
              <p className="text-[#f6f7f9] dark:text-[#666] text-6xl font-extrabold md:text-9xl">Overview</p>
              <p className=" absolute z-10 font-bold tracking-wider md:text-2xl ">Product Information</p>
            </div>
            <div className="flex flex-col justify-between py-8 md:flex-row">
              <div className="w-full md:w-1/3">
                <p className="flex-1 font-bold tracking-wider text-[#666] ">PRODUCT DETAILS</p>
              </div>
              <div className="flex-1 font-light text-justify tracking-wider leading-[26px] md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="flex flex-col justify-between md:flex-row">
              <div className="w-full md:w-1/3">
                <p className="flex-1 font-bold tracking-wider text-[#666]">PRODUCT CARE</p>
              </div>
              <div className="flex-1 font-light text-justify tracking-wider leading-[26px] md:w-2/3">
                <ul className="list-disc">
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Productpage
