import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import { MapPin, ExternalLink, Clock, Phone } from 'lucide-react';

const Location = () => {
  const mapUrl = "https://www.google.com/maps/place/dhawoods+biriyani+ecr/data=!4m2!3m1!1s0x3a525b4bcc0520df:0xeffd5547106b22a1?sa=X&ved=1t:242&ictx=111";

  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-brand-orange mb-8">
            Find Us
          </h1>
          <p className="text-brand-orange font-poppins font-black text-base tracking-widest uppercase mb-4 opacity-80">Since 1994</p>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Visit us at the French Village Food Court, East Coast Road. Experience the unique charm of ECR while savoring Chennai's most authentic firewood-cooked briyani. Ample parking, great atmosphere, and unbeatable taste await you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-sandal premium-shadow space-y-12">
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-4 text-text-primary uppercase tracking-widest">
                <div className="bg-brand-orange/10 p-3 rounded-2xl">
                  <MapPin className="h-7 w-7 text-brand-orange" />
                </div>
                Our Address
              </h3>
              <p className="text-base sm:text-lg md:text-2xl font-medium text-text-secondary leading-loose opacity-90 pl-14">
                French Village Food Court, Sea Shell Avenue, East Coast Rd, Akkarai, Panaiyur, Chennai, Tamil Nadu 600119
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-black text-text-primary uppercase tracking-widest flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-orange" />
                  Hours
                </h4>
                <p className="text-lg sm:text-xl font-bold text-text-secondary">11:30 AM – 11:00 PM</p>
                <p className="text-xs sm:text-sm text-gray-400 font-bold italic">Open Every Day</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-black text-text-primary uppercase tracking-widest flex items-center gap-2">
                  <Phone className="h-5 w-5 text-brand-orange" />
                  Contact
                </h4>
                <p className="text-lg sm:text-xl font-bold text-text-secondary"><a href="tel:9500501978" className="hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500501978</a></p>
                <p className="text-lg sm:text-xl font-bold text-text-secondary"><a href="tel:9500502078" className="hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500502078</a></p>
              </div>
            </div>

            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-brand-orange hover:bg-brand-hover text-white font-black py-4 sm:py-6 px-6 sm:px-8 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 text-base sm:text-lg md:text-xl uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
            >
              Get Directions
              <ExternalLink className="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
          </div>

          <div className="relative h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl premium-shadow group">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop" 
              alt="DHAWOODS BIRIYANI restaurant location ECR Chennai" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop';
                e.target.alt = 'Delicious briyani at Dhawood\'s restaurant';
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] shadow-2xl">
               <p className="text-text-primary font-black text-base sm:text-lg md:text-xl leading-snug">Located in the heart of French Village, ECR's premier food destination.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Location;
