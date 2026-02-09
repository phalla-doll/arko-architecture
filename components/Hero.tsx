import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#bfaea4]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale&blur=2)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-arko-dark/90"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-24">
        {/* Giant Text */}
        <h1 className="text-[12vw] md:text-[14vw] font-bold text-white/10 leading-none absolute top-24 left-1/2 -translate-x-1/2 select-none pointer-events-none tracking-tighter">
          ARKO
        </h1>

        <div className="relative">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 md:gap-16">
             <div className="max-w-xl">
                 <img 
                    src="https://picsum.photos/800/600" 
                    alt="Modern house hero" 
                    className="w-full h-auto rounded-lg shadow-2xl mb-8 border border-white/20"
                 />
             </div>
             <div className="md:mb-12 text-white">
                <p className="uppercase tracking-widest text-xs mb-4 opacity-80 border-l border-white/40 pl-4">Architecture & Interior Design</p>
                <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
                    Redefining <br/> Residential Living
                </h2>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};