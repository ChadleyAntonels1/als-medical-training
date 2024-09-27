import { getCoursesFa, getCoursesHBC } from '@/lib/data';
import { Link } from 'lucide-react'
import React from 'react'
import CourseCard from '../components/courseCard';
import CourseHBCCard from '../components/courseHBCCard';

const Courses = async () => {

  const coursesFa = await getCoursesFa();
  const coursesHBC = await getCoursesHBC();


  return (
    <div className='my-10 lg:my-20'>
        <h1 className='text-[20px] md:text-[24px] font-quattrocento-regular font-semibold text-center mb-10'>
          Courses
        </h1>
      <div className=' font-medium  my-10'>
      <div className=' bg-white/70 ring-2 rounded-sm ring-white flex flex-col text-center justify-center items-center mx-10 sm:mx-12 md:mx-14 lg:mx-40'>
        <p className='text-[12px] md:text-[14px] font-quattrocento-sans-regular font-medium p-16'>
        we offer comprehensive courses in First Aid and Home-Based Care. 
        Our programs are designed to equip you with essential skills to provide effective care and attend to patients. 
        Join us to gain the knowledge and confidence needed to ensure the safety and well-being of patients. </p>
      </div>
      </div>

      <div className='mb-10'>
        <h1 className='flex justify-center items-center font-quattrocento-regular font-semibold mb-10 text-[20px] md:text-[24px]'>
          First Aid
        </h1>

        <div className='grid grid-flow-row grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-40' >
          {coursesFa.map((courseFa) => (
            <div className=' grid col-span-2 lg:col-span-1' key={courseFa.slug} >
              <CourseCard coursesFa={courseFa} />
            </div>
          ))}
        </div>
      </div>

        <div className='mb-10'>
          <h1 className='flex justify-center items-center font-quattrocento-regular font-semibold mb-10 text-[20px] md:text-[24px]'>
            Home Based Care
          </h1>
              
          <div className='grid grid-flow-row grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-40' >
            {coursesHBC.map((courseHBC) => (
              <div className=' grid col-span-2 lg:col-span-1' key={courseHBC.slug} >
                <CourseHBCCard coursesHBC={courseHBC} />
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}

export default Courses