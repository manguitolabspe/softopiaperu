import React from 'react';
import { WHATSAPP_NUMBER, SYSTEM_LOGIN_URL } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/softopia_logo.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/favicon.png';
                }}
                alt="Softopia Perú Logo"
                className="h-10 w-auto object-contain bg-white/10 p-1 rounded-xl border border-white/10"
              />
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="text-xl font-black text-white tracking-tight">Softopia</span>
                  <span className="text-xs font-extrabold text-[#f04e23]">Perú</span>
                </div>
                <span className="text-[7.5px] font-bold tracking-widest text-slate-400 uppercase mt-1">
                  Tecnología que impulsa tu negocio
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-medium max-w-sm">
              Brindamos soluciones informáticas robustas de punto de venta y facturación electrónica integradas con alta tecnología homologada por SUNAT en todo el Perú.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">NAVEGACIÓN</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#inicio" className="hover:text-white transition-colors py-0.5">Inicio</a>
              <a href="#sistema-modulos" className="hover:text-white transition-colors py-0.5">Módulos</a>
              <a href="#licencias-software" className="hover:text-white transition-colors py-0.5">Licencias</a>
              <a href="#pricing-planes" className="hover:text-white transition-colors py-0.5">Planes</a>
              <a href="#contacto-directo" className="hover:text-white transition-colors py-0.5">Contacto</a>
              <a
                href={SYSTEM_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 font-bold transition-colors py-0.5 flex items-center gap-1.5 pt-1.5 border-t border-slate-800"
              >
                <i className="fa-solid fa-arrow-right-to-bracket text-xs"></i>
                <span>Ingresar al Sistema</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">CONTÁCTANOS</h4>
            
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Necesito%20ayuda%20para%20elegir%20el%20sistema%20de%20ventas.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2.5 rounded-xl text-xs font-bold transition-all hover:bg-emerald-500/20 max-w-xs"
              >
                <div className="flex h-4 w-4 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </div>
                <span>Escríbenos por WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>📍 Talara - Piura - Perú / Atención a nivel nacional</span>
              </div>
              <div className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                Soporte comercial disponible de Lunes a Sábado de 8:00 am a 8:00 pm.
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-bold tracking-wide uppercase">
          <div>
            <span>© 2026 SOFTOPIA PERÚ. TODOS LOS DERECHOS RESERVADOS.</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 transition-all">SOPORTE TRIBUTARIO</span>
            <span className="hover:text-slate-400 transition-all">CUMPLIMIENTO SUNAT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
