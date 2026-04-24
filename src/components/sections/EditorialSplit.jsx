import { MagneticButton } from '../UIComponents';

const EDITORIAL_SPLIT_DATA = {
  image: '/editorial-2.png',
  imageAlt: 'Training',
  label: '— MENTAL ARCHITECTURE',
  heading: ['THE', 'SYSTEM', 'STARTS', 'HERE.'],
  body: 'Psychology. Routines. Nutrition. Social intelligence. One system. Every advantage.',
  ctaText: 'EXPLORE PROGRAMS',
};

export default function EditorialSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="relative h-[60vh] md:h-auto overflow-hidden">
        <img src={EDITORIAL_SPLIT_DATA.image} alt={EDITORIAL_SPLIT_DATA.imageAlt} className="split-img w-full h-[120%] object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A] hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent md:hidden" />
      </div>
      <div className="bg-[#0A0A0A] flex items-center px-8 md:px-16 py-20 md:py-0">
        <div>
          <div className="gsap-line w-10 h-px bg-[#D4FF00] mb-6" />
          <p className="gsap-reveal font-mono text-[#D4FF00] text-[10px] tracking-[0.4em] mb-8">{EDITORIAL_SPLIT_DATA.label}</p>
          <h2 className="gsap-scale-text font-oswald font-black text-5xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1] mb-8">
            {EDITORIAL_SPLIT_DATA.heading.map((word, i) => (
              <span key={i}>{word}<br className='' /></span>
            ))}
          </h2>
          <p className="gsap-reveal text-gray-500 text-lg leading-relaxed max-w-sm mb-10">{EDITORIAL_SPLIT_DATA.body}</p>
          <MagneticButton className="px-8 py-4 border border-white/20 text-white font-oswald text-xs tracking-[0.2em] flex items-center gap-4 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all">
            <span>{EDITORIAL_SPLIT_DATA.ctaText}</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
