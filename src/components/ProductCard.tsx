import React from 'react';
import { Product } from '../types';
import { getWhatsAppLink } from '../data/companyData';
import { ArrowRight, CheckCircle2, MessageSquare, Shield, Users, Building, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onQuickQuote: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onOpenDetails, 
  onQuickQuote 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col group"
      id={`product-card-${product.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Overlay Badge */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className="bg-[#02163B]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-xs border border-white/10">
            {product.targetAudience}
          </span>
          <span className="bg-[#085AB3]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs">
            {product.specs.capacidadKg.split('(')[0].trim()}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#02163B] group-hover:text-[#085AB3] transition-colors leading-snug">
            {product.name}
          </h3>
          
          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Quick Applications list */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Ideal para:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.applications.slice(0, 2).map((app, idx) => (
                <span 
                  key={idx}
                  className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 font-medium"
                >
                  {app}
                </span>
              ))}
              {product.applications.length > 2 && (
                <span className="text-[11px] text-[#085AB3] font-semibold self-center">
                  +{product.applications.length - 2} más
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenDetails(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-[#085AB3] text-xs font-bold py-2.5 px-3 rounded-lg border border-slate-200 hover:border-blue-200 transition-all"
            id={`btn-view-details-${product.id}`}
          >
            <span>Ver solución</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          <motion.a
            whileTap={{ scale: 0.94 }}
            href={getWhatsAppLink('personalizado', `quiero cotizar la solución: ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all shrink-0 hover:shadow-xs"
            title="Consultar por WhatsApp"
            id={`btn-wa-direct-${product.id}`}
          >
            <MessageSquare className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
