import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CourseHBCCard = ({coursesHBC}) => {
  return (
        <div className='flex justify-center items-center font-medium'>
            <div className='flex flex-col justify-center items-center shadow-lg shadow-rose-300 bg-white/70 ring-2 ring-white p-3 rounded-sm mb-10'>
              <div className=''>
                <div>
                <Image src={`/${coursesHBC.url}`} width={250} height={250} alt="image" />
                </div>
              </div>
              <div className=''>
                <h1 className='my-5 font-quattrocento-sans-regular text-[12px] md:text-[16px] lg:text-[18px]'>
                    {coursesHBC.course}
                </h1>
              </div>
              <div >
              <Link href={`/courses/HBC/${coursesHBC.slug}`}>
                    <button className='bg-rose-300 ring-2 ring-white px-3 py-1 rounded-lg font-quattrocento-sans-regular font-medium text-[14px] md:text-[16px]'>
                     View
                    </button>
                </Link>
              </div>
            </div>

    </div>
  )
}

export default CourseHBCCard