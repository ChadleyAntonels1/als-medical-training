import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CourseHBCCard = ({coursesHBC}) => {
  return (
        <div>
            <div className='flex flex-col justify-center items-center mb-5'>
              <div className=''>
                <div>
                <Image src={`/${coursesHBC.url}`} width={250} height={250} alt="image" />
                </div>
              </div>
              <div className=''>
                <h1 className='my-5'>
                    {coursesHBC.course}
                </h1>
              </div>
              <div >
              <Link href={`/courses/HBC/${coursesHBC.slug}`}>
                    <button className=' bg-slate-600 px-3 py-1 rounded-lg text-[12px] md:text-[14px]'>
                     View
                    </button>
                </Link>
              </div>
            </div>

    </div>
  )
}

export default CourseHBCCard