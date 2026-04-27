import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      q: "What are your signature dishes?",
      a: "Our signature dishes include the Firewood Chicken and Mutton Briyani, Grill Chicken, and our fresh Cream Kunafa."
    },
    {
      q: "Do you offer home delivery?",
      a: "Yes, we are available on Swiggy for home delivery along the ECR and surrounding areas."
    },
    {
      q: "What are your operating hours?",
      a: "We are open daily from 11:30 AM to 11:00 PM."
    },
    {
      q: "Do you have parking facilities?",
      a: "Yes, we have ample parking space available at the French Village Food Court for our dine-in customers."
    },
    {
      q: "Do you provide catering for large events?",
      a: "Absolutely! We cater for weddings, corporate events, and parties. Contact us at 9500501978 for custom packages."
    }
  ];

  return (
    <div className="bg-sandal min-h-screen">
      <div className="bg-white py-24 px-4 border-b border-sandal">
        <div className="max-w-4xl mx-auto text-center container-px">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-orange mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-text-secondary text-xl font-medium opacity-80">
            Everything you need to know about Dhawood's Briyani
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-24 px-4">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-sandal premium-shadow group hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-playfair font-bold text-brand-orange mb-6 group-hover:scale-[1.01] transition-transform">
                {faq.q}
              </h3>
              <p className="text-xl text-text-secondary leading-loose font-medium opacity-90">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
