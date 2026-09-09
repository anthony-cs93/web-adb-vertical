import React, { useState } from 'react';
import { PageView } from '../../types';
import { getWhatsAppLink } from '../../data/companyData';
import { 
  Building2, 
  Home, 
  Truck, 
  Accessibility, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Info, 
  Layers, 
  Sparkles,
  Camera
} from 'lucide-react';

interface ProjectsViewProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: (solution?: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeSector, setActiveSector] = useState<string>('todos');

  // Conceptual structure prepared for real upcoming client records
  const conceptualProjectArchetypes = [
    {
      id: 'proj-res-01',
      title: 'Edificio Residencial Multifamiliar (5 Niveles)',
      sector: 'residencial',
      location: 'Lima Metropolitana',
      solutionType: 'Ascensor de Pasajeros Gearless MRL (630 kg)',
      status: 'Etapa de Montaje / Comisionamiento',
      specs: '6 paradas • 1.0 m/s • Tracción sin cuarto de máquinas • Cabina acero satinado',
      description: 'Optimización de ducto compacto con bajo consumo energético para condominio residencial en Lima.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-unifam-02',
      title: 'Vivienda Unifamiliar Exclusiva',
      sector: 'unifamiliar',
      location: 'Lima',
      solutionType: 'Ascensor Residencial Homelift (300 kg)',
      status: 'Proyecto en Ejecución',
      specs: '3 paradas • 0.30 m/s • Foso reducido 25 cm • Cabina panorámica vidriada',
      description: 'Integración estética en residencia particular sin afectar la arquitectura original y con bajo consumo monofásico.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-ind-03',
      title: 'Centro Logístico y Almacén de Distribución',
      sector: 'industrial',
      location: 'Perú',
      solutionType: 'Ascensor de Carga Pesada (2000 kg)',
      status: 'Ingeniería y Suministro',
      specs: '4 paradas • 0.40 m/s • Puertas de guillotina reforzadas • Piso chapa estriada',
      description: 'Equipo de alta robustez mecánica para manipulación de palets y transpaletas hidráulicas de trabajo continuo.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-acc-04',
      title: 'Sede Institucional & Educativa',
      sector: 'accesibilidad',
      location: 'Lima / Provincias',
      solutionType: 'Plataforma Vertical de Accesibilidad (A.120)',
      status: 'Puesta en Servicio',
      specs: '2 paradas • 0.15 m/s • Botonera Braille • Sistema de rescate por batería',
      description: 'Superación de desnivel de ingreso principal para libre tránsito de personas con movilidad reducida.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredProjects = activeSector === 'todos'
    ? conceptualProjectArchetypes
    : conceptualProjectArchetypes.filter(p => p.sector === activeSector);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Top Banner */}
      <section className="bg-[#02163B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#085AB3] text-white text-xs font-bold px-3 py-1 rounded">
              <span>Proyectos realizados</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Soluciones diseñadas para diversos sectores y escalas.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Conoce las tipologías arquitectónicas y esquemas electromecánicos que desarrollamos para edificaciones residenciales, comerciales e industriales en el Perú.
            </p>
          </div>
        </div>
      </section>

      {/* Notice of Transparency & Real Case Preparation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-xs text-slate-700">
          <div className="flex items-start gap-3 max-w-2xl">
            <div className="p-2.5 bg-[#085AB3] text-white rounded-xl shrink-0 mt-0.5">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-[#02163B] text-sm block mb-1">
                Catálogo Fotográfico y Fichas de Obra en Actualización
              </span>
              <p className="text-slate-600 leading-relaxed">
                En cumplimiento de nuestra política de honestidad y credibilidad, incorporamos progresivamente el archivo fotográfico y detalles técnicos de las obras ejecutadas. Si deseas visitar una instalación en operación o revisar memorias de cálculo, solicítalo directamente con nuestros ingenieros de proyectos.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink('personalizado', 'deseo solicitar referencias técnicas y asesoría para un proyecto similar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar con un Asesor</span>
          </a>
        </div>
      </section>

      {/* Filterable Project Showcases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold">
          {[
            { id: 'todos', label: 'Todas las Tipologías' },
            { id: 'residencial', label: 'Edificios Multifamiliares' },
            { id: 'unifamiliar', label: 'Viviendas Unifamiliares' },
            { id: 'industrial', label: 'Industrial & Carga' },
            { id: 'accesibilidad', label: 'Accesibilidad Universal' }
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(sec.id)}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeSector === sec.id
                  ? 'bg-[#085AB3] text-white shadow-xs font-bold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
              id={`sec-filter-${sec.id}`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#02163B]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                  {proj.location}
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/80 text-xs">
                  <span className="font-bold text-[#085AB3] block">{proj.solutionType}</span>
                  <span className="text-slate-600 text-[11px]">{proj.specs}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#02163B]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{proj.status}</span>
                  </span>

                  <button
                    onClick={() => onOpenQuote()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#085AB3] hover:underline"
                  >
                    <span>Cotizar proyecto similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#02163B] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold">
            ¿Tienes un proyecto en curso y necesitas evaluar el ducto o foso?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Envíanos tus planos arquitectónicos en formato PDF o DWG para recibir un análisis preliminar de cargas estructurales y propuesta comercial.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Solicitar cotización con planos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
