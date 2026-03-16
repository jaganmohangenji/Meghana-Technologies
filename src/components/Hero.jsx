import React from 'react';
import { Shield, ChevronRight, FileCode, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[var(--color-navy)]">
      {/* Background with tech pattern / overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Shield size={18} className="text-[var(--color-orange)] mr-2" />
              <span className="text-sm font-medium tracking-wide">Trusted by Indian Naval Units</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              Innovative Technology & <br />
              <span className="text-[var(--color-tech-blue)]">Security Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Providing defense-grade software development, RFID systems, security infrastructure, and specialized engineering services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-[var(--color-orange)] hover:bg-[#d97000] text-white px-8 py-4 rounded-md font-medium text-lg transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(247,127,0,0.4)]">
                Explore Services
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-md font-medium text-lg transition-all flex items-center justify-center">
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center"><CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> ISO Certified</div>
              <div className="flex items-center"><CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> 24/7 Support</div>
              <div className="flex items-center"><CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> ENC Vendor</div>
            </div>
          </motion.div>

          {/* Right Imagery / Tech Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-[var(--color-tech-blue)]/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Cyber Security Technology" 
                    className="w-[80%] h-[80%] object-cover rounded-2xl shadow-2xl border-4 border-white/5 opacity-80"
                 />
              </div>
              
              {/* Floating Tech Cards */}
              <div className="absolute top-[10%] -left-4 bg-[var(--color-navy)] border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="h-10 w-10 bg-[var(--color-tech-blue)]/20 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-[var(--color-tech-blue)]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-poppins">Secure Biometrics</p>
                  <p className="text-gray-400 text-[10px]">Active Tracking</p>
                </div>
              </div>
              
              <div className="absolute bottom-[20%] -right-8 bg-[var(--color-navy)] border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="h-10 w-10 bg-[var(--color-orange)]/20 rounded-lg flex items-center justify-center">
                  <FileCode size={20} className="text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-poppins">Custom Software</p>
                  <p className="text-gray-400 text-[10px]">Cloud Deployed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
