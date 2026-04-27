import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const allTestimonials = [
    {
      name: "Rahul M.",
      rating: 5,
      text: "Best briyani on ECR! The firewood cooking style gives it an absolutely unmatched smoky flavor. Dhawood's is our family's go-to every weekend. Highly recommend the Mutton Briyani!",
      platform: "Reviewed on Google"
    },
    {
      name: "Priya S.",
      rating: 5,
      text: "Ordered the Bucket Briyani for a small family get-together and everyone was blown away. The Chicken 65 combo was perfectly spiced. Will definitely order again!",
      platform: "Reviewed on Google"
    },
    {
      name: "Aakash R.",
      rating: 5,
      text: "The Kunafa here is out of this world — creamy, crispy, and absolutely fresh. Paired with their Briyani it was a full meal experience. Amazing place on ECR!",
      platform: "Reviewed on Google"
    },
    {
      name: "Fatima N.",
      rating: 5,
      text: "Catered our corporate lunch and the feedback from the entire team was phenomenal. Professional service, on-time delivery, and the Shawarma Rolls were a huge hit!",
      platform: "Reviewed on Google"
    }
  ];

  return (
    <section className="section-padding bg-sandal-light px-4 relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      </div>

      <div className="max-w-7xl mx-auto container-px relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-text-primary mb-6">Real Stories from Our Guests</h2>
          <div className="w-32 h-2 bg-brand-orange mx-auto rounded-full shadow-inner"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {allTestimonials.map((review, index) => (
            <div key={index} className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-sandal/50 flex flex-col h-full hover:shadow-2xl transition-all duration-300 premium-shadow relative group">
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              <p className="text-text-primary text-xl md:text-2xl font-medium italic mb-10 flex-grow leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                <div className="flex flex-col">
                  <span className="font-black text-xl text-text-primary tracking-tight">{review.name}</span>
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">Verified Customer</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
                  <img src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" alt="Google" className="h-5 w-5" />
                  <span className="font-bold">{review.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
