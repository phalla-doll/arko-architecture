import React from 'react';
import { SectionLabel } from './ui/SectionLabel';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Micheal Harrington',
    role: 'Homeowner, ARKO Project Client',
    quote: 'ARKO made our home building journey smooth and stress free. From design to construction, everything was handled professionally with clear communication and attention to detail. We felt involved and confident every step of the way.',
    imageUrl: 'https://picsum.photos/300/300?random=7',
    initial: 'M'
  },
  {
    id: 't2',
    name: 'Tania Li',
    role: 'Interior Designer',
    quote: 'Working with ARKO was one of the best decisions we made. They understand not just how to build, but how to create a living space that truly reflects our needs and personality. Efficient, reliable, and beautifully executed.',
    imageUrl: 'https://picsum.photos/300/300?random=8',
    initial: 'T'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white text-arko-dark py-24 md:py-32 grid-lines">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        <SectionLabel 
          number="04" 
          title="Why homeowners choose ARKO?" 
        />

        <div className="md:w-3/4 md:pl-12 border-l border-dashed border-gray-200">
           
           <div className="flex flex-col gap-16">
              {testimonials.map((item, index) => (
                <div key={item.id} className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   {/* Portrait */}
                   <div className="w-full md:w-1/3">
                      <div className="aspect-square rounded-sm overflow-hidden">
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                   </div>
                   
                   {/* Content */}
                   <div className="flex-1 flex flex-col justify-center">
                       <h3 className="text-xl md:text-2xl font-medium leading-tight mb-4">
                         {item.quote.split('. ')[0]}.
                       </h3>
                       <p className="text-gray-500 text-sm leading-relaxed mb-8">
                         {item.quote.substring(item.quote.indexOf('. ') + 1)}
                       </p>
                       
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-arko-dark text-white flex items-center justify-center font-bold">
                             {item.initial}
                          </div>
                          <div>
                             <p className="font-semibold text-sm">{item.name}</p>
                             <p className="text-xs text-gray-500">{item.role}</p>
                          </div>
                       </div>
                   </div>

                   {/* Stats Area (Only for first item to match design) */}
                   {index === 0 && (
                      <div className="hidden md:flex flex-col justify-center items-end border-l border-gray-100 pl-8">
                         <div className="text-right mb-12">
                            <span className="text-5xl font-bold block mb-1">100%</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wide">On time project delivery</span>
                         </div>
                         <div className="text-right">
                             <span className="text-5xl font-bold block mb-1">100%</span>
                             <span className="text-xs text-gray-400 uppercase tracking-wide">Budget adherence</span>
                         </div>
                      </div>
                   )}
                </div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};