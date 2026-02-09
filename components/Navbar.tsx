import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Icon */}
        <div className="flex items-center gap-2">
           <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L40 20L20 40L0 20L20 0Z" fill={scrolled ? "#1a1a1a" : "white"}/>
            <circle cx="20" cy="20" r="8" fill={scrolled ? "white" : "#1a1a1a"}/>
          </svg>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-12 text-xs font-medium tracking-widest uppercase ${scrolled ? 'text-arko-dark' : 'text-white'}`}>
          <a href="#" className="hover:opacity-60 transition-opacity">Home</a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">Project</a>
          <a href="#partners" className="hover:opacity-60 transition-opacity">Partners</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>

        {/* CTA Button */}
        <button className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${scrolled ? 'bg-arko-dark text-white hover:bg-gray-800' : 'bg-white text-arko-dark hover:bg-gray-200'}`}>
          Book a Call
          <ArrowUpRight size={14} />
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={scrolled ? 'text-arko-dark' : 'text-white'} /> : <Menu className={scrolled ? 'text-arko-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 md:hidden flex flex-col gap-4 items-center">
            <a href="#" className="text-arko-dark text-sm uppercase font-medium">Home</a>
            <a href="#projects" className="text-arko-dark text-sm uppercase font-medium">Project</a>
            <a href="#partners" className="text-arko-dark text-sm uppercase font-medium">Partners</a>
            <a href="#contact" className="text-arko-dark text-sm uppercase font-medium">Contact</a>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-arko-dark text-white text-sm uppercase font-semibold mt-2">
              Book a Call
              <ArrowUpRight size={16} />
            </button>
        </div>
      )}
    </nav>
  );
};