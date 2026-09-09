import React, { useState } from 'react';
import { PageView } from '../../types';
import { servicesData, processStages } from '../../data/servicesData';
import { getWhatsAppLink } from '../../data/companyData';
import { 
  Hammer, 
  Ship, 
  Compass, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  FileCheck,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesViewProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: (solution?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const selectedService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return Hammer;
      case 'Ship': return Ship;
      case 'Compass': return Compass;
      case 'Layers': return Layers;
      case 'Wrench': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      default: return Wrench;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Top Banner */}
      <section className="bg-[#02163B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-[#085AB3] text-white text-xs font-bold px-3 py-1 rounded">
              <span>Proceso de Trabajo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Acompañamiento técnico de principio a fin en tu proyecto.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Desde la ingeniería conceptual y el diseño a medida hasta la fabricación, instalación rigurosa y el mantenimiento preventivo en el Perú.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Explorer */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Navigation of Services */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 px-2">
              Nuestras 5 Etapas de Trabajo
            </span>

            {servicesData.map((service, idx) => {
              const IconComp = getServiceIcon(service.iconName);
              const isSelected = service.id === selectedServiceId;

              return (
                <motion.button
                  key={service.id}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#085AB3] border-[#085AB3] text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                  id={`service-tab-${service.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#085AB3]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs opacity-75 block">Etapa 0{idx + 1}</span>
                      <span className="text-sm font-bold block">{service.name}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-slate-400 group-hover:text-slate-700'
                  }`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detailed Service Showcase */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6"
              >
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-xs font-bold text-[#085AB3] uppercase tracking-wider">
                      Detalle del Proceso
                    </span>
                    <h2 className="text-2xl font-bold text-[#02163B] mt-1">
                      {selectedService.name}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {selectedService.subtitle}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenQuote()}
                    className="inline-flex items-center gap-1.5 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition-colors self-start sm:self-auto"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

                {/* Service Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Image + Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5 aspect-4/3 rounded-xl overflow-hidden shadow-xs border border-slate-200 group">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="sm:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Alcance Operativo:
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {selectedService.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#085AB3] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Entregables Técnicos:
                      </h3>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        {selectedService.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp direct contact for this specific service */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-slate-50 p-4 rounded-xl">
                  <span className="text-slate-600 font-medium">
                    ¿Deseas consultar condiciones o plazos sobre {selectedService.name.toLowerCase()}?
                  </span>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={getWhatsAppLink('personalizado', `deseo consultar sobre el servicio de: ${selectedService.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold bg-white border border-emerald-300 px-3.5 py-2 rounded-lg transition-colors shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Consultar por WhatsApp</span>
                  </motion.a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </motion.section>

      {/* 5 Stages Process */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3] bg-blue-950 px-3 py-1 rounded border border-blue-800">
              Metodología de Trabajo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Nuestro Proceso en 5 Etapas
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Un flujo de trabajo transparente y riguroso para asegurar que tu ascensor opere con la máxima seguridad y puntualidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processStages.map((st, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3 hover:border-blue-400/50 hover:bg-slate-800 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#085AB3] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">
                  {st.step}
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {st.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Direct CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-[#02163B]">
            ¿Tienes un proyecto en fase de planos o construcción?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Envíanos las medidas de tu ducto o los planos preliminares para entregarte una memoria descriptiva y propuesta económica adaptada.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <span>Solicitar cotización técnica</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
