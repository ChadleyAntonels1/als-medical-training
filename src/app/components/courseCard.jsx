import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseCard = ({coursesFa}) => {
  return (
    <div className='flex justify-center items-center font-medium'>
            <div className='flex flex-col justify-center items-center shadow-lg shadow-rose-300 bg-white ring-2 ring-white p-3 rounded-sm mb-10'>
              <div className=''>
                <div className=" ">
                <Image src={`/${coursesFa.url}`} width={250} height={250} alt="image" className=" "/>
                </div>
              </div>
              <div className=''>
                <h1 className='my-5'>
                    {coursesFa.course}
                </h1>
              </div>
              <div >
              <Link href={`/courses/FA/${coursesFa.slug}`}>
                    <button className='shadow-[inset_0px_0px_3px_3px] shadow-rose-200/80 bg-rose-300 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                     View
                    </button>
                </Link>
              </div>
            </div>

    </div>
  )
}

export default CourseCard