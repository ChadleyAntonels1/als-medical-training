import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'


const About = () => {
  return (
    <div className='my-10 lg:my-20 font-medium'>
        <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 mb-10'>
            <div className='text-[16px] lg:text-[18px] font-semibold text-center mb-10'>
                <h1>About</h1>
            </div>
            <div className='  grid grid-cols-2 '>
                <div className='grid col-span-2 lg:col-span-1 px-4 mb-10'>
                    <div className='text-[16px] lg:text-[18px] font-semibold text-center mb-4'>
                        About Us
                    </div>
                    <div className=''>
                        <p className='text-[12px] lg:text-[14px] text-center lg:text-left'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Doloribus eos voluptas officiis facilis veniam consectetur dignissimos cupiditate 
                            quidem unde itaque ab delectus nihil reiciendis architecto, ratione error. Aperiam, 
                            ex asperiores?
                        </p>
                    </div>

                </div>
                <div className='grid col-span-2 lg:col-span-1 '>
                    <div className='flex justify-center items-center'>
                        image
                    </div>
                </div>
            </div>
        </div>

        <div className=' grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 mb-10'>
            <div className=' grid justify-start items-start col-span-2 lg:col-span-1 px-4 '>
                <div className=' flex flex-col justify-center items-center lg:items-start mb-10 lg:mb-0'>
                        <h1 className='text-[16px] lg:text-[18px] font-semibold text-center mb-4'>
                            Vision
                        </h1>
                        <p className='text-[12px] lg:text-[14px] text-center lg:text-left'>
                        Our vision is to revolutionize home-based care by empowering every caregiver with the expertise to respond confidently to emergencies and provide exceptional support. We aspire to build a future where homes are havens of health and safety, and where our innovative training programs inspire a new standard of excellence in personal care.
                        </p>
                </div>
            </div>
            <div className=' grid justify-start items-start col-span-2 lg:col-span-1 px-4 '>
                <div className='flex flex-col justify-center items-center lg:items-start '>
                        <h1 className='text-[16px] lg:text-[18px] font-semibold text-center mb-4'>
                            Mission
                        </h1>
                        <p className='text-[12px] lg:text-[14px] text-center lg:text-left'>
                            Our mission is to empower individuals with the knowledge and skills necessary to provide exceptional first aid and home-based care. We are dedicated to promoting safety, health, and excellence through comprehensive training programs, ensuring every caregiver and healthcare professional can deliver the highest standard of care in public and home setting 
                        </p>
                </div>
            </div>
        </div>

        <div className=' grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 mb-10'>
            <div className='grid col-span-2 lg:col-span-1'>
                <h1 className='lg:hidden text-[16px] lg:text-[18px] font-semibold text-center mb-4'>
                    About Amy
                </h1>
                        
                <div className='flex justify-center items-center mb-10'>
                    image
                 </div>
            </div>

            <div className='grid col-span-2 lg:col-span-1 px-4'>
                <div className=''>
                    <div className=''>
                        <h1 className='hidden lg:flex text-[16px] lg:text-[18px] font-semibold text-center mb-4'>
                            About Amy
                        </h1>
                    </div>
                    <div>
                        <p className=' text-[12px] lg:text-[14px] text-center lg:text-left'>
                        Hi I am Amy-Lee Antonels, the Director of ALS Medical Trianing. I Started as a volunteer at SA Red Cross Society from 1985, 
                        became a training instructor in 2002. I am now a registered Assessor and Moderator with the Health and welfare Seta HWSETA.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20 text-[12px] '>
            <div className='flex justify-center text-[16px] lg:text-[18px] font-semibold text-center mb-10'>
                FAQ
            </div>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger className='font-semibold'>What can I do with a home based care certificate?</AccordionTrigger>
                <AccordionContent className='text-[12px] lg:text-[14px]'>
                You are able to become a community based worker as well as take care of a patient in a private home.
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger className='font-semibold'>What qualifications do i need to do Home Based Care training?</AccordionTrigger>
                <AccordionContent className='text-[12px] lg:text-[14px]'>
                You don’t need any qualifications start with Home Based Care training level .
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
             <AccordionItem value="item-1">
                 <AccordionTrigger className='font-semibold'>Is home based care a life time certificate?</AccordionTrigger>
                 <AccordionContent className='text-[12px] lg:text-[14px]'>
                 No it’s only valid for 3 years and needs to be renewed.
                 </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
             <AccordionItem value="item-1">
                 <AccordionTrigger className='font-semibold'>What is the difference between Home Based Care and First Aid?</AccordionTrigger>
                <AccordionContent className='text-[14px] lg:text-[16px]'>
                 Home Based Care
                 </AccordionContent>
                 <AccordionContent className='text-[12px] lg:text-[14px]'>
                 Home Based Care involves providing medical and non-medical support to individuals in their homes. This type of care is often long-term and designed to help people manage chronic conditions, recover from illness or surgery, and maintain independence.
                 </AccordionContent>
                 <AccordionContent className='text-[14px] lg:text-[16px]'>
                 First Aid
                 </AccordionContent>
                 <AccordionContent className='text-[12px] lg:text-[14px]'>
                 First aid refers to the immediate and temporary care provided to an individual who has been injured or is experiencing a sudden illness until professional medical treatment can be provided. 
                 </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
             <AccordionItem value="item-1">
                 <AccordionTrigger className='font-semibold'>Why do we need to do First Aid training?</AccordionTrigger>
                 <AccordionContent className='text-[12px] lg:text-[14px]'>
                 first aid empowers individuals to act confidently and effectively in emergencies, reducing the severity of injuries and potentially saving lives.
                 </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default About
