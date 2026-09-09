import React from 'react';
import { PageView } from '../../types';
import { companyInfo, getWhatsAppLink } from '../../data/companyData';
import { QuoteWizard } from '../QuoteWizard';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactViewProps {
  onNavigate: (page: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
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
              <span>Canales de Atención</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contáctanos y Cotiza tu Proyecto de Elevación
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Atención personalizada para constructoras, arquitectos, administradores de edificios y propietarios en Lima y a nivel nacional en el Perú.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Contact Cards + Quote Form */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & NAP */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Channel: WhatsApp */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 text-slate-800 space-y-3 shadow-xs"
            >
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Canal de Atención Inmediata</span>
              </div>
              <h3 className="text-xl font-bold text-[#02163B]">
                WhatsApp Asesoría Técnica
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escríbenos directamente para consultas rápidas, coordinación de visitas técnicas o envío directo de planos y fotografías de obra.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors text-sm"
                id="contact-page-wa-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Escribir al WhatsApp: {companyInfo.whatsappDisplay}</span>
              </motion.a>
            </motion.div>

            {/* Telephone & Email Info Cards */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-xs"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#02163B] border-b border-slate-100 pb-3">
                Información de Contacto
              </h4>

              <div className="space-y-4 text-xs text-slate-700">
                {/* Central Telefónica */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-[#085AB3] rounded-lg shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[11px] uppercase">Central Telefónica / Celular</span>
                    <a 
                      href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-bold text-[#02163B] hover:text-[#085AB3] text-sm transition-colors"
                    >
                      {companyInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Cotizaciones Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-[#085AB3] rounded-lg shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[11px] uppercase">Email de Cotizaciones</span>
                    <a 
                      href={`mailto:${companyInfo.emailSales}`}
                      className="font-bold text-[#02163B] hover:text-[#085AB3] text-sm break-all transition-colors"
                    >
                      {companyInfo.emailSales}
                    </a>
                  </div>
                </div>

                {/* Ubicación & Taller */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-[#085AB3] rounded-lg shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[11px] uppercase">Base Operativa & Taller</span>
                    <p className="font-semibold text-slate-800 text-xs">
                      {companyInfo.location.address}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Lima, Perú &bull; Cobertura técnica a nivel nacional
                    </p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-[#085AB3] rounded-lg shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[11px] uppercase">Horario de Atención</span>
                    <p className="font-semibold text-slate-800 text-xs">
                      {companyInfo.schedule.weekdays}
                    </p>
                    <p className="text-slate-600 text-[11px]">
                      {companyInfo.schedule.saturdays}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Peru Nationwide Coverage Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 text-xs text-slate-700">
              <span className="font-bold text-[#02163B] block">
                Cobertura en Todo el Territorio Nacional
              </span>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {companyInfo.location.serviceArea}
              </p>
            </div>

          </div>

          {/* Right Column: Embedded Quote Form */}
          <div className="lg:col-span-7">
            <QuoteWizard />
          </div>

        </div>
      </motion.section>

    </div>
  );
};
