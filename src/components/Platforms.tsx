import React from 'react';
import { motion } from 'motion/react';

const platforms = [
  "Spotify",
  "Apple Music",
  "YouTube Music",
  "Amazon Music",
  "JioSaavn",
  "Gaana",
  "Instagram Music",
  "Facebook Music",
  "TikTok",
  "Deezer",
  "TIDAL"
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-32 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl text-white mb-6">Music, Everywhere.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light">
            Connecting independent releases with the digital platforms where listeners discover and enjoy music.
          </p>
        </motion.div>
      </div>

      {/* Marquee effect for platforms */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />
        
        <motion.div
          className="flex gap-12 sm:gap-24 whitespace-nowrap px-12 sm:px-24 items-center min-w-full justify-around"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {platforms.map((platform, idx) => (
            <span key={idx} className="font-serif text-xl sm:text-2xl text-zinc-600 tracking-wide">
              {platform}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {platforms.map((platform, idx) => (
            <span key={`dup-${idx}`} className="font-serif text-xl sm:text-2xl text-zinc-600 tracking-wide">
              {platform}
            </span>
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 text-center">
        <p className="text-[0.65rem] text-zinc-600 uppercase tracking-widest">
          Platform names are examples of digital ecosystems and do not imply official endorsements.
        </p>
      </div>
    </section>
  );
}
