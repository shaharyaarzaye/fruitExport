
import React from 'react';
import { FEATURES, IconMap } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">
            Why Choose <span className="text-yellow-600">Ashirwad Enterprises?</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = IconMap[feature.icon];
            return (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-slate-900 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-yellow-600 transition-colors shadow-lg shadow-yellow-500/20">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 group-hover:text-slate-400 transition-colors text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
