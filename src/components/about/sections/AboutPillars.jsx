import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from '../../UIComponents';

const PILLARS_DATA = [
  {
    title: 'THE KINETIC PILLAR',
    subtitle: 'Physical Mastery & Bio-Mechanical Efficiency',
    content: 'Training is more than just "exercise"; it’s about the technical efficiency of your engine. We focus on the Kinetic Chain - ensuring your body moves as one fluid, powerful unit, regardless of age or occupation.',
    points: [
      'Functional Mobility: Moving beyond basic stretching to achieve a professional range of motion and long-term injury resilience.',
      'Explosive Output: High-intensity movements designed to build raw power and maintain metabolic health.',
      'The Growth Phase: Shifting the mindset from "working out" to "recovering." You don\'t get stronger during the effort; you get stronger during the rest.'
    ],
    image: '/pillar-physical.png',
    stat: '90',
    statLabel: 'DAY SYSTEM'
  },
  {
    title: 'THE FUELING ALGORITHM',
    subtitle: 'Biology Over Dieting',
    content: 'To perform like a pro, you must fuel like one. We treat nutrition as a biological algorithm designed to keep your energy stable and your mind sharp from the morning meeting to the final whistle.',
    points: [
      'Circadian Rhythm Syncing: Mastering sleep cycles and morning sunlight to dictate peak energy levels and hormonal balance.',
      'The "Clean Pro" Protocol: Utilizing low-carb principles to manage insulin, eliminate brain fog, and maintain unwavering focus.',
      'Cellular Hydration: Moving past sugary drinks and into the science of electrolytes and deep cellular hydration.'
    ],
    image: '/pillar-recovery.png',
    stat: '100%',
    statLabel: 'REGENERATION'
  },
  {
    title: 'THE MENTAL FIREWALL',
    subtitle: 'Psychological Warfare & Vision',
    content: 'The world is noisy. The Mental Firewall is about protecting your focus and installing an "All or Nothing" mindset that survives the pressure of the boardroom or the big game.',
    points: [
      'Internal Narrative: Deleting "I can’t" and installing the "I will" software.',
      'Goal Mapping: Converting vague "wants" into concrete 90-day objectives with a clear path to execution.',
      'The Clutch Factor: Breathwork and focus drills designed to help you dominate high-stakes moments when everyone else is panicking.'
    ],
    image: '/pillar-mental.png',
    stat: '12',
    statLabel: 'MODULES'
  },
  {
    title: 'THE DISCIPLINE PROTOCOL',
    subtitle: 'Habit Architecture & Routines',
    content: 'Where Elite Habits meet the professional schedule. We build the "winning muscle" through non-negotiable daily standards that separate the amateurs from the icons.',
    points: [
      'The 3:30 AM Standard: It’s not just about the time you wake up; it’s about the commitment to a disciplined, intentional start to the day.',
      'Stacking Wins: Small, daily victories - cold showers, reading, a disciplined environment - that build unbreakable momentum.',
      'Time Management: Treating your 24 hours like a business. We teach you how to block time for training, deep work, and recovery like a CEO.'
    ],
    image: '/pillar-system.png',
    stat: '24/7',
    statLabel: 'MONITORING'
  },
  {
    title: 'THE SOCIAL INTERFACE',
    subtitle: 'Status, Leadership & Presence',
    content: 'Success is visible. The Social Interface is about how you carry yourself in the world - teaching you how to command respect and lead with authority.',
    points: [
      'The Athlete’s Aesthetic: Grooming, hygiene, and physical presence. When you "walk the walk," the world responds differently to your presence.',
      'Leadership Dynamics: Learning to lead a team, a company, or a social circle without being a bully or a follower.',
      'Social Engineering: Navigating complex social environments - talking to coaches, board members, and peers with the confidence of a leader.'
    ],
    image: '/pillar-social.png',
    stat: '8',
    statLabel: 'WEEK COURSE'
  }
];

export default function AboutPillars() {
  return (
    <section className="py-10 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-32">
        {PILLARS_DATA.map((pillar, i) => {
          const id = pillar.title.split(' ')[1].toLowerCase();
          return (
            <motion.div
              key={i}
              id={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2">
                <TiltCard className="relative aspect-[4/5] bg-[#111] border border-white/5 overflow-hidden group">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                  <div className="absolute top-8 left-8">
                    <p className="font-mono text-[10px] text-[#D4FF00] tracking-[0.3em]">PILLAR_0{i + 1}</p>
                  </div>

                  <div className="absolute bottom-8 right-8 text-right">
                    <div className="font-oswald text-4xl font-bold">{pillar.stat}</div>
                    <div className="font-mono text-[10px] tracking-[0.2em] text-gray-500">{pillar.statLabel}</div>
                  </div>
                </TiltCard>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-2 tracking-tight">{pillar.title}</h2>
                  <p className="text-[#D4FF00] font-mono text-xs tracking-[0.3em] uppercase opacity-80">{pillar.subtitle}</p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {pillar.content}
                </p>

                <div className="space-y-6">
                  {pillar.points.map((point, pi) => {
                    const [title, desc] = point.split(': ');
                    return (
                      <div key={pi} className="flex gap-4">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-[#D4FF00] flex-shrink-0" />
                        <div>
                          <span className="text-white font-bold block mb-1">{title}</span>
                          <span className="text-gray-500 text-sm">{desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
