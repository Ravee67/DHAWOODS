import React from 'react';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

const Testimonials = () => {
  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-brand-orange mb-8">
            Guest Experiences
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            At Dhawood's Briyani, we take immense pride in the smiles we create. Read what our valued guests have to say about our firewood briyanis, grilled delights, and our service at ECR Panaiyur, Chennai.
          </p>
        </div>
      </div>

      <div className="py-24">
        <TestimonialsSection />
      </div>

      <div className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-text-primary mb-12">Share Your Experience</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-16 leading-relaxed font-medium">
            Had a great time at Dhawood's? We'd love to hear from you! Your feedback helps us maintain our firewood legacy and serve you better.
          </p>
          <a 
            href="https://www.google.com/search?q=dhawoods+biriyani+ecr#lrd=0x3a525b4bcc0520df:0xeffd5547106b22a1,3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange hover:bg-brand-hover text-white font-black py-4 sm:py-6 px-8 sm:px-12 rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
          >
            Leave a Google Review
          </a>
        </div>
      </div>

      <div className="py-12">
        <LocationMapBox />
      </div>
    </div>
  );
};

export default Testimonials;
