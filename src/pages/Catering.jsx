import React from 'react';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import { Phone, MessageCircle } from 'lucide-react';

const Catering = () => {
  const cateringCategories = [
    {
      title: "Wedding Events",
      image: "/images/dhawoods-briyani-wedding-catering-banana-leaf-tamil-nadu.webp",
      alt: "Dhawood's Briyani Traditional Tamil Nadu Wedding Catering on Banana Leaf"
    },
    {
      title: "Private Parties",
      image: "/images/dhawoods-briyani-private-party-catering-banana-leaf-chennai.webp",
      alt: "Dhawood's Briyani Private Party Catering on Banana Leaf Chennai"
    },
    {
      title: "Corporate Events",
      image: "/images/dhawoods-briyani-corporate-catering-banana-leaf-meal-setup.webp",
      alt: "Dhawood's Briyani Corporate Catering Banana Leaf Meal Setup"
    }
  ];

  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-16 sm:py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-brand-orange mb-6 tracking-tight">
            Grand Catering
          </h1>
          <p className="text-brand-orange font-poppins font-black text-base tracking-widest uppercase mb-4 opacity-80">Since 1994</p>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Dhawood's Briyani offers premium catering services across Chennai for weddings, private parties, corporate lunches, and large gatherings. Our firewood-style briyanis and BBQ platters are a guaranteed crowd-pleaser.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-24">
          {cateringCategories.map((cat, i) => (
            <div key={i} className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-sandal/20">
              <img 
                src={cat.image} 
                alt={cat.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-12 md:p-20 shadow-2xl border border-sandal text-center max-w-5xl mx-auto premium-shadow">
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-16 font-medium leading-relaxed italic">
            "From intimate family gatherings to large corporate events, Dhawood's Briyani catering team ensures every meal is cooked fresh and served hot. Our signature Bucket Briyani packs, BBQ platters, and dessert spreads make every occasion memorable. Contact us today to customize your catering menu."
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-lg sm:text-xl md:text-2xl font-black text-text-primary">
                <div className="bg-brand-orange/10 p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-brand-orange" />
                </div>
                <a href="tel:9500501978" className="hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500501978</a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-lg sm:text-xl md:text-2xl font-black text-text-primary">
                <div className="bg-brand-orange/10 p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-brand-orange" />
                </div>
                <a href="tel:9500502078" className="hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded px-2 py-1">9500502078</a>
              </div>
            </div>
            
            <div className="h-px lg:h-16 w-32 lg:w-px bg-sandal"></div>
            
            <a 
              href="https://wa.me/919500501978" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 sm:py-6 px-8 sm:px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 text-sm sm:text-lg md:text-xl uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              <MessageCircle className="h-6 sm:h-8 w-6 sm:w-8" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <LocationMapBox />
      <TestimonialsSection />
    </div>
  );
};

export default Catering;
