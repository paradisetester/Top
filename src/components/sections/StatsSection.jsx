import { motion } from 'motion/react';
import { useCounter } from '../UIComponents';

const STATS_DATA = [
  { target: 3847, duration: 2500, suffix: '', label: 'MEMBERS' },
  { target: 16, duration: 1500, suffix: '', label: 'SYSTEMS' },
  { target: 38, duration: 2000, suffix: '', label: 'STATES' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.15, duration: 1.4 } },
};

export default function StatsSection() {
  const [count0, start0] = useCounter(STATS_DATA[0].target, STATS_DATA[0].duration, true);
  const [count1, start1] = useCounter(STATS_DATA[1].target, STATS_DATA[1].duration, true);
  const [count2, start2] = useCounter(STATS_DATA[2].target, STATS_DATA[2].duration, true);

  const counts = [count0, count1, count2];
  const starters = [start0, start1, start2];

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}
      onViewportEnter={() => { starters.forEach((s) => s()); }}
      className="relative py-16 px-6 bg-[#0e0e0e] border-b border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
        {STATS_DATA.map((s, i) => (
          <div key={i}>
            <div className="font-oswald text-3xl md:text-6xl font-bold mb-2">
              {i === 0 ? counts[i].toLocaleString() : counts[i]}{s.suffix}
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
