
import React from 'react';

const Trust: React.FC = () => {
  const logos = ['Company A', 'Logo B', 'Brand C', 'Studio D', 'Media E', 'Creator F'];
  
  return (
    <div className="py-12 bg-white border-y border-[#E7EAF2]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Usado por los mejores creadores del mundo
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="text-2xl font-black text-[#0B1220]">{logo}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
