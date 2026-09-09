import React, { useState } from 'react';

export interface BrandLogoProps {
  variant?: 'full' | 'symbol' | 'horizontal';
  theme?: 'original' | 'negative' | 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'original',
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const [useFallback, setUseFallback] = useState(false);

  // Determine if negative version (for dark background) or original version (for light background)
  const isNegative = theme === 'negative' || theme === 'light';

  // Exact PNG filenames uploaded by the user
  const pngSrc = isNegative ? '/ADB-logos_2.png' : '/ADB-logos_1.png';

  // Palette for SVG fallback
  const navyColor = isNegative ? '#FFFFFF' : '#051C42';
  const spireBlue = isNegative ? '#FFFFFF' : '#0062B8';
  const greyColor = isNegative ? '#FFFFFF' : '#727E8C';
  const subtitleNavy = isNegative ? '#FFFFFF' : '#051C42';
  const subtitleBlue = isNegative ? '#FFFFFF' : '#0062B8';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24',
    custom: ''
  };

  const isSymbolOnly = variant === 'symbol' || !showSubtitle;
  const hasCustomHeight = className.includes('h-');

  return (
    <div 
      className={`inline-flex flex-col items-center justify-center select-none ${size !== 'custom' && !hasCustomHeight ? sizeClasses[size] : ''} ${className}`}
      aria-label="ADB Soluciones Vertical Logo"
    >
      {!useFallback ? (
        <img
          src={pngSrc}
          alt="ADB Soluciones Vertical"
          className="h-full max-h-full w-auto max-w-full object-contain block"
          onError={() => setUseFallback(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg
          viewBox={isSymbolOnly ? "0 0 600 300" : "0 0 600 370"}
          className="h-full max-h-full w-auto max-w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id={isNegative ? "ADB_Logo_Negative" : "ADB_Logo_Original"}>
            {/* ================= LETTER A ================= */}
            <path
              d="M 121 122 L 40 280 L 86 280 L 102 248 L 140 248 L 156 280 L 202 280 L 121 122 Z M 121 168 L 134 222 L 108 222 Z"
              fill={navyColor}
              fillRule="evenodd"
            />

            {/* ================= 4 CENTRAL ARCHITECTURAL TOWERS ================= */}
            {/* 1. Tower 1 (Left Grey Building) */}
            <path
              d="M 210 280 L 210 150 L 228 122 L 228 280 Z"
              fill={greyColor}
            />

            {/* 2. Tower 2 (Center Landmark Spire) */}
            <path
              d="M 234 280 L 234 24 L 268 86 L 268 280 Z"
              fill={spireBlue}
            />

            {/* 3. Tower 3 (Navy Tower) */}
            <path
              d="M 274 280 L 274 88 L 294 118 L 294 280 Z"
              fill={navyColor}
            />

            {/* 4. Tower 4 (Right Grey Building) */}
            <path
              d="M 300 280 L 300 146 L 318 174 L 318 280 Z"
              fill={greyColor}
            />

            {/* ================= LETTER D ================= */}
            <path
              d="M 328 122 L 386 122 C 434 122 458 152 458 201 C 458 250 434 280 386 280 L 328 280 Z M 356 148 L 356 254 L 382 254 C 414 254 430 236 430 201 C 430 166 414 148 382 148 Z"
              fill={navyColor}
              fillRule="evenodd"
            />

            {/* ================= LETTER B ================= */}
            <path
              d="M 466 122 L 518 122 C 544 122 558 136 558 156 C 558 172 548 184 532 192 C 554 198 564 214 564 238 C 564 266 544 280 514 280 L 466 280 Z M 494 146 L 494 184 L 516 184 C 530 184 536 176 536 165 C 536 154 530 146 516 146 Z M 494 210 L 494 256 L 518 256 C 532 256 540 246 540 233 C 540 220 532 210 518 210 Z"
              fill={navyColor}
              fillRule="evenodd"
            />

            {/* ================= SUBTITLE: SOLUCIONES VERTICAL ================= */}
            {!isSymbolOnly && (
              <text
                x="300"
                y="338"
                textAnchor="middle"
                fontFamily="'Plus Jakarta Sans', 'Space Grotesk', system-ui, -apple-system, sans-serif"
                fontSize="26"
                fontWeight="800"
                letterSpacing="0.32em"
              >
                {isNegative ? (
                  <tspan fill="#FFFFFF">SOLUCIONES VERTICAL</tspan>
                ) : (
                  <>
                    <tspan fill={subtitleNavy}>SOLUCIONES </tspan>
                    <tspan fill={subtitleBlue}>VERTICAL</tspan>
                  </>
                )}
              </text>
            )}
          </g>
        </svg>
      )}
    </div>
  );
};

