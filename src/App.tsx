import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Artists from './components/Artists';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Platforms />
        <Artists />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
