import React, { useState } from 'react';
import { PageView } from '../../types';
import { maintenancePlans } from '../../data/servicesData';
import { getWhatsAppLink, companyInfo } from '../../data/companyData';
import { 
  ShieldCheck, 
  Wrench, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  FileText,
  Activity,
  Zap,
  Sparkles
} from 'lucide-react';

interface MaintenanceViewProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: (solution?: string) => void;
}

export const MaintenanceView: React.FC<MaintenanceViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('integral-corporativo');

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Top Banner */}
      <section className="bg-[#02163B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#085AB3] text-white text-xs font-bold px-3 py-1 rounded">
              <span>Servicio Postventa</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Mantenimiento Preventivo y Correctivo de Ascensores en Perú
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Un ascensor no termina su ciclo con la instalación. La inspección periódica y el ajuste técnico continuo garantizan la seguridad de los usuarios y protegen el valor de tu inmueble.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué es crítico el mantenimiento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
              Seguridad & Prevención
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] leading-tight">
              Prevenir fallas antes de que originen detenciones imprevistas.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Los ascensores y montacargas operan bajo esfuerzos mecánicos y eléctricos continuos. Un plan de mantenimiento preventivo mensual no es un gasto, sino la salvaguarda indispensable para:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                { title: 'Seguridad de los usuarios', desc: 'Revisión exhaustiva de paracaídas mecánicos, limitadores y frenos.' },
                { title: 'Continuidad operativa', desc: 'Evita paradas intempestivas en horas punta del edificio.' },
                { title: 'Conservación del equipo', desc: 'Prolonga la vida útil de cables de tracción, poleas y motor.' },
                { title: 'Detección temprana', desc: 'Identifica desgastes menores antes de que se conviertan en averías mayores.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#02163B] block mb-1">{item.title}</span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-[#02163B] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#085AB3]" />
                  Checklist de Inspección Técnica Mensual
                </h3>
                <span className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">
                  Protocolo ADB
                </span>
              </div>

              <ul className="space-y-2 text-xs text-slate-700">
                {[
                  'Inspección y calibración de zapatas y disco de freno',
                  'Comprobación de contactos eléctricos y cerraduras de piso',
                  'Revisión de cables de tracción y tensión uniforme',
                  'Limpieza y lubricación de rieles y guías de cabina',
                  'Verificación de barreras fotoeléctricas infrarrojas',
                  'Prueba de luz de emergencia y teléfono de intercomunicación',
                  'Ajuste fino de nivelación de parada en cada piso'
                ].map((check, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={getWhatsAppLink('mantenimiento')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar plan para mi edificio</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Planes de Mantenimiento Estructurados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
            Cobertura & Modalidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] mt-1">
            Planes de Mantenimiento Adaptados a Cada Inmueble
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Estructuras de servicio transparentes para viviendas, edificios residenciales multifamiliares y centros industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {maintenancePlans.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-xs flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? 'border-[#085AB3] ring-2 ring-[#085AB3]/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-6 bg-[#085AB3] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    Más Solicitado
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#02163B]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {plan.recommendedFor}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Incluye en cada ciclo:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#085AB3] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] text-slate-500 block">
                    <strong>Alcance:</strong> {plan.coverage}
                  </span>
                  <a
                    href={getWhatsAppLink('personalizado', `deseo solicitar una propuesta para el ${plan.name} de mi inmueble.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl transition-all ${
                      isPopular
                        ? 'bg-[#085AB3] hover:bg-[#074b94] text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-blue-50 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Cotizar este plan</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Atención de Contingencias & Emergencias */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-800 px-2.5 py-1 rounded">
              <Clock className="w-3.5 h-3.5" />
              <span>Soporte Técnico Especializado</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              ¿Tu equipo presentó una incidencia o detención?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contamos con canales de comunicación directa y protocolos de atención técnica para contratos de mantenimiento vigentes en Lima Metropolitana y coordinación en provincias.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-[#085AB3]" />
              <span>Llamar: {companyInfo.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppLink('mantenimiento')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Soporte</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
