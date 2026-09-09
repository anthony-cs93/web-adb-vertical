import React from 'react';

export const ElevatorCadBlueprint: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`} 
      aria-hidden="true"
    >
      {/* 1. Technical AutoCAD Grid (Grid fino y mayor con líneas sutiles) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Small grid 25x25 */}
          <pattern id="cad-small-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
          {/* Major grid 125x125 */}
          <pattern id="cad-major-grid" width="125" height="125" patternUnits="userSpaceOnUse">
            <rect width="125" height="125" fill="url(#cad-small-grid)" />
            <path d="M 125 0 L 0 0 0 125" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.8" />
            {/* Crosshair at intersections */}
            <path d="M 0 5 L 0 -5 M -5 0 L 5 0" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cad-major-grid)" />
      </svg>

      {/* 2. Main Technical Vector Drawing (Elevator Shaft Elevation & Isometric CAD details) */}
      <svg 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice" 
        className="absolute right-0 top-0 h-full w-full lg:w-[75%] opacity-40 lg:opacity-60 transition-opacity duration-700"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient fade to prevent competing with text on the left */}
          <linearGradient id="blueprint-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#02163B" stopOpacity="1" />
            <stop offset="40%" stopColor="#02163B" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#02163B" stopOpacity="0" />
          </linearGradient>

          {/* Concrete hatch pattern for shaft walls */}
          <pattern id="concrete-hatch" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* ---------------- ELEVATOR SHAFT SECTION (EJE E-01 / CORTE LONGITUDINAL) ---------------- */}
        <g id="elevator-shaft-elevation" transform="translate(480, 40)">
          
          {/* Coordinate axis indicators */}
          <g opacity="0.6" stroke="#38bdf8" strokeWidth="0.8">
            <circle cx="210" cy="15" r="14" fill="#02163B" />
            <text x="210" y="20" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">E-1</text>
            <line x1="210" y1="30" x2="210" y2="720" strokeDasharray="6 4" />

            <circle cx="430" cy="15" r="14" fill="#02163B" />
            <text x="430" y="20" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">E-2</text>
            <line x1="430" y1="30" x2="430" y2="720" strokeDasharray="6 4" />
          </g>

          {/* Shaft Walls (Muros de Concreto del Pozo con achurado) */}
          {/* Left Wall */}
          <rect x="70" y="60" width="30" height="660" fill="url(#concrete-hatch)" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />
          {/* Right Wall */}
          <rect x="540" y="60" width="30" height="660" fill="url(#concrete-hatch)" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />
          {/* Pit Floor */}
          <rect x="70" y="700" width="500" height="25" fill="url(#concrete-hatch)" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />
          {/* Machine Roomless Ceiling Beam */}
          <rect x="70" y="60" width="500" height="20" fill="url(#concrete-hatch)" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Guide Rails (Rieles T de Cabina y Contrapeso) */}
          {/* Left rail */}
          <line x1="125" y1="75" x2="125" y2="700" stroke="#38bdf8" strokeWidth="2.5" strokeOpacity="0.9" />
          <line x1="120" y1="75" x2="120" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Right rail */}
          <line x1="415" y1="75" x2="415" y2="700" stroke="#38bdf8" strokeWidth="2.5" strokeOpacity="0.9" />
          <line x1="420" y1="75" x2="420" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Counterweight rail (back/right) */}
          <line x1="475" y1="75" x2="475" y2="700" stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.7" />

          {/* Rail Brackets (Soportes de fijación a muro) */}
          {[140, 260, 380, 500, 620].map((yPos, i) => (
            <g key={i} stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6">
              <path d={`M 100 ${yPos} L 125 ${yPos} L 120 ${yPos + 10} L 100 ${yPos + 10} Z`} fill="#085AB3" fillOpacity="0.3" />
              <path d={`M 415 ${yPos} L 440 ${yPos} L 440 ${yPos + 10} L 415 ${yPos + 10} Z`} fill="#085AB3" fillOpacity="0.3" />
              {/* Fixing anchors */}
              <circle cx="95" cy={yPos + 5} r="2" fill="#38bdf8" />
              <circle cx="445" cy={yPos + 5} r="2" fill="#38bdf8" />
            </g>
          ))}

          {/* Machine Roomless (MRL) Traction Machine & Overhead Beam */}
          <g id="gearless-machine" transform="translate(230, 80)">
            {/* Structural steel beam */}
            <rect x="-80" y="0" width="310" height="14" fill="#085AB3" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Gearless Motor Body */}
            <rect x="5" y="14" width="70" height="42" rx="4" fill="#031D4D" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Cooling fins */}
            <line x1="15" y1="18" x2="15" y2="52" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="25" y1="18" x2="25" y2="52" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="35" y1="18" x2="35" y2="52" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
            {/* Traction Sheave (Polea de tracción) */}
            <circle cx="105" cy="35" r="26" fill="#031D4D" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="105" cy="35" r="16" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="105" cy="35" r="4" fill="#38bdf8" />
            {/* Deflector Sheave */}
            <circle cx="230" cy="35" r="18" fill="#031D4D" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="230" cy="35" r="3" fill="#38bdf8" />
          </g>

          {/* Suspension Cables (Cables de acero de tracción) */}
          <g stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8">
            {/* Cables to Car Sling (Cabina) */}
            <line x1="315" y1="115" x2="270" y2="280" />
            <line x1="319" y1="115" x2="274" y2="280" />
            {/* Cables to Counterweight */}
            <line x1="460" y1="115" x2="475" y2="480" strokeDasharray="8 2" />
            <line x1="464" y1="115" x2="479" y2="480" strokeDasharray="8 2" />
          </g>

          {/* ELEVATOR CABIN (CABINA EN NIVEL N+2) */}
          <g id="elevator-cabin" transform="translate(135, 280)">
            {/* Car Sling (Bastidor / Estructura de soporte) */}
            <rect x="0" y="0" width="270" height="230" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
            {/* Crosshead beam */}
            <rect x="-10" y="0" width="290" height="12" fill="#085AB3" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Hitch Plate */}
            <polygon points="125,0 145,0 150,-15 120,-15" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
            {/* Safety Gear / Paracaídas wedge blocks under car */}
            <rect x="-6" y="218" width="20" height="16" fill="#085AB3" stroke="#38bdf8" strokeWidth="1.2" />
            <rect x="256" y="218" width="20" height="16" fill="#085AB3" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Bottom safety plank */}
            <rect x="-10" y="222" width="290" height="10" fill="#085AB3" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Roller Guide Shoes */}
            <circle cx="-5" cy="6" r="5" fill="#38bdf8" />
            <circle cx="275" cy="6" r="5" fill="#38bdf8" />
            <circle cx="-5" cy="226" r="5" fill="#38bdf8" />
            <circle cx="275" cy="226" r="5" fill="#38bdf8" />

            {/* Cabin Enclosure Body */}
            <rect x="15" y="16" width="240" height="202" fill="#02163B" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4 2" />
            
            {/* Cabin Door Header & Telescopic Door Panels */}
            <rect x="25" y="30" width="130" height="175" fill="#031D4D" fillOpacity="0.6" stroke="#38bdf8" strokeWidth="1" />
            {/* Door split center */}
            <line x1="90" y1="30" x2="90" y2="205" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="25" y1="205" x2="155" y2="205" stroke="#38bdf8" strokeWidth="2" /> {/* Sill */}
            <text x="90" y="120" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" opacity="0.8">PUERTA AUTOMÁTICA</text>

            {/* Handrail */}
            <line x1="30" y1="130" x2="230" y2="130" stroke="#38bdf8" strokeWidth="2.5" strokeOpacity="0.7" />

            {/* Car Operating Panel (Botonera COP) */}
            <rect x="220" y="70" width="20" height="90" fill="#085AB3" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="230" cy="85" r="3" fill="#38bdf8" />
            <circle cx="230" cy="100" r="3" fill="#38bdf8" />
            <circle cx="230" cy="115" r="3" fill="#38bdf8" />
            <circle cx="230" cy="130" r="3" fill="#38bdf8" />
            <circle cx="230" cy="145" r="3" fill="#f87171" /> {/* Emergency stop */}

            {/* Dimension inside cabin */}
            <line x1="20" y1="235" x2="250" y2="235" stroke="#06b6d4" strokeWidth="0.8" />
            <line x1="20" y1="231" x2="20" y2="239" stroke="#06b6d4" strokeWidth="0.8" />
            <line x1="250" y1="231" x2="250" y2="239" stroke="#06b6d4" strokeWidth="0.8" />
            <text x="135" y="247" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">L_CABINA = 1,400 mm</text>
          </g>

          {/* Traveling Cable (Cable viajero flexible en lazo catenario) */}
          <path 
            d="M 160 515 C 160 620, 110 630, 110 440" 
            fill="none" 
            stroke="#38bdf8" 
            strokeWidth="1.8" 
            strokeOpacity="0.6" 
            strokeDasharray="4 2" 
          />

          {/* COUNTERWEIGHT (CONTRAPESO EN NIVEL INFERIOR) */}
          <g id="counterweight" transform="translate(460, 480)">
            <rect x="0" y="0" width="30" height="150" fill="#031D4D" stroke="#06b6d4" strokeWidth="1.5" />
            {/* Weight blocks */}
            {[15, 30, 45, 60, 75, 90, 105, 120, 135].map((yW, i) => (
              <line key={i} x1="0" y1={yW} x2="30" y2={yW} stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.6" />
            ))}
            {/* Guide shoes */}
            <rect x="10" y="-8" width="10" height="8" fill="#06b6d4" />
            <rect x="10" y="150" width="10" height="8" fill="#06b6d4" />
            <text x="15" y="80" textAnchor="middle" transform="rotate(-90 15 80)" fill="#06b6d4" fontSize="8" fontFamily="monospace" letterSpacing="2">
              CONTRAPESO 50%
            </text>
          </g>

          {/* PIT BUFFERS (AMORTIGUADORES DE FOSO) */}
          <g id="pit-buffers" transform="translate(135, 650)">
            {/* Car Buffer 1 */}
            <rect x="40" y="20" width="24" height="30" fill="#031D4D" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="36" y="10" width="32" height="10" rx="3" fill="#085AB3" stroke="#38bdf8" strokeWidth="1.2" />
            <line x1="52" y1="20" x2="52" y2="48" stroke="#38bdf8" strokeWidth="1" />
            
            {/* Car Buffer 2 */}
            <rect x="190" y="20" width="24" height="30" fill="#031D4D" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="186" y="10" width="32" height="10" rx="3" fill="#085AB3" stroke="#38bdf8" strokeWidth="1.2" />
            <line x1="202" y1="20" x2="202" y2="48" stroke="#38bdf8" strokeWidth="1" />

            {/* Counterweight Buffer */}
            <rect x="330" y="20" width="20" height="30" fill="#031D4D" stroke="#06b6d4" strokeWidth="1.5" />
            <rect x="326" y="10" width="28" height="10" rx="3" fill="#085AB3" stroke="#06b6d4" strokeWidth="1.2" />
          </g>

          {/* Floor Level Markers (Niveles de piso NPT) */}
          <g id="floor-levels" stroke="#38bdf8" strokeWidth="0.8" opacity="0.85">
            {/* Piso 3 / NPT +6.00 */}
            <line x1="30" y1="220" x2="590" y2="220" strokeDasharray="8 4" />
            <polygon points="30,220 15,214 15,226" fill="#38bdf8" />
            <text x="5" y="224" textAnchor="end" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">NPT +6.00 m</text>

            {/* Piso 2 / NPT +3.00 */}
            <line x1="30" y1="490" x2="590" y2="490" strokeDasharray="8 4" />
            <polygon points="30,490 15,484 15,496" fill="#38bdf8" />
            <text x="5" y="494" textAnchor="end" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">NPT +3.00 m</text>

            {/* Piso 1 / NPT +0.00 */}
            <line x1="30" y1="640" x2="590" y2="640" strokeDasharray="8 4" />
            <polygon points="30,640 15,634 15,646" fill="#38bdf8" />
            <text x="5" y="644" textAnchor="end" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">NPT ±0.00 m</text>

            {/* Fondo de Foso */}
            <text x="5" y="705" textAnchor="end" fill="#06b6d4" fontSize="9" fontFamily="monospace">FONDO FOSO -1.20 m</text>
          </g>

          {/* AUTOCAD DIMENSION LINES (COTAS DE INGENIERÍA CON FLECHAS) */}
          <g id="cad-dimensions" stroke="#38bdf8" strokeWidth="1" fill="#38bdf8">
            
            {/* COTA TOTAL POZO (WIDTH) */}
            <g transform="translate(0, 735)">
              <line x1="100" y1="0" x2="540" y2="0" stroke="#38bdf8" strokeWidth="1" />
              <line x1="100" y1="-8" x2="100" y2="8" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="540" y1="-8" x2="540" y2="8" stroke="#38bdf8" strokeWidth="1.2" />
              {/* CAD 45-degree ticks */}
              <line x1="96" y1="-4" x2="104" y2="4" stroke="#38bdf8" strokeWidth="1.8" />
              <line x1="536" y1="-4" x2="544" y2="4" stroke="#38bdf8" strokeWidth="1.8" />
              <text x="320" y="16" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">ANCHO DUCTO LIBRE: 1,850 mm</text>
            </g>

            {/* COTA SOBRE-RECORRIDO (OH) */}
            <g transform="translate(585, 0)">
              <line x1="0" y1="80" x2="0" y2="220" stroke="#38bdf8" strokeWidth="1" />
              <line x1="-5" y1="80" x2="5" y2="80" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="-5" y1="220" x2="5" y2="220" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="-4" y1="76" x2="4" y2="84" stroke="#38bdf8" strokeWidth="1.8" />
              <line x1="-4" y1="216" x2="4" y2="224" stroke="#38bdf8" strokeWidth="1.8" />
              <text x="14" y="155" textAnchor="start" fontSize="10" fontFamily="monospace" fontWeight="bold">OH = 3,600 mm</text>
            </g>

            {/* COTA FOSO (PIT) */}
            <g transform="translate(585, 0)">
              <line x1="0" y1="640" x2="0" y2="700" stroke="#06b6d4" strokeWidth="1" />
              <line x1="-5" y1="640" x2="5" y2="640" stroke="#06b6d4" strokeWidth="1.2" />
              <line x1="-5" y1="700" x2="5" y2="700" stroke="#06b6d4" strokeWidth="1.2" />
              <line x1="-4" y1="636" x2="4" y2="644" stroke="#06b6d4" strokeWidth="1.8" />
              <line x1="-4" y1="696" x2="4" y2="704" stroke="#06b6d4" strokeWidth="1.8" />
              <text x="14" y="674" textAnchor="start" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">FOSO = 1,200 mm</text>
            </g>
          </g>

          {/* TECHNICAL CALLOUT LABELS */}
          <g id="technical-callouts" fill="#38bdf8" fontSize="9" fontFamily="monospace">
            {/* MRL Motor Callout */}
            <line x1="280" y1="100" x2="220" y2="50" stroke="#38bdf8" strokeWidth="0.8" />
            <line x1="220" y1="50" x2="130" y2="50" stroke="#38bdf8" strokeWidth="0.8" />
            <circle cx="280" cy="100" r="2.5" fill="#38bdf8" />
            <text x="130" y="44" textAnchor="start">MOTOR GEARLESS PMSM (MRL)</text>

            {/* Rieles T Callout */}
            <line x1="125" y1="200" x2="90" y2="170" stroke="#38bdf8" strokeWidth="0.8" />
            <line x1="90" y1="170" x2="0" y2="170" stroke="#38bdf8" strokeWidth="0.8" />
            <circle cx="125" cy="200" r="2.5" fill="#38bdf8" />
            <text x="0" y="164" textAnchor="start">RIELES GUÍA CALIBRADOS T89/B</text>

            {/* Paracaídas Wedge Callout */}
            <line x1="130" y1="505" x2="90" y2="540" stroke="#38bdf8" strokeWidth="0.8" />
            <line x1="90" y1="540" x2="10" y2="540" stroke="#38bdf8" strokeWidth="0.8" />
            <circle cx="130" cy="505" r="2.5" fill="#38bdf8" />
            <text x="10" y="534" textAnchor="start">PARACAÍDAS PROGRESIVO INSTANTÁNEO</text>
          </g>
        </g>

        {/* ---------------- DRAWING TITLE BLOCK STAMP (MEMBRETE ARQUITECTÓNICO CAD) ---------------- */}
        <g id="cad-title-block" transform="translate(870, 670)" opacity="0.85">
          <rect x="0" y="0" width="300" height="95" fill="#02163B" fillOpacity="0.9" stroke="#38bdf8" strokeWidth="1.2" />
          <line x1="0" y1="30" x2="300" y2="30" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="0" y1="62" x2="300" y2="62" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="180" y1="30" x2="180" y2="95" stroke="#38bdf8" strokeWidth="0.8" />

          {/* Row 1 */}
          <text x="15" y="20" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">ADB VERTICAL &bull; INGENIERÍA</text>
          <text x="285" y="20" textAnchor="end" fill="#06b6d4" fontSize="9" fontFamily="monospace">PLANO: SEC-01</text>

          {/* Row 2 */}
          <text x="15" y="45" fill="#94a3b8" fontSize="8" fontFamily="monospace">ESPECIFICACIÓN TÉCNICA:</text>
          <text x="15" y="56" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">ASCENSOR ELECTROMECÁNICO MRL</text>
          
          <text x="190" y="45" fill="#94a3b8" fontSize="8" fontFamily="monospace">ESCALA:</text>
          <text x="190" y="56" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">1:50 / CAD DWG</text>

          {/* Row 3 */}
          <text x="15" y="78" fill="#94a3b8" fontSize="8" fontFamily="monospace">NORMATIVA TÉCNICA:</text>
          <text x="15" y="88" fill="#38bdf8" fontSize="9" fontFamily="monospace">NTP EM.070 &bull; EN 81-20/50</text>

          <text x="190" y="78" fill="#94a3b8" fontSize="8" fontFamily="monospace">ESTADO:</text>
          <text x="190" y="88" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">APROBADO &check;</text>
        </g>
      </svg>

      {/* 3. Soft Gradient Overlays to preserve absolute text legibility on the left */}
      <div className="absolute inset-0 bg-linear-to-r from-[#02163B] via-[#02163B]/80 sm:via-[#02163B]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-[#02163B] via-transparent to-[#02163B]/70 pointer-events-none" />
      
      {/* 4. Ambient Blue Glow Accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#085AB3]/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
