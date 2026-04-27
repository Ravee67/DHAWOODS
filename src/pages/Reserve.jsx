import React from 'react';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import { Phone, MessageCircle } from 'lucide-react';

const Reserve = () => {
  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-brand-orange mb-8">
            Table Reservations
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Book your table at Dhawood's Briyani on East Coast Road, Chennai and enjoy an unforgettable firewood briyani dining experience. Perfect for family outings, romantic dinners, and friend get-togethers. Reserve your spot today and savor the best briyani in Chennai.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="relative h-[60vh] rounded-[3rem] overflow-hidden mb-24 shadow-2xl premium-shadow">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" 
            alt="Dine-in restaurant table reservation ECR Chennai Dhawood's Briyani" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop';
              e.target.alt = 'Delicious dining experience at Dhawood\'s restaurant';
            }}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
             <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-playfair font-bold mb-4 drop-shadow-xl">Experience the Firewood Magic</h2>
                <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
             </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl border border-sandal premium-shadow">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-text-primary mb-4">Book Your Visit</h3>
            <p className="text-lg text-text-secondary font-medium leading-relaxed italic opacity-80">
              "To ensure the best experience, we recommend booking your table at least 2 hours in advance. For groups larger than 10, please call us directly for special arrangements."
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <a 
              href="tel:9500501978"
              className="group flex items-center justify-center gap-4 bg-brand-orange hover:bg-brand-hover text-white font-black py-4 sm:py-6 px-8 sm:px-10 rounded-2xl text-base sm:text-lg md:text-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
            >
              <Phone className="h-6 sm:h-8 w-6 sm:w-8 transition-transform group-hover:scale-110" />
              Call to Reserve
            </a>
            
            <a 
              href="https://wa.me/919500501978"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 sm:py-6 px-8 sm:px-10 rounded-2xl text-base sm:text-lg md:text-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              <MessageCircle className="h-6 sm:h-8 w-6 sm:w-8 transition-transform group-hover:scale-110" />
              Chat on WhatsApp
            </a>
            
            <div className="text-center space-y-2 mt-6">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs sm:text-sm">Direct Contact Lines</p>
              <p className="text-base sm:text-xl md:text-2xl font-black text-text-primary flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                <a href="tel:9500501978" className="text-brand-orange hover:underline focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500501978</a>
                <span className="text-gray-300">|</span>
                <a href="tel:9500502078" className="text-brand-orange hover:underline focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500502078</a>
              </p>
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

export default Reserve;
