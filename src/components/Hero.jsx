import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-screen w-full bg-[#0B0B0D] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-[#0B0B0D]/10 to-[#0B0B0D]/60" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Your Startup. As a Service.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-5 text-lg sm:text-xl text-white/80"
          >
            You share your idea. We build everything — from MVP to launch.
          </motion.p>

          <motion.button
            onClick={onCTAClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 backdrop-blur-md bg-white/5 text-white border border-white/10 hover:border-[#00E6FF]/40 hover:shadow-[0_0_0_2px_rgba(0,230,255,0.15)] hover:shadow-cyan-400/20 transition-all"
            style={{ boxShadow: '0 0 24px rgba(0,230,255,0.15)' }}
          >
            <span className="font-medium">Start My Startup</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
