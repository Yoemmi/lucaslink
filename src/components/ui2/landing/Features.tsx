
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="p-8 bg-white border border-[#E7EAF2] rounded-[32px] hover:shadow-xl hover:-translate-y-1 transition-all group">
    <div className="w-14 h-14 bg-[#F6F7FB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#11B718] group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const items = [
    {
      title: "Links Inteligentes",
      description: "Organiza tus enlaces con prioridad, animaciones y programación horaria.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
    },
    {
      title: "Tienda Integrada",
      description: "Vende productos digitales o físicos directamente desde tu link sin redirecciones.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    },
    {
      title: "Pagos y Checkout",
      description: "Acepta tarjetas de crédito, Apple Pay y Google Pay con comisiones mínimas.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    },
    {
      title: "Analíticas Avanzadas",
      description: "Descubre de dónde vienen tus fans y qué enlaces están convirtiendo mejor.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
    },
    {
      title: "Dominio Propio",
      description: "Usa tu propia URL personalizada (tuweb.com) para reforzar tu marca personal.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
      title: "Plantillas Pro",
      description: "Cientos de diseños premium listos para usar, adaptados a cualquier industria.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F6F7FB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Todo lo que necesitas</h2>
          <p className="text-gray-500 text-lg">Mucho más que una página de enlaces.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
