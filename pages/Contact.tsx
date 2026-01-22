import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, Send, Loader2, MapPin, Globe } from 'lucide-react';
import emailjs from 'https://esm.sh/@emailjs/browser';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const form = e.currentTarget;
    try {
      const serviceId = 'service_placeholder';
      const templateId = 'template_placeholder';
      const publicKey = 'public_key_placeholder';

      if (serviceId === 'service_placeholder') {
        // Simulating for preview
        await new Promise(r => setTimeout(r, 1500));
      } else {
        await emailjs.sendForm(serviceId, templateId, form, publicKey);
      }
      
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      {/* Contact Hero Banner */}
      <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center grayscale"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1600&auto=format&fit=crop")' }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">Have questions about our export process or need a bulk quotation? We're here to help you grow your business globally.</p>
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-yellow-500">Contact</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-20">
            {/* Phone */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-16 h-16 bg-[#ffc107] text-black rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-yellow-500/20 group-hover:rotate-6 transition-transform">
                <MapPin size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Address </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Dudua, Mondh, Bhadoh, Varanasi, Uttar Pradesh, 221406
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-16 h-16 bg-[#ffc107] text-black rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-yellow-500/20 group-hover:rotate-6 transition-transform">
                <Phone size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Call Specialists</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                +91 94152 82011<br />
                +91 73989 26793
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-16 h-16 bg-[#ffc107] text-black rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-yellow-500/20 group-hover:rotate-6 transition-transform">
                <Mail size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Support</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                info@arjitenterprises.com<br />
                sales@arjitenterprises.com
              </p>
            </div>

            {/* Office */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-16 h-16 bg-[#ffc107] text-black rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-yellow-500/20 group-hover:rotate-6 transition-transform">
                <Globe size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Registered Office</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                New Delhi, India<br />
                Serving 25+ Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form Side */}
            <div className="lg:w-3/5 p-8 md:p-16">
              <div className="mb-12">
                <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest block mb-4">Inquiry Form</span>
                <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">Request Free Sample & Quote</h2>
                <p className="text-slate-500 leading-relaxed">Please provide detailed requirements to help our export team serve you better.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      name="user_name"
                      type="text" 
                      placeholder="e.g. David Smith"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      name="user_email"
                      type="email" 
                      placeholder="e.g. david@importco.com"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      name="user_phone"
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Type</label>
                    <select name="subject" className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all appearance-none cursor-pointer">
                      <option>Bulk Order Quotation</option>
                      <option>Sample Request</option>
                      <option>Distribution Partnership</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message / Product Requirements</label>
                  <textarea 
                    name="message"
                    rows={6}
                    placeholder="Include product name, variety, quantity, and destination port..."
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 text-green-700 p-5 rounded-xl text-sm font-semibold border border-green-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white"><Send size={12} /></div>
                    Message sent successfully! We'll reply soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-5 rounded-xl text-sm font-semibold border border-red-100">
                    Failed to send message. Please try again or use WhatsApp for urgent queries.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a1a1a] hover:bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-4 transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 shadow-2xl shadow-slate-900/20"
                >
                  {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} className="text-[#ffc107]" />}
                  <span>{loading ? 'Submitting Enquiry...' : 'Submit Inquiry Now'}</span>
                </button>
              </form>
            </div>

            {/* Sidebar / Visual Side */}
            <div className="lg:w-2/5 bg-[#1a1a1a] p-12 lg:p-16 text-white flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-yellow-500">Why Contact Us?</h3>
                  <ul className="space-y-6">
                    {[
                      { title: 'Direct Sourcing', text: 'Straight from Indian farms with no middlemen.' },
                      { title: 'Full Transparency', text: 'Honest pricing and clear shipment tracking.' },
                      { title: 'Verified Quality', text: 'Third-party inspections available for all bulk orders.' }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-500 shrink-0 mt-1">
                          <Check size={14} />
                        </div>
                        <div>
                          <p className="font-bold text-sm mb-1">{item.title}</p>
                          <p className="text-gray-400 text-xs leading-relaxed">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Clock size={18} className="text-yellow-500" />
                    Response Time
                  </h3>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-gray-400 text-xs mb-4">We understand international time zones. Our team works in shifts to provide near 24/7 coverage.</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Avg. Response:</span>
                      <span className="text-yellow-500 font-bold">2-4 Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Globe size={24} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Market Coverage</p>
                  <p className="text-sm font-bold">EMEA, Asia-Pac, Americas</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Strip */}
      <section className="h-96 w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.3000578631!2d77.13812297686737!3d28.52721852089417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71db4152da!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffc107] text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 pointer-events-none">
          <MapPin size={20} />
          <span>Arjit Enterprises HQ</span>
        </div>
      </section>
    </div>
  );
};

// Helper component
const Check = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Contact;
