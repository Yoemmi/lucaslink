'use client';

import React, { useState } from 'react';
import TopBanner from '@/components/ui3/TopBanner';
// Added Globe to the lucide-react imports
import { 
  User, 
  Lock, 
  Bell, 
  CreditCard, 
  Trash2, 
  Camera, 
  ChevronRight, 
  Check, 
  Mail,
  Smartphone,
  ShieldCheck,
  Crown,
  Sparkles,
  Instagram,
  Twitter,
  Youtube,
  Share2,
  ExternalLink,
  Shield,
  Globe
} from 'lucide-react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
    tips: true
  });

  const [isSaving, setIsSaving] = useState(false);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-12 pb-24">
      <TopBanner 
        title="Ajustes de cuenta" 
        subtitle="Configura tu perfil, preferencias y seguridad de LucasLink."
      />

      <div className="space-y-10">
        {/* Perfil del Usuario Premium */}
        <section className="bg-white border border-slate-100 rounded-[48px] p-10 shadow-sm relative overflow-hidden group">
          {/* Fondo Decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6F8E6]/30 rounded-full blur-[80px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-[#E6F8E6] rounded-2xl flex items-center justify-center text-[#10C810]">
                <User size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-[#0F172A] tracking-tight">Información Personal</h3>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Avatar Section */}
              <div className="relative mx-auto lg:mx-0">
                <div className="w-32 h-32 rounded-[40px] border-8 border-slate-50 shadow-2xl overflow-hidden group/avatar relative">
                  <img 
                    src="https://picsum.photos/200/200?random=1" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-110"
                    alt="Avatar" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>
                <button className="absolute -bottom-2 -right-2 p-3 bg-[#10C810] text-white rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all border-4 border-white">
                  <PlusIcon size={16} />
                </button>
              </div>
              
              {/* Form Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Nombre Público</label>
                  <input 
                    type="text" 
                    defaultValue="Yoemmi Rivera"
                    className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10C810]/20 focus:bg-white focus:border-[#10C810] transition-all text-[#0F172A] font-bold text-sm shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Username</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">@</span>
                    <input 
                      type="text" 
                      defaultValue="yoemmi"
                      className="w-full pl-10 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10C810]/20 focus:bg-white focus:border-[#10C810] transition-all text-[#0F172A] font-bold text-sm shadow-inner"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Bio Corta</label>
                  <textarea 
                    defaultValue="Creador de contenido digital y entusiasta de la tecnología. Diseñando el futuro de la web."
                    className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10C810]/20 focus:bg-white focus:border-[#10C810] transition-all text-[#0F172A] font-bold text-sm shadow-inner min-h-[100px] resize-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex justify-end">
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className={`px-10 py-4 ${isSaving ? 'bg-green-500' : 'bg-[#0F172A]'} text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:translate-y-[-2px] active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-slate-200`}
              >
                {isSaving ? <Check size={16} /> : <Check size={16} />}
                {isSaving ? 'Guardado con éxito' : 'Guardar Cambios'}
              </button>
            </div>
          </div>
        </section>

        {/* Plan y Facturación Premium Card */}
        <section className="bg-[#0F172A] border border-[#10C810]/30 rounded-[48px] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
          {/* Animated Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#10C810]/10 rounded-full blur-[120px] group-hover:bg-[#10C810]/20 transition-colors duration-1000"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#10C810]/20 text-[#10C810] rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#10C810]/30">
                <Crown size={12} fill="currentColor" />
                Tu Plan: Free Edition
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Potencia tu marca con <span className="text-[#10C810]">LucasLink Pro</span></h3>
              <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-xl">
                Accede a dominios personalizados, analítica de clics avanzada, integraciones de marketing y elimina nuestra marca de tu perfil.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 shrink-0">
              <button className="relative group/btn overflow-hidden py-5 px-12 bg-[#10C810] text-white rounded-[24px] flex items-center justify-center gap-3 transition-all hover:scale-[1.05] active:scale-[0.98] shadow-[0_20px_50px_-10px_rgba(16,200,16,0.4)]">
                <Crown size={20} fill="#FACC15" stroke="#FACC15" />
                <span className="text-sm font-black uppercase tracking-[0.1em]">Actualizar a Pro</span>
                <Sparkles size={16} className="animate-pulse text-white/80" />
                {/* Shine animation */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:animate-[shine_1.5s_ease-in-out_infinite]"></div>
              </button>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Pruébalo gratis por 7 días</p>
            </div>
          </div>
        </section>

        {/* Cuentas Conectadas & Seguridad */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cuentas Conectadas */}
          <section className="bg-white border border-slate-100 rounded-[48px] p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                <Share2 size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-black text-[#0F172A] tracking-tight">Cuentas Conectadas</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Instagram', user: '@yoemmi', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-50' },
                { name: 'TikTok', user: 'No conectado', icon: Globe, color: 'text-slate-900', bg: 'bg-slate-100', connected: false },
                { name: 'YouTube', user: 'LucasLink Tutorials', icon: Youtube, color: 'text-red-600', bg: 'bg-red-50' },
              ].map((acc) => (
                <div key={acc.name} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-[24px] border border-slate-100 hover:border-slate-200 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${acc.bg} ${acc.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <acc.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#0F172A]">{acc.name}</p>
                      <p className={`text-xs font-bold ${acc.connected === false ? 'text-slate-400 italic' : 'text-[#10C810]'}`}>
                        {acc.user}
                      </p>
                    </div>
                  </div>
                  <button className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${acc.connected === false ? 'bg-[#0F172A] text-white hover:opacity-90' : 'bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100'}`}>
                    {acc.connected === false ? 'Conectar' : 'Desvincular'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Notificaciones Modernas */}
          <section className="bg-white border border-slate-100 rounded-[48px] p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                <Bell size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-black text-[#0F172A] tracking-tight">Notificaciones</h3>
            </div>
            
            <div className="space-y-8">
              {[
                { id: 'email', label: 'Alertas de Email', desc: 'Resúmenes semanales de tus clics.' },
                { id: 'push', label: 'Notificaciones Push', desc: 'Alertas en vivo cuando alguien te sigue.' },
                { id: 'updates', label: 'Actualizaciones de Lucas', desc: 'Nuevas funciones impulsadas por AI.' },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between group cursor-pointer" onClick={() => toggleNotification(item.id as any)}>
                  <div className="flex-1">
                    <p className="text-sm font-black text-[#0F172A] group-hover:text-[#10C810] transition-colors">{item.label}</p>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`relative w-14 h-7 rounded-full transition-all duration-400 shadow-inner ${notifications[item.id as keyof typeof notifications] ? 'bg-[#10C810]' : 'bg-slate-200'}`}>
                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-400 transform ${notifications[item.id as keyof typeof notifications] ? 'left-8 scale-110' : 'left-1'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Seguridad & Privacidad */}
        <section className="bg-white border border-slate-100 rounded-[48px] p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-[#E6F8E6] rounded-2xl flex items-center justify-center text-[#10C810]">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-black text-[#0F172A] tracking-tight">Seguridad y Privacidad</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="flex items-center justify-between p-6 bg-slate-50/50 border border-slate-100 rounded-[32px] hover:border-[#10C810] hover:bg-white transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#10C810] shadow-sm transition-colors">
                  <Lock size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-[#0F172A]">Contraseña</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Último cambio: Marzo 2024</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex items-center justify-between p-6 bg-slate-50/50 border border-slate-100 rounded-[32px] hover:border-[#10C810] hover:bg-white transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#10C810] shadow-sm transition-colors">
                  <Smartphone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-[#0F172A]">Doble Factor (2FA)</p>
                  <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider mt-0.5">No habilitado</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Zona Crítica */}
        <section className="bg-red-50/30 border border-red-100 rounded-[48px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white border border-red-100 rounded-3xl flex items-center justify-center text-red-500 shadow-sm group-hover:rotate-[15deg] transition-transform">
              <Trash2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-red-900 tracking-tight">Zona de Peligro</h3>
              <p className="text-red-700/60 text-sm font-medium leading-relaxed max-w-md">
                Eliminar tu cuenta es irreversible. Se borrarán todos tus enlaces, productos y datos de analítica de forma permanente.
              </p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white border border-red-200 text-red-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all active:scale-95 shadow-xl shadow-red-100/50 shrink-0">
            Eliminar Cuenta
          </button>
        </section>
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

const PlusIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default Settings;
