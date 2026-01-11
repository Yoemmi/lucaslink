
import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
  onClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, isPopular, cta, onClick }) => (
  <div className={`p-8 rounded-[32px] border ${isPopular ? 'border-[#11B718] bg-[#0B1220] text-white shadow-2xl scale-105 z-10' : 'border-[#E7EAF2] bg-white text-[#0B1220]'} flex flex-col`}>
    {isPopular && <div className="bg-[#11B718] text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full self-start mb-4">Más popular</div>}
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <div className="flex items-baseline mb-8">
      <span className="text-4xl font-black">{price}</span>
      <span className={`text-sm ml-2 ${isPopular ? 'text-gray-400' : 'text-gray-500'}`}>/ mes</span>
    </div>
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm">
          <svg className={`w-5 h-5 ${isPopular ? 'text-[#11B718]' : 'text-[#11B718]'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          {f}
        </li>
      ))}
    </ul>
    <button 
      onClick={onClick}
      className={`w-full py-4 rounded-[18px] font-bold transition-all active:scale-95 ${isPopular ? 'bg-[#11B718] text-white hover:brightness-110' : 'bg-[#F6F7FB] text-[#0B1220] hover:bg-[#E7EAF2]'}`}
    >
      {cta}
    </button>
  </div>
);

interface PricingProps {
  onPlanClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPlanClick }) => {
  return (
    <section id="pricing" className="py-24 bg-[#F6F7FB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Precios transparentes</h2>
          <p className="text-gray-500 text-lg">Sin costes ocultos. Empieza hoy mismo.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <PricingCard 
            name="Free" 
            price="$0" 
            cta="Empezar ahora"
            onClick={onPlanClick}
            features={['Enlaces ilimitados', 'Analíticas básicas (7 días)', 'Plantillas básicas', 'Soporte vía email']} 
          />
          <PricingCard 
            name="Pro" 
            price="$9" 
            isPopular 
            cta="Obtener Pro"
            onClick={onPlanClick}
            features={['Sin marca LucasLink', 'Analíticas avanzadas', 'Dominio personalizado', 'Tienda con 0% comisión', 'Soporte prioritario']} 
          />
          <PricingCard 
            name="Business" 
            price="$29" 
            cta="Contactar ventas"
            onClick={onPlanClick}
            features={['Múltiples páginas', 'Gestión de equipos', 'Webhooks y API', 'Account Manager', 'Contratos personalizados']} 
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;