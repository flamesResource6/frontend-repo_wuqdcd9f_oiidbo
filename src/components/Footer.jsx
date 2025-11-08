import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0D] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-xl font-semibold">Nocode Saarthi Tech Services</h3>
            <p className="mt-2 text-white/70 max-w-sm">Build your startup effortlessly — from idea to launch. AI + No-Code Startup-as-a-Service.</p>
          </div>

          <div>
            <h4 className="font-medium">Contact</h4>
            <ul className="mt-2 text-white/70 space-y-1">
              <li>📧 shivageethikarao2007@gmail.com</li>
              <li>📞 +91 9381303043</li>
              <li>📸 Instagram: @nocode_saarthi</li>
            </ul>
          </div>

          <div className="md:text-right">
            <a href="#privacy" className="text-white/70 hover:text-white mr-4">Privacy</a>
            <a href="#terms" className="text-white/70 hover:text-white mr-4">Terms</a>
            <a href="#cyber" className="text-white/70 hover:text-white">Cybersecurity</a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">© {new Date().getFullYear()} Nocode Saarthi Tech Services. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
