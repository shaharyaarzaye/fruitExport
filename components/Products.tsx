
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useEnquiry } from '../context/EnquiryContext';

const Products: React.FC = () => {
  const { openEnquiry } = useEnquiry();
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9fafb]">
      {/* Product Banner - Dark Style */}
      <section className="bg-[#1a1a1a] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Our Premium Products</h1>
          <p className="text-gray-400 text-lg mb-8">High-quality Indian agro commodities exported worldwide</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </div>
        </div>
        {/* Accent border bottom */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 opacity-80"></div>
      </section>

      {/* Main Product Grid */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] relative inline-block">
              Explore All Products
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-yellow-500 rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="bg-yellow-500/10 text-yellow-700 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2 font-serif">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => openEnquiry(product.name)}
                      className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-[#1a1a1a] font-bold py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-yellow-500/10"
                    >
                      Request Quote
                    </button>
                    <button 
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="w-full bg-white hover:bg-gray-50 text-slate-700 font-semibold py-3.5 border border-gray-200 rounded-lg text-sm transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
