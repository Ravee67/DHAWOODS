import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-orange mb-6">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-xl font-medium opacity-80">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-24 px-4">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-sandal premium-shadow text-text-secondary leading-loose space-y-12">
          <section>
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">Introduction</h2>
            <p className="text-lg">
              At Dhawood's Briyani, we are committed to protecting your privacy. This website does not collect personal data without your consent. Any information shared through our contact or WhatsApp links is used solely for responding to your inquiry or booking.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">Our Commitment</h2>
            <p className="text-lg">
              We do not share your information with third parties. Our website may use cookies to enhance your browsing experience. By using this site, you agree to our privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">Contact Us</h2>
            <p className="text-lg">
              If you have any questions about how we handle your data, please contact us at <span className="text-brand-orange font-bold">9500501978</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
