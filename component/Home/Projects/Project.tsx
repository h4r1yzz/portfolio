import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="projects" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <br />
            <span className='text-cyan-200'> Projects </span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* Stock Project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <a
                    href="https://github.com/h4r1yzz/stock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group cursor-pointer"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <Image
                            src="/image/stock.png"
                            alt="Stock Analysis Project"
                            width={400}
                            height={700}
                            className='rounded-lg w-full h-82 object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold">View on GitHub</span>
                        </div>
                    </div>
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300'>
                        Stock Analysis
                    </h1>
                    <h1 className='pt-2 font-medium text-white/80'>
                        A stock analysis platform that let users to make investment decisions. It combines traditional stock performance analysis with sentiment analysis of financial news and LLM-generated recommendations to provide deeper insights into market trends.
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