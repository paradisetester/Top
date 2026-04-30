import React from 'react';
import { motion } from 'motion/react';
import { Particles } from '../../UIComponents';

export function ContactHero({ isLoaded }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-hero.png"
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
            [ CONTACT_PROTOCOL ]
          </span>
          <h1 className="font-oswald text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            GET IN <span className="text-transparent stroke-text">TOUCH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Ready to optimize your operation? Connect with our team to start your transformation.
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
