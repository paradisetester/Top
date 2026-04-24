import { motion, AnimatePresence } from 'motion/react';
import LogoIcon from '../../logos/logo-icon.png';

const LOADER_DATA = {
  alt: 'TOP',
  exitClipPath: 'inset(0 0 100% 0)',
  exitDuration: 0.6,
  exitEase: [0.76, 0, 0.24, 1],
  barWidth: 160,
  barDelay: 0.2,
  barDuration: 0.6,
};

export default function Loader({ isLoaded }) {
  const d = LOADER_DATA;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          exit={{ clipPath: d.exitClipPath }}
          transition={{ duration: d.exitDuration, ease: d.exitEase }}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center"
        >
          <motion.img
            src={LogoIcon}
            alt={d.alt}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="logo-img h-10 mb-6 opacity-80"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: d.barWidth }}
            transition={{ delay: d.barDelay, duration: d.barDuration, ease: 'easeInOut' }}
            className="h-[1px] bg-[#D4FF00]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
