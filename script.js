const SOFTIBOT_FAQ = {
  main: [
    { text: "Sistemas de Ventas y Facturación", key: "sistemas", icon: "fa-file-invoice-dollar" },
    { text: "Instalación de Cámaras de Seguridad", key: "cameras", icon: "fa-video" },
    { text: "Licencias de Software Originales", key: "licensing", icon: "fa-key" },
    { text: "Contacto por WhatsApp", key: "whatsapp_general", icon: "fa-whatsapp" }
  ],
  sistemas: {
    question: "Qué deseas saber sobre nuestros Sistemas de Venta?",
    options: [
      { text: "Funciona en celulares o tablets?", key: "sistemas_devices", icon: "fa-mobile-screen-button" },
      { text: "Está homologado por SUNAT?", key: "sistemas_sunat", icon: "fa-building-columns" },
      { text: "Cuánto cuestan los planes?", key: "sistemas_pricing", icon: "fa-tags" },
      { text: "Volver atrás", key: "main", icon: "fa-arrow-left" }
    ]
  },
  cameras: {
    question: "Qué consulta tienes sobre las Cámaras de Seguridad?",
    options: [
      { text: "Qué marcas y modelos instalan?", key: "cameras_brands", icon: "fa-shield-halved" },
      { text: "Tiene monitoreo en vivo desde el celular?", key: "cameras_live", icon: "fa-circle-play" },
      { text: "Qué incluye el servicio?", key: "cameras_service", icon: "fa-screwdriver-wrench" },
      { text: "Volver atrás", key: "main", icon: "fa-arrow-left" }
    ]
  },
  licensing: {
    question: "Qué software o licencias necesitas?",
    options: [
      { text: "Venden antivirus o utilitarios?", key: "licensing_eset", icon: "fa-shield-virus" },
      { text: "Tienen Autodesk, Canva o Office?", key: "licensing_brands", icon: "fa-cubes" },
      { text: "Son originales con garantía?", key: "licensing_warranty", icon: "fa-award" },
      { text: "Volver atrás", key: "main", icon: "fa-arrow-left" }
    ]
  }
};

const SOFTIBOT_ANSWERS = {
  sistemas_devices: {
    answer: "Sí! Contamos con la App Softopia para Android. Sincroniza al instante tus ventas, inventarios y clientes en la nube. Trabaja sin interrupciones desde cualquier celular, tablet o laptop con soporte local en Talara.",
    waText: "Hola Softopia. Me interesa la App móvil del sistema de ventas para mi negocio."
  },
  sistemas_sunat: {
    answer: "Nuestros sistemas están completamente homologados y actualizados con las normativas SUNAT. Emite boletas, facturas, notas de crédito y guías de remisión con firma digital segura en segundos.",
    waText: "Hola Softopia. Quisiera cotizar el sistema de facturación electrónica homologado por SUNAT."
  },
  sistemas_pricing: {
    answer: "Tenemos planes desde S/ 50 al mes para emprendedores. Si eliges el pago anual, obtienes 20% de descuento automático y el certificado digital SUNAT gratis por un año.",
    waText: "Hola Softopia. Me gustaría recibir una cotización de planes anuales y mensuales."
  },
  cameras_brands: {
    answer: "Instalamos marcas líderes mundiales como HIKVISION, IMOU y EZVIZ. Contamos con cámaras tipo Domo, Bala (bullet), PTZ de largo alcance y cámaras Wi-Fi con audio bidireccional de alta resolución.",
    waText: "Hola Softopia. Deseo cotizar la instalación de cámaras de seguridad en mi local."
  },
  cameras_live: {
    answer: "Sí! Todo el sistema cuenta con visión nocturna infrarroja y alertas automáticas por detección de movimiento en tu celular. Podrás ver y escuchar tu negocio en vivo desde cualquier parte del mundo.",
    waText: "Hola Softopia. Quisiera información sobre la visualización en vivo de cámaras de seguridad remotas."
  },
  cameras_service: {
    answer: "Brindamos un servicio completo llave en mano: levantamiento técnico, cableado profesional estructurado, configuración de visualización remota en tus dispositivos móviles, y garantía real presencial.",
    waText: "Hola Softopia. Necesito un servicio completo de instalación técnica de cámaras de seguridad."
  },
  licensing_eset: {
    answer: "Manejamos el mejor antivirus del mercado: ESET NOD32 Antivirus original. Brinda máxima protección liviana inteligente por 1, 2 o 3 años con garantía directa del fabricante.",
    waText: "Hola Softopia. Quisiera cotizar licencias originales de ESET NOD32 Antivirus."
  },
  licensing_brands: {
    answer: "Comercializamos licencias de Autodesk All Apps (AutoCAD, Revit, Inventor), Canva Pro Académico por 2 años, y Microsoft 365 (Word, Excel, OneDrive de 1TB). Entrega digital inmediata con soporte total de instalación.",
    waText: "Hola Softopia. Deseo cotizar licencias de Autodesk, Canva o Microsoft 365."
  },
  licensing_warranty: {
    answer: "Todas nuestras licencias son 100% originales con descarga desde portales oficiales. Te brindamos soporte personalizado continuo para la correcta instalación y activación en tus equipos.",
    waText: "Hola Softopia. Quiero validar la garantía de las licencias de software originales."
  }
};

let billingMode = 'monthly';
let selectedPlanDetails = null;

document.addEventListener('DOMContentLoaded', () => {
  setupHeaderScroll();
  setupMobileDrawer();
  setupMascotTriggers();
  setupBillingCycleToggler();
  setupPricingPlanBefriendQuotes();
  setupContactFormHandler();
  setupSoftiBot();
});

function setupHeaderScroll() {
  const header = document.getElementById('app-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      header.classList.remove('py-4');
      header.classList.add('py-2.5');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      header.classList.add('py-4');
      header.classList.remove('py-2.5');
    }
  });
}

function setupMobileDrawer() {
  const btn = document.getElementById('mobile-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    drawer.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    drawer.classList.add('hidden');
  });

  const links = drawer.querySelectorAll('.mobile-nav-link');
  links.forEach(lnk => {
    lnk.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

function updateMascotSpeech(text) {
  const speechBubble = document.getElementById('speech-bubble');
  if (speechBubble) {
    speechBubble.classList.add('opacity-0');
    setTimeout(() => {
      speechBubble.innerHTML = text;
      speechBubble.classList.remove('opacity-0');
    }, 150);
  }
}

function setupMascotTriggers() {
  const tabFaq = document.getElementById('mascot-tab-faq');
  const tabQuote = document.getElementById('mascot-tab-quote');
  const faqView = document.getElementById('mascot-faq-view');
  const quoteView = document.getElementById('mascot-quote-view');

  // Steps elements
  const step1 = document.getElementById('quote-step-1');
  const step2 = document.getElementById('quote-step-2');
  const step3 = document.getElementById('quote-step-3');

  // Lead State
  let selectedNiche = '';
  let customerName = '';
  let customerPhone = '';

  // Tab switcher interactions
  if (tabFaq && tabQuote && faqView && quoteView) {
    tabFaq.addEventListener('click', () => {
      // Style active tab
      tabFaq.className = 'flex-1 py-2 px-2.5 text-[10.5px] font-black rounded-xl bg-white text-softopia-blue shadow-xs border border-slate-200/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer';
      tabQuote.className = 'flex-1 py-2 px-2.5 text-[10.5px] font-black rounded-xl text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer';
      
      // Swap panels
      faqView.classList.remove('hidden');
      quoteView.classList.add('hidden');

      // Sync speech
      updateMascotSpeech('<i class="fa-solid fa-robot text-softopia-blue mr-1.5"></i> Hola. Soy Softi. Dale clic a mis módulos de abajo o agrega productos al Punto de Venta (POS) interactivo para probar el sistema.');
    });

    tabQuote.addEventListener('click', () => {
      // Style active tab
      tabQuote.className = 'flex-1 py-2 px-2.5 text-[10.5px] font-black rounded-xl bg-white text-softopia-blue shadow-xs border border-slate-200/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer';
      tabFaq.className = 'flex-1 py-2 px-2.5 text-[10.5px] font-black rounded-xl text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer';

      // Swap panels
      faqView.classList.add('hidden');
      quoteView.classList.remove('hidden');

      // Initialize form steps
      resetQuoteForm();
    });
  }

  function resetQuoteForm() {
    selectedNiche = '';
    
    // Clear step inputs and error indicator state
    const nameInput = document.getElementById('quote-name');
    const phoneInput = document.getElementById('quote-phone');
    if (nameInput) {
      nameInput.value = '';
      nameInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
    }
    if (phoneInput) {
      phoneInput.value = '';
      phoneInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
    }

    const nameErr = document.getElementById('quote-name-err');
    const phoneErr = document.getElementById('quote-phone-err');
    if (nameErr) nameErr.classList.add('hidden');
    if (phoneErr) phoneErr.classList.add('hidden');

    if (step1 && step2 && step3) {
      step1.classList.remove('hidden');
      step2.classList.add('hidden');
      step3.classList.add('hidden');
    }

    updateMascotSpeech('⚡ <b>¡Excelente decisión!</b> Vamos a calcular la propuesta perfecta para tu negocio. Paso 1: <b>¿Cuál es el rubro principal de tu empresa?</b>');
  }

  // Live validation formatting and event listeners
  const nameInput = document.getElementById('quote-name');
  const phoneInput = document.getElementById('quote-phone');
  const nameErr = document.getElementById('quote-name-err');
  const phoneErr = document.getElementById('quote-phone-err');

  if (phoneInput) {
    // Force only digits (numbers 0-9)
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '');
      
      // Auto clear error state when correctly formatted
      if (phoneInput.value.length === 9 && phoneInput.value.startsWith('9')) {
        phoneInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
        if (phoneErr) phoneErr.classList.add('hidden');
      }
    });

    phoneInput.addEventListener('focus', () => {
      phoneInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
      if (phoneErr) phoneErr.classList.add('hidden');
    });
  }

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        nameInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
        if (nameErr) nameErr.classList.add('hidden');
      }
    });

    nameInput.addEventListener('focus', () => {
      nameInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
      if (nameErr) nameErr.classList.add('hidden');
    });
  }

  // Step 1: Select Rubro
  const nicheBtns = document.querySelectorAll('.niche-opt-btn');
  nicheBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedNiche = btn.getAttribute('data-niche') || '';
      
      if (step1 && step2) {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
      }

      updateMascotSpeech(`🏢 ¡Magnífica elección! Un sistema optimizado para <b>${selectedNiche}</b> aumentará tus ganancias y control. Paso 2: <b>Ingresa tu nombre y celular para enviarte la propuesta.</b>`);
    });
  });

  // Step 2 Back Button
  const backBtn = document.getElementById('quote-back-to-1');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (step1 && step2) {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
      }
      updateMascotSpeech('⚡ Paso 1: <b>¿Cuál es el rubro principal de tu negocio en Talara?</b> Elige una opción abajo.');
    });
  }

  // Step 2 Submit with rigorous visual validations and friendly warnings
  const submitLead = document.getElementById('quote-submit-lead');
  if (submitLead) {
    submitLead.addEventListener('click', () => {
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const phoneVal = phoneInput ? phoneInput.value.trim() : '';

      let hasError = false;

      // Clean outstanding errors first
      if (nameInput) nameInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
      if (phoneInput) phoneInput.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
      if (nameErr) nameErr.classList.add('hidden');
      if (phoneErr) phoneErr.classList.add('hidden');

      // Assert Name length
      if (!nameVal || nameVal.length < 2) {
        if (nameInput) {
          nameInput.classList.add('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
        }
        if (nameErr) {
          nameErr.classList.remove('hidden');
        }
        hasError = true;
      }

      // Assert valid Peruvian phone/WhatsApp (9 digits starting with 9)
      const isPhoneValid = /^[9]\d{8}$/.test(phoneVal);
      if (!phoneVal || !isPhoneValid) {
        if (phoneInput) {
          phoneInput.classList.add('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-100');
        }
        if (phoneErr) {
          phoneErr.classList.remove('hidden');
        }
        hasError = true;
      }

      if (hasError) {
        updateMascotSpeech('⚠️ <b>¡Un momento, por favor!</b> Necesito tu nombre y un WhatsApp válido para cotizar y reservar tu demo gratis en el sistema.');
        return;
      }

      customerName = nameVal;
      customerPhone = phoneVal;

      if (step2 && step3) {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
      }

      // Dynamic Success proposal render
      const proposalDesc = document.getElementById('quote-proposal-desc');
      if (proposalDesc) {
        proposalDesc.innerHTML = `Estimado(a) <b>${customerName}</b>, hemos reservado un cupo con el <b>Plan Especial de Softopia</b> adaptado para <b>${selectedNiche}</b>.`;
      }

      // Dynamically bake custom high quality WhatsApp referral link
      const waBtn = document.getElementById('quote-final-wa-btn');
      if (waBtn) {
        const queryText = `¡Hola Softopia Perú! Mi nombre es ${customerName}, tengo un negocio del rubro ${selectedNiche} en el norte y deseo reclamar mi demo gratis, asesoramiento personalizado y asegurar el beneficio del certificado SUNAT gratis por 1 año. Mi número de contacto de WhatsApp registrado es ${customerPhone}.`;
        waBtn.href = `https://wa.me/51923992629?text=${encodeURIComponent(queryText)}`;
      }

      updateMascotSpeech(`🎉 <b>¡Todo listo, ${customerName}!</b> He guardado tu simulación y reserva. Dale clic abajo al botón verde para reclamar tu demo en vivo por WhatsApp al instante.`);
    });
  }

  // Step 3 Reset / Restart
  const restartBtn = document.getElementById('quote-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', resetQuoteForm);
  }

  // Original Mascot quick FAQ buttons logic
  const mascotPreBtns = document.querySelectorAll('.mascot-pre-btn');
  mascotPreBtns.forEach(el => {
    el.addEventListener('click', () => {
      const speech = el.getAttribute('data-speech');
      if (speech) {
        let cleanSpeech = speech
          .replace(/🏪/g, '<i class="fa-solid fa-shop text-softopia-blue mr-1.5"></i>')
          .replace(/🔨/g, '<i class="fa-solid fa-hammer text-softopia-orange mr-1.5"></i>')
          .replace(/🍔/g, '<i class="fa-solid fa-bowl-food text-softopia-green mr-1.5"></i>')
          .replace(/⚡/g, '<i class="fa-solid fa-bolt text-softopia-cyan mr-1.5"></i>')
          .replace(/📊/g, '<i class="fa-solid fa-chart-simple text-softopia-blue mr-1.5"></i>')
          .replace(/✅/g, '<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i>')
          .replace(/❓/g, '<i class="fa-solid fa-circle-question text-softopia-blue mr-1.5"></i>');
        updateMascotSpeech(cleanSpeech);
      }
    });
  });

  const moduleCards = document.querySelectorAll('.module-card');
  moduleCards.forEach(card => {
    card.addEventListener('click', () => {
      const speech = card.getAttribute('data-speech');
      if (speech) {
        let cleanSpeech = speech
          .replace(/🏪/g, '<i class="fa-solid fa-shop text-softopia-blue mr-1.5"></i>')
          .replace(/🔨/g, '<i class="fa-solid fa-hammer text-softopia-orange mr-1.5"></i>')
          .replace(/🍔/g, '<i class="fa-solid fa-bowl-food text-softopia-green mr-1.5"></i>')
          .replace(/⚡/g, '<i class="fa-solid fa-bolt text-softopia-cyan mr-1.5"></i>')
          .replace(/📊/g, '<i class="fa-solid fa-chart-simple text-softopia-blue mr-1.5"></i>')
          .replace(/✅/g, '<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i>')
          .replace(/❓/g, '<i class="fa-solid fa-circle-question text-softopia-blue mr-1.5"></i>');
        
        // Auto switch back to FAQ/Consultar view if modules are clicked
        if (faqView && faqView.classList.contains('hidden') && tabFaq) {
          tabFaq.click();
        }

        updateMascotSpeech(cleanSpeech);
        card.classList.add('scale-95');
        setTimeout(() => card.classList.remove('scale-95'), 120);

        const mascotBox = document.getElementById('speech-bubble');
        if (mascotBox && window.innerWidth < 768) {
          mascotBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
}

function setupSoftiBot() {
  const launcher = document.getElementById('softibot-launcher');
  const windowBox = document.getElementById('softibot-window');
  const closeBtn = document.getElementById('close-softibot');
  const messagesWrapper = document.getElementById('softibot-messages-wrapper');
  const optionsPanel = document.getElementById('softibot-options-panel');
  const directWaBtn = document.getElementById('softibot-direct-wa');
  const tooltip = document.getElementById('softibot-tooltip');
  const closeTooltipBtn = document.getElementById('close-softibot-tooltip');
  const inputForm = document.getElementById('softibot-input-form');
  const textInput = document.getElementById('softibot-text-input');

  if (!launcher || !windowBox) return;

  // Tooltip interaction
  if (tooltip) {
    // Dismiss after 15 seconds of page load if not closed manually
    setTimeout(() => {
      if (tooltip && !tooltip.classList.contains('hidden') && windowBox.classList.contains('hidden')) {
        tooltip.classList.add('transition-all', 'duration-500', 'opacity-0', 'scale-90');
        setTimeout(() => tooltip.classList.add('hidden'), 500);
      }
    }, 15000);

    tooltip.addEventListener('click', (e) => {
      if (e.target.closest('#close-softibot-tooltip')) return;
      tooltip.classList.add('hidden');
      openBotWindow();
    });

    closeTooltipBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      tooltip.classList.add('transition-all', 'duration-500', 'opacity-0', 'scale-90');
      setTimeout(() => tooltip.classList.add('hidden'), 500);
    });
  }

  launcher.addEventListener('click', () => {
    const isHidden = windowBox.classList.contains('hidden');
    if (isHidden) {
      if (tooltip) tooltip.classList.add('hidden');
      openBotWindow();
    } else {
      closeBotWindow();
    }
  });

  closeBtn?.addEventListener('click', closeBotWindow);

  function openBotWindow() {
    windowBox.classList.remove('hidden');
    launcher.classList.remove('animate-indicator-pulse'); 
    setTimeout(() => {
      windowBox.classList.remove('scale-95', 'opacity-0');
      windowBox.classList.add('scale-100', 'opacity-100');
    }, 50);
    renderBotMenu('main');
  }

  function closeBotWindow() {
    windowBox.classList.remove('scale-100', 'opacity-100');
    windowBox.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      windowBox.classList.add('hidden');
      launcher.classList.add('animate-indicator-pulse');
    }, 300);
  }

  function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'self-end bg-softopia-blue text-white text-xs font-semibold px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] leading-relaxed shadow-sm animate-message-in';
    div.textContent = text;
    messagesWrapper.appendChild(div);
    scrollToBottom();
  }

  function appendBotMessage(text, delayMs = 0) {
    const div = document.createElement('div');
    div.className = 'self-start bg-white border border-slate-205 text-slate-850 text-xs font-medium px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed shadow-xs animate-message-in';
    if (delayMs > 0) {
      div.style.animationDelay = `${delayMs}ms`;
    }
    
    if (text.includes('<i') || text.includes('<b>')) {
      div.innerHTML = text;
    } else {
      div.textContent = text;
    }
    
    messagesWrapper.appendChild(div);
    scrollToBottom();
  }

  // Double scroll height safety helper
  function scrollToBottom() {
    setTimeout(() => {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }, 50);
  }

  function appendTypingIndicator() {
    const div = document.createElement('div');
    div.id = 'softibot-typing';
    div.className = 'self-start bg-white border border-slate-150 text-slate-400 text-xs font-medium px-4 py-2.5 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-1.5 animate-message-in';
    div.innerHTML = `
      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
    `;
    messagesWrapper.appendChild(div);
    scrollToBottom();

    const statusEl = document.getElementById('softibot-header-status');
    if (statusEl) {
      statusEl.textContent = 'Escribiendo respuesta...';
      statusEl.className = 'text-[9.5px] text-emerald-400 font-extrabold tracking-wide uppercase mt-1 block italic animate-pulse';
    }
  }

  function removeTypingIndicator() {
    const ind = document.getElementById('softibot-typing');
    ind?.remove();

    const statusEl = document.getElementById('softibot-header-status');
    if (statusEl) {
      statusEl.textContent = 'Asistente Virtual Activo';
      statusEl.className = 'text-[9.5px] text-emerald-400 font-extrabold tracking-wide uppercase mt-1 block';
    }
  }

  function renderBotMenu(stateKey) {
    optionsPanel.innerHTML = '';

    if (stateKey === 'main') {
      SOFTIBOT_FAQ.main.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left bg-slate-50 hover:bg-softopia-blue/5 border border-slate-150 hover:border-softopia-blue/50 p-2.5 rounded-xl text-xs font-bold text-slate-800 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.01] hover:shadow-xs active:scale-98 animate-pop-in';
        btn.style.animationDelay = `${index * 0.05}s`;
        
        let iconMarkup = `<i class="fa-solid ${opt.icon} text-softopia-blue text-xs shrink-0"></i>`;
        if (opt.key === 'whatsapp_general') {
          iconMarkup = `<i class="fa-brands ${opt.icon} text-emerald-500 text-xs shrink-0"></i>`;
        }

        btn.innerHTML = `${iconMarkup}<span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
          handleMenuClick(opt);
        });
        optionsPanel.appendChild(btn);
      });
    } else {
      const category = SOFTIBOT_FAQ[stateKey];
      if (!category) return;

      const qDiv = document.createElement('div');
      qDiv.className = 'text-[10px] text-slate-500 font-black uppercase tracking-wider px-1 pb-1 flex items-center gap-1.5 animate-pop-in';
      qDiv.innerHTML = `<i class="fa-solid fa-circle-question text-softopia-blue text-xs shrink-0"></i><span>Opciones habituales:</span>`;
      optionsPanel.appendChild(qDiv);

      category.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left bg-slate-50 hover:bg-softopia-blue/5 border border-slate-150 hover:border-softopia-blue/50 p-2 rounded-xl text-[11px] font-bold text-slate-850 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.01] hover:shadow-xs active:scale-98 animate-pop-in';
        btn.style.animationDelay = `${(index + 1) * 0.05}s`;
        
        let iconClass = 'fa-solid';
        btn.innerHTML = `<i class="${iconClass} ${opt.icon} text-slate-500 text-[11px] shrink-0"></i><span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
          handleMenuClick(opt);
        });
        optionsPanel.appendChild(btn);
      });
    }
  }

  function handleMenuClick(opt) {
    appendUserMessage(opt.text);

    if (opt.key === 'main') {
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        appendBotMessage('Qué consulta principal o servicio deseas explorar hoy?');
        renderBotMenu('main');
      }, 500);
      return;
    }

    if (opt.key === 'whatsapp_general') {
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        appendBotMessage('Redirigiendo a un especialista calificado en Talara por WhatsApp para brindarte atención directa e inmediata...');
        window.open('https://wa.me/51923992629?text=Hola%20Softopia%2520Perú.%20Vengo%20del%20asistente%20virtual%20y%20necesito%20atención%20personalizada.', '_blank');
        renderBotMenu('main');
      }, 600);
      return;
    }

    if (opt.key === 'sistemas' || opt.key === 'cameras' || opt.key === 'licensing') {
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        const cat = SOFTIBOT_FAQ[opt.key];
        appendBotMessage(cat.question);
        renderBotMenu(opt.key);
      }, 550);
      return;
    }

    const ansData = SOFTIBOT_ANSWERS[opt.key];
    if (ansData) {
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        appendBotMessage(ansData.answer);

        optionsPanel.innerHTML = '';

        const backBtn = document.createElement('button');
        backBtn.className = 'w-full text-left bg-slate-50 hover:bg-softopia-blue/5 border border-slate-150 hover:border-softopia-blue/50 p-2.5 rounded-xl text-xs font-bold text-slate-800 transition-all flex items-center gap-2 cursor-pointer animate-pop-in';
        backBtn.innerHTML = `<i class="fa-solid fa-arrow-left text-slate-500 text-xs shrink-0"></i><span>Volver al menú de consultas</span>`;
        backBtn.addEventListener('click', () => {
          appendUserMessage('Volver al menú');
          appendTypingIndicator();
          setTimeout(() => {
            removeTypingIndicator();
            const parentKey = opt.key.split('_')[0];
            appendBotMessage(SOFTIBOT_FAQ[parentKey].question);
            renderBotMenu(parentKey);
          }, 450);
        });

        const waLink = document.createElement('a');
        waLink.target = '_blank';
        waLink.rel = 'noreferrer';
        waLink.href = `https://wa.me/51923992629?text=${encodeURIComponent(ansData.waText)}`;
        waLink.className = 'w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-sm hover:scale-[1.01] active:scale-98 animate-pop-in';
        waLink.innerHTML = `<i class="fa-brands fa-whatsapp text-white text-sm"></i><span>Consultar esto por WhatsApp</span>`;

        optionsPanel.appendChild(waLink);
        optionsPanel.appendChild(backBtn);

        directWaBtn.href = `https://wa.me/51923992629?text=${encodeURIComponent(ansData.waText)}`;

      }, 650);
    }
  }

  // Keyboard text query handler with keywords matching
  if (inputForm) {
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawText = textInput.value;
      if (!rawText.trim()) return;

      appendUserMessage(rawText);
      textInput.value = '';

      // Normalize search string
      const clean = rawText.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

      appendTypingIndicator();

      setTimeout(() => {
        removeTypingIndicator();

        // 1. Matches cameras and security monitoring
        if (clean.includes('camara') || clean.includes('seguridad') || clean.includes('vigilancia') || clean.includes('hikvision') || clean.includes('imou') || clean.includes('ezviz') || clean.includes('grabar') || clean.includes('video') || clean.includes('monitoreo')) {
          if (clean.includes('marca') || clean.includes('modelo')) {
            appendBotMessage(SOFTIBOT_ANSWERS.cameras_brands.answer);
            renderAfterAnswerMenu('cameras', 'cameras_brands');
          } else if (clean.includes('celular') || clean.includes('monitoreo') || clean.includes('en vivo') || clean.includes('ver') || clean.includes('telefono')) {
            appendBotMessage(SOFTIBOT_ANSWERS.cameras_live.answer);
            renderAfterAnswerMenu('cameras', 'cameras_live');
          } else if (clean.includes('servicio') || clean.includes('incluye') || clean.includes('soporte') || clean.includes('tecnico') || clean.includes('instalacion')) {
            appendBotMessage(SOFTIBOT_ANSWERS.cameras_service.answer);
            renderAfterAnswerMenu('cameras', 'cameras_service');
          } else {
            appendBotMessage("Ofrecemos un servicio premium llave en mano de Cámaras de Seguridad en todo Talara. Trabajamos con marcas como HIKVISION, IMOU y EZVIZ. ¿Qué aspecto te gustaría consultar hoy?");
            renderBotMenu('cameras');
          }
        }
        // 2. Matches system prices and plans
        else if (clean.includes('precio') || clean.includes('costo') || clean.includes('plan') || clean.includes('planes') || clean.includes('cotiza') || clean.includes('pagar') || clean.includes('tarifa') || clean.includes('suscripcion') || clean.includes('soles') || clean.includes('descuento') || clean.includes('oferta') || clean.includes('cuanto cuesta') || clean.includes('valor')) {
          appendBotMessage(SOFTIBOT_ANSWERS.sistemas_pricing.answer);
          renderAfterAnswerMenu('sistemas', 'sistemas_pricing');
        }
        // 3. Matches app device and tablet/mobile phone synchronization
        else if (clean.includes('celular') || clean.includes('tablet') || clean.includes('android') || clean.includes('app') || clean.includes('movil') || clean.includes('móvil') || clean.includes('dispositivo')) {
          appendBotMessage(SOFTIBOT_ANSWERS.sistemas_devices.answer);
          renderAfterAnswerMenu('sistemas', 'sistemas_devices');
        }
        // 4. Matches SUNAT fiscal and receipts
        else if (clean.includes('sunat') || clean.includes('boleta') || clean.includes('factura') || clean.includes('tribut') || clean.includes('homologado') || clean.includes('emite') || clean.includes('comprobante')) {
          appendBotMessage(SOFTIBOT_ANSWERS.sistemas_sunat.answer);
          renderAfterAnswerMenu('sistemas', 'sistemas_sunat');
        }
        // 5. Matches software licensing and antivirus
        else if (clean.includes('licencia') || clean.includes('original') || clean.includes('office') || clean.includes('eset') || clean.includes('nod') || clean.includes('antivirus') || clean.includes('canva') || clean.includes('autodesk') || clean.includes('microsoft') || clean.includes('word') || clean.includes('excel') || clean.includes('garantia') || clean.includes('activar') || clean.includes('autocad')) {
          if (clean.includes('antivirus') || clean.includes('eset') || clean.includes('nod')) {
            appendBotMessage(SOFTIBOT_ANSWERS.licensing_eset.answer);
            renderAfterAnswerMenu('licensing', 'licensing_eset');
          } else if (clean.includes('office') || clean.includes('canva') || clean.includes('autodesk') || clean.includes('microsoft') || clean.includes('autocad')) {
            appendBotMessage(SOFTIBOT_ANSWERS.licensing_brands.answer);
            renderAfterAnswerMenu('licensing', 'licensing_brands');
          } else {
            appendBotMessage("Comercializamos licencias de software 100% originales con garantía: ESET NOD32, Windows/Office, Canva Pro y Autodesk. ¿Cuál necesitas activar hoy?");
            renderBotMenu('licensing');
          }
        }
        // 6. Matches contact info, office, location and phone
        else if (clean.includes('contacto') || clean.includes('direccion') || clean.includes('donde') || clean.includes('telefono') || clean.includes('como llegar') || clean.includes('talara') || clean.includes('whatsapp') || clean.includes('oficina') || clean.includes('ubica') || clean.includes('cel') || clean.includes('ubi') || clean.includes('lugar')) {
          appendBotMessage("Nuestra oficina técnica se encuentra en <b>Av. Grau 450 - Talara, Piura</b>. Brindamos soporte local y remoto rápido en Talara, Los Órganos, Máncora y todo Piura. Puedes llamarnos o escribirnos por WhatsApp directo al <b>+51 923 992 629</b>.");
          renderBotMenu('main');
        }
        // 7. Matches greetings
        else if (clean.includes('hola') || clean.includes('buen') || clean.includes('saludo') || clean.includes('hey') || clean.includes('tal') || clean.includes('hi') || clean.includes('asistente') || clean.includes('bot')) {
          appendBotMessage("¡Hola! Qué gusto saludarte. Soy SoftiBot, el chatbot especialista de Softopia. ¿Qué servicio te gustaría cotizar o conocer detalladamente hoy?");
          renderBotMenu('main');
        }
        // 8. Custom query match fallback
        else {
          appendBotMessage("¡Qué gran pregunta! 🧠 Justo ahora no cuento con una guía automática para esa consulta específica, pero cuéntame: ¿Deseas conversar directamente con un programador por WhatsApp o prefieres explorar uno de nuestros rubros clave?");
          renderBotMenu('main');
        }

      }, 650);
    });
  }

  function renderAfterAnswerMenu(parentMenuKey, ansKey) {
    optionsPanel.innerHTML = '';
    const ansData = SOFTIBOT_ANSWERS[ansKey];
    if (!ansData) return;

    const backBtn = document.createElement('button');
    backBtn.className = 'w-full text-left bg-slate-50 hover:bg-softopia-blue/5 border border-slate-150 hover:border-softopia-blue/50 p-2.5 rounded-xl text-xs font-bold text-slate-800 transition-all flex items-center gap-2 cursor-pointer animate-pop-in';
    backBtn.innerHTML = `<i class="fa-solid fa-arrow-left text-slate-500 text-xs shrink-0"></i><span>Volver al menú de consultas</span>`;
    backBtn.addEventListener('click', () => {
      appendUserMessage('Volver al menú');
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        appendBotMessage(SOFTIBOT_FAQ[parentMenuKey].question);
        renderBotMenu(parentMenuKey);
      }, 450);
    });

    const waLink = document.createElement('a');
    waLink.target = '_blank';
    waLink.rel = 'noreferrer';
    waLink.href = `https://wa.me/51923992629?text=${encodeURIComponent(ansData.waText)}`;
    waLink.className = 'w-full text-center bg-emerald-500 hover:bg-emerald-650 text-white p-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-sm hover:scale-[1.01] active:scale-98 animate-pop-in';
    waLink.innerHTML = `<i class="fa-brands fa-whatsapp text-white text-sm"></i><span>Consultar esto por WhatsApp</span>`;

    optionsPanel.appendChild(waLink);
    optionsPanel.appendChild(backBtn);

    directWaBtn.href = `https://wa.me/51923992629?text=${encodeURIComponent(ansData.waText)}`;
  }
}

function setupBillingCycleToggler() {
  const monthlyBtn = document.getElementById('billing-monthly-btn');
  const yearlyBtn = document.getElementById('billing-yearly-btn');

  if (!monthlyBtn || !yearlyBtn) return;

  monthlyBtn.addEventListener('click', () => {
    billingMode = 'monthly';
    monthlyBtn.classList.add('bg-softopia-blue', 'text-white', 'shadow-md');
    monthlyBtn.classList.remove('text-slate-500', 'hover:text-slate-800');
    yearlyBtn.classList.remove('bg-softopia-blue', 'text-white', 'shadow-md');
    yearlyBtn.classList.add('text-slate-500', 'hover:text-slate-800');
    updatePlansPriceRendering();
    updateMascotSpeech('<i class="fa-solid fa-calendar text-softopia-blue mr-1.5"></i> Cambiaste el cotizador a Pago Mensual estándar. Puedes cambiar al ciclo anual para ahorrar 20% de descuento.');
  });

  yearlyBtn.addEventListener('click', () => {
    billingMode = 'yearly';
    yearlyBtn.classList.add('bg-softopia-blue', 'text-white', 'shadow-md');
    yearlyBtn.classList.remove('text-slate-500', 'hover:text-slate-800');
    monthlyBtn.classList.remove('bg-softopia-blue', 'text-white', 'shadow-md');
    monthlyBtn.classList.add('text-slate-500', 'hover:text-slate-800');
    updatePlansPriceRendering();
    updateMascotSpeech('<i class="fa-solid fa-tag text-emerald-500 mr-1.5 animate-bounce"></i> Ahorro Activado. Al cambiar al ciclo de Pago Anual, recibes un 20% de descuento y la firma digital SUNAT gratis por un año.');
  });
}

function updatePlansPriceRendering() {
  const pricesD = document.querySelectorAll('.pricing-val');
  const timeLabels = document.querySelectorAll('.pricing-time');

  pricesD.forEach(priceSpan => {
    const baseP = parseFloat(priceSpan.getAttribute('data-base') || '0');
    let displayedPrice = baseP;

    if (billingMode === 'yearly') {
      displayedPrice = baseP * 0.8;
    }

    priceSpan.textContent = displayedPrice.toFixed(0);
  });

  timeLabels.forEach(label => {
    label.textContent = billingMode === 'yearly' ? '/ al mes (pago anual)' : '/ mes';
  });
}

function setupPricingPlanBefriendQuotes() {
  const quoteBtns = document.querySelectorAll('.pricing-quote-btn');
  const modal = document.getElementById('plan-modal-container');
  const closeModal = document.getElementById('close-plan-modal');
  const modalName = document.getElementById('plan-modal-name');
  const modalRate = document.getElementById('plan-modal-rate');
  const modalDiscountTag = document.getElementById('plan-modal-discount-tag');
  const modalRibbon = document.getElementById('plan-modal-ribbon');

  quoteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const planName = btn.getAttribute('data-plan') || 'PLAN BASE';
      
      let baseCost = 50;
      let colorClass = '#0f46bd';

      if (planName.includes('CRECE')) {
        baseCost = 80;
        colorClass = '#24b248';
      } else if (planName.includes('EMPRENDEDOR')) {
        baseCost = 130;
        colorClass = '#f04e23';
      } else if (planName.includes('EMPRESARIAL')) {
        baseCost = 180;
        colorClass = '#701ab0';
      } else if (planName.includes('PREMIUM')) {
        baseCost = 250;
        colorClass = '#ffab00';
      }

      selectedPlanDetails = {
        name: planName,
        basePrice: baseCost,
        color: colorClass
      };

      if (modalName) {
        modalName.textContent = planName;
        modalName.style.color = colorClass;
      }

      if (modalRibbon) {
        modalRibbon.style.backgroundColor = colorClass;
      }

      const calculatedFinalCost = billingMode === 'yearly' ? baseCost * 0.8 : baseCost;
      if (modalRate) {
        modalRate.textContent = `S/ ${calculatedFinalCost.toFixed(0)}`;
      }

      if (modalDiscountTag) {
        if (billingMode === 'yearly') {
          modalDiscountTag.classList.remove('hidden');
        } else {
          modalDiscountTag.classList.add('hidden');
        }
      }

      if (modal) modal.classList.remove('hidden');
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  const planForm = document.getElementById('plan-modal-form');
  if (planForm) {
    planForm.setAttribute('novalidate', 'true');
    
    const fields = ['plan-client-name', 'plan-client-company', 'plan-client-business'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => clearError(el, 'light'));
        el.addEventListener('change', () => clearError(el, 'light'));
      }
    });

    planForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!selectedPlanDetails) return;

      if (!validatePlanModalForm()) {
        const firstError = planForm.querySelector('.custom-error-msg');
        if (firstError) {
          const inp = firstError.parentElement.querySelector('input, select');
          if (inp) inp.focus();
        }
        return;
      }

      const clientName = document.getElementById('plan-client-name').value;
      const clientCompany = document.getElementById('plan-client-company').value;
      const clientBusiness = document.getElementById('plan-client-business').value;

      const planFinalCost = billingMode === 'yearly' ? selectedPlanDetails.basePrice * 0.8 : selectedPlanDetails.basePrice;
      const cycleText = billingMode === 'yearly' ? 'Anual (con 20% descuento y Certificado de Firma Gratis)' : 'Mensual estándar';

      const waMsg = `Hola Softopia Perú. Me contacto desde la web oficial de cotizaciones.\n\n*Datos Comerciales del Solicitante:*\n- *Nombre Completo:* ${clientName}\n- *Empresa / Negocio:* ${clientCompany}\n- *Giro de Negocio:* ${clientBusiness}\n\n*Plan de Interés Seleccionado:*\n- *Plan:* ${selectedPlanDetails.name}\n- *Ciclo:* ${cycleText}\n- *Precio Estimado:* S/ ${planFinalCost.toFixed(0)} al mes.\n\n_Deseo coordinar la demostración remota en vivo gratuita y dar de alta mi sistema._`;

      window.open(`https://wa.me/51923992629?text=${encodeURIComponent(waMsg)}`, '_blank');
      
      if (modal) modal.classList.add('hidden');

      updateMascotSpeech(`<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i> Estupendo ${clientName}. He estructurado tu cotización para el *${selectedPlanDetails.name}* y la he enviado mediante el webhook de WhatsApp seguro. Tu asesor estará contigo en minutos.`);
    });
  }
}

function setupContactFormHandler() {
  const form = document.getElementById('contact-form');
  const overlay = document.getElementById('contact-success-overlay');
  const overlayMsg = document.getElementById('contact-success-msg');

  if (!form) return;

  form.setAttribute('novalidate', 'true');

  const fields = ['sender-name', 'sender-phone', 'sender-email', 'sender-message'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => clearError(el, 'dark'));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateContactForm()) {
      const firstError = form.querySelector('.custom-error-msg');
      if (firstError) {
        const inp = firstError.parentElement.querySelector('input, textarea');
        if (inp) inp.focus();
      }
      return;
    }

    const name = document.getElementById('sender-name').value;
    const phone = document.getElementById('sender-phone').value;
    const email = document.getElementById('sender-email').value;

    if (overlay) {
      if (overlayMsg) {
        overlayMsg.textContent = `Hemos registrado la consulta para ${name} (${email}). Un especialista asignado de la zona se comunicará contigo vía telefónica o WhatsApp para coordinar tu asesoría.`;
      }
      overlay.classList.remove('hidden');
    }

    updateMascotSpeech(`<i class="fa-solid fa-envelope text-softopia-blue mr-1.5"></i> Excelente consulta ${name}. He procesado tu requerimiento de soporte técnico en nuestra cola centralizada de prioridades.`);
  });
}

function validateContactForm() {
  let isValid = true;

  const nameInput = document.getElementById('sender-name');
  const phoneInput = document.getElementById('sender-phone');
  const emailInput = document.getElementById('sender-email');
  const messageInput = document.getElementById('sender-message');

  const nameVal = nameInput.value.trim();
  if (!nameVal) {
    showError(nameInput, 'El nombre completo es requerido.', 'dark');
    isValid = false;
  } else if (nameVal.length < 3) {
    showError(nameInput, 'El nombre debe tener al menos 3 caracteres.', 'dark');
    isValid = false;
  } else if (/\d/.test(nameVal)) {
    showError(nameInput, 'El nombre no debe contener números.', 'dark');
    isValid = false;
  } else {
    clearError(nameInput, 'dark');
  }

  const phoneVal = phoneInput.value.trim();
  if (phoneVal) {
    if (!/^9\d{8}$/.test(phoneVal)) {
      showError(phoneInput, 'Ingresa un celular peruano válido de 9 dígitos (ej: 9XXXXXXXX).', 'dark');
      isValid = false;
    } else {
      clearError(phoneInput, 'dark');
    }
  } else {
    clearError(phoneInput, 'dark');
  }

  const emailVal = emailInput.value.trim();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailVal) {
    showError(emailInput, 'El correo electrónico es requerido.', 'dark');
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    showError(emailInput, 'Por favor ingresa un correo electrónico válido.', 'dark');
    isValid = false;
  } else {
    clearError(emailInput, 'dark');
  }

  const messageVal = messageInput.value.trim();
  if (!messageVal) {
    showError(messageInput, 'El mensaje es requerido.', 'dark');
    isValid = false;
  } else if (messageVal.length < 10) {
    showError(messageInput, 'Ingresa un poco más de detalle sobre tu consulta (mínimo 10 caracteres).', 'dark');
    isValid = false;
  } else {
    clearError(messageInput, 'dark');
  }

  return isValid;
}

function validatePlanModalForm() {
  let isValid = true;

  const nameInput = document.getElementById('plan-client-name');
  const companyInput = document.getElementById('plan-client-company');
  const businessInput = document.getElementById('plan-client-business');

  const nameVal = nameInput.value.trim();
  if (!nameVal) {
    showError(nameInput, 'Por favor ingresa tu nombre completo.', 'light');
    isValid = false;
  } else if (nameVal.length < 3) {
    showError(nameInput, 'El nombre debe tener al menos 3 caracteres.', 'light');
    isValid = false;
  } else if (/\d/.test(nameVal)) {
    showError(nameInput, 'El nombre no debe contener números.', 'light');
    isValid = false;
  } else {
    clearError(nameInput, 'light');
  }

  const companyVal = companyInput.value.trim();
  if (!companyVal) {
    showError(companyInput, 'El nombre de tu negocio o empresa es requerido.', 'light');
    isValid = false;
  } else if (companyVal.length < 2) {
    showError(companyInput, 'El nombre del negocio debe tener al menos 2 caracteres.', 'light');
    isValid = false;
  } else {
    clearError(companyInput, 'light');
  }

  const businessVal = businessInput.value;
  if (!businessVal) {
    showError(businessInput, 'Por favor selecciona el giro de tu negocio.', 'light');
    isValid = false;
  } else {
    clearError(businessInput, 'light');
  }

  return isValid;
}

function showError(inputElement, errorMessage, theme = 'light') {
  let errorDiv = inputElement.parentElement.querySelector('.custom-error-msg');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = `custom-error-msg text-[10.5px] font-bold mt-1.5 flex items-center gap-1.5 transition-all duration-200 ${theme === 'dark' ? 'text-rose-400' : 'text-rose-500'}`;
    errorDiv.innerHTML = `
      <span class="inline-flex items-center justify-center w-4 h-4 bg-red-100 text-red-600 rounded-full font-black text-[10px] shrink-0 select-none">!</span>
      <span class="error-text"></span>
    `;
    inputElement.parentElement.appendChild(errorDiv);
  }
  errorDiv.querySelector('.error-text').textContent = errorMessage;

  if (theme === 'dark') {
    inputElement.classList.add('border-rose-500', 'focus:border-rose-500');
    inputElement.classList.remove('border-slate-800', 'focus:border-softopia-cyan');
  } else {
    inputElement.classList.add('border-rose-500', 'focus:border-rose-500');
    inputElement.classList.remove('border-slate-200', 'focus:border-softopia-blue');
  }
}


function clearError(inputElement, theme = 'light') {
  const errorDiv = inputElement.parentElement.querySelector('.custom-error-msg');
  if (errorDiv) {
    errorDiv.remove();
  }

  if (theme === 'dark') {
    inputElement.classList.remove('border-rose-500', 'focus:border-rose-500');
    inputElement.classList.add('border-slate-800', 'focus:border-softopia-cyan');
  } else {
    inputElement.classList.remove('border-rose-500', 'focus:border-rose-500');
    inputElement.classList.add('border-slate-200', 'focus:border-softopia-blue');
  }
}
