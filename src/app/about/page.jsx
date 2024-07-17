import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'


const About = () => {
  return (
    <div className='my-10 lg:my-20'>
        <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
            <div className='flex justify-center mb-10'>
                <h1>About</h1>
            </div>
            <div className='grid grid-cols-2 '>
                <div className='grid col-span-2 lg:col-span-1 px-4'>
                    <div className='text-center lg:text-left text-[16px] md:text-[20px] mb-4'>
                        About Us
                    </div>
                    <div className=''>
                        <p className='text-[12px] md:text-[14px] mb-6 text-center lg:text-left'>
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
            <div className=' grid items-center col-span-2 lg:col-span-1 px-4'>
                <div className='flex flex-col justify-center items-center lg:items-start '>
                        <h1 className='text-[16px] md:text-[20px] mb-4'>Vision</h1>
                        <p className='text-[12px] md:text-[14px] mb-6 text-center lg:text-left'>
                        Our vision is to revolutionize home-based care by empowering every caregiver with the expertise to respond confidently to emergencies and provide exceptional support. We aspire to build a future where homes are havens of health and safety, and where our innovative training programs inspire a new standard of excellence in personal care.
                        </p>
                </div>
            </div>
            <div className=' grid col-span-2 lg:col-span-1 px-4'>
                <div className='flex flex-col justify-center items-center lg:items-start'>
                        <h1 className='text-[16px] md:text-[20px] mb-4'>Mission</h1>
                        <p className='text-[12px] md:text-[14px] mb-6 text-center lg:text-left'>
                        Our mission is to empower individuals with the knowledge and skills necessary to provide exceptional first aid and home-based care. We are dedicated to promoting safety, health, and excellence through comprehensive training programs, ensuring every caregiver and healthcare professional can deliver the highest standard of care in public and home setting 
                        </p>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
            <div className='grid col-span-2 lg:col-span-1'>
                <h1 className='lg:hidden text-center text-[16px] md:text-[20px] mb-4'>
                    About Amy
                </h1>
                        
                <div className='flex justify-center items-center mb-6'>
                    image
                 </div>
            </div>

            <div className='grid col-span-2 lg:col-span-1 px-4'>
                <div className=''>
                    <div className=''>
                        <h1 className='hidden lg:flex text-[16px] md:text-[20px] mb-4'>
                            About Amy
                        </h1>
                    </div>
                    <div>
                        <p className=' text-[12px] md:text-[14px] mb-6 text-center lg:text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Porro, blanditiis harum ipsa nemo tempora eum ipsum a natus animi
                            velit cum deleniti ex quasi vero distinctio placeat similique reprehenderit aliquam.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 text-[12px] md:text-[14px]'>
            <div className='flex justify-center '>
                FAQ
            </div>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className='text-[12px] md:text-[14px]'>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className='text-[12px] md:text-[14px]'>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
             <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                 <AccordionContent className='text-[12px] md:text-[14px]'>
                  Yes. It adheres to the WAI-ARIA design pattern.
                 </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
             <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                 <AccordionContent className='text-[12px] md:text-[14px]'>
                  Yes. It adheres to the WAI-ARIA design pattern.
                 </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
             <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                 <AccordionContent className='text-[12px] md:text-[14px]'>
                  Yes. It adheres to the WAI-ARIA design pattern.
                 </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default About
