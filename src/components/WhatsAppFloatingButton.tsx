import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, ShieldCheck, Home, Building2, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { companyInfo, getWhatsAppLink } from '../data/companyData';

interface WhatsAppFloatingButtonProps {
  currentPage?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentPage = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getPresetMessage = (type: 'general' | 'cotizacion' | 'residencial' | 'pasajeros' | 'mantenimiento') => {
    return getWhatsAppLink(type);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 15, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
          {/* Header */}
          <div className="bg-[#02163B] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#02163B] rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Asesoría Técnica ADB</h4>
                <p className="text-xs text-emerald-300 font-medium">Asesores disponibles en Perú</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
              id="close-wa-popup-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-xs text-slate-700">
              <p className="font-semibold text-[#02163B] mb-1">¡Hola! ¿En qué tipo de proyecto podemos ayudarte?</p>
              <p className="text-slate-500">Selecciona una opción para escribirnos directamente a WhatsApp con los detalles de tu consulta:</p>
            </div>

            <div className="space-y-2">
              <a
                href={getPresetMessage('cotizacion')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-semibold text-slate-800 transition-all group"
                id="wa-opt-quote"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#085AB3] flex items-center justify-center group-hover:bg-[#085AB3] group-hover:text-white transition-colors">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                  <span>Solicitar cotización general</span>
                </div>
                <span className="text-[#085AB3] font-bold text-[11px]">Enviar →</span>
              </a>

              <a
                href={getPresetMessage('residencial')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-semibold text-slate-800 transition-all group"
                id="wa-opt-residential"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#085AB3] group-hover:text-white transition-colors">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <span>Ascensor para casa / unifamiliar</span>
                </div>
                <span className="text-[#085AB3] font-bold text-[11px]">Enviar →</span>
              </a>

              <a
                href={getPresetMessage('pasajeros')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-semibold text-slate-800 transition-all group"
                id="wa-opt-commercial"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#085AB3] group-hover:text-white transition-colors">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Edificio / Proyecto Inmobiliario</span>
                </div>
                <span className="text-[#085AB3] font-bold text-[11px]">Enviar →</span>
              </a>

              <a
                href={getPresetMessage('mantenimiento')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-semibold text-slate-800 transition-all group"
                id="wa-opt-maint"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#085AB3] group-hover:text-white transition-colors">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                  <span>Mantenimiento preventivo</span>
                </div>
                <span className="text-[#085AB3] font-bold text-[11px]">Enviar →</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Respuesta ágil y confidencial
              </span>
              <span>{companyInfo.whatsappDisplay}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Floating Button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOpen(!isOpen)}
      className="relative group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-colors duration-200 focus:outline-none"
      aria-label="Contactar por WhatsApp a ADB Soluciones Vertical"
      id="floating-whatsapp-main-btn"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
        </span>
      </div>
      <span className="text-sm tracking-tight hidden md:inline font-bold">
        {isOpen ? 'Cerrar chat' : 'WhatsApp'}
      </span>
    </motion.button>
  </div>
  );
};
