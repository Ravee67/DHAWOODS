import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationMapBox from '../components/LocationMapBox.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

const Home = () => {
  const bestSellers = [
    {
      name: "Chicken Briyani",
      img: "/images/chicken_briyani.jpg",
      alt: "Premium Firewood Chicken Biryani - Signature slow-cooked biryani with tender chicken and aromatic spices at DHAWOODS BIRIYANI"
    },
    {
      name: "Mutton Briyani",
      img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2000&auto=format&fit=crop",
      alt: "Premium Firewood Mutton Briyani - Tender goat meat cooked in traditional Bhai style on East Coast Road Chennai"
    },
    {
      name: "Grill Chicken Full",
      img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2000&auto=format&fit=crop",
      alt: "Juicy Grilled Chicken Full - Flame-grilled over firewood with secret spice rub at DHAWOODS BIRIYANI Restaurant Chennai"
    },
    {
      name: "Shawarma Roll",
      img: "/images/shawarma_combo.jpg",
      alt: "Authentic Chicken Shawarma Roll - Freshly grilled meat with signature garlic sauce at DHAWOODS BIRIYANI"
    },
    {
      name: "Chicken 65 Briyani",
      img: "/images/chicken_65_briyani.jpg",
      alt: "Classic Chicken 65 Briyani - Spicy crispy chicken 65 served over aromatic firewood briyani rice"
    },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-sandal py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none scale-105">
           <img
             src="/images/dhawoods-briyani-authentic-tamil-nadu-firewood-briyani-ecr-chennai-hero.webp"
             alt="DHAWOODS BIRIYANI - Authentic Tamil Nadu Firewood Biryani served on Banana Leaf ECR Chennai"
             className="w-full h-full object-cover opacity-40"
             loading="eager"
             fetchPriority="high"
             onError={(e) => {
               e.target.src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1920&auto=format&fit=crop";
             }}
           />
           {/* Warm Orange Overlay/Tint */}
           <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center container-px">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-playfair font-black text-brand-orange mb-8 tracking-tighter leading-tight drop-shadow-2xl"
          >
            DHAWOODS BIRIYANI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-2xl md:text-3xl text-text-secondary font-medium mb-16 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            The Best Biryani in Chennai & Best Restaurant on ECR — East Coast Road, Chennai
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/order-now" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-hover text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 flex items-center justify-center">
              Order Now
            </Link>
            <Link to="/reserve" className="w-full sm:w-auto bg-white text-brand-orange border-4 border-brand-orange hover:bg-brand-orange hover:text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-2 active:scale-95 flex items-center justify-center">
              Reserve a Table
            </Link>
            <Link to="/catering" className="w-full sm:w-auto bg-brand-accent hover:bg-brand-orange text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 flex items-center justify-center">
              Catering
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="section-padding pb-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto container-px text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl font-normal text-left sm:text-center text-text-secondary leading-7 sm:leading-relaxed px-4 sm:px-8 md:px-10 mb-4"
          >
            Welcome to Dhawoods Biriyani – the destination for food lovers searching for the Best Biryani in Chennai and the Best Restaurant in ECR. Located on the vibrant East Coast Road, Dhawoods Biriyani brings together authentic flavors, premium ingredients, and a memorable dining experience for families, friends, and travelers exploring ECR Chennai.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl font-normal text-left sm:text-center text-text-secondary leading-7 sm:leading-relaxed px-4 sm:px-8 md:px-10 mb-0 pb-0"
          >
            Our signature biryani is prepared using aromatic basmati rice, handpicked spices, and perfectly marinated meat cooked in traditional dum style for rich taste and irresistible aroma. From juicy chicken biryani and flavorful mutton biryani to delicious grills, kebabs, tandoori dishes, seafood specialties, and Chinese favorites, every dish is crafted to satisfy true food cravings.
          </motion.p>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section-padding bg-sandal-light">
        <div className="max-w-7xl mx-auto container-px">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-text-primary mb-6"
            >
              Our Best Sellers
            </motion.h2>
            <div className="w-32 h-2.5 bg-brand-orange mx-auto rounded-full shadow-lg"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
            {bestSellers.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-sandal flex flex-col premium-shadow transition-all duration-500 group w-full sm:w-[calc(50%-1.75rem)] lg:w-[calc(33.333%-2.33rem)] max-w-sm"
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute top-6 right-6 bg-brand-orange text-white px-5 py-2 rounded-full font-black text-sm shadow-xl transform group-hover:rotate-6 transition-transform">
                    POPULAR
                  </div>
                </div>
                <div className="p-8 sm:p-10 flex flex-col flex-grow text-center">
                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-text-primary mb-6 group-hover:text-brand-orange transition-colors">{item.name}</h3>
                  <Link to="/order-now" className="mt-auto block bg-brand-orange hover:bg-brand-hover text-white font-black py-4 px-6 rounded-2xl transition-all shadow-xl transform active:scale-95 uppercase tracking-widest text-sm">
                    Order Online
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12">
        <LocationMapBox />
      </div>
      
      <div className="py-12">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Home;
