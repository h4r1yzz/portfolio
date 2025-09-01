"use client";

import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'resume', 'projects', 'skills', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px', // More sensitive detection
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section that's most visible
      let mostVisibleSection = '';
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Wait for DOM to be ready
    const initObserver = () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate navbar height dynamically
      const navbar = document.querySelector('[class*="h-[12vh]"]') as HTMLElement;
      const navHeight = navbar ? navbar.offsetHeight : 80; // Fallback to 80px
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      });
    }
  };

  return { activeSection, scrollToSection };
};
