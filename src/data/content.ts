import { ModuleDetail, PricingPlan, SaasItem, SoftiBotCategory, SoftiBotAnswer } from '../types';

export const WHATSAPP_NUMBER = '51923992629';
export const SYSTEM_LOGIN_URL = 'https://sytemsoftopia.com/sys/login';

export const MODULES_DATA: Record<string, ModuleDetail> = {
  pos: {
    id: 'pos',
    title: 'Punto de Venta (POS Rápido)',
    badge: 'ALTA VELOCIDAD',
    badgeClass: 'bg-blue-50 text-softopia-blue border-blue-200',
    color: '#0f46bd',
    icon: 'fa-cash-register',
    iconBg: 'bg-blue-50 text-softopia-blue',
    description: 'Ventas ágiles, rápidas y fluidas diseñadas para agilizar la atención en caja sin colas ni retrasos en bodegas, minimarkets, ferreterías y restaurantes.',
    features: [
      'Búsqueda instantánea de productos por nombre, código de barras o categoría.',
      'Múltiples métodos de pago en una sola venta: Efectivo, Tarjeta, Yape, Plin y transferencias.',
      'Apertura y arqueo de caja con reporte de cierre X y Z, control de turnos y faltantes/sobrantes.',
      'Compatible con impresoras térmicas (58mm / 80mm), gavetas de dinero y balanzas de pesaje.',
      'Guardado temporal de ventas pendientes y emisión ultrarrápida en menos de 3 segundos.'
    ],
    devices: ['Laptops y PCs de Escritorio', 'Tablets y Celulares Android', 'Ticketeras y Gavetas'],
    speech: '💡 Módulo Punto de Venta (POS): Búsquedas veloces, cobros con tarjeta, monederos Yape/Plin, arqueo de caja e inventario simulado.',
    waText: 'Hola Softopia Perú. Quiero solicitar una demostración guiada del módulo Punto de Venta (POS).'
  },
  facturacion: {
    id: 'facturacion',
    title: 'Facturación Electrónica SUNAT',
    badge: 'HOMOLOGADO SUNAT',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    color: '#24b248',
    icon: 'fa-file-invoice-dollar',
    iconBg: 'bg-emerald-50 text-emerald-600',
    description: 'Emisión legal e inmediata de comprobantes electrónicos con sincronización automática y segura a servidores SUNAT vía PSE/OSE sin riesgo de multas.',
    features: [
      'Emisión de Facturas, Boletas de Venta, Notas de Crédito, Débito y Guías de Remisión Electrónica.',
      'Envío automático del comprobante en PDF y XML al cliente por WhatsApp o correo electrónico.',
      'Generación de código QR y representación impresa en formato ticket, A4 y A5.',
      'Comunicación de baja y anulación de comprobantes dentro del plazo de ley con acuse CDR.',
      'Certificado digital tributario SUNAT 100% bonificado por 1 año en planes anuales.'
    ],
    devices: ['100% en la Nube', 'Sincronización Inmediata SUNAT', 'Descarga de CDR y XML'],
    speech: '📄 Módulo Facturación Electrónica: Totalmente homologado por SUNAT. Genera Facturas, Boletas, Notas y Guías seguras en segundos.',
    waText: 'Hola Softopia Perú. Deseo cotizar el módulo de Facturación Electrónica homologado por SUNAT.'
  },
  inventario: {
    id: 'inventario',
    title: 'Control de Inventario & Kardex',
    badge: 'KARDEX VALORIZADO',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    color: '#ffab00',
    icon: 'fa-boxes-stacked',
    iconBg: 'bg-amber-50 text-amber-600',
    description: 'Supervisa tus existencias de forma rigurosa en tiempo real. Evita pérdidas, robos y entérate de mermas de inmediato mediante historiales detallados.',
    features: [
      'Kardex valorizado en tiempo real calculado por el método de promedio ponderado.',
      'Alertas automáticas de stock mínimo para evitar desabastecimientos y roturas de inventario.',
      'Control de almacenes múltiples y traslados de mercadería con guías internas de remisión.',
      'Seguimiento riguroso de fechas de vencimiento, lotes y números de serie.',
      'Carga y actualización masiva de precios e inventario mediante plantillas Excel en segundos.'
    ],
    devices: ['Historial de Entradas y Salidas', 'Alertas de Stock en Celular', 'Exportación a Excel'],
    speech: '📦 Módulo Control de Inventario: Stock mínimo, alertas de desabastecimiento, kardex valorizado y almacenes por local comercial.',
    waText: 'Hola Softopia Perú. Me interesa conocer a fondo el módulo de Control de Inventario y Kardex.'
  },
  clientes: {
    id: 'clientes',
    title: 'Clientes & Proveedores (RENIEC / SUNAT)',
    badge: 'VALIDACIÓN OFICIAL',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    color: '#701ab0',
    icon: 'fa-users',
    iconBg: 'bg-purple-50 text-purple-600',
    description: 'Mantén tu cartera comercial organizada. Consulta en vivo las bases de datos de RENIEC y SUNAT con solo digitar el número de documento.',
    features: [
      'Consulta instantánea de RUC a SUNAT: autocompleta Razón Social, estado habido y domicilio fiscal.',
      'Consulta directa de DNI a RENIEC: obtiene nombres y apellidos de personas naturales al instante.',
      'Límites de crédito autorizados por cliente para controlar ventas al fiado con tope de deuda.',
      'Historial completo de compras, frecuencia de consumo y preferencias de cada cliente.',
      'Directorio de proveedores con registro de órdenes de compra e historial de costos.'
    ],
    devices: ['Validación Automática DNI/RUC', 'Historial de Consumo', 'Cartera de Clientes'],
    speech: '👥 Módulo Clientes y Proveedores: Cartera organizada con validación de DNI en RENIEC y RUC en SUNAT en 1 clic.',
    waText: 'Hola Softopia Perú. Quisiera información sobre la validación de DNI y RUC en el sistema.'
  },
  cobros: {
    id: 'cobros',
    title: 'Cuentas por Cobrar & Pagar',
    badge: 'CONTROL FINANCIERO',
    badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
    color: '#f04e23',
    icon: 'fa-money-bill-trend-up',
    iconBg: 'bg-orange-50 text-softopia-orange',
    description: 'Supervisa plazos de créditos comerciales para cobranzas oportunas con alertas de morosidad y evitar descapitalizaciones de caja operativa.',
    features: [
      'Registro de ventas al crédito con programación de cuotas y fechas límites de vencimiento.',
      'Control de abonos parciales con emisión de comprobante de ingreso y saldo restante automático.',
      'Semáforo de cuentas por cobrar con alertas visuales de facturas vencidas y por vencer.',
      'Envío de estados de cuenta detallados por WhatsApp o correo electrónico al cliente.',
      'Programación de pagos a proveedores para optimizar el flujo de caja disponible.'
    ],
    devices: ['Control de Deudas y Cuotas', 'Alertas de Vencimiento', 'Recibos de Abono'],
    speech: '📈 Módulo Cobros y Cartera: Registra abonos parciales, supervisa deudas a crédito y envía estados de cuenta automáticos.',
    waText: 'Hola Softopia Perú. Deseo cotizar el módulo de Cuentas por Cobrar y Gestión de Cobranzas.'
  },
  reportes: {
    id: 'reportes',
    title: 'Reportes Inteligentes & Gráficos',
    badge: 'AUTO REPORTES',
    badgeClass: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    color: '#00b0ff',
    icon: 'fa-chart-pie',
    iconBg: 'bg-cyan-50 text-cyan-600',
    description: 'Visualización de indicadores comerciales mediante KPIs claros que ayudan a dueños de negocio del Perú a tomar decisiones fundamentadas en datos reales.',
    features: [
      'Panel gerencial con gráficos interactivos de ventas por día, semana, mes, sucursal y vendedor.',
      'Reporte detallado de utilidad neta y ganancia real calculada por costo de adquisición de mercadería.',
      'Ranking de los productos más vendidos (Top 10 y análisis de rotación de inventario).',
      'Balance contable de compras vs. ventas con estimación preliminar de liquidación de IGV.',
      'Exportación ágil de todos los reportes a formatos Excel y PDF listos para contabilidad.'
    ],
    devices: ['Dashboard en Tiempo Real', 'Exportación a Excel / PDF', 'Cálculo de Utilidad'],
    speech: '📊 Módulo Reportes Gerenciales: Gráficos de ventas anuales, reporte de utilidad neta, balance de compras e IGV, y exportación a Excel.',
    waText: 'Hola Softopia Perú. Quiero conocer los reportes inteligentes y gráficos gerenciales del sistema.'
  }
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'base',
    name: 'PLAN BASE',
    tag: 'EMPEZAR',
    tagColor: 'text-[#0f46bd]',
    description: 'Ideal para bodegas y emprendimientos familiares que inician.',
    basePrice: 50,
    btnColor: 'bg-softopia-blue hover:bg-softopia-blue-dark text-white',
    borderColor: 'border-[#0f46bd]',
    features: [
      { text: 'Punto de Venta (POS)' },
      { text: 'Facturación SUNAT (Boletas)' },
      { text: 'Inventario Básico' },
      { text: '1 Usuario' }
    ]
  },
  {
    id: 'crece',
    name: 'PLAN CRECE',
    tag: 'CRECER',
    tagColor: 'text-[#24b248]',
    description: 'Control mejorado para tiendas en crecimiento progresivo.',
    basePrice: 80,
    btnColor: 'bg-softopia-blue hover:bg-softopia-blue-dark text-white',
    borderColor: 'border-[#24b248]',
    features: [
      { text: 'Todo del Plan Base' },
      { text: 'Cuentas por Cobrar/Pagar' },
      { text: 'Reportes Avanzados' },
      { text: '2 Usuarios' }
    ]
  },
  {
    id: 'emprendedor',
    name: 'PLAN EMPRENDEDOR',
    tag: 'POPULAR',
    tagColor: 'text-[#f04e23] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/60',
    description: 'Gestión estructurada para ferreterías, restaurantes y minimarkets modernos.',
    basePrice: 130,
    popular: true,
    highlightBadge: 'MÁS ELEGIDO POR NEGOCIOS',
    btnColor: 'bg-softopia-orange hover:bg-softopia-orange-dark text-white',
    borderColor: 'border-[#f04e23] ring-2 ring-softopia-orange/30 shadow-lg shadow-orange-500/5',
    features: [
      { text: 'Migración Excel Incluida', highlight: true },
      { text: 'Todo del Plan Crece' },
      { text: 'Módulo Compras' },
      { text: 'Guías de Remisión' },
      { text: '3 Usuarios' }
    ]
  },
  {
    id: 'empresarial',
    name: 'PLAN EMPRESARIAL',
    tag: 'CONTROL',
    tagColor: 'text-[#701ab0]',
    description: 'Operación multi-sucursal integral y control centralizado.',
    basePrice: 180,
    btnColor: 'bg-softopia-blue hover:bg-softopia-blue-dark text-white',
    borderColor: 'border-[#701ab0]',
    features: [
      { text: 'Todo de Emprendedor' },
      { text: 'Multiusuario Completo' },
      { text: 'Multisucursal (2 locales)' },
      { text: 'Reportes Personalizados' }
    ]
  },
  {
    id: 'premium',
    name: 'PLAN PREMIUM DE ALTO RENDIMIENTO',
    tag: 'ILIMITADO',
    tagColor: 'text-[#ffab00]',
    description: 'Escalamiento ilimitado sin barreras operativas para empresas líderes.',
    basePrice: 250,
    btnColor: 'bg-[#ffab00] hover:bg-[#e09600] text-slate-950 font-black',
    borderColor: 'border-[#ffab00]',
    features: [
      { text: 'Todo de Empresarial' },
      { text: 'Usuarios Ilimitados' },
      { text: 'Soporte Prioritario 24/7' },
      { text: 'Desarrollo de Módulos' }
    ]
  }
];

export const SAAS_DATA: SaasItem[] = [
  {
    id: 'carta',
    tabTitle: 'Carta Smart 🍕',
    icon: 'fa-solid fa-utensils text-softopia-orange',
    title: 'Carta Smart - Restaurantes 🍕',
    subtitle: 'Lleva tu negocio al siguiente nivel gastronómico',
    tag: 'Modo Salón & Delivery',
    description: 'La plataforma definitiva para restaurantes, cafés y fast-foods que buscan ventas eficientes. Permite a los comensales ordenar desde su teléfono escaneando un código QR en mesa (Modo Salón), o realizar pedidos programados para recoger o recibir a domicilio (Modo Delivery). Aumenta tus ventas y automatiza tu cocina.',
    features: [
      {
        title: 'Tarjeta de Fidelidad & Puntos',
        description: 'Los clientes acumulan puntos por cada consumo para intercambiar por platos de tu carta.',
        icon: 'fa-gift'
      },
      {
        title: 'Cupones y Promo Automáticas',
        description: 'El software envía descuentos programados e incentivos de cumpleaños de manera automatizada.',
        icon: 'fa-tags'
      },
      {
        title: 'Alertas y Envío por WhatsApp',
        description: 'Notificación automática interactiva del estado del pedido al celular del comensal.',
        icon: 'fa-bell'
      },
      {
        title: 'Estadísticas y Análisis de Ventas',
        description: 'Conoce tus platos más requeridos, horas pico de reservas y ticket promedio facturado.',
        icon: 'fa-chart-line'
      }
    ],
    demoUrl: 'https://menfisdelivery.vercel.app',
    waText: 'Hola Softopia Perú. Quiero más información y precios de la SaaS Carta Smart para Restaurantes.',
    footerNoteTitle: 'TECNOLOGÍA CLOUD DE ÚLTIMA GENERACIÓN',
    footerNoteSub: 'Soporte local & Configuración en Talara'
  },
  {
    id: 'iglesia',
    tabTitle: 'Iglesias Control ⛪',
    icon: 'fa-solid fa-church text-amber-500',
    title: 'Iglesias Control ⛪',
    subtitle: 'Gestión financiera y feligresía transparente',
    tag: 'Control Eclesiástico Integral',
    description: 'Una suite adaptada para el correcto ordenamiento administrativo de iglesias y congregaciones cristianas. Facilita el registro de membresías, ministerios de servicio, control detallado de ingresos (diezmos y ofrendas) para proyectos específicos, garantizando reportes limpios y transparentes para el consejo pastoral y asambleas.',
    features: [
      {
        title: 'Membresía y Saludos de Cumpleaños',
        description: 'Mensajes personalizados automatizados para los hermanos de la congregación el día de su cumpleaños.',
        icon: 'fa-heart-circle-check'
      },
      {
        title: 'Reportes Financieros Transparentes',
        description: 'Genera informes de ingresos, aportes voluntarios y egresos listos para imprimir en PDF en segundos.',
        icon: 'fa-file-invoice-dollar'
      },
      {
        title: 'Boletín Virtual & Eventos Masivos',
        description: 'Envía anuncios de ministerios, cultos de oración, colectas y retiros de forma ágil y masiva.',
        icon: 'fa-bullhorn'
      },
      {
        title: 'Recepción de Donaciones en Línea',
        description: 'Integración de Yape, Plin y cobro seguro para recolección transparente de proyectos eclesiales.',
        icon: 'fa-mobile-screen'
      }
    ],
    demoUrl: 'https://smartholy.vercel.app',
    waText: 'Hola Softopia Perú. Quiero solicitar un acceso demo y conocer los precios de la SaaS Iglesias Control.',
    footerNoteTitle: 'PRIVACIDAD DE DATOS EXTREMA & CIFRADA',
    footerNoteSub: 'Demostración virtual interactiva con tu templo'
  },
  {
    id: 'barber',
    tabTitle: 'Barber Manager 💈',
    icon: 'fa-solid fa-scissors text-indigo-400',
    title: 'Barber Manager - Barberías & Salones 💈',
    subtitle: 'Acelera tus reservas y controla tus estilistas',
    tag: 'Gestión de Citas 24/7',
    description: 'La herramienta definitiva para impulsar tu barbería o salón de estilismo en Talara. Tus clientes eligen a su barbero favorito, el servicio de corte o tratamiento, escogen el día/hora disponible y programan su cita en línea en segundos. Simplifica la administración de turnos y maximiza el rendimiento mensual de tu local comercial.',
    features: [
      {
        title: 'Reservas y Citas Online Automáticas',
        description: 'Los clientes reservan de forma autónoma desde un enlace inteligente, eliminando llamadas.',
        icon: 'fa-calendar-check'
      },
      {
        title: 'Cálculo de Comisiones de Personal',
        description: 'Calcula instantáneamente cuánto gana cada barbero según su tarifa y servicios brindados.',
        icon: 'fa-percent'
      },
      {
        title: 'Tarjeta de Puntos de Corte Virtual',
        description: 'Sello móvil digital por cada visita (ejm: 9 cortes completados y el 10mo es libre).',
        icon: 'fa-user-tag'
      },
      {
        title: 'Historial Clínico del Estilo del Cliente',
        description: 'Guarda fotos, preferencias, tipo de navaja utilizado y ceras favoritas del cliente.',
        icon: 'fa-images'
      }
    ],
    demoUrl: 'https://smartbarber-two.vercel.app',
    waText: 'Hola Softopia Perú. Quiero solicitar el acceso demo y precios de la SaaS Barber Manager.',
    footerNoteTitle: 'REDUCE UN 40% LAS CITAS FALLIDAS O INASISTENCIAS',
    footerNoteSub: 'Gestor de cobro en caja rápida integrado'
  },
  {
    id: 'hotel',
    tabTitle: 'Hotel Connect 🏨',
    icon: 'fa-solid fa-hotel text-teal-400',
    title: 'Hotel Connect - Hospedajes & Hoteles 🏨',
    subtitle: 'Control de habitaciones y consumos unificados',
    tag: 'Rack Diario en Vivo',
    description: 'El sistema ideal para hospederías, hoteles y resorts que buscan un check-in y check-out impecablemente rápido. Visualiza un panel gráfico dinámico de todas tus habitaciones por pisos y tipos (simple, matrimonial, suite), carga consumos de bebidas/comidas directamente a la cuenta del huésped y agiliza su facturación final.',
    features: [
      {
        title: 'Rack Dinámico de Habitaciones',
        description: 'Mapa interactivo con colores indicativos de habitaciones: Libres, Ocupadas, Sucias o en Limpieza.',
        icon: 'fa-bed'
      },
      {
        title: 'Consumos unificados al Check-Out',
        description: 'Carga automáticamente consumos de frigobar, comidas o lavandería directo al voucher de la habitación.',
        icon: 'fa-calculator'
      },
      {
        title: 'Marketing Post-Estadía Automático',
        description: 'Envío automatizado de promociones y descuentos al número telefónico de huéspedes de temporadas previas.',
        icon: 'fa-envelope-open-text'
      },
      {
        title: 'Ficha de Registro Simplificado',
        description: 'Autocompleta datos del cliente con DNI o RUC desde bases rápidas automatizadas.',
        icon: 'fa-clipboard-user'
      }
    ],
    demoUrl: 'https://lasgarzas.vercel.app',
    waText: 'Hola Softopia Perú. Quiero solicitar una demostración en vivo y precios de la SaaS Hotel Connect.',
    footerNoteTitle: 'ESTADÍSTICAS DE RESERVAS POR TEMPORADAS',
    footerNoteSub: 'Control fino de turnos de recepción de personal'
  },
  {
    id: 'dental',
    tabTitle: 'Dental Care 🦷',
    icon: 'fa-solid fa-tooth text-sky-400',
    title: 'Dental Care - Clínicas Dentales 🦷',
    subtitle: 'Historial Odontológico & Agendamiento Inteligente',
    tag: 'Odontograma Virtual',
    description: 'El software definitivo para consultorios dentales y clínicas odontológicas. Permite a los doctores actualizar la historia clínica y el odontograma del paciente directamente en una tablet o computadora, estructurar planes de tratamientos multipaso paso-a-paso, y automatizar los recordatorios de sus próximas citas preventivas.',
    features: [
      {
        title: 'Odontograma Gráfico Interactivo',
        description: 'Dibuja, colorea y actualiza el estado de las piezas dentales en tiempo real por cada cita del paciente.',
        icon: 'fa-tooth'
      },
      {
        title: 'Confirmación Automática de Citas',
        description: 'El software despacha una alerta interactiva por WhatsApp para confirmar la cita del día de mañana.',
        icon: 'fa-clock-rotate-left'
      },
      {
        title: 'Fidelización por Higiene Bucal',
        description: 'Despacha recomendaciones de higiene y alertas recordatorio automáticas para profilaxis cada 6 meses.',
        icon: 'fa-heart-pulse'
      },
      {
        title: 'Planes de Tratamiento & Abonos',
        description: 'Sigue de cerca el monto cobrado del presupuesto general, cuotas pactadas y saldos pendientes.',
        icon: 'fa-receipt'
      }
    ],
    demoUrl: 'https://smartdentalara.vercel.app',
    waText: 'Hola Softopia Perú. Quiero solicitar un acceso demo y precios de la SaaS Dental Care.',
    footerNoteTitle: '100% REGULADO SEGÚN ESTÁNDARES SANITARIOS Y DE PRIVACIDAD',
    footerNoteSub: 'Control de insumos dentales e inventario general'
  },
  {
    id: 'gym',
    tabTitle: 'Gym Control 💪',
    icon: 'fa-solid fa-dumbbell text-emerald-400',
    title: 'Gym Control - Gimnasios & Fitness 💪',
    subtitle: 'Control de membresías y accesos dinámicos',
    tag: 'Control de Accesos QR',
    description: 'La plataforma ideal para centros fitness, academias de artes marciales y gimnasios que desean una gestión sin dolores de cabeza. Controla membresías activas, gestiona cobros mensuales o diarios, bloquea accesos vencidos e integra un sistema ágil impulsado por códigos QR móviles que tus socios adorarán.',
    features: [
      {
        title: 'Membresías Congeladas & Renovaciones',
        description: 'Controla fechas de inicio, suspensión temporal (congelar plan por salud) y renovación automática.',
        icon: 'fa-address-card'
      },
      {
        title: 'Control de Accesos QR en Recepción',
        description: 'Valida velozmente el estatus de paso del socio mediante un código QR dinámico desde su teléfono móvil.',
        icon: 'fa-qrcode'
      },
      {
        title: 'Alertas de Vencimiento Automáticas',
        description: 'Notificaciones preventivas vía WhatsApp 3 días antes de que expire la membresía del atleta.',
        icon: 'fa-comment-dollar'
      },
      {
        title: 'Módulo de Rutinas & Medias Corporales',
        description: 'Sigue el peso, porcentaje de grasa, IMC y adjunta el planning diario de entrenamiento del mes.',
        icon: 'fa-weight-scale'
      }
    ],
    demoUrl: 'https://smartgym-mu.vercel.app',
    waText: 'Hola Softopia Perú. Quiero solicitar un acceso demo y precios de la SaaS Gym Control.',
    footerNoteTitle: 'IMPULSA COBROS RECURRENTES DE FORMA AUTOMÁTICA',
    footerNoteSub: 'Tienda integrada para barras de suplementación y accesorios'
  }
];

export const SOFTIBOT_FAQ = {
  main: [
    { text: 'Ingresar al Sistema (Login) 🚀', key: 'portal_login', icon: 'fa-arrow-right-to-bracket' },
    { text: 'Sistemas de Ventas y Facturación', key: 'sistemas', icon: 'fa-file-invoice-dollar' },
    { text: 'Instalación de Cámaras de Seguridad', key: 'cameras', icon: 'fa-video' },
    { text: 'Licencias de Software Originales', key: 'licensing', icon: 'fa-key' },
    { text: 'Contacto por WhatsApp', key: 'whatsapp_general', icon: 'fa-whatsapp' }
  ],
  sistemas: {
    question: '¿Qué deseas saber sobre nuestros Sistemas de Venta?',
    options: [
      { text: '¿Funciona en celulares o tablets?', key: 'sistemas_devices', icon: 'fa-mobile-screen-button' },
      { text: '¿Está homologado por SUNAT?', key: 'sistemas_sunat', icon: 'fa-building-columns' },
      { text: '¿Cuánto cuestan los planes?', key: 'sistemas_pricing', icon: 'fa-tags' },
      { text: 'Volver atrás', key: 'main', icon: 'fa-arrow-left' }
    ]
  },
  cameras: {
    question: '¿Qué consulta tienes sobre las Cámaras de Seguridad?',
    options: [
      { text: '¿Qué marcas y modelos instalan?', key: 'cameras_brands', icon: 'fa-shield-halved' },
      { text: '¿Tiene monitoreo en vivo desde el celular?', key: 'cameras_live', icon: 'fa-circle-play' },
      { text: '¿Qué incluye el servicio?', key: 'cameras_service', icon: 'fa-screwdriver-wrench' },
      { text: 'Volver atrás', key: 'main', icon: 'fa-arrow-left' }
    ]
  },
  licensing: {
    question: '¿Qué software o licencias necesitas?',
    options: [
      { text: '¿Venden antivirus o utilitarios?', key: 'licensing_eset', icon: 'fa-shield-virus' },
      { text: '¿Tienen Autodesk, Canva o Microsoft 365?', key: 'licensing_brands', icon: 'fa-cubes' },
      { text: '¿Son originales con garantía?', key: 'licensing_warranty', icon: 'fa-award' },
      { text: 'Volver atrás', key: 'main', icon: 'fa-arrow-left' }
    ]
  }
} as const;

export const SOFTIBOT_ANSWERS: Record<string, SoftiBotAnswer> = {
  sistemas_devices: {
    answer: '¡Sí! Contamos con la App Softopia para Android. Sincroniza al instante tus ventas, inventarios y clientes en la nube. Trabaja sin interrupciones desde cualquier celular, tablet o laptop con soporte local en Talara.',
    waText: 'Hola Softopia. Me interesa la App móvil del sistema de ventas para mi negocio.'
  },
  sistemas_sunat: {
    answer: 'Nuestros sistemas están completamente homologados y actualizados con las normativas SUNAT. Emite boletas, facturas, notas de crédito y guías de remisión con firma digital segura en segundos.',
    waText: 'Hola Softopia. Quisiera cotizar el sistema de facturación electrónica homologado por SUNAT.'
  },
  sistemas_pricing: {
    answer: 'Tenemos planes desde S/ 50 al mes para emprendedores. Si eliges el pago anual, obtienes 20% de descuento automático y el certificado digital SUNAT gratis por un año.',
    waText: 'Hola Softopia. Me gustaría recibir una cotización de planes anuales y mensuales.'
  },
  cameras_brands: {
    answer: 'Instalamos marcas líderes mundiales como HIKVISION, IMOU y EZVIZ. Contamos con cámaras tipo Domo, Bala (bullet), PTZ de largo alcance y cámaras Wi-Fi con audio bidireccional de alta resolución.',
    waText: 'Hola Softopia. Deseo cotizar la instalación de cámaras de seguridad en mi local.'
  },
  cameras_live: {
    answer: '¡Sí! Todo el sistema cuenta con visión nocturna infrarroja y alertas automáticas por detección de movimiento en tu celular. Podrás ver y escuchar tu negocio en vivo desde cualquier parte del mundo.',
    waText: 'Hola Softopia. Quisiera información sobre la visualización en vivo de cámaras de seguridad remotas.'
  },
  cameras_service: {
    answer: 'Brindamos un servicio completo llave en mano: levantamiento técnico, cableado profesional estructurado, configuración de visualización remota en tus dispositivos móviles, y garantía real presencial.',
    waText: 'Hola Softopia. Necesito un servicio completo de instalación técnica de cámaras de seguridad.'
  },
  licensing_eset: {
    answer: 'Manejamos el mejor antivirus del mercado: ESET NOD32 Antivirus original. Brinda máxima protección liviana inteligente por 1, 2 o 3 años con garantía directa del fabricante.',
    waText: 'Hola Softopia. Quisiera cotizar licencias originales de ESET NOD32 Antivirus.'
  },
  licensing_brands: {
    answer: 'Comercializamos licencias de Autodesk All Apps (AutoCAD, Revit, Inventor), Canva Pro Académico por 2 años, y Microsoft 365 (Word, Excel, OneDrive de 1TB). Entrega digital inmediata con soporte total de instalación.',
    waText: 'Hola Softopia. Deseo cotizar licencias de Autodesk, Canva o Microsoft 365.'
  },
  licensing_warranty: {
    answer: 'Todas nuestras licencias son 100% originales con descarga desde portales oficiales. Te brindamos soporte personalizado continuo para la correcta instalación y activación en tus equipos.',
    waText: 'Hola Softopia. Quiero validar la garantía de las licencias de software originales.'
  }
};
