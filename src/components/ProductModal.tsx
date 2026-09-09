import React, { useState } from 'react';
import { Product } from '../types';
import { getWhatsAppLink } from '../data/companyData';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Cpu, 
  Ruler, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Zap,
  Info
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForQuote: (productId: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ 
  product, 
  onClose, 
  onSelectForQuote 
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'requirements' | 'safety'>('specs');

  if (!product) return null;

  const handleQuoteClick = () => {
    onSelectForQuote(product.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#02163B] text-white p-5 sm:p-6 flex items-start justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#085AB3] text-white px-2.5 py-0.5 rounded">
                {product.targetAudience}
              </span>
              <span className="text-xs text-slate-300">
                Ficha Técnica Orientativa
              </span>
            </div>
            <h2 id="product-modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {product.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
            id="close-product-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 flex-1 text-slate-700">
          
          {/* Top Overview: Image + Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md border border-slate-200 aspect-4/3 relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">
                  ADB Soluciones Vertical • Perú
                </span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#085AB3] mb-1">
                  Descripción General
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Aplicaciones Principales:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#085AB3] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs for Details */}
          <div className="border-b border-slate-200">
            <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-px">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 relative ${
                  activeTab === 'specs' 
                    ? 'text-[#085AB3]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Especificaciones Técnicas Tipo</span>
                {activeTab === 'specs' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#085AB3]"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 relative ${
                  activeTab === 'requirements' 
                    ? 'text-[#085AB3]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Ruler className="w-4 h-4" />
                <span>Requisitos de Obra Civil</span>
                {activeTab === 'requirements' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#085AB3]"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('safety')}
                className={`pb-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 relative ${
                  activeTab === 'safety' 
                    ? 'text-[#085AB3]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Seguridad y Normativa</span>
                {activeTab === 'safety' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#085AB3]"></span>
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'specs' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Capacidad de Carga</span>
                  <span className="text-slate-900 font-bold text-sm">{product.specs.capacidadKg}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Velocidad Nominal</span>
                  <span className="text-slate-900 font-bold text-sm">{product.specs.velocidadMs}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Paradas y Recorrido</span>
                  <span className="text-slate-900 font-bold text-sm">{product.specs.paradasMax} ({product.specs.recorridoMax})</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Sistema de Tracción</span>
                  <span className="text-slate-900 font-bold text-sm">{product.specs.sistemaTraccion}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Cuarto de Máquinas</span>
                  <span className="text-slate-900 font-bold text-sm">{product.specs.cuartoMaquinas}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Alimentación Eléctrica</span>
                  <span className="text-slate-900 font-bold text-sm">{product.specs.alimentacion}</span>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                <Info className="w-4 h-4 text-[#085AB3] shrink-0 mt-0.5" />
                <span>
                  <strong>Solución personalizable:</strong> Estas especificaciones corresponden al rango estándar. En ADB Soluciones Vertical adaptamos el dimensionamiento de cabina, velocidad y potencia según la ingeniería específica de tu proyecto.
                </span>
              </div>
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Criterios de Obra y Ducto:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.architecturalRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500 italic mt-2">
                * Proveemos planos guía preliminares de obra civil con las cargas a losas y detalles de amarres sin costo al solicitar tu cotización.
              </p>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Dispositivos de Seguridad y Conformidad:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.standardNorms.map((norm, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#085AB3] shrink-0 mt-0.5" />
                    <span>{norm}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getWhatsAppLink('personalizado', `deseo cotizar y recibir información técnica detallada sobre: ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-4 py-2.5 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={handleQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-lg shadow-sm transition-all"
            id="modal-quote-submit-btn"
          >
            <span>Solicitar cotización para esta solución</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
