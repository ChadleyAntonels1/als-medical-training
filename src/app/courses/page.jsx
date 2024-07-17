import React from 'react'

const Courses = () => {
  return (
    <div className='my-10 lg:my-20'>
      <div className=' flex flex-col text-center justify-center items-center mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
        <h1 className='mb-10'>
          Courses
        </h1>
        <p className='text-[12px] md:text-[14px] mb-10'>
        we offer comprehensive courses in First Aid and Home-Based Care. 
        Our programs are designed to equip you with essential skills to provide effective care and attend to patients. 
        Join us to gain the knowledge and confidence needed to ensure the safety and well-being of patients. </p>
      </div>

      <div>
        <h1 className='flex justify-center items-center mb-10 text-[16px] md:text-[20px]'>
          First Aid
        </h1>
        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
          <div className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5'>
              <div className=''>
                <div>
                  image
                </div>
              </div>
              <div className=''>
                <h1 className='my-5'>
                  First Aid Level 1
                </h1>
              </div>
              <div >
                <button className=' bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
            </div>
          </div>

          <div  className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5'>
            <div className='mb-'>
                image
              </div>
              <div className=''>
                <h1 className='my-5'>
                  First Aid Level 2
                </h1>
              </div>
              <div className=''>
                <button className='bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
              </div>
            </div>

            <div  className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5'>
            <div className=''>
                image
              </div>
              <div className=''>
                <h1 className='my-5'>
                  First Aid Level 3
                </h1>
              </div>
              <div className=''>
                <button className='bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
              </div>
            </div>

            <div  className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5 '>
            <div className=''>
                image
              </div>
              <div className=''>
                <h1 className='my-5'>
                CPR Family and Friends
                </h1>
              </div>
              <div className=''>
                <button className='bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
              </div>
            </div>
        </div>
      </div>

      <div>
        <h1 className='flex justify-center items-center my-10 text-[16px] md:text-[20px]'>
          Home Based Care
        </h1>
        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
          <div className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5'>
              <div className=''>
                <div>
                  image
                </div>
              </div>
              <div className=''>
                <h1 className='my-5'>
                  Home Based Care Level 1
                </h1>
              </div>
              <div >
                <button className=' bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
            </div>
          </div>

          <div  className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5'>
            <div className='mb-'>
                image
              </div>
              <div className=''>
                <h1 className='my-5'>
                  Home Based Care Level 2
                </h1>
              </div>
              <div className=''>
                <button className='bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
              </div>
            </div>

            <div  className=' grid col-span-2 lg:col-span-1'>
            <div className='flex flex-col justify-center items-center mb-5'>
            <div className=''>
                image
              </div>
              <div className=''>
                <h1 className='my-5'>
                  Home Based Care Level 3
                </h1>
              </div>
              <div className=''>
                <button className='bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                  View
                </button>
              </div>
              </div>
            </div>
            
          </div>
        </div>

    </div>
  )
}

export default Courses