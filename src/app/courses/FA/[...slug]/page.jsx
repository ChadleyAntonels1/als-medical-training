import { getCourseFa, getCourseHBC } from '@/lib/data';
import Link from 'next/link';
import React from 'react'



  


const singlePostPageFa = async ({params}) => {
    const {slug} = params;
    const coursesFa = await getCourseFa(slug);

    

  return (
    <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 mt-10 mb-10'>
        <div className='flex justify-center mb-10' key={coursesFa.course}>
            {coursesFa.course}
        </div>

        <div className='flex flex-col justify-start mb-5'>
           <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2 ' >Course Description</h1>
           <p className='text-[12px] lg:text-[14px]' key={coursesFa.description}>{coursesFa.description}</p> 
        </div>

        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>What you'll Learn</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesFa.lesson}>{coursesFa.lesson}</p>
        </div>

        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>Duration</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesFa.duration}>{coursesFa.duration}</p>
        </div>
        
        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>Certification</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesFa.certification}>{coursesFa.certification}</p>
        </div>

        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>Prerequisites</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesFa.prerequisite}>{coursesFa.prerequisite}</p>
        </div>
        
        <Link href='/contact'> 
           <button className='bg-slate-400 px-3 py-2 rounded-lg text-[12px] lg:text-[14px]'>
            Get Quote
           </button>
        </Link>

    </div>
  )
}

export default singlePostPageFa