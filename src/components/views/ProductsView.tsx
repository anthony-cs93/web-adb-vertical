import React, { useState } from 'react';
import { PageView, Product } from '../../types';
import { productsData } from '../../data/productsData';
import { ProductCard } from '../ProductCard';
import { getWhatsAppLink } from '../../data/companyData';
import { 
  Building2, 
  Home, 
  Truck, 
  Accessibility, 
  Layers, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Sliders,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductsViewProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: (solutionId?: string) => void;
  onOpenProductModal: (product: Product) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenProductModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedAudience, setSelectedAudience] = useState<string>('todos');

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
    const matchesAudience = selectedAudience === 'todos' || p.targetAudience.includes(selectedAudience);
    return matchesCategory && matchesAudience;
  });

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      
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
              <span>Catálogo de Soluciones Verticales</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Equipos de elevación diseñados para tu proyecto en el Perú.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Soluciones para edificios corporativos, condominios residenciales, viviendas unifamiliares, almacenes industriales y accesibilidad universal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Catalogue Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Filters Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-bold uppercase text-[11px] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Categoría:
            </span>
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'pasajeros', label: 'Pasajeros' },
              { id: 'residencial', label: 'Residencial' },
              { id: 'carga', label: 'Carga Pesada' },
              { id: 'montacargas', label: 'Montacargas' },
              { id: 'plataformas', label: 'Plataformas' },
              { id: 'accesibilidad', label: 'Accesibilidad' }
            ].map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#085AB3] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                id={`cat-filter-${cat.id}`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Audience Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-bold uppercase text-[11px]">Enfoque:</span>
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'B2B', label: 'B2B (Empresas)' },
              { id: 'B2C', label: 'B2C (Hogar)' }
            ].map((aud) => (
              <motion.button
                key={aud.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedAudience(aud.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                  selectedAudience === aud.id
                    ? 'bg-[#02163B] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {aud.label}
              </motion.button>
            ))}
          </div>

        </div>

        {/* Products Grid */}
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">
              No se encontraron soluciones con los filtros seleccionados.
            </p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSelectedAudience('todos'); }}
              className="mt-3 text-xs text-[#085AB3] font-bold underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </motion.section>

      {/* Quick Specs Comparative Table */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3]">
              Cuadro Comparativo Orientativo
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#02163B] mt-1">
              Especificaciones de referencia por línea de producto
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Las dimensiones y velocidades se adaptan a la memoria de cálculo de cada proyecto en obra.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                  <th className="p-3 font-bold">Línea de Solución</th>
                  <th className="p-3 font-bold">Capacidad Típica</th>
                  <th className="p-3 font-bold">Velocidad</th>
                  <th className="p-3 font-bold">Paradas Máx.</th>
                  <th className="p-3 font-bold">Cuarto de Máquinas</th>
                  <th className="p-3 font-bold text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {productsData.map((prod) => (
                  <tr key={prod.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-3 font-bold text-slate-900 flex items-center gap-2">
                      <span>{prod.name}</span>
                    </td>
                    <td className="p-3">{prod.specs.capacidadKg.split('(')[0]}</td>
                    <td className="p-3 font-medium text-slate-800">{prod.specs.velocidadMs}</td>
                    <td className="p-3">{prod.specs.paradasMax}</td>
                    <td className="p-3">{prod.specs.cuartoMaquinas}</td>
                    <td className="p-3 text-right">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onOpenProductModal(prod)}
                        className="text-[#085AB3] hover:underline font-bold"
                      >
                        Ver ficha →
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Quote Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#02163B] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold">¿Tienes dudas sobre qué equipo elegir?</h3>
            <p className="text-xs text-slate-300">
              Nuestro departamento técnico te asesora sin costo para determinar la mejor configuración según tu tráfico y estructura.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <span>Solicitar cotización formal</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink('cotizacion')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </motion.a>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
