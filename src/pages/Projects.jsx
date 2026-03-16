import React from 'react';
import ProjectsComponent from '../components/Projects';
import OtherWorks from '../components/OtherWorks';

const Projects = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[var(--color-navy)] flex items-center justify-center pt-10">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542382156909-9ae382da3d71?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Our Projects & Portfolio
          </h1>
          <div className="h-1 w-24 bg-[var(--color-orange)] mx-auto"></div>
        </div>
      </section>

      {/* Naval Projects */}
      <div className="-mt-10">
         <ProjectsComponent />
      </div>

      {/* Engineering Portfolio */}
      <OtherWorks />

    </div>
  );
};

export default Projects;
