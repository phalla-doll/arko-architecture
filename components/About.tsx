import React from 'react';
import { SectionLabel } from './ui/SectionLabel';

export const About: React.FC = () => {
  return (
    <section className="bg-arko-dark text-white py-24 md:py-32 relative overflow-hidden grid-lines-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        <SectionLabel 
          number="01" 
          title="About us" 
          description="7+ years of industry experience. Tailored, turn-key building solutions. Client first approach from start to finish."
          theme="dark"
        />

        <div className="md:w-3/4 md:pl-12 pt-4 md:pt-0 border-l border-dashed border-white/10">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-4xl leading-relaxed font-light text-gray-200">
              Founded with <span className="text-white font-semibold">a vision to redefine residential living</span>, 
              Arko blends innovative architecture with <span className="text-white font-semibold">functional design</span>. 
              From concept to completion.
            </h3>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
               <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
                  <span className="block text-3xl font-semibold mb-2">150+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">Projects Completed</span>
               </div>
               <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
                  <span className="block text-3xl font-semibold mb-2">24</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">Awards Won</span>
               </div>
               <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
                  <span className="block text-3xl font-semibold mb-2">100%</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">Client Satisfaction</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};