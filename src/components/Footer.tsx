import React from 'react';
import { PageView } from '../types';
import { companyInfo, getWhatsAppLink } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: (solution?: string) => void;
  onSelectProductModal: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenQuote,
  onSelectProductModal 
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { id: 'ascensores-pasajeros', label: 'Ascensores para Pasajeros' },
    { id: 'ascensores-residenciales', label: 'Ascensores Residenciales' },
    { id: 'ascensores-carga', label: 'Ascensores para Carga' },
    { id: 'montacargas', label: 'Montacargas y Montaplatos' },
    { id: 'plataformas-elevadoras', label: 'Plataformas Elevadoras' },
    { id: 'elevadores-accesibilidad', label: 'Elevadores para Discapacidad' }
  ];

  return (
    <footer className="bg-[#02163B] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid: Brand + 2 Columns (Soluciones y Atención Directa) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col items-start gap-1">
              <div className="bg-[#031D4D]/90 border border-blue-900/40 rounded-xl p-3 px-4 shadow-sm inline-block">
                <BrandLogo size="md" theme="negative" showSubtitle={true} className="h-11" />
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Empresa peruana especializada en ingeniería, fabricación, importación, instalación y mantenimiento de ascensores y plataformas de elevación. Diseñamos soluciones a medida para proyectos residenciales, comerciales e industriales en Lima y a nivel nacional.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#085AB3] shrink-0 mt-0.5" />
                <span>{companyInfo.location.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#085AB3] shrink-0 mt-0.5" />
                <span>{companyInfo.schedule.weekdays} | {companyInfo.schedule.saturdays}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Soluciones (incluye Planes de Mantenimiento) (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#085AB3] rounded-sm"></span>
              Soluciones
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {productLinks.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => {
                      onSelectProductModal(prod.id);
                    }}
                    className="hover:text-white hover:underline transition-colors text-left flex items-center gap-1.5 group"
                    id={`footer-prod-${prod.id}`}
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#085AB3] transition-colors" />
                    <span>{prod.label}</span>
                  </button>
                </li>
              ))}
              
              {/* Planes de Mantenimiento integrado en Soluciones */}
              <li className="pt-2 border-t border-slate-800/80 mt-3">
                <button
                  onClick={() => handleNav('maintenance')}
                  className="text-blue-300 hover:text-white font-semibold flex items-center gap-1.5 transition-colors group"
                  id="footer-maint-link"
                >
                  <ShieldCheck className="w-4 h-4 text-[#0062B8] group-hover:text-blue-400 shrink-0" />
                  <span>Planes de Mantenimiento</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Canales de Atención Directa (4 cols on lg, ancho completo para evitar colapsos) */}
          <div className="lg:col-span-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#085AB3] rounded-sm"></span>
              Atención Directa
            </h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Canal Principal:</p>
                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1.5 text-emerald-400 hover:text-emerald-300 font-semibold bg-emerald-950/40 border border-emerald-800/60 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  id="footer-wa-channel"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {companyInfo.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Central Telefónica:</p>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 mt-1.5 hover:text-white font-medium transition-colors"
                  id="footer-phone-channel"
                >
                  <Phone className="w-3.5 h-3.5 text-[#085AB3] shrink-0" />
                  <span>{companyInfo.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Cotizaciones por Email:</p>
                <a
                  href={`mailto:${companyInfo.emailSales}`}
                  className="inline-flex items-center gap-2 mt-1.5 hover:text-white font-medium transition-colors"
                  id="footer-email-channel"
                >
                  <Mail className="w-3.5 h-3.5 text-[#085AB3] shrink-0" />
                  <span className="select-all">{companyInfo.emailSales}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="text-xs text-slate-300 hover:text-white underline transition-colors"
                  id="footer-contact-page-link"
                >
                  Ver formulario de contacto y canales de atención
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & SEO notes & Credits */}
        <div className="pt-8 flex flex-col items-center justify-center gap-3.5 text-xs text-slate-400 text-center">
          <div>
            <p>© {currentYear} ADB Soluciones Vertical. Todos los derechos reservados.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Empresa peruana de elevación y transporte vertical. Lima - Perú.
            </p>
          </div>

          <div>
            <a 
              href="https://scalio-web-pi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-[11px] text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-xs group"
              id="footer-designer-credit"
            >
              <span>Web diseñada por</span>
              <span className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                Scalio
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
