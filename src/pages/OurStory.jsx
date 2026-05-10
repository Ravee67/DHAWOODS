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
          <p className="text-brand-orange font-black text-base tracking-widest uppercase mb-4 opacity-80">Since 1994</p>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Since 1994, Dhawoods Biriyani has been serving authentic flavors, unforgettable taste, and premium-quality food to biryani lovers across Chennai. What began as a passion for traditional cooking and rich South Indian hospitality has today become one of the trusted names for Biryani in Chennai and a favorite food destination on ECR.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-text-primary leading-tight">Our Story – DHAWOODS BIRIYANI ECR</h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed sm:leading-loose font-medium opacity-90">
              For more than three decades, we have stayed committed to one simple promise — delivering the perfect blend of quality, taste, freshness, and tradition in every plate we serve. Our signature biryani is prepared using premium basmati rice, handpicked spices, fresh ingredients, and time-tested recipes that create the rich aroma and authentic taste our customers love.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed sm:leading-loose font-medium opacity-90">
              At Dhawoods Biriyani ECR, every dish is crafted with care, maintaining the same consistency and flavor that made us popular since 1994. From flavorful Chicken Biryani and Mutton Biryani to grills, kebabs, seafood, and family-style dining, we continue to serve food that brings people together.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-sandal premium-shadow text-center">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-brand-orange mb-8 italic">"Quality is our primary ingredient, and your satisfaction is our greatest reward."</h2>
           <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-black uppercase tracking-widest">— The DHAWOODS BIRIYANI Family</p>
           <p className="text-brand-orange font-black text-xs tracking-widest uppercase mt-2 mb-0">Serving Chennai Since 1994</p>
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
