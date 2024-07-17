'use client'
import { useState, useRef } from 'react'
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [selectedValue, setSelectedValue] = useState('');
  const options = [
  { value: 'Enquiry', label: 'Enquiry' },
  { value: 'Enrollment ', label: 'Enrollment' },
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
        <h1 className='mb-10' >
          Contact
        </h1>
      </div>

        <div className='grid grid-cols-2 mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-20'>
          <div className='grid col-span-2 lg:col-span-1 mb-10'>
            <div className=' flex flex-col justify-center items-center gap-5 mb-5'>
              <div className=' flex gap-24'>
                  <Phone />
                <h1>
                  073 253 0961
                </h1>
              </div>

              <div className=' flex gap-5'>
                  <Mail />
                <h1>
                  alsmedtrain@gmail.com
                </h1>
              </div>

            </div>
          </div>
          <div className='grid col-span-2 lg:col-span-1'>
            <div className='flex justify-center items-center mb-5'>
              <form onSubmit={sendEmail}
                    ref={form}
                          className='flex flex-col gap-3'>
                        <input type="text" 
                               placeholder='Fullname'
                               name='user_name'
                               required/>

                        <input type="text" 
                               placeholder='Email'
                               name='user_email'
                               required/>

                        <select value={selectedValue}
                                onChange={(e) => setSelectedValue(e.target.value)}
                                className='text-black'
                                name='reason'
                                required>

                            {options.map((option) => (
                              <option key={option.value} value={option.value} >
                                {option.label}
                              </option>
                            ))}
                        </select>
                        <textarea type="text"  
                                  name="user_message" 
                                  placeholder='Message'
                                  className='text-black'
                                  rows={8}
                                  required/>
{/* first Aid checkbox */}
                        <h1 className='text-[14px] lg:text-[18px]'> First Aid courses</h1>
                        <div className='grid grid-cols-2 gap-2'>
                          <div className='grid col-span-2 lg:col-span-1'>

                            <div className='flex gap-2 text-[12px] md:text-[14px]'>
                              <div >
                                <input type="checkbox"
                                      id='level1'
                                      name='level1_FA'
                                      value='First Aid Level 1'
                                      className=''/>
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
                                      className=''/>
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
                                      className=''/>
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
                                      className=''/>
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
                        <h1 className='text-[14px] lg:text-[18px] pt-4'> Home Based Care courses</h1>
                        <div className='grid grid-cols-2 gap-2'>
{/*test*/}
                          {/* <div className=''>
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
                                      className=''/>
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
                                      className=''/>
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
                                      className=''/>
                              </div>
                              <div>
                                <label htmlFor="level3HBC"> 
                                Home Based Care Level 3 
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        
                        <button>
                            submit
                        </button>
                        {success && (
                        <span className='text-white text-[10px] lg:text-[12px] font-semibold'>
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