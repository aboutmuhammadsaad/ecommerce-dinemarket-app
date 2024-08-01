
import { Linkedin,Facebook,Twitter }  from 'lucide-react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='w-[80%] mx-auto pt-16 grid grid-cols-1 md:grid-cols-[12rem,1fr,1fr,1fr] lg:grid-cols-[22rem,1fr,1fr,1fr] gap-5'>
        <div>
            <Image
                src={"/images/Logo.png"}
                alt='Logo'
                width={170}
                height={170} 
                className='cursor-pointer'
            />
            <p className='text-justify py-10 md:pe-4 lg:pe-16'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            <div className='flex items-center gap-5'>
                <div className='flex justify-center items-center bg-slate-100 dark:bg-slate-950  w-10 h-10 rounded cursor-pointer'> 
                    {/* <Linkedin /> */}
                    <Twitter size={23} />
                </div>
                <div className='flex justify-center items-center bg-slate-100 dark:bg-slate-950 w-10 h-10 rounded cursor-pointer'>
                    <Facebook size={23}/>
                </div>
                <div className='flex justify-center items-center bg-slate-100  dark:bg-slate-950 w-10 h-10 rounded cursor-pointer'>
                    <Linkedin size={23} />    
                </div>    
            </div> 
        </div>
        <div className=''>
            <h2 className='font-bold pb-3 text-xl  cursor-pointer'>Company</h2>
            <p className='leading-9 font-light cursor-pointer'>About</p>
            <p className='leading-9 font-light cursor-pointer'>Terms of Use</p>
            <p className='leading-9 font-light cursor-pointer'>Privacy Policy</p>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>How it Works</p>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>Contact Us</p>
        </div>
        <div className=''>
            <h2 className='font-bold pb-3 text-xl cursor-pointer'>Support</h2>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>Support Carrer</p>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>24h Service</p>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>Quick Chat</p>
        </div>
        <div className=''>
            <h2 className='font-bold pb-3 text-xl cursor-pointer'>Contact</h2>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>Whatsapp</p>
            <p className='leading-9 font-light tracking-wider cursor-pointer'>Support 24h</p>
        </div>
    </div>
  )
}

export default Footer
