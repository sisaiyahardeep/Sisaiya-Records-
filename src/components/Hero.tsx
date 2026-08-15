import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[800px] h-[800px] rounded-full border border-zinc-800/50 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-zinc-800/40 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-zinc-800/30 animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[50vh] bg-gold-900/5 blur-[120px] rounded-[100%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-zinc-800 rounded-full text-zinc-400 text-[0.65rem] uppercase tracking-[0.2em] mb-8">
            Sisaiya Records Digital Media
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6"
        >
          Sisaiya Records
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-serif italic text-xl md:text-2xl text-gold-400/80 mb-8 max-w-2xl"
        >
          "Independent Music. Global Reach."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-zinc-400 max-w-xl text-sm md:text-base leading-relaxed mb-12"
        >
          An India-based independent music label and digital media company helping artists take their music from creation to audiences around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="mailto:info@sisaiyarecords.in"
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="https://www.instagram.com/sisaiyarecords"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-zinc-700 text-white px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-wider hover:border-zinc-500 hover:bg-zinc-900 transition-colors w-full sm:w-auto justify-center"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-[0.6rem] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
