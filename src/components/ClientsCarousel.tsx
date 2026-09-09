import React, { useState, useEffect, useRef } from 'react';
import { Building2, ChevronLeft, ChevronRight, Briefcase, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/companyData';

interface ClientItem {
  id: string;
  name: string;
  category: 'constructora' | 'inmobiliaria' | 'arquitectura' | 'corporativo';
  categoryLabel: string;
  tagline: string;
  badge: string;
}

const clientPlaceholders: ClientItem[] = [
  {
    id: 'c1',
    name: 'Edificaciones del Pacífico',
    category: 'constructora',
    categoryLabel: 'Constructora & Obras',
    tagline: 'Desarrollo multifamiliar y comercial',
    badge: 'Proyectos B2B'
  },
  {
    id: 'c2',
    name: 'Vértice Inmobiliaria',
    category: 'inmobiliaria',
    categoryLabel: 'Promotora Inmobiliaria',
    tagline: 'Edificios residenciales de vanguardia',
    badge: 'Lima & Regiones'
  },
  {
    id: 'c3',
    name: 'Studio ArquiNorte',
    category: 'arquitectura',
    categoryLabel: 'Estudio de Arquitectura',
    tagline: 'Diseño arquitectónico & accesibilidad',
    badge: 'Consultoría'
  },
  {
    id: 'c4',
    name: 'NovaSur Desarrollos',
    category: 'inmobiliaria',
    categoryLabel: 'Desarrollador Urbano',
    tagline: 'Condominios y clubes residenciales',
    badge: 'Ingeniería Vertical'
  },
  {
    id: 'c5',
    name: 'InverEdifica Perú',
    category: 'constructora',
    categoryLabel: 'Constructora General',
    tagline: 'Infraestructura corporativa y salud',
    badge: 'Montaje Certificado'
  },
  {
    id: 'c6',
    name: 'Torres del Horizonte',
    category: 'corporativo',
    categoryLabel: 'Administración de Inmuebles',
    tagline: 'Gestión de torres de oficinas',
    badge: 'Mantenimiento'
  },
  {
    id: 'c7',
    name: 'Logística Central & Carga',
    category: 'corporativo',
    categoryLabel: 'Complejo Logístico',
    tagline: 'Naves y almacenes de distribución',
    badge: 'Montacargas'
  },
  {
    id: 'c8',
    name: 'Grupo Hábitat Arquitectos',
    category: 'arquitectura',
    categoryLabel: 'Firma de Arquitectura',
    tagline: 'Viviendas exclusivas y dúplex',
    badge: 'Homelifts'
  }
];

interface ClientsCarouselProps {
  onOpenQuote?: () => void;
}

export const ClientsCarousel: React.FC<ClientsCarouselProps> = ({ onOpenQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredClients = selectedFilter === 'todos'
    ? clientPlaceholders
    : clientPlaceholders.filter(c => c.category === selectedFilter);

  // Auto-scroll loop effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredClients]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="bg-white rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-sm relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#085AB3] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                Alianzas & Confianza B2B
              </span>
              <span className="text-xs text-slate-400 font-medium">• Red de Proyectos en Perú</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] tracking-tight">
              Colaboramos con Empresas, Constructoras y Desarrolladores
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Trabajamos junto a estudios de arquitectura, empresas constructoras y administradores de inmuebles para integrar soluciones de elevación seguras y a medida.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs"
              title="Anterior"
              aria-label="Logo anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs"
              title="Siguiente"
              aria-label="Logo siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs font-semibold">
          <span className="text-slate-400 font-bold uppercase text-[10px] mr-1">Sector:</span>
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'constructora', label: 'Constructoras' },
            { id: 'inmobiliaria', label: 'Inmobiliarias' },
            { id: 'arquitectura', label: 'Estudios de Arquitectura' },
            { id: 'corporativo', label: 'Inmuebles & Logística' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                selectedFilter === tab.id
                  ? 'bg-[#085AB3] text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel Slider Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-none pb-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredClients.map((client, idx) => (
            <div
              key={client.id}
              className="shrink-0 w-64 sm:w-72 bg-slate-50/80 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#085AB3]/40 transition-all shadow-xs hover:shadow-md group snap-start flex flex-col justify-between"
            >
              {/* Logo Emblem Placeholder */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#085AB3] font-extrabold text-sm group-hover:bg-[#02163B] group-hover:text-white transition-colors shadow-xs">
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-base tracking-tighter">
                      {client.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  {client.badge}
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#085AB3] uppercase tracking-wider block">
                  {client.categoryLabel}
                </span>
                <h4 className="text-sm font-bold text-[#02163B] group-hover:text-[#085AB3] transition-colors leading-snug">
                  {client.name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {client.tagline}
                </p>
              </div>

              {/* Bottom Subtle Status */}
              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-medium text-slate-500">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Aliado de Proyecto
                </span>
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#085AB3] transition-colors">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA & Transparency Note */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span className="text-[11px] text-slate-500 text-center sm:text-left">
            ¿Representas a una constructora o estudio de arquitectura y deseas integrar ADB en tus memorias de obra?
          </span>
          
          <div className="flex items-center gap-3 shrink-0">
            {onOpenQuote && (
              <button
                onClick={onOpenQuote}
                className="font-bold text-[#085AB3] hover:text-[#074b94] underline flex items-center gap-1"
              >
                <span>Solicitar convenio B2B</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={getWhatsAppLink('cotizacion', 'Hola, represento a una empresa/constructora y me gustaría coordinar una reunión técnica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-bold underline"
            >
              WhatsApp Alianzas
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
