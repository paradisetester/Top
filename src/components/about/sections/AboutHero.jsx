import React from 'react';
import { motion } from 'motion/react';
import { ScrambleText } from '../../UIComponents';

const HERO_DATA = {
  label: '[ 00 — MISSION ]',
  heading: 'THE T.O.P. PILLARS',
  intro: 'Elite performance isn\'t reserved for the court or the corner office - it is a lifestyle. Whether you are a middle schooler navigating the social pressures of the classroom or a professional executive managing a global team, the mechanics of excellence remain the same. The T.O.P. framework is a universal operating system for those who refuse to settle for "average," transforming high-potential individuals into high-performance assets through the mastery of the 24-hour cycle.',
};

export default function AboutHero({ isLoaded }) {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-[#D4FF00] mb-6 text-[10px] tracking-[0.4em]"
        >
          <ScrambleText text={HERO_DATA.label} delay={200} />
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-oswald text-5xl md:text-8xl font-black mb-12 tracking-tighter"
        >
          {HERO_DATA.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-4xl leading-relaxed"
        >
          {HERO_DATA.intro}
        </motion.p>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4FF00]/[0.03] rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
