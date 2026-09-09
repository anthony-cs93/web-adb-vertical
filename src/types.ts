export type PageView = 'home' | 'about' | 'services' | 'products' | 'maintenance' | 'projects' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: 'pasajeros' | 'residencial' | 'carga' | 'montacargas' | 'plataformas' | 'accesibilidad';
  tagline: string;
  description: string;
  applications: string[];
  targetAudience: 'B2B' | 'B2C' | 'B2B & B2C';
  image: string;
  features: string[];
  specs: {
    capacidadKg: string;
    velocidadMs: string;
    paradasMax: string;
    recorridoMax: string;
    sistemaTraccion: string;
    cuartoMaquinas: string;
    puertas: string;
    alimentacion: string;
  };
  architecturalRequirements: string[];
  standardNorms: string[];
}

export interface Service {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  scope: string[];
  iconName: string;
  image: string;
  deliverables: string[];
}

export interface MaintenancePlan {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  features: string[];
  coverage: string;
  isPopular?: boolean;
}

export interface QuoteFormData {
  // Step 1: Project details
  projectType: string;
  solutionType: string;
  city: string;
  floorsCount: number;
  stopsCount: number;
  estimatedCapacity: string;
  usageType: string;
  projectStatus: string;
  
  // Step 2: Customization & specifics
  machineRoomOption: string;
  aestheticFinish: string;
  estimatedBudget: string;
  hasArchitecturalPlans: boolean;
  notes: string;
  attachedFiles: string[];

  // Step 3: Contact info
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  whatsapp: string;
  role: string;
  preferredContactMethod: 'whatsapp' | 'email' | 'phone';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tecnico' | 'mantenimiento' | 'comercial';
}
