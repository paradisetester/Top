import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const VARSITY_DATA = {
  label: '[ TIER.02 — VARSITY / ELITE PREP ]',
  heading: 'DOMINATE THE',
  headingAccent: 'ARENA.',
  description: 'The professional bridge to competitive dominance. Turning potential into a precision-engineered machine that refuses to crack under pressure.',
  ageRange: 'AGES 16–21',
  status: 'Status: High Performance',
  image: '/systems_varsity.png',
  systems: [
    {
      id: '04',
      name: 'THE RECRUITMENT PROTOCOL',
      title: 'Architecting the Path',
      text: 'Potential is useless if it isn\'t seen. This system provides the physical peak-performance training and the strategic highlight architecture needed to capture the attention of scouts and recruiters.',
      bundle: 'Sports-specific physical peaks + Resume/Highlight architecture + Scholarship strategy.',
      hook: 'The literal bridge to the next level (College or Pro).'
    },
    {
      id: '05',
      name: 'THE BIO-HACKER’S EDGE',
      title: 'Extreme Physiological Management',
      text: 'Learn to command your biology. The Bio-Hacker’s Edge combines our Fueling Algorithm with advanced stress-shield protocols like cold exposure and breathwork.',
      bundle: 'The Fueling Algorithm (Nutrition) + The Stress Shield (Cold/Breathwork/Pressure management).',
      hook: 'Turning the body into a precision machine that doesn\'t "crack" during championships or high-stakes exams.'
    },
    {
      id: '06',
      name: 'THE PROFESSIONAL INTERFACE',
      title: 'Wealth & Career Strategy',
      text: 'The transition from amateur to professional starts with how you occupy space. Develop your public speaking, networking, and early-stage wealth management strategies.',
      bundle: 'Public Speaking + Networking + Early Career Strategy/Wealth Basics.',
      hook: 'Learning how to walk into a room of adults and be the most impressive person there.'
    }
  ]
};

export default function SystemsVarsity({ onOpenSystem }) {
  return (
    <section id="varsity" className="relative py-20 md:py-24 px-6 md:px-12 bg-black overflow-hidden border-y border-white/5">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-[#D4FF00] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Vertical Indicator Side */}
          <div className="hidden lg:flex flex-col items-center gap-12 w-20">
            <span className="font-mono text-[10px] text-gray-600 rotate-90 uppercase tracking-[1em] whitespace-nowrap">STATUS:ACTIVE_DRIVE</span>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#D4FF00] to-transparent" />
            <span className="font-oswald text-6xl font-black text-white/5 uppercase vertical-text">LVL_02</span>
          </div>

          <div className="flex-1">
            {/* Header Area */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-6"
              >
                <div className="w-12 h-[1px] bg-[#D4FF00]" />
                <p className="font-mono text-[#D4FF00] text-[11px] tracking-[0.5em] uppercase">
                  {VARSITY_DATA.label}
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

            <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/3"
              >
                <div className="relative aspect-[4/5] border border-white/5 overflow-hidden group mb-4">
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
                  <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">Target_Group</span>
                </div>
              </motion.div>

              {/* Protocol Files - Singular Line Format */}
              <div className="flex-1 space-y-4">
                {VARSITY_DATA.systems.map((system, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.15) }}
                    onClick={() => onOpenSystem(system)}
                    className="group relative bg-[#0A0A0A] border border-white/5 p-8 hover:border-[#D4FF00]/40 transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                           <span className="font-mono text-[9px] text-[#D4FF00] tracking-[0.4em] uppercase">PROTOCOL_0{system.id}</span>
                        </div>
                        <h4 className="font-oswald text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">{system.name}</h4>
                      </div>
                      
                      <div className="flex-1 md:max-w-xs">
                        <p className="text-gray-500 text-xs font-inter italic line-clamp-1 group-hover:text-gray-300 transition-colors">
                           {system.text}
                        </p>
                      </div>

                      <div className="hidden md:flex w-8 h-8 border border-white/5 items-center justify-center group-hover:border-[#D4FF00]/30 transition-all">
                        <svg className="w-4 h-4 text-[#D4FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                        </svg>
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
