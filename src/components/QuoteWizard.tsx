import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { productsData } from '../data/productsData';
import { companyInfo, getWhatsAppLink } from '../data/companyData';
import { 
  Building2, 
  Layers, 
  MapPin, 
  Users, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  UploadCloud, 
  X, 
  MessageSquare,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteWizardProps {
  initialSolution?: string;
  onSuccess?: () => void;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

const initialFormState: QuoteFormData = {
  projectType: 'Edificio Residencial Multifamiliar',
  solutionType: 'ascensores-pasajeros',
  city: 'Lima',
  floorsCount: 5,
  stopsCount: 5,
  estimatedCapacity: '6 a 8 personas (450 - 630 kg)',
  usageType: 'Tránsito residencial regular',
  projectStatus: 'En etapa de diseño / planos',
  
  machineRoomOption: 'Sin cuarto de máquinas (MRL)',
  aestheticFinish: 'Acero inoxidable satinado',
  estimatedBudget: 'A consultar con propuesta técnica',
  hasArchitecturalPlans: true,
  notes: '',
  attachedFiles: [],

  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  whatsapp: '',
  role: 'Propietario / Cliente Final',
  preferredContactMethod: 'whatsapp'
};

export const QuoteWizard: React.FC<QuoteWizardProps> = ({ 
  initialSolution, 
  onSuccess,
  isOpenModal = false,
  onCloseModal
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [quoteReference, setQuoteReference] = useState('');

  useEffect(() => {
    if (initialSolution) {
      setFormData(prev => ({ ...prev, solutionType: initialSolution }));
    }
  }, [initialSolution]);

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (fileName: string) => {
    if (!uploadedFiles.includes(fileName)) {
      const newFiles = [...uploadedFiles, fileName];
      setUploadedFiles(newFiles);
      setFormData(prev => ({ ...prev, attachedFiles: newFiles }));
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setFormData(prev => ({ ...prev, attachedFiles: newFiles }));
  };

  const validateStep1 = () => {
    return formData.projectType && formData.solutionType && formData.city && formData.floorsCount > 0;
  };

  const validateStep3 = () => {
    return formData.fullName.trim().length > 2 && (formData.whatsapp.trim().length > 6 || formData.phone.trim().length > 6 || formData.email.trim().length > 5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    // Generate clean Peruvian quote reference code e.g. ADB-2026-X841
    const refNumber = `ADB-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteReference(refNumber);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  // Compile WhatsApp URL with clean structured parameters
  const generateWhatsAppSubmissionURL = () => {
    const selectedProd = productsData.find(p => p.id === formData.solutionType)?.name || formData.solutionType;
    const msg = `*SOLICITUD DE COTIZACIÓN - ADB SOLUCIONES VERTICAL*\n` +
      `*Código Ref:* ${quoteReference || 'COT-ADB'}\n\n` +
      `*Cliente:* ${formData.fullName} ${formData.companyName ? `(${formData.companyName})` : ''}\n` +
      `*Contacto:* ${formData.whatsapp || formData.phone} | ${formData.email}\n` +
      `*Ciudad:* ${formData.city} (Perú)\n` +
      `*Solución:* ${selectedProd}\n` +
      `*Tipo de Inmueble:* ${formData.projectType}\n` +
      `*Pisos/Paradas:* ${formData.floorsCount} pisos / ${formData.stopsCount} paradas\n` +
      `*Capacidad estimada:* ${formData.estimatedCapacity}\n` +
      `*Estado del proyecto:* ${formData.projectStatus}\n` +
      `*Configuración:* ${formData.machineRoomOption} | Acabado: ${formData.aestheticFinish}\n` +
      (formData.notes ? `*Detalles adicionales:* ${formData.notes}\n` : '') +
      (uploadedFiles.length > 0 ? `*Planos/Archivos preparados:* ${uploadedFiles.join(', ')}\n` : '');

    return `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden ${isOpenModal ? 'max-w-3xl w-full' : 'w-full'}`} id="quote-wizard-container">
      {/* Top Header */}
      <div className="bg-[#02163B] text-white p-6 relative">
        {isOpenModal && onCloseModal && (
          <button
            onClick={onCloseModal}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-lg bg-slate-800 transition-colors"
            aria-label="Cerrar formulario de cotización"
            id="close-quote-wizard-modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#085AB3] bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800">
            Cotizador Técnico de Proyectos
          </span>
          <span className="text-xs text-slate-400">Sin compromiso</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
          Solicitar Cotización de Solución de Elevación
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
          Cuéntanos qué necesitas y te orientaremos sobre la solución técnica y económica más adecuada para tu inmueble en Perú.
        </p>

        {/* Step Indicator Progress */}
        {!isSubmitted && (
          <div className="mt-6 flex items-center justify-between gap-2 max-w-md">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                currentStep >= 1 ? 'bg-[#085AB3] text-white' : 'bg-slate-700 text-slate-300'
              }`}>
                1
              </div>
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Proyecto</span>
            </div>

            <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 2 ? 'bg-[#085AB3]' : 'bg-slate-700'}`}></div>

            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                currentStep >= 2 ? 'bg-[#085AB3] text-white' : 'bg-slate-700 text-slate-300'
              }`}>
                2
              </div>
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Detalles</span>
            </div>

            <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 3 ? 'bg-[#085AB3]' : 'bg-slate-700'}`}></div>

            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                currentStep === 3 ? 'bg-[#085AB3] text-white' : 'bg-slate-700 text-slate-300'
              }`}>
                3
              </div>
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Contacto</span>
            </div>
          </div>
        )}
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* SUCCESS STATE */
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="text-center py-6 space-y-6"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#085AB3]">
                  Referencia: {quoteReference}
                </span>
                <h3 className="text-2xl font-bold text-[#02163B] mt-1">
                  ¡Gracias por compartir tu proyecto!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                  Un asesor de <strong>ADB Soluciones Vertical</strong> revisará la información y se pondrá en contacto contigo a la brevedad con una propuesta técnica y económica a la medida.
                </p>
              </div>

              {/* Structured Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Solución:</span>
                  <span className="font-bold text-slate-800">
                    {productsData.find(p => p.id === formData.solutionType)?.name || formData.solutionType}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Ubicación / Inmueble:</span>
                  <span className="font-bold text-slate-800">{formData.city} • {formData.projectType}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Dimensiones preliminares:</span>
                  <span className="font-bold text-slate-800">{formData.floorsCount} pisos / {formData.stopsCount} paradas ({formData.estimatedCapacity})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Contacto registrado:</span>
                  <span className="font-bold text-slate-800">{formData.fullName} ({formData.whatsapp || formData.phone})</span>
                </div>
              </div>

              {/* Direct WhatsApp acceleration CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={generateWhatsAppSubmissionURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                  id="btn-send-wa-summary"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar datos a WhatsApp ({companyInfo.whatsappDisplay})</span>
                </motion.a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData(initialFormState);
                    if (onCloseModal) onCloseModal();
                  }}
                  className="w-full sm:w-auto text-xs text-slate-600 hover:text-[#02163B] font-semibold py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  {isOpenModal ? 'Cerrar ventana' : 'Cotizar otro proyecto'}
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Proyecto y Solución */}
              {currentStep === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Solución */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      1. Tipo de Solución de Elevación *
                    </label>
                    <select
                      value={formData.solutionType}
                      onChange={(e) => handleInputChange('solutionType', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white transition-all"
                      id="select-solution-type"
                    >
                      {productsData.map((prod) => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name} ({prod.targetAudience})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tipo de Inmueble */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      2. Tipo de Inmueble / Proyecto *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white transition-all"
                      id="select-project-type"
                    >
                      <option value="Edificio Residencial Multifamiliar">Edificio Residencial Multifamiliar</option>
                      <option value="Casa Unifamiliar / Dúplex / Chalet">Casa Unifamiliar / Dúplex / Chalet (Residencial)</option>
                      <option value="Torre de Oficinas / Edificio Corporativo">Torre de Oficinas / Edificio Corporativo</option>
                      <option value="Clínica / Hospital / Centro de Salud">Clínica / Hospital / Centro de Salud</option>
                      <option value="Hotel / Hospedaje">Hotel / Hospedaje</option>
                      <option value="Centro Comercial / Tienda Retail">Centro Comercial / Tienda Retail</option>
                      <option value="Almacén Logístico / Fábrica Industrial">Almacén Logístico / Fábrica Industrial</option>
                      <option value="Restaurante / Hostelería (Montaplatos)">Restaurante / Hostelería (Montaplatos)</option>
                      <option value="Entidad Educativa / Pública (Accesibilidad)">Entidad Educativa / Pública (Accesibilidad)</option>
                    </select>
                  </div>

                  {/* Ciudad */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      3. Ciudad en el Perú *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white transition-all"
                      id="select-city"
                    >
                      <option value="Lima">Lima Metropolitana</option>
                      <option value="Callao">Callao</option>
                      <option value="Arequipa">Arequipa</option>
                      <option value="Trujillo">Trujillo</option>
                      <option value="Cusco">Cusco</option>
                      <option value="Piura">Piura</option>
                      <option value="Chiclayo">Chiclayo</option>
                      <option value="Huancayo">Huancayo</option>
                      <option value="Ica">Ica</option>
                      <option value="Tacna">Tacna</option>
                      <option value="Otra Ciudad del Perú">Otra Ciudad del Perú</option>
                    </select>
                  </div>

                  {/* Estado del Proyecto */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      4. Estado Actual de la Obra *
                    </label>
                    <select
                      value={formData.projectStatus}
                      onChange={(e) => handleInputChange('projectStatus', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white transition-all"
                      id="select-project-status"
                    >
                      <option value="En etapa de diseño / planos arquitectónicos">En etapa de diseño / planos arquitectónicos</option>
                      <option value="En construcción (obra gris / ducto listo)">En construcción (obra gris / ducto listo)</option>
                      <option value="Inmueble existente (remodelación / adaptación)">Inmueble existente (remodelación / adaptación)</option>
                      <option value="Reemplazo o modernización de ascensor antiguo">Reemplazo o modernización de ascensor antiguo</option>
                    </select>
                  </div>

                  {/* Pisos y Paradas */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Pisos Totales
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={formData.floorsCount}
                        onChange={(e) => handleInputChange('floorsCount', parseInt(e.target.value) || 1)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                        id="input-floors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Paradas
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={formData.stopsCount}
                        onChange={(e) => handleInputChange('stopsCount', parseInt(e.target.value) || 1)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                        id="input-stops"
                      />
                    </div>
                  </div>

                  {/* Capacidad Estimada */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Capacidad Requerida
                    </label>
                    <select
                      value={formData.estimatedCapacity}
                      onChange={(e) => handleInputChange('estimatedCapacity', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white transition-all"
                      id="select-capacity"
                    >
                      <option value="2 a 4 personas (250 - 320 kg) - Residencial / Accesibilidad">2 a 4 personas (250 - 320 kg) - Residencial</option>
                      <option value="6 a 8 personas (450 - 630 kg) - Estándar Edificios">6 a 8 personas (450 - 630 kg) - Estándar</option>
                      <option value="10 a 13 personas (800 - 1000 kg) - Corporativo / Alto Tránsito">10 a 13 personas (800 - 1000 kg) - Alto Flujo</option>
                      <option value="Montacargas Liviano (100 - 500 kg)">Montacargas Liviano (100 - 500 kg)</option>
                      <option value="Carga Pesada (1000 a 3000 kg)">Carga Pesada (1000 a 3000 kg)</option>
                      <option value="Por definir según evaluación de ingeniería">Por definir según evaluación técnica</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!validateStep1()}
                    className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all disabled:opacity-50"
                    id="step1-next-btn"
                  >
                    <span>Siguiente: Detalles Técnicos</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Detalles y Planos */}
            {currentStep === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Cuarto de Máquinas */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferencia de Cuarto de Máquinas
                    </label>
                    <select
                      value={formData.machineRoomOption}
                      onChange={(e) => handleInputChange('machineRoomOption', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                      id="select-machineroom"
                    >
                      <option value="Sin cuarto de máquinas (MRL - Recomendado)">Sin cuarto de máquinas (MRL - Recomendado)</option>
                      <option value="Con cuarto de máquinas superior en azotea">Con cuarto de máquinas superior en azotea</option>
                      <option value="Recomendación técnica por parte de ADB">Recomendación técnica por parte de ADB</option>
                    </select>
                  </div>

                  {/* Acabado Estético */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Acabado de Cabina
                    </label>
                    <select
                      value={formData.aestheticFinish}
                      onChange={(e) => handleInputChange('aestheticFinish', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                      id="select-finish"
                    >
                      <option value="Acero inoxidable satinado estándar">Acero inoxidable satinado estándar</option>
                      <option value="Vidrio panorámico / Cabina vidriada">Vidrio panorámico / Cabina vidriada</option>
                      <option value="Personalizado con acabados arquitectónicos especiales">Personalizado con acabados a medida</option>
                      <option value="Industrial reforzado (chapa estriada)">Industrial reforzado (chapa estriada)</option>
                    </select>
                  </div>
                </div>

                {/* Notas / Requerimientos especiales */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Notas o Requerimientos Específicos (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Ejemplo: ducto con medidas reducidas de 1.40 x 1.40 m, requerimos alimentación monofásica, o necesitamos instalación en plazo determinado."
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                    id="textarea-quote-notes"
                  ></textarea>
                </div>

                {/* Adjuntar Planos / Fotografías (Simulated Upload) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Adjuntar Planos de Arquitectura o Fotografías de Obra (Opcional)
                  </label>
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragActive(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        handleFileUpload(e.dataTransfer.files[0].name);
                      }
                    }}
                    className={`border-2 border-dashed rounded-xl p-5 text-center transition-all ${
                      dragActive ? 'border-[#085AB3] bg-blue-50/50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100/60'
                    }`}
                  >
                    <UploadCloud className="w-8 h-8 text-[#085AB3] mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-700">
                      Arrastra tus archivos aquí o haz clic para adjuntar
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Formatos compatibles: PDF, DWG, JPG, PNG (hasta 25 MB)
                    </p>

                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleFileUpload('Plano_Arquitectonico_Ducto.pdf')}
                        className="text-[11px] bg-white border border-slate-300 hover:border-[#085AB3] text-slate-700 font-medium px-2.5 py-1 rounded-md"
                      >
                        + Adjuntar Plano PDF
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFileUpload('Foto_Ubicacion_Foso.jpg')}
                        className="text-[11px] bg-white border border-slate-300 hover:border-[#085AB3] text-slate-700 font-medium px-2.5 py-1 rounded-md"
                      >
                        + Adjuntar Foto de Espacio
                      </button>
                    </div>
                  </div>

                  {/* Uploaded Files Tag List */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-[#085AB3] text-xs px-2.5 py-1 rounded-lg">
                          <FileText className="w-3.5 h-3.5" />
                          <span className="font-semibold">{file}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(idx)}
                            className="text-slate-400 hover:text-red-500 ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 py-2.5 px-4 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Volver</span>
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all"
                    id="step2-next-btn"
                  >
                    <span>Siguiente: Datos de Contacto</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Contacto y Envío */}
            {currentStep === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Nombre */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Ing. Carlos Salazar"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                      id="input-fullname"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Empresa / Inmobiliaria / Constructora (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Constructora & Inmobiliaria SAC"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                      id="input-company"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      WhatsApp para Envío de Propuesta *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="Ej: +51 922 248 755"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        className="w-full p-3 pl-9 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                        id="input-whatsapp"
                      />
                      <MessageSquare className="w-4 h-4 text-emerald-600 absolute left-3 top-3.5" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Ej: contacto@constructora.pe"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 pl-9 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#085AB3] focus:bg-white"
                        id="input-email"
                      />
                      <Mail className="w-4 h-4 text-[#085AB3] absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                {/* Rol del solicitante */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Tu Rol en el Proyecto
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Propietario Particular',
                      'Constructora / Inmobiliaria',
                      'Arquitecto / Proyectista',
                      'Administrador de Edificio'
                    ].map((roleOption) => (
                      <button
                        type="button"
                        key={roleOption}
                        onClick={() => handleInputChange('role', roleOption)}
                        className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
                          formData.role === roleOption
                            ? 'bg-blue-50 border-[#085AB3] text-[#085AB3] shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {roleOption}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Microcopy & Assurance */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Compromiso de privacidad:</span> Tus datos serán utilizados exclusivamente para la formulación técnica de tu cotización. No realizamos spam.
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 py-2.5 px-4 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Volver</span>
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting || !validateStep3()}
                    className="inline-flex items-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                    id="submit-quote-btn"
                  >
                    {isSubmitting ? (
                      <span>Procesando solicitud...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud de Cotización</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </form>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};
