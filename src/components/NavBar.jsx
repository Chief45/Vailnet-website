import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Logo from './Logo';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 w-full z-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16">

        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5">
          <Logo size={26} />
          <span className="text-white font-bold font-tech text-lg tracking-tight">veilNet</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#stats"    className="nav-link">Network</a>
          <a href="#about"    className="nav-link">About</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => window.triggerAPKDownload?.()}
            className="btn-gold hidden md:flex items-center gap-2 px-5 py-2 text-sm"
            whileTap={{ scale: 0.97 }}
          >
            <Download size={14} />
            Download APK
          </motion.button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-white/5 pt-4 pb-5 px-2 space-y-3 bg-[#0A0A0C]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
          >
            {[
              { label: 'Features', href: '#features' },
              { label: 'Network', href: '#stats' },
              { label: 'About', href: '#about' },
            ].map(l => (
              <a key={l.label} href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-400 hover:text-white font-semibold py-1 text-sm"
              >{l.label}</a>
            ))}
            <button
              onClick={() => { setOpen(false); window.triggerAPKDownload?.(); }}
              className="btn-gold w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm"
            >
              <Download size={14} /> Download APK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
