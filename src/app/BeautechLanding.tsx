import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react';

// --- Theme Configuration (Mapping Figma Styles) ---
const colors = {
  primary: '#FAF9F6', // Off-white/Cream
  accent: '#C5A38F',  // Muted Gold/Rose
  dark: '#1A1A1A',    // Deep Charcoal
  muted: '#6B7280',   // Soft Gray
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-tighter text-dark">
          BEAU<span className="text-accent">TECH</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-dark hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-dark text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="absolute top-full left-0 w-full bg-white p-6 flex flex-col space-y-4 shadow-xl md:hidden"
        >
          {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-dark border-b pb-2">{item}</a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Innovation in Beauty</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mt-4 leading-tight">
            Redefining the <br /> 
            <span className="italic text-accent">Standard</span> of Care.
          </h1>
          <p className="text-muted mt-6 text-lg max-w-md leading-relaxed">
            Experience the fusion of medical precision and aesthetic artistry. Our advanced technology ensures natural, radiant results tailored to your unique biology.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-dark text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black transition-all group">
              View Treatments <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-dark/20 px-8 py-4 rounded-full font-medium hover:bg-white transition-all">
              Our Philosophy
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* This would be your Figma main image */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
            <img 
              src="/images/hero_laptop_woman.png" 
              alt="Skin Care Treatment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
              <p className="text-dark font-bold text-xl">98%</p>
              <p className="text-muted text-xs uppercase tracking-tighter">Patient Satisfaction</p>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Laser Therapy', desc: 'Advanced skin resurfacing for timeless radiance.', icon: '✨' },
    { title: 'Dermal Fillers', desc: 'Precision sculpting to enhance your natural contours.', icon: '💧' },
    { title: 'Medical Facials', desc: 'Deep cellular renewal using clinical-grade tech.', icon: '🌿' },
    { title: 'Anti-Aging', desc: 'Science-backed treatments to reverse time.', icon: '⏳' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark">Our Expert Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-gray-100 bg-[#FAF9F6] hover:border-accent/50 transition-all group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                Learn More <ArrowRight size={14} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-serif font-bold mb-6">
            BEAU<span className="text-accent">TECH</span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Combining cutting-edge biotechnology with luxury wellness to provide 
            the future of aesthetic care.
          </p>
          <div className="flex space-x-4 mt-8">
            <Instagram className="cursor-pointer hover:text-accent transition-colors" />
            <Facebook className="cursor-pointer hover:text-accent transition-colors" />
            <Twitter className="cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>123 Beauty Blvd, NY</li>
            <li>hello@beautech.com</li>
            <li>+1 (555) 000-1111</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Beautech Aesthetics. All rights reserved.
      </div>
    </footer>
  );
};

export default function BeautechLanding() {
  return (
    <div className="font-sans text-dark selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      {/* Add more sections like About, Reviews, etc. here */}
      <Footer />
    </div>
  );
}
