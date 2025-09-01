import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            a small <br />
            <span className='text-cyan-200'> project </span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* 1st project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <Image
                    src="/image/harry.jpg"
                    alt="harry"
                    width={150}
                    height={150}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern finance
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>
                    Apps, ui
                </h1>
            </div>
            {/* 2nd project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <Image
                    src="/image/harry.jpg"
                    alt="harry"
                    width={850}
                    height={650}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern finance
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>
                    Apps, ui
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Project