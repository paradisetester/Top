import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ScrambleText, EKGLine } from '../UIComponents';

const TIERS_DATA = [
  {
    tier: 'Tier 1',
    title: 'THE FOUNDATION',
    ageRange: 'AGES 12–15',
    tagline: 'Building the blueprint for the next generation of leaders.',
    systems: [
      {
        id: '01',
        name: 'THE SUMMER EVOLUTION',
        subtext: 'A total identity reset for the modern student-athlete.',
        descriptor: 'Stop drifting into the new school year. The Summer Evolution is a high-precision recalibration of your sleep, movement, and social presence. We optimize your internal clock and physical baseline so you arrive on day one with the confidence of a leader and the build of an elite performer.'
      },
      {
        id: '02',
        name: 'THE TECH-FORWARD SCHOLAR',
        subtext: 'Cognitive optimization meets the fundamentals of Artificial Intelligence.',
        descriptor: 'High grades are the baseline; high-output efficiency is the advantage. This system engineers your mental focus and memory while installing a comprehensive AI 101 foundation. We move beyond basic apps to teach you the mechanics of prompt engineering, large language models, and automated workflows. You won’t just use technology to finish your schoolwork—you will learn to command the AI tools that are currently reshaping the global economy.'
      },
      {
        id: '03',
        name: 'THE SOCIAL CAPTAIN',
        subtext: 'Engineering the charisma and composure of a natural lead.',
        descriptor: 'Influence is a skill, not a trait. The Social Captain installs the frameworks for elite communication, conflict resolution, and high-level social standing. From locker room leadership to digital reputation, we provide the protocol for navigating peer groups with authority and calm.'
      }
    ]
  },
  {
    tier: 'Tier 2',
    title: 'VARSITY / ELITE PREP',
    ageRange: 'AGES 16–21',
    tagline: 'The professional bridge to competitive dominance.',
    systems: [
      {
        id: '04',
        name: 'THE RECRUITMENT PROTOCOL',
        subtext: 'Architecting the path to collegiate and professional scouting.',
        descriptor: 'Potential is useless if it isn\'t seen. This system provides the physical peak-performance training and the strategic highlight architecture needed to capture the attention of scouts and recruiters. We don’t just build athletes; we build the most marketable version of your talent.'
      },
      {
        id: '05',
        name: 'THE BIO-HACKER’S EDGE',
        subtext: 'Extreme physiological management for high-stakes execution.',
        descriptor: 'Learn to command your biology. Never "crack" under the pressure of a championship game or a critical board-level exam. The Bio-Hacker’s Edge combines our Fueling Algorithm with advanced stress-shield protocols like cold exposure and breathwork. This is for the performer who refuses to compromise on execution.'
      },
      {
        id: '06',
        name: 'THE PROFESSIONAL INTERFACE',
        subtext: 'Mastering the language of wealth, networking, and career strategy.',
        descriptor: 'The transition from amateur to professional starts with how you occupy space. This system develops your public speaking, networking, and early-stage wealth management strategies. It’s designed to make you the most impressive person in any room—regardless of your age.'
      }
    ]
  },
  {
    tier: 'Tier 3',
    title: 'THE EXECUTIVE / ENTREPRENEUR',
    ageRange: 'AGES 22–35+',
    tagline: 'The Performance OS for global market domination.',
    systems: [
      {
        id: '07',
        name: 'THE CEO ENGINE',
        subtext: 'High-output performance architecture for the business athlete.',
        descriptor: 'Your company cannot outgrow its leader. The CEO Engine optimizes your physical and mental output for the 14-hour workday. We implement executive nutrition, evening power routines, and biomechanical maintenance to ensure your energy levels match your ambition.'
      },
      {
        id: '08',
        name: 'THE OPERATIONAL ARCHITECT',
        subtext: 'Engineering the team systems that scale with your vision.',
        descriptor: 'Stop doing the work and start building the machine. This system provides the definitive frameworks for staff onboarding, team culture, and operational scaling. We install the infrastructure that allows your business to function at peak efficiency while you focus on high-level strategy.'
      },
      {
        id: '09',
        name: 'THE MASTER LEGACY SYSTEM',
        subtext: 'Permanent peak performance and long-term vitality design.',
        descriptor: 'This is the terminal system for those who plan to win for decades. The Master Legacy System integrates advanced longevity protocols with high-stakes mental self-talk. We engineer a 95-year plan that aligns your physical health with your net worth, ensuring you stay at the top of the mountain once you’ve arrived.'
      }
    ]
  }
];

/* ─── SYSTEM CARD COMPONENT ─── */
function SystemCard({ system, i, activeTier }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Parallax values for the background number
  const moveX = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const moveY = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      key={`${activeTier}-${system.id}`}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="w-full bg-[#0A0A0A] border border-white/5 flex flex-col group cursor-pointer hover:border-[#D4FF00]/30 transition-all duration-500 min-h-[500px] overflow-hidden relative"
    >
      {/* Loading Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 h-[2px] bg-[#D4FF00] z-20"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
      />

      {/* Visual Header */}
      <div className="h-48 w-full relative overflow-hidden bg-[#111] flex items-center justify-center">
        <motion.div 
          style={{ x: moveX, y: moveY }}
          className="text-center relative z-10"
        >
          <div className="font-oswald text-7xl font-black text-white/5 group-hover:text-[#D4FF00]/10 transition-colors duration-500">
            {system.id}
          </div>
        </motion.div>
        
        <div className="absolute top-4 right-4 z-10">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#D4FF00]/40 uppercase group-hover:text-[#D4FF00] transition-colors duration-500">
            Protocol Active
          </span>
        </div>
        
        {/* Hover EKG Intensity */}
        <EKGLine className="absolute bottom-0 left-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="mb-4">
          <p className="text-[#D4FF00] font-mono text-[9px] tracking-widest uppercase opacity-80 mb-2">
            {system.subtext}
          </p>
          <h3 className="font-oswald font-bold text-2xl mb-3 group-hover:text-[#D4FF00] transition-colors uppercase leading-tight">
            {system.name}
          </h3>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-inter">
          {system.descriptor}
        </p>

        <button 
          onClick={() => alert('System details being decrypted...')}
          className="max-w-[200px] py-4 border border-white/10 text-gray-300 font-oswald text-[10px] tracking-[0.2em] flex items-center justify-between px-6 group-hover:bg-[#D4FF00] group-hover:text-black group-hover:border-[#D4FF00] transition-all relative overflow-hidden"
        >
          <span className="relative z-10">ACCESS PROTOCOL</span>
          <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <div className="absolute inset-0 bg-[#D4FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/0 group-hover:border-[#D4FF00]/40 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/0 group-hover:border-[#D4FF00]/40 transition-all duration-500" />
    </motion.div>
  );
}

export default function ProgramsSection() {
  const [activeTier, setActiveTier] = useState(0);

  return (
    <section className="relative pt-20 pb-32 px-6 md:px-12 bg-[#000] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="font-mono text-[#D4FF00] mb-6 text-[10px] tracking-[0.4em] uppercase">
            <ScrambleText text="[ 02 — THE SYSTEMS ]" delay={200} />
          </p>
          <h2 className="font-oswald text-5xl sm:text-7xl font-bold leading-[0.9] mb-8 uppercase">
            ENGINEER YOUR <br /> PERFORMANCE.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-inter">
            Select your tier to view the specialized operating systems designed for your stage of development.
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 mb-20">
          {TIERS_DATA.map((tier, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTier(idx)}
              className={`flex-1 group relative p-8 border transition-all duration-500 text-left overflow-hidden ${
                activeTier === idx 
                  ? 'border-[#D4FF00] bg-[#D4FF00]/5' 
                  : 'border-white/10 hover:border-white/30 bg-[#0A0A0A]'
              }`}
            >
              <div className="relative z-10">
                <p className={`font-mono text-[10px] tracking-widest mb-2 ${activeTier === idx ? 'text-[#D4FF00]' : 'text-gray-500'}`}>
                  {tier.tier} — {tier.ageRange}
                </p>
                <h3 className={`font-oswald text-xl font-bold tracking-tight ${activeTier === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {tier.title}
                </h3>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#D4FF00]"
                initial={false}
                animate={{ width: activeTier === idx ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
            </button>
          ))}
        </div>

        {/* Tier Tagline with Scramble */}
        <div className="mb-12 h-8 text-center flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#D4FF00] font-oswald text-lg tracking-wide uppercase italic">
                <ScrambleText text={TIERS_DATA[activeTier].tagline} delay={100} />
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {TIERS_DATA[activeTier].systems.map((system, i) => (
              <SystemCard 
                key={`${activeTier}-${system.id}`} 
                system={system} 
                i={i} 
                activeTier={activeTier} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
