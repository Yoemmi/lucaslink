
import React from 'react';

interface CTAFinalProps {
  onStartClick: () => void;
}

const CTAFinal: React.FC<CTAFinalProps> = ({ onStartClick }) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto bg-[#11B718] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Crea tu LucasLink hoy</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Únete a más de 20,000 creadores que están transformando su presencia digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onStartClick}
              className="bg-white text-[#11B718] px-10 py-5 rounded-[20px] font-extrabold text-xl shadow-xl hover:bg-[#F6F7FB] transition-all active:scale-95"
            >
              Empezar ahora gratis
            </button>
          </div>
          <p className="mt-8 text-sm text-white/70 font-medium">
            Sin tarjeta de crédito obligatoria • Configuración en 1 minuto
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;