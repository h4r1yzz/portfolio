"use client";

import React from 'react'
import { Navlink } from '../../../constant/constant'
import { CgClose } from 'react-icons/cg'
import { useActiveSection } from '../../../hooks/useActiveSection';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}: Props) => {
    const { activeSection, scrollToSection } = useActiveSection();
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
        closeNav(); // Close mobile nav after clicking
    };

  return (
    <div>
      {/* overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}></div>

      {/* mobile nav */}
      <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}>
        {Navlink.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
                <a
                    key={link.id}
                    href={link.url}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    className="cursor-pointer"
                >
                    <p className={`w-fit text-xl ml-12 border-b-[1.5px] pb-1 sm:text-[30px] transition-all duration-200 ${
                        isActive
                            ? 'text-cyan-300 border-cyan-300'
                            : 'text-white border-white hover:text-cyan-300 hover:border-cyan-300'
                    }`}>
                        {link.label}
                    </p>
                </a>
            )
        })}
        {/* cross icon */}
        <CgClose 
            onClick={closeNav} 
            className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>
    </div>
  )
}

export default MobileNav
