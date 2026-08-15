import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Artists() {
  return (
    <section id="artists" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Your Music.<br />
              <span className="italic text-zinc-400">Your Identity.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-12">
              Independent artists deserve more than just a distribution upload. Sisaiya Records Digital Media is built around a simple idea — give independent music a professional digital path while keeping the artist at the center.
            </p>
            
            <a
              href="mailto:info@sisaiyarecords.in"
              className="inline-flex items-center gap-3 text-white border-b border-gold-500/50 pb-2 hover:border-gold-400 hover:text-gold-400 transition-all uppercase tracking-wider text-sm font-medium"
            >
              Talk to Sisaiya Records <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {[
              { title: "Artist First", desc: "Prioritizing the creative vision and identity of the musician." },
              { title: "Professional Digital Delivery", desc: "Ensuring metadata and audio meet industry standards for digital platforms." },
              { title: "Global Audience Reach", desc: "Connecting independent releases with listeners worldwide." }
            ].map((point, idx) => (
              <div key={idx} className="bg-zinc-900/30 border border-white/5 p-8 rounded-sm">
                <div className="font-serif text-2xl text-zinc-200 mb-3">{point.title}</div>
                <div className="text-zinc-500 font-light text-sm">{point.desc}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
