import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Built for <span className="italic text-gold-400/80">Independent</span> Music.
            </h2>
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                Sisaiya Records Digital Media is an India-based independent music label focused on helping artists bring their music to digital audiences. From music distribution and digital delivery to artist-focused services and release support, our goal is simple — help independent music travel further.
              </p>
              <p className="text-zinc-300">
                We believe great music deserves a professional path to the world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full bg-zinc-900/30 border border-white/5 flex items-center justify-center overflow-hidden rounded-sm"
          >
            {/* Abstract visual */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-50">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-[2px] bg-zinc-600 rounded-full"
                  animate={{
                    height: ["20%", "80%", "30%", "60%", "20%"],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
