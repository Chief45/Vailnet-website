import { Mail, Send } from 'lucide-react';
import Logo from './Logo';

const Footer = () => (
  <footer id="footer" className="py-14 px-6 md:px-16 text-white/80 relative overflow-hidden bg-[#09090B] border-t border-white/5">
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#C9A84C]/10 to-transparent pointer-events-none" aria-hidden="true" />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
        <div className="space-y-4">
          <a href="/" className="inline-flex items-center gap-3" aria-label="veilNet home">
            <Logo size={26} className="border border-white/10" />
            <span className="text-white font-extrabold text-xl tracking-tight">VeilNet</span>
          </a>
          <p className="text-sm text-white/60 leading-7 max-w-[320px]">
            veilNet is a privacy-first anonymous social experience designed for secure, decentralized communication.
          </p>
          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">Client Delivery Ready</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm text-white/60">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">Explore</p>
            <div className="space-y-3">
              <a href="#features" className="block hover:text-white transition-colors">Features</a>
              <a href="#stats" className="block hover:text-white transition-colors">Network Stats</a>
              <a href="#about" className="block hover:text-white transition-colors">About</a>
              <button onClick={() => window.triggerAPKDownload?.()} className="block hover:text-white transition-colors text-left">Download APK</button>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">Legal</p>
            <div className="space-y-3">
              <a href="#privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="block hover:text-white transition-colors">Terms of Service</a>
              <a href="https://www.mindenlabs.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">mindenlabs.com</a>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm text-white/60">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">Contact</p>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-5 space-y-3">
            <p className="text-white font-semibold">Official support</p>
            <a href="mailto:apafieldtech@gmail.com" className="inline-flex items-center gap-2 text-[#C9A84C] hover:underline">
              <Mail size={14} /> apafieldtech@gmail.com
            </a>
            <a href="https://wa.me/255696534373" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C9A84C] hover:underline">
              <Send size={14} /> +255 696534373
            </a>
            <p className="text-xs text-white/50">
              Reach out directly for deployment, support, or product questions.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/10 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-white/80">veilNet by Apafield.ltd</p>
          <p className="text-[10px] text-white/40">Privacy-First Digital Infrastructure © {new Date().getFullYear()}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
          <span>Social</span>
          <span className="hidden sm:inline">·</span>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5 justify-center md:justify-end">
          {/* Instagram - Magenta */}
          <a
            href="https://www.instagram.com/apafield.ltd?igsh=cTBnNGRrODdxM20y&utm_source=qr"
            aria-label="Instagram"
            title="Apafield Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/80 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          
          {/* WhatsApp - Green */}
          <a
            href="https://wa.me/255696534373"
            aria-label="WhatsApp"
            title="WhatsApp Contact"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/80 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </a>
          
          {/* YouTube - Red */}
          <a
            href="http://www.youtube.com/@Apafield"
            aria-label="YouTube"
            title="Apafield YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[#FF0000]/40 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/80 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

