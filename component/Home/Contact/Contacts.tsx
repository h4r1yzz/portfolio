"use client";

import React, { useState } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa';

const Contacts = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);

    // Replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms access key
    formData.append("access_key", "82a9546e-6619-4589-b46b-17cd7ea2415f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! Thank you for reaching out.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        required
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        required
                        rows={4}
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 resize-none'
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`mt-8 px-12 py-4 transition-all duration-300 cursor-pointer text-white rounded-full w-full ${
                            isSubmitting
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-blue-950 hover:bg-blue-900'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {result && (
                    <div className={`mt-4 p-3 rounded-md text-center ${
                        result.includes('successfully')
                            ? 'bg-green-900/30 text-green-300 border border-green-600'
                            : result.includes('Sending')
                                ? 'bg-blue-900/30 text-blue-300 border border-blue-600'
                                : 'bg-red-900/30 text-red-300 border border-red-600'
                    }`}>
                        {result}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Contacts