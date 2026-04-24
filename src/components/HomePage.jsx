import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  Loader,
  Navbar,
  HeroSection,
  AthleteIntake,
  StatsSection,
  MissionSection,
  CinematicEditorial,
  FirstOSSection,
  PillarsSection,
  ProgramsSection,
  EditorialSplit,
  CTASection,
  Footer,
} from './sections';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const gsapScopeRef = useRef(null);
  const videoSectionRef = useRef(null);

  const { scrollYProgress } = useScroll();
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
    }, gsapScopeRef);
    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <>
      {/* LOADER */}
      <Loader isLoaded={isLoaded} />

      <div ref={gsapScopeRef} className="min-h-screen bg-[#0A0A0A] text-white font-inter overflow-x-hidden selection:bg-[#D4FF00] selection:text-black scroll-smooth">
        <motion.div style={{ width: progressBarWidth }} className="fixed top-0 left-0 h-[2px] bg-[#D4FF00] z-[70] origin-left" />
        <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[60] opacity-[0.03] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, #D4FF00 0%, transparent 70%)', left: cursorGlow.x - 250, top: cursorGlow.y - 250, transition: 'left 0.3s ease-out, top 0.3s ease-out' }} />

        {/* NAVIGATION */}
        <Navbar isLoaded={isLoaded} />

        {/* HERO */}
        <HeroSection isLoaded={isLoaded} />

        {/* ATHLETE INTAKE MODULE */}
        <AthleteIntake />

        {/* STATS */}
        <StatsSection />

        {/* MISSION */}
        <MissionSection />

        {/* CINEMATIC EDITORIAL */}
        <CinematicEditorial ref={videoSectionRef} />

        {/* YOUR FIRST OPERATING SYSTEM */}
        <FirstOSSection />

        {/* PILLARS */}
        <PillarsSection />

        {/* PROGRAMS */}
        <ProgramsSection />

        {/* EDITORIAL SPLITS */}
        <EditorialSplit />

        {/* CTA */}
        <CTASection />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
