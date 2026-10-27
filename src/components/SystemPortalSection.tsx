import React from 'react';
import { WHATSAPP_NUMBER, SYSTEM_LOGIN_URL } from '../data/content';

export const SystemPortalSection: React.FC = () => {
  return (
    <section id="portal-sistema" className="py-20 bg-gradient-to-br from-slate-950 via-[#07183d] to-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background Ambient Glow & Lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-softopia-blue/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-softopia-orange/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Dual CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-transparent border border-amber-400/30 px-4 py-2 rounded-full shadow-lg shadow-amber-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-black tracking-widest text-amber-300 uppercase">
                PORTAL CLOUD 100% EN VIVO • SERVIDORES 24/7
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                ACCEDE A TU SISTEMA DE <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-softopia-orange">
                  FACTURACIÓN ELECTRÓNICA
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ¿Ya eres cliente de <strong className="text-white font-bold">Softopia Perú</strong> o deseas explorar la plataforma en acción? Ingresa directamente con tus credenciales a nuestro entorno en la nube oficial. Emite boletas, facturas, consulta reportes y administra tu stock sin instalar nada.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-lock text-xs"></i>
                </div>
                <div>
                  <span className="font-bold text-white block">Acceso Seguro SSL</span>
                  <span className="text-[10px] text-slate-400">Cifrado de nivel bancario</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="h-7 w-7 rounded-lg bg-softopia-blue/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-cloud text-xs"></i>
                </div>
                <div>
                  <span className="font-bold text-white block">100% Web y Móvil</span>
                  <span className="text-[10px] text-slate-400">Desde PC, tablet o celular</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="h-7 w-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-bolt text-xs"></i>
                </div>
                <div>
                  <span className="font-bold text-white block">Homologado SUNAT</span>
                  <span className="text-[10px] text-slate-400">Emisión en segundos</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="h-7 w-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-headset text-xs"></i>
                </div>
                <div>
                  <span className="font-bold text-white block">Soporte Local Talara</span>
                  <span className="text-[10px] text-slate-400">Asistencia técnica directa</span>
                </div>
              </div>
            </div>

            {/* Prominent Dual Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={SYSTEM_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-softopia-orange to-[#ee3a13] hover:from-[#ee3a13] hover:to-[#c82703] text-white font-black text-sm md:text-base px-8 py-4 rounded-2xl shadow-xl shadow-orange-600/30 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-98 group cursor-pointer border border-orange-400/40 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <i className="fa-solid fa-arrow-right-to-bracket text-base text-amber-200 group-hover:translate-x-1 transition-transform relative z-10"></i>
                <span className="relative z-10">Ingresar al Sistema de Facturación</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs text-white/80 relative z-10"></i>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20solicitar%20un%20usuario%20y%20contraseña%20demo%20para%20probar%20el%20sistema%20de%20facturación.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-emerald-500 font-extrabold text-xs md:text-sm px-6 py-4 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-md group"
              >
                <i className="fa-brands fa-whatsapp text-emerald-400 text-lg group-hover:scale-110 transition-transform"></i>
                <span>¿No tienes cuenta? Pedir Demo Gratis</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 font-medium flex items-center justify-center lg:justify-start gap-2 pt-1">
              <i className="fa-solid fa-shield-halved text-emerald-400"></i>
              <span>Tus datos de facturación e inventario están protegidos bajo protocolos de alta seguridad.</span>
            </p>
          </div>

          {/* Right Column: Simulated Browser Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 shadow-2xl relative group hover:border-softopia-blue/50 transition-all duration-300">
              <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 px-3 py-1 font-black rounded-lg text-[9px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                <i className="fa-solid fa-bolt"></i> PORTAL OFICIAL
              </div>

              {/* Simulated Browser Frame Bar */}
              <div className="border-b border-slate-800 pb-3.5 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>

                {/* Clean URL pill without raw domain exposure */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-1 flex items-center gap-2 text-[10px] select-none">
                  <i className="fa-solid fa-lock text-emerald-400 text-[9px]"></i>
                  <span className="text-emerald-400 font-bold">Acceso Seguro SSL</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300 font-medium">Portal Facturación SUNAT</span>
                </div>

                <div className="text-slate-500 text-xs">
                  <i className="fa-solid fa-signal text-emerald-400 text-[10px]"></i>
                </div>
              </div>

              {/* Card Content Form Preview */}
              <div className="space-y-4">
                <div className="text-center py-2 border-b border-slate-800/80 pb-4">
                  <div className="inline-flex items-center gap-2 justify-center">
                    <img
                      src="/softopia_logo.png"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = '/favicon.png';
                      }}
                      alt="Softopia"
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-xl font-black tracking-tight text-white">Softopia</span>
                    <span className="text-sm font-black text-softopia-orange">Perú</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-medium mt-1">Sistema Integrado de Facturación y Ventas</p>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Correo Electrónico o Usuario
                    </label>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 flex items-center justify-between">
                      <span className="font-mono text-slate-500">tu_empresa@ejemplo.com</span>
                      <i className="fa-solid fa-user text-slate-600 text-xs"></i>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Contraseña de Acceso
                    </label>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 flex items-center justify-between">
                      <span className="tracking-widest text-slate-500">••••••••••••</span>
                      <i className="fa-solid fa-eye-slash text-slate-600 text-xs"></i>
                    </div>
                  </div>

                  <a
                    href={SYSTEM_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full bg-softopia-blue hover:bg-softopia-blue-dark text-white font-black text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-softopia-blue/25 hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <span>Iniciar Sesión en el Sistema</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </a>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-[10.5px]">
                  <span className="text-slate-400">¿Olvidaste tu acceso o requieres soporte?</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Necesito%20soporte%20técnico%20con%20mi%20usuario%20del%20sistema.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Soporte</span>
                    <i className="fa-solid fa-chevron-right text-[9px]"></i>
                  </a>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Servidor Operativo</span>
                </span>
                <span className="font-mono text-slate-500">v4.8 • SUNAT PSE/OSE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
