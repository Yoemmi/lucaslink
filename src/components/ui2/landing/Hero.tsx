
import React from 'react';

interface HeroProps {
  onStartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de Texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#11B718]/10 text-[#11B718] text-sm font-bold mb-6">
              ✨ El link número #1 para creadores
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B1220] leading-[1.1] mb-6">
              Tu mundo en un <br />
              <span className="text-[#11B718]">solo enlace.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Convierte seguidores en clientes. Crea una página personalizada en segundos para compartir tus links, vender productos y recibir pagos con LucasLink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onStartClick}
                className="bg-[#11B718] text-white px-10 py-5 rounded-[20px] font-bold text-lg hover:shadow-xl hover:shadow-[#11B718]/30 transition-all active:scale-95"
              >
                Empezar gratis
              </button>
              <a 
                href="#pricing"
                className="bg-white text-[#0B1220] border-2 border-[#E7EAF2] px-10 py-5 rounded-[20px] font-bold text-lg hover:bg-[#F6F7FB] transition-all inline-flex items-center justify-center"
              >
                Ver Planes
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 20}/80/80`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                <span className="text-[#0B1220] font-bold">+20k creadores</span> ya confían en nosotros
              </p>
            </div>
          </div>

          {/* Previsualización del Teléfono Mejorada */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Efectos de fondo */}
            <div className="absolute -z-10 w-[500px] h-[500px] bg-[#11B718]/10 rounded-full blur-[100px] top-1/2 -translate-y-1/2"></div>
            
            {/* Elementos flotantes */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl animate-float z-20 hidden md:block border border-[#E7EAF2]">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">Nuevo seguidor</p>
                    <p className="text-[10px] text-gray-400">Hace 2 min</p>
                  </div>
               </div>
            </div>

            <div className="absolute -bottom-6 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-float z-20 hidden md:block border border-[#E7EAF2]" style={{ animationDelay: '2s' }}>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">Venta realizada</p>
                    <p className="text-[10px] text-gray-400">+$45.00 USD</p>
                  </div>
               </div>
            </div>
            
            {/* Marco del Teléfono */}
            <div className="relative w-[310px] md:w-[350px] h-[630px] md:h-[710px] bg-[#1a1a1a] rounded-[55px] p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[1px] border-white/10 ring-4 ring-[#2a2a2a]">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[110px] h-[34px] bg-[#000] rounded-[20px] z-30 flex items-center justify-center border border-white/5">
                 <div className="w-2 h-2 bg-blue-500/20 rounded-full absolute right-4"></div>
              </div>

              <div className="relative w-full h-full bg-white rounded-[45px] overflow-hidden flex flex-col">
                <div className="px-8 pt-6 pb-2 flex justify-between items-center text-[11px] font-bold text-black z-20">
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
                    <div className="w-5 h-2.5 border border-black rounded-[2px] relative p-[1px]">
                      <div className="h-full bg-black w-[80%] rounded-[1px]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow overflow-y-auto px-6 py-4 scrollbar-hide">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 group">
                      <div className="absolute inset-0 bg-[#11B718] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <img src="https://picsum.photos/seed/alex/150/150" className="w-20 h-20 rounded-full relative z-10 border-2 border-white shadow-sm" alt="Avatar" />
                    </div>
                    
                    <h3 className="font-extrabold text-xl text-[#0B1220] mb-1 flex items-center gap-1">
                      Alex Rivera 
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/></svg>
                    </h3>
                    <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-6 text-center">Digital Creator & UI Designer</p>
                    
                    <div className="w-full bg-[#F6F7FB] rounded-[24px] p-3 border border-[#E7EAF2] mb-6 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform" onClick={onStartClick}>
                       <div className="flex gap-3">
                          <img src="https://picsum.photos/seed/course/120/120" className="w-16 h-16 rounded-xl object-cover" alt="Product" />
                          <div className="flex flex-col justify-center">
                             <p className="text-[10px] font-bold text-[#11B718]">CURSO NUEVO</p>
                             <p className="text-xs font-bold text-[#0B1220]">Dominando Tailwind CSS</p>
                             <div className="flex items-center gap-2 mt-1">
                               <span className="text-xs font-black text-[#0B1220]">$19.00</span>
                               <button className="bg-[#0B1220] text-white text-[9px] px-2 py-1 rounded-lg font-bold">Comprar</button>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="w-full space-y-3">
                      <div className="w-full py-3.5 bg-white rounded-[18px] border-2 border-[#E7EAF2] flex items-center px-4 gap-3 hover:border-[#11B718] transition-colors cursor-pointer group" onClick={onStartClick}>
                        <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </div>
                        <span className="font-bold text-sm text-[#0B1220]">Mi Canal de YouTube</span>
                      </div>
                      
                      <div className="w-full py-3.5 bg-[#11B718] rounded-[18px] flex items-center px-4 gap-3 shadow-lg shadow-[#11B718]/30 cursor-pointer group" onClick={onStartClick}>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <span className="font-bold text-sm text-white">Descargar E-book Gratis</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 w-32 bg-black/10 rounded-full mx-auto mb-2 mt-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
