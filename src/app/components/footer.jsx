import { Facebook, Phone  } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div  className=" h-full flex items-center justify-between px-5 lg:px-8 xl:px-14 text-md border-t bg-white text-white"> 
        <div className='flex justify-center items-center my-5'>
          <div className='text-[20px] pt-5'>
            <Image src='/alslogo.png' width={150} height={50} alt="ALS Medical"/>
          </div>
          <div className='text-[10px] py-4'>© 2024 ALS Medical</div>

        </div>
         <div className=' flex gap-4 mt-2'>
          <div>
            <button>
              <a target='_blank' href="https://www.facebook.com/alsmedicaltraining/">
               <Facebook className='ring-rose-200 text-white bg-rose-200 rounded-3xl p-[3px] w-7 h-7'/>
              </a>
               </button>
          </div>
          <div>
            <button>
              <Link href="/contact">
               <Phone  className= 'ring-rose-200 text-white bg-rose-200 ring-1 rounded-3xl p-[4px] w-7 h-7'/>
              </Link>
               </button>
          </div>
         </div>
    
    </div>
  )
}

export default Footer