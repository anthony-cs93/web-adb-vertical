import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import { ArrowRight, CheckCircle2, Cpu, HelpCircle, Layers, Sliders, Sparkles, Zap, MessageSquare } from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../data/companyData';

interface ProjectCalculatorProps {
  onSelectSolutionForQuote: (solutionId: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onSelectSolutionForQuote }) => {
  const [buildingType, setBuildingType] = useState<'residential_house' | 'multi_family' | 'commercial_office' | 'industrial' | 'accessibility'>('multi_family');
  const [floors, setFloors] = useState<number>(6);
  const [transitLevel, setTransitLevel] = useState<'bajo' | 'medio' | 'alto'>('medio');

  // Intelligent recommendation engine
  const getRecommendation = () => {
    switch (buildingType) {
      case 'residential_house':
        return {
          productId: 'ascensores-residenciales',
          name: 'Ascensor Residencial Unifamiliar (Homelift)',
          capacity: '300 a 400 kg (3 a 4 personas)',
          speed: '0.25 - 0.40 m/s',
          shaftMin: '1.25 m ancho x 1.30 m fondo',
          pitMin: 'Desde 25 cm (ultra reducido)',
          power: 'Monofásica 220V (bajo consumo)',
          description: 'Solución ideal para viviendas particulares con ducto compacto, sin necesidad de cuarto de máquinas y funcionamiento ultra silencioso.'
        };
      case 'multi_family':
        return {
          productId: 'ascensores-pasajeros',
          name: 'Ascensor de Pasajeros Gearless MRL',
          capacity: floors > 8 ? '630 a 1000 kg (8 a 13 personas)' : '450 a 630 kg (6 a 8 personas)',
          speed: floors > 10 ? '1.50 a 1.75 m/s' : '1.0 m/s',
          shaftMin: '1.60 m ancho x 1.70 m fondo',
          pitMin: '1.20 m a 1.40 m',
          power: 'Trifásica 220V / 380V',
          description: 'Confort de viaje, despacho inteligente y tecnología síncrona sin engranajes que reduce la factura eléctrica del condominio.'
        };
      case 'commercial_office':
        return {
          productId: 'ascensores-pasajeros',
          name: 'Ascensor Corporativo de Alto Flujo',
          capacity: '800 a 1350 kg (10 a 18 personas)',
          speed: '1.50 a 2.50 m/s',
          shaftMin: '1.90 m ancho x 2.10 m fondo',
          pitMin: '1.40 m a 1.60 m',
          power: 'Trifásica 380V / 220V',
          description: 'Desempeño continuo con control de tráfico de alta eficiencia y cabina con acabados corporativos de alta resistencia.'
        };
      case 'industrial':
        return {
          productId: 'ascensores-carga',
          name: 'Ascensor para Carga Pesada o Montacargas',
          capacity: '1000 a 3000 kg (transporte con transpaleta)',
          speed: '0.30 a 0.60 m/s',
          shaftMin: 'A medida según dimensiones de carga/palet',
          pitMin: '1.20 m a 1.50 m reforzado',
          power: 'Trifásica de fuerza industrial',
          description: 'Estructura rígida de alta durabilidad con protecciones en cabina y nivelación milimétrica para carga pesada.'
        };
      case 'accessibility':
        return {
          productId: 'plataformas-elevadoras',
          name: 'Plataforma Vertical de Accesibilidad',
          capacity: '250 a 400 kg (Silla de ruedas + acompañante)',
          speed: '0.15 m/s',
          shaftMin: '1.30 m ancho x 1.40 m fondo',
          pitMin: '10 a 15 cm o rampa biselada',
          power: 'Monofásica 220V',
          description: 'Cumple con normativas de accesibilidad universal para superar desniveles en accesos y entrepisos sin obras complejas.'
        };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#085AB3]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#085AB3] bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800">
              Asistente de Dimensionamiento Preliminar
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Descubre la solución técnica recomendada para tu inmueble
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Ajusta los parámetros para obtener una orientación inmediata sobre el tipo de equipo, velocidad, foso y acometida recomendados.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Tipo de Edificación */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Tipo de Edificación
            </label>
            <select
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value as any)}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:ring-2 focus:ring-[#085AB3] focus:outline-none"
              id="calc-building-type"
            >
              <option value="residential_house">Casa / Vivienda Unifamiliar</option>
              <option value="multi_family">Edificio Multifamiliar Residencial</option>
              <option value="commercial_office">Torre Corporativa / Oficinas</option>
              <option value="industrial">Almacén / Industria / Carga</option>
              <option value="accessibility">Accesibilidad / Desnivel de Ingreso</option>
            </select>
          </div>

          {/* Número de Pisos */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Número de Pisos / Niveles ({floors})
            </label>
            <div className="flex items-center gap-3 bg-slate-800 p-2.5 rounded-xl border border-slate-700">
              <input
                type="range"
                min="2"
                max="25"
                value={floors}
                onChange={(e) => setFloors(parseInt(e.target.value))}
                className="w-full accent-[#085AB3]"
                id="calc-floors-range"
              />
              <span className="text-xs font-bold bg-[#085AB3] text-white px-2.5 py-1 rounded-md">
                {floors}
              </span>
            </div>
          </div>

          {/* Flujo / Tráfico */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Flujo Estimado de Tránsito
            </label>
            <div className="grid grid-cols-3 gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700">
              {(['bajo', 'medio', 'alto'] as const).map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setTransitLevel(lvl)}
                  className={`py-2 text-xs font-bold rounded-lg capitalize transition-all ${
                    transitLevel === lvl
                      ? 'bg-[#085AB3] text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Recommendation Result Card */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                Configuración Recomendada por Ingeniería:
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {rec.name}
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => onSelectSolutionForQuote(rec.productId)}
                className="inline-flex items-center justify-center gap-2 bg-[#085AB3] hover:bg-[#074b94] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all"
                id="calc-quote-rec-btn"
              >
                <span>Cotizar configuración</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(`Hola ADB Soluciones Vertical, mediante la calculadora de la web configuré un ascensor para ${floors} niveles con tráfico ${transitLevel} y deseo consultar sobre la propuesta recomendada: ${rec.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-3.5 py-2.5 rounded-lg shadow-sm transition-all"
                id="calc-whatsapp-rec-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {rec.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Capacidad sugerida</span>
              <span className="font-bold text-white">{rec.capacity}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Velocidad calculada</span>
              <span className="font-bold text-white">{rec.speed}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Foso requerido</span>
              <span className="font-bold text-white">{rec.pitMin}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Alimentación</span>
              <span className="font-bold text-white">{rec.power}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
