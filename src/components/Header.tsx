import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { companyInfo, getWhatsAppLink } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenQuote: (defaultSolution?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'products', label: 'Soluciones' },
    { id: 'services', label: 'Proceso' },
    { id: 'maintenance', label: 'Mantenimiento' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar - Contact & Location info */}
      <div className="bg-[#02163B] text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="hidden md:flex items-center space-x-4">
            <span className="inline-flex items-center text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Atención técnica en Lima y todo el Perú
            </span>
          </div>

          <div className="flex items-center justify-between md:justify-end w-full md:w-auto space-x-2 sm:space-x-4 text-xs">
            {/* Direct click-to-call phone link for mobile & desktop */}
            <a 
              href="tel:+51922248755"
              className="inline-flex items-center gap-1.5 font-semibold text-white bg-[#085AB3] hover:bg-[#074b94] px-2.5 py-1 rounded-md transition-all active:scale-95 shadow-xs"
              id="topbar-phone-link"
              title="Llamar directamente a ADB Soluciones Vertical: +51 922 248 755"
            >
              <Phone className="w-3.5 h-3.5 text-blue-200 shrink-0" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>

            <a 
              href={getWhatsAppLink('general')}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1 rounded-md transition-all active:scale-95 shadow-xs"
              id="topbar-whatsapp-link"
              title="Abrir chat en WhatsApp: +51 922 248 755"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-100 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Official ADB Logo (Versión Original para fondo claro) */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 group text-left focus:outline-none py-1 transition-transform active:scale-[0.99]"
              id="header-brand-logo-btn"
              title="ADB Soluciones Vertical - Inicio"
            >
              <BrandLogo size="md" theme="original" showSubtitle={true} className="h-10 sm:h-12" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegación principal">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                      isActive 
                        ? 'text-[#085AB3] bg-blue-50/70 font-bold' 
                        : 'text-slate-700 hover:text-[#085AB3] hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#085AB3] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppLink('general', 'Hola, deseo hablar con un asesor técnico de ADB Soluciones Vertical.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#085AB3] px-3 py-2 rounded-md border border-slate-200 hover:border-blue-200 transition-colors"
                id="header-advisor-btn"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#085AB3]" />
                Hablar con un asesor
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
                id="header-quote-primary-btn"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex sm:hidden items-center text-xs font-bold bg-[#085AB3] text-white px-3 py-2 rounded-md"
                id="header-mobile-quick-quote-btn"
              >
                Cotizar
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Abrir menú de navegación"
                id="header-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-lg text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-[#085AB3] font-bold' 
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#085AB3]"></div>}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-base font-bold py-3 px-4 rounded-lg shadow-sm transition-colors"
                id="mobile-drawer-quote-btn"
              >
                <span>Solicitar cotización formal</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <a
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold py-3 px-4 rounded-lg transition-colors"
                id="mobile-drawer-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href="tel:+51922248755"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-slate-200 transition-colors"
                id="mobile-drawer-call-btn"
              >
                <Phone className="w-4 h-4 text-[#085AB3]" />
                <span>Llamar a Asesor: {companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
