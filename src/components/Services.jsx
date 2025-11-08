import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { title: 'Startup-as-a-Service', desc: 'End-to-end startup building — strategy, design, build, and launch.' },
  { title: 'MVP Development', desc: 'Rapid no-code + AI MVPs built in days, not months.' },
  { title: 'AI Agents & Automation', desc: 'Intelligent workflows, agents, and automations that scale.' },
  { title: 'Dedicated Tech Pods', desc: 'On-demand product, design, and automation squads.' },
  { title: 'Corporate AI Labs', desc: 'Private AI innovation labs to modernize your org.' },
];

const Modal = ({ open, onClose, service }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', description: '', branding: 'No' });
  const [status, setStatus] = useState('idle');
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus('loading');
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: service?.title }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0B0B0D]/90 backdrop-blur-md p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{service?.title}</h3>
              <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
            </div>
            <p className="mt-1 text-sm text-white/70">Tell us a bit about your idea and we’ll be in touch shortly.</p>

            {status === 'success' ? (
              <div className="mt-6 text-[#00E6FF]">Thanks! We received your request. We’ll email you shortly.</div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40" name="phone" placeholder="Phone Number" onChange={handleChange} />
                <textarea className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40" rows={4} name="description" placeholder="Describe your idea / requirement" onChange={handleChange} required />
                <select name="branding" onChange={handleChange} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40">
                  <option>No</option>
                  <option>Yes</option>
                </select>
                <button type="submit" disabled={status==='loading'} className="w-full rounded-full bg-[#00E6FF] text-black font-medium py-3 hover:brightness-110 transition">
                  {status==='loading' ? 'Submitting...' : 'Submit'}
                </button>
                {status==='error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Services = () => {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="relative py-20 bg-[#0B0B0D] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
          <p className="mt-3 text-white/70">AI + No-Code solutions to ideate, design, build, and scale — at the speed of thought.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.button
              key={s.title}
              onClick={() => { setActiveService(s); setOpen(true); }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left hover:border-[#00E6FF]/30 transition group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">{s.title}</h3>
                <span className="text-[#00E6FF] opacity-0 group-hover:opacity-100 transition">→</span>
              </div>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} service={activeService} />
    </section>
  );
};

export default Services;
