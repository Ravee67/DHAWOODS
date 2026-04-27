import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order Now', path: '/order-now' },
    { name: 'Catering', path: '/catering' },
    { name: 'Reserve a Table', path: '/reserve' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' },
    { name: 'Location', path: '/location' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      zIndex: 50, 
      backgroundColor: '#4A2535', 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>

      <div 
        className="px-4 sm:px-8 lg:px-16"
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          width: '100%', 
          height: '80px', 
        }}
      >
        {/* Left Side: Branding */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <img 
            src="/logo.png" 
            alt="Dhawood's Briyani Logo" 
            style={{ height: '40px', width: 'auto' }}
            className="lg:h-12"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <h1 className="font-poppins font-black text-white uppercase tracking-wide text-xl lg:text-2xl" style={{ margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Dhawood's Briyani
          </h1>
        </Link>

        {/* Right Side: Links Wrapper */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          {/* Desktop Links */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '8px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 xl:px-4 py-2 rounded-xl text-[10px] xl:text-[11px] font-poppins font-black transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white tracking-widest uppercase ${
                  location.pathname === link.path 
                    ? 'bg-white text-brand-orange shadow-lg scale-105' 
                    : 'text-white hover:bg-white/20 active:scale-95'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-4 rounded-xl text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Secondary Navbar Strip */}
      <div style={{
        height: '8px',
        backgroundColor: '#6B3550',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#4A2535] border-t-4 border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-6 py-4 rounded-xl text-lg font-playfair font-bold transition-all duration-200 focus:outline-none ${
                    location.pathname === link.path 
                      ? 'bg-white text-brand-orange shadow-lg' 
                      : 'text-white hover:bg-white/10 active:scale-95'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
