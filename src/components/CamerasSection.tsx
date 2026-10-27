import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/content';

export const CamerasSection: React.FC = () => {
  const [camerasCount, setCamerasCount] = useState<2 | 4 | 8>(2);

  let price = 450;
  let savings = 'Promo Activa Talara';
  let label = 'Kit de 2 Cámaras de Seguridad';

  if (camerasCount === 2) {
    price = 450;
    savings = 'Instalación básica incluida';
    label = 'Kit de 2 Cámaras de Seguridad';
  } else if (camerasCount === 4) {
    price = 790;
    savings = 'Súper oferta comercial';
    label = 'Kit de 4 Cámaras de Seguridad';
  } else {
    price = 1450;
    savings = 'Protección completa industrial';
    label = 'Kit de 8 Cámaras de Seguridad';
  }

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20solicitar%20la%20instalación%20profesional%20del%20${encodeURIComponent(label)}%20al%20precio%20de%20S/%20${price}%20en%20mi%20local.`;

  return (
    <section id="camaras-seguridad-corp" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-softopia-orange/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-softopia-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
          
          {/* Left Column: Corporate Information */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md">
                <i className="fa-solid fa-shield-halved"></i> SEGURIDAD DE NIVEL EMPRESARIAL
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Sistemas de Videovigilancia y <span className="text-softopia-orange">Seguridad Corporativa</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-semibold">
                Protege tus activos, oficinas, locales comerciales y almacenes con los mejores sistemas homologados de videovigilancia CCTV en Talara y todo el Perú. Ofrecemos cotización formal, instalación certificada bajo estándares técnicos y soporte técnico de primer nivel.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-softopia-orange shrink-0">
                  <i className="fa-solid fa-mobile-screen-button text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Monitoreo en Vivo por Celular</h4>
                  <p className="text-[11.5px] text-slate-400 mt-1 leading-normal font-medium">Configuración de transmisión directa para visualizar en simultáneo desde cualquier lugar con alertas en tiempo real.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <i className="fa-solid fa-toolbox text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Instalación Estética y Resistente</h4>
                  <p className="text-[11.5px] text-slate-400 mt-1 leading-normal font-medium">Canalizado estético con tuberías de protección exterior (IP66), asegurando cables blindados contra la intemperie.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <i className="fa-solid fa-moon text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Visión Nocturna Inteligente Color</h4>
                  <p className="text-[11.5px] text-slate-400 mt-1 leading-normal font-medium">Lentes inteligentes de alta fidelidad con infrarrojos de última generación y captación mejorada de la oscuridad.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <i className="fa-solid fa-file-pdf text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Cotizaciones y Facturación Formal</h4>
                  <p className="text-[11.5px] text-slate-400 mt-1 leading-normal font-medium">Emitimos cotizaciones detalladas en formato PDF y comprobantes autorizados (Factura o Boleta) para tu comercio o empresa.</p>
                </div>
              </div>
            </div>

            {/* Brands Tags */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-[9.5px] text-slate-500 font-extrabold uppercase tracking-wider block mb-3 font-sans">Marcas Homologadas y Garantizadas</span>
              <div className="flex flex-wrap gap-2">
                <span className="border border-slate-800 bg-slate-950 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400">Hikvision</span>
                <span className="border border-slate-800 bg-slate-950 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400">EZVIZ Security</span>
                <span className="border border-slate-800 bg-slate-950 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400">Imou Smart</span>
                <span className="border border-slate-800 bg-slate-950 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400">Dahua</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimator */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              
              <div className="mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-orange-500/20 text-softopia-orange flex items-center justify-center">
                    <i className="fa-solid fa-video text-xl text-center"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-white">Configura tu Sistema</h3>
                    <p className="text-xs text-slate-400 font-medium">Presupuestos aproximados al instante</p>
                  </div>
                </div>
              </div>

              {/* Camera Kit Selector */}
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block mb-2.5">
                    1. Seleccionar número de cámaras
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 4, 8].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setCamerasCount(count as 2 | 4 | 8)}
                        className={`py-2.5 px-1 text-[11.5px] font-black rounded-lg border transition-all cursor-pointer ${
                          camerasCount === count
                            ? 'border-orange-500 bg-orange-500/10 text-white'
                            : 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                        }`}
                      >
                        {count} Cámaras
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-2 text-slate-300">
                  <p className="text-xs font-bold text-white flex items-center gap-1.5 font-sans">
                    <i className="fa-solid fa-screwdriver-wrench text-softopia-orange animate-pulse"></i> ¿Qué incluye el kit instalado?
                  </p>
                  <ul className="text-[10.5px] space-y-1.5 font-medium text-slate-300">
                    <li className="flex items-start gap-1.5"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px] mt-0.5"></i> Grabador Digital (DVR) con Disco Rígido Especializado</li>
                    <li className="flex items-start gap-1.5"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px] mt-0.5"></i> Cámaras de Seguridad HD en Alta Definición</li>
                    <li className="flex items-start gap-1.5"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px] mt-0.5"></i> Fuentes de alimentación, conectores y cables blindados</li>
                    <li className="flex items-start gap-1.5"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px] mt-0.5"></i> Pruebas de Red y enlace en vivo al teléfono móvil</li>
                  </ul>
                </div>

                <p className="text-[10px] text-slate-500 font-bold leading-normal text-center bg-slate-900 border border-slate-800 p-2.5 rounded-lg font-sans">
                  💡 ¿Necesitas un circuito más grande (12, 16 o 32 cámaras con fibra)? Solicítalo directamente y nuestro ingeniero realizará el diseño.
                </p>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-[9px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-md font-black block w-fit mb-1 uppercase tracking-wide">
                        {savings}
                      </span>
                      <span className="text-slate-400 text-[11px] font-semibold">Inversión estimada:</span>
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-slate-500 text-[11px] font-extrabold font-mono text-center">S/</span>
                      <span className="text-2xl font-black font-mono tracking-tight text-white">{price}</span>
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#f04e23] hover:bg-[#ee3a13] text-white text-[11px] font-black py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span>Cotizar Kit por WhatsApp</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
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
