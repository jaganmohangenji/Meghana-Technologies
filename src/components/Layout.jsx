import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Add padding for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
