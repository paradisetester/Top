import React from 'react';
import { motion } from 'motion/react';
import { Particles } from '../../UIComponents';

const CONTACT_HERO_DATA = {
  bgImage: '/contact-hero.png',
  label: '[ CONTACT_PROTOCOL ]',
  headingPrimary: 'GET IN',
  headingAccent: 'TOUCH',
  body: 'Have a question? We’re here to help. Shoot us a message.'
};

export function ContactHero({ isLoaded }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={CONTACT_HERO_DATA.bgImage}
          alt="Contact Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <Particles count={200} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-mono text-[#D4FF00] text-xs tracking-[0.5em] uppercase mb-4 block">
            {CONTACT_HERO_DATA.label}
          </span>
          <h1 className="font-oswald text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            {CONTACT_HERO_DATA.headingPrimary} <span className="text-transparent stroke-text">{CONTACT_HERO_DATA.headingAccent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            {CONTACT_HERO_DATA.body}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-[#D4FF00] to-transparent"
        />
      </div>
    </section>
  );
}
