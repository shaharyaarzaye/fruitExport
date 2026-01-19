
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div id="contact">
      {/* Contact Hero Banner */}
      <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop")' }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg mb-8">Let's build a global partnership together</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20">
            {/* Address */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-yellow-500/30">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Office</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                123 Export House, Industrial Area,<br />New Delhi - 110028, India
              </p>
            </div>
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-yellow-500/30">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-500 text-sm">
                +91 94152 82011<br />+91 73989 26793
              </p>
            </div>
            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-yellow-500/30">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Support</h3>
              <p className="text-slate-500 text-sm">
                info@arjitenterprises.com<br />sales@arjitenterprises.com
              </p>
            </div>
            {/* Working Hours */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-yellow-500/30">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h3>
              <p className="text-slate-500 text-sm">
                Mon - Sat: 09:00 AM - 07:00 PM<br />Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">Send us a Message</h2>
                <p className="text-slate-500">Fill out the form below and our export specialists will get back to you within 24 hours.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all bg-white">
                      <option>Product Inquiry</option>
                      <option>Bulk Order Request</option>
                      <option>Export Quotation</option>
                      <option>Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Describe your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg shadow-yellow-500/20 transition-all transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  Send Inquiry Now
                </button>
              </form>
            </div>

            {/* Map & Social */}
            <div className="space-y-8">
              <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.3000578631!2d77.13812297686737!3d28.52721852089417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71db4152da!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-[#1a1a1a] p-10 rounded-2xl text-white">
                <h3 className="text-2xl font-bold font-serif mb-6 text-yellow-500">Global Presence</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  With our main headquarters in New Delhi, we maintain a robust supply chain network across major Indian ports including JNPT (Mumbai), Mundra, and Chennai to ensure swift international deliveries.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-yellow-500 flex items-center justify-center font-bold text-xs text-black">ME</div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-blue-500 flex items-center justify-center font-bold text-xs text-white">EU</div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-red-500 flex items-center justify-center font-bold text-xs text-white">US</div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-green-500 flex items-center justify-center font-bold text-xs text-white">AS</div>
                  </div>
                  <span className="text-gray-300">Trusted in 25+ countries globally</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
