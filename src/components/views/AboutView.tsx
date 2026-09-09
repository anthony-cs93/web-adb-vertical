import React from 'react';
import { PageView } from '../../types';
import { companyInfo, getWhatsAppLink } from '../../data/companyData';
import { 
  ShieldCheck, 
  Target, 
  Sliders, 
  Cpu, 
  Users, 
  Building2, 
  MapPin, 
  ArrowRight, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenQuote }) => {
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
              <span>ADB Soluciones Vertical</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ingeniería y compromiso en cada trayecto vertical.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Somos una empresa peruana orientada a transformar la movilidad vertical en proyectos residenciales, comerciales e industriales, ofreciendo soluciones a medida que combinan seguridad, tecnología de vanguardia y precios competitivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiénes somos & Filosofía */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
              Nuestra Esencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] leading-tight">
              Diseñamos soluciones pensando en las personas y en la arquitectura de cada inmueble.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              En <strong>ADB Soluciones Vertical</strong> entendemos que un ascensor o plataforma de elevación no es simplemente una máquina; es la arteria que conecta los espacios de tu vida cotidiana o laboral.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Por ello, nuestro enfoque no es imponer modelos prefabricados genéricos. Evaluamos detalladamente cada ducto, foso, altura de último piso y flujo de personas para suministrar e instalar el equipo exacto que optimiza espacio, consumo energético y presupuesto.
            </p>

            <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#085AB3] shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-800">Transparencia técnica y comercial</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#085AB3] shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-800">Seguridad sin concesiones</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 h-full flex flex-col justify-center">
            <div className="w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                alt="Ingeniería y arquitectura en elevación ADB Soluciones Vertical"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#02163B]/90 via-[#02163B]/35 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="inline-block bg-[#085AB3] text-white text-[11px] font-bold px-2.5 py-1 rounded w-fit mb-2 uppercase tracking-wider">
                  Ingeniería & Seguridad
                </span>
                <p className="text-white text-base sm:text-lg font-bold leading-snug">
                  Compromiso con la seguridad estructural y electromecánica en el Perú
                </p>
                <p className="text-slate-200 text-xs mt-1.5 font-medium">
                  Cumplimiento de normativas técnicas EM.070, EN 81-20/50 y ASME A17.1
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Los 4 Pilares Corporativos */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
            Nuestros Pilares
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] mt-1">
            Lo que define a ADB Soluciones Vertical
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.pillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-[#085AB3] text-[#085AB3] group-hover:text-white flex items-center justify-center font-bold mb-4 transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[#02163B] mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Enfoque B2B y B2C */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
              Modelos de Atención
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] mt-1">
              Atendemos con precisión tanto proyectos corporativos como residenciales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B2B */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-[#085AB3] rounded-lg">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#02163B]">Sector B2B / Proyectos & Edificios</h3>
                  <span className="text-xs text-slate-500 font-medium">Constructoras, Inmobiliarias, Hoteles, Clínicas</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Entregamos soluciones técnicas rigurosas, planos guía para obra civil, cumplimiento de cronogramas de entrega, dossiers de calidad y contratos de mantenimiento postventa que protegen la inversión del promotor.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#085AB3]" />
                  <span>Estudios de tráfico vertical y despacho</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#085AB3]" />
                  <span>Suministro e importación con certificaciones</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#085AB3]" />
                  <span>Comisionamiento y protocolos de seguridad</span>
                </li>
              </ul>
            </motion.div>

            {/* B2C */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#02163B]">Sector B2C / Hogares & Residencias</h3>
                  <span className="text-xs text-slate-500 font-medium">Casas unifamiliares, dúplex, accesibilidad familiar</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Explicamos cada detalle en un lenguaje cercano y accesible. Asesoramos a familias y adultos mayores para integrar un ascensor o salvaescaleras en su vivienda con mínimas obras, bajo consumo eléctrico y diseño armónico.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Fosos reducidos y bajo impacto civil</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consumo similar a un electrodoméstico común</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Botoneras accesibles y rescate automático</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cobertura en Perú */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#085AB3] uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Cobertura Geográfica</span>
            </div>
            <h3 className="text-xl font-bold text-[#02163B]">
              Atención en Lima Metropolitana y Principales Regiones del Perú
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nuestra base operativa se encuentra en Lima, con capacidad para brindar suministro, montaje y supervisión técnica en proyectos de Arequipa, Trujillo, Cusco, Piura, Chiclayo, Huancayo y otras ciudades del país.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <span>Solicitar cotización</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hablar con un asesor</span>
            </motion.a>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
