import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#030303] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Footer */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="mb-6">
              <span className="block font-serif text-2xl tracking-widest uppercase text-white mb-1">
                Sisaiya
              </span>
              <span className="block font-sans text-xs tracking-[0.3em] uppercase text-zinc-500">
                Records Digital Media
              </span>
            </div>
            <p className="font-serif italic text-gold-400/80 mb-6">"Independent Music. Global Reach."</p>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>Email: <a href="mailto:info@sisaiyarecords.in" className="hover:text-white transition-colors">info@sisaiyarecords.in</a></p>
              <p>Instagram: <a href="https://www.instagram.com/sisaiyarecords" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@SisaiyaRecords</a></p>
              <p>India</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-zinc-200 uppercase tracking-wider mb-4 text-xs font-semibold">Navigation</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#artists" className="hover:text-white transition-colors">Artists</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-200 uppercase tracking-wider mb-4 text-xs font-semibold">Legal</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><a href="#copyright" className="hover:text-white transition-colors">Copyright</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#distribution" className="hover:text-white transition-colors">Distribution Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="border-t border-zinc-900 pt-12 pb-12 space-y-12">
          
          <section id="copyright" className="text-xs text-zinc-500 leading-relaxed max-w-4xl">
            <h5 className="text-zinc-300 font-semibold mb-2 uppercase tracking-wider">Copyright Notice</h5>
            <p>© 2026 Sisaiya Records Digital Media. All Rights Reserved.</p>
            <p className="mt-2">All original text, branding, graphics and other original website content presented by Sisaiya Records Digital Media are protected by applicable copyright and intellectual-property laws. Unauthorized reproduction, redistribution or commercial use of original website materials is prohibited unless permission has been granted.</p>
          </section>

          <section id="privacy" className="text-xs text-zinc-500 leading-relaxed max-w-4xl">
            <h5 className="text-zinc-300 font-semibold mb-2 uppercase tracking-wider">Privacy Policy</h5>
            <p>This website is designed as a static informational website. Sisaiya Records Digital Media does not require visitors to create accounts or submit personal information through this website. No user account or database is maintained through the website. If a visitor contacts us by email or through an external social-media platform, information provided voluntarily by the visitor may be used solely to respond to the inquiry. Third-party websites such as Instagram may have their own privacy policies.</p>
          </section>

          <section id="terms" className="text-xs text-zinc-500 leading-relaxed max-w-4xl">
            <h5 className="text-zinc-300 font-semibold mb-2 uppercase tracking-wider">Terms of Use</h5>
            <ul className="list-disc pl-4 space-y-1 mt-2">
              <li>Website content is provided for general informational purposes.</li>
              <li>Visitors may not misuse, reproduce or commercially exploit original website content without permission.</li>
              <li>Third-party trademarks and platform names remain the property of their respective owners.</li>
              <li>Sisaiya Records does not guarantee streams, playlist placements, revenue, audience growth or platform approval.</li>
              <li>External links are subject to the policies of their respective platforms.</li>
            </ul>
          </section>

          <section id="distribution" className="text-xs text-zinc-500 leading-relaxed max-w-4xl">
            <h5 className="text-zinc-300 font-semibold mb-2 uppercase tracking-wider">Distribution Policy</h5>
            <p>Distribution, release acceptance, rights management and related services may be subject to eligibility requirements, content standards, ownership verification and applicable platform policies. Sisaiya Records Digital Media reserves the right to review releases before accepting them for distribution.</p>
          </section>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© 2026 Sisaiya Records Digital Media. All Rights Reserved.</p>
          <p>India</p>
        </div>

      </div>
    </footer>
  );
}
