
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
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
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-72">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="mb-3">
                    <span className="bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-800 font-medium mb-6">
                    {product.quantity}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded text-xs transition-colors">
                      Quick Enquiry
                    </button>
                    <button className="flex-1 bg-white hover:bg-gray-50 text-black font-medium py-3 px-4 border border-gray-300 rounded text-xs transition-colors">
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
