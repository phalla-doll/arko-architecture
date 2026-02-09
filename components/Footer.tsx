import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-arko-dark text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
        {/* Subtle grid in footer */}
         <div className="absolute inset-0 grid-lines-dark opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between pb-20 border-b border-white/10">
          
          <div className="mb-12 md:mb-0">
             <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#projects" className="hover:text-white transition-colors">Project</a>
                <a href="#" className="hover:text-white transition-colors">Linkedin</a>
                <a href="#" className="hover:text-white transition-colors">Offer</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
             </div>
          </div>

          <div className="flex flex-col md:items-end">
             <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest mb-8">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Conditions</a>
             </div>
             <p className="text-xs text-gray-600">© 2025 ARKO. All rights reserved.</p>
          </div>
        </div>

        <div className="pt-12 flex flex-col items-center justify-center">
             <div className="flex items-center gap-4">
                <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="white"/>
                    <rect x="16" y="16" width="8" height="8" fill="#1a1a1a"/>
                </svg>
                <h1 className="text-[15vw] md:text-[12rem] font-bold leading-none tracking-tighter select-none text-white">
                    ARKO
                </h1>
             </div>
        </div>
      </div>
    </footer>
  );
};