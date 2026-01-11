'use client';

import React from 'react';
import { Share2, ShoppingBag } from 'lucide-react';

const PublicProfile: React.FC = () => {
  const links = [
    { title: 'Mi Nuevo Canal de YouTube', url: '#', iconColor: 'bg-red-500' },
    { title: 'Portfolio de Diseño 2024', url: '#', iconColor: 'bg-blue-500' },
    { title: 'Sígueme en Twitter/X', url: '#', iconColor: 'bg-black' },
    { title: 'Newsletter Semanal', url: '#', iconColor: 'bg-orange-500' },
  ];

  const products = [
    { title: 'Bundle de Plantillas 2024', price: '$24.99' },
    { title: 'Presets Cine Pro', price: '$12.00' },
  ];

  return (
    <div className="max-w-[520px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="relative mb-6">
          <img 
            src="https://picsum.photos/200/200?grayscale" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl"
            alt="Profile Avatar"
          />
          <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:scale-110 transition-transform">
            <Share2 size={16} className="text-[#0F172A]" />
          </button>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-2 tracking-tight">Alex Rivera <span className="text-blue-500">✓</span></h1>
        <p className="text-[#64748B] text-sm md:text-base mb-6 leading-relaxed px-4 font-medium uppercase tracking-widest text-[10px]">
          Digital Creator & UI Designer
        </p>
        <p className="text-[#475569] text-sm md:text-base mb-8 leading-relaxed px-8">
          Diseñando el futuro de la web, un pixel a la vez. Únete a mi comunidad y descarga recursos exclusivos.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="bg-[#E6F8E6] text-[#10C810] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Diseño</span>
          <span className="bg-[#E6F8E6] text-[#10C810] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Tech</span>
          <span className="bg-[#E6F8E6] text-[#10C810] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Recursos</span>
        </div>
      </div>

      {/* Links Section */}
      <div className="space-y-4 mb-12">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            className="flex items-center gap-4 w-full py-4 px-6 bg-white border border-[#E2E8F0] rounded-[24px] font-bold text-[#0F172A] shadow-sm hover:shadow-md hover:border-[#10C810] transition-all transform hover:-translate-y-1 active:scale-[0.98]"
          >
            <div className={`w-10 h-10 ${link.iconColor} rounded-2xl flex-shrink-0 opacity-80`}></div>
            <span className="flex-1 text-center">{link.title}</span>
            <div className="w-10 h-10"></div> {/* Spacer to keep title centered */}
          </a>
        ))}
        <button className="w-full py-5 bg-[#10C810] text-white rounded-[24px] font-black text-lg shadow-xl shadow-green-100 transform transition-all hover:opacity-90 active:scale-95">
          Descargar E-book Gratis
        </button>
      </div>

      {/* Store Section */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[40px] p-8 mb-12">
        <div className="flex items-center gap-2 mb-8">
          <ShoppingBag size={24} className="text-[#10C810]" />
          <h2 className="text-xl font-black text-[#0F172A] tracking-tight">Tienda Exclusiva</h2>
        </div>
        
        <div className="space-y-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] rounded-[28px] p-4 flex items-center gap-6 group cursor-pointer hover:border-[#10C810] transition-colors">
              <img src={`https://picsum.photos/120/120?random=${idx+20}`} className="w-24 h-24 rounded-2xl object-cover shadow-sm" alt={product.title} />
              <div className="flex-1">
                <p className="text-[10px] font-black text-[#10C810] uppercase tracking-widest mb-1">Producto Digital</p>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2">{product.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-black text-[#0F172A]">{product.price}</p>
                  <button className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-full transition-opacity group-hover:opacity-90 uppercase tracking-widest">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center py-12">
        <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-full text-xs font-bold shadow-2xl shadow-slate-200">
          <div className="w-4 h-4 bg-[#10C810] rounded-md flex items-center justify-center">
            <span className="text-[10px] text-white">L</span>
          </div>
          Create your own with LucasLink
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
