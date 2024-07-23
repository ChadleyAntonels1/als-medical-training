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
      <div className='text-black bg-white font-medium w-full'>
        <div className=' relative justify grid grid-cols-2 mb-20 mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
          <div className=' grid col-span-2 lg:col-span-1'>
            <div className=' flex flex-col justify-start items-center'>
                <p className='text-[12px] lg:text-[14px] max-w-[500px] py-16'>
                At Medical Training's our specialized  courses in First Aid and Home-Based Care are designed to equip caregivers and First Aid staff with the knowledge and skills to provide high-quality care. 
                Through our training, you will learn essential first aid techniques and effective communication strategies, ensu that every individual receives the best possible care. 
                Join us in promoting safety, healthcare, and excellence in home-based care.
                </p>
            </div>
          </div>

          <div className='hidden lg:grid col-span-2 lg:col-span-1 '>
            <div className=' flex justify-end items-center'>
            <Image src='/FA.jpg' width={250} height={250} alt="image" />
            </div>
          </div>
        </div></div>

      {/* courses */}
      <div className='bg-rose-200 relative font-medium'>
      <h1 className='text-[16px] md:text-[18px] font-semibold text-center mb-10'>
              Courses we offer
            </h1>
        <div className=' grid grid-cols-3 gap-10'>
          <div className='grid col-span-3 justify-center items-center lg:col-span-1'>
            <div className='flex flex-col justify-center items-center bg-white ring-2 ring-white p-3 rounded-sm '>
              <div className=' mb-4 '> 
                <Image src='/CPR.jpg' width={250} height={250} alt="image" />
              </div>
              <h1 className=' '>
                CPR
              </h1>
            </div>
          </div>

          <div className='grid col-span-3 justify-center items-center lg:col-span-1'>
            <div className='flex flex-col justify-center items-center bg-white ring-2 ring-white p-3 rounded-sm '>
              <div className=' mb-4 '> 
                <Image src='/FA.jpg' width={250} height={250} alt="image" />
              </div>
              <h1 className=' '>
                First Aid
              </h1>
            </div>
          </div>

          <div className='grid col-span-3 justify-center items-center lg:col-span-1'>
            <div className='flex flex-col justify-center items-center bg-white ring-2 ring-white p-3 rounded-sm '>
              <div className=' mb-4 '> 
                <Image src='/hbc1.jpg' width={250} height={250} alt="image" />
              </div>
              <h1 className=' '>
                Homebased Care
              </h1>
            </div>
          </div>

          <div className=' grid col-span-3 justify-center items-center mb-20'>
            <button className='shadow-[inset_0px_0px_3px_3px] shadow-rose-200/80 bg-rose-300 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
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