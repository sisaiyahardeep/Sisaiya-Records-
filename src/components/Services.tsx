import React from 'react';
import { motion } from 'motion/react';
import { Globe, HardDriveDownload, User, TrendingUp, Calendar, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Worldwide Music Distribution",
    description: "Helping independent releases reach major digital music platforms and audiences worldwide.",
    icon: Globe,
  },
  {
    title: "Digital Music Delivery",
    description: "Professional digital delivery designed to connect releases with today's major music ecosystems.",
    icon: HardDriveDownload,
  },
  {
    title: "Artist Services",
    description: "Artist-focused support for independent musicians building their identity and growing their digital presence.",
    icon: User,
  },
  {
    title: "Music Promotion",
    description: "Supporting releases with digital-focused promotional strategies and audience discovery.",
    icon: TrendingUp,
  },
  {
    title: "Release Management",
    description: "Organized support around release planning, metadata, delivery and digital release workflows.",
    icon: Calendar,
  },
  {
    title: "Rights & Copyright",
    description: "Supporting artists and releases with a professional approach to rights, ownership and digital content management.",
    icon: ShieldCheck,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">What We Do</h2>
          <div className="w-12 h-[1px] bg-gold-500/50 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 rounded-sm"
            >
              <service.icon className="w-8 h-8 text-zinc-500 group-hover:text-gold-400 transition-colors mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-zinc-200 mb-4">{service.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
