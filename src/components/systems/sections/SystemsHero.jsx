import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const HERO_DATA = {
  label: '[ ARCHITECTURE — OF — EXCELLENCE ]',
  heading: 'THE OPERATING',
  headingAccent: 'SYSTEMS',
  description1: {
    label: 'Protocol.01',
    text: "We don't provide coaching. We install systems. High-precision frameworks designed to optimize the human machine across every stage of development."
  },
  description2: {
    label: 'Version.2.0.26',
    text: "From the foundation of youth to the peak of executive performance, our OS scales with your ambition and the complexity of your environment."
  },
  scrollLabel: ''
};

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  })
};

export default function SystemsHero({ isLoaded }) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden bg-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/systems_hero_bg.png" 
          alt="Technical Background"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isLoaded ? { opacity: 0.25, scale: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Background Decor Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/10" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white/10" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white/10" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/10" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="font-mono text-[#D4FF00] mb-8 text-[10px] md:text-xs tracking-[0.6em] uppercase flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#D4FF00] rounded-full animate-pulse" />
              <ScrambleText text={HERO_DATA.label} delay={800} />
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-oswald text-5xl md:text-[7.5rem] font-bold mb-10 leading-[0.9] tracking-tighter uppercase"
          >
            {HERO_DATA.heading} <br />
            <span className="text-[#D4FF00] italic">{HERO_DATA.headingAccent}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center gap-12 mt-12 text-left border-t border-white/5 pt-12 max-w-5xl"
          >
            <div className="flex-1">
              <span className="font-mono text-[9px] text-[#D4FF00] mb-4 block uppercase tracking-[0.3em]">{HERO_DATA.description1.label}</span>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-inter font-light italic">
                {HERO_DATA.description1.text}
              </p>
            </div>
            <div className="flex-1">
              <span className="font-mono text-[9px] text-[#D4FF00] mb-4 block uppercase tracking-[0.3em]">{HERO_DATA.description2.label}</span>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-inter font-light italic">
                {HERO_DATA.description2.text}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[8px] text-gray-600 tracking-[0.4em] uppercase">{HERO_DATA.scrollLabel}</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
          <motion.div animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-[#D4FF00] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
