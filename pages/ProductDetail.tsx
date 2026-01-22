
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useEnquiry } from '../context/EnquiryContext';
import { ArrowLeft, CheckCircle, Package, Globe, ShieldCheck, Info } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();
  
  const product = PRODUCTS.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link to="/products" className="text-yellow-600 font-bold hover:underline">Back to Products</Link>
      </div>
    );
  }

  // Suggest other products from same category
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Header Spacer */}
      <div className="h-20 bg-[#1a1a1a]"></div>

      {/* Breadcrumbs & Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-yellow-600 transition-colors mb-6 font-medium text-sm"
        >
          <ArrowLeft size={16} />
          Back to Products
        </button>
        
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-yellow-600">Products</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Gallery Side */}
            <div className="space-y-6">
              <div className="aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-50 border border-slate-100 cursor-pointer hover:border-yellow-500 transition-colors">
                      <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100" alt={`${product.name} view ${i}`} />
                   </div>
                ))}
              </div>
            </div>

            {/* Info Side */}
            <div className="flex flex-col">
              <span className="bg-yellow-500/10 text-yellow-700 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-fit mb-6">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Premium Indian {product.name}
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                {product.description} Our {product.name} is sourced directly from certified farms across India, ensuring peak freshness and natural flavor.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-yellow-600">
                     <Globe size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Origin</p>
                     <p className="text-sm font-bold">India (Various States)</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-yellow-600">
                     <ShieldCheck size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certification</p>
                     <p className="text-sm font-bold">APEDA | FSSAI</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-yellow-600">
                     <Package size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Packaging</p>
                     <p className="text-sm font-bold">Custom B2B Export</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-yellow-600">
                     <Info size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Availability</p>
                     <p className="text-sm font-bold">Year Round</p>
                   </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button 
                  onClick={() => openEnquiry(product.name)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-5 rounded-2xl transition-all shadow-xl shadow-yellow-500/20 active:scale-[0.98] text-lg"
                >
                  Request Wholesale Quote
                </button>
                <a 
                  href={`https://wa.me/919415282011?text=I'm%20interested%20in%20Indian%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-700 font-bold py-5 border-2 border-slate-100 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] text-lg"
                >
                  Chat with Expert
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Export Specifications</h2>
            <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Parameter</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Detail / Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  ['Quality Standard', 'Export Grade A, Handpicked'],
                  ['Packaging Options', '5kg, 10kg, 20kg Jute/PP/Mesh Bags or Cartoon Boxes'],
                  ['Storage Condition', 'Well-ventilated dry storage (Specific temp control on request)'],
                  ['Shelf Life', 'Varies based on product type & shipping method'],
                  ['Shipment Port', 'JNPT (Mumbai), Mundra, or Chennai Ports'],
                  ['Min Order Quantity', 'Full Container Load (LCL available for specific regions)']
                ].map(([label, value], i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-700">{label}</td>
                    <td className="px-8 py-6 text-slate-500">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">You May Also Like</h2>
                <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
              </div>
              <Link to="/products" className="text-yellow-600 font-bold text-sm hover:underline">See All Products →</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group cursor-pointer" onClick={() => navigate(`/products/${p.id}`)}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-slate-100">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{p.name}</h4>
                  <p className="text-slate-400 text-sm">{p.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Strip */}
      <section className="bg-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-black mb-2">Ready to place a bulk order?</h3>
            <p className="text-black/70 font-medium">Get connected with our export consultants for best international rates.</p>
          </div>
          <button 
            onClick={() => openEnquiry(product.name)}
            className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1"
          >
            Request Quotation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
