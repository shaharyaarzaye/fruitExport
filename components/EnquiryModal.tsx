import React, { useState, useEffect } from 'react';
import { X, Loader2, Send, Check } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import emailjs from 'https://esm.sh/@emailjs/browser';

const EnquiryModal: React.FC = () => {
  const { isOpen, closeEnquiry, productName } = useEnquiry();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    country: '',
    message: ''
  });

  useEffect(() => {
    if (productName) {
      setFormData(prev => ({ ...prev, message: `I am interested in ${productName}. Required Quantity: ` }));
    }
  }, [productName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // Configuration for EmailJS - placeholders
      const serviceId = 'service_placeholder';
      const templateId = 'template_placeholder';
      const publicKey = 'public_key_placeholder';

      if (serviceId === 'service_placeholder') {
        // Simulating the API call for demo purposes if not configured
        await new Promise(r => setTimeout(r, 1500));
      } else {
        await emailjs.send(serviceId, templateId, formData, publicKey);
      }
      
      setStatus('success');
      setTimeout(() => {
        closeEnquiry();
        setStatus('idle');
        setFormData({ user_name: '', user_email: '', user_phone: '', country: '', message: '' });
      }, 2500);
    } catch (error) {
      console.error('Failed to send enquiry:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-xl overflow-hidden shadow-2xl transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1a1a1a] px-6 py-5 flex justify-between items-center border-b border-white/10">
          <div>
            <h2 className="text-white font-bold text-xl font-serif">Product Inquiry</h2>
            <p className="text-gray-400 text-xs mt-0.5">Quick response guaranteed</p>
          </div>
          <button 
            onClick={closeEnquiry}
            className="text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {status === 'success' ? (
            <div className="py-12 text-center animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Sent!</h3>
              <p className="text-slate-500">Thank you for your interest. Our export team will contact you within 2-12 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Your Name *"
                    required
                    value={formData.user_name}
                    onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address *"
                    required
                    value={formData.user_email}
                    onChange={(e) => setFormData({...formData, user_email: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Phone / WhatsApp *"
                    required
                    value={formData.user_phone}
                    onChange={(e) => setFormData({...formData, user_phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Country"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements (Quantity, Packaging, etc.)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-gray-400 text-sm resize-none"
                ></textarea>
              </div>
              
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-xs font-medium border border-red-100">
                  Oops! Something went wrong. Please try again or contact us via WhatsApp.
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-[#1a1a1a] font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-500/20 active:scale-[0.98] disabled:opacity-70 group"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Processing Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
            Arjit Enterprises | Global Export Network
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
