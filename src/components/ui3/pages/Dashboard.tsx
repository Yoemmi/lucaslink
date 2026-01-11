'use client';

import React from 'react';
import TopBanner from '@/components/ui3/TopBanner';
import PhonePreview from '@/components/ui3/PhonePreview';
import { 
  User, 
  Link, 
  ShoppingBag, 
  Palette, 
  Share2, 
  Eye, 
  Check 
} from 'lucide-react';

interface DashboardProps {
  title?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ title = "Editor de Enlaces" }) => {
  const editorCards = [
    { title: 'Perfil', desc: 'Avatar, nombre y biografía', icon: User, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Enlaces', desc: 'Gestiona tus links externos', icon: Link, color: 'text-purple-500', bg: 'bg-purple-50' },
    { title: 'Productos', desc: 'Vende contenido digital', icon: ShoppingBag, color: 'text-pink-500', bg: 'bg-pink-50' },
    { title: 'Tema', desc: 'Personaliza colores y fuentes', icon: Palette, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-20">
      <TopBanner 
        title={title}
        subtitle="Personaliza tu presencia digital en un solo lugar."
        actions={
          <>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#475569] hover:bg-slate-50 transition-colors">
              <Eye size={18} />
              Vista previa
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              <Share2 size={18} />
              Compartir
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Editor Side */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Bloques de Contenido</h2>
            <p className="text-[#64748B] text-sm mb-8">Agrega y organiza los elementos que tus seguidores verán.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editorCards.map((card) => (
                <div 
                  key={card.title}
                  className="group p-6 bg-white border border-[#E2E8F0] rounded-3xl hover:border-[#0F172A] transition-all cursor-pointer relative"
                >
                  <div className={`w-12 h-12 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                  <p className="text-xs text-[#64748B] mt-1">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#F8FAFC] border border-dashed border-[#E2E8F0] rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-light text-[#64748B]">+</span>
              </div>
              <p className="text-sm font-medium text-[#0F172A]">Agregar nuevo bloque</p>
              <p className="text-xs text-[#64748B] mt-1">Música, Videos, Formularios y más</p>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Acciones rápidas</h3>
              <p className="text-sm text-[#64748B]">Sincroniza tus cambios inmediatamente.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white rounded-2xl text-sm font-bold shadow-lg shadow-slate-200 active:scale-95 transition-transform">
              <Check size={18} />
              Guardar Cambios
            </button>
          </div>
        </div>

        {/* Preview Side */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <PhonePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
