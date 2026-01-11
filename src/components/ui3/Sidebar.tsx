'use client';

import React from 'react';
import { 
  Home, 
  Layout, 
  ShoppingBag, 
  ExternalLink, 
  Globe, 
  Settings,
  Star,
  Smartphone,
  Monitor,
  Gift,
  Zap,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Briefcase,
  Crown,
  Sparkles
} from 'lucide-react';
import { ViewType } from '@/components/ui3/types';
import Logo from '@/components/ui3/Logo';

interface SidebarProps {
  activeView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setView }) => {
  const menuItems = [
    { id: 'home', label: 'Hogar', icon: Home },
    { id: 'dashboard', label: 'Enlace en la biografía', icon: Layout },
    { id: 'websites', label: 'Sitios web', icon: Globe },
    { id: 'products', label: 'Productos digitales', icon: ShoppingBag },
  ];

  const secondaryItems = [
    { id: 'mobile-preview', label: 'Vista previa móvil', icon: Smartphone },
    { id: 'web-preview', label: 'Vista previa web', icon: Monitor },
  ];

  const bottomItems = [
    { id: 'referrals', label: 'Referencias', icon: Gift },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ];

  const renderItem = (item: any) => (
    <button
      key={item.id}
      onClick={() => setView(item.id as ViewType)}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 group ${
        activeView === item.id 
          ? 'bg-[#F1F5F9] text-[#0F172A]' 
          : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
      }`}
    >
      <item.icon 
        size={18} 
        strokeWidth={activeView === item.id ? 2.5 : 2} 
        className={`${activeView === item.id ? 'text-[#10C810]' : 'text-[#94A3B8] group-hover:text-[#64748B]'}`} 
      />
      <span className="flex-1 text-left">{item.label}</span>
    </button>
  );

  return (
    <div className="hidden md:flex flex-col w-72 bg-white border-r border-[#E2E8F0] h-screen sticky top-0 z-40">
      {/* Brand Header */}
      <div className="p-7 mb-2">
        <Logo />
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-4 py-2 space-y-0.5 overflow-y-auto scrollbar-hide">
        {menuItems.map(renderItem)}
        
        <div className="my-4 border-t border-slate-100"></div>
        
        {secondaryItems.map(renderItem)}
        
        <div className="my-4 border-t border-slate-100"></div>
        
        {bottomItems.map(renderItem)}
      </nav>

      {/* Profile & Credits Section Mejorada */}
      <div className="p-4 mt-auto">
        <div className="bg-white rounded-[32px] p-5 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-5 p-1">
            <div className="relative group cursor-pointer">
              <img src="https://picsum.photos/80/80?random=1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm group-hover:scale-105 transition-transform" alt="Avatar" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#10C810] border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-black text-[#0F172A] truncate">@yoemmi</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Plan Free</span>
            </div>
            <button className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
              <ChevronRight size={16} className="text-slate-300" />
            </button>
          </div>

          {/* Credits Bar - Estilo Verde y Amarillo con Rayo Verde Oscuro */}
          <div className="mb-6 px-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-[#E6F8E6] rounded-md flex items-center justify-center">
                  <Zap size={12} className="text-[#065F46]" fill="currentColor" />
                </div>
                <span className="text-[11px] font-black text-[#0F172A] uppercase tracking-tight">Créditos</span>
              </div>
              <span className="text-[11px] font-black text-[#10C810]">30 / 30</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden p-[1px]">
              <div 
                className="h-full bg-gradient-to-r from-[#10C810] to-[#FACC15] rounded-full shadow-[0_0_8px_rgba(16,200,16,0.3)]" 
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>

          {/* Upgrade Button - Midnight Emerald con Corona Amarilla y Letras pequeñas */}
          <button className="relative w-full group overflow-hidden py-3 px-4 bg-[#0F172A] text-white rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] shadow-lg border border-[#10C810]/30 hover:border-[#10C810]/60 hover:shadow-[0_15px_30px_-10px_rgba(16,200,16,0.3)]">
            {/* Sutil gradiente oscuro al fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            {/* Contenedor del icono con corona amarilla */}
            <div className="flex items-center justify-center w-6 h-6 bg-[#10C810]/20 rounded-xl shadow-[inner_0_0_8px_rgba(16,200,16,0.2)] transition-transform group-hover:scale-110 border border-[#10C810]/40">
              <Crown size={14} fill="#FACC15" stroke="#FACC15" className="group-hover:rotate-[15deg] transition-transform duration-300 drop-shadow-[0_0_4px_rgba(250,204,21,0.5)]" />
            </div>
            
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/90">
              Mejora a <span className="text-[#10C810]">Pro</span>
            </span>
            
            <Sparkles size={10} className="text-[#FACC15]/60 animate-pulse" />
            
            {/* Animación de brillo (shine) */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.8s_ease-in-out_infinite]"></div>
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 125%; }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
