import React from 'react';
import { WHATSAPP_NUMBER, SYSTEM_LOGIN_URL } from '../data/content';

export const MobileLeadBar: React.FC = () => {
  return (
    <div
      id="mobile-sticky-leadbar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 shadow-2xl flex items-center justify-between gap-2"
    >
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20solicitar%20una%20demostración%20en%20vivo%20gratuita%20del%20sistema.`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
      >
        <i className="fa-brands fa-whatsapp text-sm"></i>
        <span>Solicitar Demo WhatsApp</span>
      </a>

      <a
        href={SYSTEM_LOGIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm border border-slate-700 whitespace-nowrap"
        title="Acceso seguro al sistema de facturación"
      >
        <i className="fa-solid fa-arrow-right-to-bracket text-amber-300 text-xs"></i>
        <span>Ingresar</span>
      </a>
    </div>
  );
};
