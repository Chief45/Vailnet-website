import FeatureCard from './FeatureCard';

// Import our newly generated premium images
import maskIdentityImg from '../assets/feature_mask_identity.png';
import encryptedWhispersImg from '../assets/feature_encrypted_whispers.png';
import decentralizedStreamImg from '../assets/feature_decentralized_stream.png';

const featuresData = [
  {
    title: 'Mask Identity System',
    description: 'No password, no email, no phone number. Your account is created locally on your device via SHA-256 hash and secured with a 12-word mnemonic phrase. You remain completely untraceable.',
    tag: 'Identity',
    image: maskIdentityImg
  },
  {
    title: 'Encrypted Whispers',
    description: 'Direct messages encrypted on your device using AES-256-GCM. ECDH key exchange establishes secure tunnels. Only you and the recipient hold the keys to decrypt.',
    tag: 'Encryption',
    image: encryptedWhispersImg
  },
  {
    title: 'The Broadcast Stream',
    description: 'Post whispers, echoes, and ripples to a global decentralized flow. Moderation is handled at the PostgreSQL schema layer. No central authority, no logging, zero footprint.',
    tag: 'Moderation',
    image: decentralizedStreamImg
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-16 border-t border-white/5 bg-[#0A0A0C] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-white/1 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-brand/10 text-[#F2CC5E] px-3 py-1 rounded-full">
            VailNet Protocols
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Built for Privacy. End to End.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Every part of VailNet is designed around one principle — your identity should be mathematically impossible to trace, not just contractually protected.
          </p>
        </div>

        {/* INFINITE MARQUEE */}
        <div className="marquee-container py-6">
          <div className="marquee-content gap-8 pr-8">
            {/* First set of cards */}
            {featuresData.map((f, i) => (
              <FeatureCard 
                key={`card-set1-${i}`}
                title={f.title}
                description={f.description}
                tag={f.tag}
                image={f.image}
              />
            ))}
            
            {/* Second set of cards (Identical, for seamless loop) */}
            {featuresData.map((f, i) => (
              <FeatureCard 
                key={`card-set2-${i}`}
                title={f.title}
                description={f.description}
                tag={f.tag}
                image={f.image}
              />
            ))}

            {/* Third set of cards (For widescreen coverage) */}
            {featuresData.map((f, i) => (
              <FeatureCard 
                key={`card-set3-${i}`}
                title={f.title}
                description={f.description}
                tag={f.tag}
                image={f.image}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
