import { motion } from 'motion/react';
import { ScrambleText, TiltCard } from '../UIComponents';

const PILLARS_DATA = {
  label: '[ 02 — ARCHITECTURE ]',
  heading: 'THE FOUR PILLARS',
  items: [
    { title: 'MIND', desc: 'Psychology, visualization, focus training, and building an unbreakable mental framework.', image: '/pillar-mental.png', stat: '12', statLabel: 'MODULES' },
    { title: 'BODY', desc: 'Daily routines, nutrition science, recovery protocols, and physical system architecture.', image: '/pillar-physical.png', stat: '90', statLabel: 'DAY SYSTEM' },
    { title: 'SOCIAL', desc: 'Identity development, leadership, communication, and building your personal operating system.', image: '/pillar-social.png', stat: '8', statLabel: 'WEEK COURSE' },
    { title: 'SYSTEM', desc: 'AI-powered tracking, progress analytics, personalized paths, and performance dashboards.', image: '/pillar-system.png', stat: '24/7', statLabel: 'MONITORING' },
  ],
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.2, duration: 1.2 } },
};

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-20 sm:py-20 lg:py-40 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
      <motion.div animate={{ x: [0, -120, 80, 0], y: [0, 80, -60, 0] }} transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4FF00]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-6xl mx-auto mb-10 mb:sm-10 md:mb-15">
        <p className="gsap-reveal font-mono text-gray-600 mb-4 text-[10px] tracking-[0.4em]"><ScrambleText text={PILLARS_DATA.label} delay={200} /></p>
        <h2 className="gsap-reveal font-oswald text-4xl sm:text-5xl md:text-6xl font-bold">{PILLARS_DATA.heading}</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {PILLARS_DATA.items.map((item, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
            <TiltCard className="relative bg-[#111] border border-white/5 overflow-hidden group cursor-pointer hover:border-[#D4FF00]/30 transition-all duration-500">
              <div className="absolute inset-0"><img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" /></div>
              <div className="relative z-10 p-10 md:p-12 flex flex-col min-h-[280px]" style={{ transform: 'translateZ(40px)' }}>
                <div className="flex justify-between items-start mb-8">
                  <p className="font-mono text-[10px] text-[#D4FF00]/50 tracking-[0.3em]">PILLAR_0{i + 1}</p>
                  <div className="text-right"><div className="font-oswald text-2xl font-bold">{item.stat}</div><div className="font-mono text-[8px] tracking-[0.2em] text-gray-600">{item.statLabel}</div></div>
                </div>
                <div className="mt-auto">
                  <h3 className="font-oswald text-3xl font-bold mb-3 group-hover:text-[#D4FF00] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-6 h-px bg-[#D4FF00]/20 group-hover:w-12 transition-all" />
              <div className="absolute top-0 left-0 w-px h-6 bg-[#D4FF00]/20 group-hover:h-12 transition-all" />
              <div className="absolute bottom-0 right-0 w-6 h-px bg-[#D4FF00]/20 group-hover:w-12 transition-all" />
              <div className="absolute bottom-0 right-0 w-px h-6 bg-[#D4FF00]/20 group-hover:h-12 transition-all" />
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
