import { ScrambleText } from '../UIComponents';

const MISSION_DATA = {
  label: '[ 01 — THE PROTOCOL ]',
  heading: "WE DON'T SELL TRAINING.",
  headingLine2: 'WE OPTIMIZE YOUR OUTPUT.',
  body: "TOP is not merely a workout program, but a series of integrated systems geared toward one result: your optimal self. It's a complete performance architecture for your mind, body, and social identity - designed by pro athletes and psychologists for the next generation of elite performers. From your first day of implementation to your defining win, we engineer the systems that make you unstoppable.",
};

export default function MissionSection() {
  return (
    <section className="py-20 sm:py-20 md:py-40 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <p className="gsap-reveal font-mono text-[#D4FF00] mb-10 text-[10px] tracking-[0.4em]"><ScrambleText text={MISSION_DATA.label} delay={200} /></p>
        <h2 className="gsap-reveal font-oswald font-bold text-4xl md:text-6xl leading-[1.05] mb-8">{MISSION_DATA.heading}<br />{MISSION_DATA.headingLine2}</h2>
        <div className="gsap-line w-16 h-px bg-[#D4FF00]/40 mb-12" />
        <p className="gsap-reveal text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          {MISSION_DATA.body}
        </p>
      </div>
    </section>
  );
}
