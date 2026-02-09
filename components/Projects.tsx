import React from 'react';
import { SectionLabel } from './ui/SectionLabel';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Curve Villa',
    location: 'Munich',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    large: true
  },
  {
    id: '2',
    title: 'The Haven Residence',
    location: 'Germany',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    large: false
  },
  {
    id: '3',
    title: 'Echo Terrace',
    location: 'Netherland',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    large: false
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white text-arko-dark py-24 md:py-32 grid-lines border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        <SectionLabel 
          number="02" 
          title="Latest Project" 
          description="Take a look at some of our most recent builds, each one uniquely crafted to meet our clients' lifestyle and goals."
        />

        <div className="md:w-3/4 md:pl-12 border-l border-dashed border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Large Project */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-4">
                 <img src={projects[0].imageUrl} alt={projects[0].title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                 <h3 className="text-lg font-medium">{projects[0].title}</h3>
                 <span className="text-xs uppercase tracking-widest text-gray-500">{projects[0].location}</span>
              </div>
            </div>

            {/* Smaller Projects */}
            {projects.slice(1).map(project => (
              <div key={project.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-4">
                   <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                   <h3 className="text-lg font-medium">{project.title}</h3>
                   <span className="text-xs uppercase tracking-widest text-gray-500">{project.location}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center md:justify-start">
             <button className="text-sm font-semibold uppercase tracking-widest border-b border-arko-dark pb-1 hover:opacity-50 transition-opacity">View All Projects</button>
          </div>
        </div>
      </div>
    </section>
  );
};