import { useState, useEffect, useRef, useCallback } from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'motion/react';

/* ─── Animated Counter ─── */
export function useCounter(target, duration = 2000, startOnView = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, hasStarted]);
  return [count, () => setHasStarted(true)];
}

/* ─── Text Scramble ─── */
export function ScrambleText({ text, className, delay = 0 }) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const [display, setDisplay] = useState('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let iter = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        setDisplay(text.split('').map((c, i) => {
          if (' []-—.'.includes(c)) return c;
          if (i < iter) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        iter += 1.5;
        if (iter > text.length) clearInterval(iv);
      }, 20);
    }, delay);
    return () => clearTimeout(t);
  }, [inView, text, delay]);
  return <span ref={ref} className={className}>{display || text}</span>;
}

/* ─── 3D Tilt Card ─── */
export function TiltCard({ children, className, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const handleMouse = useCallback((e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }, [x, y]);
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/* ─── Particles ─── */
export function Particles({ count = 15 }) {
  const ps = useRef(Array.from({ length: count }, () => ({
    x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 2 + 0.5, dur: Math.random() * 20 + 15, del: Math.random() * 5,
  }))).current;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {ps.map((p, i) => (
        <motion.div key={i} initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{ y: [`${p.y}vh`, `${p.y - 30}vh`, `${p.y}vh`], opacity: [0, 0.4, 0] }}
          transition={{ repeat: Infinity, duration: p.dur, delay: p.del, ease: 'easeInOut' }}
          className="absolute rounded-full bg-[#D4FF00]" style={{ width: p.size, height: p.size }} />
      ))}
    </div>
  );
}

/* ─── Magnetic Button ─── */
export function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  const hm = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  return (
    <motion.button ref={ref} onMouseMove={hm} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: sx, y: sy }} className={className} {...props}>{children}</motion.button>
  );
}

/* ─── EKG Pulse Line ─── */
export function EKGLine({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 1200 60" className="w-full h-8" preserveAspectRatio="none">
        <path
          d="M0,30 L200,30 L220,30 L230,10 L240,50 L250,5 L260,55 L270,30 L290,30 L500,30 L520,30 L530,10 L540,50 L550,5 L560,55 L570,30 L590,30 L800,30 L820,30 L830,10 L840,50 L850,5 L860,55 L870,30 L890,30 L1100,30 L1120,30 L1130,10 L1140,50 L1150,5 L1160,55 L1170,30 L1200,30"
          fill="none" stroke="#D4FF00" strokeWidth="2" className="ekg-line" />
        <path
          d="M0,30 L200,30 L220,30 L230,10 L240,50 L250,5 L260,55 L270,30 L290,30 L500,30 L520,30 L530,10 L540,50 L550,5 L560,55 L570,30 L590,30 L800,30 L820,30 L830,10 L840,50 L850,5 L860,55 L870,30 L890,30 L1100,30 L1120,30 L1130,10 L1140,50 L1150,5 L1160,55 L1170,30 L1200,30"
          fill="none" stroke="#D4FF00" strokeWidth="2" opacity="0.15" className="ekg-glow" style={{ filter: 'blur(4px)' }} />
      </svg>
    </div>
  );
}
/* ─── System Detail Modal ─── */
export function SystemModal({ system, onClose }) {
  if (!system) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Technical Border Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4FF00] z-20" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4FF00] z-20" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4FF00] z-20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4FF00] z-20" />

        {/* Header with Close Button */}
        <div className="sticky top-0 right-0 p-6 md:p-8 flex justify-end z-30 pointer-events-none">
          <button 
            onClick={onClose}
            className="pointer-events-auto p-2 bg-black/50 border border-white/10 text-gray-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-16 pt-0 md:pt-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative z-10">
            <span className="font-mono text-[10px] text-[#D4FF00] mb-4 block uppercase tracking-[0.5em]">
              SYSTEM_PROTOCOL // 0{system.id}
            </span>
            
            <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white mb-10 uppercase tracking-tighter leading-none">
              {system.name || system.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] text-gray-500 uppercase mb-3 tracking-[0.3em]">Full Descriptor</p>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-inter font-light italic">
                    {system.text}
                  </p>
                </div>
                
                <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5">
                  <p className="font-mono text-[10px] text-[#D4FF00] uppercase mb-4 tracking-[0.3em]">Operational Bundle</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{system.bundle}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 md:p-8 bg-[#D4FF00]/[0.03] border border-[#D4FF00]/10">
                  <p className="font-mono text-[10px] text-[#D4FF00] uppercase mb-4 tracking-[0.3em]">The System Hook</p>
                  <p className="text-sm text-[#D4FF00]/90 leading-relaxed font-bold italic">
                    "{system.hook}"
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">System Requirements</p>
                  <div className="flex flex-wrap gap-2">
                    {['100% Commitment', 'Zero Friction', 'High Output'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[8px] text-gray-400 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#D4FF00] rounded-full animate-pulse" />
                <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Protocol Initialised</span>
              </div>
              <button 
                onClick={onClose}
                className="font-oswald text-xs text-[#D4FF00] tracking-[0.4em] uppercase hover:translate-x-2 transition-transform flex items-center gap-4 group"
              >
                Close Interface
                <div className="w-12 h-[1px] bg-[#D4FF00] group-hover:w-20 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
