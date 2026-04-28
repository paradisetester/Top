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
  mainSystem: {
    id: '04',
    name: 'THE RECRUITMENT PROTOCOL',
    title: 'Architecting the Path',
    text: 'Potential is useless if it isn\'t seen. This system provides the physical peak-performance training and the strategic highlight architecture needed to capture the attention of scouts and recruiters.',
    bundle: 'Sports-specific physical peaks + Resume/Highlight architecture + Scholarship strategy.',
    hook: 'The literal bridge to the next level (College or Pro).'
  },
  sideSystems: [
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
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#D4FF00]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="font-mono text-[#D4FF00] mb-6 text-[11px] tracking-[0.6em] uppercase flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D4FF00]" />
              {VARSITY_DATA.label}
            </p>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter leading-[1.1] md:leading-[0.9] text-white">
              {VARSITY_DATA.heading} <br /> 
              <span className="italic text-[#D4FF00] opacity-90 drop-shadow-[0_0_15px_rgba(212,255,0,0.2)]">{VARSITY_DATA.headingAccent}</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed font-inter font-light italic max-w-2xl border-l-2 border-[#D4FF00]/20 pl-8">
              {VARSITY_DATA.description}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            <div className="relative inline-block">
               <p className="text-[#D4FF00] font-oswald text-8xl font-bold uppercase leading-none">{VARSITY_DATA.ageRange}</p>
               <span className="absolute -top-4 -right-4 font-mono text-[10px] text-white/20 rotate-90 uppercase tracking-widest">Ages_Scale</span>
            </div>
            <p className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase mt-4">{VARSITY_DATA.status}</p>
          </motion.div>
        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main Cinematic Card - 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => onOpenSystem(VARSITY_DATA.mainSystem)}
            className="col-span-12 lg:col-span-8 relative h-[650px] overflow-hidden border border-white/10 group cursor-pointer"
          >
            <img 
              src={VARSITY_DATA.image} 
              alt="Performance Visual" 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            {/* Top Info */}
            <div className="absolute top-10 left-10 flex items-center gap-6">
               <div className="w-12 h-12 rounded-full border border-[#D4FF00]/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#D4FF00] rounded-full animate-ping" />
               </div>
               <span className="font-mono text-[10px] text-[#D4FF00] uppercase tracking-[0.5em]">Live_Protocol_Streaming</span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-12">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 mb-4 block uppercase tracking-[0.4em]">Protocol_ID // 0{VARSITY_DATA.mainSystem.id}</span>
                    <h3 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">{VARSITY_DATA.mainSystem.name}</h3>
                  </div>
                  <div className="flex items-center gap-6 group/btn">
                    <span className="font-oswald text-xs text-[#D4FF00] tracking-[0.4em] uppercase">Initialize</span>
                    <div className="w-16 h-16 border border-[#D4FF00]/20 rounded-full flex items-center justify-center group-hover:border-[#D4FF00] transition-all">
                       <svg className="w-6 h-6 text-[#D4FF00] translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                       </svg>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Side Cards - 4 cols */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {VARSITY_DATA.sideSystems.map((system, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                onClick={() => onOpenSystem(system)}
                className="flex-1 bg-[#0A0A0A] border border-white/5 p-12 relative group hover:border-[#D4FF00]/40 transition-all duration-700 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                   <span className="font-oswald text-8xl font-black text-white">0{system.id}</span>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-[#D4FF00]/60 mb-6 block uppercase tracking-[0.4em]">SYSTEM_DATA</span>
                    <h4 className="font-oswald text-3xl font-bold text-white mb-6 uppercase group-hover:text-[#D4FF00] transition-colors">{system.name}</h4>
                    <p className="text-gray-500 text-sm italic font-inter line-clamp-1 group-hover:line-clamp-none transition-all duration-500">
                      {system.text}
                    </p>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-4">
                     <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-[#D4FF00]/30 transition-all" />
                     <span className="font-oswald text-[9px] text-[#D4FF00] tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Access</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
