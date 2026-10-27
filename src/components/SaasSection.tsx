import React, { useState } from 'react';
import { SAAS_DATA, WHATSAPP_NUMBER } from '../data/content';

export const SaasSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('carta');
  const activeSaas = SAAS_DATA.find((item) => item.id === activeTabId) || SAAS_DATA[0];

  return (
    <section id="soluciones-saas-medida" className="py-24 bg-white text-slate-800 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-softopia-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-softopia-orange/5 rounded-full blur-3xl -z-10 animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="bg-softopia-blue/10 text-softopia-blue text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
            <i className="fa-solid fa-code-branch text-softopia-orange"></i> INFRAESTRUCTURA & DESARROLLO SOFTWARE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Sistemas <span className="text-softopia-orange">A Medida</span> y Soluciones <span className="text-softopia-blue font-bold">SaaS Listas</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed">
            Creamos el software perfecto para tu modelo de negocio. Diseñamos soluciones personalizadas llave en mano o te equipamos al instante con nuestras plataformas inteligentes ya probadas.
          </p>
        </div>

        {/* Main 12-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COL 1: DESARROLLO A MEDIDA (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-softopia-blue hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
            <div className="absolute -right-16 -top-16 w-36 h-36 bg-softopia-blue/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-softopia-orange/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                <div className="h-12 w-12 rounded-2xl bg-softopia-blue/10 text-softopia-blue flex items-center justify-center border border-softopia-blue/20 shadow-xs">
                  <i className="fa-solid fa-laptop-code text-2xl"></i>
                </div>
                <div>
                  <span className="text-[9.5px] text-softopia-orange font-black uppercase tracking-wider block leading-none mb-1">PROYECTOS EXCLUSIVOS</span>
                  <h3 className="text-xl font-black text-slate-950 leading-tight">Desarrollo Web & Apps Móviles</h3>
                </div>
              </div>

              <p className="text-slate-600 text-xs md:text-[13px] font-semibold leading-relaxed">
                ¿Tienes un modelo de negocio único? Diseñamos y desarrollamos páginas web avanzadas, plataformas web de administración interna y aplicaciones móviles nativas <span className="text-softopia-blue font-bold">(iOS y Android)</span> adaptadas 100% a tus reglas de juego.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100"><i className="fa-solid fa-circle-check text-[10px]"></i></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">Arquitectura Escalable y Segura</h4>
                    <p className="text-[10.5px] text-slate-500 leading-normal font-medium mt-0.5">Sistemas veloces que soportan alto tráfico sin caídas de servidor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100"><i className="fa-solid fa-circle-check text-[10px]"></i></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">Aplicaciones Móviles Nativas</h4>
                    <p className="text-[10.5px] text-slate-500 leading-normal font-medium mt-0.5">Publicadas en Google Play y App Store con notificaciones push.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100"><i className="fa-solid fa-circle-check text-[10px]"></i></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">Paneles Administrativos e Informes</h4>
                    <p className="text-[10.5px] text-slate-500 leading-normal font-medium mt-0.5">Monitorea ventas, usuarios, inventarios y finanzas en tiempo real.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100"><i className="fa-solid fa-circle-check text-[10px]"></i></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">Soporte y Garantía de Ingeniería</h4>
                    <p className="text-[10.5px] text-slate-500 leading-normal font-medium mt-0.5">Garantía por código y mantenimiento técnico continuo certificado.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <span className="text-[8.5px] bg-[#f04e23]/25 text-orange-400 px-2 py-0.5 rounded font-black block w-fit mb-1 uppercase tracking-wide">Talara & Nacional</span>
                  <p className="text-[10px] text-slate-300 font-bold leading-tight">Diseño previo y presupuesto gratuito.</p>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20solicitar%20una%20reunión%20técnica%20de%20diseño%20para%20un%20proyecto%20de%20desarrollo%20a%20medida.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-softopia-blue hover:bg-softopia-blue-dark text-white text-[11px] font-black px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-98 cursor-pointer shrink-0"
                >
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>Agendar Reunión</span>
                </a>
              </div>
            </div>
          </div>

          {/* COL 2: NUESTRAS PLATAFORMAS SAAS (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider block mb-3 pl-1 font-sans">
                Nuestros Sistemas SaaS Listos
              </span>
              
              {/* Tab Switcher */}
              <div className="flex overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 gap-2 select-none">
                {SAAS_DATA.map((saas) => {
                  const isActive = saas.id === activeTabId;
                  return (
                    <button
                      key={saas.id}
                      type="button"
                      onClick={() => setActiveTabId(saas.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-black transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'border-orange-500 bg-orange-500/10 text-slate-900 shadow-sm ring-1 ring-orange-400/40'
                          : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <i className={saas.icon}></i>
                      <span>{saas.tabTitle}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active SaaS Detail Card */}
            <div className="relative bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-100 overflow-hidden min-h-[380px] flex flex-col justify-between animate-pop-in">
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-softopia-orange/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-50 text-softopia-orange rounded-xl flex items-center justify-center border border-orange-100">
                      <i className={`fa-solid ${activeSaas.features[0]?.icon || 'fa-cubes'} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-950">{activeSaas.title}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{activeSaas.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[9.5px] bg-amber-50 text-amber-800 border border-amber-200/50 px-2.5 py-1 rounded-md font-bold w-fit">
                    {activeSaas.tag}
                  </span>
                </div>

                <p className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-semibold">
                  {activeSaas.description}
                </p>

                {/* Features List */}
                <div>
                  <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider block mb-3 font-sans">
                    Estrategias de Fidelización & Funciones Administrativas Incluidas
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeSaas.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <i className={`fa-solid ${feat.icon} text-softopia-orange text-xs mt-1 shrink-0`}></i>
                        <div>
                          <h5 className="text-[12px] font-black text-slate-900 leading-none">{feat.title}</h5>
                          <p className="text-[10.5px] text-slate-500 mt-1 leading-normal font-medium">{feat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Demo Details & Action Buttons */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div className="text-left">
                  <p className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider">{activeSaas.footerNoteTitle}</p>
                  <p className="text-xs font-black text-slate-800 leading-none select-none mt-1">{activeSaas.footerNoteSub}</p>
                </div>
                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href={activeSaas.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none text-center bg-white border border-slate-200 hover:border-slate-400 hover:text-slate-900 text-slate-750 text-[11px] font-black px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    <i className="fa-solid fa-laptop text-xs mr-1"></i> Ver Demo Activa
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeSaas.waText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none text-center bg-[#f04e23] hover:bg-[#ee3a13] text-white text-[11px] font-black px-4 py-2.5 rounded-xl transition-all shadow-md hover:scale-[1.01] cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-xs mr-1"></i> Solicitar Info
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
