import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ScrambleText, MagneticButton, EKGLine } from '../UIComponents';

const CTA_DATA = {
  label: '[ INITIALIZE ]',
  heading: 'READY FOR THE',
  headingLine2: 'NEXT LEVEL?',
  body: 'Join thousands on their way to the top.',
  ctaText: 'ENTER THE SYSTEM',
  ctaLink: '/contact',
};

export default function CTASection() {
  return (
    <section className="py-20 sm:py-20 lg:py-40 px-6 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="gsap-reveal font-mono text-[#D4FF00] mb-8 text-[10px] tracking-[0.4em]"><ScrambleText text={CTA_DATA.label} delay={300} /></p>
        <h2 className="gsap-scale-text font-oswald text-4xl md:text-7xl font-bold mb-8 leading-tight md:leading-none">
          {CTA_DATA.heading}<br />{CTA_DATA.headingLine2}
        </h2>
        <p className="gsap-reveal text-gray-500 text-lg mb-12 max-w-md mx-auto">{CTA_DATA.body}</p>
        <EKGLine className="mb-12 opacity-40" />
        <Link to={CTA_DATA.ctaLink}>
          <MagneticButton className="btn-primary px-16 py-3 md:py-6 text-sm">
            {CTA_DATA.ctaText}
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}
