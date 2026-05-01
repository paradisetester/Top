import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const VARSITY_DATA = {
  label: '[ TIER 02 — VARSITY / ELITE PREP ]',
  heading: 'DOMINATE THE',
  headingAccent: 'ARENA.',
  description: 'The professional bridge to competitive dominance. Turning potential into a precision-engineered machine that refuses to crack under pressure.',
  ageRange: 'AGES 16–21',
  image: '/systems_varsity.png',
  systems: [
    {
      id: '04',
      name: 'THE RECRUITMENT PROTOCOL',
      title: 'Architecting the Path',
      subtext: 'Architecting the path to collegiate and professional scouting.',
      text: 'Potential is useless if it isn\'t seen. This system provides the physical peak-performance training and the strategic highlight architecture needed to capture the attention of scouts and recruiters. We don’t just build athletes; we build the most marketable version of your talent.',
      bundle: 'Sports-specific physical peaks + Resume/Highlight architecture + Scholarship strategy.',
      hook: 'The literal bridge to the next level (College or Pro).'
    },
    {
      id: '05',
      name: 'THE BIO-HACKER\u2019S EDGE',
      title: 'Extreme Physiological Management',
      subtext: 'Extreme physiological management for high-stakes execution.',
      text: 'Learn to command your biology. The Bio-Hacker\u2019s Edge combines our Fueling Algorithm with advanced stress-shield protocols like cold exposure and breathwork. This is for the performer who refuses to crack under the pressure of a championship game or a critical board-level exam.',
      bundle: 'The Fueling Algorithm (Nutrition) + The Stress Shield (Cold/Breathwork/Pressure management).',
      hook: 'Turning the body into a precision machine that doesn\'t "crack" during championships or high-stakes exams.'
    },
    {
      id: '06',
      name: 'THE PROFESSIONAL INTERFACE',
      title: 'Wealth & Career Strategy',
      subtext: 'Mastering the language of wealth, networking, and career strategy.',
      text: 'The transition from amateur to professional starts with how you occupy space. This system develops your public speaking, networking, and early-stage wealth management strategies. It’s designed to make you the most impressive person in any room—regardless of your age.',
      bundle: 'Public Speaking + Networking + Early Career Strategy/Wealth Basics.',
      hook: 'Learning how to walk into a room of adults and be the most impressive person there.'
    }
  ]
};

export default function SystemsVarsity({ onOpenSystem }) {
  return (
    <section id="varsity" className="relative py-14 md:py-20 px-6 md:px-12 bg-black overflow-hidden border-y border-white/5">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-[#D4FF00] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Vertical Indicator Side */}
          <div className="hidden lg:flex flex-col items-center gap-12 w-20">
            <span className="font-mono text-[10px] text-gray-600 rotate-90 uppercase tracking-[1em] whitespace-nowrap">TIER TWO</span>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#D4FF00] to-transparent" />
            <span className="font-oswald text-6xl font-black text-white/5 uppercase vertical-text">02</span>
          </div>

          <div className="flex-1">
            {/* Header Area */}
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-6"
              >
                <div className="w-12 h-[1px] bg-[#D4FF00]" />
                <p className="font-mono text-[#D4FF00] text-[11px] tracking-[0.5em] uppercase">
                  <ScrambleText text={VARSITY_DATA.label} delay={200} />
                </p>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-oswald text-5xl md:text-7xl font-bold mb-8 uppercase leading-[0.9] tracking-tighter text-white"
              >
                {VARSITY_DATA.heading} <br /> 
                <span className="text-[#D4FF00] italic drop-shadow-[0_0_20px_rgba(212,255,0,0.2)]">{VARSITY_DATA.headingAccent}</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-xl font-oswald italic uppercase tracking-wider max-w-xl border-l-4 border-[#D4FF00] pl-8"
              >
                {VARSITY_DATA.description}
              </motion.p>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-[38%] flex flex-col"
              >
                <div className="relative flex-1 min-h-[300px] border border-white/5 overflow-hidden group mb-4">
                  <img 
                    src={VARSITY_DATA.image} 
                    alt="Varsity Visual" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                        <motion.div 
                          initial={{ left: '-100%' }}
                          whileInView={{ left: '100%' }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 w-20 h-full bg-[#D4FF00]" 
                        />
                    </div>
                  </div>
                </div>
                
                {/* Age Range Indicator */}
                <div className="flex items-center gap-3">
                  <span className="bg-[#D4FF00] text-black font-oswald text-[10px] px-3 py-1 uppercase font-bold tracking-widest">
                    {VARSITY_DATA.ageRange}
                  </span>
                  <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">Target Age Group</span>
                </div>
              </motion.div>

              {/* Protocol Cards */}
              <div className="flex-1 space-y-6">
                {VARSITY_DATA.systems.map((system, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.15) }}
                    onClick={() => onOpenSystem(system)}
                    className="group relative bg-[#0A0A0A] border border-white/5 p-6 md:p-8 hover:border-[#D4FF00]/40 transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4FF00]/[0.02] to-transparent h-full -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />
                    <div className="relative z-10">
                      {/* Card Header */}
                      <div className="flex items-center gap-4 mb-2">
                         <span className="font-mono text-[9px] text-[#D4FF00] tracking-[0.4em] uppercase">SYSTEM 0{system.id}</span>
                      </div>
                      <h4 className="font-oswald text-xl md:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors mb-3">{system.name}</h4>
                      
                      {/* Subtext — shown on card */}
                      <p className="text-gray-500 text-sm font-inter leading-relaxed mb-5 group-hover:text-gray-400 transition-colors">
                         {system.subtext}
                      </p>

                      {/* Explicit CTA Button */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-3 bg-[#D4FF00] text-black font-oswald text-[10px] tracking-[0.15em] uppercase font-bold px-5 py-2.5 group-hover:shadow-[0_0_20px_rgba(212,255,0,0.2)] transition-all">
                          View Details
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
