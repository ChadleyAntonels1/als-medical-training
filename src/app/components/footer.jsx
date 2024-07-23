import { Facebook, Phone  } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div  className=" h-full flex items-center justify-between px-5 lg:px-8 xl:px-14 text-md border-t text-white"> 
        <div className=' '>
          <div className='text-[20px] pt-5'>
            <Image src='/alslogo.png' width={150} height={50} alt="ALS Medical"/>
          </div>
          <div className='text-[10px] py-4'>© 2024 ALS Medical</div>

        </div>
         <div className=' flex gap-4 mt-2'>
          <div>
            <button>
              <a target='_blank' href="">
               <Facebook className='w-6 h-6'/>
              </a>
               </button>
          </div>
          <div>
            <button>
              <a target='_blank' href="">
               <Phone  className= 'ring-white ring-1 rounded-3xl p-[2px] w-6 h-6'/>
              </a>
               </button>
          </div>
         </div>
    
    </div>
  )
}

export default Footer