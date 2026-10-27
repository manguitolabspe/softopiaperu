import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, SYSTEM_LOGIN_URL } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-slate-100 ${
        isScrolled
          ? 'shadow-md bg-white/95 backdrop-blur-md py-2.5'
          : 'bg-white py-4 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#inicio" className="flex items-center gap-2.5 select-none group">
          <img
            src="/softopia_logo.png"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = '/favicon.png';
            }}
            alt="Softopia Perú Logo"
            className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-baseline gap-1.5 leading-none">
              <span className="text-xl md:text-2xl font-black tracking-tight text-softopia-blue">
                Softopia
              </span>
              <span className="text-sm md:text-base font-extrabold text-softopia-orange">
                Perú
              </span>
            </div>
            <span className="text-[7.5px] font-extrabold tracking-widest text-[#0f46bd]/85 uppercase mt-1">
              Tecnología que impulsa tu negocio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#inicio"
            className="text-xs font-bold text-slate-600 hover:text-softopia-blue tracking-wide transition-colors whitespace-nowrap"
          >
            Inicio
          </a>
          <a
            href="#sistema-modulos"
            className="text-xs font-bold text-slate-600 hover:text-softopia-blue tracking-wide transition-colors whitespace-nowrap"
          >
            Módulos
          </a>
          <a
            href="#licencias-software"
            className="text-xs font-bold text-slate-600 hover:text-softopia-blue tracking-wide transition-colors whitespace-nowrap"
          >
            Licencias
          </a>
          <a
            href="#pricing-planes"
            className="text-xs font-bold text-slate-600 hover:text-softopia-blue tracking-wide transition-colors whitespace-nowrap"
          >
            Planes
          </a>
          <a
            href="#contacto-directo"
            className="text-xs font-bold text-slate-600 hover:text-softopia-blue tracking-wide transition-colors whitespace-nowrap"
          >
            Contacto
          </a>
        </nav>

        {/* Direct Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20más%20información%20del%20sistema.`}
            target="_blank"
            rel="noreferrer"
            className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors mr-1"
          >
            <i className="fa-solid fa-phone h-3.5 w-3.5"></i>
            <span>WhatsApp</span>
          </a>

          <a
            href={SYSTEM_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-black text-white bg-softopia-blue hover:bg-softopia-blue-dark px-5 py-2.5 rounded-full shadow-md shadow-softopia-blue/20 transition-all duration-300 hover:scale-105 group whitespace-nowrap cursor-pointer"
            title="Ingresar a la plataforma de Facturación Electrónica"
          >
            <i className="fa-solid fa-arrow-right-to-bracket text-amber-300 text-xs group-hover:translate-x-0.5 transition-transform"></i>
            <span>Ingresar al Sistema</span>
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-softopia-blue focus:outline-hidden cursor-pointer"
          aria-label="Abrir menú"
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-3 px-6 space-y-2 absolute top-full left-0 right-0 shadow-xl z-30 animate-pop-in">

          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-softopia-blue py-1.5 border-b border-slate-50"
          >
            Inicio
          </a>
          <a
            href="#sistema-modulos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-softopia-blue py-1.5 border-b border-slate-50"
          >
            Módulos
          </a>
          <a
            href="#licencias-software"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-softopia-blue py-1.5 border-b border-slate-50"
          >
            Licencias
          </a>
          <a
            href="#pricing-planes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-softopia-blue py-1.5 border-b border-slate-50"
          >
            Planes
          </a>
          <a
            href="#contacto-directo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-softopia-blue py-1.5"
          >
            Contacto
          </a>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={SYSTEM_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-softopia-blue hover:bg-softopia-blue-dark text-white py-3 rounded-xl text-xs font-black shadow-md transition-all"
            >
              <i className="fa-solid fa-arrow-right-to-bracket text-amber-300"></i>
              <span>Ingresar al Sistema</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Softopia%20Perú.%20Quiero%20recibir%20asesoría%20sobre%20el%20sistema%20de%20ventas.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 py-3 rounded-xl text-xs font-bold transition-all hover:bg-emerald-100"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Contacto por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
