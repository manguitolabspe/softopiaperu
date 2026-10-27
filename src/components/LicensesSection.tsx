import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/content';

export const LicensesSection: React.FC = () => {
  // Microsoft 365 state
  const [m365Plan, setM365Plan] = useState<'personal' | 'familiar'>('personal');
  const [m365Time, setM365Time] = useState<1 | 2 | 3>(1);

  // ESET state
  const [esetDevices, setEsetDevices] = useState<1 | 3 | 5>(1);
  const [esetTime, setEsetTime] = useState<1 | 2 | 3>(1);

  // Autodesk state
  const [autodeskTime, setAutodeskTime] = useState<1 | 2 | 3>(1);

  // Canva state
  const [canvaAccounts, setCanvaAccounts] = useState<1 | 5>(1);

  // M365 Calculations
  let m365Price = 150;
  let m365Savings = 'Pago de Licencia Anual';
  let m365Desc = 'Personal por 1 Año';
  if (m365Plan === 'personal') {
    if (m365Time === 1) {
      m365Price = 150;
      m365Savings = 'Pago de Licencia Anual';
      m365Desc = 'Personal por 1 Año';
    } else if (m365Time === 2) {
      m365Price = 280;
      m365Savings = 'Ahorras S/ 20 en 2 Años';
      m365Desc = 'Personal por 2 Años';
    } else {
      m365Price = 390;
      m365Savings = 'Ahorras S/ 60 en 3 Años';
      m365Desc = 'Personal por 3 Años';
    }
  } else {
    if (m365Time === 1) {
      m365Price = 250;
      m365Savings = 'Licencia de hasta 6 Usuarios';
      m365Desc = 'Familiar por 1 Año (6 Cuentas)';
    } else if (m365Time === 2) {
      m365Price = 460;
      m365Savings = 'Ahorras S/ 40 en 2 Años';
      m365Desc = 'Familiar por 2 Años (6 Cuentas)';
    } else {
      m365Price = 650;
      m365Savings = 'Ahorras S/ 100 en 3 Años';
      m365Desc = 'Familiar por 3 Años (6 Cuentas)';
    }
  }
  const m365WaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20adquirir%20la%20licencia%20original%20de%20Microsoft%20365%20${encodeURIComponent(m365Desc)}%20al%20precio%20de%20S/%20${m365Price}.`;

  // ESET Calculations
  let esetPrice = 49;
  let esetSavings = 'Licencia por 1 Año';
  if (esetDevices === 1) {
    if (esetTime === 1) { esetPrice = 49; esetSavings = 'Licencia por 1 Año'; }
    else if (esetTime === 2) { esetPrice = 89; esetSavings = 'Ahorras S/ 9 en 2 Años'; }
    else { esetPrice = 119; esetSavings = 'Ahorras S/ 28 en 3 Años'; }
  } else if (esetDevices === 3) {
    if (esetTime === 1) { esetPrice = 99; esetSavings = 'Promo Especial 3 PCs'; }
    else if (esetTime === 2) { esetPrice = 179; esetSavings = 'Ahorras S/ 19 en 2 Años'; }
    else { esetPrice = 239; esetSavings = 'Ahorras S/ 58 en 3 Años'; }
  } else {
    if (esetTime === 1) { esetPrice = 149; esetSavings = 'Mega kit de 5 PCs'; }
    else if (esetTime === 2) { esetPrice = 269; esetSavings = 'Ahorras S/ 29 en 2 Años'; }
    else { esetPrice = 359; esetSavings = 'Ahorras S/ 88 en 3 Años'; }
  }
  const esetWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Me%20interesa%20la%20licencia%20original%20de%20ESET%20NOD32%20Antivirus%20para%20${esetDevices}%20${esetDevices === 1 ? 'PC' : 'PCs'}%20por%20${esetTime}%20${esetTime === 1 ? 'Año' : 'Años'}%20al%20precio%20de%20S/%20${esetPrice}.`;

  // Autodesk Calculations
  let autodeskPrice = 450;
  let autodeskSavings = 'Suite All Apps 1 Año';
  if (autodeskTime === 1) {
    autodeskPrice = 450;
    autodeskSavings = 'Suite All Apps 1 Año';
  } else if (autodeskTime === 2) {
    autodeskPrice = 850;
    autodeskSavings = 'Ahorras S/ 50 en 2 Años';
  } else {
    autodeskPrice = 1190;
    autodeskSavings = 'Ahorras S/ 160 en 3 Años';
  }
  const autodeskWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Deseo%20crear%20mi%20licencia%20de%20Autodesk%20Suite%20Completa%20por%20${autodeskTime}%20${autodeskTime === 1 ? 'Año' : 'Años'}%20al%20precio%20de%20S/%20${autodeskPrice}%20con%20activación%20garantizada.`;

  // Canva Calculations
  const canvaPrice = canvaAccounts === 1 ? 39 : 99;
  const canvaSavings = canvaAccounts === 1 ? 'Acceso Garantizado' : 'Super Ahorro Pack';
  const canvaDesc = canvaAccounts === 1 ? '1 Cuenta Individual' : 'Muti-Pack de 5 Cuentas';
  const canvaWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20comprar%20Canva%20Pro%20Edu%20para%20${encodeURIComponent(canvaDesc)}%20por%20S/%20${canvaPrice}%20con%20activación%20garantizada.`;

  return (
    <section id="licencias-software" className="py-20 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-softopia-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-amber-400/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-200/80 text-slate-800 text-[10.5px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
            <i className="fa-solid fa-layer-group text-softopia-blue"></i> SOLUCIONES Y EQUIPAMIENTO COMPLEMENTARIO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Licencias de <span className="text-softopia-blue">Software Original</span>, Cámaras y Seguridad <span className="text-softopia-orange">⚡</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Además de nuestro sistema principal de ventas y facturación, brindamos equipamiento tecnológico integral para tu empresa: licencias 100% originales garantizadas e instalación de videovigilancia con soporte técnico en Talara y todo el Perú.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1: MICROSOFT 365 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-t-8 border-sky-400 hover:scale-[1.01]">
            <div className="absolute top-2.5 right-3 bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-lg text-[8.5px] font-black tracking-wide uppercase">
              Microsoft Partner
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                  <i className="fa-brands fa-microsoft text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-slate-950 font-black text-base tracking-tight">Microsoft 365</h3>
                  <p className="text-slate-400 text-[9.5px] font-bold uppercase tracking-wider leading-none mt-0.5">Licencia Activada a tu Correo</p>
                </div>
              </div>

              <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                Colabora, crea y almacena de forma segura. Accede a Word, Excel, PowerPoint, Outlook, OneDrive y OneNote originales con almacenamiento en la nube garantizado.
              </p>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-5 flex items-center justify-between">
                <div className="flex gap-2.5 text-xs text-slate-500 font-bold overflow-x-auto select-none">
                  <span className="flex items-center gap-0.5" title="Word"><i className="fa-solid fa-file-word text-blue-600"></i><span className="text-[9px]">W</span></span>
                  <span className="flex items-center gap-0.5" title="Excel"><i className="fa-solid fa-file-excel text-emerald-600"></i><span className="text-[9px]">X</span></span>
                  <span className="flex items-center gap-0.5" title="PowerPoint"><i className="fa-solid fa-file-powerpoint text-orange-600"></i><span className="text-[9px]">P</span></span>
                  <span className="flex items-center gap-0.5" title="Outlook"><i className="fa-solid fa-envelope text-blue-500"></i><span className="text-[9px]">O</span></span>
                  <span className="flex items-center gap-0.5" title="OneDrive"><i className="fa-solid fa-cloud text-sky-400"></i><span className="text-[9px]">1TB</span></span>
                </div>
                <span className="text-[8.5px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-sm font-black uppercase">Original</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1.5">Elegir Versión</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setM365Plan('personal')}
                      className={`py-2 px-1 text-[10px] font-black rounded-lg border transition-all cursor-pointer ${
                        m365Plan === 'personal'
                          ? 'border-sky-500 bg-sky-50 text-sky-800'
                          : 'border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      Personal (1 Usuario)
                    </button>
                    <button
                      type="button"
                      onClick={() => setM365Plan('familiar')}
                      className={`py-2 px-1 text-[10px] font-black rounded-lg border transition-all cursor-pointer ${
                        m365Plan === 'familiar'
                          ? 'border-sky-500 bg-sky-50 text-sky-800'
                          : 'border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      Familia (6 Usuarios)
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1.5">Elige tu Duración</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[1, 2, 3].map((yrs) => (
                      <button
                        key={yrs}
                        type="button"
                        onClick={() => setM365Time(yrs as 1 | 2 | 3)}
                        className={`py-1.5 text-[9.5px] font-black rounded-lg border transition-all cursor-pointer ${
                          m365Time === yrs
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 text-slate-650 hover:bg-slate-100/70'
                        }`}
                      >
                        {yrs} {yrs === 1 ? 'Año' : 'Años'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[8.5px] bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded-md font-black block w-fit mb-0.5 uppercase tracking-wide">
                    {m365Savings}
                  </span>
                  <span className="text-slate-400 text-[10px] font-semibold font-sans">Total estimado</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-slate-400 text-[11px] font-extrabold">S/</span>
                  <span className="text-2xl font-black font-mono tracking-tight text-slate-950">{m365Price}</span>
                </div>
              </div>

              <a
                href={m365WaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#f04e23] hover:bg-[#ee3a13] text-white text-[11.5px] font-black py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Adquirir Licencia Original</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* CARD 2: ESET NOD32 ANTIVIRUS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-t-8 border-teal-500 hover:scale-[1.01]">
            <div className="absolute top-2.5 right-3 bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-lg text-[8.5px] font-black tracking-wide uppercase">
              100% Ligero
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <i className="fa-solid fa-shield-virus text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-slate-950 font-black text-base tracking-tight">ESET NOD32</h3>
                  <p className="text-slate-400 text-[9.5px] font-bold uppercase tracking-wider leading-none mt-0.5">Antivirus e Internet Security</p>
                </div>
              </div>

              <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                Protección inteligente para tus ordenadores sin ralentizaciones. Blindaje de operaciones bancarias online, anti-phishing, protección ante ransomware y virus de USB.
              </p>

              <div className="grid grid-cols-2 gap-1.5 mb-5 pb-1">
                <span className="text-[9.5px] text-slate-600 font-bold flex items-center gap-1"><i className="fa-solid fa-circle-check text-teal-500 text-[8px]"></i> Protección USB</span>
                <span className="text-[9.5px] text-slate-600 font-bold flex items-center gap-1"><i className="fa-solid fa-circle-check text-teal-500 text-[8px]"></i> Antiphishing</span>
                <span className="text-[9.5px] text-slate-600 font-bold flex items-center gap-1"><i className="fa-solid fa-circle-check text-teal-500 text-[8px]"></i> Banca Segura</span>
                <span className="text-[9.5px] text-slate-600 font-bold flex items-center gap-1"><i className="fa-solid fa-circle-check text-teal-500 text-[8px]"></i> Motor Silencioso</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1.5">Cantidad de PCs</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 3, 5].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setEsetDevices(count as 1 | 3 | 5)}
                        className={`py-2 text-[10px] font-black rounded-lg border transition-all cursor-pointer ${
                          esetDevices === count
                            ? 'border-teal-500 bg-teal-50 text-teal-850'
                            : 'border-slate-200 text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {count} {count === 1 ? 'PC' : 'PCs'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1.5">Elige tu Duración</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[1, 2, 3].map((yrs) => (
                      <button
                        key={yrs}
                        type="button"
                        onClick={() => setEsetTime(yrs as 1 | 2 | 3)}
                        className={`py-1.5 text-[9.5px] font-black rounded-lg border transition-all cursor-pointer ${
                          esetTime === yrs
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 text-slate-650 hover:bg-slate-100/70'
                        }`}
                      >
                        {yrs} {yrs === 1 ? 'Año' : 'Años'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[8.5px] bg-teal-500/10 text-teal-600 px-1.5 py-0.5 rounded-md font-black block w-fit mb-0.5 uppercase tracking-wide font-sans">
                    {esetSavings}
                  </span>
                  <span className="text-slate-400 text-[10px] font-semibold">Total estimado</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-slate-400 text-[11px] font-extrabold">S/</span>
                  <span className="text-2xl font-black font-mono tracking-tight text-slate-950">{esetPrice}</span>
                </div>
              </div>

              <a
                href={esetWaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#f04e23] hover:bg-[#ee3a13] text-white text-[11.5px] font-black py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Comprar ESET Licencia</span>
                <i className="fa-solid fa-chevron-right text-xs ml-1"></i>
              </a>
            </div>
          </div>

          {/* CARD 3: AUTODESK COMPLETE SUITE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-t-8 border-indigo-650 hover:scale-[1.01]">
            <div className="absolute top-2.5 right-3 bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-lg text-[8.5px] font-black tracking-wide uppercase">
              Diseño Pro
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700 shrink-0">
                  <i className="fa-solid fa-compass-drafting text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-slate-950 font-black text-base tracking-tight">Autodesk Suite</h3>
                  <p className="text-slate-400 text-[9.5px] font-bold uppercase tracking-wider leading-none mt-0.5">AutoCAD, Revit, Inventor, 3ds Max</p>
                </div>
              </div>

              <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                Obtén la suite completa de programas Autodesk para arquitectura, ingeniería estructural y modelado industrial. Con descarga original segura y soporte.
              </p>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-5 select-none">
                <span className="text-[8.5px] text-slate-400 uppercase font-black tracking-wider block mb-1.5">Herramientas en la Suite</span>
                <div className="flex flex-wrap gap-1 text-[8.5px] font-extrabold text-white">
                  <span className="bg-blue-600 px-1.5 py-0.5 rounded-sm" title="AutoCAD">CAD</span>
                  <span className="bg-cyan-600 px-1.5 py-0.5 rounded-sm" title="Revit">RVT</span>
                  <span className="bg-amber-600 px-1.5 py-0.5 rounded-sm" title="Inventor">INV</span>
                  <span className="bg-rose-500 px-1.5 py-0.5 rounded-sm" title="3ds Max">MAX</span>
                  <span className="bg-sky-500 px-1.5 py-0.5 rounded-sm" title="Maya">MYA</span>
                  <span className="bg-slate-800 px-1.5 py-0.5 rounded-sm">COMPLETO</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1.5">Elige tu Duración</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[1, 2, 3].map((yrs) => (
                      <button
                        key={yrs}
                        type="button"
                        onClick={() => setAutodeskTime(yrs as 1 | 2 | 3)}
                        className={`py-1.5 text-[9.5px] font-black rounded-lg border transition-all cursor-pointer ${
                          autodeskTime === yrs
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 text-slate-650 hover:bg-slate-100/70'
                        }`}
                      >
                        {yrs} {yrs === 1 ? 'Año' : 'Años'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-200/50">
                  <p className="text-[9.5px] font-medium text-slate-700 leading-tight">
                    ✓ Activación inmediata oficial a tu correo y soporte técnico guiado por ingenieros de sistemas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[8.5px] bg-[#f04e23]/10 text-[#f04e23] px-1.5 py-0.5 rounded-md font-black block w-fit mb-0.5 uppercase tracking-wide">
                    {autodeskSavings}
                  </span>
                  <span className="text-slate-400 text-[10px] font-semibold">Total estimado</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-slate-400 text-[11px] font-extrabold">S/</span>
                  <span className="text-2xl font-black font-mono tracking-tight text-slate-950">{autodeskPrice}</span>
                </div>
              </div>

              <a
                href={autodeskWaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#f04e23] hover:bg-[#ee3a13] text-white text-[11.5px] font-black py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Comprar Autodesk Original</span>
                <i className="fa-solid fa-chevron-right text-xs ml-1"></i>
              </a>
            </div>
          </div>

          {/* CARD 4: CANVA PRO EDU */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-t-8 border-rose-400 hover:scale-[1.01]">
            <div className="absolute top-2.5 right-3 bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-lg text-[8.5px] font-black tracking-wide uppercase">
              Para Creativos
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                  <i className="fa-solid fa-wand-magic-sparkles text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-slate-950 font-black text-base tracking-tight">Canva Pro Edu</h3>
                  <p className="text-slate-400 text-[9.5px] font-bold uppercase tracking-wider leading-none mt-0.5">Licencia Premium para 2 Años</p>
                </div>
              </div>

              <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                Acceso premium absoluto para diseñar folletos, carátulas, redes sociales con todas las fotos, recursos PRO, plantillas ilimitadas y quitador de fondos con 1 clic.
              </p>

              <ul className="space-y-1.5 mb-5 pb-1">
                <li className="text-[9.5px] text-slate-650 font-semibold flex items-center gap-1.5"><i className="fa-solid fa-check text-rose-500 text-xs"></i> Plantillas premium ilimitadas</li>
                <li className="text-[9.5px] text-slate-650 font-semibold flex items-center gap-1.5"><i className="fa-solid fa-check text-rose-500 text-xs"></i> Quita fondos de imágenes y videos</li>
                <li className="text-[9.5px] text-slate-650 font-semibold flex items-center gap-1.5"><i className="fa-solid fa-check text-rose-500 text-xs"></i> Diseña en equipo en la nube sin límites</li>
              </ul>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1.5">Elige Versión</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCanvaAccounts(1)}
                      className={`py-2 text-[10px] font-black rounded-lg border transition-all cursor-pointer ${
                        canvaAccounts === 1
                          ? 'border-rose-500 bg-rose-50 text-rose-850'
                          : 'border-slate-200 text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      1 Cuenta
                    </button>
                    <button
                      type="button"
                      onClick={() => setCanvaAccounts(5)}
                      className={`py-2 text-[10px] font-black rounded-lg border transition-all cursor-pointer ${
                        canvaAccounts === 5
                          ? 'border-rose-500 bg-rose-50 text-rose-850'
                          : 'border-slate-200 text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Muti-Pack (5 Cuentas)
                    </button>
                  </div>
                </div>

                <div className="bg-rose-50/55 rounded-xl p-2.5 border border-rose-100 text-center">
                  <span className="text-[9.5px] text-rose-750 font-extrabold block">LICENCIA ACTIVA DIRECTO POR 2 AÑOS COMPLETOS</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[8.5px] bg-rose-500/10 text-rose-600 px-1.5 py-0.5 rounded-md font-black block w-fit mb-0.5 uppercase tracking-wide">
                    {canvaSavings}
                  </span>
                  <span className="text-slate-400 text-[10px] font-semibold">Total por 2 años</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-slate-400 text-[11px] font-extrabold">S/</span>
                  <span className="text-2xl font-black font-mono tracking-tight text-slate-950">{canvaPrice}</span>
                </div>
              </div>

              <a
                href={canvaWaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#f04e23] hover:bg-[#ee3a13] text-white text-[11.5px] font-black py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Adquirir Canva Premium</span>
                <i className="fa-solid fa-circle-arrow-right text-xs ml-1 font-bold"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
