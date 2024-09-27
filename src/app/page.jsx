import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className=' text-center lg:text-start my-10 '>
      {/* landing hero */}
        {/* <div className=' absolute lg:grid col-span-2 lg:col-span-1 '>
            <div className=' blur-[2px] flex justify-center items-center'>
            <Image src='/FA.jpg' width={2500} height={250} alt="image" />
            </div>
        </div> */}
        <div className='bg-white/70 ring-2 rounded-sm ring-white relative justify grid grid-cols-2 mb-20 mx-12 md:mx-14 lg:mx-40 '>
          <div className=' grid col-span-2 lg:col-span-1'>
            <div className=' flex flex-col justify-center items-center px-6'>
                <p className='text-center text-[12px] md:text-[14px] lg:text-[16px] max-w-[500px] font-quattrocento-sans-regular py-16 '>
                Welcome to ALS MEdical Training, where we redefine the standard of home-based care and first aid services. 
                Our company was born out of a passion for delivering care that feels personal, compassionate, and above all, empowering.
                </p>
            </div>
          </div>

          <div className='hidden lg:grid col-span-2 lg:col-span-1 '>
            <div className=' flex justify-end items-center '>
            <Image src='/FA.jpg' width={500} height={250} alt="image" />
            </div>
          </div>
        </div>

      {/* courses */}
      <div className=' relative font-medium mx-12 md:mx-14 lg:mx-40'>
      <h1 className=' text-[20px] md:text-[24px] font-quattrocento-regular font-semibold text-center mb-10'>
              Courses we offer
            </h1>
        <div className='  grid grid-cols-3 gap-10'>
          <div className=' grid col-span-3 justify-center lg:justify-between items-center lg:col-span-1'>
            <div className='flex flex-col justify-center items-center bg-white/70 ring-2 ring-white p-3 rounded-sm '>
              <div className=' mb-4 '> 
                <Image src='/CPR.jpg' width={250} height={250} alt="image" />
              </div>
              <h1 className='font-quattrocento-regular text-[12px] md:text-[16px] lg:text-[18px]'>
                CPR
              </h1>
            </div>
          </div>

          <div className=' grid col-span-3 justify-center items-center lg:col-span-1'>
            <div className='flex flex-col justify-center items-center bg-white/70 ring-2 ring-white p-3 rounded-sm '>
              <div className=' mb-4 '> 
                <Image src='/FA.jpg' width={250} height={250} alt="image" />
              </div>
              <h1 className='font-quattrocento-regular text-[12px] md:text-[16px] lg:text-[18px]'>
                First Aid
              </h1>
            </div>
          </div>

          <div className='grid col-span-3 justify-end items-center lg:col-span-1'>
            <div className='flex flex-col justify-center items-center bg-white/70 ring-2 ring-white p-3 rounded-sm '>
              <div className=' mb-4 '> 
                <Image src='/hbc1.jpg' width={250} height={250} alt="image" />
              </div>
              <h1 className='font-quattrocento-regular text-[12px] md:text-[16px] lg:text-[18px]'>
                Homebased Care
              </h1>
            </div>
          </div>

          <div className=' grid col-span-3 justify-center items-center mb-20'>
            <button className=' bg-rose-300 ring-2 ring-white px-3 py-1 rounded-lg font-quattrocento-sans-regular font-semibold text-[14px] md:text-[16px]'>
              <Link href='/courses' > Course</Link>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className=' bg-slate-400 h-[200px] flex justify-center items-center'>
        <div className='flex justify-center items-center my-20'>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </div> */}


    </div>
  )
}

export default Home