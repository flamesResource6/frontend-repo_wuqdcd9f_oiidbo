import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Share Idea', desc: 'Describe your vision and goals.' },
  { title: 'Design', desc: 'Map flows, brand, and system architecture.' },
  { title: 'Build', desc: 'AI + no-code development at lightning speed.' },
  { title: 'Launch', desc: 'Deploy, analyze, iterate, and scale.' },
];

const Process = () => {
  return (
    <section id="process" className="relative py-20 bg-[#0B0B0D] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Process</h2>
          <p className="mt-3 text-white/70">A precise, repeatable system for building startups.</p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[720px] grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-[#00E6FF] font-semibold">{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-xl font-medium">{s.title}</div>
                <div className="mt-1 text-white/70">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
