import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ScrambleText, TiltCard } from '../UIComponents';

const FIRST_OS_DATA = {
  label: '[ 01.B - 5 Pillars ]',
  heading: 'YOUR ELITE',
  headingLine2: 'OPERATING SYSTEM.',
  subtitle: "The highest achievers didn’t wait. They started working a system early and upgraded regularly. TOP is built for elite performance.",
  tagline: 'Pillar',
  cardTitle: 'ESTABLISH DOMINANCE',
  cardDesc: 'Build your mental framework before everyone else and run on an elite system.',
  items: [
    { 
      title: 'THE KINETIC PILLAR', 
      id: 'kinetic',
      subtitle: 'Physical Mastery & Bio-Mechanical Efficiency',
      desc: 'Technical efficiency of your engine. Fluid, powerful movement and long-term injury resilience.', 
      image: '/pillar-physical.png', 
      stat: '90', 
      statLabel: 'DAY SYSTEM' 
    },
    { 
      title: 'THE FUELING ALGORITHM', 
      id: 'fueling',
      subtitle: 'Biology Over Dieting',
      desc: 'Treating nutrition as a biological algorithm. Mastering circadian rhythms and energy stability.', 
      image: '/pillar-recovery.png', 
      stat: '100%', 
      statLabel: 'REGENERATION' 
    },
    { 
      title: 'THE MENTAL FIREWALL', 
      id: 'mental',
      subtitle: 'Psychological Warfare & Vision',
      desc: 'Protecting focus and installing an "All or Nothing" mindset. Dominate high-stakes moments.', 
      image: '/pillar-mental.png', 
      stat: '12', 
      statLabel: 'MODULES' 
    },
    { 
      title: 'THE DISCIPLINE PROTOCOL', 
      id: 'discipline',
      subtitle: 'Habit Architecture & Routines',
      desc: 'Non-negotiable daily standards. 3:30 AM standard and stacking daily wins for momentum.', 
      image: '/pillar-system.png', 
      stat: '24/7', 
      statLabel: 'MONITORING' 
    },
    { 
      title: 'THE SOCIAL INTERFACE', 
      id: 'social',
      subtitle: 'Status, Leadership & Presence',
      desc: 'Commanding respect and leading with authority. The athlete’s aesthetic and social engineering.', 
      image: '/pillar-social.png', 
      stat: '8', 
      statLabel: 'WEEK COURSE' 
    },
  ],
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.2, duration: 1.2 } },
};

export default function FirstOSSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-10 sm:pt-20 sm:pb-10 lg:pt-30 lg:pb-16 px-6 md:px-12 bg-[#0e0e0e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-15 md:mb-20">
        <p className="gsap-reveal font-mono text-gray-600 mb-4 text-[10px] tracking-[0.4em]"><ScrambleText text={FIRST_OS_DATA.label} delay={200} /></p>
        <h2 className="gsap-reveal font-oswald text-4xl sn:text-5xl md:text-6xl font-bold mb-6">{FIRST_OS_DATA.heading}<br className="hidden sm:inline" />{FIRST_OS_DATA.headingLine2}</h2>
        <p className="gsap-reveal text-gray-400 max-w-xl text-lg leading-relaxed">
          {FIRST_OS_DATA.subtitle}
        </p>
      </div>
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
   <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:flex-wrap gap-4 justify-center pb-20">
        {FIRST_OS_DATA.items.map((item, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className='w-full md:w-[32%]'>
            <TiltCard 
              onClick={() => navigate(`/about#${item.id}`)}
              className="relative bg-[#0A0A0A] border border-white/5 overflow-hidden group cursor-pointer hover:border-[#D4FF00]/30 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              </div>
              <div className="relative z-10 p-10 md:p-12 flex flex-col min-h-[380px]" style={{ transform: 'translateZ(40px)' }}>
                <div className="flex justify-between items-start mb-8">
                  <p className="font-mono text-[10px] text-[#D4FF00]/50 tracking-[0.3em] uppercase">{FIRST_OS_DATA.tagline} — 0{i + 1}</p>
                  <div className="text-right">
                    <div className="font-oswald text-2xl font-bold">{item.stat}</div>
                    <div className="font-mono text-[8px] tracking-[0.2em] text-gray-600 uppercase">{item.statLabel}</div>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="font-oswald text-3xl font-bold mb-1 group-hover:text-[#D4FF00] transition-colors leading-tight">{item.title}</h3>
                  <p className="text-[#D4FF00] font-mono text-[10px] tracking-widest mb-4 opacity-80 uppercase">{item.subtitle}</p>
                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </div>
              {/* Corner decorations */}
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
