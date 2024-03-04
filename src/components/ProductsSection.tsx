import Link from 'next/link';
import Image from 'next/image';
import { Card,CardContent } from './ui/card';

function ProductsSection() {
  return (
    <div className='w-[85%] md:w-[80%] mx-auto py-16'>
      <div className='text-center flex flex-col gap-4 mb-8'>
        <p className='text-xs font-bold text-blue-700 tracking-widest'>PRODUCTS</p>
        <p className=' text-3xl font-bold tracking-wide'>Check What We Have</p>
      </div>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div>
            <Card className='border-none bg-transparent rounded-s-sm hover:scale-110 ease-in duration-200'>
              <Link href="http://localhost:3000/product/brushed-raglan-sweatshirt">
                <Image
                src={"/images/product-1.png"}
                alt='image'
                width={380}
                height={400}
                />
                <CardContent className='p-0'>
                    <p className='tracking-wide font-semibold mt-2'>Brushed Raglan Sweatshirt</p>
                    <p className='text-xl tracking-wide font-semibold mt-2'>$195</p>
                </CardContent>
              </Link>  
            </Card>
        </div>
        <div>
        <Card className='border-none bg-transparent rounded-s-sm hover:scale-110 ease-in duration-200'>
          <Link href="http://localhost:3000/product/cameryn-sash-tie-dress">     
            <Image
              src={"/images/product-2.png"}
              alt='image'
              width={380}
              height={400}
            />
            <CardContent className='p-0'>
              <p className='tracking-wide font-semibold mt-2'>Cameryn Sash Tie Dress</p>
              <p className=' text-xl tracking-wide font-semibold mt-2'>$545</p>
            </CardContent>
          </Link>            
        </Card>
        </div>
        <div className=''>
            <Card className='border-none bg-transparent rounded-s-sm hover:scale-110 ease-in duration-200'>
              <Link href="http://localhost:3000/product/flex-sweatshirt">
                <Image
                src={"/images/product-3.png"}
                alt='image'
                width={380}
                height={400}
                />
                <CardContent className='p-0'>
                    <p className='tracking-wide font-semibold mt-2'>Flex Sweatshirt</p>
                    <p className=' text-xl tracking-wide font-semibold mt-2'>$175</p>
                </CardContent>
              </Link>  
            </Card>
        </div>

      </div>

    </div>
  )
}

export default ProductsSection
