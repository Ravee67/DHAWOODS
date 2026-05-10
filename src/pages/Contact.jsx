import React from 'react';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Contact = () => {
  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-brand-orange mb-8">
            Contact Us
          </h1>
          <p className="text-brand-orange font-poppins font-black text-base tracking-widest uppercase mb-4 opacity-80">Since 1994</p>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Get in touch with Dhawood's Briyani for orders, catering inquiries, table reservations, or general questions. We're located at French Village Food Court on East Coast Road, Chennai. Call us, WhatsApp us, or find us on the map — we're always happy to serve you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-24 px-4">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-sandal premium-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-xl sm:text-2xl font-black mb-6 flex items-center gap-4 text-text-primary uppercase tracking-widest">
                  <div className="bg-brand-orange/10 p-3 rounded-2xl group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Phone className="h-7 w-7 text-brand-orange group-hover:text-white" />
                  </div>
                  Call Us
                </h3>
                <div className="space-y-3 text-lg sm:text-xl md:text-2xl font-black pl-14">
                  <p><a href="tel:9500501978" className="hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500501978</a></p>
                  <p><a href="tel:9500502078" className="hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500502078</a></p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl sm:text-2xl font-black mb-6 flex items-center gap-4 text-text-primary uppercase tracking-widest">
                  <div className="bg-brand-orange/10 p-3 rounded-2xl group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <MapPin className="h-7 w-7 text-brand-orange group-hover:text-white" />
                  </div>
                  Address
                </h3>
                <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-loose font-medium pl-14 opacity-80 group-hover:opacity-100 transition-opacity">
                  French Village Food Court, Sea Shell Avenue, East Coast Rd, Akkarai, Panaiyur, Chennai, Tamil Nadu 600119
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="group">
                <h3 className="text-xl sm:text-2xl font-black mb-8 uppercase tracking-widest text-text-primary">Social Connect</h3>
                <div className="flex flex-col gap-6">
                  <a 
                    href="https://wa.me/919500501978" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 bg-[#25D366] text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-black shadow-xl hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 active:scale-95 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                  >
                    <MessageCircle className="h-6 sm:h-8 w-6 sm:w-8" />
                    WhatsApp
                  </a>
                  <div className="flex gap-6">
                    <a 
                      href="https://www.instagram.com/dhawoodsbiriyani/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white py-4 sm:py-5 px-4 sm:px-6 rounded-2xl font-black shadow-xl opacity-90 hover:opacity-100 transition-all transform hover:-translate-y-1 active:scale-95 text-xs sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      <InstagramIcon />
                      <span className="hidden sm:inline">Instagram</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/people/Dhawoods-Biriyani/61561438374882/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-4 bg-[#1877F2] text-white py-4 sm:py-5 px-4 sm:px-6 rounded-2xl font-black shadow-xl hover:bg-[#0e5fc2] transition-all transform hover:-translate-y-1 active:scale-95 text-xs sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2"
                    >
                      <FacebookIcon />
                      <span className="hidden sm:inline">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <LocationMapBox />
      </div>
      <div className="py-12">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Contact;
