'use client';

import React, { useState } from 'react';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  ArrowRight, 
  ShoppingBag, 
  ExternalLink, 
  Star,
  CheckCircle2,
  Globe,
  Menu,
  X
} from 'lucide-react';
import Logo from '@/components/ui3/Logo';

const WebHome: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { title: 'YouTube Channel', desc: 'Tutorials and daily vlogs about digital lifestyle.', url: '#', icon: Youtube, color: 'text-red-500' },
    { title: 'Design Portfolio', desc: 'Case studies of my latest UI/UX projects.', url: '#', icon: Globe, color: 'text-blue-500' },
    { title: 'Twitter Feed', desc: 'Daily thoughts and industry news updates.', url: '#', icon: Twitter, color: 'text-sky-400' },
  ];

  const products = [
    { title: 'Ultimate UI Kit 2025', price: '$49.00', image: 'https://picsum.photos/400/300?random=10' },
    { title: 'Notion Life Planner', price: '$19.00', image: 'https://picsum.photos/400/300?random=11' },
    { title: 'CinePro Presets', price: '$25.00', image: 'https://picsum.photos/400/300?random=12' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#10C810] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 md:h-24 flex items-center justify-between">
          <Logo className="scale-90 md:scale-110 origin-left" />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-sm font-bold text-slate-500 hover:text-[#0F172A] transition-all">Sobre mí</a>
            <a href="#links" className="text-sm font-bold text-slate-500 hover:text-[#0F172A] transition-all">Recursos</a>
            <a href="#store" className="text-sm font-bold text-slate-500 hover:text-[#0F172A] transition-all">Tienda</a>
            <button className="px-8 py-3 bg-[#0F172A] text-white rounded-2xl text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200">
              Contratar Proyecto
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-black text-[#0F172A]">Sobre mí</a>
            <a href="#links" onClick={() => setIsMenuOpen(false)} className="text-lg font-black text-[#0F172A]">Recursos</a>
            <a href="#store" onClick={() => setIsMenuOpen(false)} className="text-lg font-black text-[#0F172A]">Tienda</a>
            <button className="w-full py-4 bg-[#0F172A] text-white rounded-2xl font-black shadow-lg">
              Contratar Proyecto
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-12 pb-20 md:pt-32 md:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F8E6] text-[#10C810] rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-10">
                <Star size={14} fill="#10C810" />
                Creador Digital Verificado
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 leading-[1.05] tracking-tight">
                Diseñando <span className="text-slate-400">futuros</span> que <span className="text-[#10C810]">conectan</span>.
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 mb-10 md:mb-14 leading-relaxed max-w-xl mx-auto md:mx-0">
                Soy Yoemmi, un creador multidisciplinario enfocado en construir productos digitales de alto impacto y compartir recursos para la comunidad.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="w-full sm:w-auto px-12 py-5 bg-[#10C810] text-white rounded-[24px] font-black text-lg shadow-2xl shadow-green-100 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                  Explorar Tienda
                  <ArrowRight size={24} />
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-[#0F172A] rounded-[24px] font-black text-lg hover:bg-slate-50 transition-all">
                  Ver Proyectos
                </button>
              </div>
            </div>

            <div className="flex-1 relative order-1 md:order-2 w-full max-w-[340px] sm:max-w-[440px] md:max-w-none mx-auto">
              <div className="relative z-10 w-full aspect-square">
                <img 
                  src="https://picsum.photos/1000/1000?random=1" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-[50px] md:rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] md:rotate-3 hover:rotate-0 transition-transform duration-1000"
                />
                <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 bg-white p-5 md:p-8 rounded-3xl md:rounded-[40px] shadow-2xl border border-slate-100 flex items-center gap-4 md:gap-6 animate-bounce">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-2xl md:rounded-[24px] flex items-center justify-center text-white">
                    <CheckCircle2 size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-sm md:text-lg font-black text-[#0F172A]">Top 1% Creador</p>
                    <p className="text-xs md:text-sm text-slate-400 font-bold">LucasLink Community</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-[#E6F8E6] rounded-full blur-[100px] md:blur-[140px] -z-10 opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Grid */}
      <section id="links" className="py-24 md:py-48 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Mi Ecosistema Digital</h2>
            <p className="text-slate-500 font-medium text-lg md:text-xl">Conéctate conmigo a través de diferentes plataformas y accede a contenido exclusivo.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {links.map((link, i) => (
              <a 
                key={i} 
                href={link.url}
                className="group bg-white p-8 md:p-14 rounded-[40px] md:rounded-[60px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#10C810] hover:-translate-y-3 transition-all duration-500 text-left"
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 bg-slate-50 rounded-2xl md:rounded-[32px] flex items-center justify-center mb-8 md:mb-12 ${link.color} group-hover:bg-[#E6F8E6] group-hover:text-[#10C810] transition-colors`}>
                  <link.icon size={32} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl md:text-3xl font-black text-[#0F172A] mb-4 md:mb-6">{link.title}</h3>
                <p className="text-base md:text-lg text-slate-500 font-medium mb-10 md:mb-14 leading-relaxed">{link.desc}</p>
                <span className="inline-flex items-center gap-3 text-sm md:text-base font-black text-[#10C810] group-hover:gap-6 transition-all uppercase tracking-widest">
                  Visitar ahora <ExternalLink size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10 mb-16 md:mb-24 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Productos Digitales</h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium">Lleva tu flujo de trabajo al siguiente nivel con recursos curados para profesionales del diseño.</p>
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-[#0F172A] text-white rounded-[24px] font-black text-sm flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-slate-200">
              Ver Catálogo Completo
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
            {products.map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/95 backdrop-blur-md px-5 py-2.5 md:px-8 md:py-3 rounded-2xl md:rounded-3xl text-sm md:text-lg font-black text-[#0F172A] shadow-2xl">
                    {product.price}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0F172A] group-hover:text-[#10C810] transition-colors tracking-tight">{product.title}</h3>
                <p className="text-slate-400 font-black uppercase text-[10px] md:text-[12px] tracking-[0.25em] mt-3 md:mt-4 flex items-center gap-3">
                  <ShoppingBag size={14} />
                  Producto Digital Premium
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#0F172A] text-white py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Logo variant="white" className="justify-center mb-12 md:mb-20 scale-125 md:scale-150" />
          <h2 className="text-4xl md:text-7xl font-black mb-10 md:mb-16 leading-tight tracking-tight">Únete a mi comunidad exclusiva</h2>
          <p className="text-lg md:text-2xl text-slate-400 mb-14 md:mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
            Recibe actualizaciones sobre nuevos proyectos, tutoriales y recursos directamente en tu bandeja de entrada.
          </p>
          <div className="max-w-xl mx-auto relative group">
            <input 
              type="email" 
              placeholder="Escribe tu mejor email..."
              className="w-full py-5 md:py-8 px-8 md:px-12 rounded-[32px] bg-slate-800/50 border border-slate-700 text-white text-lg md:text-xl focus:outline-none focus:border-[#10C810] focus:bg-slate-800 transition-all placeholder:text-slate-500 shadow-2xl"
            />
            <button className="w-full md:w-auto mt-4 md:mt-0 md:absolute md:top-2 md:right-2 md:bottom-2 px-10 md:px-14 bg-[#10C810] text-white rounded-[24px] font-black text-base md:text-lg hover:bg-[#10C810]/90 transition-all shadow-xl shadow-green-900/20 active:scale-95 py-4 md:py-0">
              Suscribirme
            </button>
          </div>
          <div className="mt-24 md:mt-40 pt-10 md:pt-16 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-10 opacity-50">
            <p className="text-sm md:text-base font-bold">© 2025 @yoemmi. Diseñado con LucasLink Professional.</p>
            <div className="flex gap-10 md:gap-14">
              <a href="#" className="hover:text-[#10C810] transition-colors hover:scale-125"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#10C810] transition-colors hover:scale-125"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#10C810] transition-colors hover:scale-125"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebHome;
