import React, { useState } from 'react';
import { WHATSAPP_NUMBER, SYSTEM_LOGIN_URL } from '../data/content';

interface HeroProps {
  speechText: string;
  setSpeechText: (text: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ speechText, setSpeechText }) => {
  const [mascotTab, setMascotTab] = useState<'quote' | 'faq'>('quote');
  const [quoteStep, setQuoteStep] = useState<1 | 2 | 3>(1);
  const [selectedNiche, setSelectedNiche] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSelectNiche = (niche: string) => {
    setSelectedNiche(niche);
    setQuoteStep(2);
    setSpeechText(
      `🏢 ¡Magnífica elección! Un sistema optimizado para <b>${niche}</b> aumentará tus ganancias y control. Paso 2: <b>Ingresa tu nombre y celular para enviarte la propuesta.</b>`
    );
  };

  const handleBackToStep1 = () => {
    setQuoteStep(1);
    setSpeechText(
      '⚡ Paso 1: <b>¿Cuál es el rubro principal de tu negocio en el Perú?</b> Elige una opción abajo.'
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '').slice(0, 9);
    setCustomerPhone(rawDigits);
    if (rawDigits.length === 9 && rawDigits.startsWith('9')) {
      setPhoneError(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(e.target.value);
    if (e.target.value.trim().length >= 2) {
      setNameError(false);
    }
  };

  const handleStep2Submit = () => {
    let hasErr = false;
    if (customerName.trim().length < 2) {
      setNameError(true);
      hasErr = true;
    }
    const isPhoneValid = /^[9]\d{8}$/.test(customerPhone);
    if (!isPhoneValid) {
      setPhoneError(true);
      hasErr = true;
    }

    if (hasErr) {
      setSpeechText(
        '⚠️ <b>¡Un momento, por favor!</b> Necesito tu nombre y un WhatsApp válido para cotizar y reservar tu demo gratis en el sistema.'
      );
      return;
    }

    setQuoteStep(3);
    setSpeechText(
      `🎉 <b>¡Todo listo, ${customerName}!</b> He guardado tu simulación y reserva. Dale clic abajo al botón verde para reclamar tu demo en vivo por WhatsApp al instante.`
    );
  };

  const handleResetQuote = () => {
    setSelectedNiche('');
    setCustomerName('');
    setCustomerPhone('');
    setNameError(false);
    setPhoneError(false);
    setQuoteStep(1);
    setSpeechText(
      '⚡ <b>¡Cotiza en 30 segundos!</b> Elige el rubro de tu negocio abajo para calcular tu plan ideal y agendar tu demo gratis guiada.'
    );
  };

  const handleTabSwitch = (tab: 'quote' | 'faq') => {
    setMascotTab(tab);
    if (tab === 'faq') {
      setSpeechText(
        '<i class="fa-solid fa-robot text-softopia-blue mr-1.5"></i> Hola. Soy Softi. Dale clic a mis módulos de abajo para ver todas las funcionalidades del sistema.'
      );
    } else {
      handleResetQuote();
    }
  };

  const waLeadQuery = `¡Hola Softopia Perú! Mi nombre es ${customerName}, tengo un negocio del rubro ${selectedNiche} y deseo reclamar mi demo gratis, asesoramiento personalizado y asegurar el beneficio del certificado SUNAT gratis por 1 año. Mi número de contacto de WhatsApp registrado es ${customerPhone}.`;

  return (
    <section id="inicio" className="relative pt-24 md:pt-32 pb-16 bg-[#f8fafc] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-softopia-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-softopia-orange/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 justify-center lg:justify-start">
              <span className="h-[1.5px] w-6 bg-softopia-blue"></span>
              <span className="text-[10px] md:text-xs font-black tracking-widest text-[#0a3a9c] uppercase">
                TECNOLOGÍA QUE IMPULSA TU NEGOCIO
              </span>
              <span className="h-[1.5px] w-6 bg-softopia-blue"></span>
            </div>

            <div className="space-y-4">
              <div className="inline-block bg-[#0f46bd] text-white text-xs md:text-sm font-black px-5 py-2 rounded-xl tracking-wide shadow-md uppercase">
                SISTEMA INTEGRAL PARA TU EMPRESA
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                TODO LO QUE TU NEGOCIO NECESITA,<br />
                <span className="text-softopia-orange bg-clip-text">EN UN SOLO SISTEMA</span>
              </h1>
            </div>

            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Controla, vende, factura y gestiona tu empresa de forma rápida, segura y eficiente. El sistema de ventas preferido por restaurantes, ferreterías, bodegas, y empresas líderes en el Perú.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs font-bold text-slate-750 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 bg-white/70 border border-slate-200/60 rounded-xl px-2.5 py-1.5 shadow-2xs">
                <span className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
                </span>
                <span className="text-[11px] leading-tight">Homologado SUNAT</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 border border-slate-200/60 rounded-xl px-2.5 py-1.5 shadow-2xs">
                <span className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
                </span>
                <span className="text-[11px] leading-tight">Migración Excel Gratis</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 border border-slate-200/60 rounded-xl px-2.5 py-1.5 shadow-2xs">
                <span className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
                </span>
                <span className="text-[11px] leading-tight">Capacitación Incluida</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 border border-slate-200/60 rounded-xl px-2.5 py-1.5 shadow-2xs">
                <span className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
                </span>
                <span className="text-[11px] leading-tight">Soporte Local y Remoto</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#pricing-planes"
                className="w-full sm:w-auto bg-softopia-blue hover:bg-softopia-blue-dark text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-softopia-blue/20 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <span>Solicitar Demo Gratuita</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              <a
                href={SYSTEM_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-xs md:text-sm px-6 py-3.5 rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 group border border-slate-700 cursor-pointer"
                title="Acceder a la plataforma de facturación electrónica"
              >
                <i className="fa-solid fa-arrow-right-to-bracket text-amber-300 text-xs group-hover:translate-x-0.5 transition-transform"></i>
                <span>Ir al Sistema</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20solicitar%20asesoría%20sobre%20el%20sistema%20para%20mi%20negocio.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs md:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all hover:border-slate-400 hover:scale-105"
              >
                <span>Chatear con un Asesor</span>
                <i className="fa-brands fa-whatsapp text-emerald-600 text-sm"></i>
              </a>
            </div>

            {/* Exclusive Launch Offer Banner */}
            <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/90 rounded-2xl p-4 flex items-center gap-4 max-w-xl mx-auto lg:mx-0 shadow-xs">
              <div className="h-11 w-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/30">
                <i className="fa-solid fa-gift text-lg animate-pulse"></i>
              </div>
              <div className="text-left">
                <span className="text-[9px] text-[#f04e23] font-black uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-softopia-orange animate-ping"></span>
                  ¡OFERTA EXCLUSIVA DE LANZAMIENTO!
                </span>
                <p className="text-slate-700 text-xs font-semibold leading-tight mt-0.5">
                  Contrata tu plan anual y recibe <strong className="text-slate-900 font-extrabold">Certificado Digital SUNAT GRATIS</strong> por 1 año (ahorro de S/ 180) + migración de productos desde Excel incluida.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Hero Mascot Card ("Softi") */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="bg-white border border-slate-200/80 shadow-2xl p-6 rounded-3xl w-full max-w-sm relative">
              <div className="absolute -top-3 right-4 bg-amber-400 text-slate-950 px-3 py-1 font-black rounded-lg text-[9px] uppercase tracking-wider shadow-md flex items-center gap-1">
                <i className="fa-solid fa-bolt text-xs"></i>
                <span>COTIZACIÓN INMEDIATA</span>
              </div>

              {/* Tab Switcher */}
              <div className="flex border border-slate-100 p-1 bg-slate-50/75 rounded-2xl mb-4">
                <button
                  type="button"
                  onClick={() => handleTabSwitch('quote')}
                  className={`flex-1 py-2 px-2.5 text-[10.5px] font-black rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    mascotTab === 'quote'
                      ? 'bg-white text-softopia-blue shadow-xs border border-slate-200/40'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span>Cotizar Sistema ⚡</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabSwitch('faq')}
                  className={`flex-1 py-2 px-2.5 text-[10.5px] font-black rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    mascotTab === 'faq'
                      ? 'bg-white text-softopia-blue shadow-xs border border-slate-200/40'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <i className="fa-solid fa-comments text-xs"></i>
                  <span>Consultar Softi</span>
                </button>
              </div>

              {/* Speech Bubble */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4 relative min-h-[85px] flex items-center justify-center">
                <p
                  className="text-slate-700 text-xs font-bold leading-relaxed text-center"
                  dangerouslySetInnerHTML={{ __html: speechText }}
                />
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-50 border-r border-b border-slate-100 rotate-45"></div>
              </div>

              {/* VIEW 1: FAQ GRAPHIC / ROBOT VIEW */}
              {mascotTab === 'faq' ? (
                <div className="animate-pop-in">
                  <div className="flex justify-center py-3 relative group">
                    <div className="absolute inset-0 bg-cyan-200/20 rounded-full blur-2xl -z-10 animate-pulse-slow"></div>

                    {/* Styled Mascot SVG with official softopia_logo.png on chest */}
                    <svg className="h-36 w-36 drop-shadow-xl" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="22" r="10" fill="#f04e23" />
                      <line x1="100" y1="22" x2="100" y2="40" stroke="#1e293b" stroke-width="4" />
                      <circle cx="100" cy="22" r="6" fill="#ff7a59" className="animate-pulse" />

                      <rect x="52" y="65" width="10" height="25" rx="5" fill="#0f46bd" />
                      <rect x="138" y="65" width="10" height="25" rx="5" fill="#0f46bd" />

                      <rect x="60" y="40" width="80" height="75" rx="20" fill="#1e293b" stroke="#0f46bd" stroke-width="4" />
                      <rect x="68" y="48" width="64" height="42" rx="10" fill="#0f172a" />

                      <circle cx="85" cy="65" r="10" fill="#00b0ff" className="animate-pulse" />
                      <circle cx="115" cy="65" r="10" fill="#00b0ff" className="animate-pulse" />
                      <circle cx="85" cy="65" r="4" fill="#020617" />
                      <circle cx="115" cy="65" r="4" fill="#020617" />

                      <path d="M90 82 Q100 88 110 82" stroke="#00b0ff" stroke-width="3" stroke-linecap="round" fill="none" />
                      <circle cx="75" cy="74" r="3" fill="#f04e23" opacity="0.8" />
                      <circle cx="125" cy="74" r="3" fill="#f04e23" opacity="0.8" />

                      <rect x="91" y="115" width="18" height="10" rx="3" fill="#475569" />

                      <path d="M72 125 C72 125 60 148 55 160 C53 164 56 170 61 170 H139 C144 170 147 164 145 160 C140 148 128 125 128 125 Z" fill="#0f46bd" />

                      <ellipse cx="100" cy="150" rx="22" ry="16" fill="#ffffff" />
                      <image href="/softopia_logo.png" x="84" y="137" width="32" height="26" preserveAspectRatio="xMidYMid meet" />

                      <path d="M72 135 C60 135 48 108 45 102" stroke="#1e293b" stroke-width="8" stroke-linecap="round" />
                      <path d="M128 135 C140 135 148 152 152 160" stroke="#1e293b" stroke-width="8" stroke-linecap="round" />

                      <rect x="85" y="170" width="8" height="15" fill="#475569" />
                      <rect x="107" y="170" width="8" height="15" fill="#475569" />
                      <rect x="78" y="183" width="22" height="7" rx="3" fill="#1e293b" />
                      <rect x="100" y="183" width="22" height="7" rx="3" fill="#1e293b" />
                    </svg>
                  </div>

                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      onClick={() =>
                        setSpeechText(
                          '💡 ¡Excelente elección! Si necesitas un sistema homologado por SUNAT, todos nuestros comprobantes son electrónicos y se registran al instante. Revisa los módulos en la sección inferior.'
                        )
                      }
                      className="w-full text-left bg-slate-50 hover:bg-softopia-blue/5 border border-slate-100 hover:border-softopia-blue/50 p-2.5 rounded-xl text-[10.5px] font-bold text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <i className="fa-solid fa-chart-line text-softopia-blue text-xs shrink-0"></i>
                      <span>¿Está homologado con SUNAT en el Perú?</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSpeechText(
                          '🖥️ ¡Exacto! Funciona en laptops, tablets, celulares y computadoras de escritorio. Toda tu información se sincroniza en vivo en servidores en la nube con copias diarias de seguridad.'
                        )
                      }
                      className="w-full text-left bg-slate-50 hover:bg-softopia-blue/5 border border-slate-100 hover:border-softopia-blue/50 p-2.5 rounded-xl text-[10.5px] font-bold text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <i className="fa-solid fa-laptop text-softopia-blue text-xs shrink-0"></i>
                      <span>¿Necesita instalación o funciona en web?</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* VIEW 2: MULTI-STEP LEAD QUOTE WIZARD */
                <div className="animate-pop-in">
                  {quoteStep === 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md">
                          Paso 1 de 3
                        </span>
                        <span className="text-[9.5px] text-amber-500 font-bold flex items-center gap-1">
                          <i className="fa-solid fa-gift"></i> Demo Gratis
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleSelectNiche('Restaurante / Cafetería')}
                          className="border border-slate-200 hover:border-softopia-blue hover:bg-softopia-blue/5 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer group hover:scale-[1.02] active:scale-98"
                        >
                          <div className="h-8 w-8 rounded-full bg-slate-50 group-hover:bg-softopia-blue/10 flex items-center justify-center transition-colors">
                            <i className="fa-solid fa-utensils text-slate-500 group-hover:text-softopia-blue text-sm transition-colors"></i>
                          </div>
                          <span className="text-[10px] font-extrabold text-slate-700">Restaurantes</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSelectNiche('Ferretería / Comercial')}
                          className="border border-slate-200 hover:border-softopia-blue hover:bg-softopia-blue/5 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer group hover:scale-[1.02] active:scale-98"
                        >
                          <div className="h-8 w-8 rounded-full bg-slate-50 group-hover:bg-softopia-blue/10 flex items-center justify-center transition-colors">
                            <i className="fa-solid fa-screwdriver-wrench text-slate-500 group-hover:text-softopia-blue text-sm transition-colors"></i>
                          </div>
                          <span className="text-[10px] font-extrabold text-slate-700">Ferreterías</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSelectNiche('Tienda / Minimarket')}
                          className="border border-slate-200 hover:border-softopia-blue hover:bg-softopia-blue/5 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer group hover:scale-[1.02] active:scale-98"
                        >
                          <div className="h-8 w-8 rounded-full bg-slate-50 group-hover:bg-softopia-blue/10 flex items-center justify-center transition-colors">
                            <i className="fa-solid fa-basket-shopping text-slate-500 group-hover:text-softopia-blue text-sm transition-colors"></i>
                          </div>
                          <span className="text-[10px] font-extrabold text-slate-700">Tienda / Minimarket</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSelectNiche('Otra Empresa / Servicios')}
                          className="border border-slate-200 hover:border-softopia-blue hover:bg-softopia-blue/5 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer group hover:scale-[1.02] active:scale-98"
                        >
                          <div className="h-8 w-8 rounded-full bg-slate-50 group-hover:bg-softopia-blue/10 flex items-center justify-center transition-colors">
                            <i className="fa-solid fa-store text-slate-500 group-hover:text-softopia-blue text-sm transition-colors"></i>
                          </div>
                          <span className="text-[10px] font-extrabold text-slate-700">Otro Negocio</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {quoteStep === 2 && (
                    <div className="space-y-3.5 animate-pop-in">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md">
                          Paso 2 de 3
                        </span>
                        <button
                          type="button"
                          onClick={handleBackToStep1}
                          className="text-[9.5px] text-slate-400 hover:text-slate-600 font-bold flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                        >
                          <i className="fa-solid fa-arrow-left"></i> Cambiar rubro
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="relative">
                            <span className="absolute left-3.5 top-3 text-slate-400 text-xs">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            <input
                              type="text"
                              value={customerName}
                              onChange={handleNameChange}
                              placeholder="Escribe tu Nombre / Empresa"
                              className={`w-full bg-slate-50 hover:bg-slate-100/75 focus:bg-white text-xs border rounded-xl pl-9 pr-3.5 py-3 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-bold ${
                                nameError
                                  ? 'border-rose-500 focus:border-rose-500 focus:ring-4 focus:ring-rose-100'
                                  : 'border-slate-200 focus:border-softopia-blue focus:ring-4 focus:ring-softopia-blue/10'
                              }`}
                              required
                            />
                          </div>
                          {nameError && (
                            <p className="text-[10px] text-rose-500 font-extrabold mt-1 ml-1 flex items-center gap-1">
                              <i className="fa-solid fa-triangle-exclamation"></i>
                              <span>Por favor ingresa tu nombre o empresa</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <div className="relative">
                            <span className="absolute left-3.5 top-3 text-slate-400 text-xs">
                              <i className="fa-solid fa-phone"></i>
                            </span>
                            <input
                              type="tel"
                              value={customerPhone}
                              onChange={handlePhoneChange}
                              placeholder="WhatsApp o Celular (9 dígitos)"
                              maxLength={9}
                              className={`w-full bg-slate-50 hover:bg-slate-100/75 focus:bg-white text-xs border rounded-xl pl-9 pr-3.5 py-3 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-bold ${
                                phoneError
                                  ? 'border-rose-500 focus:border-rose-500 focus:ring-4 focus:ring-rose-100'
                                  : 'border-slate-200 focus:border-softopia-blue focus:ring-4 focus:ring-softopia-blue/10'
                              }`}
                              required
                            />
                          </div>
                          {phoneError && (
                            <p className="text-[10px] text-rose-500 font-extrabold mt-1 ml-1 flex items-center gap-1">
                              <i className="fa-solid fa-triangle-exclamation"></i>
                              <span>Ingresa un WhatsApp válido de 9 dígitos (ej: 9XXXXXXXX)</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleStep2Submit}
                        className="w-full bg-softopia-blue hover:bg-softopia-blue-dark text-white text-[11px] font-black py-3 rounded-xl transition-all shadow-md shadow-softopia-blue/15 cursor-pointer hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-1.5"
                      >
                        <span>Generar Cotización</span>
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </button>
                    </div>
                  )}

                  {quoteStep === 3 && (
                    <div className="space-y-3.5 animate-pop-in">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <span className="text-[9px] text-emerald-500 font-extrabold uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-md">
                          ¡Éxito! Paso 3 de 3
                        </span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                      </div>

                      <div className="text-center py-1">
                        <div className="inline-flex h-9 w-9 bg-emerald-100 text-emerald-600 rounded-full items-center justify-center shadow-inner mb-2 animate-bounce-slow">
                          <i className="fa-solid fa-check text-sm"></i>
                        </div>
                        <h5 className="text-xs font-black text-slate-900 leading-tight">
                          ¡Propuesta Optimizada Generada!
                        </h5>
                        <p className="text-[10px] text-slate-500 font-semibold leading-relaxed mt-1">
                          Estimado(a) <b>{customerName}</b>, hemos configurado una demo para <b>{selectedNiche}</b>.
                        </p>
                      </div>

                      <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-left">
                        <div className="flex items-center gap-1.5 mb-1">
                          <i className="fa-solid fa-gift text-xs text-amber-500"></i>
                          <span className="text-[9px] font-black text-amber-600 uppercase tracking-wide">
                            Beneficio Técnico Desbloqueado
                          </span>
                        </div>
                        <p className="text-[10px] font-medium text-slate-700 leading-tight">
                          ✓ Demo Gratuita guiada + Certificado SUNAT 100% Bonificado por 1 año entero.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waLeadQuery)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-black py-3 px-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10 hover:scale-[1.02] active:scale-98 cursor-pointer"
                        >
                          <i className="fa-brands fa-whatsapp text-base"></i>
                          <span>Solicitar Demo por WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleResetQuote}
                          className="w-full text-slate-400 hover:text-slate-600 font-extrabold text-[9px] uppercase tracking-wider py-1 cursor-pointer bg-transparent border-none text-center block"
                        >
                          Volver a empezar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Version watermark */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <p className="text-slate-400 text-[9px] font-bold tracking-widest uppercase">
                  SOFTOPIA ASSISTANT V4.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
