"use client";

import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Text content*/}
            <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
                    Schedule a call with me

                </h1>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                     Reach out to 
                </p>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300'/>
                        <p className='text-xl font-cold text-gray-400'>
                            +438949310413
                        </p>
                    </div>
                </div>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300'/>
                        <p className='text-xl font-cold text-gray-400'>
                            hello@exmaple.com
                        </p>
                    </div>
                </div>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300'/>
                        <p className='text-xl font-cold text-gray-400'>
                            Indon
                        </p>
                    </div>
                </div>
                {/* Social */}
                <div className='flex items-center mt-8 space-x-3'>
                    <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                        <FaFacebook className='w-6 h-6 text-white ' />
                    </div>
                    <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                        <FaFacebook className='w-6 h-6 text-white ' />
                    </div>
                </div>
            </div>
            {/* Form */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0" className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <input type='text' placeholder='Your name' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
                <input type='email' placeholder='Email' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
                <input type='number' placeholder='Number' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />  
                <textarea placeholder='Message' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h=[10rem]' />
                <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'>
                    Send Message
                </button>          
            </div>
        </div>
    </div>
  )
}

export default Contacts