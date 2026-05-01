import { motion } from 'motion/react';

const INTRO_DATA = {
  description1: {
    label: 'Our Approach',
    text: "We don't just coach. We install high-precision frameworks designed to optimize performance across every stage of development."
  },
  description2: {
    label: 'Built to Scale',
    text: "From building the foundation of youth to the peak of executive performance — our systems scale with your ambition and the complexity of your environment."
  }
};

export default function SystemsIntro() {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-[#020202] border-b border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(212,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,255,0,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 text-left max-w-5xl mx-auto"
        >
          <div className="flex-1">
            <span className="font-mono text-[9px] text-[#D4FF00] mb-4 block uppercase tracking-[0.3em]">{INTRO_DATA.description1.label}</span>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-inter font-light italic">
              {INTRO_DATA.description1.text}
            </p>
          </div>
          <div className="flex-1">
            <span className="font-mono text-[9px] text-[#D4FF00] mb-4 block uppercase tracking-[0.3em]">{INTRO_DATA.description2.label}</span>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed font-inter font-light italic">
              {INTRO_DATA.description2.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
