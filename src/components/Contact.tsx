import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-zinc-900/30 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">Let's Talk <span className="italic text-gold-400/80">Music.</span></h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            For distribution, artist services, collaborations or general inquiries, get in touch with Sisaiya Records.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:info@sisaiyarecords.in"
              className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors w-full sm:w-auto min-w-[280px]"
            >
              <Mail size={18} />
              Email Sisaiya Records
            </a>
            
            <a
              href="https://www.instagram.com/sisaiyarecords"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-zinc-700 text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:border-zinc-500 hover:bg-zinc-900 transition-colors w-full sm:w-auto min-w-[280px]"
            >
              <Instagram size={18} />
              Follow on Instagram
            </a>
          </div>
          
          <div className="mt-16 text-zinc-500 font-serif text-xl">
            info@sisaiyarecords.in
          </div>
        </motion.div>
      </div>
    </section>
  );
}
