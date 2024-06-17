import React from 'react'

const About = () => {
  return (
    <div className='my-10 lg:my-20 '>
        <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 '>
            <div className='flex justify-center mb-10'>
                <h1>About</h1>
            </div>
            <div className='grid grid-cols-2'>
                <div className='grid col-span-2 lg:col-span-1'>
                    <div className='text-[16px] md:text-[20px] mb-4'>
                        About Us
                    </div>
                    <div className=''>
                        <p className='text-[12px] md:text-[14px] mb-6'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Doloribus eos voluptas officiis facilis veniam consectetur dignissimos cupiditate 
                            quidem unde itaque ab delectus nihil reiciendis architecto, ratione error. Aperiam, 
                            ex asperiores?
                        </p>
                    </div>

                </div>
                <div className='grid col-span-2 lg:col-span-1'>
                    <div className='flex justify-center items-center mb-6'>
                        image
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
            <div className=' grid col-span-2 lg:col-span-1'>
                <div className='flex flex-col mr-[100px]'>
                    <div className='text-[16px] md:text-[20px] mb-4'>
                        Vision
                    </div>
                    <div className=''>
                        <p className='text-[12px] md:text-[14px] mb-6'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Doloribus eos voluptas officiis facilis veniam consectetur dignissimos cupiditate 
                            quidem unde itaque ab delectus nihil reiciendis architecto, ratione error. Aperiam, 
                            ex asperiores?
                        </p>
                    </div>
                </div>
            </div>
            <div className=' grid col-span-2 lg:col-span-1'>
                <div className='flex flex-col mr-[100px]'>
                    <div className='text-[16px] md:text-[20px] mb-4'>
                        Mission
                    </div>
                    <div className=''>
                        <p className='text-[12px] md:text-[14px] mb-6'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Doloribus eos voluptas officiis facilis veniam consectetur dignissimos cupiditate 
                            quidem unde itaque ab delectus nihil reiciendis architecto, ratione error. Aperiam, 
                            ex asperiores?
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
            <div className='grid col-span-2 lg:col-span-1'>
                <div className=''>
                        <h1 className='lg:hidden text-center text-[16px] md:text-[20px] mb-4'>
                            About Amy
                        </h1>
                    <div className=''>
                        <div className='flex justify-center items-center mb-6'>
                            image
                        </div>

                    </div>
                </div>
            </div>

            <div className='grid col-span-2 lg:col-span-1'>
                <div className=''>
                    <div className=''>
                        <h1 className='hidden lg:flex text-[16px] md:text-[20px] mb-4'>
                            About Amy
                        </h1>
                    </div>
                    <div>
                        <p className='text-[12px] md:text-[14px] mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Porro, blanditiis harum ipsa nemo tempora eum ipsum a natus animi
                            velit cum deleniti ex quasi vero distinctio placeat similique reprehenderit aliquam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
