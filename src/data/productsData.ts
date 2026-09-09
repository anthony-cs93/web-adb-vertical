import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'ascensores-pasajeros',
    name: 'Ascensores para Pasajeros',
    category: 'pasajeros',
    tagline: 'Movilidad vertical fluida, silenciosa y de alto rendimiento para edificios de alto tránsito.',
    description: 'Diseñados para edificios residenciales multifamiliares, torres corporativas, hoteles, clínicas y centros comerciales. Combinan eficiencia energética, arranque y parada suave con tecnología gearless (sin engranajes) o tracción hidráulica según el requerimiento.',
    applications: [
      'Edificios residenciales multifamiliares',
      'Torres de oficinas y corporativos',
      'Clínicas y centros hospitalarios',
      'Hoteles y centros comerciales'
    ],
    targetAudience: 'B2B',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Tecnología de tracción síncrona sin engranajes (Gearless PMSM) de bajo consumo eléctrico',
      'Control de maniobra inteligente con despacho optimizado de llamadas',
      'Cabina con acabados en acero inoxidable satinado o combinaciones a medida',
      'Sistema de rescate automático ante corte de fluido eléctrico (ARD)',
      'Operadores de puerta de frecuencia variable VVVF de apertura suave y silenciosa'
    ],
    specs: {
      capacidadKg: '450 kg a 1600 kg (6 a 21 pasajeros)',
      velocidadMs: '1.0 m/s hasta 2.5 m/s',
      paradasMax: 'Hasta 32 paradas',
      recorridoMax: 'Hasta 90 metros',
      sistemaTraccion: 'Eléctrico Gearless (MRL sin cuarto de máquinas o con cuarto tradicional)',
      cuartoMaquinas: 'Opcional (MRL disponible)',
      puertas: 'Automáticas de 2 hojas telescópicas o apertura central',
      alimentacion: 'Trifásica 220V / 380V - 60Hz (Perú)'
    },
    architecturalRequirements: [
      'Ducto vertical con aplomado estructural según plano de carga',
      'Foso técnico estándar (1.20 m a 1.50 m según velocidad)',
      'Sobre-recorrido superior (Headroom de 3.60 m a 4.20 m)',
      'Acometida eléctrica trifásica independiente en ducto/cuarto técnico'
    ],
    standardNorms: [
      'Diseño basado en normativa técnica de transporte vertical y seguridad electromecánica',
      'Componentes certificados de paracaídas, limitador de velocidad y amortiguadores de foso',
      'Barreras fotoeléctricas infrarrojas de cortina completa en accesos'
    ]
  },
  {
    id: 'ascensores-residenciales',
    name: 'Ascensores Residenciales (Unifamiliares)',
    category: 'residencial',
    tagline: 'Confort, elegancia e independencia en tu hogar con mínimas obras civiles.',
    description: 'Soluciones compactas y personalizadas para viviendas unifamiliares, casas de playa, chalets y dúplex. Diseñados para integrarse armoniosamente en la arquitectura de la casa con bajo consumo eléctrico monofásico o trifásico y foso ultra reducido.',
    applications: [
      'Casas unifamiliares y residencias particulares',
      'Departamentos tipo dúplex y tríplex',
      'Viviendas de adultos mayores que buscan accesibilidad integral',
      'Casas de campo y playa'
    ],
    targetAudience: 'B2C',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Foso mínimo requerido (desde solo 20 cm a 30 cm) o con rampa de acceso',
      'No requiere cuarto de máquinas adicional ni grandes sobre-recorridos',
      'Bajo consumo de energía, comparable con un electrodoméstico estándar',
      'Personalización estética: cabinas panorámicas con cristal, acabados en madera o acero',
      'Operación ultra silenciosa para no perturbar la tranquilidad del hogar'
    ],
    specs: {
      capacidadKg: '250 kg a 400 kg (2 a 5 personas)',
      velocidadMs: '0.15 m/s a 0.40 m/s',
      paradasMax: 'Hasta 5 paradas',
      recorridoMax: 'Hasta 15 metros',
      sistemaTraccion: 'Hidráulico o Eléctrico Gearless Eco-friendly',
      cuartoMaquinas: 'Sin cuarto de máquinas (Gabinete integrado)',
      puertas: 'Batientes semiautomáticas o automáticas corredizas',
      alimentacion: 'Monofásica 220V - 60Hz o Trifásica 220V'
    },
    architecturalRequirements: [
      'Estructura autoportante de perfiles de acero o ducto de albañilería',
      'Foso mínimo de 25 cm',
      'Altura libre de último piso de 2.60 m',
      'Punto de alimentación eléctrica monofásica con llave termo-magnética y puesta a tierra'
    ],
    standardNorms: [
      'Dispositivo de bajada de emergencia manual y automático por batería',
      'Teléfono o interfono de cabina para comunicación directa',
      'Piso antideslizante e iluminación LED de bajo voltaje'
    ]
  },
  {
    id: 'ascensores-carga',
    name: 'Ascensores para Carga Pesada',
    category: 'carga',
    tagline: 'Capacidad robusta y máxima durabilidad para transporte de materiales y palets.',
    description: 'Equipos de alta resistencia estructural diseñados para el traslado vertical de cargas pesadas, montacargas con acompañante, camilleros para centros de salud y aplicaciones industriales pesadas donde la rigidez y la durabilidad son prioritarias.',
    applications: [
      'Almacenes logísticos y centros de distribución',
      'Fábricas e instalaciones de manufactura',
      'Clínicas y hospitales (versión camillera con cabina alargada)',
      'Centros de abasto y supermercados'
    ],
    targetAudience: 'B2B',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Pisos en plancha estriada de acero reforzado para tránsito de transpaletas',
      'Protecciones perimetrales de impacto en madera o goma de alta densidad en cabina',
      'Nivelación milimétrica con el piso para evitar sacudidas durante la carga y descarga',
      'Puertas de guillotina vertical automática o puertas corredizas de apertura reforzada',
      'Estructura de chasis calculada para esfuerzos excéntricos severos'
    ],
    specs: {
      capacidadKg: '1000 kg a 5000 kg (y capacidades especiales a pedido)',
      velocidadMs: '0.30 m/s a 1.0 m/s',
      paradasMax: 'Hasta 12 paradas',
      recorridoMax: 'Hasta 40 metros',
      sistemaTraccion: 'Electromecánico de tracción reforzada o Hidráulico de empuje directo/indirecto',
      cuartoMaquinas: 'Cuarto de máquinas adyacente o integrado según tonelaje',
      puertas: 'De apertura central, telescópica industrial o tipo guillotina',
      alimentacion: 'Trifásica 220V / 380V / 440V - 60Hz'
    },
    architecturalRequirements: [
      'Ducto de concreto armado o estructura metálica reforzada',
      'Foso reforzado con drenaje y anclajes estructurales para amortiguadores',
      'Vigas de fijación para rieles de carga de alto calibre (T-rails pesados)',
      'Acometida eléctrica de fuerza independiente'
    ],
    standardNorms: [
      'Sistema de pesaje de carga con alarma acústica por sobrepeso',
      'Trabas mecánicas de acuñamiento de emergencia',
      'Enclavamientos electromecánicos de seguridad en todas las puertas de piso'
    ]
  },
  {
    id: 'montacargas',
    name: 'Montacargas y Montaplatos',
    category: 'montacargas',
    tagline: 'Agilidad en la logística interna para mercancías medianas y pequeñas.',
    description: 'Equipos compactos para traslado vertical exclusivo de materiales sin pasajeros. Indispensables en cocinas de restaurantes, farmacias, archivos, tiendas comerciales y talleres para optimizar tiempos operativos y reducir el esfuerzo físico del personal.',
    applications: [
      'Restaurantes y hoteles (servicio entre cocina y comedor)',
      'Farmacias, laboratorios y droguerías',
      'Bibliotecas, archivos notariales y notarías',
      'Tiendas comerciales y almacenes de repuestos'
    ],
    targetAudience: 'B2B',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Cabina higiénica en acero inoxidable grado alimentario 304 disponible para hostelería',
      'Bandejas intermedias desmontables para sectorizar la carga interna',
      'Dimensiones compactas adaptables a cualquier rincón o pasillo de servicio',
      'Instalación rápida con estructura autoportante incluida',
      'Bajo costo de mantenimiento y consumo energético reducido'
    ],
    specs: {
      capacidadKg: '50 kg a 500 kg',
      velocidadMs: '0.25 m/s a 0.50 m/s',
      paradasMax: 'Hasta 6 paradas',
      recorridoMax: 'Hasta 18 metros',
      sistemaTraccion: 'Motorreductor eléctrico con tambor arrollador o cadena calibrada',
      cuartoMaquinas: 'Superior o inferior compacto integrado a la estructura',
      puertas: 'Tipo guillotina vertical en acero inoxidable o batientes enrasadas',
      alimentacion: 'Monofásica 220V o Trifásica 220V - 60Hz'
    },
    architecturalRequirements: [
      'Aberturas de losa según plano de ducto',
      'Estructura modular autoportante (no requiere ducto de albañilería cerrado si se solicita con cerramiento)',
      'Alimentación eléctrica 220V en nivel superior',
      'Cero o mínimo foso requerido (puede partir a nivel de mesa de trabajo o ras de piso)'
    ],
    standardNorms: [
      'Bloqueo de seguridad que impide la marcha con puertas abiertas',
      'Finales de carrera electromecánicos de límite superior e inferior',
      'Pulsadores de llamada y envío desde cada estación'
    ]
  },
  {
    id: 'plataformas-elevadoras',
    name: 'Plataformas Elevadoras Verticales',
    category: 'plataformas',
    tagline: 'Superación eficiente de desniveles arquitectónicos y entrepisos.',
    description: 'Soluciones versátiles para salvar desniveles de medio o bajo recorrido en accesos a edificios, mezanines, cocheras o locales comerciales. Brindan una alternativa económica y rápida de instalar frente a un ascensor convencional.',
    applications: [
      'Ingresos principales de edificios con escalinatas previas',
      'Locales comerciales con entrepiso o desnivel de ingreso',
      'Cocheras y sótanos residenciales',
      'Instituciones educativas y sedes públicas'
    ],
    targetAudience: 'B2B & B2C',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Instalación en interiores o intemperie con tratamiento anticorrosivo',
      'Cerramiento perimetral panorámico en vidrio laminado o malla microperforada',
      'Mandos pulsadores de accionamiento ergonómico de presión constante o automático',
      'Bajo impacto en la estructura existente del inmueble',
      'Diseño limpio que no altera negativamente la fachada o vestíbulo'
    ],
    specs: {
      capacidadKg: '250 kg a 500 kg',
      velocidadMs: '0.10 m/s a 0.15 m/s',
      paradasMax: '2 a 4 paradas',
      recorridoMax: 'Hasta 6 metros',
      sistemaTraccion: 'Hidráulico de columna lateral o Tornillo sin fin (Screw-drive)',
      cuartoMaquinas: 'Sin cuarto de máquinas (Bomba hidráulica en gabinete metálico exterior)',
      puertas: 'Puertas batientes con vidrio de seguridad y cerraduras electromecánicas',
      alimentacion: 'Monofásica 220V - 60Hz'
    },
    architecturalRequirements: [
      'Piso nivelado de concreto para anclaje de columna guía',
      'Foso mínimo de 10 a 15 cm o rampa biselada de acceso',
      'Punto eléctrico monofásico con diferencial de seguridad',
      'Fijación a muro portante o estructura de soporte'
    ],
    standardNorms: [
      'Fuelle perimetral o sensores de aplastamiento bajo la plataforma',
      'Válvula de paracaídas hidráulica contra descenso incontrolado',
      'Botón de parada de emergencia tipo hongo y bajada manual'
    ]
  },
  {
    id: 'elevadores-accesibilidad',
    name: 'Elevadores para Personas con Discapacidad',
    category: 'accesibilidad',
    tagline: 'Accesibilidad universal, inclusión y cumplimiento de normas técnicas.',
    description: 'Soluciones diseñadas específicamente para garantizar la movilidad sin barreras arquitectónicas de personas en sillas de ruedas, movilidad reducida o adultos mayores. Esenciales para cumplir con normativas de accesibilidad en edificaciones públicas y privadas en el Perú.',
    applications: [
      'Entidades públicas y municipalidades',
      'Colegios, universidades e institutos',
      'Centros de salud, consultorios y postas médicas',
      'Condominios, oficinas y locales comerciales abiertos al público'
    ],
    targetAudience: 'B2B & B2C',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Dimensiones reglamentarias para giro y acceso cómodo de silla de ruedas',
      'Botonera horizontal a altura accesible con caracteres en relieve y sistema Braille',
      'Pasamanos ergonómicos y suelo antideslizante de alta resistencia',
      'Señalización acústica de llegada y sintetizador de voz (opcional)',
      'Puertas con ancho libre de paso óptimo (mínimo 90 cm libres)'
    ],
    specs: {
      capacidadKg: '300 kg a 450 kg',
      velocidadMs: '0.15 m/s a 0.30 m/s',
      paradasMax: 'Hasta 4 paradas',
      recorridoMax: 'Hasta 9 metros',
      sistemaTraccion: 'Electrohidráulico suave o Eléctrico síncrono',
      cuartoMaquinas: 'Sin cuarto de máquinas',
      puertas: 'Automáticas o batientes con apertura asistida',
      alimentacion: 'Monofásica o Trifásica 220V - 60Hz'
    },
    architecturalRequirements: [
      'Espacio libre de embarque y desembarque despejado sin resaltes',
      'Foso reducido de 15 a 20 cm',
      'Conexión eléctrica protegida con llave diferencial de 30mA',
      'Iluminación adecuada en los accesos de cada nivel'
    ],
    standardNorms: [
      'Enfoque en Normas de Accesibilidad para Personas con Discapacidad (A.120 RNE Perú)',
      'Sistema de rescate de emergencia automático por batería en caso de corte eléctrico',
      'Dispositivos sensibles perimetrales contra atrapamiento'
    ]
  }
];
