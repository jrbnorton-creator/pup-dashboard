import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ColourfulText from './ColourfulText';
import Orbs from './Orbs';

interface WelcomePageProps {
  onEnter: () => void;
}

const blurIn = (delay: number) => ({
  initial: { opacity: 0, filter: 'blur(12px)', y: -8 },
  animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
  transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], delay },
});

export default function WelcomePage({ onEnter }: WelcomePageProps) {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setButtonVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="aurora-wrap min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: '#09090b' }}
    >
      <div className="aurora-layer" />
      <Orbs />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-8 left-8 z-20"
      >
        <img
          src="./images/antlab-logo.png"
          alt="Antlab"
          className="h-14 brightness-0 invert opacity-90"
        />
      </motion.div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div {...blurIn(0.3)} className="mb-4">
          <h1 className="text-4xl md:text-[3.5rem] font-extralight leading-tight tracking-tight">
            <ColourfulText text="Pumped Up Plumbing" />
          </h1>
        </motion.div>

        <motion.div {...blurIn(0.5)} className="mb-10">
          <p className="text-base text-neutral-500 font-light tracking-wide">
            Xero Clean Report
          </p>
        </motion.div>

        <motion.div {...blurIn(0.7)} className="flex items-center justify-center gap-8 mb-16">
          <span className="text-xs text-neutral-500 tracking-widest uppercase">Limited company</span>
          <span className="w-1 h-1 rounded-full bg-neutral-700" />
          <span className="text-xs text-neutral-500 tracking-widest uppercase">FY 2025/26</span>
          <span className="w-1 h-1 rounded-full bg-neutral-700" />
          <span className="text-xs text-neutral-500 tracking-widest uppercase">February 2026</span>
        </motion.div>

        <div
          className="transition-all duration-700 flex justify-center"
          style={{
            opacity: buttonVisible ? 1 : 0,
            filter: buttonVisible ? 'blur(0px)' : 'blur(12px)',
            transform: buttonVisible ? 'translateY(0)' : 'translateY(-8px)',
          }}
        >
          <button
            onClick={onEnter}
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span>Open Dashboard</span>
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 text-center z-10">
        <p className="text-[10px] text-neutral-600 tracking-widest uppercase">
          Confidential. Prepared by Antlab Ltd.
        </p>
      </div>
    </div>
  );
}
