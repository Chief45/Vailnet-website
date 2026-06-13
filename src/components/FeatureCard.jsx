import { motion } from 'framer-motion';

const tagStyles = {
  Identity: {
    bg: 'bg-[#C9A84C]/20',
    text: 'text-[#F2CC5E]',
    border: 'border-[#C9A84C]/30',
  },
  Encryption: {
    bg: 'bg-white/10',
    text: 'text-[#FAF9F6]',
    border: 'border-white/20',
  },
  Moderation: {
    bg: 'bg-amber-600/20',
    text: 'text-amber-300',
    border: 'border-amber-600/30',
  },
};

const FeatureCard = ({ title, description, tag, image }) => {
  const currentTagStyle = tagStyles[tag] || { bg: 'bg-white/10', text: 'text-white', border: 'border-white/20' };

  return (
    <div className="relative w-[380px] sm:w-[480px] h-[320px] rounded-[28px] overflow-hidden group cursor-pointer border border-white/10 shadow-xl flex-shrink-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5 z-10" />

      {/* Content wrapper */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
        {/* Top bar with tag */}
        <div className="flex justify-between items-start">
          <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border backdrop-blur-md ${currentTagStyle.bg} ${currentTagStyle.text} ${currentTagStyle.border}`}>
            {tag}
          </span>
        </div>

        {/* Bottom details */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-[#F2CC5E] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans line-clamp-3">
            {description}
          </p>
          
          <div className="pt-3 flex items-center justify-between border-t border-white/10 mt-3 text-[11px] text-white/40">
            <span className="uppercase tracking-widest text-[9px] font-bold">VailNet Protocol</span>
            <span className="flex items-center gap-1.5 font-semibold text-[#F2CC5E]">
              <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse bg-[#F2CC5E] shadow-[0_0_6px_rgba(242,204,94,0.4)]" />
              SECURE CONNECT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
