import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className=' my-10 lg:my-20'>
      {/* landing hero */}
        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
          <div className='grid col-span-2 lg:col-span-1'>
            <div className=' flex flex-col justify-start'>
              <div className=''>
                <p className='text-[12px] md:text-[14px] mb-6'>
                At Medical Training's our specialized  courses in First Aid and Home-Based Care are designed to equip caregivers and First Aid staff with the knowledge and skills to provide high-quality care. 
                Through our training, you will learn essential first aid techniques and effective communication strategies, ensuring that every individual receives the best possible care. 
                Join us in promoting safety, healthcare, and excellence in home-based care.
                </p>
              </div>
              <div className='mb-10'>
                <button className=' bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  <Link href="/about"> More</Link>
                </button>
              </div>
            </div>
          </div>

          <div className='grid col-span-2 lg:col-span-1'>
            <div className=' flex justify-center items-center'>
              image
            </div>
          </div>
        </div>

      {/* courses */}
      <div className=' grid grid-cols-3'>
        <div className='grid col-span-3 lg:col-span-1'>
          <div className='flex flex-col justify-center items-center bg-slate-400'>
            <div className='flex justify-center items-center ring h-20 w-20 mb-4'> 
              image
            </div>
            <h1>
              CPR
            </h1>
          </div>
        </div>

        <div className='grid col-span-3 lg:col-span-1'>
          <div className='flex flex-col justify-center items-center bg-slate-400'>
            <div className='flex justify-center items-center ring h-20 w-20 mb-4'> 
               image
            </div>
            <h1>
              First Aid
            </h1>
          </div>
        </div>

        <div className='grid col-span-3 lg:col-span-1'>
          <div className='flex flex-col justify-center items-center bg-slate-400'>
            <div className='flex justify-center items-center ring h-20 w-20 mb-4'> 
               image
            </div>
            <h1>
               Homebased Care
            </h1>
          </div>
        </div>

        <div className=' grid col-span-3 justify-center items-center mt-10 mb-20'>
          <button className=' bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
            <Link href='/courses' > Course</Link>
          </button>
        </div>
      </div>

      {/* courses */}
      <div className=' bg-slate-400 h-[200px] flex justify-center items-center'>
        <div className='flex justify-center items-center my-20'>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </div>


    </div>
  )
}

export default Home