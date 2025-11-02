import React from 'react'

const Project = () => {
  return (
    <div id="projects" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <br />
            <span className='text-cyan-200'> Projects </span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* Well Log Analysis Project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <a
                    href="https://github.com/h4r1yzz/mcp_langchain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group cursor-pointer"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/image/welllog.gif"
                            alt="Well Log Analysis Project"
                            width={400}
                            height={700}
                            className='rounded-lg w-full h-82 object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold">View on GitHub</span>
                        </div>
                    </div>
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300'>
                        Well Log Analysis
                    </h1>
                    <h1 className='pt-2 font-medium text-white/80'>
                      A smart geological data analysis platform built with Flask that leverages LangChain, LangGraph, and MCP to dynamically process LAS well-log files, execute real-time Python analysis, and deliver interactive visual insights through Plotly dashboards.
                    </h1>
                </a>
            </div>
            {/* Healthcare Project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <a
                    href="https://github.com/h4r1yzz/Healthcare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group cursor-pointer"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/image/healthcare.gif"
                            alt="Healthcare Project"
                            width={400}
                            height={700}
                            className='rounded-lg w-full h-82 object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold">View on GitHub</span>
                        </div>
                    </div>
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300'>
                        NeuroGrade
                    </h1>
                    <h1 className='pt-2 font-medium text-white/80'>
                        Deep learning solution that uses MRI scans to detect brain tumors and generate segmentation masks, combining human expertise with AI to get more accurate results, streamline workflows, and help doctors to get better understanding in complex cases 
                    </h1>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Project