import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Key, Radio, Fingerprint, Lock, Cpu, Globe, Share2 } from 'lucide-react';
import Logo from './Logo';

const explanations = [
  {
    icon: Fingerprint,
    title: 'Mnemonic Access',
    description: 'No email, no password, no phone numbers. Your entire identity is encapsulated in a BIP39 12-word seed phrase generated locally on your device. Zero personal data is ever collected.',
    color: '#C9A84C'
  },
  {
    icon: Key,
    title: 'Identity Masking',
    description: 'Create multiple separate personas (Masks) from a single mnemonic phrase. Each mask operates with its own distinct cryptographic keys, ensuring your activities cannot be linked together.',
    color: '#A1A1AA'
  },
  {
    icon: ShieldAlert,
    title: 'Zero-Knowledge Servers',
    description: 'All conversations are encrypted end-to-end using AES-256-GCM. The VailNet backend stores only encrypted payloads (ciphertext), making it mathematically impossible for servers to inspect your data.',
    color: '#C9A84C'
  },
  {
    icon: Radio,
    title: 'The Broadcast Stream',
    description: 'Publish whispers, echoes, and ripples across a global decentralized flow. Moderation is entirely automated at the database protocol layer, ensuring free speech without central bias.',
    color: '#A1A1AA'
  }
];

// Helper array for floating mnemonic words
const seedWords = ["alpha", "whisper", "secure", "private", "node", "shield"];

const About = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through steps unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % explanations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="about" className="py-24 px-6 md:px-16 border-t border-white/5 bg-[#0A0A0C] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Morphing Canvas */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient Background Glows matching active step color */}
            <motion.div 
              className="absolute w-[280px] h-[280px] rounded-full blur-3xl pointer-events-none opacity-10"
              animate={{ 
                backgroundColor: activeStep % 2 === 0 ? '#C9A84C' : '#A1A1AA',
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Morphing Stage Box */}
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center bg-white/[0.02] rounded-[32px] border border-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.15)] overflow-hidden p-10">
              
              {/* Dynamic Interactive Animations overlaying the background */}
              <AnimatePresence mode="popLayout">
                
                {/* ── STEP 0: MNEMONIC ACCESS (Floating words) ── */}
                {activeStep === 0 && (
                  <motion.div 
                    key="step-0-words"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {seedWords.map((word, idx) => {
                      // Distribute positions in circle
                      const angle = (idx * (360 / seedWords.length) * Math.PI) / 180;
                      const radius = 95;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      return (
                        <motion.span 
                          key={word}
                          className="absolute text-[10px] font-mono font-bold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full shadow-sm"
                          style={{
                            left: `calc(50% + ${x}px - 30px)`,
                            top: `calc(50% + ${y}px - 12px)`,
                          }}
                          animate={{
                            y: [y, y - 8, y + 8, y],
                            x: [x, x + 6, x - 6, x],
                            scale: [1, 1.05, 0.98, 1],
                          }}
                          transition={{
                            duration: 5 + idx,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          {word}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                )}

                {/* ── STEP 1: IDENTITY MASKING (Splitting color paths) ── */}
                {activeStep === 1 && (
                  <motion.div 
                    key="step-1-orbits"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {/* Multi-layered spinning rings rotated on different axes */}
                    <motion.div 
                      className="absolute inset-10 border-2 border-dashed border-[#C9A84C]/30 rounded-full"
                      style={{ rotateX: '65deg', rotateY: '-20deg' }}
                      animate={{ rotateZ: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div 
                      className="absolute inset-8 border border-dashed border-[#A1A1AA]/30 rounded-full"
                      style={{ rotateX: '45deg', rotateY: '25deg' }}
                      animate={{ rotateZ: -360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div 
                      className="absolute inset-12 border border-dashed border-zinc-700/30 rounded-full"
                      style={{ rotateX: '-35deg', rotateY: '45deg' }}
                      animate={{ rotateZ: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Orbiting mask markers */}
                    <motion.div 
                      className="absolute w-3.5 h-3.5 rounded-full bg-[#C9A84C] shadow-[0_0_8px_#C9A84C]"
                      animate={{
                        x: [0, 80, 0, -80, 0],
                        y: [80, 0, -80, 0, 80],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ left: 'calc(50% - 7px)', top: 'calc(50% - 7px)' }}
                    />
                    <motion.div 
                      className="absolute w-3.5 h-3.5 rounded-full bg-[#A1A1AA] shadow-[0_0_8px_#A1A1AA]"
                      animate={{
                        x: [0, -70, 0, 70, 0],
                        y: [-70, 0, 70, 0, -70],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ left: 'calc(50% - 7px)', top: 'calc(50% - 7px)' }}
                    />
                  </motion.div>
                )}

                {/* ── STEP 2: ZERO-KNOWLEDGE (Shield and locked dots) ── */}
                {activeStep === 2 && (
                  <motion.div 
                    key="step-2-shields"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Glowing shield wall loops */}
                    <motion.div 
                      className="absolute w-[180px] h-[180px] rounded-full border border-white/5 flex items-center justify-center"
                      animate={{ scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="w-[140px] h-[140px] rounded-full border border-dashed border-[#C9A84C]/25" />
                    </motion.div>

                    {/* Floating lock icons */}
                    <motion.div 
                      className="absolute p-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] rounded-lg shadow-sm"
                      animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      style={{ top: '35px', left: '75px' }}
                    >
                      <Lock size={12} />
                    </motion.div>
                    <motion.div 
                      className="absolute p-2 bg-[#A1A1AA]/10 border border-[#A1A1AA]/30 text-[#A1A1AA] rounded-lg shadow-sm"
                      animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                      style={{ bottom: '35px', right: '75px' }}
                    >
                      <Lock size={12} />
                    </motion.div>
                  </motion.div>
                )}

                {/* ── STEP 3: THE BROADCAST STREAM (Ripple waves) ── */}
                {activeStep === 3 && (
                  <motion.div 
                    key="step-3-ripples"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    {/* Ripple 1 */}
                    <motion.div 
                      className="absolute w-28 h-28 border border-[#A1A1AA]/40 rounded-full"
                      initial={{ scale: 0.8, opacity: 1 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                    />
                    {/* Ripple 2 */}
                    <motion.div 
                      className="absolute w-28 h-28 border border-[#C9A84C]/30 rounded-full"
                      initial={{ scale: 0.8, opacity: 1 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                    />
                    {/* Ripple 3 */}
                    <motion.div 
                      className="absolute w-28 h-28 border border-[#A1A1AA]/20 rounded-full"
                      initial={{ scale: 0.8, opacity: 1 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 2 }}
                    />

                    {/* Small signal nodes moving out */}
                    <motion.div 
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#A1A1AA]"
                      animate={{ x: [0, 110], y: [0, -70], opacity: [1, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.div 
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#C9A84C]"
                      animate={{ x: [0, -110], y: [0, 60], opacity: [1, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Central App Icon / Logo */}
              <motion.div
                className="relative z-20 p-5 bg-[#08080C] rounded-[24%] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Logo className="w-20 h-20 sm:w-24 sm:h-24 shadow-inner" />
                
                {/* Micro reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
              </motion.div>

            </div>
          </div>
 
          {/* Right Column: Timeline Chronological explanations */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-brand">
                How VailNet Works
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Designed for Complete Autonomy
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                VailNet replaces vulnerable account databases with localized math and encryption. Hover over each step to preview its cryptographic flow on the canvas.
              </p>
            </div>
 
            {/* Timeline Wrapper */}
            <div className="relative pl-7 sm:pl-8 border-l border-white/5 space-y-7">
              {explanations.map((exp, index) => {
                const isActive = activeStep === index;
                const IconComponent = exp.icon;
                return (
                  <div 
                    key={index}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setActiveStep(index);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setActiveStep(index)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isActive ? 'opacity-100 translate-x-1' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Dynamic Connecting Active Dot Line */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-line"
                        className="absolute left-[-29px] sm:left-[-33px] top-0 bottom-0 w-[2px] rounded-full z-10"
                        style={{ backgroundColor: exp.color }}
                        transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                      />
                    )}

                    {/* Timeline Node Dot */}
                    <div 
                      className={`absolute left-[-39px] sm:left-[-41px] top-1.5 w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#0E0E10] shadow-[0_0_12px_rgba(255,255,255,0.03)]' 
                          : 'bg-white/5 border-white/10'
                      }`}
                      style={{ borderColor: isActive ? exp.color : 'rgba(255,255,255,0.08)' }}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ 
                          backgroundColor: isActive ? exp.color : 'rgba(255,255,255,0.2)',
                          boxShadow: isActive ? `0 0 6px ${exp.color}` : 'none'
                        }}
                      />
                    </div>

                    {/* Content Details */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: exp.color }}>
                        STEP 0{index + 1} &middot; {index === 0 ? 'ONBOARDING' : index === 1 ? 'KEYS' : index === 2 ? 'ENCRYPTION' : 'BROADCAST'}
                      </span>
                      
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        {exp.title}
                        {isActive && (
                          <motion.span 
                            layoutId="active-dot" 
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ backgroundColor: exp.color }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          />
                        )}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default About;
