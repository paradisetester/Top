import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const EXECUTIVE_DATA = {
  label: '[ TIER 03 — THE EXECUTIVE / ENTREPRENEUR ]',
  heading: 'MARKET',
  headingAccent: 'DOMINATION.',
  valueProp: "The Performance OS for global market domination.",
  ageRange: 'AGES 22–35+',
  image: '/systems_executive.png',
  systems: [
    {
      id: '07',
      name: 'THE CEO ENGINE',
      title: 'High-Output Architecture',
      subtext: 'High-output performance architecture for the business athlete.',
      text: 'Your company cannot outgrow its leader. The CEO Engine optimizes your physical and mental output for the 14-hour workday. We implement executive nutrition, evening power routines, and biomechanical maintenance to ensure your energy levels match your ambition.',
      bundle: 'Morning/Evening Power Routines + Executive Nutrition + Bio-Mechanical Maintenance.',
      hook: 'High-output energy for 14-hour days without the physical crash.'
    },
    {
      id: '08',
      name: 'THE OPERATIONAL ARCHITECT',
      title: 'Scaling Team Frameworks',
      subtext: 'Engineering the team systems that scale with your vision.',
      text: 'Stop doing the work and start building the machine. This system provides the definitive frameworks for staff onboarding, team culture, and operational scaling. We install the infrastructure that allows your business to function at peak efficiency while you focus on high-level strategy.',
      bundle: 'Onboarding Systems + Staff Management + Team Culture Frameworks.',
      hook: 'Teaching the entrepreneur how to stop doing the work and start building the systems that do the work for them.'
    },
    {
      id: '09',
      name: 'THE MASTER LEGACY SYSTEM',
      title: 'Vitality & Wealth Integration',
      subtext: 'Permanent peak performance and long-term vitality design.',
      text: 'This is the terminal system for those who plan to win for decades. The Master Legacy System integrates advanced longevity protocols with high-stakes mental self-talk. We engineer a 95-year plan that aligns your physical health with your net worth, ensuring you stay at the top of the mountain once you’ve arrived.',
      bundle: 'Advanced Longevity (95-year plan) + High-Stakes Mental Self-Talk + Wealth/Physical Health Integration.',
      hook: 'Staying at the top of the mountain once you\u2019ve arrived.'
    }
  ]
};

export default function SystemsExecutive({ onOpenSystem }) {
  return (
    <section id="executive" className="relative py-14 md:py-20 px-6 md:px-12 bg-[#020202] overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(212,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,255,0,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Vertical Indicator Side */}
          <div className="hidden lg:flex flex-col items-center gap-12 w-20">
            <span className="font-mono text-[10px] text-gray-600 rotate-90 uppercase tracking-[1em] whitespace-nowrap">TIER THREE</span>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#D4FF00] to-transparent" />
            <span className="font-oswald text-6xl font-black text-white/5 uppercase vertical-text">03</span>
          </div>

          <div className="flex-1">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="font-mono text-[#D4FF00] mb-4 text-[10px] tracking-[0.5em] uppercase">
              <ScrambleText text={EXECUTIVE_DATA.label} delay={200} />
            </p>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[1.1] md:leading-[0.9] tracking-tighter mb-6">
              {EXECUTIVE_DATA.heading} <br /> <span className="text-[#D4FF00] italic drop-shadow-[0_0_15px_rgba(212,255,0,0.3)]">{EXECUTIVE_DATA.headingAccent}</span>
            </h2>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4FF00] font-oswald text-xs uppercase font-bold tracking-widest">
                {EXECUTIVE_DATA.ageRange}
              </span>
              <div className="h-[1px] w-24 bg-white/10" />
            </div>

            <p className="text-[#D4FF00] font-oswald text-lg italic tracking-[0.1em] uppercase opacity-60">
              {EXECUTIVE_DATA.valueProp}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-[520px] aspect-[4/3] border border-white/10 overflow-hidden flex-shrink-0"
          >
            <img src={EXECUTIVE_DATA.image} className="w-full h-full object-cover grayscale brightness-50" alt="Executive Visual" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-[9px] text-[#D4FF00] mb-2 uppercase tracking-widest">Tier 03 Active</div>
              <div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 2 }} className="absolute top-0 left-0 h-full bg-[#D4FF00]" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXECUTIVE_DATA.systems.map((system, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => onOpenSystem(system)}
              className="group relative p-6 md:p-8 bg-[#0A0A0A] border border-white/5 hover:border-[#D4FF00]/40 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4FF00]/[0.02] to-transparent h-full -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />

              <div className="mb-4">
                <span className="font-mono text-[8px] text-[#D4FF00] tracking-[0.4em] uppercase block mb-2">SYSTEM 0{system.id}</span>
                <h3 className="font-oswald text-xl md:text-2xl font-bold text-white uppercase group-hover:text-[#D4FF00] transition-colors">{system.name}</h3>
              </div>

              <p className="text-gray-500 text-sm font-inter leading-relaxed mb-6 flex-grow group-hover:text-gray-400 transition-colors">
                {system.subtext}
              </p>

              {/* Explicit CTA Button */}
              <div className="flex items-center justify-between mt-auto">
                <span className="inline-flex items-center gap-3 bg-[#D4FF00] text-black font-oswald text-[10px] tracking-[0.15em] uppercase font-bold px-5 py-2.5 group-hover:shadow-[0_0_20px_rgba(212,255,0,0.2)] transition-all">
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
