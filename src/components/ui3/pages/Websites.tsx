'use client';

import React from 'react';
import { Plus, Globe, Sparkles, ChevronRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import TopBanner from '@/components/ui3/TopBanner';

const Websites: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-20">
      <TopBanner 
        title="Sitios web"
        actions={
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#10C810] text-white rounded-xl text-sm font-bold shadow-lg shadow-green-100 hover:opacity-90 transition-all active:scale-95">
            <Plus size={18} />
            Nuevo sitio web
          </button>
        }
      />

      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center mb-12">
        <div className="relative mb-8">
          {/* Decorative Sparkles */}
          <Sparkles className="absolute -top-12 -right-8 text-slate-200" size={32} />
          <Sparkles className="absolute -bottom-8 -left-12 text-slate-200" size={24} />
          
          {/* Browser Illustration */}
          <div className="w-48 h-36 bg-white border-2 border-slate-100 rounded-3xl shadow-2xl relative overflow-hidden group">
            {/* Browser Header */}
            <div className="h-8 border-b border-slate-50 flex items-center px-3 gap-1.5 bg-slate-50/50">
              <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
            </div>
            {/* Browser Body */}
            <div className="p-4 flex flex-col gap-3">
              <div className="w-10 h-10 bg-slate-50 rounded-xl mx-auto flex items-center justify-center text-slate-200">
                 <Globe size={16} />
              </div>
              <div className="w-full h-1.5 bg-slate-50 rounded-full"></div>
              <div className="w-3/4 h-1.5 bg-slate-50 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-[#0F172A] mb-3 tracking-tight">Crea tu presencia digital</h2>
        <p className="text-[#64748B] text-base max-w-sm font-medium leading-relaxed">
          Diseña landing pages profesionales, portafolios o tiendas con nuestro editor intuitivo.
        </p>
        
        <button className="mt-8 px-10 py-4 bg-white border border-slate-200 rounded-2xl text-[#0F172A] font-black text-sm shadow-sm hover:border-[#10C810] hover:text-[#10C810] hover:shadow-xl hover:shadow-green-50 transition-all flex items-center gap-3 active:scale-95">
          Explorar plantillas
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dominios Personalizados - Rediseño Premium */}
      <div className="relative group overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative bg-white border border-slate-200 rounded-[40px] p-8 md:p-10 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:border-[#10C810]/30 hover:shadow-[0_20px_60px_-15px_rgba(16,200,16,0.1)]">
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left flex-1">
            {/* Icon Container Pro */}
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#10C810] to-[#059669] rounded-[28px] flex items-center justify-center text-white shadow-lg shadow-green-100 transform group-hover:rotate-6 transition-transform">
                <Globe size={36} strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-xl shadow-md border border-slate-50">
                <ShieldCheck size={18} className="text-[#10C810]" fill="#E6F8E6" />
              </div>
            </div>

            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                <h4 className="text-xl font-black text-[#0F172A] tracking-tight">Dominios Personalizados</h4>
                <span className="bg-[#FACC15] text-[#854D0E] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
                  Pro
                </span>
              </div>
              <p className="text-base text-slate-500 font-medium leading-relaxed">
                Refuerza tu marca personal. Conecta tu propio dominio <span className="text-[#0F172A] font-bold">.com, .net o .me</span> fácilmente o usa un subdominio gratuito de LucasLink.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button className="px-8 py-3.5 bg-[#0F172A] text-white rounded-[20px] font-black text-sm shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
              Configurar ahora
              <ArrowUpRight size={18} />
            </button>
            <button className="text-xs font-black text-slate-400 hover:text-[#10C810] uppercase tracking-widest flex items-center gap-1 transition-colors group/link">
              Ver documentación 
              <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Websites;
