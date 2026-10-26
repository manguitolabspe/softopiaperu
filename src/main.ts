/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Define standard types for POS
interface POSProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  unit: string;
}

interface CartItem {
  product: POSProduct;
  quantity: number;
}

// Product Database matching flyer and detailed categories
const CATEGORY_PRODUCTS: Record<string, POSProduct[]> = {
  minimarket: [
    { id: 'm1', name: 'Leche de Tarro Gloria', price: 4.30, stock: 45, category: 'Abarrotes', unit: 'Unid.' },
    { id: 'm2', name: 'Arroz Superior Costeño 1kg', price: 4.80, stock: 120, category: 'Abarrotes', unit: 'Kg.' },
    { id: 'm3', name: 'Aceite Vegetal Primor 1L', price: 9.50, stock: 32, category: 'Abarrotes', unit: 'Bot.' },
    { id: 'm4', name: 'Atún Real en Trozos', price: 5.90, stock: 80, category: 'Conservas', unit: 'Lata' },
    { id: 'm5', name: 'Gaseosa Inca Kola 1.5L', price: 6.50, stock: 61, category: 'Bebidas', unit: 'Bot.' },
    { id: 'm6', name: 'Detergente Bolívar 1kg', price: 11.20, stock: 24, category: 'Limpieza', unit: 'Bolsa' }
  ],
  ferreteria: [
    { id: 'f1', name: 'Martillo de Uña Tramontina', price: 24.90, stock: 15, category: 'Herramientas', unit: 'Unid.' },
    { id: 'f2', name: 'Pegamento PVC Oatey 1/4', price: 16.50, stock: 20, category: 'Gasfitería', unit: 'Envase' },
    { id: 'f3', name: 'Wincha Métrica Stanley 5m', price: 19.90, stock: 12, category: 'Medición', unit: 'Unid.' },
    { id: 'f4', name: 'Foco LED Halux 12W Aluro', price: 7.20, stock: 150, category: 'Electricidad', unit: 'Unid.' },
    { id: 'f5', name: 'Llave Francesa Stanley 10"', price: 34.90, stock: 10, category: 'Herramientas', unit: 'Unid.' },
    { id: 'f6', name: 'Tubo de Luz PVC Selva 3/4', price: 5.80, stock: 90, category: 'Materiales', unit: 'Tubo' }
  ],
  gastronomia: [
    { id: 'g1', name: 'Ceviche Mixto Clásico', price: 34.00, stock: 50, category: 'Mariscos', unit: 'Plato' },
    { id: 'g2', name: 'Lomo Saltado de Lomo Fino', price: 32.50, stock: 40, category: 'Fondos', unit: 'Plato' },
    { id: 'g3', name: 'Arroz con Mariscos Selecto', price: 29.90, stock: 35, category: 'Mariscos', unit: 'Plato' },
    { id: 'g4', name: 'Chicha Morada Orgánica 1L', price: 12.00, stock: 100, category: 'Bebidas', unit: 'Jarra' },
    { id: 'g5', name: 'Papa a la Huancaína Clásica', price: 15.00, stock: 60, category: 'Entradas', unit: 'Plato' },
    { id: 'g6', name: 'Pisco Sour Quebranta', price: 18.00, stock: 80, category: 'Tragos', unit: 'Copa' }
  ]
};

// Global Interactive States
let activeVerticalKey = 'minimarket';
let cartList: CartItem[] = [];
let billingMode: 'monthly' | 'yearly' = 'monthly';
let selectedPlanDetails: { name: string; basePrice: number; color: string } | null = null;

// Initialize when DOM Content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupHeaderScroll();
  setupMobileDrawer();
  setupMascotTriggers();
  setupPOSVerticalTabs();
  renderPOSCatalog();
  setupPOSCartActions();
  setupBillingCycleToggler();
  setupPricingPlanBefriendQuotes();
  setupContactFormHandler();
});

// 1. Header scroll visual behavior
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

// 2. Mobile Drawer Navigation toggle
function setupMobileDrawer() {
  const btn = document.getElementById('mobile-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    drawer.classList.toggle('hidden');
  });

  // Tap outside to close drawer
  document.addEventListener('click', () => {
    drawer.classList.add('hidden');
  });

  // Click any link in drawer closes it
  const links = drawer.querySelectorAll('.mobile-nav-link');
  links.forEach(lnk => {
    lnk.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

// 3. Speaking Mascot interactions
function updateMascotSpeech(text: string) {
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
  // Option buttons in mascot box
  const mascotPreBtns = document.querySelectorAll('.mascot-pre-btn');
  mascotPreBtns.forEach(el => {
    el.addEventListener('click', () => {
      const speech = el.getAttribute('data-speech');
      if (speech) updateMascotSpeech(speech);
    });
  });

  // Complete Modules grid click updates Mascot Advice
  const moduleCards = document.querySelectorAll('.module-card');
  moduleCards.forEach(card => {
    card.addEventListener('click', () => {
      const speech = card.getAttribute('data-speech');
      if (speech) {
        updateMascotSpeech(speech);
        // Add subtle animation scale to make it feel real
        card.classList.add('scale-95');
        setTimeout(() => card.classList.remove('scale-95'), 120);

        // Scroll to Mascot for clear readability on small viewports
        const mascotBox = document.getElementById('speech-bubble');
        if (mascotBox && window.innerWidth < 768) {
          mascotBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
}

// 4. POS catalog and categories switches
function setupPOSVerticalTabs() {
  const tabs = document.querySelectorAll('.pos-vertical-tab');
  const badgeText = document.getElementById('vertical-badge-text');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Find key
      let key = tab.getAttribute('data-vertical') || '';
      if (key.includes('minimarket')) key = 'minimarket';
      else if (key.includes('ferreteria')) key = 'ferreteria';
      else {
        // gastronomia
        const rawKey = tab.getAttribute('data-vertical-key');
        key = rawKey || 'gastronomia';
      }

      activeVerticalKey = key;

      // Update Active Classes
      tabs.forEach(t => {
        t.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
        t.classList.add('text-slate-600', 'hover:text-slate-900');
      });
      tab.classList.remove('text-slate-600', 'hover:text-slate-900');
      tab.classList.add('bg-white', 'text-slate-900', 'shadow-sm');

      // Update segment subtitle badge
      if (badgeText) {
        let textLabel = 'Minimarket';
        if (key === 'ferreteria') textLabel = 'Ferretería';
        if (key === 'gastronomia') textLabel = 'Restaurante';
        badgeText.textContent = `Rubro Activo: ${textLabel}`;
      }

      // Re-render catalog
      renderPOSCatalog();

      // Trigger robot dialog
      let greeting = '🏪 Cargaste los productos de Bodega y Minimarket. Agrégalos y verás cómo reacciona el e-comprobante.';
      if (key === 'ferreteria') greeting = '🔨 Cargaste herramientas y materiales de ferretería. Soporta múltiples unidades de medida.';
      if (key === 'gastronomia') greeting = '🍔 Cargaste deliciosos platos. El sistema permite comandas a cocina y división de mesas de forma instantánea.';
      updateMascotSpeech(greeting);
    });
  });

  // Admin metric button
  const clickMetric = document.getElementById('view-admin-metric');
  if (clickMetric) {
    clickMetric.addEventListener('click', () => {
      const count = cartList.reduce((sum, item) => sum + item.quantity, 0);
      updateMascotSpeech(`📊 ¡Visor Gerencial Activo! Has simulado ${count} productos en venta. En Softopia, los reportes de utilidad diaria y conciliación de almacenes se actualizan al segundo.`);
    });
  }
}

// Render dynamic products based on selection
function renderPOSCatalog() {
  const wrapper = document.getElementById('pos-products-container');
  if (!wrapper) return;

  const currentProducts = CATEGORY_PRODUCTS[activeVerticalKey] || [];
  wrapper.innerHTML = '';

  currentProducts.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'bg-white border border-slate-250/70 p-4 rounded-2xl flex flex-col justify-between transition-all hover:border-softopia-blue hover:shadow-md';
    
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start">
          <span class="text-[9px] bg-slate-100 text-slate-500 font-black px-2 py-0.5 rounded-md uppercase tracking-wider">${prod.category}</span>
          <span class="text-[9px] text-slate-400 font-bold">Unid: ${prod.unit}</span>
        </div>
        <h4 class="mt-2 text-slate-900 text-xs md:text-sm font-black line-clamp-2 min-h-[36px]">${prod.name}</h4>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-[8px] text-slate-400 font-bold uppercase leading-none">PRECIO</span>
          <span class="text-xs md:text-sm font-extrabold text-[#0f46bd] leading-tight font-mono">S/ ${prod.price.toFixed(2)}</span>
        </div>
        <button 
          class="pos-add-item-btn bg-[#f8fafc] hover:bg-[#0f46bd] hover:text-white text-slate-700 h-8 px-3.5 rounded-lg border border-slate-200 hover:border-[#0f46bd] text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer"
          data-id="${prod.id}"
        >
          <span>Añadir</span>
          <span class="font-extrabold">+</span>
        </button>
      </div>
    `;

    // Hook add events
    const addBtn = card.querySelector('.pos-add-item-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        addToCart(prod);
      });
    }

    wrapper.appendChild(card);
  });
}

// Add single item to current cart array
function addToCart(product: POSProduct) {
  const existing = cartList.find(elem => elem.product.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartList.push({ product, quantity: 1 });
  }

  // Update layout and numbers
  updatePOSCartUI();

  // Dialog Mascot advice trigger
  updateMascotSpeech(`🛍️ Agregaste "${product.name}" al carrito en tiempo real. Configura las cantidades en tu panel derecho y emite un ticket fiscal.`);
}

function updatePOSCartUI() {
  const wrapper = document.getElementById('cart-items-wrapper');
  const countBadge = document.getElementById('cart-item-count');
  const emptyState = document.getElementById('cart-empty-state');
  
  if (!wrapper) return;

  const totalItemsCount = cartList.reduce((sum, item) => sum + item.quantity, 0);
  if (countBadge) {
    countBadge.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'Item' : 'Items'}`;
  }

  // Show or hide empty state illustration
  if (cartList.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    // Clear display formulas
    updateCartTotals(0);
    // Clear items in DOM container except empty state
    const currentChildren = [...wrapper.children];
    currentChildren.forEach(child => {
      if (child.id !== 'cart-empty-state') child.remove();
    });
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  // Remove stale listing nodes in DOM wrapper
  const currentChildren = [...wrapper.children];
  currentChildren.forEach(child => {
    if (child.id !== 'cart-empty-state') child.remove();
  });

  // Redraw every card manually
  cartList.forEach(item => {
    const listE = document.createElement('div');
    listE.className = 'bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-2.5';
    
    listE.innerHTML = `
      <div class="flex-1 min-w-0">
        <h5 class="text-slate-900 text-xs font-black truncate">${item.product.name}</h5>
        <span class="text-[9px] text-slate-400 font-bold font-mono">S/ ${item.product.price.toFixed(2)} c/u</span>
      </div>
      
      <!-- Quantity modifiers -->
      <div class="flex items-center gap-1.5 shrink-0 bg-white border border-slate-150 p-1 rounded-lg">
        <button class="cart-qty-minus-btn text-xs font-extrabold text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center select-none cursor-pointer" data-id="${item.product.id}">-</button>
        <span class="text-xs font-black font-mono w-4 text-center text-slate-900 select-none">${item.quantity}</span>
        <button class="cart-qty-plus-btn text-xs font-extrabold text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center select-none cursor-pointer" data-id="${item.product.id}">+</button>
      </div>

      <!-- Total sub price -->
      <div class="text-right shrink-0 w-16">
        <span class="text-xs font-bold text-slate-950 font-mono">S/ ${(item.product.price * item.quantity).toFixed(2)}</span>
      </div>

      <!-- Delete handle -->
      <button class="cart-remove-item-btn text-slate-350 hover:text-red-500 text-xs font-black w-5 h-5 flex items-center justify-center shrink-0 cursor-pointer" data-id="${item.product.id}">✕</button>
    `;

    // Qty minus callback
    listE.querySelector('.cart-qty-minus-btn')?.addEventListener('click', () => {
      adjustCartItemQty(item.product.id, item.quantity - 1);
    });

    // Qty plus callback
    listE.querySelector('.cart-qty-plus-btn')?.addEventListener('click', () => {
      adjustCartItemQty(item.product.id, item.quantity + 1);
    });

    // Delete item completely
    listE.querySelector('.cart-remove-item-btn')?.addEventListener('click', () => {
      adjustCartItemQty(item.product.id, 0);
    });

    wrapper.appendChild(listE);
  });

  // Sum numeric quantities
  const totalSum = cartList.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  updateCartTotals(totalSum);
}

function adjustCartItemQty(id: string, newQty: number) {
  if (newQty <= 0) {
    cartList = cartList.filter(item => item.product.id !== id);
  } else {
    const matched = cartList.find(item => item.product.id === id);
    if (matched) matched.quantity = newQty;
  }
  updatePOSCartUI();
}

function updateCartTotals(totalAmount: number) {
  const subtotalEl = document.getElementById('pos-subtotal');
  const igvEl = document.getElementById('pos-igv');
  const totalEl = document.getElementById('pos-total');

  const subTotal = totalAmount / 1.18;
  const igvAmount = totalAmount - subTotal;

  if (subtotalEl) subtotalEl.textContent = `S/ ${subTotal.toFixed(2)}`;
  if (igvEl) igvEl.textContent = `S/ ${igvAmount.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `S/ ${totalAmount.toFixed(2)}`;
}

// 5. Thermal Receipt Simulation generator trigger
function setupPOSCartActions() {
  const boletaBtn = document.getElementById('print-boleta-btn');
  const facturaBtn = document.getElementById('print-factura-btn');
  const modal = document.getElementById('receipt-modal-container');
  const closeModal = document.getElementById('close-receipt-modal');

  if (boletaBtn) {
    boletaBtn.addEventListener('click', () => {
      emitSimulationTicket('Boleta');
    });
  }

  if (facturaBtn) {
    facturaBtn.addEventListener('click', () => {
      emitSimulationTicket('Factura');
    });
  }

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
}

function emitSimulationTicket(type: 'Boleta' | 'Factura') {
  if (cartList.length === 0) {
    updateMascotSpeech('⚠️ ¡Tu carrito está completamente vacío! Por favor agrega algún producto del menú de la izquierda para simular la factura.');
    return;
  }

  updateMascotSpeech('⚡ Procesando e-comprobante con el servidor simulado de firma SUNAT...');

  setTimeout(() => {
    // Generate dynamic values
    const totalAmount = cartList.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const subTotal = totalAmount / 1.18;
    const igvAmount = totalAmount - subTotal;

    const modal = document.getElementById('receipt-modal-container');
    const label = document.getElementById('receipt-type-label');
    const serial = document.getElementById('receipt-serial');
    const dateEl = document.getElementById('receipt-date');
    const clientEl = document.getElementById('receipt-client');
    const itemsCont = document.getElementById('receipt-items-container');
    const subtotalEl = document.getElementById('receipt-subtotal');
    const igvEl = document.getElementById('receipt-igv');
    const totalEl = document.getElementById('receipt-total');
    const hashEl = document.getElementById('receipt-hash');
    const waAction = document.getElementById('receipt-wa-action') as HTMLAnchorElement;

    if (label) label.textContent = type === 'Boleta' ? 'BOLETA DE VENTA ELECTRÓNICA' : 'FACTURA ELECTRÓNICA';
    
    // Series numbers
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    if (serial) serial.textContent = type === 'Boleta' ? `B001-${randomNum}` : `F001-${randomNum}`;

    // Current date format
    const currentDateStr = new Date().toLocaleDateString('es-PE', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    if (dateEl) dateEl.textContent = currentDateStr;

    // Client assignment
    if (clientEl) clientEl.textContent = type === 'Boleta' ? 'CLIENTE GENERAL DNI: 00000000' : 'MANGUITO LABS PERÚ S.A.C. RUC: 2060124355';

    // Populate billing table rows
    if (itemsCont) {
      itemsCont.innerHTML = '';
      cartList.forEach(item => {
        const row = document.createElement('div');
        row.className = 'space-y-0.5 text-[9.5px] border-b border-dotted border-slate-200 pb-1.5';
        row.innerHTML = `
          <div class="flex justify-between font-bold">
            <span class="truncate max-w-[170px]">${item.product.name}</span>
            <span>S/ ${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
          <div class="flex justify-between text-slate-500 font-medium">
            <span>Cant: ${item.quantity} x S/ ${item.product.price.toFixed(2)} (${item.product.unit})</span>
          </div>
        `;
        itemsCont.appendChild(row);
      });
    }

    if (subtotalEl) subtotalEl.textContent = `S/ ${subTotal.toFixed(2)}`;
    if (igvEl) igvEl.textContent = `S/ ${igvAmount.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `S/ ${totalAmount.toFixed(2)}`;

    // Fake hash code
    const generatedHash = Math.random().toString(16).substring(2, 10).toUpperCase() + '==';
    if (hashEl) hashEl.textContent = generatedHash;

    // Direct inquiry modal WhatsApp link configuration without raw numbers in text label
    if (waAction) {
      const isBoleta = type === 'Boleta' ? 'boleta' : 'factura';
      const itemsString = cartList.map(i => `${i.quantity}x ${i.product.name}`).join(', ');
      
      const textMsg = `Hola Softopia Perú. Acabo de probar el simulador de ventas en su web y he generado un comprobante simulado (${type}) con los productos: ${itemsString} por un total de S/ ${totalAmount.toFixed(2)}. Me gustaría cotizar su sistema para mi negocio.`;
      waAction.href = `https://wa.me/51923992629?text=${encodeURIComponent(textMsg)}`;
    }

    // Open Modal overlay
    if (modal) modal.classList.remove('hidden');

    updateMascotSpeech(`🎉 Comprobante simulado para SUNAT emitido con éxito. ¡Hemos formateado las líneas para emular una impresora de tickets térmica de 80mm!`);

  }, 800);
}

// 6. Pricing Plan Rates billing toggler calculation
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
    updateMascotSpeech('📅 Cambiaste el cotizador a Pago Mensual estándar. Puedes cambiar al ciclo anual para ahorrar 20% de descuento.');
  });

  yearlyBtn.addEventListener('click', () => {
    billingMode = 'yearly';
    yearlyBtn.classList.add('bg-softopia-blue', 'text-white', 'shadow-md');
    yearlyBtn.classList.remove('text-slate-500', 'hover:text-slate-800');
    monthlyBtn.classList.remove('bg-softopia-blue', 'text-white', 'shadow-md');
    monthlyBtn.classList.add('text-slate-500', 'hover:text-slate-800');
    updatePlansPriceRendering();
    updateMascotSpeech('🔥 ¡Ahorro Activado! Al cambiar al ciclo de Pago Anual, recibes un 20% de descuento y la firma digital SUNAT gratis por un año.');
  });
}

function updatePlansPriceRendering() {
  const pricesD = document.querySelectorAll('.pricing-val');
  const timeLabels = document.querySelectorAll('.pricing-time');

  pricesD.forEach(priceSpan => {
    const baseP = parseFloat(priceSpan.getAttribute('data-base') || '0');
    let displayedPrice = baseP;

    if (billingMode === 'yearly') {
      displayedPrice = baseP * 0.8; // Apply 20% off
    }

    priceSpan.textContent = displayedPrice.toFixed(0);
  });

  timeLabels.forEach(label => {
    label.textContent = billingMode === 'yearly' ? '/ al mes (pago anual)' : '/ mes';
  });
}

// 7. Booking / Inquiry Plan details actions
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
      
      // Determine pricing metrics based on billing selection
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

      // Populate dialog states
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

      // Open Modal overlay
      if (modal) modal.classList.remove('hidden');
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  // Handle Plan submission parameters with redirect
  const planForm = document.getElementById('plan-modal-form') as HTMLFormElement;
  if (planForm) {
    planForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!selectedPlanDetails) return;

      const clientName = (document.getElementById('plan-client-name') as HTMLInputElement).value;
      const clientCompany = (document.getElementById('plan-client-company') as HTMLInputElement).value;
      const clientBusiness = (document.getElementById('plan-client-business') as HTMLSelectElement).value;

      const planFinalCost = billingMode === 'yearly' ? selectedPlanDetails.basePrice * 0.8 : selectedPlanDetails.basePrice;
      const cycleText = billingMode === 'yearly' ? 'Anual (con 20% descuento y Certificado de Firma Gratis)' : 'Mensual estándar';

      const waMsg = `Hola Softopia Perú. Me contacto desde la web oficial de cotizaciones.\n\n*Datos Comerciales del Solicitante:*\n- *Nombre Completo:* ${clientName}\n- *Empresa / Negocio:* ${clientCompany}\n- *Giro de Negocio:* ${clientBusiness}\n\n*Plan de Interés Seleccionado:*\n- *Plan:* ${selectedPlanDetails.name}\n- *Ciclo:* ${cycleText}\n- *Precio Estimado:* S/ ${planFinalCost.toFixed(0)} al mes.\n\n_Deseo coordinar la demostración remota en vivo gratuita y dar de alta mi sistema._`;

      // Trigger redirect safely
      window.open(`https://wa.me/51923992629?text=${encodeURIComponent(waMsg)}`, '_blank');
      
      // Close modal
      if (modal) modal.classList.add('hidden');

      // Update robot greeting
      updateMascotSpeech(`🙌 ¡Estupendo ${clientName}! He estructurado tu cotización para el *${selectedPlanDetails.name}* y la he enviado mediante el webhook de WhatsApp seguro. ¡Tu asesor estará contigo en minutos!`);
    });
  }
}

// 8. Contact Standard input Form validations
function setupContactFormHandler() {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const overlay = document.getElementById('contact-success-overlay');
  const overlayMsg = document.getElementById('contact-success-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('sender-name') as HTMLInputElement).value;
    const phone = (document.getElementById('sender-phone') as HTMLInputElement).value;
    const email = (document.getElementById('sender-email') as HTMLInputElement).value;
    const message = (document.getElementById('sender-message') as HTMLTextAreaElement).value;

    // Simulate database insertion and reveal overlay
    if (overlay) {
      if (overlayMsg) {
        overlayMsg.textContent = `Hemos registrado la consulta para ${name} (${email}). Un especialista asignado de la zona se comunicará contigo vía telefónica o WhatsApp para coordinar tu asesoría.`;
      }
      overlay.classList.remove('hidden');
    }

    // Update Mascot feedback speech
    updateMascotSpeech(`📩 ¡Excelente consulta ${name}! He procesado tu requerimiento de soporte técnico en nuestra cola centralizada de prioridades.`);
  });
}
