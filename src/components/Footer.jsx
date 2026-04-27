import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Order Now', path: '/order-now' },
    { name: 'Catering', path: '/catering' },
    { name: 'Reserve a Table', path: '/reserve' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <footer className="bg-dark text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-playfair font-bold" style={{ color: '#FFD700' }}>Dhawood's Briyani</h2>
          <div className="text-sm font-poppins space-y-1">
            <p className="text-gray-300">Firewood Cooking Style</p>
            <p className="text-gray-300 italic">Bhai Briyani</p>
          </div>
          <div className="flex space-x-4 pt-2">
            <a href="https://www.instagram.com/dhawoodsbiriyani/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/people/Dhawoods-Biriyani/61561438374882/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.google.com/maps/place/dhawoods+biriyani+ecr/data=!4m2!3m1!1s0x3a525b4bcc0520df:0xeffd5547106b22a1" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              <MapPin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-6">Quick Links</h3>
          <ul className="grid grid-cols-1 gap-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-playfair font-bold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
              <span className="font-bold">9500501978 | 9500502078</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0" />
              <span className="text-gray-400 leading-relaxed">
                French Village Food Court, Sea Shell Avenue, East Coast Rd, Akkarai, Panaiyur, Chennai, Tamil Nadu 600119
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center pt-8 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Dhawood's Briyani. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
