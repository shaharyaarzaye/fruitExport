
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageSquare, CheckCircle, Globe, Calendar } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-4 py-1.5 mb-8 text-yellow-400 font-medium text-sm animate-bounce">
          <CheckCircle size={16} />
          <span>{t('hero_tag')}</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
          {t('hero_welcome')}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {t('hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/products" 
            className="group relative flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-yellow-500/20 transform hover:-translate-y-1"
          >
            <ShoppingBag size={20} />
            {t('hero_btn_explore')}
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1"
          >
            <MessageSquare size={20} />
            {t('hero_btn_quote')}
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div className="flex items-center justify-center gap-3 text-white/70">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-yellow-500">
              <CheckCircle size={20} />
            </div>
            <span className="text-sm font-medium">100% Quality Certified</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-yellow-500">
              <Globe size={20} />
            </div>
            <span className="text-sm font-medium">Exporting to 25+ Countries</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-yellow-500">
              <Calendar size={20} />
            </div>
            <span className="text-sm font-medium">10+ Years of Excellence</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
