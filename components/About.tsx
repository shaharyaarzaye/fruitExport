
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div id="about">
      {/* About Hero Banner */}
      {/* <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521791136364-798a7bc0d267?q=80&w=1600&auto=format&fit=crop")' }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">About Us</h1>
          <p className="text-gray-300 text-lg mb-8">Global Leader in Indian Agro Exports Since 2015</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section> */}

      {/* Welcome Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                alt="Arjit Enterprises" 
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 font-serif">Welcome to Arjit Enterprises</h2>
              <div className="w-20 h-1 bg-yellow-500"></div>
              <p className="text-slate-600 leading-relaxed">
                Established in 2015, Arjit Enterprises has grown to become one of the most trusted names in exporting premium Indian agricultural products across the globe.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We specialize in Basmati & Non-Basmati Rice, Spices, Dry Fruits, Pulses, Oil Seeds and Herbs. With direct tie-ups with farmers and state-of-the-art processing units, we ensure only the finest quality reaches our international buyers in over <b>25 countries</b>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment to quality, timely delivery, competitive pricing and transparent dealings has earned us long-term partnerships in Middle East, Europe, USA, Africa and Southeast Asia.
              </p>
              <Link to="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all shadow-lg text-center">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4 relative inline-block">
            Why Choose Arjit Enterprises?
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {/* 100% Quality */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Quality Guarantee</h3>
              <p className="text-slate-500 text-sm">Every grain inspected and certified before shipment</p>
            </div>
            {/* Global Network */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7.06-3.6-7.55-7.55H5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1.62c.49-3.95 3.6-7.06 7.55-7.55V5c0-.5.4-.9.9-.9s.9.4.9.9v1.62c3.95.49 7.06 3.6 7.55 7.55H19c-.5 0-.9.4-.9.9s.4.9.9.9h1.62c-.49 3.95-3.6 7.06-7.55 7.55V19c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-1.62z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-slate-500 text-sm">Successfully exporting to 25+ countries</p>
            </div>
            {/* On-Time Delivery */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 13h-4V9h4v4z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-slate-500 text-sm">Strong logistics partnerships worldwide</p>
            </div>
            {/* Certified Exporter */}
            <div className="flex flex-col items-center group mt-8">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Exporter</h3>
              <p className="text-slate-500 text-sm">APEDA, FIEO, ISO 9001:2015, FSSAI</p>
            </div>
            {/* Best Prices */}
            <div className="flex flex-col items-center group mt-8">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">Rs</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-slate-500 text-sm">Direct from source - no middlemen</p>
            </div>
            {/* 24x7 Support */}
            <div className="flex flex-col items-center group mt-8">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24×7 Support</h3>
              <p className="text-slate-500 text-sm">Dedicated team for every client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Founder */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                 alt="Founder" 
                 className="w-full h-auto object-cover max-h-[500px]"
               />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 font-serif mb-12">Message from Founder</h2>
              <div className="border-l-4 border-yellow-500 pl-8 space-y-4">
                <p className="text-2xl italic text-slate-700 font-light leading-relaxed">
                  "Our journey began with a simple belief — deliver the authentic taste and quality of India to every corner of the world. Today, with blessings (Arjit) of thousands of farmers and trust of customers globally, we continue to grow with honesty and hard work."
                </p>
                <div className="pt-6">
                  <h4 className="text-2xl font-bold text-yellow-600 font-serif">- Mr. Rajesh Kumar Sharma</h4>
                  <p className="text-slate-500 font-medium">Founder & Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Simple Stats Strip */}
      {/* <section className="bg-[#1a1a1a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2 font-serif">500+</div>
            <div className="text-gray-400 font-medium">Happy Clients</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 font-serif">25+</div>
            <div className="text-gray-400 font-medium">Countries Served</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 font-serif">15,000+</div>
            <div className="text-gray-400 font-medium">Containers Shipped</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 font-serif">10+</div>
            <div className="text-gray-400 font-medium">Years of Trust</div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 font-serif mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
               <p className="text-slate-600 italic mb-8 leading-relaxed">
                 "Best supplier we have worked with in 15 years. Quality never compromises!"
               </p>
               <h5 className="font-bold text-yellow-600">- Khalid Al-Farsi</h5>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Oman</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
               <p className="text-slate-600 italic mb-8 leading-relaxed">
                 "Perfect packaging, on-time delivery, excellent communication. Highly recommended!"
               </p>
               <h5 className="font-bold text-yellow-600">- Maria Santos</h5>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Portugal</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
               <p className="text-slate-600 italic mb-8 leading-relaxed">
                 "Consistent quality for 5 years. Arjit is our only rice partner now."
               </p>
               <h5 className="font-bold text-yellow-600">- Ahmed Khan</h5>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">UAE</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
