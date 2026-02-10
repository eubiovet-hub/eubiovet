'use client';

import { useState, useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import SideNavigator from '@/components/SideNavigator';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Check if scrolling within a scrollable element
      const target = e.target as HTMLElement;
      const scrollableElement = target.closest('[data-scrollable]');

      if (scrollableElement) {
        const element = scrollableElement as HTMLElement;
        const isAtBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 1;
        const isAtTop = element.scrollTop === 0;

        // Allow default scroll if not at boundaries
        if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
          return;
        }
      }

      if (isScrollingRef.current) return;

      e.preventDefault();

      setCurrentSection((prev) => {
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;

        if (isScrollingDown && prev < 1) {
          isScrollingRef.current = true;
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 1000);
          return prev + 1;
        } else if (isScrollingUp && prev > 0) {
          isScrollingRef.current = true;
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 1000);
          return prev - 1;
        }
        return prev;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: '#f9f4ea' }}>
      <SideNavigator currentSection={currentSection} setCurrentSection={(section) => {
        isScrollingRef.current = true;
        setCurrentSection(section);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }} />

      <div className="relative w-screen h-screen overflow-hidden md:ml-16 sm:md:ml-20 md:ml-24 pt-16 md:pt-0" ref={contentRef}>
        {/* Section 1: Hero */}
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateY(${(0 - currentSection) * 100}vh)`,
          }}
        >
          <HeroSection />
        </div>

        {/* Section 2: Content */}
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateY(${(1 - currentSection) * 100}vh)`,
          }}
        >
          <ContentSection />
        </div>
      </div>
    </main>
  );
}
