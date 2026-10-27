import React, { useState, useEffect, useRef } from 'react';
import {
  SOFTIBOT_FAQ,
  SOFTIBOT_ANSWERS,
  WHATSAPP_NUMBER,
  SYSTEM_LOGIN_URL
} from '../data/content';
import { SoftiBotOption } from '../types';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  isHtml?: boolean;
}

export const SoftiBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: '¡Hola! Soy SoftiBot de Softopia Perú. ¿En qué puedo ayudarte hoy para tu negocio?'
    }
  ]);
  const [currentMenu, setCurrentMenu] = useState<'main' | 'sistemas' | 'cameras' | 'licensing' | 'custom'>('main');
  const [isTyping, setIsTyping] = useState(false);
  const [customWaUrl, setCustomWaUrl] = useState(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Deseo%20conversar%20con%20un%20asesor%20humano.`);
  const [inputText, setInputText] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setShowTooltip(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addBotMessage = (text: string, isHtml = false) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: 'bot', text, isHtml }]);
    }, 500);
  };

  const handleOptionClick = (opt: SoftiBotOption) => {
    setMessages((prev) => [...prev, { sender: 'user', text: opt.text }]);

    if (opt.key === 'main') {
      addBotMessage('¿Qué consulta principal o servicio deseas explorar hoy?');
      setCurrentMenu('main');
      return;
    }

    if (opt.key === 'portal_login') {
      const html = `Puedes ingresar directamente a la plataforma de Facturación Electrónica aquí: <br><br><a href="${SYSTEM_LOGIN_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-softopia-blue hover:bg-softopia-blue-dark text-white font-bold px-3.5 py-2 rounded-xl text-xs my-1 shadow-sm"><i class="fa-solid fa-arrow-right-to-bracket text-amber-400"></i> Abrir Sistema de Facturación</a><br><br>Si eres un cliente nuevo y deseas credenciales de prueba o demo guiada, te las facilitamos al instante por WhatsApp.`;
      addBotMessage(html, true);
      setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Softopia Perú. Deseo solicitar credenciales demo para probar el sistema de facturación electrónica.')}`);
      setCurrentMenu('custom');
      return;
    }

    if (opt.key === 'whatsapp_general') {
      addBotMessage('Redirigiendo a un especialista calificado en Talara por WhatsApp para brindarte atención directa e inmediata...');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Vengo%20del%20asistente%20virtual%20y%20necesito%20atención%20personalizada.`, '_blank');
      setCurrentMenu('main');
      return;
    }

    if (opt.key === 'sistemas' || opt.key === 'cameras' || opt.key === 'licensing') {
      const cat = SOFTIBOT_FAQ[opt.key];
      addBotMessage(cat.question);
      setCurrentMenu(opt.key);
      return;
    }

    const ans = SOFTIBOT_ANSWERS[opt.key];
    if (ans) {
      addBotMessage(ans.answer);
      setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ans.waText)}`);
      setCurrentMenu('custom');
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const raw = inputText;
    setInputText('');
    setMessages((prev) => [...prev, { sender: 'user', text: raw }]);

    const clean = raw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);

      if (clean.includes('login') || clean.includes('ingresar') || clean.includes('acceso') || clean.includes('entrar') || clean.includes('sytemsoftopia') || clean.includes('iniciar sesion') || clean.includes('portal') || clean.includes('clave')) {
        const html = `Puedes ingresar directamente al portal de Facturación Electrónica aquí: <br><br><a href="${SYSTEM_LOGIN_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-softopia-blue hover:bg-softopia-blue-dark text-white font-bold px-3.5 py-2 rounded-xl text-xs my-1 shadow-sm"><i class="fa-solid fa-arrow-right-to-bracket text-amber-400"></i> Abrir Sistema de Facturación</a><br><br>Si necesitas tus credenciales o deseas una demo guiada, te atendemos por WhatsApp.`;
        setMessages((prev) => [...prev, { sender: 'bot', text: html, isHtml: true }]);
        setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Softopia Perú. Deseo cotizar el sistema de facturación electrónica.')}`);
        setCurrentMenu('custom');
      } else if (clean.includes('camara') || clean.includes('seguridad') || clean.includes('vigilancia') || clean.includes('hikvision') || clean.includes('imou') || clean.includes('ezviz') || clean.includes('grabar') || clean.includes('video') || clean.includes('monitoreo')) {
        if (clean.includes('marca') || clean.includes('modelo')) {
          setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.cameras_brands.answer }]);
          setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.cameras_brands.waText)}`);
          setCurrentMenu('custom');
        } else if (clean.includes('celular') || clean.includes('monitoreo') || clean.includes('en vivo') || clean.includes('ver') || clean.includes('telefono')) {
          setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.cameras_live.answer }]);
          setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.cameras_live.waText)}`);
          setCurrentMenu('custom');
        } else {
          setMessages((prev) => [...prev, { sender: 'bot', text: 'Ofrecemos un servicio premium llave en mano de Cámaras de Seguridad en todo Talara. Trabajamos con marcas como HIKVISION, IMOU y EZVIZ. ¿Qué aspecto te gustaría consultar hoy?' }]);
          setCurrentMenu('cameras');
        }
      } else if (clean.includes('precio') || clean.includes('costo') || clean.includes('plan') || clean.includes('planes') || clean.includes('cotiza') || clean.includes('pagar') || clean.includes('tarifa') || clean.includes('suscripcion') || clean.includes('soles') || clean.includes('descuento') || clean.includes('cuanto cuesta')) {
        setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.sistemas_pricing.answer }]);
        setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.sistemas_pricing.waText)}`);
        setCurrentMenu('custom');
      } else if (clean.includes('celular') || clean.includes('tablet') || clean.includes('android') || clean.includes('app') || clean.includes('movil') || clean.includes('dispositivo')) {
        setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.sistemas_devices.answer }]);
        setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.sistemas_devices.waText)}`);
        setCurrentMenu('custom');
      } else if (clean.includes('sunat') || clean.includes('boleta') || clean.includes('factura') || clean.includes('homologado') || clean.includes('emite')) {
        setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.sistemas_sunat.answer }]);
        setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.sistemas_sunat.waText)}`);
        setCurrentMenu('custom');
      } else if (clean.includes('licencia') || clean.includes('office') || clean.includes('eset') || clean.includes('antivirus') || clean.includes('canva') || clean.includes('autodesk') || clean.includes('microsoft')) {
        if (clean.includes('antivirus') || clean.includes('eset')) {
          setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.licensing_eset.answer }]);
          setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.licensing_eset.waText)}`);
          setCurrentMenu('custom');
        } else {
          setMessages((prev) => [...prev, { sender: 'bot', text: SOFTIBOT_ANSWERS.licensing_brands.answer }]);
          setCustomWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(SOFTIBOT_ANSWERS.licensing_brands.waText)}`);
          setCurrentMenu('custom');
        }
      } else if (clean.includes('contacto') || clean.includes('direccion') || clean.includes('telefono') || clean.includes('talara') || clean.includes('whatsapp') || clean.includes('oficina')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Nuestra oficina técnica se encuentra en <b>Av. Grau 450 - Talara, Piura</b>. Brindamos soporte local y remoto rápido en Talara, Los Órganos, Máncora y todo Piura. Puedes llamarnos o escribirnos por WhatsApp directo al <b>+51 923 992 629</b>.',
            isHtml: true
          }
        ]);
        setCurrentMenu('main');
      } else if (clean.includes('hola') || clean.includes('buen') || clean.includes('hey') || clean.includes('saludos')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: '¡Hola! Qué gusto saludarte. Soy SoftiBot, el chatbot especialista de Softopia. ¿Qué servicio te gustaría cotizar o conocer detalladamente hoy?'
          }
        ]);
        setCurrentMenu('main');
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: '¡Qué gran pregunta! 🧠 Justo ahora no cuento con una guía automática para esa consulta específica, pero cuéntame: ¿Deseas conversar directamente con un programador por WhatsApp o prefieres explorar uno de nuestros rubros clave?'
          }
        ]);
        setCurrentMenu('main');
      }
    }, 600);
  };

  return (
    <div
      id="softibot-floating-container"
      className={`fixed z-50 flex flex-col items-end ${
        isOpen
          ? 'bottom-14 sm:bottom-6 right-2 sm:right-6 left-2 sm:left-auto'
          : 'bottom-16 sm:bottom-6 right-3 sm:right-6'
      }`}
    >
      {/* Interactive Greeting Tooltip */}
      {showTooltip && !isOpen && (
        <div
          onClick={handleOpen}
          className="bg-slate-900 text-white text-xs font-bold px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-2 mb-2 animate-tooltip-pulse cursor-pointer max-w-[270px] hover:bg-slate-800 transition-all select-none"
        >
          <div className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="leading-snug text-[11px] sm:text-xs">¿Hola! ¿Tienes dudas o consultas? Conversa conmigo aquí 🤖</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-auto font-bold h-5 w-5 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-[10px] transition-colors shrink-0"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Chat Window Box */}
      {isOpen && (
        <div className="w-full sm:w-[370px] max-w-[390px] h-[min(490px,calc(100dvh-75px))] sm:h-[530px] bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-0 sm:mb-2.5 animate-pop-in">
          
          {/* Header */}
          <div className="softibot-glass-header px-4 py-3 border-b border-slate-800 flex items-center justify-between shadow-sm shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 bg-softopia-blue rounded-xl flex items-center justify-center text-white relative shadow-sm border border-white/10 shrink-0">
                <i className="fa-solid fa-robot text-base text-white"></i>
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-black text-white leading-none">SoftiBot</h4>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <span className="text-[9px] text-emerald-400 font-extrabold tracking-wide uppercase mt-0.5 block">
                  {isTyping ? 'Escribiendo...' : 'Asistente Virtual Activo'}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="h-7 w-7 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-350 hover:text-white flex items-center justify-center border-none cursor-pointer transition-all hover:scale-105"
              aria-label="Cerrar chat"
            >
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>

          {/* Unified Conversation Feed: Messages + Interactive Options immediately beneath */}
          <div className="flex-1 p-3 sm:p-3.5 overflow-y-auto space-y-2.5 bg-slate-50 flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-[11.5px] sm:text-xs px-3 py-2 rounded-2xl max-w-[88%] leading-relaxed shadow-xs animate-message-in ${
                  msg.sender === 'user'
                    ? 'self-end bg-softopia-blue text-white font-semibold rounded-tr-none'
                    : 'self-start bg-white border border-slate-200 text-slate-800 font-medium rounded-tl-none'
                }`}
              >
                {msg.isHtml ? (
                  <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  <span>{msg.text}</span>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="self-start bg-white border border-slate-150 text-slate-400 text-xs font-medium px-3.5 py-2 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-1.5 animate-message-in">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </div>
            )}

            {/* Quick Action Options: Rendered IMMEDIATELY after messages without any blank spacer */}
            {!isTyping && (
              <div className="pt-1 space-y-1.5 animate-message-in">
                {currentMenu === 'main' && (
                  <div className="space-y-1.5">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider px-1">
                      Opciones disponibles:
                    </div>
                    {SOFTIBOT_FAQ.main.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleOptionClick(opt)}
                        className="w-full text-left bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-softopia-blue/50 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 transition-all flex items-center gap-2.5 shadow-xs hover:shadow-sm active:scale-[0.99] cursor-pointer group"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                            opt.key === 'portal_login'
                              ? 'bg-softopia-blue text-white'
                              : opt.key === 'whatsapp_general'
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-100 text-softopia-blue'
                          }`}
                        >
                          <i className={`fa-solid ${opt.icon} text-[11px]`}></i>
                        </div>
                        <span className="flex-1 text-[11px] sm:text-xs font-bold text-slate-700 group-hover:text-softopia-blue transition-colors">
                          {opt.text}
                        </span>
                        <i className="fa-solid fa-chevron-right text-[9px] text-slate-350 group-hover:translate-x-0.5 transition-transform"></i>
                      </button>
                    ))}
                  </div>
                )}

                {(currentMenu === 'sistemas' || currentMenu === 'cameras' || currentMenu === 'licensing') && (
                  <div className="space-y-1.5">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider px-1 flex items-center gap-1.5">
                      <i className="fa-solid fa-circle-question text-softopia-blue text-[10px]"></i>
                      <span>Consultas frecuentes:</span>
                    </div>
                    {SOFTIBOT_FAQ[currentMenu].options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleOptionClick(opt)}
                        className="w-full text-left bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-softopia-blue/50 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 transition-all flex items-center gap-2.5 shadow-xs hover:shadow-sm active:scale-[0.99] cursor-pointer group"
                      >
                        <div className="w-6 h-6 rounded-lg bg-slate-100 text-softopia-blue flex items-center justify-center shrink-0">
                          <i className={`fa-solid ${opt.icon} text-[11px]`}></i>
                        </div>
                        <span className="flex-1 text-[11px] sm:text-xs font-semibold text-slate-700 group-hover:text-softopia-blue transition-colors">
                          {opt.text}
                        </span>
                        <i className="fa-solid fa-chevron-right text-[9px] text-slate-350"></i>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setMessages((prev) => [...prev, { sender: 'user', text: 'Volver al menú principal' }]);
                        addBotMessage('¿Qué consulta principal o servicio deseas explorar hoy?');
                        setCurrentMenu('main');
                      }}
                      className="w-full text-center bg-slate-150 hover:bg-slate-200 text-slate-700 font-bold py-2 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                    >
                      <i className="fa-solid fa-arrow-left text-[10px]"></i>
                      <span>Volver al menú principal</span>
                    </button>
                  </div>
                )}

                {currentMenu === 'custom' && (
                  <div className="space-y-2 pt-1">
                    <a
                      href={customWaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-white py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <i className="fa-brands fa-whatsapp text-base text-white"></i>
                      <span>Consultar esto por WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setMessages((prev) => [...prev, { sender: 'user', text: 'Volver al menú principal' }]);
                        addBotMessage('¿Qué consulta principal o servicio deseas explorar hoy?');
                        setCurrentMenu('main');
                      }}
                      className="w-full text-center bg-slate-150 hover:bg-slate-200 text-slate-700 font-bold py-2 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <i className="fa-solid fa-arrow-left text-[10px]"></i>
                      <span>Volver al menú principal</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Dynamic Text Search Form */}
          <form onSubmit={handleTextSubmit} className="p-2 sm:p-2.5 bg-white border-t border-slate-150 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu duda o consulta..."
              className="flex-1 bg-slate-50 hover:bg-slate-100/90 focus:bg-white text-xs border border-slate-200 focus:border-softopia-blue focus:ring-2 focus:ring-softopia-blue/15 rounded-xl px-3 py-2 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
              autoComplete="off"
            />
            <button
              type="submit"
              className="h-8 w-8 rounded-xl bg-softopia-blue hover:bg-softopia-blue-dark text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0 shadow-sm"
              title="Enviar mensaje"
            >
              <i className="fa-solid fa-paper-plane text-[10px]"></i>
            </button>
          </form>

          {/* Direct WhatsApp Asesor Quick Bar */}
          <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0 text-[10.5px]">
            <span className="text-slate-500 font-medium">¿Atención humana en vivo?</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Softopia Perú. Deseo conversar con un asesor humano.')}`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-black flex items-center gap-1 hover:underline"
            >
              <i className="fa-brands fa-whatsapp text-xs"></i>
              <span>WhatsApp Asesor</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Action Launcher Button
          - Hidden on mobile when modal is open to prevent overlapping with modal and bottom sticky bar
          - Visible when closed or on desktop
      */}
      <button
        type="button"
        onClick={() => {
          if (isOpen) handleClose();
          else handleOpen();
        }}
        className={`${
          isOpen ? 'hidden sm:flex' : 'flex'
        } h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-softopia-blue hover:bg-softopia-blue-dark text-white items-center justify-center shadow-2xl cursor-pointer relative hover:scale-105 active:scale-95 transition-all group scale-100 animate-indicator-pulse z-40`}
        aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente virtual'}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-softopia-blue opacity-35"></span>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-xl absolute transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}></i>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="animate-pulse h-1.5 w-1.5 bg-white rounded-full"></span>
          </div>
        )}
      </button>
    </div>
  );
};
