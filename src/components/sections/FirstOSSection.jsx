import { motion } from 'motion/react';
import { ScrambleText } from '../UIComponents';

const FIRST_OS_DATA = {
  label: '[ 01.B — FIRST INSTALL ]',
  heading: 'YOUR ELITE',
  headingLine2: 'OPERATING SYSTEM.',
  subtitle: "The best operators didn't wait. They installed their systems early and upgraded every year. TOP is built for those who demand elite performance.",
  tagline: 'Elite Operator',
  cardTitle: 'ESTABLISH DOMINANCE',
  cardDesc: 'Build your mental framework before everyone else and run on an elite system.',
  cards: [
    { icon: '⚡', title: 'INSTALL EARLY', desc: "The elite didn't wait. They built their mental framework before the world took notice. Run on a higher system.", hl: 'Tier 1 → Elite' },
    { icon: '📊', title: 'TRACK EVERYTHING', desc: 'AI-powered dashboards show your progress across mind, body, and social development.', hl: 'Real-Time Data' },
    { icon: '🧠', title: 'BEYOND THE FIELD', desc: 'Confidence, leadership, identity, nutrition, routines — this system runs your entire life.', hl: 'Full Spectrum' },
  ],
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.2, duration: 1.2 } },
};

export default function FirstOSSection() {
  return (
    <section className="py-20 sm:py-20 lg:py-40 px-6 md:px-12 bg-[#0e0e0e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-20">
        <p className="gsap-reveal font-mono text-gray-600 mb-4 text-[10px] tracking-[0.4em]"><ScrambleText text={FIRST_OS_DATA.label} delay={200} /></p>
        <h2 className="gsap-reveal font-oswald text-4xl sn:text-5xl md:text-6xl font-bold mb-6">{FIRST_OS_DATA.heading}<br className="hidden sm:inline" />{FIRST_OS_DATA.headingLine2}</h2>
        <p className="gsap-reveal text-gray-400 max-w-xl text-lg leading-relaxed">
          {FIRST_OS_DATA.subtitle}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {FIRST_OS_DATA.cards.map((item, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} whileHover={{ y: -6 }}
            className="bg-[#0A0A0A] border border-white/5 p-10 flex flex-col group hover:border-[#D4FF00]/20 transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-6">{item.icon}</div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#D4FF00] mb-4">{FIRST_OS_DATA.tagline}</div>
            <h3 className="font-oswald text-xl font-bold mb-4 group-hover:text-[#D4FF00] transition-colors">{FIRST_OS_DATA.cardTitle}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{FIRST_OS_DATA.cardDesc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
