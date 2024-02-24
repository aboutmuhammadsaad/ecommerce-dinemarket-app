
import { Linkedin }  from 'lucide-react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='w-4/5 mx-auto py-16 grid grid-cols-1 md:grid-cols-[22rem,1fr,1fr,1fr] gap-5'>
        <div>
            <Image
                src={"/images/logo.png"}
                alt='image'
                width={170}
                height={170} 
            />
            <p className='py-10 pe-16'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            <div className='flex items-center gap-5'>
                <div className='flex justify-center items-center bg-slate-100  w-10 h-10 rounded'> 
                    <Linkedin size={23}/>
                </div>
                <div className='flex justify-center items-center bg-slate-100  w-10 h-10 rounded'>
                    <Linkedin size={23}/>
                </div>
                <div className='flex justify-center items-center bg-slate-100  w-10 h-10 rounded'>
                    <Linkedin size={23} />    
                </div>    
            </div> 
        </div>
        <div className=''>
            <h2 className='font-bold pb-3 text-xl text-slate-900'>Company</h2>
            <p className='leading-9 text-slate-700'>About</p>
            <p className='leading-9 font-light'>Terms of Use</p>
            <p className='leading-9 font-light '>Privacy Policy</p>
            <p className='leading-9 font-light tracking-wider'>How it Works</p>
            <p className='leading-9 font-light tracking-wider'>Contact Us</p>
        </div>
        <div className=''>
            <h2 className='font-bold pb-3 text-xl'>Support</h2>
            <p className='leading-9 font-light tracking-wider'>Support Carrer</p>
            <p className='leading-9 font-light tracking-wider'>24h Service</p>
            <p className='leading-9 font-light tracking-wider'>Quick Chat</p>
        </div>
        <div className=''>
            <h2 className='font-bold pb-3 text-xl'>Contact</h2>
            <p className='leading-9 font-light tracking-wider'>Whatsapp</p>
            <p className='leading-9 font-light tracking-wider'>Support 24h</p>
        </div>
    </div>
  )
}

export default Footer
