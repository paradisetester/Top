import { useState } from 'react';
import { motion } from 'motion/react';
import LogoIcon from '../../logos/logo-icon.png';

const NAV_DATA = {
  // brandName: 'TOP',
  links: ['WHY TOP', 'SYSTEMS', 'CONTACT'],
  ctaText: 'ENTER',
};

export default function Navbar({ isLoaded }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={isLoaded ? { y: 0 } : {}}
      transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
      className="fixed top-0 left-0 w-full bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo Column */}
        <div className="flex items-center gap-3">
          <img src={LogoIcon} alt={NAV_DATA.brandName} className="logo-img h-8 cursor-pointer" />
          <span className="font-oswald text-2xl font-black tracking-tighter">{NAV_DATA.brandName}</span>
        </div>

        {/* Nav Links Column (Desktop Only) */}
        <div className="hidden md:flex justify-center space-x-12 font-oswald text-xs tracking-[0.25em] text-gray-500">
          {NAV_DATA.links.map((l) => (
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
              {NAV_DATA.ctaText}
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
          {NAV_DATA.links.map((l) => (
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
            {NAV_DATA.ctaText}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
