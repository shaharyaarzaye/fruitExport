
import React from 'react';
import { STATS, IconMap } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, index) => {
            const IconComponent = IconMap[stat.icon];
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl text-yellow-500 border border-white/10 transform hover:rotate-6 transition-transform">
                  <IconComponent size={32} />
                </div>
                <div className="text-5xl font-black text-white mb-2 font-serif tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
