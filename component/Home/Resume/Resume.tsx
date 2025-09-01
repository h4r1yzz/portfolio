import React from 'react'
import { BsDatabase } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import ResumeCard from './ResumeCard'
import { BiBadge } from 'react-icons/bi'
import { FaUpwork } from 'react-icons/fa6'
import { SiWorkplace } from 'react-icons/si'
import { MdOutlineWorkHistory } from 'react-icons/md'

const Resume = () => {
  return (
    <div id="resume" className='pt-20 pb-16'>
        <div className='w-[90%] mx-auto sm:w-[70%] grid grid-cols-1 xl:grid-cols-2 gap-10 items-start'>
            {/* Work Part */}
            <div className='h-full'>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My Work <span className='text-cyan-200'>Experience</span>
                </h1>
                <div className='mt-10 space-y-6' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={MdOutlineWorkHistory} date="Mac 2025 - Sept 2025" role="Data Science" company='RosaryLabs' description='Designed a search engine workflow with MCP integration for dynamic tool use and multi-turn reasoning, evaluated LLM performance with DeepEval and custom metrics, and explored Qdrant and sparse embeddings for RAG'/>
                    <ResumeCard Icon={MdOutlineWorkHistory} date="Oct 2024 - Jan 2025" role="Software Engineer" company='Consolsys' description='Integrated Stimulsoft reporting into the Tellering system using Angular and C#, ensured accurate transaction journaling with effective debugging practices, and migrated and optimized data workflows from MSSQL to PostgreSQL'/>
                    <ResumeCard Icon={MdOutlineWorkHistory} date="Oct 2023 - Jan 2024" role="Web Developer Intern" company='Strattonshire Venture' description='Developed an administration system with Laravel and MongoDB to streamline administrative tasks, while collaborating with the development team to implement improvements and provide responsive frontend support'/>
                </div>
            </div>
            {/* Education Part */}
            <div className='h-full'>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                <div className='mt-10 space-y-6' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ResumeCard Icon={BiBadge} role="University Tunku Abdul Rahman" description="B.Sc. Software Engineering" date="2021 - 2024"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume