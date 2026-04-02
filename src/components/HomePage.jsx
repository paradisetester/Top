import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCounter, ScrambleText, TiltCard, Particles, MagneticButton, EKGLine } from './UIComponents';
import LogoMain from '../logos/logo-main.png';
import LogoIcon from '../logos/logo-icon.png';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [intake, setIntake] = useState({ height_ft: '', height_in: '', weight: '', level: '' });

  const gsapScopeRef = useRef(null);
  const horizontalRef = useRef(null);
  const videoSectionRef = useRef(null);

  const heroImages = ['/hero-focused.png', '/hero-sprint.png', '/hero-tape.png', '/hero-cones.png'];

  useEffect(() => {
    if (!isLoaded) return;
    const iv = setInterval(() => setHeroIndex((p) => (p + 1) % heroImages.length), 4000);
    return () => clearInterval(iv);
  }, [isLoaded, heroImages.length]);

  const [athleteCount, startAthletes] = useCounter(2847, 2500, true);
  const [programCount, startPrograms] = useCounter(12, 1500, true);
  const [stateCount, startStates] = useCounter(38, 2000, true);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 100]);
  const bgScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.15]);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => { const t = setTimeout(() => setIsLoaded(true), 1000); return () => clearTimeout(t); }, []);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setCursorGlow({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', h); return () => window.removeEventListener('mousemove', h);
  }, []);

  useLayoutEffect(() => {
    if (!isLoaded) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-reveal').forEach((el) => {
        gsap.from(el, {
          y: 80, opacity: 0, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
      });
      gsap.utils.toArray('.gsap-scale-text').forEach((el) => {
        gsap.from(el, {
          scale: 0.6, opacity: 0, duration: 1.5, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 80%', scrub: false }
        });
      });
      gsap.utils.toArray('.gsap-line').forEach((el) => {
        gsap.from(el, {
          scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
      });
      gsap.utils.toArray('.split-img').forEach((el) => {
        gsap.to(el, {
          yPercent: -10, ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
      });
      if (videoSectionRef.current) {
        videoSectionRef.current.querySelectorAll('.ken-burns-img').forEach((img) => {
          gsap.fromTo(img, { scale: 1 }, {
            scale: 1.15, ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 }
          });
        });
      }
      if (videoSectionRef.current) {
        videoSectionRef.current.querySelectorAll('.ken-burns-img').forEach((img) => {
          gsap.fromTo(img, { scale: 1 }, {
            scale: 1.15, ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 }
          });
        });
      }
    }, gsapScopeRef);
    return () => ctx.revert();
  }, [isLoaded]);

  const handleIntakeSubmit = () => {
    /* TODO: Route to Shopify product page based on intake.level */
    const shopifyBase = 'https://your-store.myshopify.com/collections/';
    const routes = { junior: 'junior-programs', varsity: 'varsity-programs', elite: 'elite-programs' };
    const url = routes[intake.level] || 'all';
    alert(`This would route to: ${shopifyBase}${url}\n\nConnect your Shopify store to enable this.`);
  };

  const programs = [
    { name: 'FIRST DAY PROTOCOL', price: '$79', tag: 'MINDSET', desc: 'Mental preparation system for walking into new environments with confidence and clarity.', spec: '7 modules', specLabel: 'PROGRAM' },
    { name: 'GAMEDAY MINDSET', price: '$99', tag: 'MENTAL', desc: 'Pre-game visualization, focus routines, and pressure simulation for peak performance.', spec: '12 sessions', specLabel: 'TRAINING' },
    { name: 'DAILY SYSTEMS', price: '$149', tag: 'ROUTINES', desc: 'Morning-to-night architecture. Nutrition, sleep, study, and training schedules that build champions.', spec: '90 days', specLabel: 'PROGRAM' },
    { name: 'SOCIAL OS', price: '$129', tag: 'IDENTITY', desc: 'How to carry yourself, build your personal brand, develop leadership, and navigate social dynamics.', spec: '8 weeks', specLabel: 'COURSE' },
    { name: 'THE COMPLETE OPERATOR', price: '$399', tag: 'FULL SYSTEM', desc: 'Every program. Every module. Mind, body, social, and system — the full 360° operating system.', spec: '∞', specLabel: 'ACCESS' },
  ];

  const pillars = [
    { title: 'MIND', desc: 'Psychology, visualization, focus training, and building an unbreakable mental framework.', image: '/pillar-mental.png', stat: '12', statLabel: 'MODULES' },
    { title: 'BODY', desc: 'Daily routines, nutrition science, recovery protocols, and physical system architecture.', image: '/pillar-physical.png', stat: '90', statLabel: 'DAY SYSTEM' },
    { title: 'SOCIAL', desc: 'Identity development, leadership, communication, and building your personal operating system.', image: '/pillar-social.png', stat: '8', statLabel: 'WEEK COURSE' },
    { title: 'SYSTEM', desc: 'AI-powered tracking, progress analytics, personalized paths, and performance dashboards.', image: '/pillar-system.png', stat: '24/7', statLabel: 'MONITORING' },
  ];

  const fadeUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.15, duration: 1.4 } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
  const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.2, duration: 1.2 } } };

  return (
    <>
      {/* LOADER */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center">
            <motion.img src={LogoIcon} alt="TOP" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="logo-img h-10 mb-6 opacity-80" />
            <motion.div initial={{ width: 0 }} animate={{ width: 160 }} transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }} className="h-[1px] bg-[#D4FF00]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={gsapScopeRef} className="min-h-screen bg-[#0A0A0A] text-white font-inter overflow-x-hidden selection:bg-[#D4FF00] selection:text-black scroll-smooth">
        <motion.div style={{ width: progressBarWidth }} className="fixed top-0 left-0 h-[2px] bg-[#D4FF00] z-[70] origin-left" />
        <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[60] opacity-[0.03] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, #D4FF00 0%, transparent 70%)', left: cursorGlow.x - 250, top: cursorGlow.y - 250, transition: 'left 0.3s ease-out, top 0.3s ease-out' }} />


        <motion.nav
          initial={{ y: -100 }}
          animate={isLoaded ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
          className="fixed top-0 left-0 w-full bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 z-50"
        >
          <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-2 md:grid-cols-3 items-center">
            {/* Logo Column */}
            <div className="flex items-center gap-3">
              <img src={LogoIcon} alt="TOP" className="logo-img h-8 cursor-pointer" />
              <span className="font-oswald text-2xl font-black tracking-tighter">TOP</span>
            </div>

            {/* Nav Links Column (Desktop Only) */}
            <div className="hidden md:flex justify-center space-x-12 font-oswald text-xs tracking-[0.25em] text-gray-500">
              {["SYSTEM", "PILLARS", "PROGRAMS"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="relative py-2 hover:text-white transition-colors group"
                >
                  {l}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4FF00] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right Actions Column */}
            <div className="flex items-center justify-end gap-6">
              {/* Desktop ENTER Button */}
              <button className="relative px-8 py-3 font-oswald text-xs tracking-[0.2em] text-[#D4FF00] border border-[#D4FF00]/30 overflow-hidden group hover:shadow-[0_0_20px_rgba(212,255,0,0.15)] transition-all duration-500 hidden md:block">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  ENTER
                </span>
                <div className="absolute inset-0 bg-[#D4FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-white hover:text-[#D4FF00]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="square"
                    strokeWidth="2"
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12" // X icon
                        : "M4 6h16M4 12h16M4 18h16" // hamburger
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-20 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5 z-40 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="flex flex-col items-center py-6 space-y-6 font-oswald text-lg text-gray-300">
              {["SYSTEM", "PILLARS", "PROGRAMS"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#D4FF00] transition-colors"
                >
                  {l}
                </a>
              ))}
              <button className="px-6 py-3 font-oswald text-xs tracking-[0.2em] text-[#D4FF00] border border-[#D4FF00]/30 hover:shadow-[0_0_20px_rgba(212,255,0,0.15)] transition-all duration-300">
                ENTER
              </button>
            </div>
          </div>
        </motion.nav>

        {/* HERO */}

        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
          <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0 bg-[#0A0A0A]">
            <AnimatePresence mode="sync">
              <motion.img key={heroIndex} src={heroImages[heroIndex]} alt="Athlete preparing"
                initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 0.3, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover" />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/20 to-[#0A0A0A] z-10" />
          </motion.div>
          <Particles count={15} />
          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            {isLoaded && (<>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-mono text-[#D4FF00] tracking-[0.5em] text-[10px] mb-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D4FF00] rounded-full animate-pulse" />OPERATING SYSTEM ACTIVE
              </motion.p>
              <motion.h1 initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }} animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-oswald font-black text-5xl md:text-[100px] leading-[0.95] tracking-tighter mb-6 whitespace-nowrap">
                ALL OR NOTHING
              </motion.h1>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-6">
                <p className="text-gray-500 max-w-lg text-base md:text-lg">
                  The operating system for your mind, body, and future.
                </p>
                <MagneticButton className="px-10 py-4 bg-white text-black font-oswald text-xs tracking-[0.2em] hover:bg-[#D4FF00] transition-colors">
                  ENTER THE SYSTEM
                </MagneticButton>
              </motion.div>
            </>)}
          </motion.div>
          <div className="absolute bottom-24 z-20 flex gap-2">
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => setHeroIndex(i)}
                className={`w-8 h-[2px] transition-all duration-500 ${i === heroIndex ? 'bg-[#D4FF00] w-12' : 'bg-white/20'}`} />
            ))}
          </div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
            <span className="text-gray-600 font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
            <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
              <motion.div animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-[#D4FF00] rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* ATHLETE INTAKE MODULE */}
        <section id="system" className="relative py-20 md:py-20 lg:py-28 px-6 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <p className="font-mono text-[#D4FF00] text-[10px] tracking-[0.4em] mb-4"><ScrambleText text="[ SYSTEM DIAGNOSTIC ]" delay={200} /></p>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-3">IDENTIFY YOUR LEVEL</h2>
              <p className="text-gray-500 text-sm">Enter your data. We'll match you to the right operating system.</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="font-mono text-[9px] tracking-[0.3em] text-gray-600 block mb-2">HEIGHT (FT)</label>
                  <input type="number" placeholder="5" value={intake.height_ft} onChange={(e) => setIntake({ ...intake, height_ft: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 font-oswald text-2xl text-white text-center focus:border-[#D4FF00] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-[0.3em] text-gray-600 block mb-2">HEIGHT (IN)</label>
                  <input type="number" placeholder="8" value={intake.height_in} onChange={(e) => setIntake({ ...intake, height_in: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 font-oswald text-2xl text-white text-center focus:border-[#D4FF00] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-[0.3em] text-gray-600 block mb-2">WEIGHT (LBS)</label>
                  <input type="number" placeholder="145" value={intake.weight} onChange={(e) => setIntake({ ...intake, weight: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 font-oswald text-2xl text-white text-center focus:border-[#D4FF00] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-[0.3em] text-gray-600 block mb-2">LEVEL</label>
                  <select value={intake.level} onChange={(e) => setIntake({ ...intake, level: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 font-oswald text-lg text-white text-center focus:border-[#D4FF00] focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option value="" className="bg-[#0A0A0A]">SELECT</option>
                    <option value="tier1" className="bg-[#0A0A0A]">TIER 1</option>
                    <option value="varsity" className="bg-[#0A0A0A]">VARSITY</option>
                    <option value="elite" className="bg-[#0A0A0A]">ELITE</option>
                  </select>
                </div>
              </div>
              <MagneticButton onClick={handleIntakeSubmit}
                className="w-full py-4 bg-[#D4FF00] text-black font-oswald text-sm tracking-[0.2em] font-bold hover:bg-white transition-colors">
                ENTER SYSTEM →
              </MagneticButton>
              <EKGLine className="mt-8 opacity-60" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}
          onViewportEnter={() => { startAthletes(); startPrograms(); startStates(); }}
          className="py-16 px-6 bg-[#0e0e0e] border-b border-white/5">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[{ v: athleteCount.toLocaleString() + '+', l: 'OPERATORS' }, { v: programCount, l: 'PROGRAMS' }, { v: stateCount, l: 'STATES' }].map((s, i) => (
              <div key={i}>
                <div className="font-oswald text-3xl md:text-6xl font-bold mb-2">{s.v}</div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-gray-600">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* MISSION */}
        <section className="py-20 sm:py-20 md:py-40 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <p className="gsap-reveal font-mono text-[#D4FF00] mb-10 text-[10px] tracking-[0.4em]"><ScrambleText text="[ 01 — THE PROTOCOL ]" delay={200} /></p>
            <h2 className="gsap-reveal font-oswald font-bold text-4xl md:text-6xl leading-[1.05] mb-8">WE DON'T SELL TRAINING.<br />WE INSTALL OPERATING SYSTEMS.</h2>
            <div className="gsap-line w-16 h-px bg-[#D4FF00]/40 mb-12" />
            <p className="gsap-reveal text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              TOP is not a workout program. It's a complete performance architecture for your mind, body, and social identity — designed by pro athletes and psychologists for the next generation of elite operators. From your first day of operation to your first championship, we engineer the systems that make you unstoppable.
            </p>
          </div>
        </section>

        {/* CINEMATIC EDITORIAL */}
        <section ref={videoSectionRef} className="relative overflow-hidden">
          <div className="relative h-[70vh] md:h-screen overflow-hidden">
            <img src="/editorial.png" alt="Athlete silhouette" className="ken-burns-img w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center max-w-4xl px-6">
                <h2 className="gsap-scale-text font-oswald font-black text-4xl md:text-[75px] leading-[1] tracking-tighter mb-6">YOUR MIND<br />IS THE MACHINE.</h2>
                <p className="gsap-reveal text-gray-400 text-lg max-w-md mx-auto">We don't just prepare athletes. We engineer the mental systems behind every win.</p>
              </div>
            </div>
          </div>
        </section>

        {/* YOUR FIRST OPERATING SYSTEM (reframed youth section) */}
        <section className="py-20 sm:py-20 lg:py-40 px-6 md:px-12 bg-[#0e0e0e] relative overflow-hidden">
          <div className="max-w-6xl mx-auto mb-20">
            <p className="gsap-reveal font-mono text-gray-600 mb-4 text-[10px] tracking-[0.4em]"><ScrambleText text="[ 01.B — FIRST INSTALL ]" delay={200} /></p>
            <h2 className="gsap-reveal font-oswald text-4xl sn:text-5xl md:text-6xl font-bold mb-6">YOUR ELITE<br class="hidden sm:inline" />OPERATING SYSTEM.</h2>
            <p className="gsap-reveal text-gray-400 max-w-xl text-lg leading-relaxed">
              The best operators didn't wait. They installed their systems early and upgraded every year. TOP is built for those who demand elite performance.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'INSTALL EARLY', desc: 'The elite didn\'t wait. They built their mental framework before the world took notice. Run on a higher system.', hl: 'Tier 1 → Elite' },
              { icon: '📊', title: 'TRACK EVERYTHING', desc: 'AI-powered dashboards show your progress across mind, body, and social development.', hl: 'Real-Time Data' },
              { icon: '🧠', title: 'BEYOND THE FIELD', desc: 'Confidence, leadership, identity, nutrition, routines — this system runs your entire life.', hl: 'Full Spectrum' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} whileHover={{ y: -6 }}
                className="bg-[#0A0A0A] border border-white/5 p-10 flex flex-col group hover:border-[#D4FF00]/20 transition-all duration-500 cursor-pointer">
                <div className="text-3xl mb-6">{item.icon}</div>
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#D4FF00] mb-4">Elite Operator</div>
                <h3 className="font-oswald text-xl font-bold mb-4 group-hover:text-[#D4FF00] transition-colors">ESTABLISH DOMINANCE</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Build your mental framework before everyone else and run on an elite system.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PILLARS */}
        <section id="pillars" className="py-20 sm:py-20 lg:py-40 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <motion.div animate={{ x: [0, -120, 80, 0], y: [0, 80, -60, 0] }} transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4FF00]/[0.02] rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-6xl mx-auto mb-10 mb:sm-10 md:mb-15">
            <p className="gsap-reveal font-mono text-gray-600 mb-4 text-[10px] tracking-[0.4em]"><ScrambleText text="[ 02 — ARCHITECTURE ]" delay={200} /></p>
            <h2 className="gsap-reveal font-oswald text-4xl sm:text-5xl md:text-6xl font-bold">THE FOUR PILLARS</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
                <TiltCard className="relative bg-[#111] border border-white/5 overflow-hidden group cursor-pointer hover:border-[#D4FF00]/30 transition-all duration-500">
                  <div className="absolute inset-0"><img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" /></div>
                  <div className="relative z-10 p-10 md:p-12 flex flex-col min-h-[280px]" style={{ transform: 'translateZ(40px)' }}>
                    <div className="flex justify-between items-start mb-8">
                      <p className="font-mono text-[10px] text-[#D4FF00]/50 tracking-[0.3em]">PILLAR_0{i + 1}</p>
                      <div className="text-right"><div className="font-oswald text-2xl font-bold">{item.stat}</div><div className="font-mono text-[8px] tracking-[0.2em] text-gray-600">{item.statLabel}</div></div>
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-oswald text-3xl font-bold mb-3 group-hover:text-[#D4FF00] transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-6 h-px bg-[#D4FF00]/20 group-hover:w-12 transition-all" />
                  <div className="absolute top-0 left-0 w-px h-6 bg-[#D4FF00]/20 group-hover:h-12 transition-all" />
                  <div className="absolute bottom-0 right-0 w-6 h-px bg-[#D4FF00]/20 group-hover:w-12 transition-all" />
                  <div className="absolute bottom-0 right-0 w-px h-6 bg-[#D4FF00]/20 group-hover:h-12 transition-all" />
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROGRAMS — Grid Layout */}
        <section className="relative py-20 sm:py-20 lg:py-40 px-6 md:px-12 bg-[#0e0e0e] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-5 sm:mb-20 text-center">
              <p className="font-mono text-[#D4FF00] mb-6 text-[10px] tracking-[0.4em]"><ScrambleText text="[ 03 — PROGRAMS ]" delay={200} /></p>
              <h2 className="font-oswald text-4xl sm:text-6xl md:text-6xl font-bold leading-[0.9] mb-8">THE PROGRAMS</h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">Mental frameworks, life systems, and performance architectures — not workouts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                  className="w-full bg-[#0A0A0A] border border-white/5 flex flex-col group cursor-pointer hover:border-[#D4FF00]/30 transition-all duration-500 min-h-[500px]">
                  <div className="h-48 w-full relative overflow-hidden bg-[#111] flex items-center justify-center">
                    <div className="text-center"><div className="font-oswald text-6xl font-black text-white/5 group-hover:text-[#D4FF00]/10 transition-colors">0{i + 1}</div></div>
                    <div className="absolute top-4 right-4"><span className="font-mono text-[9px] tracking-[0.2em] text-black bg-[#D4FF00] px-3 py-1 font-bold">{item.tag}</span></div>
                    <EKGLine className="absolute bottom-0 left-0 opacity-20" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-gray-600">{item.tag}</span>
                      <span className="font-oswald text-2xl font-bold text-[#D4FF00]">{item.price}</span>
                    </div>
                    <h3 className="font-oswald font-bold text-xl mb-3 group-hover:text-[#D4FF00] transition-colors">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                    <div className="flex items-center mb-6">
                      <span className="font-oswald text-lg font-bold">{item.spec}</span>
                      <span className="font-mono text-[8px] tracking-[0.2em] text-gray-600 ml-2">{item.specLabel}</span>
                    </div>
                    <button onClick={() => alert('Connect Shopify to enable purchasing.')}
                      className="w-full py-4 border border-white/10 text-gray-300 font-oswald text-[10px] tracking-[0.2em] flex items-center justify-between px-6 group-hover:bg-[#D4FF00] group-hover:text-black group-hover:border-[#D4FF00] transition-all">
                      <span>ADD TO SYSTEM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 flex justify-center">
              <MagneticButton className="px-10 py-4 bg-[#D4FF00] text-black font-oswald text-xs tracking-[0.2em] font-bold hover:bg-white transition-colors">VIEW ALL PROGRAMS</MagneticButton>
            </div>
          </div>
        </section>

        {/* EDITORIAL SPLITS */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="relative h-[60vh] md:h-auto overflow-hidden">
            <img src="/editorial-2.png" alt="Training" className="split-img w-full h-[120%] object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A] hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent md:hidden" />
          </div>
          <div className="bg-[#0A0A0A] flex items-center px-8 md:px-16 py-20 md:py-0">
            <div>
              <div className="gsap-line w-10 h-px bg-[#D4FF00] mb-6" />
              <p className="gsap-reveal font-mono text-[#D4FF00] text-[10px] tracking-[0.4em] mb-8">— MENTAL ARCHITECTURE</p>
              <h2 className="gsap-scale-text font-oswald font-black text-5xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1] mb-8">
                THE<br className='' />
                SYSTEM<br className='' />
                STARTS<br className='' />
                HERE.
              </h2>
              <p className="gsap-reveal text-gray-500 text-lg leading-relaxed max-w-sm mb-10">Psychology. Routines. Nutrition. Social intelligence. One system. Every advantage.</p>
              <MagneticButton className="px-8 py-4 border border-white/20 text-white font-oswald text-xs tracking-[0.2em] flex items-center gap-4 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all">
                <span>EXPLORE PROGRAMS</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-20 lg:py-40 px-6 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="gsap-reveal font-mono text-[#D4FF00] mb-8 text-[10px] tracking-[0.4em]"><ScrambleText text="[ INITIALIZE ]" delay={300} /></p>
            <h2 className="gsap-scale-text font-oswald text-5xl md:text-7xl font-bold mb-8 leading-tight md:leading-none">
              READY TO<br />OPERATE?
            </h2>
            <p className="gsap-reveal text-gray-500 text-lg mb-12 max-w-md mx-auto">Install your operating system. Join thousands who already run on TOP.</p>
            <EKGLine className="mb-12 opacity-40" />
            <MagneticButton className="px-16 py-6 bg-[#D4FF00] text-black font-oswald text-sm tracking-[0.2em] font-bold hover:bg-white transition-colors">ENTER THE SYSTEM</MagneticButton>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0e0e0e] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <img src={LogoMain} alt="TOP" className="logo-img h-8 mb-6 opacity-80" />
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">The operating system for athletes who refuse to be average. Mind. Body. Social. System.</p>
              </div>
              <div>
                <h4 className="font-oswald text-xs tracking-[0.2em] text-gray-400 mb-6">NAVIGATE</h4>
                <div className="flex flex-col space-y-3">
                  {['System', 'Pillars', 'Programs'].map((l) => (<a key={l} href={`#${l.toLowerCase()}`} className="text-gray-600 hover:text-[#D4FF00] text-sm transition-colors">{l}</a>))}
                </div>
              </div>
              <div>
                <h4 className="font-oswald text-xs tracking-[0.2em] text-gray-400 mb-6">CONNECT</h4>
                <div className="flex flex-col space-y-3">
                  {['Instagram', 'Twitter/X', 'TikTok'].map((s) => (<a key={s} href="#" className="text-gray-600 hover:text-[#D4FF00] text-sm transition-colors">{s}</a>))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-700 text-xs tracking-widest font-mono">© {new Date().getFullYear()} TOP — ALL OR NOTHING</div>
              <div className="font-mono text-[#D4FF00]/30 text-[9px] tracking-[0.3em]">SYSTEM v2.0</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
