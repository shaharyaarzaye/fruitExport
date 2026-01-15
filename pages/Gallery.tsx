
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Farms & Harvest', 'Warehouse', 'Processing Unit', 'Shipments'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div id="gallery">
      {/* Gallery/Contact Hero Banner */}
      <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1600&auto=format&fit=crop")' }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">We reply within <span className="text-white font-bold">2–12 hours</span></p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4 relative inline-block">
            Photo Gallery
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-20 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                  filter === cat 
                  ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg' 
                  : 'bg-white text-slate-600 border-gray-200 hover:border-yellow-500 hover:text-yellow-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative h-80 overflow-hidden rounded-xl shadow-md cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-white text-center">
                   <h4 className="text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h4>
                   <span className="text-xs uppercase tracking-widest text-yellow-500 font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="py-20 text-gray-400">
              <p>No items found in this category. We are updating our gallery soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
