import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

window.triggerAPKDownload = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isIOS) {
    toast.error('The APK is only compatible with Android devices. iOS version coming soon!', {
      style: { background: '#1e293b', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.4)', fontFamily: "'Plus Jakarta Sans',sans-serif" },
      iconTheme: { primary: '#f59e0b', secondary: '#1e293b' },
    });
    return;
  }

  toast.success('Download starting in background...', {
    style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(201,168,76,0.4)', fontFamily: "'Plus Jakarta Sans',sans-serif" },
    iconTheme: { primary: '#C9A84C', secondary: '#1e293b' },
  });
  
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1umg6B7su5W6ljzF-Y2OnvyeqTg17vhmr';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
import Features from './components/Features';
import IdentityGenerator from './components/IdentityGenerator';
import About from './components/About';
import StatusWidget from './components/StatusWidget';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

function App() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', or null

  window.openPrivacyPolicy = () => setActiveModal('privacy');
  window.openTermsOfService = () => setActiveModal('terms');

  return (
    <div className="min-h-screen font-sans bg-[#0A0A0C] text-[#F4F4F5]">
      <Toaster position="bottom-right" />
      <NavBar />
      <main>
        <Hero />
        <StatusWidget />
        <Features />
        <IdentityGenerator />
        <About />
      </main>
      <Footer />

      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-[#121216] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto p-6 md:p-10 relative shadow-[0_24px_70px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all focus:outline-none"
              >
                <X size={18} />
              </button>

              {/* Render appropriate legal page */}
              {activeModal === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
