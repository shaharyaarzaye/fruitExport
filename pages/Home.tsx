
import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  // Extract the stats section from About to display it separately
  const StatsSection = () => (
    <section className="bg-yellow-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-4">
          <div className="text-4xl font-bold mb-2">500+</div>
          <div className="text-sm uppercase tracking-wider">Happy Clients</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2">25+</div>
          <div className="text-sm uppercase tracking-wider">Countries Served</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2">10,000+</div>
          <div className="text-sm uppercase tracking-wider">Containers Shipped</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2">10+</div>
          <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
        </div>
      </div>
    </section>
  );

  // Extract the features section from About
  const FeaturesSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 relative inline-block">
          Why Choose Ashirwad Enterprises?
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-yellow-500 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ),
              title: 'Global Reach',
              description: 'Exporting to 25+ Countries'
            },
            {
              icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Certified Quality',
              description: 'ISO | APEDA | FSSAI Certified'
            },
            {
              icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Fast Delivery',
              description: 'On-time Global Shipping'
            },
            {
              icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: '24/7 Support',
              description: 'Dedicated Customercare'
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
};

export default Home;
