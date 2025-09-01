import React from 'react'
import { BsDatabase } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import ResumeCard from './ResumeCard'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div id="resume" className='pt-20 pb-16'>
        <div className='w-[90%] mx-auto sm:w-[70%] grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work Part */}
            <div>
                <h1 className='text-3xl sm:text-4xlfont-bold text-white'>
                    My Work <span className='text-cyan-200'>Experience</span>
                </h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="Fullstack Developer"/>
                    <ResumeCard Icon={FaReact} role="Fullstack Developer"/>
                    <ResumeCard Icon={BsDatabase} role="Fullstack Developer"/>

                </div>
            </div>
            {/* Education Part */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ResumeCard Icon={BiBadge} role="Fullstack Developer" date="2020 - 2021"/>
                    <ResumeCard Icon={FaReact} role="Fullstack Developer" date="2020 - 2021"/>
                    <ResumeCard Icon={BsDatabase} role="Fullstack Developer" date="2020 - 2021"/>

                </div>
            </div>   
        </div>
    </div>
  )
}

export default Resume