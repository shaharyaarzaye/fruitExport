
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative" id="contact">
      {/* Footer background decor */}
      <div className="absolute top-0 right-0 opacity-5">
         <svg width="400" height="400" viewBox="0 0 100 100">
           <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="currentColor" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center font-serif text-white font-bold text-xl">A</div>
              <div>
                <span className="text-xl font-bold tracking-tight block">ARJIT</span>
                <span className="text-xs font-medium block -mt-1 text-yellow-400">ENTERPRISES</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading exporter of premium Indian agro products, spices, rice, dry fruits & pulses to over 25+ countries worldwide. Committed to quality and integrity since 2015.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-yellow-500 pl-4">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {[
                { name: 'Home', path: '/' },
                // { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                // { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <span>›</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-yellow-500 pl-4">Our Products</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Basmati & Non-Basmati Rice', 'Indian Spices', 'Dry Fruits & Nuts', 'Pulses & Lentils', 'Oil Seeds'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <span>›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-yellow-500 pl-4">Contact Info</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-4">
                <div className="flex-shrink-0 text-yellow-500"><MapPin size={20} /></div>
                <span>Dudua, Mondh, Bhadoh, Varanasi, Uttar Pradesh, 221406</span>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 text-yellow-500"><Phone size={20} /></div>
                <div>
                  <p>+91 94152 82011</p>
                  <p>+91 73989 26793</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 text-yellow-500"><Mail size={20} /></div>
                <span>info@arjitenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© 2026 Arjit Enterprises. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919415282011" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce-slow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
