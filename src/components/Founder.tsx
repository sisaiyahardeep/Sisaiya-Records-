import React from 'react';
import { motion } from 'motion/react';

export default function Founder() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-b border-white/10 py-16 text-center"
        >
          <h2 className="font-serif text-2xl text-zinc-400 mb-12 uppercase tracking-widest text-sm">Behind Sisaiya Records</h2>
          
          <h3 className="font-serif text-4xl text-white mb-2">Hardeep Sisaiya</h3>
          <p className="text-gold-400/80 italic text-lg mb-2">Founder & Owner</p>
          <p className="text-zinc-500 text-sm tracking-wider uppercase mb-8">Sisaiya Records Digital Media</p>
          
          <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
            Hardeep Sisaiya is the founder and owner behind Sisaiya Records, an independent music-focused digital media brand built around the vision of helping music and artists reach wider digital audiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
