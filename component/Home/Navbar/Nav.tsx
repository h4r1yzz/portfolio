"use client";

import { FaCode } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { Navlink } from '../../../constant/constant'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useActiveSection } from '../../../hooks/useActiveSection';

type Props = {
    openNav: () => void;
};

const Nav = ({openNav}: Props) => {
    const [navBg, setNavBg] = useState(false);
    const { activeSection, scrollToSection } = useActiveSection();

    useEffect(()=> {
        const handler = () => {
            if (window.scrollY > 50) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };


  return (
    <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-white text-xl font-bold hidden sm:block md:text-2xl'>
                    Harry Chandra Tsjan
                </h1>
            </div>
            {/* navlinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {Navlink.map((link) => {
                    const isActive = activeSection === link.sectionId;
                    return (
                        <a
                            key={link.id}
                            href={link.url}
                            onClick={(e) => handleNavClick(e, link.sectionId)}
                            className={`text-base font-medium transition-all duration-200 cursor-pointer ${
                                isActive
                                    ? 'text-cyan-300 border-b-2 border-cyan-300'
                                    : 'text-white hover:text-cyan-300'
                            }`}
                        >
                            <p>{link.label}</p>
                        </a>
                    );
                })}
            </div>
            {/* button */}
            <div className='flex items-center space-x-4'>
                {/* Cv button */}
                <a
                    href="/resume.pdf"
                    download="Harry_Chandra_Resume.pdf"
                    className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
                >
                    <BiDownload className='w-5 h-5' />
                    <span>Download CV</span>
                </a>
                {/* Hamburger */}
                <HiBars3BottomRight 
                    onClick={openNav}
                    className='w-8 h-8 text-white cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Nav