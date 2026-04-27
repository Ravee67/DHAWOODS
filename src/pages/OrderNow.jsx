import React from 'react';
import { motion } from 'framer-motion';
import { menuData } from '../data/menuData.js';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import { ExternalLink } from 'lucide-react';

const OrderNow = () => {
  const swiggyUrl = "https://www.swiggy.com/city/chennai/dhawoods-briyani-kanathur-rest987415";

  const handleItemClick = () => {
    window.open(swiggyUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-sandal min-h-screen">
      {/* SEO Header */}
      <div className="bg-white py-16 sm:py-24 px-4 border-b border-sandal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center container-px relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-black text-brand-orange mb-6 tracking-tight"
          >
            Order Online
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg sm:text-xl font-medium leading-relaxed opacity-80"
          >
            Experience Dhawood's Legend at Home. Fast Delivery via Swiggy.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 space-y-24 sm:space-y-32">
        {menuData.map((cat, idx) => (
          <motion.section
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="scroll-mt-20"
          >
            {/* Category Header */}
            <motion.div
              variants={itemVariants}
              className="relative h-64 md:h-96 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border border-sandal/20 group"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-black text-white mb-4 tracking-tight uppercase">{cat.category}</h2>
                {cat.description && <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-accent font-bold tracking-wide italic">{cat.description}</p>}
              </div>
            </motion.div>

            {/* Category Items - Minimal Pill-Style Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item, i) => (
                <motion.button
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 1)", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleItemClick}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sandal hover:border-brand-orange transition-all duration-300 text-left group flex items-center justify-between"
                >
                  <div className="flex-grow pr-4">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-orange transition-colors">{item.name}</h3>
                    {item.desc && <p className="text-xs text-text-secondary font-medium italic mt-1 opacity-70 line-clamp-1">{item.desc}</p>}
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-brand-orange font-black text-xl">{item.price}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <LocationMapBox />
      <TestimonialsSection />
    </div>
  );
};

export default OrderNow;
