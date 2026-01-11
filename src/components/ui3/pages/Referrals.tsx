'use client';

import React from 'react';
// Added Globe to the lucide-react imports
import { Gift, Copy, DollarSign, ExternalLink, Info, CheckCircle2, UserPlus, Sparkles, TrendingUp, Globe } from 'lucide-react';

const Referrals: React.FC = () => {
  const referralList = [
    { date: 'Yesterday', email: 'jimhalpert@dundermifflin.com', status: 'SIGNED UP', type: 'signup', icon: 'https://picsum.photos/40/40?random=10' },
    { date: 'Jun 3', email: 'barbie@barbieland.com', status: 'UPGRADED', type: 'upgrade', icon: 'https://picsum.photos/40/40?random=11', cash: true },
    { date: 'Jun 3', email: 'barbie@barbieland.com', status: 'UPGRADED', type: 'upgrade', icon: 'https://picsum.photos/40/40?random=11', cash: true },
    { date: 'Jun 3', email: 'ken@mojodojocasa.com', status: 'UPGRADED', type: 'upgrade', icon: 'https://picsum.photos/40/40?random=12', cash: true },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 pb-20 bg-[#F8FAFC]">
      <div className="flex flex-col items-center text-center py-16 max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-6 border border-slate-50">
          <Gift size={32} className="text-[#10C810]" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl font-black text-[#0F172A] mb-4 tracking-tight">Gana dinero con @yoemmi</h1>
        <p className="text-slate-500 font-medium leading-relaxed text-lg">
          ¡Obtén un <span className="text-[#0F172A] font-black">25% de participación</span> en las ganancias mensuales por cada referido! 
          Es hora de crecer juntos.
        </p>
        <button className="mt-8 px-10 py-3 bg-[#0F172A] text-white rounded-2xl text-sm font-black hover:opacity-90 transition-all shadow-xl shadow-slate-200 flex items-center gap-2">
          Más información
          <ExternalLink size={16} />
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-[48px] p-10 md:p-20 shadow-xl shadow-slate-100/50 mb-12 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#10C810] via-blue-500 to-[#10C810] bg-[length:200%_auto] animate-gradient"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-[11px] font-black uppercase tracking-widest mb-6">
          <Sparkles size={14} fill="currentColor" />
          Programa de Partners Pro
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tighter">¡Estás muy cerca de ganar!</h2>
        <p className="text-slate-400 font-bold text-sm mb-12 uppercase tracking-[0.1em]">Empieza hoy compartiendo tu enlace personalizado</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="w-full flex-1 bg-slate-50 border-2 border-slate-100 rounded-[28px] px-8 py-5 flex items-center gap-4 group-hover:border-[#10C810] transition-colors">
            <Globe size={20} className="text-[#10C810]" />
            <span className="text-base font-black text-[#0F172A]">balizas.ai/signup?c=yoemmi</span>
          </div>
          <button className="w-full md:w-auto p-5 bg-[#10C810] text-white rounded-[28px] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-3">
            <Copy size={24} />
            <span className="md:hidden font-black uppercase tracking-widest text-sm">Copiar enlace</span>
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[48px] shadow-2xl shadow-slate-100/50 overflow-hidden">
        <div className="p-10 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E6F8E6] rounded-xl flex items-center justify-center">
              <TrendingUp size={20} className="text-[#10C810]" />
            </div>
            <h3 className="text-xl font-black text-[#0F172A]">Actividad reciente</h3>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total referidos</p>
               <p className="text-lg font-black text-[#0F172A]">3 Usuarios</p>
             </div>
          </div>
        </div>
        
        <div className="divide-y divide-slate-50">
          {referralList.map((item, i) => (
            <div key={i} className="p-10 flex flex-col md:flex-row items-center justify-between group hover:bg-slate-50/40 transition-all duration-300 gap-6">
              <div className="flex items-center gap-8 flex-1 w-full">
                <span className="w-28 text-xs font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={item.icon} className="w-12 h-12 rounded-2xl border-2 border-white shadow-md group-hover:scale-110 transition-transform" alt="Referral" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#10C810] rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle2 size={10} className="text-white" />
                    </div>
                  </div>
                  <span className="text-base font-black text-[#0F172A]">{item.email}</span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto gap-12">
                <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
                  item.type === 'upgrade' 
                    ? 'bg-[#E6F8E6] text-[#10C810] border border-green-100' 
                    : 'bg-[#FFF8E6] text-[#D97706] border border-orange-100'
                }`}>
                  {item.status}
                </span>

                <div className="w-40 flex justify-end">
                  {item.cash ? (
                    <div className="flex items-center gap-2.5 text-[#10C810] font-black text-sm bg-[#E6F8E6]/50 px-4 py-2 rounded-full border border-green-100">
                      <DollarSign size={16} strokeWidth={3} />
                      CASH EARNED
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-4 border-slate-100"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6">
        <p className="text-center text-[11px] text-slate-400 font-bold max-w-lg leading-relaxed">
          *Se aplican términos y condiciones. Los pagos se procesan mensualmente. 
          Sujeto a verificación de cuenta y actividad genuina.
        </p>
        <div className="flex gap-8 text-[#0F172A] opacity-40">
           <Gift size={20} />
           <Sparkles size={20} />
           <CheckCircle2 size={20} />
        </div>
      </div>
    </div>
  );
};

export default Referrals;
