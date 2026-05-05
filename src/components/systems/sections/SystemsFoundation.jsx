import { motion } from 'motion/react';
import { ScrambleText, EKGLine } from '../../UIComponents';

const FOUNDATION_DATA = {
  label: '[ TIER 01 — THE FOUNDATION ]',
  heading: 'BUILDING THE',
  headingAccent: 'BLUEPRINT.',
  ageRange: 'AGES 12–15',
  valueProp: "Building the Ultimate Student-Athlete & Future Leader.",
  image: '/systems_foundation.png',
  systems: [
    {
      id: '01',
      name: 'THE SUMMER EVOLUTION',
      title: 'Summer Evolution Protocol',
      subtext: 'The definitive 8-week physical transformation and mentorship protocol.',
      text: 'This is the ultimate reset for the performer who refuses to stay average. The Summer Evolution is a high-intensity protocol engineered to overhaul your physical baseline, maximizing explosive power, lean muscle, and athletic movement. Beyond the training, you are integrated into a mentorship framework designed to sharpen your competitive mindset and social presence. We don’t just change your build; we prepare you to walk back into the new year as a dominant leader with the results to back it up.',
      bundle: 'Sleep optimization, kinetic movement, and the "Social Arrival" (Fashion/Hygiene).',
      hook: 'A total identity reset before the school year starts.'
    },
    {
      id: '02',
      name: 'THE TECH-FORWARD SCHOLAR',
      title: 'Cognitive & AI Optimization',
      subtext: 'Cognitive optimization meets the fundamentals of Artificial Intelligence.',
      text: 'High grades are the baseline; high-output efficiency is the advantage. This system engineers your mental focus and memory while installing a comprehensive AI 101 foundation. We move beyond basic apps to teach you the mechanics of prompt engineering, large language models, and automated workflows. You won’t just use technology to finish your schoolwork—you will learn to command the AI tools that are currently reshaping the global economy.',
      bundle: 'Focus/Memory systems (The Academic Engine) + Intro to Cutting-Edge Tech.',
      hook: 'Using AI and modern tools to automate schoolwork and start building early digital assets.'
    },
    {
      id: '03',
      name: 'THE SOCIAL CAPTAIN',
      title: 'Leadership & Charisma Framework',
      subtext: 'Engineering the charisma and composure of a natural lead.',
      text: 'Influence is a skill, not a trait. The Social Captain installs the frameworks for elite communication, conflict resolution, and high-level social standing. From locker room leadership to digital reputation, we provide the protocol for navigating peer groups with authority and calm.',
      bundle: 'Charisma/Leadership + Media Literacy + Conflict Resolution.',
      hook: 'Moving from "just a kid" to the person who leads the team and the friend group.'
    }
  ]
};

export default function SystemsFoundation({ onOpenSystem }) {
  return (
    <section id="foundation" className="relative py-14 md:py-20 px-6 md:px-12 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Schematic Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
        <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Vertical Indicator Side */}
          <div className="hidden lg:flex flex-col items-center gap-12 w-20">
            <span className="font-mono text-[10px] text-gray-600 rotate-90 uppercase tracking-[1em] whitespace-nowrap">TIER ONE</span>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#D4FF00] to-transparent" />
            <span className="font-oswald text-6xl font-black text-white/5 uppercase vertical-text">01</span>
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
                  <ScrambleText text={FOUNDATION_DATA.label} delay={200} />
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-oswald text-5xl md:text-7xl font-bold mb-8 uppercase leading-[0.9] tracking-tighter text-white"
              >
                {FOUNDATION_DATA.heading} <br />
                <span className="text-[#D4FF00] italic drop-shadow-[0_0_20px_rgba(212,255,0,0.2)]">{FOUNDATION_DATA.headingAccent}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-xl font-oswald italic uppercase tracking-wider max-w-xl border-l-4 border-[#D4FF00] pl-8"
              >
                {FOUNDATION_DATA.valueProp}
              </motion.p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Visual Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-[38%] flex flex-col"
              >
                <div className="relative flex-1 min-h-[300px] border border-white/5 overflow-hidden group mb-4">
                  <img
                    src={FOUNDATION_DATA.image}
                    alt="Blueprint"
                    className="object-[75%_60%] w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
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

                {/* Age Range Indicator below image */}
                <div className="flex items-center gap-3">
                  <span className="text-[#D4FF00] font-oswald text-[11px] uppercase font-bold tracking-widest">
                    {FOUNDATION_DATA.ageRange}
                  </span>
                  <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">Target Age Group</span>
                </div>
              </motion.div>

              {/* Protocol Cards */}
              <div className="flex-1 space-y-6">
                {FOUNDATION_DATA.systems.map((system, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
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
