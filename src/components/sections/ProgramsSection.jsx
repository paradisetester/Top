import { motion } from 'motion/react';
import { ScrambleText, MagneticButton, EKGLine } from '../UIComponents';

const PROGRAMS_DATA = {
  label: '[ 02 — Systems ]',
  heading: 'The Systems',
  subtitle: 'Mind. Body. Life.',
  ctaText: 'VIEW ALL PROGRAMS',
  items: [
    { name: 'FIRST DAY PROTOCOL', price: '$79', tag: 'MINDSET', desc: 'Mental preparation system for walking into new environments with confidence and clarity.', spec: '7 modules', specLabel: 'PROGRAM' },
    { name: 'GAMEDAY MINDSET', price: '$99', tag: 'MENTAL', desc: 'Pre-game visualization, focus routines, and pressure simulation for peak performance.', spec: '12 sessions', specLabel: 'TRAINING' },
    { name: 'DAILY SYSTEMS', price: '$149', tag: 'ROUTINES', desc: 'Morning-to-night architecture. Nutrition, sleep, study, and training schedules that build champions.', spec: '90 days', specLabel: 'PROGRAM' },
    { name: 'SOCIAL OS', price: '$129', tag: 'IDENTITY', desc: 'How to carry yourself, build your personal brand, develop leadership, and navigate social dynamics.', spec: '8 weeks', specLabel: 'COURSE' },
    { name: 'THE COMPLETE OPERATOR', price: '$399', tag: 'FULL SYSTEM', desc: 'Every program. Every module. Mind, body, social, and system — the full 360° operating system.', spec: '∞', specLabel: 'ACCESS' },
  ],
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.2, duration: 1.2 } },
};

export default function ProgramsSection() {
  return (
    <section className="relative pt-20 md:pt-20 pb-20 sm:pb-20 lg:pb-30 px-6 md:px-12 bg-[#000] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 sm:mb-20 text-center">
          <p className="font-mono text-[#D4FF00] mb-6 text-[10px] tracking-[0.4em]"><ScrambleText text={PROGRAMS_DATA.label} delay={200} /></p>
          <h2 className="font-oswald text-4xl sm:text-6xl md:text-6xl font-bold leading-[0.9] mb-8">{PROGRAMS_DATA.heading}</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">{PROGRAMS_DATA.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS_DATA.items.map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
              className="w-full bg-[#0A0A0A] border border-white/5 flex flex-col group cursor-pointer hover:border-[#D4FF00]/30 transition-all duration-500 min-h-[500px]">
              <div className="h-48 w-full relative overflow-hidden bg-[#111] flex items-center justify-center">
                <div className="text-center"><div className="font-oswald text-6xl font-black text-white/5 group-hover:text-[#D4FF00]/10 transition-colors">0{i + 1}</div></div>
                <div className="absolute top-4 right-4"><span className="font-mono text-[9px] tracking-[0.2em] text-black bg-[#D4FF00] px-3 py-1 font-bold">{item.tag}</span></div>
                <EKGLine className="absolute bottom-0 left-0 opacity-20" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-gray-600">{item.tag}</span>
                  <span className="font-oswald text-2xl font-bold text-[#D4FF00]">{item.price}</span>
                </div>
                <h3 className="font-oswald font-bold text-xl mb-3 group-hover:text-[#D4FF00] transition-colors">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="flex items-center mb-6">
                  <span className="font-oswald text-lg font-bold">{item.spec}</span>
                  <span className="font-mono text-[8px] tracking-[0.2em] text-gray-600 ml-2">{item.specLabel}</span>
                </div>
                <button onClick={() => alert('Connect Shopify to enable purchasing.')}
                  className="max-w-[190px] py-4 border border-white/10 text-gray-300 font-oswald text-[10px] tracking-[0.2em] flex items-center justify-between px-6 group-hover:bg-[#D4FF00] group-hover:text-black group-hover:border-[#D4FF00] transition-all">
                  <span>ADD TO SYSTEM</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center hidden">
          <MagneticButton className="px-10 py-4 bg-[#D4FF00] text-black font-oswald text-xs tracking-[0.2em] font-bold hover:bg-white transition-colors">{PROGRAMS_DATA.ctaText}</MagneticButton>
        </div>
      </div>
    </section>
  );
}
