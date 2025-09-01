"use client";

import React from 'react'
import { SiAmazonwebservices, SiApacheairflow, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiTypescript } from 'react-icons/si'
import Tilt from "react-parallax-tilt";

const skills =[
    {
        name:'Typescript',
        icon: <SiTypescript/>
    },
    {
        name:'Python',
        icon: <SiPython/>
    },
    {
        name:'Nextjs',
        icon: <SiNextdotjs/>
    },
    {
        name:'AWS',
        icon: <SiAmazonwebservices/>
    },
    {
        name:'PostgreSql',
        icon: <SiPostgresql/>
    },
    {
        name:'MongoDB',
        icon: <SiMongodb/>
    },
    {
        name:'Apache Airflow',
        icon: <SiApacheairflow/>
    }
]

const Skills = () => {
  return (
    <div id="skills" className='text-white pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <span className='text-cyan-200'>Skills</span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skil, i) => {
                return (
                    <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                        <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-4xl mb-4 text-gray-300'>
                                {skil.icon}
                            </div>
                            <p className='text-sm text-gray-400'>
                                {skil.name}
                            </p>
                        </div>
                    </Tilt>
                )
            })}
        </div>
    </div>
  )
}

export default Skills