'use client'
import { useState, useRef } from 'react'
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [selectedValue, setSelectedValue] = useState('');
  const options = [
  { value: 'Enquiry', label: 'Enquiry', placeholder: 'Enquiry' },
  { value: 'Enrollment ', label: 'Enrollment', placeholder: 'Enrollment' },
  ];
  
//test
  // const [selectedCourse, setSelectedCourse] = useState('');
  // const coursesFA = [
  // { value: 'First Aid Level 1', label: 'First Aid Level 1' },
  // { value: 'First Aid Level 2 ', label: 'First Aid Level 2' },
    // { value: 'First Aid Level 3 ', label: 'First Aid Level 3' },
  // ];

  // Email.js
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const service= process.env.NEXT_PUBLIC_SERVICE_ID;
  const temp_id= process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const form = useRef();

  const sendEmail = (e) => {

   e.preventDefault();
   setError(false);
   setSuccess(false);

   emailjs
.sendForm(service, 
               temp_id, form.current, {
               publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
     })
     .then(
       (success) => {
         setSuccess(true);
         form.current.reset()
       },
       (error) => {
        setError(true);
       },
     );
 };

  return (
    <div className='my-10 lg:my-20'>
      <div className=' flex flex-col text-center justify-center items-center mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
        <h1 className='text-[20px] md:text-[24px] font-quattrocento-regular font-semibold text-center mb-10' >
          Contact
        </h1>
      </div>

        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
          <div className='grid col-span-2 lg:col-span-1 justify-center items-center mb-10'>
            <div className=' mx-[0px] flex flex-col justify-start items-between gap-5 mb-5'>
              <div className=' flex justify-between items-center '>
                  <Phone className='' />
                <h1 className='text-[14px] font-quattrocento-sans-regular md:text-[16px] lg:text-[20px]'>
                  073 253 0961
                </h1>
              </div>

              <div className=' flex justify-between items-center gap-8  '>
                  <Mail />
                <h1 className='text-[14px] font-quattrocento-sans-regular md:text-[16px] lg:text-[20px]'>
                  alsmedtrain@gmail.com
                </h1>
              </div>

            </div>
          </div>
          <div className='grid col-span-2  lg:col-span-1 justify-center items-center mb-10'>
            <div className='flex flex-col justify-center items-center shadow-lg shadow-rose-300 bg-white ring-2 ring-white p-5 rounded-sm '>
              <form onSubmit={sendEmail}
                    ref={form}
                    className='flex flex-col gap-3 font-quattrocento-sans-regular'>
                        <input type="text" 
                               placeholder='Fullname'
                               name='user_name'
                               className='ring-1 shadow-[inset_0px_0px_3px_3px]  shadow-rose-100 ring-rose-200 focus:outline-none p-1 rounded-sm text-black placeholder-rose-200'
                               required/>

                        <input type="text" 
                               placeholder='Email'
                               name='user_email'
                               className='ring-1 shadow-[inset_0px_0px_3px_3px] shadow-rose-100 ring-rose-200 focus:outline-none p-1 rounded-sm text-black placeholder-rose-200'
                               required/>

                        <select value={selectedValue}
                                onChange={(e) => setSelectedValue(e.target.value)}
                                name='reason'
                                className='ring-1 shadow-[inset_0px_0px_3px_3px] shadow-rose-100 shadow-inner-xl shadow-blacks ring-rose-200 focus:outline-rose-200 p-1 rounded-sm text-rose-200'
                                required>

                            {options.map((option) => (
                              <option key={option.value}
                                      value={option.value}
                                      className='text-black' >
                                {option.value}
                              </option>
                            ))}
                        </select> 
                        <textarea type="text"  
                                  name="user_message" 
                                  placeholder='Message'
                                  rows={8}
                                  className='ring-1 shadow-[inset_0px_0px_3px_3px] shadow-rose-100 shadow-inner-xl shadow-blacks ring-rose-200 focus:outline-none p-1 rounded-sm text-black placeholder-rose-200'
                                  required/>
{/* first Aid checkbox */}
                        <h1 className='text-rose-200 font-semibold text-[14px] lg:text-[18px] font-quattrocento-regular'> First Aid courses</h1>
                        <div className='grid grid-cols-2 gap-2'>
                          <div className='grid col-span-2 lg:col-span-1'>

                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div >
                                <input type="checkbox"
                                      id='level1'
                                      name='level1_FA'
                                      value='First Aid Level 1'
                                      className='accent-rose-200 hover:accent-rose-400  '/>
                              </div>
                              <div>
                                <label htmlFor="level1"> 
                                  First Aid Level 1 
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className='grid col-span-2 lg:col-span-1'>
                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div>
                                <input type="checkbox"
                                      id='level2'
                                      name='level2_FA'
                                      value='First Aid Level 2'
                                      className='accent-rose-200 hover:accent-rose-400 '/>
                              </div>
                              <div>
                                <label htmlFor="level2"> 
                                  First Aid Level 2 
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-2 gap-2'>
                          <div className='grid col-span-2 lg:col-span-1'>

                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div >
                                <input type="checkbox"
                                      id='level3'
                                      name='level3_FA'
                                      value='First Aid Level 3'
                                      className='accent-rose-200 hover:accent-rose-400'/>
                              </div>
                              <div>
                                <label htmlFor="level3"> 
                                  First Aid Level 3 
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className='grid col-span-2 lg:col-span-1'>
                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              
                              <div>
                                <input type="checkbox"
                                      id='cpr_FA'
                                      name='cpr'
                                      value='CPR Family and Friends'
                                      className='accent-rose-200 hover:accent-rose-400'/>
                              </div>
                              <div>
                                <label htmlFor="cpr"> 
                                  CPR Family and Friends 
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

{/* Home Based Care checkbox */}
                        <h1 className='text-rose-200 font-semibold text-[14px] lg:text-[18px] font-quattrocento-regular pt-4'> Home Based Care courses</h1>
                        <div className='grid grid-cols-2 gap-2'>
{/*test*/}
                          {/* <div className='accent-rose-200 hover:accent-rose-400'>
                                  {coursesFA.map((coursesFA) => (
                                      <label key={coursesFA}
                                             className='grid col-span-2 lg:col-span-1'>
                                        {coursesFA.value}
                                          <input type="checkbox" 
                                                key={coursesFA.value} 
                                                id={coursesFA} 
                                                name='course1'
                                                value={coursesFA.value}
                                                className='flex gap-2 text-[12px] md:text-[14px]'/>
                                      </label>
                                  ))}
                          </div> */}
{/*test*/}

                          <div className='grid col-span-2 lg:col-span-1'>
                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div >
                                <input type="checkbox"
                                      id='level1HBC'
                                      name='level1_HBC'
                                      value='Home Based Care Level 1'
                                      className='accent-rose-200 hover:accent-rose-400'/>
                              </div>
                              <div>
                                <label htmlFor="level1HBC"> 
                                Home Based Care Level 1 
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className='grid col-span-2 lg:col-span-1'>
                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div>
                                <input type="checkbox"
                                      id='level2HBC'
                                      name='level2_HBC'
                                      value='Home Based Care Level 2'
                                      className='accent-rose-200 hover:accent-rose-400'/>
                              </div>
                              <div>
                                <label htmlFor="level2HBC"> 
                                Home Based Care Level 2 
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-2 gap-2'>
                          <div className='grid col-span-2 lg:col-span-1'>

                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div >
                                <input type="checkbox"
                                      id='level3HBC'
                                      name='level3_HBC'
                                      value='Home Based Care Level 3'
                                      className='accent-rose-200 hover:accent-rose-400'/>
                              </div>
                              <div>
                                <label htmlFor="level3HBC"> 
                                Home Based Care Level 3 
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        
                        <button className='flex justify-center items-center shadow-[inset_0px_0px_3px_3px] shadow-rose-200/80 bg-rose-300 py-2 rounded-sm'>
                            Submit
                        </button>
                        {success && (
                        <span className='text-black text-[10px] lg:text-[12px] font-semibold'>
                           Your message was sent successfully!
                        </span>
                      )}
                      {error && (
                        <span className='text-red-600 text-[10px] lg:text-[12px] font-semibold'>
                           Something went wrong!
                        </span>
                      )}
                    </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact