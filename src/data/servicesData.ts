import { Service, MaintenancePlan } from '../types';

export const servicesData: Service[] = [
  {
    id: 'evaluacion-asesoria',
    name: 'Evaluación y Asesoría',
    subtitle: 'Estudio preliminar de ducto, tráfico vertical y viabilidad técnica.',
    description: 'Revisión exhaustiva de planos arquitectónicos o visita técnica al inmueble para verificar dimensiones reales de ducto, foso, sobre-recorrido y suministro eléctrico, recomendando la configuración ideal sin sobrecostos.',
    scope: [
      'Estudio preliminar de tráfico y dimensionamiento de cabina',
      'Asesoría técnica para optimización de ductos y vanos civiles',
      'Verificación de normativas y requisitos eléctricos de fuerza',
      'Acompañamiento a arquitectos, constructoras y propietarios'
    ],
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Informe de viabilidad técnica y recomendaciones de ducto',
      'Comparativa de opciones según tráfico y presupuesto',
      'Orientación transparente sin compromiso'
    ]
  },
  {
    id: 'diseno-propuesta',
    name: 'Diseño y Propuesta a Medida',
    subtitle: 'Ingeniería vertical y especificaciones adaptadas a tu edificación.',
    description: 'Dimensionamiento y diseño del sistema de elevación adecuado para los requerimientos del proyecto. Presentamos propuestas técnicas y económicas transparentes junto con los planos guía de obra civil.',
    scope: [
      'Diseño conceptual y especificación de tracción (Gearless PMSM / MRL)',
      'Selección de acabados de cabina, botoneras y accesos',
      'Elaboración de planos guía de obra civil y puntos eléctricos',
      'Propuesta económica detallada ítem por ítem con plazos claros'
    ],
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Cotización formal detallada y especificaciones electromecánicas',
      'Planos guía de pozo, foso y sala de máquinas / sobre-recorrido',
      'Cronograma estimado de fabricación e instalación'
    ]
  },
  {
    id: 'fabricacion-ensamble',
    name: 'Fabricación y Ensamble',
    subtitle: 'Estructuras y componentes adaptados con precisión milimétrica.',
    description: 'Desarrollo y fabricación de estructuras autoportantes, cabinas a medida en acero inoxidable o cristal panorámico, pórticos, marcos de contrapeso y ensamblaje de componentes bajo estrictos estándares de calidad.',
    scope: [
      'Fabricación de cabinas en acero inoxidable 304 y cristales de seguridad',
      'Diseño y armado de estructuras autoportantes de acero estructural',
      'Adaptación para ductos estrechos o geometrías irregulares',
      'Tratamientos anticorrosivos para zonas costeras y alta humedad'
    ],
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Planos de fabricación y cargas estructurales',
      'Memoria de cálculo para anclajes y fijaciones',
      'Control de calidad en soldaduras y ensambles'
    ]
  },
  {
    id: 'instalacion',
    name: 'Instalación y Puesta en Marcha',
    subtitle: 'Montaje electromecánico riguroso bajo Norma Técnica EM.070.',
    description: 'Ejecución del montaje por técnicos especializados en transporte vertical: aplomado de rieles, izaje de máquina tractora, cableado de control y señales, ajuste fino de nivelación y protocolos de prueba de seguridad.',
    scope: [
      'Montaje estructural, tendido de guías y fijación de soportes',
      'Instalación de cabina, contrapeso, cables y limitador de velocidad',
      'Conexión eléctrica, cuadro de maniobra y variador de frecuencia (VVVF)',
      'Protocolos de prueba de paracaídas y seguridades electromecánicas'
    ],
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Acta de pruebas y comisionamiento técnico',
      'Capacitación inicial de uso y rescate para administradores/usuarios',
      'Dossier de calidad y entrega formal de la instalación'
    ]
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento Preventivo y Correctivo',
    subtitle: 'Continuidad operativa, vida útil extendida y máxima seguridad 24/7.',
    description: 'Planes periódicos de inspección, lubricación, ajuste electromecánico y atención de emergencias técnicas. El mantenimiento constante es la clave para evitar detenciones costosas y garantizar la tranquilidad de los usuarios.',
    scope: [
      'Rutinas mensuales de inspección de seguridades mecánicas y eléctricas',
      'Ajuste y limpieza de frenos, guías, puertas y cerraduras de piso',
      'Detección temprana de desgaste en cables de tracción y poleas',
      'Soporte técnico para resolución oportuna de incidencias'
    ],
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Bitácora técnica de mantenimiento digital o física en sitio',
      'Informes del estado electromecánico del equipo',
      'Recomendaciones preventivas de repuestos por ciclo de vida'
    ]
  }
];

export const processStages = [
  {
    step: '01',
    title: 'Evaluación y Levantamiento',
    description: 'Revisamos los planos arquitectónicos o realizamos la visita al inmueble para verificar dimensiones reales de ducto, accesos y alimentación eléctrica.'
  },
  {
    step: '02',
    title: 'Diseño y Propuesta a Medida',
    description: 'Dimensionamos el equipo exacto para tus necesidades de tráfico y capacidad, presentando una cotización transparente y planos guía de obra civil.'
  },
  {
    step: '03',
    title: 'Suministro y Fabricación',
    description: 'Fabricamos las estructuras y gestionamos el suministro de los componentes electromecánicos con rigurosos controles de calidad.'
  },
  {
    step: '04',
    title: 'Instalación y Pruebas Técnicas',
    description: 'Montaje electromecánico profesional, calibración fina de nivelación, pruebas de paracaídas y entrega formal con protocolo de puesta en marcha.'
  },
  {
    step: '05',
    title: 'Mantenimiento y Respaldo Continuo',
    description: 'Acompañamiento postventa con revisiones preventivas periódicas para asegurar el óptimo funcionamiento y la seguridad permanente del equipo.'
  }
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'preventivo-esencial',
    name: 'Plan Preventivo Esencial',
    tagline: 'Ideal para edificios residenciales pequeños y viviendas unifamiliares con tráfico moderado.',
    recommendedFor: 'Viviendas, dúplex y residenciales de hasta 5 paradas',
    features: [
      'Visita de mantenimiento preventivo mensual programada',
      'Inspección y ajuste de sistemas de seguridad y frenos',
      'Lubricación de guías, poleas y articulaciones mecánicas',
      'Revisión y limpieza de cerraduras de puertas de piso y cabina',
      'Informe técnico de estado operativo del equipo en cada visita',
      'Atención preferencial ante llamadas de servicio'
    ],
    coverage: 'Mano de obra preventiva y diagnósticos programados.'
  },
  {
    id: 'integral-corporativo',
    name: 'Plan Integral Proyectos & Edificios',
    tagline: 'Para condominios multifamiliares, clínicas, hoteles y torres con flujo constante.',
    recommendedFor: 'Edificios multifamiliares, oficinas y centros comerciales',
    features: [
      'Visitas preventivas mensuales exhaustivas con checklist integral',
      'Ajuste electrónico de curva de viaje en variador de frecuencia VVVF',
      'Pruebas semestrales de paracaídas, limitador de velocidad y baterías ARD',
      'Atención prioritaria de emergencias electromecánicas',
      'Revisión de cuartos de máquinas, ventilación e iluminación de ducto',
      'Descuentos especiales en repuestos de desgaste periódico'
    ],
    coverage: 'Mano de obra preventiva + atención prioritaria de contingencias.',
    isPopular: true
  },
  {
    id: 'industrial-continuo',
    name: 'Plan Industrial & Carga Pesada',
    tagline: 'Máxima disponibilidad para montacargas y ascensores de carga en almacenes y fábricas.',
    recommendedFor: 'Almacenes logísticos, fábricas, montaplatos de restaurantes',
    features: [
      'Inspecciones enfocadas en esfuerzo mecánico severo y transpaletas',
      'Medición de desgaste de cables y tensión de cadenas de tracción',
      'Verificación de nivelación milimétrica en paradas con carga pesada',
      'Revisión de guillotinas industriales y microinterruptores de seguridad',
      'Flexibilidad horaria para mantenimientos en horas no operativas',
      'Planes de contingencia para minimizar tiempos de parada'
    ],
    coverage: 'Supervisión técnica especializada para equipos de trabajo continuo.'
  }
];
