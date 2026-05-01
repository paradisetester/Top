import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { SystemModal } from '../UIComponents';
import { SystemsHero, SystemsIntro, SystemsFoundation, SystemsVarsity, SystemsExecutive } from './sections';

export default function SystemsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSystem, setActiveSystem] = useState(null);

  useEffect(() => {
    // Scroll to top or hash on load
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
    
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white selection:bg-[#D4FF00] selection:text-black min-h-screen">
      <Navbar isLoaded={isLoaded} />
      
      <AnimatePresence>
        {activeSystem && (
          <SystemModal 
            system={activeSystem} 
            onClose={() => setActiveSystem(null)} 
          />
        )}
      </AnimatePresence>

      {/* Page Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-full h-full bg-[#D4FF00]"
                />
              </div>
              <span className="font-mono text-[9px] text-[#D4FF00] tracking-[0.4em] uppercase">Loading Systems...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SystemsHero isLoaded={isLoaded} />
      <SystemsIntro />
      <SystemsFoundation onOpenSystem={setActiveSystem} />
      <SystemsVarsity onOpenSystem={setActiveSystem} />
      <SystemsExecutive onOpenSystem={setActiveSystem} />

      <Footer />
    </main>
  );
}
