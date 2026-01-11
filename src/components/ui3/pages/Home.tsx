'use client';

import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Bell, 
  Bookmark, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Plus, 
  MessageSquare, 
  Send,
  Zap,
  Sparkles,
  Search,
  ChevronRight,
  Crown
} from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Analítica');

  const stats = [
    { label: 'Vistas totales', value: '0', sub: 'la semana pasada', icon: TrendingUp },
    { label: 'Total de seguidores', value: '0', sub: 'vs la semana pasada', icon: Users },
    { label: 'Ganancias totales', value: 'USD 0', sub: 'vs la semana pasada', icon: DollarSign },
  ];

  return (
    <div className="flex h-full bg-[#F8FAFC] overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 pt-8 pb-20 custom-scrollbar">
        {/* Profile Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="https://picsum.photos/120/120?random=1" 
                className="w-16 h-16 rounded-full border-2 border-white shadow-md" 
                alt="Avatar" 
              />
              <div className="absolute -bottom-1 -right-1 bg-[#10C810] text-white p-1 rounded-full border-2 border-white">
                <Plus size={10} strokeWidth={4} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#0F172A] flex items-center gap-2">
                @yoemmi
                <span className="text-[#10C810] text-sm">✓</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm">
              <span className="text-sm text-slate-500 font-medium mr-3">balizas.ai/yoemmi</span>
              <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
                <Copy size={16} />
              </button>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white rounded-2xl text-sm font-bold hover:opacity-90 transition-all shadow-md">
              Compartir
            </button>
            <button className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all">
              <Bookmark size={20} />
            </button>
            <button className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all relative">
              <Bell size={20} />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {['Analítica', 'Descubra las tendencias', 'Mi contenido', 'Nuevas ofertas'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === tab ? 'text-[#0F172A]' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                {tab}
                {tab === 'Descubra las tendencias' || tab === 'Mi contenido' ? (
                  <Sparkles size={12} className="text-[#10C810]" fill="#10C810" />
                ) : null}
              </div>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#10C810] rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm group hover:border-[#10C810] transition-colors cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-[#E6F8E6] group-hover:text-[#10C810] transition-colors">
                  <stat.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-slate-500">{stat.label}</h3>
              </div>
              <div className="text-4xl font-black text-[#0F172A] mb-1 tracking-tight">{stat.value}</div>
              <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Main Chart Empty State */}
        <div className="bg-white border border-slate-100 rounded-[40px] p-12 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <TrendingUp size={32} className="text-slate-200" />
          </div>
          <p className="text-slate-400 font-medium mb-8 max-w-xs">
            No hay datos para mostrar. Intenta usar un período más largo o conéctate a una red social.
          </p>
          <button className="px-8 py-3.5 bg-[#0F172A] text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-100 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
            Conectar cuenta social
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Lucas AI Sidebar */}
      <aside className="hidden xl:flex flex-col w-[380px] border-l border-slate-100 bg-white h-full sticky top-0 shadow-2xl shadow-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E6F8E6] rounded-2xl flex items-center justify-center">
              <Zap size={20} className="text-[#10C810]" fill="#10C810" />
            </div>
            <div>
              <h2 className="text-sm font-black text-[#0F172A]">Lucas AI</h2>
              <span className="text-[10px] text-[#10C810] font-black uppercase tracking-widest">En línea</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors"><Search size={18} /></button>
            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors"><Plus size={18} /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          <div className="bg-[#F8FAFC] rounded-2xl p-4 text-sm font-medium text-slate-600 leading-relaxed border border-slate-100">
            Hola @yoemmi 👋, soy <span className="text-[#10C810] font-bold">Lucas</span>, tu compañero de equipo aquí en LucasLink.
            <br /><br />
            ¿En qué puedo ayudarte hoy a mejorar tu presencia digital?
          </div>
          
          <div className="italic text-xs text-slate-400 px-2 leading-relaxed">
            *Dime qué estás buscando lograr y te ayudaré a planificar los siguientes pasos.
          </div>

          <div className="h-40"></div>
        </div>

        <div className="p-6 border-t border-slate-50 bg-[#F8FAFC]/50">
          <div className="flex items-center gap-2 mb-3 px-2">
            <Sparkles size={12} className="text-blue-500" />
            <span className="text-[10px] font-bold text-slate-400">Esto te costará <span className="text-blue-500">3 créditos</span></span>
          </div>
          <div className="relative group mb-6">
            <textarea 
              placeholder="Charla con Lucas..."
              className="w-full bg-white border border-slate-200 rounded-[24px] p-5 pr-14 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#10C810]/20 focus:border-[#10C810] transition-all min-h-[100px] resize-none shadow-sm"
            ></textarea>
            <button className="absolute bottom-4 right-4 p-2 bg-[#10C810] text-white rounded-xl shadow-lg shadow-green-100 hover:scale-105 active:scale-95 transition-all">
              <Send size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
              <span>Créditos diarios</span>
              <span className="text-slate-900 font-black">30 / 30</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden mx-1 p-[1px]">
              <div className="h-full bg-gradient-to-r from-[#10C810] to-[#FACC15] w-full rounded-full shadow-[0_0_8px_rgba(16,200,16,0.2)]"></div>
            </div>
            
            {/* Botón "Mejorar Plan" Rediseñado al estilo Sidebar Premium */}
            <button className="relative w-full group overflow-hidden py-3.5 px-4 bg-[#0F172A] text-white rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] shadow-lg border border-[#10C810]/30 hover:border-[#10C810]/60 hover:shadow-[0_15px_30px_-10px_rgba(16,200,16,0.3)]">
              {/* Brillo interior */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Contenedor corona Pro */}
              <div className="flex items-center justify-center w-6 h-6 bg-[#10C810]/20 rounded-xl transition-transform group-hover:scale-110 border border-[#10C810]/40">
                <Crown size={14} fill="#FACC15" stroke="#FACC15" className="group-hover:rotate-[15deg] transition-transform duration-300 drop-shadow-[0_0_4px_rgba(250,204,21,0.5)]" />
              </div>
              
              <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-white/90">
                Mejorar <span className="text-[#10C810]">Plan</span>
              </span>
              
              <Sparkles size={11} className="text-[#FACC15]/60 animate-pulse" />
              
              {/* Animación de brillo (shine) */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.8s_ease-in-out_infinite]"></div>
            </button>
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 125%; }
        }
      `}</style>
    </div>
  );
};

export default Home;
