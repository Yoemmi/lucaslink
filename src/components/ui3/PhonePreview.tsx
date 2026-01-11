
import React from 'react';

const PhonePreview: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="aspect-[9/18.5] bg-white border-[8px] border-[#0F172A] rounded-[48px] shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0F172A] rounded-b-2xl z-20"></div>
        
        <div className="h-full overflow-y-auto bg-gradient-to-b from-slate-50 to-white">
          <div className="pt-16 px-6 flex flex-col items-center">
            <img src="https://picsum.photos/120/120" className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" alt="User" />
            <h3 className="text-lg font-bold text-[#0F172A]">@yoemmi</h3>
            <p className="text-xs text-[#64748B] text-center mt-1">Creador de contenido digital y entusiasta de la tecnología</p>
            
            <div className="w-full space-y-3 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full py-3 bg-white border border-[#E2E8F0] rounded-2xl text-center text-sm font-semibold text-[#0F172A] shadow-sm hover:scale-[1.02] transition-transform">
                  Enlace {i}
                </div>
              ))}
            </div>

            <div className="w-full mt-10">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-4">Tienda</h4>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-3 flex gap-3">
                <img src="https://picsum.photos/60/60?random=1" className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="text-xs font-bold">Guía Digital Pro</div>
                  <div className="text-xs text-[#64748B]">$29.00</div>
                  <button className="mt-2 w-full py-1.5 bg-[#0F172A] text-white text-[10px] rounded-lg">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-[#64748B]">Toca para editar elementos en tiempo real</p>
      </div>
    </div>
  );
};

export default PhonePreview;
