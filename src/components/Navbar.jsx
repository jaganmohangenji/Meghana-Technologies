import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // On Hero sections that are light or white, initial text needs to be dark
  const isHomePage = location.pathname === '/';
  
  // We want the solid bg styling when scrolling, OR on inner pages that don't have hero images.
  // Actually, wait, let's keep the Navbar ALWAYS text-[var(--color-navy)] initially, 
  // since the Hero background is light gray ("bg-[var(--color-light-gray)]"). 
  const shouldBeSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceCategories = [
    { name: 'Security Systems', path: '/services/security-systems' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Interior Designing', path: '/services/interior-designing' },
    { name: 'Renovation', path: '/services/renovation' },
    { name: 'Fabrication', path: '/services/fabrication' },
    { name: 'Civil Works', path: '/services/civil-works' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldBeSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-50">
            <div className="w-10 h-10 bg-[var(--color-navy)] rounded-md flex items-center justify-center text-white font-poppins font-bold text-xl">
              M
            </div>
            <span className={`font-poppins font-bold text-xl tracking-tight transition-colors ${
              shouldBeSolid ? 'text-[var(--color-navy)]' : 'text-[var(--color-navy)]'
            }`}>
              Meghana Technologies
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/" className={`font-medium transition-colors hover:text-[var(--color-orange)] ${shouldBeSolid ? 'text-gray-700' : 'text-[var(--color-navy)]'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`font-medium transition-colors hover:text-[var(--color-orange)] ${shouldBeSolid ? 'text-gray-700' : 'text-[var(--color-navy)]'}`}>
                  About Us
                </Link>
              </li>
              
              {/* Services Dropdown */}
              <li 
                className="relative group py-4"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link to="/services" className={`font-medium transition-colors hover:text-[var(--color-orange)] flex items-center ${shouldBeSolid ? 'text-gray-700' : 'text-[var(--color-navy)]'}`}>
                  Services <ChevronDown size={14} className="ml-1" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-64 bg-white rounded-md shadow-xl border border-gray-100 transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <ul className="py-2">
                    {serviceCategories.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--color-light-gray)] hover:text-[var(--color-tech-blue)] transition-colors"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link to="/projects" className={`font-medium transition-colors hover:text-[var(--color-orange)] ${shouldBeSolid ? 'text-gray-700' : 'text-[var(--color-navy)]'}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/technologies" className={`font-medium transition-colors hover:text-[var(--color-orange)] ${shouldBeSolid ? 'text-gray-700' : 'text-[var(--color-navy)]'}`}>
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`font-medium transition-colors hover:text-[var(--color-orange)] ${shouldBeSolid ? 'text-gray-700' : 'text-[var(--color-navy)]'}`}>
                  Contact
                </Link>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="bg-[var(--color-orange)] hover:bg-[#d97000] text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} className="mr-2" />
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${shouldBeSolid || isMobileMenuOpen ? 'text-[var(--color-navy)]' : 'text-[var(--color-navy)]'} focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out z-40 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-24 px-6 overflow-y-auto h-full pb-20">
          <ul className="flex flex-col space-y-4">
            {navLinks.filter(l => l.name !== 'Contact').map((link) => (
              <li key={link.name} className="border-b border-gray-100 pb-4">
                <Link 
                  to={link.path} 
                  className="block text-lg font-poppins font-bold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            <li className="border-b border-gray-100 pb-4">
               <span className="block text-lg font-poppins font-bold text-[var(--color-navy)] mb-3">
                  Services
               </span>
               <ul className="pl-4 space-y-3">
                 <li>
                   <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 font-medium hover:text-[var(--color-tech-blue)]">
                     All Services
                   </Link>
                 </li>
                 {serviceCategories.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.path}
                        className="block text-gray-600 font-medium hover:text-[var(--color-tech-blue)] text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
               </ul>
            </li>
            
            <li className="pt-4">
               <Link 
                to="/contact" 
                className="bg-[var(--color-navy)] text-white w-full flex justify-center py-4 rounded-md font-bold text-lg hover:bg-[var(--color-tech-blue)] transition-colors shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
