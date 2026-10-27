import React, { useEffect } from 'react';
import { ModuleDetail } from '../types';
import { SYSTEM_LOGIN_URL, WHATSAPP_NUMBER } from '../data/content';

interface ModuleDetailModalProps {
  module: ModuleDetail | null;
  onClose: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({ module, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (module) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [module, onClose]);

  if (!module) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-pop-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color Ribbon */}
        <div className="h-2 w-full" style={{ backgroundColor: module.color }}></div>

        <div className="p-6 md:p-7 overflow-y-auto space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div
                className={`h-13 w-13 rounded-2xl flex items-center justify-center text-2xl shadow-xs shrink-0 ${module.iconBg}`}
              >
                <i className={`fa-solid ${module.icon}`}></i>
              </div>
              <div>
                <span
                  className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1 border ${module.badgeClass}`}
                >
                  {module.badge}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-tight">
                  {module.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title="Cerrar ventana"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed bg-slate-50 border border-slate-150 rounded-2xl p-3.5">
            {module.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
              <span>Funcionalidades Clave Incluidas</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              {module.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    <i className="fa-solid fa-circle-check text-xs"></i>
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices */}
          <div className="pt-2 border-t border-slate-100">
            <h5 className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider mb-2">
              Compatibilidad y Dispositivos
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {module.devices.map((dev, i) => {
                let chipIcon = 'fa-solid fa-check';
                if (dev.toLowerCase().includes('laptop') || dev.toLowerCase().includes('pc')) chipIcon = 'fa-solid fa-laptop';
                else if (dev.toLowerCase().includes('tablet') || dev.toLowerCase().includes('celular')) chipIcon = 'fa-solid fa-mobile-screen-button';
                else if (dev.toLowerCase().includes('ticketera')) chipIcon = 'fa-solid fa-print';
                else if (dev.toLowerCase().includes('sunat') || dev.toLowerCase().includes('nube')) chipIcon = 'fa-solid fa-cloud';
                else if (dev.toLowerCase().includes('excel')) chipIcon = 'fa-solid fa-file-excel';

                return (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-slate-200/80"
                  >
                    <i className={`${chipIcon} text-[9px] text-slate-500`}></i>
                    <span>{dev}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(module.waText)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>Solicitar Demo por WhatsApp</span>
            </a>

            <a
              href={SYSTEM_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-98 cursor-pointer whitespace-nowrap"
            >
              <i className="fa-solid fa-arrow-right-to-bracket text-amber-300 text-xs"></i>
              <span>Ir al Sistema</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
