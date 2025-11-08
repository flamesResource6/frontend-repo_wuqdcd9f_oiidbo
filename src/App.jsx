import React, { useRef, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';

// SEO metadata for the document head
const useSEO = () => {
  React.useEffect(() => {
    document.title = 'Nocode Saarthi Tech Services | Startup-as-a-Service';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Build your startup effortlessly — from idea to launch. AI + No-Code Startup-as-a-Service.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Build your startup effortlessly — from idea to launch. AI + No-Code Startup-as-a-Service.';
      document.head.appendChild(m);
    }
  }, []);
};

const App = () => {
  useSEO();
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [contact, setContact] = useState({ name: '', email: '', phone: '', description: '' });
  const [contactStatus, setContactStatus] = useState('idle');

  const submitContact = async (e) => {
    e.preventDefault();
    try {
      setContactStatus('loading');
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          description: contact.description,
          branding: 'No',
          service: 'Contact Form'
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setContactStatus('success');
      setContact({ name: '', email: '', phone: '', description: '' });
    } catch (err) {
      setContactStatus('error');
    }
  };

  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      {/* Hero with Spline cover */}
      <Hero onCTAClick={scrollToServices} />

      {/* Inner sections with ambient video background */}
      <section className="relative">
        <BackgroundVideo
          src="/videos/ambient-inner.mp4"
          fallbackImageUrl="/images/ambient-fallback.png"
          opacity={0.5}
        />
        <div className="relative z-10">
          <div ref={servicesRef}>
            <Services />
          </div>
          <Process />
          {/* Contact Section */}
          <section id="contact" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
                <p className="mt-3 text-white/70">Tell us about your idea — we’ll respond within 24 hours.</p>
              </div>
              <form onSubmit={submitContact} className="mt-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <input value={contact.name} onChange={(e)=>setContact({...contact,name:e.target.value})} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40" placeholder="Full Name" required />
                <input value={contact.email} onChange={(e)=>setContact({...contact,email:e.target.value})} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40" type="email" placeholder="Email" required />
                <input value={contact.phone} onChange={(e)=>setContact({...contact,phone:e.target.value})} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40 md:col-span-2" placeholder="Phone" />
                <textarea value={contact.description} onChange={(e)=>setContact({...contact,description:e.target.value})} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00E6FF]/40 md:col-span-2" rows={5} placeholder="Message" required />
                <div className="md:col-span-2 flex items-center gap-4">
                  <button type="submit" disabled={contactStatus==='loading'} className="rounded-full bg-[#00E6FF] text-black font-medium px-6 py-3 hover:brightness-110 transition">
                    {contactStatus==='loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  {contactStatus==='success' && <span className="text-[#00E6FF]">Thanks! We’ll be in touch shortly.</span>}
                  {contactStatus==='error' && <span className="text-red-400">Something went wrong. Try again.</span>}
                </div>
                <div className="md:col-span-2 text-left text-white/70 space-y-1 mt-4">
                  <div>📧 shivageethikarao2007@gmail.com</div>
                  <div>📞 +91 9381303043</div>
                  <div>📸 Instagram: @nocode_saarthi</div>
                </div>
              </form>
            </div>
          </section>

          {/* Legal Sections */}
          <section id="privacy" className="py-16 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
              <h3 className="text-2xl font-semibold">Privacy Policy</h3>
              <p className="mt-3 text-white/70">We collect only the information you provide to deliver our services and respond to your requests. Data is stored securely and never sold. You may request deletion of your data at any time by contacting us.</p>
            </div>
          </section>
          <section id="terms" className="py-16 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
              <h3 className="text-2xl font-semibold">Terms of Service</h3>
              <p className="mt-3 text-white/70">By engaging with Nocode Saarthi Tech Services, you agree to our scope, timeline, and payment terms outlined in project proposals. All work is performed on a best-effort basis with transparent milestones and approvals.</p>
            </div>
          </section>
          <section id="cyber" className="py-16 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
              <h3 className="text-2xl font-semibold">Cybersecurity Policy</h3>
              <p className="mt-3 text-white/70">We apply least-privilege access, encrypted storage where possible, and secure development practices. Credentials are stored securely and rotated as needed. We do not store production data unless explicitly required for delivery.</p>
            </div>
          </section>

          <Footer />
        </div>
      </section>
    </div>
  );
};

export default App;
