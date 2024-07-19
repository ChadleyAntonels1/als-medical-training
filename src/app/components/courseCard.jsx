import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseCard = ({coursesFa}) => {
  return (
    <div>
            <div className='flex flex-col justify-center items-center mb-5'>
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
                    <button className=' bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                     View
                    </button>
                </Link>
              </div>
            </div>

    </div>
  )
}

export default CourseCard