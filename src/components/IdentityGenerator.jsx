import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Copy, Check, RotateCcw, AlertTriangle, Key, ShieldAlert } from 'lucide-react';
import toast from 'react-hot-toast';

const seedWordPool = [
  "oblivion", "whisper", "nexus", "echo", "shadow", "beacon", 
  "glitch", "vortex", "cipher", "matrix", "quantum", "phantom", 
  "pulse", "gravity", "shroud", "vector", "binary", "protocol", 
  "vertex", "cosmic", "abyss", "zenith", "spectre", "signal",
  "shield", "tunnel", "entropy", "matrix", "carbon", "silicon"
];

const IdentityGenerator = () => {
  const [step, setStep] = useState('idle'); // idle, generating, completed
  const [mnemonic, setMnemonic] = useState([]);
  const [maskId, setMaskId] = useState('');
  const [logs, setLogs] = useState([]);
  const [copiedMnemonic, setCopiedMnemonic] = useState(false);
  const [copiedMask, setCopiedMask] = useState(false);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const generateIdentity = async () => {
    setStep('generating');
    setLogs([]);
    
    const steps = [
      { text: "Initializing client-side entropy generator...", delayTime: 500 },
      { text: "Generating cryptographically secure pseudorandom number (CSPRNG)...", delayTime: 600 },
      { text: "Mapping entropy to BIP-39 wordlist...", delayTime: 500 },
      { text: "Deriving local private keys and SHA-256 hash...", delayTime: 700 },
      { text: "Applying Ed25519 signature algorithm...", delayTime: 400 },
      { text: "Identity created locally! Zero server foot-print established.", delayTime: 300 }
    ];

    for (let i = 0; i < steps.length; i++) {
      setLogs(prev => [...prev, steps[i].text]);
      await delay(steps[i].delayTime);
    }

    // Pick 12 random unique words
    const shuffled = [...seedWordPool].sort(() => 0.5 - Math.random());
    const words = shuffled.slice(0, 12);
    
    // Generate a simulated public address
    const hexChars = '0123456789abcdef';
    let generatedAddr = '0x';
    for (let i = 0; i < 40; i++) {
      generatedAddr += hexChars[Math.floor(Math.random() * hexChars.length)];
    }

    setMnemonic(words);
    setMaskId(generatedAddr);
    setStep('completed');
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'mnemonic') {
      setCopiedMnemonic(true);
      setTimeout(() => setCopiedMnemonic(false), 2000);
      toast.success('Mnemonic phrase copied to clipboard!');
    } else {
      setCopiedMask(true);
      setTimeout(() => setCopiedMask(false), 2000);
      toast.success('Mask ID copied to clipboard!');
    }
  };

  const resetGenerator = () => {
    setStep('idle');
    setMnemonic([]);
    setMaskId('');
    setLogs([]);
  };

  return (
    <section id="identity-generator" className="py-24 px-6 md:px-16 border-t border-white/5 bg-[#08080C] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C9A84C]/10 text-[#F2CC5E] px-3 py-1 rounded-full">
            Cryptographic Simulator
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Create Your First Mask
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Experience VailNet's offline, private onboarding flow right in your browser. All computation happens locally inside your sandbox browser—no data is sent to any server.
          </p>
        </div>

        {/* Simulator Terminal Box */}
        <div className="bg-[#121216] border border-white/5 rounded-3xl overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)]">
          {/* Terminal Title Bar */}
          <div className="bg-[#0E0E11] px-6 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
              <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
            </div>
            <span className="text-[10px] font-mono text-gray-500 tracking-wider">vailnet-keygen-v1.0.sh</span>
            <Fingerprint size={14} className="text-[#C9A84C]" />
          </div>

          <div className="p-6 md:p-8 min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              
              {/* IDLE STATE */}
              {step === 'idle' && (
                <motion.div 
                  key="idle" 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center py-12 text-center h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                    <Fingerprint size={28} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Ready to Initialize Local Keys</h3>
                  <p className="text-xs text-gray-400 max-w-sm leading-relaxed mb-8">
                    Generating a mask creates a local key pair. Your mnemonic acts as your username and password combined.
                  </p>
                  
                  <motion.button 
                    onClick={generateIdentity}
                    className="btn-gold flex items-center gap-3 px-8 py-4 text-sm font-bold shadow-[0_12px_24px_-10px_rgba(201,168,76,0.3)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Generate Anonymous Identity
                  </motion.button>
                </motion.div>
              )}

              {/* GENERATING STATE */}
              {step === 'generating' && (
                <motion.div 
                  key="generating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-left space-y-3 py-6"
                >
                  <div className="flex items-center gap-2.5 text-[#C9A84C] text-xs font-bold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-ping" />
                    <span>Processing local key generation...</span>
                  </div>
                  <div className="space-y-2 text-[11px] sm:text-xs text-gray-400 select-none">
                    {logs.map((log, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-gray-600">&gt;</span>
                        <span>{log}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* COMPLETED STATE */}
              {step === 'completed' && (
                <motion.div 
                  key="completed"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Top Success Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#C9A84C]/5 border border-[#C9A84C]/10 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C]">
                        <Key size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Secret Mnemonic Generated</h4>
                        <p className="text-[10px] text-gray-400 mt-0.5">Keep this safe. It is never stored on servers.</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => copyToClipboard(mnemonic.join(' '), 'mnemonic')}
                      className="flex items-center justify-center gap-2 self-start sm:self-center bg-white/5 border border-white/10 hover:border-white/20 px-3.5 py-1.5 rounded-lg text-xs text-gray-300 hover:text-white transition-all"
                    >
                      {copiedMnemonic ? (
                        <>
                          <Check size={12} className="text-green-500" />
                          <span className="text-green-500 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy Mnemonic</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Seed Words Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                    {mnemonic.map((word, index) => (
                      <div 
                        key={index} 
                        className="bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl px-3 py-2.5 flex items-center justify-between group transition-colors"
                      >
                        <span className="text-[9px] font-mono text-gray-500">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="text-xs font-semibold text-white font-mono">{word}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mask ID Box */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Generated Mask ID (Public Address)</span>
                    <div className="bg-[#0E0E11] border border-white/5 rounded-2xl px-4 py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#8B6212] flex-shrink-0" />
                        <span className="text-xs font-mono text-[#C9A84C] truncate">{maskId}</span>
                      </div>
                      
                      <button 
                        onClick={() => copyToClipboard(maskId, 'mask')}
                        className="p-2 bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-lg flex-shrink-0 transition-colors"
                        title="Copy Mask ID"
                      >
                        {copiedMask ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Danger Alert & Restart Button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2.5 text-red-400 text-[10px] sm:text-xs">
                      <ShieldAlert size={14} className="flex-shrink-0 text-red-500" />
                      <span className="leading-tight">Warning: If you lose these 12 words, you permanently lose access to this mask.</span>
                    </div>

                    <button 
                      onClick={resetGenerator}
                      className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-xl self-end sm:self-center"
                    >
                      <RotateCcw size={12} />
                      <span>Reset Generator</span>
                    </button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IdentityGenerator;
