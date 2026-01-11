"use client";

import React, { useState } from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  hasSubmenu?: boolean;
  isSubmenu?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick, hasSubmenu, isSubmenu }) => (
  <div 
    onClick={onClick}
    className={`group flex items-center justify-between px-3 py-2 cursor-pointer rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-[#F6F7FB] text-[#0B1220] font-bold' 
        : 'text-[#6B7280] hover:bg-gray-50 hover:text-[#0B1220]'
    } ${isSubmenu ? 'pl-10 text-sm' : ''}`}
  >
    <div className="flex items-center gap-3">
      {!isSubmenu && (
        <span className={`${active ? 'text-[#0B1220]' : 'text-[#9CA3AF] group-hover:text-[#0B1220] transition-colors'}`}>
          {icon}
        </span>
      )}
      <span className="text-[13px] font-medium leading-tight tracking-tight">{label}</span>
    </div>
    {hasSubmenu && (
      <svg className={`w-3.5 h-3.5 transition-transform ${active ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </div>
);

const DashboardFAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#E7EAF2]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors px-2"
      >
        <span className="text-base font-bold text-[#0B1220]">{question}</span>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <p className="text-[#6B7280] text-sm leading-relaxed px-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

const ContactModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="p-12 text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1220] mb-2">¡Mensaje enviado!</h3>
            <p className="text-gray-500 mb-8 font-medium">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
            <button 
              onClick={onClose}
              className="bg-[#4169E1] text-white px-8 py-3 rounded-xl font-bold"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div className="p-10">
            <h3 className="text-2xl font-black text-[#0B1220] mb-2">Envíanos un mensaje</h3>
            <p className="text-gray-500 mb-8 font-medium">Cuéntanos cómo podemos ayudarte y nuestro equipo te responderá pronto.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#0B1220] mb-1.5 px-1">Email de contacto</label>
                <input 
                  type="email" 
                  required
                  placeholder="hola@tuempresa.com"
                  className="w-full px-5 py-3.5 bg-[#F6F7FB] border border-transparent rounded-2xl focus:bg-white focus:border-[#4169E1] focus:outline-none transition-all font-medium text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0B1220] mb-1.5 px-1">Asunto</label>
                <select className="w-full px-5 py-3.5 bg-[#F6F7FB] border border-transparent rounded-2xl focus:bg-white focus:border-[#4169E1] focus:outline-none transition-all font-medium text-sm appearance-none">
                  <option>Duda sobre Afiliados</option>
                  <option>Soporte Técnico</option>
                  <option>Facturación</option>
                  <option>Otros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0B1220] mb-1.5 px-1">Mensaje</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-5 py-3.5 bg-[#F6F7FB] border border-transparent rounded-2xl focus:bg-white focus:border-[#4169E1] focus:outline-none transition-all font-medium text-sm resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#4169E1] text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#4169E1]/30 transition-all flex items-center justify-center"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const Dashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [showContact, setShowContact] = useState(false);
  const [activeTab, setActiveTab] = useState<'affiliates' | 'products' | 'home'>('products');
  
  const faqs = [
    {
      question: "¿Qué es el Programa de Afiliados de LucasLink?",
      answer: "Es nuestra plataforma para que creadores moneticen sus recomendaciones. Al unirte, puedes promocionar marcas y productos directamente desde tu página y ganar comisiones por cada venta generada."
    },
    {
      question: "¿Cómo funciona?",
      answer: "Una vez aceptado en el programa, tendrás acceso a un catálogo de marcas colaboradoras. Seleccionas los productos que amas, los añades a tu LucasLink y compartes tu URL. Nosotros rastreamos las conversiones automáticamente."
    },
    {
      question: "¿Cuánta comisión puedo ganar?",
      answer: "Las comisiones varían según la marca y el tipo de producto, generalmente oscilando entre el 5% y el 25% del valor de la venta. Podrás ver los detalles específicos de cada oferta en tu panel de 'Explorar marcas'."
    },
    {
      question: "¿Cómo y cuándo me pagan?",
      answer: "Los pagos se procesan según el calendario de pagos de la marca. Normalmente, las comisiones se pagan una vez finalizado el periodo de devolución, lo que garantiza que todas las ventas sean definitivas. Una vez que tu comisión esté disponible, podrás cobrarla directamente a PayPal desde tu panel de ventas. Para realizar un seguimiento de los clics, las ventas y las comisiones obtenidas, consulta tu panel de análisis de afiliados."
    }
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden animate-fade-in font-sans">
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      
      {/* Sidebar - Fix: Added flex-shrink-0 and polished layout */}
      <aside className="w-[260px] flex-shrink-0 border-r border-[#E7EAF2] flex flex-col h-full bg-white z-20">
        <div className="p-5 flex flex-col h-full overflow-y-auto scrollbar-hide">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5 mb-10 px-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="w-8 h-8 bg-[#0B1220] rounded-lg flex items-center justify-center text-white font-black group-hover:scale-105 transition-transform">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#0B1220]">LucasLink</span>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-0.5">
            <SidebarItem 
              icon={<HomeIcon />} 
              label="Hogar" 
              active={activeTab === 'home'} 
              onClick={() => setActiveTab('home')}
            />
            <SidebarItem icon={<LinkIcon />} label="Enlace en la biografía y el sitio" />
            <SidebarItem icon={<TagIcon />} label="Ofertas de marca" />
            <SidebarItem 
              icon={<CartIcon />} 
              label="Productos afiliados" 
              active={activeTab === 'affiliates'} 
              onClick={() => setActiveTab('affiliates')}
              hasSubmenu 
            />
            {activeTab === 'affiliates' && (
              <div className="space-y-0.5 py-1">
                 <SidebarItem icon={null} label="Mis productos de afiliados" active isSubmenu />
                 <SidebarItem icon={null} label="Colecciones" isSubmenu />
                 <SidebarItem icon={null} label="Explorar marcas" isSubmenu />
              </div>
            )}
            <SidebarItem 
              icon={<BoxIcon />} 
              label="Productos digitales" 
              active={activeTab === 'products'}
              onClick={() => setActiveTab('products')}
            />
            <SidebarItem icon={<MegaphoneIcon />} label="Marketing" />
          </nav>

          {/* Stats Group */}
          <div className="mt-8 mb-3 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Analítica</div>
          <nav className="space-y-0.5">
            <SidebarItem icon={<ChartIcon />} label="Analítica" />
            <SidebarItem icon={<CashIcon />} label="Ventas y pagos" />
            <SidebarItem icon={<UsersIcon />} label="Audiencia" />
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-100">
             <nav className="space-y-0.5 mb-6">
                <SidebarItem icon={<GiftIcon />} label="Referencias" />
                <SidebarItem icon={<SettingsIcon />} label="Ajustes" />
             </nav>
          </div>
        </div>

        {/* Bottom Profile Section */}
        <div className="p-4 border-t border-[#E7EAF2] bg-[#F9FAFB]/50">
          {/* User Account Card */}
          <div className="bg-white p-4 rounded-2xl border border-[#E7EAF2] shadow-sm">
             <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2.5">
                  <img src="https://picsum.photos/seed/yoemmi/80/80" className="w-9 h-9 rounded-full border border-gray-100" alt="Avatar" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0B1220]">@yoemmi</span>
                    <div className="flex items-center gap-1 text-[9px] text-[#4169E1] font-bold">
                      <SparkleIcon /> 10 credits
                    </div>
                  </div>
               </div>
               <button className="text-gray-300 hover:text-gray-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </button>
             </div>
             
             <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-[#4169E1] w-1/3 rounded-full"></div>
             </div>
             
             <button className="w-full bg-[#FF1F8E] text-white py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-md shadow-[#FF1F8E]/10 hover:shadow-lg hover:shadow-[#FF1F8E]/20 active:scale-[0.98] transition-all">
                👑 MEJORA
             </button>
             
             <button 
               onClick={onLogout}
               className="w-full mt-2 text-[9px] text-gray-400 font-bold hover:text-red-500 transition-colors uppercase tracking-widest text-center"
             >
               Cerrar sesión
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto bg-white flex flex-col relative z-10">
        <div className="w-full h-full">
        {activeTab === 'affiliates' || activeTab === 'home' ? (
          <div className="w-full max-w-5xl px-8 pt-16 pb-24 text-center mx-auto">
            {/* View Title */}
            <div className="mb-16 relative">
              <div className="absolute inset-0 -z-10 opacity-[0.03] grid grid-cols-6 gap-8 grayscale select-none pointer-events-none">
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className="flex items-center justify-center p-4">
                    <img src={`https://logo.clearbit.com/${['nike.com', 'disney.com', 'apple.com', 'google.com', 'amazon.com'][i%5]}`} className="w-12 h-12 object-contain" alt="brand" />
                  </div>
                ))}
              </div>

              <div className="w-16 h-16 bg-[#E8F0FF] rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-[#4169E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h1 className="text-5xl font-extrabold text-[#0B1220] mb-4 tracking-tight">
                {activeTab === 'home' ? 'Tu panel de control' : 'Convierte tus ideas en Ganancias reales'}
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                {activeTab === 'home' ? 'Gestiona tu presencia digital, tus productos y tus comisiones desde un solo lugar.' : 'Postúlate para ser el primero en saber cuándo puedes comenzar a monetizar tus recomendaciones'}
              </p>
              
              <button className="bg-[#4169E1] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#4169E1]/30 transition-all active:scale-95">
                {activeTab === 'home' ? 'Configurar mi perfil' : 'Aplicado'}
              </button>
            </div>

            {/* Phone Mockup Section */}
            <div className="relative mb-32 inline-block">
               <div className="relative w-[300px] h-[610px] bg-[#1a1a1a] rounded-[52px] p-[10px] border-4 border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="relative w-full h-full rounded-[42px] overflow-hidden flex flex-col text-white text-left bg-black">
                     <div className="absolute inset-0 z-0 overflow-hidden">
                       <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-[#4169E1] via-[#8A2BE2] to-[#FF1F8E] opacity-90"></div>
                       <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/80 to-transparent"></div>
                     </div>
                     <div className="relative z-10 flex flex-col h-full">
                       <div className="h-[260px] w-full relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-[3px] border-white/40 overflow-hidden shadow-2xl backdrop-blur-md">
                           <img src="https://picsum.photos/seed/creative/200/200" className="w-full h-full object-cover" alt="avatar" />
                         </div>
                       </div>
                       <div className="px-6 flex-grow">
                         <div className="space-y-3">
                            <div className="w-full h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] flex items-center px-5 gap-4">
                              <span className="text-sm font-bold text-white">Mi Nueva Colección</span>
                            </div>
                            <div className="w-full h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] flex items-center px-5 gap-4">
                              <span className="text-sm font-bold text-white">Únete a mi Comunidad</span>
                            </div>
                         </div>
                       </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-[#E7EAF2] pt-20 w-full max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-[#0B1220] mb-4">Preguntas frecuentes</h2>
              <div className="text-left mb-16 mt-8">
                {faqs.map((faq, index) => (
                  <DashboardFAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
              <div className="bg-[#F9FAFB] rounded-[32px] p-12 border border-[#E7EAF2]">
                 <h3 className="text-3xl font-extrabold text-[#0B1220] mb-4">¿Aún tienes preguntas?</h3>
                 <button onClick={() => setShowContact(true)} className="bg-[#4169E1] text-white px-8 py-3.5 rounded-xl font-bold">
                   Contáctanos
                 </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full p-8 bg-white animate-fade-in">
            {/* Digital Products View */}
            
            {/* 1. Promo Banner */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
              <div className="flex items-center gap-3">
                <span className="text-[#FF1F8E] text-2xl">👑</span>
                <h2 className="text-xl md:text-2xl font-extrabold leading-tight">
                   <span className="text-[#FF1F8E]">Aprovecha al máximo tu tienda.</span> ¡Conviértete en profesional hoy mismo!
                </h2>
              </div>
              <button className="bg-[#FF1F8E] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FF1F8E]/20 hover:scale-[1.02] transition-transform flex-shrink-0">
                 ACTUALIZAR LA APLICACIÓN
              </button>
            </div>

            {/* 2. Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
              {[
                { icon: "💰", title: "0% comisiones para el vendedor", desc: "Gana más con cada venta que realices." },
                { icon: "🛍️", title: "Vender con opciones de Pago aplazado", desc: "Ofrece a tus clientes la facilidad de comprar ahora." },
                { icon: "🔗", title: "Personalizar las URL de productos", desc: "Así que cada producto tiene un enlace de marca." },
                { icon: "🚀", title: "Aumentos de pedidos", desc: "Vender a los clientes otros productos adicionales." },
                { icon: "🔑", title: "Vender membresías ilimitadas", desc: "Ofrecer membresía a contenido exclusivo." },
                { icon: "🎓", title: "Vende cursos ilimitados", desc: "Ofrece cursos multimedia con videos alojados." },
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-[#E7EAF2] rounded-2xl p-5 hover:border-[#4169E1]/30 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h4 className="text-[13px] font-bold text-[#0B1220] mb-2 leading-snug">{card.title}</h4>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* 3. Setup Payments Bar */}
            <div className="bg-[#4169E1] rounded-[24px] p-5 flex flex-col sm:flex-row items-center justify-between gap-5 mb-14 shadow-xl shadow-[#4169E1]/10">
               <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white text-center sm:text-left">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80">CONFIGURAR PAGOS :</span>
                  <span className="text-sm font-medium">Configura tus métodos de pago para vender tus productos</span>
               </div>
               <button className="bg-white text-[#4169E1] px-7 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md">
                  CONFIGURACIÓN
               </button>
            </div>

            {/* 4. Products Area Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
               <h3 className="text-3xl font-extrabold text-[#0B1220]">Productos digitales</h3>
               <div className="flex items-center gap-4">
                  <div className="flex items-center bg-[#F6F7FB] rounded-xl p-1.5 border border-[#E7EAF2]">
                     <button className="p-2 bg-white rounded-lg shadow-sm text-[#4169E1]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                     </button>
                     <button className="p-2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                     </button>
                  </div>
                  <button className="bg-[#4169E1] text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-2.5 hover:shadow-xl hover:shadow-[#4169E1]/20 transition-all active:scale-[0.98]">
                     <span className="text-2xl leading-none">+</span> Nuevo producto
                  </button>
               </div>
            </div>

            {/* 5. Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="bg-white border border-[#E7EAF2] rounded-[32px] overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square bg-[#E8F0FF] relative overflow-hidden p-10 flex items-center justify-center">
                     <div className="w-full h-full relative animate-float">
                        <div className="absolute inset-0 bg-[#8A2BE2] rounded-[30%] blur-3xl opacity-20"></div>
                        <img src="https://picsum.photos/seed/digital-art/400/400" className="w-full h-full object-contain relative z-10" alt="product image" />
                     </div>
                  </div>
                  <div className="p-6">
                     <h4 className="text-lg font-bold text-[#0B1220] mb-1 group-hover:text-[#4169E1] transition-colors">Producto impresionante sin título</h4>
                     <p className="text-[15px] font-bold text-gray-800 mb-3">$16.00 USD</p>
                     <div className="flex items-center gap-5 text-[10px] text-gray-400 font-bold mb-5 uppercase tracking-widest">
                        <span>0 ventas</span>
                        <span>$0 ingresos</span>
                     </div>
                     <div className="flex items-center justify-between pt-5 border-t border-[#F6F7FB]">
                        <div className="flex items-center gap-2 bg-[#F6F7FB] px-3.5 py-1.5 rounded-lg text-[10px] font-bold text-gray-600">
                           <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                           Descarga digital
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                           <button className="hover:text-[#4169E1] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeWidth="2.5"/></svg></button>
                           <button className="hover:text-[#4169E1] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2.5"/></svg></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}
        </div>
      </main>
    </div>
  );
};

// --- Updated Sidebar Icons to match professional UI ---
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const LinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const TagIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const CartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const BoxIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const MegaphoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const ChartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const CashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const GiftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4M9 6v3m6-3v3m-3-3h.01M9 16h.01m3 0h.01m3 0h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
);
const SparkleIcon = () => (
  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>
);

export default Dashboard;
