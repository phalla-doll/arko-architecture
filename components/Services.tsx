import React from 'react';
import { SectionLabel } from './ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 's1',
    title: 'Custom Home Design',
    description: 'We build from scratch based on your vision, not a template.',
    imageUrl: 'https://picsum.photos/300/200?random=4'
  },
  {
    id: 's2',
    title: 'Project Management',
    description: 'From permits to handover, we handle it all with precision.',
    imageUrl: 'https://picsum.photos/300/200?random=5'
  },
  {
    id: 's3',
    title: 'Interior Design',
    description: 'Where function meets aesthetic curated finishes, top to bottom.',
    imageUrl: 'https://picsum.photos/300/200?random=6'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="bg-white text-arko-dark py-24 md:py-32 grid-lines border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        <SectionLabel 
          number="03" 
          title="What We Offer?" 
          description="We design from scratch shaped by your vision, not a predefined template."
        />

        <div className="md:w-3/4 md:pl-12 border-l border-dashed border-gray-200 flex flex-col gap-12">
           {services.map((service) => (
             <div key={service.id} className="group flex flex-col md:flex-row gap-8 items-center border-b border-gray-100 pb-12 last:border-0">
               <div className="flex-1">
                 <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                 <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">{service.description}</p>
                 <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-arko-dark hover:text-white transition-colors group-hover:border-arko-dark">
                    Explore More
                    <div className="bg-arko-dark text-white rounded-full p-1 group-hover:bg-white group-hover:text-arko-dark transition-colors">
                        <ArrowUpRight size={12} />
                    </div>
                 </button>
               </div>
               <div className="w-full md:w-1/3">
                  <div className="overflow-hidden rounded-sm relative aspect-[4/3]">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                      />
                  </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};