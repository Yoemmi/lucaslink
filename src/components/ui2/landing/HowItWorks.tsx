
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'Regístrate en un click', desc: 'Usa tu email o cuenta de redes sociales para empezar gratis.' },
    { num: '02', title: 'Personaliza tu página', desc: 'Añade tus links, cambia colores y elige una plantilla premium.' },
    { num: '03', title: 'Comparte y crece', desc: 'Pon el link en tu biografía y empieza a ver los resultados.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10">¿Cómo funciona?</h2>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F6F7FB] text-[#11B718] rounded-2xl flex items-center justify-center text-2xl font-black">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F6F7FB] rounded-[40px] p-12 overflow-hidden border border-[#E7EAF2]">
            <img 
              src="https://picsum.photos/seed/dashboard/600/400" 
              alt="Dashboard Preview" 
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
