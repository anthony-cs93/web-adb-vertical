import React, { useState } from 'react';
import { PageView, Product } from '../../types';
import { productsData } from '../../data/productsData';
import { servicesData } from '../../data/servicesData';
import { faqData } from '../../data/faqData';
import { companyInfo, getWhatsAppLink } from '../../data/companyData';
import { ProductCard } from '../ProductCard';
import { QuoteWizard } from '../QuoteWizard';
import { ClientsCarousel } from '../ClientsCarousel';
import { ElevatorCadBlueprint } from '../ElevatorCadBlueprint';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Sliders, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Wrench, 
  ChevronDown, 
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: (solutionId?: string) => void;
  onOpenProductModal: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  onNavigate, 
  onOpenQuote, 
  onOpenProductModal 
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');

  const filteredProducts = activeCategoryFilter === 'todos'
    ? productsData
    : productsData.filter(p => p.category === activeCategoryFilter);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#02163B] text-white pt-10 pb-20 sm:pt-16 sm:pb-28">
        {/* Background Image & Architectural AutoCAD Blueprint Vector */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2400&q=95" 
            alt="Ingeniería y arquitectura de transporte vertical" 
            className="w-full h-full object-cover object-center opacity-20 scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered gradient overlays for contrast */}
          <div className="absolute inset-0 bg-linear-to-r from-[#02163B] via-[#02163B]/90 to-[#02163B]/70"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#02163B] via-transparent to-[#02163B]/80"></div>
          
          {/* Minimal Architectural AutoCAD Elevator Blueprint Sketch */}
          <ElevatorCadBlueprint />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            
            {/* Title */}
            <div className="space-y-2">
              <span className="block text-xs sm:text-sm font-extrabold tracking-widest uppercase text-cyan-400">
                Soluciones de Elevación de Alto Rendimiento
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Ascensores modernos y tecnología vertical <span className="text-cyan-400">diseñada a tu medida</span>.
              </h1>
            </div>

            {/* Subtitle / Value Pitch */}
            <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed font-normal">
              Diseñamos, suministramos, instalamos y mantenemos sistemas de elevación seguros, silenciosos y energéticamente eficientes para proyectos residenciales, comerciales e industriales en Lima y a nivel nacional.
            </p>

            {/* Highlights Chips Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 max-w-2xl">
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs border border-slate-700/60 px-3 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Seguridad Certificada</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs border border-slate-700/60 px-3 py-2 rounded-lg">
                <FileCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Norma Técnica EM.070</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs border border-slate-700/60 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                <Wrench className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Soporte 24/7 en Perú</span>
              </div>
            </div>

            {/* Technical Advisory Note */}
            <div className="flex items-center gap-2.5 text-xs text-blue-200 font-semibold border-l-2 border-cyan-400 pl-3 py-1 bg-blue-950/40 rounded-r-lg max-w-xl">
              <span className="text-cyan-300 font-medium">Asesoría de ingeniería y evaluación técnica desde planos de obra</span>
            </div>

            {/* CTAs Hierarchy */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#085AB3] to-[#0a6ad1] hover:from-[#074b94] hover:to-[#085AB3] text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-900/50 hover:shadow-xl transition-all border border-blue-400/30"
                id="hero-primary-quote-btn"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppLink('cotizacion')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-6 py-3.5 rounded-xl border border-emerald-400/50 transition-all shadow-md shadow-emerald-950/40"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Hablar con un asesor</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('catalogo-soluciones');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-sm font-semibold px-5 py-3.5 rounded-xl border border-slate-600/60 backdrop-blur-xs transition-colors"
                id="hero-secondary-solutions-btn"
              >
                <span>Ver catálogo</span>
              </motion.button>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-slate-400 pt-0.5">
              * Evaluamos tus planos arquitectónicos o pozo existente sin costo para recomendar la configuración ideal.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PUNTALES (Trust Pillars) */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
              Puntales de Nuestra Propuesta
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] mt-1">
              Confianza, capacidad técnica y compromiso con tu inversión
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Brindamos soluciones integrales de elevación con precios competitivos sin comprometer la seguridad ni la calidad de los componentes electromecánicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.pillars.map((pillar, idx) => {
              const icons = [ShieldCheck, Sliders, Cpu, Clock];
              const IconComp = icons[idx] || ShieldCheck;

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md hover:bg-blue-50/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#085AB3] flex items-center justify-center mb-3.5 group-hover:bg-[#085AB3] group-hover:text-white transition-colors shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#02163B] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 3. CATÁLOGO (Productos y Soluciones de Elevación) */}
      <motion.section 
        id="catalogo-soluciones" 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
                Catálogo de Soluciones
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B]">
              Soluciones verticales para cada necesidad arquitectónica
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Desde ascensores residenciales unifamiliares hasta equipos corporativos de alto tráfico y montacargas industriales pesados.
            </p>
          </div>

          {/* Quick Filter tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-end text-xs font-semibold">
            <button
              onClick={() => setActiveCategoryFilter('todos')}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                activeCategoryFilter === 'todos'
                  ? 'bg-white text-[#085AB3] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos (6)
            </button>
            <button
              onClick={() => setActiveCategoryFilter('pasajeros')}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                activeCategoryFilter === 'pasajeros'
                  ? 'bg-white text-[#085AB3] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pasajeros
            </button>
            <button
              onClick={() => setActiveCategoryFilter('residencial')}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                activeCategoryFilter === 'residencial'
                  ? 'bg-white text-[#085AB3] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Residencial
            </button>
            <button
              onClick={() => setActiveCategoryFilter('carga')}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                activeCategoryFilter === 'carga'
                  ? 'bg-white text-[#085AB3] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Carga & Montacargas
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={onOpenProductModal}
              onQuickQuote={onOpenQuote}
            />
          ))}
        </div>

        <div className="mt-8 text-center bg-blue-50/60 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
          <span>
            ¿No encuentras las medidas exactas de tu ducto o tienes una geometría especial?
          </span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenQuote()}
            className="font-bold text-[#085AB3] hover:text-[#074b94] underline flex items-center gap-1 shrink-0"
          >
            <span>Consultar desarrollo de solución a medida</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.section>

      {/* 4. ACOMPAÑAMIENTO (Nuestros Servicios Integrales de Elevación) */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
            Acompañamiento en Cada Etapa
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] mt-1">
            Nuestros Servicios Integrales de Elevación
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Acompañamos a constructoras, inmobiliarias, administradores de edificios y familias desde la evaluación técnica inicial hasta el mantenimiento postventa continuo.
          </p>
        </div>

        {/* 5 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-[#085AB3] block mb-2">0{idx + 1}</span>
                <h3 className="text-base font-bold text-[#02163B] group-hover:text-[#085AB3] transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => onNavigate('services')}
                  className="font-bold text-[#085AB3] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Ver alcance</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. ALIANZAS (Carrusel de Clientes y Alianzas B2B) */}
      <ClientsCarousel onOpenQuote={() => onOpenQuote()} />

      {/* 6. COTIZADOR (Soluciones a Medida & Cotizador Interactivo) */}
      <motion.section 
        id="cotizador-interactivo" 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        {/* Banner: Soluciones a medida: cada proyecto tiene necesidades únicas. */}
        <div className="bg-linear-to-br from-[#02163B] to-[#072B6B] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-blue-950/80 px-3 py-1 rounded-md border border-cyan-500/30">
                Principal Diferenciador ADB
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Ingeniería especializada • Fabricación y adaptación a ductos existentes
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white max-w-3xl">
              Soluciones a medida: cada proyecto tiene necesidades únicas.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl font-normal">
              En ADB no forzamos un modelo genérico en tu edificación. Diseñamos, suministramos e instalamos sistemas de elevación considerando minuciosamente cada factor arquitectónico y estructural:
            </p>
          </div>

          {/* Grid of adaptation pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: 'Espacio disponible y ducto existente',
                desc: 'Aprovechamiento de pozos con foso bajo o sobrerecorrido reducido sin comprometer seguridad.'
              },
              {
                title: 'Uso específico y flujo diario',
                desc: 'Cálculo de tráfico para edificios residenciales, clínicas, oficinas corporativas o industrias.'
              },
              {
                title: 'Capacidad requerida (kg / personas)',
                desc: 'Configuraciones desde 300 kg para casas particulares hasta montacargas de más de 3,000 kg.'
              },
              {
                title: 'Número de niveles y paradas',
                desc: 'Ajuste de velocidad, número de accesos y botoneras para un desplazamiento rápido y seguro.'
              },
              {
                title: 'Características arquitectónicas',
                desc: 'Cabinas en acero inoxidable, cristal panorámico, iluminación LED y acabados de alta durabilidad.'
              },
              {
                title: 'Presupuesto optimizado y transparente',
                desc: 'Ingeniería con precios competitivos y acompañamiento técnico directo desde la etapa de planos.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-slate-900/60 backdrop-blur-xs p-4 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all space-y-1.5"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('quote-wizard-container');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#0a6ad1] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-950/50 hover:shadow-xl transition-all border border-blue-400/30"
              id="custom-solution-cta-btn"
            >
              <span>Cotiza tu proyecto aquí</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink('personalizado', 'tengo un proyecto con medidas y requerimientos específicos y requiero orientación técnica a medida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3.5 rounded-xl border border-emerald-400/50 transition-all shadow-md shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar por WhatsApp</span>
            </motion.a>
          </div>
        </div>

        {/* Cotizador Interactivo Incorporado */}
        <div>
          <QuoteWizard isOpenModal={false} />
        </div>
      </motion.section>

      {/* 7. MANTENIMIENTO (Mantenimiento Preventivo y Correctivo) */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between relative">
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3] bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                  Mantenimiento Preventivo
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Un ascensor no termina su ciclo con la instalación.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  El mantenimiento preventivo mensual asegura la continuidad operativa, evita costosas detenciones de emergencia y prolonga la vida útil de cada componente electromecánico.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Inspección mensual de frenos y paracaídas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Lubricación y calibración de puertas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Atención técnica ante incidencias</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#02163B] mb-2">
                  ¿Tu edificio o empresa necesita servicio técnico para su ascensor?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ofrecemos planes adaptados tanto para residenciales de bajo tránsito como para torres corporativas de flujo continuo. Nuestro equipo realiza diagnósticos electromecánicos completos y mantenimiento preventivo riguroso.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-[#02163B] block">Plan Preventivo Residencial</span>
                    <span className="text-slate-500">Para viviendas y edificios pequeños</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-[#02163B] block">Plan Integral Proyectos</span>
                    <span className="text-slate-500">Para condominios y clínicas con alto flujo</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('maintenance')}
                  className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
                  id="home-maint-plans-btn"
                >
                  <span>Conocer planes de mantenimiento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppLink('mantenimiento')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar servicio técnico</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 8. FAQ (Preguntas Frecuentes) */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02163B] mt-1">
            Resolvemos tus dudas sobre soluciones de elevación
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors hover:bg-slate-50/60"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <span className="text-xs sm:text-sm font-bold text-[#02163B]">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#085AB3]' : ''
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* FINAL HIGH-CONVERSION CTA BANNER */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"
      >
        <div className="bg-[#02163B] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3] bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              ¿Listo para evaluar tu proyecto?
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Diseñamos la solución de elevación que tu proyecto necesita.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Solicita hoy una cotización preliminar sin compromiso. Nuestro equipo técnico evaluará tu plano o requerimiento y te orientará con transparencia.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
                id="bottom-banner-quote-btn"
              >
                <span>Solicitar cotización de proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppLink('cotizacion')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md"
                id="bottom-banner-wa-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablar por WhatsApp</span>
              </motion.a>
            </div>

            <p className="text-[11px] text-slate-400 pt-1">
              Atención a constructoras, arquitectos, administradores y propietarios particulares en todo el Perú.
            </p>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
