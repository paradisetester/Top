import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Particles, MagneticButton } from '../UIComponents';

const HERO_DATA = {
  images: [
    { src: '/hero-sprint.png', pos: 'object-center' },
    { src: '/hero-rope-pull.jpg', pos: 'object-top' },
    { src: '/hero-chart.png', pos: 'object-center' }
  ],
  carouselInterval: 4000,
  statusLabel: 'TRAINING OPTIMIZATION PROGRAM',
  title: 'ALL OR NOTHING',
  subtitle: 'The operating system for your mind, body, and future.',
  ctaText: 'ENTER THE SYSTEM',
  // scrollLabel: 'SCROLL',
};

export default function HeroSection({ isLoaded }) {
  const [heroIndex, setHeroIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 100]);
  const bgScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.15]);

  useEffect(() => {
    if (!isLoaded) return;
    const iv = setInterval(() => setHeroIndex((p) => (p + 1) % HERO_DATA.images.length), HERO_DATA.carouselInterval);
    return () => clearInterval(iv);
  }, [isLoaded]);

  return (
    <section className="relative h-screen md:top-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <AnimatePresence mode="sync">
          <motion.img key={heroIndex} src={HERO_DATA.images[heroIndex].src} alt="Athlete preparing"
            initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 0.3, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className={`absolute inset-0 w-full h-full object-cover ${HERO_DATA.images[heroIndex].pos}`} />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/20 to-[#0A0A0A] z-10" />
      </motion.div>
      <Particles count={15} />
      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {isLoaded && (<>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-mono text-[#D4FF00] tracking-[0.5em] text-[10px] mb-8 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#D4FF00] rounded-full animate-pulse" />{HERO_DATA.statusLabel}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }} animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-oswald font-black text-5xl md:text-[100px] leading-[0.95] tracking-tighter mb-6 whitespace-nowrap">
            {HERO_DATA.title}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-6">
            <p className="text-gray-500 max-w-lg text-base md:text-lg">
              {HERO_DATA.subtitle}
            </p>
            {/* <MagneticButton className="btn-primary px-10 py-4 text-xs">
              {HERO_DATA.ctaText}
            </MagneticButton> */}
          </motion.div>
        </>)}
      </motion.div>
      <div className="absolute bottom-24 z-20 flex gap-2">
        {HERO_DATA.images.map((_, i) => (
          <button key={i} onClick={() => setHeroIndex(i)}
            className={`w-8 h-[2px] transition-all duration-500 ${i === heroIndex ? 'bg-[#D4FF00] w-12' : 'bg-white/20'}`} />
        ))}
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
        <span className="text-gray-600 font-mono text-[10px] tracking-[0.3em]">{HERO_DATA.scrollLabel}</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
          <motion.div animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-[#D4FF00] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
