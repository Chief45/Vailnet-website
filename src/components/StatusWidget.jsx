import { motion } from 'framer-motion';
import { Users, ShieldOff, Lock } from 'lucide-react';

const stats = [
  { icon: Users,     value: '4,500+',  label: 'Active Masks',         sub: 'Anonymous users online now' },
  { icon: ShieldOff, value: '0 bytes', label: 'Personal Data Stored',  sub: 'We collect nothing' },
  { icon: Lock,      value: 'AES-256', label: 'Encryption Standard',   sub: 'Military-grade, end-to-end' },
];

const StatusWidget = () => (
  <section id="stats" className="py-20 px-6 md:px-16 bg-[#0E0E10] border-y border-white/5">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">Live Network</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">By the Numbers</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-badge flex items-start gap-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.09 }}
          >
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
              <s.icon size={18} className="text-[#C9A84C]" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white leading-none">{s.value}</p>
              <p className="text-sm font-semibold text-gray-300 mt-1">{s.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 flex items-center gap-2 text-xs text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {/* Soft green pulse dot */}
        <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ backgroundColor: '#10B981' }} />
        Stats synced in real-time
      </motion.div>
    </div>
  </section>
);

export default StatusWidget;
