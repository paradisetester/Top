import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const EXECUTIVE_DATA = {
  label: '[ TIER.03 — THE EXECUTIVE / ENTREPRENEUR ]',
  heading: 'MARKET',
  headingAccent: 'DOMINATION.',
  valueProp: "The Performance OS for global market domination.",
  ageRange: 'AGES 22–35+',
  statusLabel: 'SYSTEM_LOAD: 98.2%',
  image: '/systems_executive.png',
  systems: [
    {
      id: '07',
      label: 'PROTOCOL_07',
      name: 'THE CEO ENGINE',
      title: 'High-Output Architecture',
      text: 'Optimize your physical and mental output for the 14-hour workday. We implement executive nutrition, evening power routines, and biomechanical maintenance.',
      bundle: 'Morning/Evening Power Routines + Executive Nutrition + Bio-Mechanical Maintenance.',
      hook: 'High-output energy for 14-hour days without the physical crash.'
    },
    {
      id: '08',
      label: 'PROTOCOL_08',
      name: 'THE OPERATIONAL ARCHITECT',
      title: 'Scaling Team Frameworks',
      text: 'Stop doing the work and start building the machine. Definitive frameworks for staff onboarding, team culture, and operational scaling.',
      bundle: 'Onboarding Systems + Staff Management + Team Culture Frameworks.',
      hook: 'Teaching the entrepreneur how to stop doing the work and start building the systems that do the work for them.'
    },
    {
      id: '09',
      label: 'PROTOCOL_09',
      name: 'THE MASTER LEGACY SYSTEM',
      title: 'Vitality & Wealth Integration',
      text: 'Advanced longevity protocols with high-stakes mental self-talk. We engineer a 95-year plan that aligns your physical health with your net worth.',
      bundle: 'Advanced Longevity (95-year plan) + High-Stakes Mental Self-Talk + Wealth/Physical Health Integration.',
      hook: 'Staying at the top of the mountain once you’ve arrived.'
    }
  ]
};

export default function SystemsExecutive({ onOpenSystem }) {
  return (
    <section id="executive" className="relative py:20 md:py-24 px-6 md:px-12 bg-[#020202] overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(212,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,255,0,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="font-mono text-[#D4FF00] mb-4 text-[10px] tracking-[0.5em] uppercase">
              {EXECUTIVE_DATA.label}
            </p>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[1.1] md:leading-[0.9] tracking-tighter mb-6">
              {EXECUTIVE_DATA.heading} <br /> <span className="text-[#D4FF00] italic drop-shadow-[0_0_15px_rgba(212,255,0,0.3)]">{EXECUTIVE_DATA.headingAccent}</span>
            </h2>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-[#D4FF00] text-black font-oswald text-xs px-4 py-1 uppercase font-bold tracking-widest">
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
            className="relative w-full md:w-80 h-40 border border-white/10 overflow-hidden"
          >
            <img src={EXECUTIVE_DATA.image} className="w-full h-full object-cover grayscale brightness-50" alt="Executive Visual" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="font-mono text-[8px] text-[#D4FF00] mb-1 uppercase">{EXECUTIVE_DATA.statusLabel}</div>
              <div className="w-32 h-[1px] bg-white/20 relative">
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
              className="group relative p-8 bg-white/[0.01] border border-white/5 hover:border-[#D4FF00]/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4FF00]/[0.02] to-transparent h-full -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />

              <div className="mb-6">
                <span className="font-mono text-[8px] text-gray-600 tracking-[0.4em] uppercase block mb-2">{system.label}</span>
                <h3 className="font-oswald text-2xl font-bold text-white uppercase group-hover:text-[#D4FF00] transition-colors">{system.title}</h3>
              </div>

              <p className="text-gray-500 text-xs font-inter line-clamp-2 italic mb-8">
                {system.text}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-oswald text-[9px] text-[#D4FF00] tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Access</span>
                <div className="w-12 h-[1px] bg-white/10 group-hover:bg-[#D4FF00]/40 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
