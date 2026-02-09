import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="bg-arko-charcoal text-white py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Build? Let's Talk.</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">Let Arko guide you from concept to keys. It starts with a simple conversation.</p>
            
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-transparent hover:bg-white hover:text-arko-dark transition-all duration-300 group">
                <span className="text-sm font-semibold uppercase tracking-widest">Call Us</span>
                <div className="w-8 h-8 rounded-full bg-white text-arko-dark flex items-center justify-center group-hover:bg-arko-dark group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                </div>
            </button>
        </div>
    </section>
  );
};