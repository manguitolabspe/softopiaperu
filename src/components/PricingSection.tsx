import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan, SelectedPlanQuote } from '../types';

interface PricingSectionProps {
  billingMode: 'monthly' | 'yearly';
  setBillingMode: (mode: 'monthly' | 'yearly') => void;
  onOpenQuoteModal: (plan: SelectedPlanQuote) => void;
  setSpeechText: (text: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  billingMode,
  setBillingMode,
  onOpenQuoteModal,
  setSpeechText
}) => {
  const handleBillingToggle = (mode: 'monthly' | 'yearly') => {
    setBillingMode(mode);
    if (mode === 'yearly') {
      setSpeechText(
        '<i class="fa-solid fa-tag text-emerald-500 mr-1.5 animate-bounce"></i> Ahorro Activado. Al cambiar al ciclo de Pago Anual, recibes un 20% de descuento y la firma digital SUNAT gratis por un año.'
      );
    } else {
      setSpeechText(
        '<i class="fa-solid fa-calendar text-softopia-blue mr-1.5"></i> Cambiaste el cotizador a Pago Mensual estándar. Puedes cambiar al ciclo anual para ahorrar 20% de descuento.'
      );
    }
  };

  const handlePlanClick = (plan: PricingPlan) => {
    let color = '#0f46bd';
    if (plan.id === 'crece') color = '#24b248';
    if (plan.id === 'emprendedor') color = '#f04e23';
    if (plan.id === 'empresarial') color = '#701ab0';
    if (plan.id === 'premium') color = '#ffab00';

    onOpenQuoteModal({
      name: plan.name,
      basePrice: plan.basePrice,
      color
    });
  };

  return (
    <section id="pricing-planes" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
          <span className="bg-softopia-blue/10 text-softopia-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">
            Tarifas transparentes
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Planes que se <span className="text-softopia-orange">Adaptan a tu Negocio</span>
          </h2>
          <p className="text-slate-650 text-sm md:text-base font-medium">
            Sin contratos forzosos. Elige la escala que tu negocio demanda hoy, con la opción de subir de plan libremente cuando crezcas.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-slate-200 p-1.5 rounded-full shadow-xs">
            <button
              type="button"
              onClick={() => handleBillingToggle('monthly')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingMode === 'monthly'
                  ? 'bg-softopia-blue text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Pago Mensual
            </button>
            <button
              type="button"
              onClick={() => handleBillingToggle('yearly')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingMode === 'yearly'
                  ? 'bg-softopia-blue text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>Pago Anual</span>
              <span className="bg-emerald-500/10 text-emerald-600 text-[9px] font-black px-2 py-0.5 rounded-full">
                -20% DCTO
              </span>
            </button>
          </div>
        </div>

        {/* Security / Uptime Box */}
        <div className="mb-14 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xs max-w-4xl mx-auto">
          <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
            <i className="fa-solid fa-shield-halved text-amber-500 text-2xl"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-slate-950 text-base md:text-lg font-black tracking-tight">
              Seguro, Confiable y Siempre Disponible
            </h3>
            <p className="mt-1 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              Toda tu información contable y de ventas está protegida bajo cifrado SSL de nivel bancario. Respaldos automáticos diarios en servidores en la nube para garantizar continuidad operativa ante cualquier eventualidad.
            </p>
          </div>
          <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 shrink-0 flex flex-col items-center">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Cumplimiento</span>
            <span className="text-emerald-700 text-xs font-black uppercase mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
              99.9% UPTIME
            </span>
          </div>
        </div>

        {/* 5 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRICING_PLANS.map((plan) => {
            const currentPrice =
              billingMode === 'yearly'
                ? (plan.basePrice * 0.8).toFixed(0)
                : plan.basePrice.toFixed(0);

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-5 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-8 ${plan.borderColor}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-softopia-orange text-white text-[8.5px] font-black uppercase px-3.5 py-1 rounded-full tracking-widest leading-none select-none shadow-md flex items-center gap-1 whitespace-nowrap">
                    <i className="fa-solid fa-star text-[7.5px] text-amber-200"></i>
                    <span>{plan.highlightBadge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-slate-950 font-black text-xs md:text-sm tracking-tight">
                      {plan.name}
                    </h3>
                    <span className={`text-[9px] font-black uppercase tracking-wider ${plan.tagColor}`}>
                      {plan.tag}
                    </span>
                  </div>

                  <p className="mt-3 text-[10.5px] text-slate-500 font-medium leading-relaxed min-h-[44px]">
                    {plan.description}
                  </p>

                  <div className="mt-4 pb-4 border-b border-slate-100 flex items-baseline gap-1">
                    <span className="text-slate-400 text-[10px] font-semibold">Desde S/</span>
                    <span className="text-2xl font-black font-mono tracking-tight text-slate-900">
                      {currentPrice}
                    </span>
                    <span className="text-slate-500 text-[10px] font-medium">
                      {billingMode === 'yearly' ? '/ al mes (pago anual)' : '/ mes'}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 text-[10.5px] font-medium leading-none ${
                          feat.highlight
                            ? 'text-emerald-700 font-bold bg-emerald-50/70 p-1 rounded-md'
                            : 'text-slate-600'
                        }`}
                      >
                        <span className="text-emerald-600 shrink-0">
                          <i className={`fa-solid ${feat.highlight ? 'fa-gift' : 'fa-check'} text-[10px]`}></i>
                        </span>
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handlePlanClick(plan)}
                  className={`mt-6 w-full py-2.5 rounded-xl text-xs font-black transition-all shadow-md cursor-pointer ${plan.btnColor}`}
                >
                  Cotizar Plan
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
