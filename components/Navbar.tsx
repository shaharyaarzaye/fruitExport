
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { LanguageCode } from '../translations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, setLocale, locale } = useTranslation();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: '/' },
    // { name: t('nav_about'), href: '/about' },
    { name: t('nav_products'), href: '/products' },
    // { name: t('nav_gallery'), href: '/gallery' },
    { name: t('nav_contact'), href: '/contact' },
  ];

  const languages: { code: LanguageCode; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية (Arabic)' },
    { code: 'zh', name: '中文 (Chinese)' },
    { code: 'fr', name: 'Français (French)' },
    { code: 'de', name: 'Deutsch (German)' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'ja', name: '日本語 (Japanese)' },
    { code: 'pt', name: 'Português (Brazil)' },
    { code: 'ru', name: 'Русский (Russian)' },
    { code: 'es', name: 'Español (Spanish)' },
  ];

  const currentLangName = languages.find(l => l.code === locale)?.name || 'English';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1a1a1a] shadow-lg py-2' : 'bg-black/40 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-yellow-500 font-black text-xl leading-none tracking-tighter">Arjit</span>
                <span className="text-white font-bold text-lg leading-none tracking-tight">ENTERPRISES</span>
              </div>
              <div className="hidden lg:block h-8 w-[1px] bg-white/20 ml-2"></div>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `text-sm font-semibold transition-colors ${
                      isActive ? 'text-yellow-500' : 'text-white/90 hover:text-yellow-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Language Selector */}
              <div className="relative" ref={langMenuRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="bg-white rounded flex items-center px-3 py-1.5 text-gray-800 text-xs border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Globe size={14} className="mr-2 text-yellow-600" />
                  <span className="mr-1">{currentLangName}</span>
                  <ChevronDown size={12} className={`text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl py-2 z-50 border border-gray-100 max-h-80 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLocale(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                          locale === lang.code ? 'bg-yellow-50 text-yellow-700 font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {lang.name}
                        {locale === lang.code && <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'text-yellow-500 bg-white/5' : 'text-white hover:text-yellow-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-3 py-4 space-y-2">
               <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">{t('nav_select_lang')}</p>
               <div className="grid grid-cols-2 gap-2">
                 {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => {
                       setLocale(lang.code);
                       setIsOpen(false);
                     }}
                     className={`text-left px-3 py-2 rounded text-xs transition-colors ${
                       locale === lang.code ? 'bg-yellow-500 text-black font-bold' : 'text-white/70 hover:text-white hover:bg-white/10'
                     }`}
                   >
                     {lang.name}
                   </button>
                 ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
