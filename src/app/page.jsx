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
                <h1 className='text-[16px] md:text-[20px] mb-4'>
                  Title
                </h1>
              </div>
              <div className=''>
                <p className='text-[12px] md:text-[14px] mb-6'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quidem doloribus numquam. 
                  Debitis vero nesciunt illum dicta dolorum quidem aut nemo, soluta qui quam ex animi tempora 
                  harum autem sequi!
                </p>
              </div>
              <div className='mb-10'>
                <button className=' bg-slate-600 p-2 rounded-lg'>
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
          <button className=' bg-slate-500 p-2 rounded-lg'>
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