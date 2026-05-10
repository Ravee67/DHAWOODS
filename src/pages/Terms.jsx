import React from 'react';

const Terms = () => {
  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-orange mb-6">
            Terms of Service
          </h1>
          <p className="text-brand-orange font-poppins font-black text-base tracking-widest uppercase mb-4 opacity-80">Since 1994</p>
          <p className="text-text-secondary text-xl font-medium opacity-80">
            Dhawood's Briyani — Quality and Taste Guaranteed
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-24 px-4">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-sandal premium-shadow text-text-secondary leading-loose space-y-12">
          <section>
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">Service Overview</h2>
            <p className="text-lg">
              By using the Dhawood's Briyani website, you agree to comply with our policies regarding online orders, table reservations, and catering services. We reserve the right to update our menu prices and service availability without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">Reservations & Orders</h2>
            <p className="text-lg">
              Table reservations are subject to availability. Online orders through Swiggy are governed by Swiggy's respective terms and conditions. Dhawood's Briyani is responsible for the quality of food prepared in our kitchens.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">Refund Policy</h2>
            <p className="text-lg">
              Refunds for online orders are handled through the respective delivery platform. For catering cancellations, please contact us at least 48 hours in advance to discuss potential refunds or rescheduling.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
