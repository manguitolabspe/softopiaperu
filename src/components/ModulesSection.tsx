import React from 'react';
import { MODULES_DATA, WHATSAPP_NUMBER } from '../data/content';
import { ModuleDetail } from '../types';

interface ModulesSectionProps {
  onSelectModule: (module: ModuleDetail) => void;
  setSpeechText: (text: string) => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onSelectModule, setSpeechText }) => {
  const modulesList = Object.values(MODULES_DATA);

  const handleCardClick = (mod: ModuleDetail) => {
    onSelectModule(mod);
    setSpeechText(mod.speech);
  };

  return (
    <section id="sistema-modulos" className="py-20 bg-slate-55 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-3.5">
          <span className="bg-softopia-blue/10 text-softopia-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">
            Modular y Escalable
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Módulos del <span className="text-softopia-blue">Sistema Softopia</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Módulos completos e integrados que interactúan con una base de datos centralizada. Configura solo los módulos que usas y crece a tu propio ritmo.
          </p>
        </div>

        {/* 6 Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {modulesList.map((mod) => (
            <button
              key={mod.id}
              type="button"
              onClick={() => handleCardClick(mod)}
              className="group bg-white border border-slate-200 hover:border-softopia-blue rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-xl hover:shadow-softopia-blue/10 hover:-translate-y-1.5 active:scale-95 cursor-pointer"
            >
              <div className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl ${mod.iconBg} group-hover:bg-softopia-blue group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm text-2xl sm:text-3xl mb-3 group-hover:rotate-3`}>
                <i className={`fa-solid ${mod.icon}`}></i>
              </div>

              <div className="w-full">
                <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-1.5 border ${mod.badgeClass}`}>
                  {mod.badge}
                </span>
                <h3 className="text-slate-900 font-extrabold text-xs sm:text-sm group-hover:text-softopia-blue transition-colors leading-tight">
                  {mod.title.split(' (')[0]}
                </h3>
                <p className="text-[10px] text-slate-400 font-medium mt-1">
                  {mod.title.includes('(') ? `(${mod.title.split('(')[1]}` : ''}
                </p>
              </div>

              <span className="mt-3 pt-2 border-t border-slate-100 w-full text-[9.5px] font-bold text-softopia-blue flex items-center justify-center gap-1 group-hover:gap-1.5 transition-all">
                <span>Ver detalle</span>
                <i className="fa-solid fa-arrow-right text-[8px]"></i>
              </span>
            </button>
          ))}
        </div>

        {/* Guided Demo Call-to-Action Card */}
        <div className="mt-16 bg-gradient-to-r from-softopia-blue to-softopia-blue-dark text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="z-10 text-center md:text-left space-y-2">
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">
              ¿Quieres ver cómo funciona para tu giro de negocio?
            </h3>
            <p className="text-white/90 text-xs md:text-sm max-w-xl font-medium leading-relaxed">
              Damos asesoría y configuraciones iniciales gratuitas de 15 minutos en las que cargamos tu catálogo inicial de productos por videollamada.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20solicitar%20una%20demostración%20guiada%20gratuita.`}
            target="_blank"
            rel="noreferrer"
            className="z-10 bg-[#f04e23] hover:bg-[#ee3a13] text-white text-xs font-black px-6 py-4 rounded-full shadow-lg border border-orange-500/30 shrink-0 select-none block text-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Solicitar Demo Guiada <i className="fa-solid fa-laptop ml-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
