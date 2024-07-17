import React from 'react'
import Link from 'next/link'

const CourseHBCCard = ({coursesHBC}) => {
  return (
        <div>
            <div className='flex flex-col justify-center items-center mb-5'>
              <div className=''>
                <div>
                  image
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