import { getCourseHBC } from '@/lib/data';
import Link from 'next/link';
import React from 'react'

const singlePostPageHBC = async ({params}) => {
    const {slug} = params;

    const coursesHBC = await getCourseHBC(slug);
    

  return (
    <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 mt-10 mb-10'>
        <div className='flex justify-center mb-10' key={coursesHBC.course}>
            {coursesHBC.course}
        </div>
        
        <div className='flex flex-col justify-start mb-5'>
           <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2 ' >Course Description</h1>
           <p className='text-[12px] lg:text-[14px]' key={coursesHBC.description}>{coursesHBC.description}</p> 
        </div>

        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>What you`&apos;`ll Learn</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesHBC.lesson}>{coursesHBC.lesson}</p>
        </div>

        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>Duration</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesHBC.duration}>{coursesHBC.duration}</p>
        </div>
        
        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>Certification</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesHBC.certification}>{coursesHBC.certification}</p>
        </div>

        <div className='flex flex-col justify-start mb-5'>
            <h1 className='text-[14px] lg:text-[16px] font-semibold mb-2'>Prerequisites</h1>
            <p className='text-[12px] lg:text-[14px]'  key={coursesHBC.prerequisite}>{coursesHBC.prerequisite}</p>
        </div>

        <Link href='/contact'> 
           <button className='shadow-[inset_0px_0px_3px_3px] shadow-rose-200/80 bg-rose-300 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
            Get Quote
           </button>
        </Link>

    </div>
  )
}

export default singlePostPageHBC