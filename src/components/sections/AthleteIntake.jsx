import { useState } from 'react';
import { ScrambleText, MagneticButton, EKGLine } from '../UIComponents';

const INTAKE_DATA = {
  label: '[ PROGRAM INTAKE ]',
  heading: 'DETERMINE YOUR TIER',
  subtitle: "Enter your metrics. We'll match you to the right operating system.",
  submitText: 'GET RESULTS →',
  shopifyBase: 'https://top-ae.com',
  fields: [
    { key: 'height_ft', label: 'HEIGHT (FT)', placeholder: '5', type: 'number' },
    { key: 'height_in', label: 'HEIGHT (IN)', placeholder: '8', type: 'number' },
    { key: 'weight', label: 'WEIGHT (LBS)', placeholder: '145', type: 'number' },
  ],
  levels: [
    { value: 'foundation', label: 'AGE/ 12 TO 15' },
    { value: 'varsity', label: 'AGE/ 16 TO 21' },
    { value: 'elite', label: 'AGE/ 22 TO 35' },
  ],
  routes: {
    foundation: '/products/summer-evolution',
    varsity: '/products/varsity-program',
    elite: '/products/elite-program',
  },
};

export default function AthleteIntake() {
  const [intake, setIntake] = useState({ height_ft: '', height_in: '', weight: '', level: 'foundation' });

  const handleIntakeSubmit = () => {
    const route = INTAKE_DATA.routes[intake.level];
    if (route) {
      window.open(`${INTAKE_DATA.shopifyBase}${route}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="system" className="relative py-20 md:py-20 lg:py-28 px-6 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="font-mono text-[#D4FF00] text-[10px] tracking-[0.4em] mb-4"><ScrambleText text={INTAKE_DATA.label} delay={200} /></p>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-3">{INTAKE_DATA.heading}</h2>
          <p className="text-gray-500 text-sm">{INTAKE_DATA.subtitle}</p>
        </div>
        <div className="bg-[#111] border border-white/5 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {INTAKE_DATA.fields.map((field) => (
              <div key={field.key}>
                <label className="font-mono text-[9px] tracking-[0.3em] text-gray-600 block mb-2">{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} value={intake[field.key]} onChange={(e) => setIntake({ ...intake, [field.key]: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 font-oswald text-2xl text-white text-center focus:border-[#D4FF00] focus:outline-none transition-colors" />
              </div>
            ))}
            <div>
              <label className="font-mono text-[9px] tracking-[0.3em] text-gray-600 block mb-2">LEVEL</label>
              <select value={intake.level} onChange={(e) => setIntake({ ...intake, level: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 font-oswald text-lg text-white text-center focus:border-[#D4FF00] focus:outline-none transition-colors appearance-none cursor-pointer">
                {INTAKE_DATA.levels.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0A0A0A]">{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
          <MagneticButton onClick={handleIntakeSubmit}
            className="w-full py-4 bg-[#D4FF00] text-black font-oswald text-sm tracking-[0.2em] font-bold hover:bg-white transition-colors">
            {INTAKE_DATA.submitText}
          </MagneticButton>
          <EKGLine className="mt-8 opacity-60" />
        </div>
      </div>
    </section>
  );
}
