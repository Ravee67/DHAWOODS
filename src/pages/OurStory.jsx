import React from 'react';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

const OurStory = () => {
  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-16 sm:py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-brand-orange mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Dhawood's Briyani was born from a passion for authentic, firewood-cooked flavors. Our journey started on the East Coast Road, with a mission to bring the traditional 'Bhai Briyani' taste to Chennai's food lovers. Every dish we serve is a tribute to heritage, slow-cooked to perfection using secret family recipes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 items-center mb-16 sm:mb-24">
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl premium-shadow h-[40vh] sm:h-[60vh]">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop" 
              alt="Authentic firewood briyani at Dhawood's restaurant Chennai" 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay"></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-text-primary leading-tight">The Firewood Legacy</h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed sm:leading-loose font-medium opacity-90">
              Unlike modern cooking methods, we stick to the ancient art of firewood cooking. This slow-burning heat infuses our briyani with a unique smoky aroma and depth of flavor that is simply impossible to replicate.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed sm:leading-loose font-medium opacity-90">
              Our ingredients are hand-picked, our spices are freshly ground, and our commitment to quality is unwavering. When you dine with us, you're not just having a meal; you're partaking in a legacy of taste.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-sandal premium-shadow text-center">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-brand-orange mb-8 italic">"Quality is our primary ingredient, and your satisfaction is our greatest reward."</h2>
           <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-black uppercase tracking-widest">— The Dhawood's Family</p>
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

export default OurStory;
