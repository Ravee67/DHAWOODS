import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const LocationMapBox = () => {
  const mapUrl = "https://www.google.com/maps/place/dhawoods+biriyani+ecr/data=!4m2!3m1!1s0x3a525b4bcc0520df:0xeffd5547106b22a1?sa=X&ved=1t:242&ictx=111";

  return (
    <div className="max-w-6xl mx-auto my-24 px-4 sm:px-6">
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-sandal premium-shadow">
        {/* Map Preview Placeholder */}
        <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.4370346645105!2d80.24260816653879!3d12.893120583083757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b4bcc0520df%3A0xeffd5547106b22a1!2sDhawood's%20Biryani%20-%20ECR!5e0!3m2!1sen!2sin!4v1776541359981!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Info Content */}
        <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-orange/10 p-3 rounded-2xl">
              <MapPin className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-text-primary">Visit Our Store</h3>
          </div>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed font-medium">
            French Village Food Court, Sea Shell Avenue, East Coast Rd, Akkarai, Panaiyur, Chennai, Tamil Nadu 600119
          </p>
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-hover text-white font-black py-5 px-10 rounded-2xl transition-all shadow-xl active:scale-95 text-xl transform hover:-translate-y-1"
          >
            Get Directions
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMapBox;
