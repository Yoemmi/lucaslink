
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E7EAF2] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#11B718] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">LucasLink</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              La plataforma definitiva para que creadores y negocios centralicen su mundo digital en un solo lugar con LucasLink.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Producto</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#0B1220]">
              <li><a href="#" className="hover:text-[#11B718]">Funciones</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Precios</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Plantillas</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Integraciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Compañía</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#0B1220]">
              <li><a href="#" className="hover:text-[#11B718]">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Blog</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Carreras</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Legal</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#0B1220]">
              <li><a href="#" className="hover:text-[#11B718]">Privacidad</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Términos</a></li>
              <li><a href="#" className="hover:text-[#11B718]">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#E7EAF2] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">© 2025 LucasLink. Hecho con ❤️ para creadores.</p>
          <div className="flex gap-6">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
             <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
             <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;