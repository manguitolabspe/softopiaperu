import React, { useState, useEffect } from 'react';
import { SelectedPlanQuote } from '../types';
import { WHATSAPP_NUMBER } from '../data/content';

interface PlanQuoteModalProps {
  plan: SelectedPlanQuote | null;
  billingMode: 'monthly' | 'yearly';
  onClose: () => void;
  setSpeechText: (text: string) => void;
}

export const PlanQuoteModal: React.FC<PlanQuoteModalProps> = ({
  plan,
  billingMode,
  onClose,
  setSpeechText
}) => {
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientBusiness, setClientBusiness] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (plan) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plan, onClose]);

  if (!plan) return null;

  const finalRate = billingMode === 'yearly' ? (plan.basePrice * 0.8).toFixed(0) : plan.basePrice.toFixed(0);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!clientName.trim()) {
      newErrors.clientName = 'Por favor ingresa tu nombre completo.';
    } else if (clientName.trim().length < 3) {
      newErrors.clientName = 'El nombre debe tener al menos 3 caracteres.';
    } else if (/\d/.test(clientName)) {
      newErrors.clientName = 'El nombre no debe contener números.';
    }

    if (!clientCompany.trim()) {
      newErrors.clientCompany = 'El nombre de tu negocio o empresa es requerido.';
    } else if (clientCompany.trim().length < 2) {
      newErrors.clientCompany = 'El nombre del negocio debe tener al menos 2 caracteres.';
    }

    if (!clientBusiness) {
      newErrors.clientBusiness = 'Por favor selecciona el giro de tu negocio.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const cycleText =
      billingMode === 'yearly'
        ? 'Anual (con 20% descuento y Certificado de Firma Gratis)'
        : 'Mensual estándar';

    const waMsg = `Hola Softopia Perú. Me contacto desde la web oficial de cotizaciones.\n\n*Datos Comerciales del Solicitante:*\n- *Nombre Completo:* ${clientName}\n- *Empresa / Negocio:* ${clientCompany}\n- *Giro de Negocio:* ${clientBusiness}\n\n*Plan de Interés Seleccionado:*\n- *Plan:* ${plan.name}\n- *Ciclo:* ${cycleText}\n- *Precio Estimado:* S/ ${finalRate} al mes.\n\n_Deseo coordinar la demostración remota en vivo gratuita y dar de alta mi sistema._`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, '_blank');
    onClose();

    setSpeechText(
      `<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i> Estupendo ${clientName}. He estructurado tu cotización para el *${plan.name}* y la he enviado mediante el webhook de WhatsApp seguro. Tu asesor estará contigo en minutos.`
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-pop-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
          style={{ backgroundColor: plan.color }}
        ></div>

        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-5 mt-2">
          <div className="flex items-center gap-3">
            <img
              src="/softopia_logo.png"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = '/favicon.png';
              }}
              alt="Softopia"
              className="h-9 w-auto object-contain"
            />
            <div>
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider block">
                Estás cotizando el
              </span>
              <h3 className="text-lg md:text-xl font-extrabold mt-0.5" style={{ color: plan.color }}>
                {plan.name}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full flex items-center justify-center font-bold cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl mb-6 flex justify-between items-center">
          <div>
            <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">
              Precio Estimado
            </span>
            <span className="text-lg font-black text-slate-950 font-mono">
              S/ {finalRate}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">/ mes</span>
          </div>
          {billingMode === 'yearly' && (
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[9px] font-black px-2.5 py-1 rounded-lg">
              Anual (-20% DCTO)
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-slate-700 text-xs font-bold mb-1.5">Tu Nombre Completo</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
                if (errors.clientName) setErrors({ ...errors, clientName: '' });
              }}
              placeholder="Tu nombre completo"
              className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all ${
                errors.clientName ? 'border-rose-500' : 'border-slate-200 focus:border-softopia-blue focus:bg-white'
              }`}
            />
            {errors.clientName && (
              <p className="text-[10px] text-rose-500 font-bold mt-1">{errors.clientName}</p>
            )}
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-bold mb-1.5">
              Nombre de tu Negocio / Empresa
            </label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => {
                setClientCompany(e.target.value);
                if (errors.clientCompany) setErrors({ ...errors, clientCompany: '' });
              }}
              placeholder="Ejm: Minimarket Familiar"
              className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all ${
                errors.clientCompany ? 'border-rose-500' : 'border-slate-200 focus:border-softopia-blue focus:bg-white'
              }`}
            />
            {errors.clientCompany && (
              <p className="text-[10px] text-rose-500 font-bold mt-1">{errors.clientCompany}</p>
            )}
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-bold mb-1.5">
              Giro de Negocio / Rubro Comercial
            </label>
            <select
              value={clientBusiness}
              onChange={(e) => {
                setClientBusiness(e.target.value);
                if (errors.clientBusiness) setErrors({ ...errors, clientBusiness: '' });
              }}
              className={`w-full bg-slate-50 border rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 outline-none transition-all ${
                errors.clientBusiness ? 'border-rose-500' : 'border-slate-200 focus:border-softopia-blue focus:bg-white'
              }`}
            >
              <option value="">-- Elige un rubro --</option>
              <option value="Minimarket o Bodega">Minimarket o Bodega</option>
              <option value="Ferretería">Ferretería o Construcción</option>
              <option value="Gastronomía (Restaurante o Café)">Gastronomía (Restaurante o Café)</option>
              <option value="Servicios Profesionales">Servicios y Oficinas</option>
              <option value="Otros">Otros Rubros</option>
            </select>
            {errors.clientBusiness && (
              <p className="text-[10px] text-rose-500 font-bold mt-1">{errors.clientBusiness}</p>
            )}
          </div>

          <div className="pt-3 space-y-2">
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>Enviar Cotización por WhatsApp</span>
            </button>
            <p className="text-[9.5px] text-slate-500 text-center font-medium leading-relaxed">
              No mostramos tu número ni del asesor en pantalla por privacidad. Al presionar se abrirá un chat directo con nuestro asesor de guardia con toda la información cargada.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
