"use client";

import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#E7EAF2] py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-bold text-[#0B1220]">{q}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Es realmente gratis para siempre?", a: "Sí, el plan Free incluye enlaces ilimitados y funciones básicas para que puedas empezar tu presencia online sin pagar nada." },
    { q: "¿Puedo usar mi propio dominio?", a: "Absolutamente. En los planes Pro y Business puedes conectar tu propio dominio (ej. www.tunombre.com) en pocos clics." },
    { q: "¿Cómo funcionan los pagos en la tienda?", a: "Integramos Stripe y PayPal directamente. El dinero va a tu cuenta según el procesador de pagos. En el plan Pro cobramos 0% de comisión propia." },
    { q: "¿Puedo cancelar mi suscripción cuando quiera?", a: "Sí, no hay contratos de permanencia. Puedes cancelar tu plan de pago en cualquier momento desde tu panel de control." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="divide-y divide-[#E7EAF2]">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
