import React, { useEffect, useState } from 'react';
import { Navbar, Footer, Loader } from '../sections';
import { ContactHero, ContactInfo, ContactForm } from './sections';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <div className="min-h-screen bg-[#0A0A0A] text-white font-inter selection:bg-[#D4FF00] selection:text-black">
        <Navbar isLoaded={isLoaded} />
        
        <ContactHero isLoaded={isLoaded} />
        
        <ContactInfo />
        
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}
