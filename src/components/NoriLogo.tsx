import React from 'react';

interface NoriLogoProps {
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const NoriLogo: React.FC<NoriLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  const textColor = isLight
    ? 'text-[#F7F2EC]'
    : isGold
    ? 'text-[#D9B4B0]'
    : 'text-[#1C1917]';

  const tourColor = isLight
    ? 'text-[#E9D2CD]'
    : 'text-[#D9B4B0]';

  const subColor = isLight
    ? 'text-[#E9D2CD]'
    : 'text-[#786761]';

  // Soft muted rose-taupe matching the attached NR monogram and site palette
  const emblemColor = isLight
    ? '#E9D2CD'
    : isGold
    ? '#D9B4B0'
    : '#B69688';

  const symbolSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
  };

  const textSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Brand Symbol: Refined NR Interlocking Monogram */}
      <div
        className={`relative flex items-center justify-center ${symbolSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-[1.02]`}
      >
        <svg
          viewBox="16 16 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-label="NR Monogram Logo"
        >
          {/* 1. Outer Broken Circle Frame */}
          {/* Top-Right Arc (from top-left break above N to bottom-right break above tail) */}
          <path
            d="M 27.0 30.9 A 29.8 29.8 0 0 1 75.2 64.8"
            stroke={emblemColor}
            strokeWidth="1.15"
            strokeLinecap="round"
          />
          {/* Bottom-Left Arc (from top-left break below N serif around bottom to tail break) */}
          <path
            d="M 23.4 36.8 A 29.8 29.8 0 0 0 66.4 74.7"
            stroke={emblemColor}
            strokeWidth="1.15"
            strokeLinecap="round"
          />

          {/* 2. Left Thin Vertical Stem of N + Flared Base Serif */}
          <path
            d="M 31.2 35.8 L 32.1 36.8 L 32.1 58.2 C 32.1 62.4 33.4 64.1 36.5 64.4 L 36.5 64.9 L 26.8 64.9 L 26.8 64.4 C 29.9 64.1 31.2 62.4 31.2 58.2 Z"
            fill={emblemColor}
          />

          {/* 3. Upper Segment of Central R Stem (above N diagonal crossing) + Top Serif & R Bowl */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 44.2 34.2 L 55.2 34.2 C 62.8 34.2 67.2 37.6 67.2 42.6 C 67.2 47.5 62.2 50.8 54.4 51.2 L 53.1 51.2 L 53.1 50.6 C 59.4 50.2 62.8 47.2 62.8 42.6 C 62.8 37.6 59.2 34.9 53.2 34.9 C 51.3 34.9 50.4 35.8 50.4 37.6 L 50.4 52.3 L 48.1 50.3 L 48.1 37.8 C 48.1 35.5 46.9 34.7 44.2 34.6 Z"
            fill={emblemColor}
          />

          {/* 4. Lower Segment of Central R Stem (below N diagonal crossing) + Flared Base Serif */}
          <path
            d="M 48.1 54.4 L 50.4 56.1 L 50.4 61.6 C 50.4 65.0 51.6 66.5 54.5 66.8 L 54.5 67.3 L 44.2 67.3 L 44.2 66.8 C 47.0 66.5 48.1 65.0 48.1 61.6 Z"
            fill={emblemColor}
          />

          {/* 5. Interlocking N Diagonal Ribbon & R Flowing Tail */}
          <path
            d="M 26.0 34.2 L 32.3 34.2 C 33.1 34.2 33.8 34.7 34.8 35.8 L 48.2 51.2 C 52.8 56.3 57.6 60.2 62.6 63.6 C 61.2 58.6 59.5 54.8 57.2 52.8 C 55.8 51.7 54.5 51.3 53.1 51.2 L 53.1 50.7 C 56.8 50.9 60.2 52.4 62.4 55.8 C 64.2 58.6 65.5 62.4 67.4 65.8 C 69.5 69.2 72.4 70.9 76.4 70.8 C 72.2 71.9 68.0 70.7 64.8 67.2 C 63.6 65.9 62.6 64.6 61.4 63.7 C 56.2 60.1 50.8 56.7 45.8 52.2 L 30.8 36.6 C 29.3 35.1 28.0 34.7 26.0 34.6 Z"
            fill={emblemColor}
          />
        </svg>
      </div>

      {/* Typography: NORI TOUR */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-editorial font-light tracking-[0.24em] uppercase ${textColor} ${textSizes[size]}`}
          >
            NORI
          </span>
          <span
            className={`font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase ${tourColor}`}
          >
            TOUR
          </span>
        </div>

        {showSubtitle && (
          <div className="mt-0.5 leading-none">
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.26em] uppercase font-light ${subColor}`}
            >
              SEOUL • CURATED K-BEAUTY
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
