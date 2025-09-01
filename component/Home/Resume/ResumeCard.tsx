import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    Icon: IconType;
    role: string;
    date?: string;
    description?: string;
    company?: string;
}

const ResumeCard = ({Icon, role, date, description, company}: Props) => {
  return (
    <div className='mb-6'>
        <div className='flex flex-col bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md min-h-[200px] h-full'>
            {/* Header with icon, title and date */}
            <div className='flex items-start justify-between mb-4'>
                <div className='flex items-start space-x-4'>
                    <div className='sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-shrink-0'>
                        <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold leading-tight'>
                            {role}
                        </h1>
                        {company && (
                            <p className='text-cyan-300 text-sm sm:text-base font-medium mt-1'>
                                {company}
                            </p>
                        )}
                    </div>
                </div>
                {date && (
                    <div className='flex-shrink-0 ml-4'>
                        <span className='px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-200 text-gray-600 text-xs sm:text-sm font-bold whitespace-nowrap'>
                            {date}
                        </span>
                    </div>
                )}
            </div>

            {/* Description section that stretches */}
            <div className='flex-1 flex items-start'>
                <div className='w-full'>
                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard