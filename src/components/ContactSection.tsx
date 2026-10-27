import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/content';

interface ContactSectionProps {
  setSpeechText: (text: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ setSpeechText }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'El nombre completo es requerido.';
    } else if (name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    } else if (/\d/.test(name)) {
      newErrors.name = 'El nombre no debe contener números.';
    }

    if (phone.trim()) {
      if (!/^9\d{8}$/.test(phone.trim())) {
        newErrors.phone = 'Ingresa un celular peruano válido de 9 dígitos (ej: 9XXXXXXXX).';
      }
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es requerido.';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido.';
    }

    if (!message.trim()) {
      newErrors.message = 'El mensaje es requerido.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Ingresa un poco más de detalle sobre tu consulta (mínimo 10 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waMsg = `¡Hola Softopia Perú! Me contacto desde el formulario web oficial.\n\n*Datos del Solicitante:*\n- *Nombre:* ${name}\n- *Celular WhatsApp:* ${phone || 'No especificado'}\n- *Correo:* ${email}\n- *Consulta:* ${message}\n\n_Deseo coordinar mi demo gratuita y conocer las ofertas vigentes._`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    setLastWaUrl(waUrl);

    // Open WhatsApp directly
    window.open(waUrl, '_blank');

    setIsSuccess(true);
    setSpeechText(
      `<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i> ¡Excelente, ${name}! He enviado tu solicitud directo al equipo comercial en WhatsApp para atenderte en minutos.`
    );
  };

  return (
    <section id="contacto-directo" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-slate-950 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-softopia-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-softopia-orange/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side: Guarantees */}
            <div className="space-y-4">
              <span className="bg-softopia-cyan/15 text-softopia-cyan text-[10px] font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider">
                SOPORTE DE ALTA CALIDAD
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight leading-snug">
                ¿Listo para simplificar tus finanzas y aumentar ventas?
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                Completa tus datos comerciales y me pondré en contacto contigo directamente. Si prefieres rapidez, puedes cotizar directamente arriba o iniciar un chat de soporte por WhatsApp.
              </p>

              <div className="space-y-3 pt-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center font-bold">✓</span>
                  <span>Alta comercial y asignación RUC en 24h.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center font-bold">✓</span>
                  <span>Migración Excel de inventario sin costo.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center font-bold">✓</span>
                  <span>Capacitaciones virtuales personalizadas.</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 animate-pop-in">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-white font-black text-sm">¡Consulta Recibida!</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    Hemos enviado tu requerimiento a nuestro equipo. Te contactaremos en minutos.
                  </p>
                  <div className="pt-2">
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 shadow-md"
                    >
                      <span>Priorizar por WhatsApp</span>
                      <i className="fa-solid fa-bolt text-xs"></i>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Tu nombre completo"
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-200 placeholder:text-slate-600 outline-none transition-all ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-softopia-cyan'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-rose-400 font-bold mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Celular o WhatsApp (Opcional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    maxLength={9}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, '').slice(0, 9));
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="Ejm: 987654321"
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-200 placeholder:text-slate-600 outline-none transition-all ${
                      errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-softopia-cyan'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-rose-400 font-bold mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="correo@empresa.com"
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-200 placeholder:text-slate-600 outline-none transition-all ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-softopia-cyan'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-rose-400 font-bold mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Mensaje o Consulta
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="¿Cuál es tu rubro de negocio o qué requieres controlar?"
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-200 placeholder:text-slate-600 outline-none transition-all ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-softopia-cyan'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[10px] text-rose-400 font-bold mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-softopia-blue hover:bg-softopia-blue-dark text-white text-xs font-black py-3 rounded-xl shadow-md cursor-pointer transition-all active:scale-98"
                  >
                    Enviar Consulta Comercial <i className="fa-solid fa-envelope ml-1"></i>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
