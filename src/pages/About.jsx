import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Building2, Calendar, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', icon: <Building2 size={24} /> },
    { year: '2015', title: 'Major Naval Projects', icon: <ShieldCheck size={24} /> },
    { year: '2020', title: 'RFID Technology Solutions', icon: <Users size={24} /> },
    { year: 'Present', title: 'Multi-role Technology Firm', icon: <Calendar size={24} /> },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[var(--color-navy)] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4"
          >
            About Meghana Technologies
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-[var(--color-orange)] mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <SectionHeader title="Our Story" subtitle="Who We Are" />
              <div className="prose text-gray-600 leading-relaxed text-justify space-y-4">
                <p>
                  We are a multi-role firm with the mission of providing innovative services and a vision of serving clients across the Indian Navy. Since our inception in 2010, we have continually expanded our footprint across various technological sectors.
                </p>
                <p>
                  Our expertise spans software development & solutions, security systems sales and service, interior designing and renovation, fabrication, and civil works.
                </p>
                <p>
                 In software, we specialize in <strong>RFID technology</strong> and <strong>cloud computing</strong>. Our state-of-the-art solutions are highly customizable and scalable because we understand that every client is fundamentally different.
                </p>
                <p>
                  We believe in providing full 360° support to our clients, ensuring that technology not only solves immediate problems but provides long-term, reliable infrastructure.
                </p>
              </div>
            </div>
            
            <div className="bg-[var(--color-light-gray)] p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-tech-blue)]/10 rounded-bl-full"></div>
               <h3 className="text-2xl font-poppins font-bold text-[var(--color-navy)] mb-6">Naval Credibility</h3>
               
               <div className="flex items-start mb-6">
                 <ShieldCheck className="text-[var(--color-orange)] mt-1 mr-4 shrink-0" size={28} />
                 <p className="text-gray-700 font-medium leading-relaxed">
                   We proudly state that Meghana Technologies is one of the <strong className="text-[var(--color-navy)]">registered and trusted vendors</strong> for the Eastern Naval Command (ENC), Indian Navy - Visakhapatnam.
                 </p>
               </div>
               
               <div className="space-y-3 mt-8">
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> 15+ Years Experience
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> 24x7 Active Support Team
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> Located in Visakhapatnam
                  </div>
               </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
             <SectionHeader title="Our People" subtitle="The Strength Behind The Tech" centered={true} />
             <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
               We are a team of highly enthusiastic, energetic, and tech-savvy engineers. The true strength of our company lies in the rich experience of our people, who come from diverse technical and operational backgrounds.
             </p>
             
             {/* Timeline */}
             <div className="bg-[var(--color-navy)] rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <h3 className="text-2xl font-bold font-poppins mb-10 text-center relative z-10">Our Journey & Milestones</h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                  {milestones.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-tech-blue)] mb-4 group-hover:bg-[var(--color-orange)] group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[var(--color-orange)] group-hover:text-white transition-colors font-bold text-lg block mb-2">{item.year}</span>
                      <span className="text-gray-300 font-medium">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
