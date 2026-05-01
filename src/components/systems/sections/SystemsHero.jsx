import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const HERO_DATA = {
  label: '[ ARCHITECTURE — OF — EXCELLENCE ]',
  heading: 'THE OPERATING',
  headingAccent: 'SYSTEMS',
  bg_image: '/systems_hero_bg.png',
  tiers: [
    { label: 'Foundation', age: 'Ages 12–15', target: '#foundation' },
    { label: 'Varsity', age: 'Ages 16–21', target: '#varsity' },
    { label: 'Executive', age: 'Ages 22–35+', target: '#executive' },
  ]
};

export default function SystemsHero({ isLoaded }) {
  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden bg-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={HERO_DATA.bg_image}
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
            <p className="font-mono text-[#D4FF00] mb-4 text-[10px] md:text-xs tracking-[0.6em] uppercase flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#D4FF00] rounded-full animate-pulse" />
              <ScrambleText text={HERO_DATA.label} delay={800} />
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-oswald text-5xl md:text-[7rem] font-bold mb-4 leading-[0.9] tracking-tighter uppercase"
          >
            {HERO_DATA.heading} <br />
            <span className="text-[#D4FF00] italic">{HERO_DATA.headingAccent}</span>
          </motion.h1>



          {/* Tier Quick-Jump Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 w-full max-w-3xl"
          >
            <p className="font-mono text-[10px] text-gray-400 tracking-[0.4em] uppercase text-center mb-6">
              Choose Your Level
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HERO_DATA.tiers.map((tier, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(tier.target)}
                  className="group relative px-6 py-4 border border-white/10 bg-white/[0.02] hover:border-[#D4FF00]/50 hover:bg-[#D4FF00]/5 transition-all duration-400 text-left overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-oswald text-sm font-bold text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                        {tier.label}
                      </span>
                      <span className="block font-mono text-[9px] text-gray-400 tracking-widest mt-1">
                        {tier.age}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-gray-1000 group-hover:text-[#D4FF00] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4FF00] group-hover:w-full transition-all duration-400" />
                </button>
              ))}
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
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
          <motion.div animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-[#D4FF00] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
