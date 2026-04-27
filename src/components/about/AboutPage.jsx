import React, { useEffect, useState } from 'react';
import { Navbar, Footer, Loader } from '../sections';
import { AboutHero, AboutPillars, AboutConclusion } from './sections';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 500);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
    const t = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <div className="min-h-screen bg-[#0A0A0A] text-white font-inter selection:bg-[#D4FF00] selection:text-black">
        <Navbar isLoaded={isLoaded} />
        
        <AboutHero isLoaded={isLoaded} />
        
        <AboutPillars />
        
        <AboutConclusion />

        <Footer />
      </div>
    </>
  );
}
