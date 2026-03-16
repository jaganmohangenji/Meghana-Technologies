import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Anchor, MapPin, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      unit: 'INS VIRBAHU',
      tasks: [
        'Website Development',
        'Manpower Utilization System (Prototype)',
        'File Tracking Application for 14SS',
        'Room Booking Application',
        'Vehicle Check-in/out through Boom Barriers using Finger Print Biometric Devices'
      ],
      image: 'https://images.unsplash.com/photo-1542382156909-9ae382da3d71?q=80&w=2072&auto=format&fit=crop'
    },
    {
      unit: 'INS VISHWAKARMA',
      tasks: [
        'Visitor Management System',
        'Interior and Exterior Designing of SAGAR'
      ],
      image: 'https://images.unsplash.com/photo-1582062536830-bd3bb23fcc4e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      unit: 'INS DEGA',
      tasks: [
        'CCTV Surveillance Systems at Logistics Office, MT Pool',
        'Renovation of TRS Block & Logistics Conference Room'
      ],
      image: 'https://images.unsplash.com/photo-1510007802148-e76e1913197c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      unit: 'ENC Residential Areas & Others',
      tasks: [
        'Vehicle Management and Tracking System for all Quarters',
        'Renovation of Flag Command Post (INS MYSORE)',
        'Cashless Transaction System using RFID at TARANG'
      ],
      image: 'https://images.unsplash.com/photo-1579758629938-03607cc9aa44?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--color-navy)] text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-orange)] font-bold tracking-wider text-sm uppercase mb-2 block">
            Proven Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Naval Projects
          </h2>
          <div className="h-1 w-20 bg-[var(--color-tech-blue)] mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors`}
            >
              <div className="w-full md:w-2/5 overflow-hidden rounded-xl h-64 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.unit} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="w-full md:w-3/5">
                <div className="flex items-center gap-3 mb-4">
                  <Anchor className="text-[var(--color-orange)]" size={28} />
                  <h3 className="text-2xl font-poppins font-bold">{project.unit}</h3>
                </div>
                
                <ul className="space-y-3">
                  {project.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle size={18} className="text-[var(--color-tech-blue)] mr-3 mt-1 shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
