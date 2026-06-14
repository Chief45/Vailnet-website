import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, Lock, Smartphone,
  Menu, LayoutGrid, Bell, Search, Heart, 
  MessageSquare, Repeat, Share2, Home, Radio, Users 
} from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'broadcast', 'whispers'

  return (
    <section className="hero-section min-h-screen flex items-center pt-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

        {/* ── LEFT — Text ── */}
        <motion.div className="space-y-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-3 py-1.5 rounded-full text-[#F2CC5E] text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: '#10B981' }} />
            4,500+ active users · Network Online
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              Your Voice.<br />
              <span className="text-gray-400 font-light">No Trace.</span>
            </h1>
          </div>

          <p className="text-gray-400 text-base leading-7 max-w-md">
            veilNet is an anonymous-first social network. No account, no password, no email. Create a mask using only a 12-word phrase and start communicating privately.
          </p>

          <div id="download-cta" className="flex flex-col sm:flex-row gap-3 pt-1">
            <motion.button onClick={() => window.triggerAPKDownload?.()} className="btn-gold flex items-center gap-3 px-6 py-3.5 text-sm group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Smartphone size={18} />
              Download veilNet APK — Free
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
            <a href="#features" className="flex items-center gap-1.5 text-gray-400 hover:text-white font-semibold py-3.5 px-2 text-sm transition-colors">
              How it works <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-gray-400 pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} style={{ color: '#C9A84C' }} />119 MB</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} style={{ color: '#C9A84C' }} />SHA-256 Verified</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} style={{ color: '#C9A84C' }} />No Play Store Tracking</span>
          </div>
        </motion.div>

        {/* ── RIGHT — Premium Realistic Phone ── */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <div style={{ perspective: '1200px' }}>
            {/* Floating phone animation with 3D bob and tilt */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotateY: [-7, -3, -7],
                rotateX: [1, 4, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              style={{ position: 'relative', transformStyle: 'preserve-3d' }}
            >
              {/* ── Ambient glows behind phone ── */}
              <div style={{
                position: 'absolute', inset: '-50px',
                background: 'radial-gradient(ellipse 70% 60% at 55% 45%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', inset: '-50px',
                background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* ── Phone tilt wrapper ── */}
              <div className="w-[280px] sm:w-[320px] lg:w-[300px] xl:w-[340px]" style={{ transformStyle: 'preserve-3d', position: 'relative' }}>

                {/* Volume buttons — LEFT */}
                <div style={{ position: 'absolute', left: '-5px', top: '108px', display: 'flex', flexDirection: 'column', gap: '7px', zIndex: 2 }}>
                  {[38, 32].map((h, i) => (
                    <div key={i} style={{
                      width: '4px', height: `${h}px`,
                      background: 'linear-gradient(to right, #1a1a1a, #303030)',
                      borderRadius: '2px 0 0 2px',
                      boxShadow: '-2px 1px 4px rgba(0,0,0,0.7)',
                    }} />
                  ))}
                </div>

                {/* Power button — RIGHT */}
                <div style={{
                  position: 'absolute', right: '-5px', top: '138px', zIndex: 2,
                  width: '4px', height: '55px',
                  background: 'linear-gradient(to left, #1a1a1a, #303030)',
                  borderRadius: '0 2px 2px 0',
                  boxShadow: '2px 1px 4px rgba(0,0,0,0.7)',
                }} />

                {/* ── Outer metal frame (Titanium look) ── */}
                <div style={{
                  background: 'linear-gradient(150deg, #525252 0%, #1e1e1e 20%, #141414 55%, #252525 80%, #525252 100%)',
                  borderRadius: '48px',
                  padding: '3.5px',
                  boxShadow: [
                    '0 0 0 0.5px rgba(255,255,255,0.15)',
                    '0 2px 0 0.5px rgba(0,0,0,0.85)',
                    '0 50px 100px -20px rgba(0,0,0,0.95)',
                    '0 25px 55px -15px rgba(0,0,0,0.8)',
                    '-15px 15px 60px -5px rgba(201,168,76,0.06)',
                    '15px 30px 60px -10px rgba(201,168,76,0.06)',
                  ].join(', '),
                }}>

                  {/* ── Screen ── */}
                  <div style={{
                    background: '#08080C',
                    borderRadius: '44px',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    aspectRatio: '9 / 19.5',
                    width: '100%',
                  }}>

                    {/* Screen inner depth shadow */}
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: '44px', zIndex: 20, pointerEvents: 'none',
                      boxShadow: 'inset 0 0 24px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
                    }} />

                    {/* Screen glare reflection */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '45%', zIndex: 15, pointerEvents: 'none', borderRadius: '44px 44px 0 0',
                      background: 'linear-gradient(150deg, rgba(255,255,255,0.035) 0%, transparent 60%)',
                    }} />

                    {/* ── Status bar ── */}
                    <div style={{ padding: '14px 20px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, zIndex: 25 }}>
                      <span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', fontWeight: 600 }}>9:41</span>

                      {/* Pill Dynamic Island Camera */}
                      <div style={{
                        width: '64px', height: '14px', borderRadius: '99px',
                        background: '#000000',
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                      }} />

                      {/* Signal + Battery */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                          {[4, 6, 8, 10].map((h, i) => (
                            <div key={i} style={{
                              width: '2.5px', height: `${h}px`, borderRadius: '0.8px',
                              background: i < 3 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)',
                            }} />
                          ))}
                        </div>
                        <div style={{ width: '20px', height: '10px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '3px', position: 'relative' }}>
                          <div style={{ position: 'absolute', left: '1.5px', top: '1.5px', bottom: '1.5px', width: '70%', background: 'rgba(255,255,255,0.7)', borderRadius: '1px' }} />
                          <div style={{ position: 'absolute', right: '-3px', top: '50%', transform: 'translateY(-50%)', width: '2px', height: '4px', background: 'rgba(255,255,255,0.4)', borderRadius: '0 0.8px 0.8px 0' }} />
                        </div>
                      </div>
                    </div>

                    {/* ── App Header (Replicating VailNet design) ── */}
                    <div style={{ padding: '6px 14px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', flexShrink: 0, zIndex: 10 }}>
                      <Menu size={13} className="text-white/60 hover:text-white" />
                      <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', color: '#ffffff', fontFamily: "'Space Grotesk',sans-serif" }}>VAILNET</span>
                      <div className="flex gap-2">
                        <LayoutGrid size={13} className="text-white/60 hover:text-white" />
                        <Bell size={13} className="text-white/60 hover:text-white" />
                      </div>
                    </div>

                    {/* ── Search Bar ── */}
                    <div style={{ padding: '8px 12px 4px', flexShrink: 0, zIndex: 10 }}>
                      <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1.5 text-white/30">
                        <Search size={10} />
                        <span className="text-[9px]">Search signals, frequencies, or masks...</span>
                      </div>
                    </div>

                    {/* ── Filter Tags ── */}
                    <div style={{ padding: '4px 12px 6px', display: 'flex', gap: '6px', overflowX: 'hidden', flexShrink: 0, zIndex: 10 }}>
                      <span className="text-[8px] font-bold bg-white text-black px-2.5 py-0.5 rounded-full border border-white">All</span>
                      <span className="text-[8px] bg-white/[0.04] text-white/60 border border-white/[0.06] px-2.5 py-0.5 rounded-full">#privacy</span>
                      <span className="text-[8px] bg-white/[0.04] text-white/60 border border-white/[0.06] px-2.5 py-0.5 rounded-full">#technology</span>
                      <span className="text-[8px] bg-white/[0.04] text-white/60 border border-white/[0.06] px-2.5 py-0.5 rounded-full">#philosophy</span>
                    </div>

                    {/* ── Feed Container ── */}
                    <div style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'hidden', zIndex: 10 }}>
                      <AnimatePresence mode="wait">
                        {activeTab === 'home' && (
                          <motion.div
                            key="home-feed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2"
                          >
                            {/* Post 1: Interactive Signal */}
                            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 flex flex-col gap-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  {/* Avatar with gold gradient */}
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#8B6212] flex-shrink-0" />
                                  <div>
                                    <p className="text-[9px] font-bold text-white leading-none">CipherMask_92</p>
                                    <p className="text-[7px] text-white/40 mt-0.5">2h ago · encrypted</p>
                                  </div>
                                </div>
                                <span className="text-[7px] text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-1.5 py-0.2 rounded-full">Signal</span>
                              </div>
                              <p className="text-[9px] text-white/70 leading-relaxed font-sans">
                                Testing out the VailNet mobile nodes. Zero logs, zero identifiers. Complete communication freedom with sub-40ms latency globally! 🌐🔒
                              </p>
                              {/* Actions */}
                              <div className="flex items-center gap-4 text-white/35 mt-0.5 border-t border-white/[0.03] pt-1.5">
                                <div className="flex items-center gap-1"><Heart size={9} /> <span className="text-[7px]">142</span></div>
                                <div className="flex items-center gap-1"><MessageSquare size={9} /> <span className="text-[7px]">28</span></div>
                                <div className="flex items-center gap-1"><Repeat size={9} /> <span className="text-[7px]">15</span></div>
                                <div className="flex items-center gap-1 ml-auto"><Share2 size={9} /></div>
                              </div>
                            </div>

                            {/* Post 2: Official Announcement with Logo Card */}
                            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 flex flex-col gap-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#C9A84C] to-gray-500 flex-shrink-0" />
                                  <div>
                                    <p className="text-[9px] font-bold text-white leading-none">Apafield_Core</p>
                                    <p className="text-[7px] text-white/40 mt-0.5">5h ago · official</p>
                                  </div>
                                </div>
                                <span className="text-[7px] text-[#FAF9F6] bg-white/5 border border-white/10 px-1.5 py-0.2 rounded-full">Official</span>
                              </div>
                              <p className="text-[9px] text-white/70 leading-relaxed font-sans">
                                The new version of the VailNet protocol spec is published. Read the details about the zero-knowledge identity matrix.
                              </p>
                              
                              {/* Embedded link card */}
                              <div className="bg-gradient-to-br from-gray-900 to-black/60 border border-white/5 rounded-lg p-2 flex items-center gap-2.5 mt-0.5">
                                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Logo size={20} />
                                </div>
                                <div>
                                  <p className="text-[8.5px] font-bold text-white">VailNet Protocol Spec</p>
                                  <p className="text-[7px] text-[#C9A84C] font-medium mt-0.5">Read whitepaper online</p>
                                </div>
                              </div>
                              
                              {/* Actions */}
                              <div className="flex items-center gap-4 text-white/35 mt-0.5 border-t border-white/[0.03] pt-1.5">
                                <div className="flex items-center gap-1"><Heart size={9} /> <span className="text-[7px]">324</span></div>
                                <div className="flex items-center gap-1"><MessageSquare size={9} /> <span className="text-[7px]">59</span></div>
                                <div className="flex items-center gap-1"><Repeat size={9} /> <span className="text-[7px]">28</span></div>
                                <div className="flex items-center gap-1 ml-auto"><Share2 size={9} /></div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === 'broadcast' && (
                          <motion.div
                            key="broadcast-feed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2"
                          >
                            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px] text-white/50 border border-white/10">?</div>
                                  <div>
                                    <p className="text-[9px] font-bold text-white/85 leading-none">Anonymous Mask</p>
                                    <p className="text-[7px] text-white/40 mt-0.5">10m ago · Broadcast</p>
                                  </div>
                                </div>
                                <span className="text-[7px] text-blue-400 bg-blue-400/10 border border-blue-400/20 px-1.5 py-0.2 rounded-full">Echo</span>
                              </div>
                              <p className="text-[9px] text-white/70 leading-relaxed font-mono">
                                Decoupling authentication from identity is the single most important step for digital privacy. If they don't know who you are, they can't sell your data. 📡🛡️
                              </p>
                              {/* Small simulated ripple waves */}
                              <div className="flex gap-1 items-center h-4 mt-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-ping" />
                                <span className="text-[7px] text-[#C9A84C] font-semibold">Active ripple propagation</span>
                              </div>
                              <div className="flex items-center gap-4 text-white/35 mt-0.5 border-t border-white/[0.03] pt-1.5">
                                <div className="flex items-center gap-1"><Heart size={9} /> <span className="text-[7px]">89</span></div>
                                <div className="flex items-center gap-1"><MessageSquare size={9} /> <span className="text-[7px]">12</span></div>
                                <div className="flex items-center gap-1"><Repeat size={9} /> <span className="text-[7px]">43</span></div>
                                <div className="flex items-center gap-1 ml-auto"><Share2 size={9} /></div>
                              </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 flex flex-col gap-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px] text-white/50 border border-white/10">?</div>
                                  <div>
                                    <p className="text-[9px] font-bold text-white/85 leading-none">Anonymous Mask</p>
                                    <p className="text-[7px] text-white/40 mt-0.5">45m ago · Broadcast</p>
                                  </div>
                                </div>
                                <span className="text-[7px] text-zinc-400 bg-white/5 border border-white/10 px-1.5 py-0.2 rounded-full">Whisper</span>
                              </div>
                              <p className="text-[9px] text-white/70 leading-relaxed font-sans">
                                Just built my mobile node. Runs perfectly in the background using minimal battery. Highly recommend downloading the APK!
                              </p>
                              <div className="flex items-center gap-4 text-white/35 mt-0.5 border-t border-white/[0.03] pt-1.5">
                                <div className="flex items-center gap-1"><Heart size={9} /> <span className="text-[7px]">54</span></div>
                                <div className="flex items-center gap-1"><MessageSquare size={9} /> <span className="text-[7px]">3</span></div>
                                <div className="flex items-center gap-1"><Repeat size={9} /> <span className="text-[7px]">8</span></div>
                                <div className="flex items-center gap-1 ml-auto"><Share2 size={9} /></div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === 'whispers' && (
                          <motion.div
                            key="whispers-feed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-3 h-full justify-end py-1"
                          >
                            <div className="text-center py-1 border-b border-white/[0.04] mb-1">
                              <p className="text-[8px] text-gray-500 font-mono tracking-wide">SECURE TUNNEL (ECDH)</p>
                              <p className="text-[7px] text-[#C9A84C] font-mono truncate">@0x8b3e...941a</p>
                            </div>

                            {/* Chat Bubbles */}
                            <div className="space-y-2.5 flex-1 flex flex-col justify-end">
                              {/* Received */}
                              <div className="flex flex-col items-start gap-1 max-w-[85%]">
                                <span className="text-[6.5px] text-white/40 ml-1">@0x8b3e...941a</span>
                                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-2.5 py-1.5 text-[8.5px] text-white/90 leading-relaxed">
                                  Hey, is this connection fully encrypted?
                                </div>
                              </div>

                              {/* Sent */}
                              <div className="flex flex-col items-end gap-1 max-w-[85%] self-end">
                                <span className="text-[6.5px] text-[#C9A84C]/70 mr-1">You</span>
                                <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl rounded-tr-none px-2.5 py-1.5 text-[8.5px] text-[#F2CC5E] leading-relaxed">
                                  Yes, fully. AES-256-GCM. Not even the server can read the payloads.
                                </div>
                              </div>

                              {/* Received */}
                              <div className="flex flex-col items-start gap-1 max-w-[85%]">
                                <span className="text-[6.5px] text-white/40 ml-1">@0x8b3e...941a</span>
                                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-2.5 py-1.5 text-[8.5px] text-white/90 leading-relaxed">
                                  Incredible. No phone number or registration metadata logged either. Absolutely clean.
                                </div>
                              </div>
                            </div>

                            {/* Input placeholder */}
                            <div className="mt-1 border-t border-white/[0.04] pt-2 flex gap-1.5 items-center">
                              <div className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-lg px-2 py-1 text-white/30 text-[8px]">
                                Type encrypted message...
                              </div>
                              <div className="w-5 h-5 bg-[#C9A84C] rounded-lg flex items-center justify-center text-[10px] text-black font-bold">&gt;</div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ── Bottom Navigation Bar ── */}
                    <div style={{ background: 'rgba(6, 6, 10, 0.98)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6px 16px 8px', display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0, zIndex: 30 }}>
                      <div className="flex justify-around items-center">
                        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-0.5 focus:outline-none transition-colors cursor-pointer border-none bg-transparent ${activeTab === 'home' ? 'text-[#C9A84C]' : 'text-white/40 hover:text-white'}`}>
                          <Home size={12} />
                          {activeTab === 'home' && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                        </button>
                        <button onClick={() => setActiveTab('broadcast')} className={`flex flex-col items-center gap-0.5 focus:outline-none transition-colors cursor-pointer border-none bg-transparent ${activeTab === 'broadcast' ? 'text-[#C9A84C]' : 'text-white/40 hover:text-white'}`}>
                          <Radio size={12} />
                          {activeTab === 'broadcast' && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                        </button>
                        <button onClick={() => setActiveTab('whispers')} className={`flex flex-col items-center gap-0.5 focus:outline-none transition-colors cursor-pointer border-none bg-transparent ${activeTab === 'whispers' ? 'text-[#C9A84C]' : 'text-white/40 hover:text-white'}`}>
                          <Users size={12} />
                          {activeTab === 'whispers' && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                        </button>
                      </div>
                      <div style={{ height: '4px', display: 'flex', alignItems: 'center', justifyRules: 'center', marginTop: '2px' }}>
                        <div style={{ width: '80px', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '1.5px' }} />
                      </div>
                    </div>

                  </div>{/* /screen */}
                </div>{/* /frame */}
              </div>{/* /tilt */}

              {/* ── Ground glow / shadow ── */}
              <div style={{
                position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)',
                width: '180px', height: '30px',
                background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)',
                filter: 'blur(12px)', pointerEvents: 'none',
              }} />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
