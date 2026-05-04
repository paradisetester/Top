import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CONCLUSION_DATA = {
  text: 'The Goal: To move from being a participant in life to being a 24-Hour Pro. Every choice, every habit, and every meal is a vote for the person you are becoming.',
  ctaText: 'UPGRADE YOUR SYSTEM',
  ctaLink: '/systems',
};

export default function AboutConclusion() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 border border-[#D4FF00]/20 bg-[#0A0A0A] relative group overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-12 h-px bg-[#D4FF00] group-hover:w-24 transition-all duration-500" />
          <div className="absolute top-0 left-0 w-px h-12 bg-[#D4FF00] group-hover:h-24 transition-all duration-500" />
          <div className="absolute bottom-0 right-0 w-12 h-px bg-[#D4FF00] group-hover:w-24 transition-all duration-500" />
          <div className="absolute bottom-0 right-0 w-px h-12 bg-[#D4FF00] group-hover:h-24 transition-all duration-500" />
          
          <h3 className="font-oswald text-2xl md:text-4xl font-bold mb-8 leading-tight">
            {CONCLUSION_DATA.text}
          </h3>
          
          <Link to={CONCLUSION_DATA.ctaLink}>
            <button className="btn-primary px-10 py-4 text-xs">
              {CONCLUSION_DATA.ctaText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
