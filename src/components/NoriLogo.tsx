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
    : 'text-[#302B29]';

  const tourColor = isLight
    ? 'text-[#E9D2CD]'
    : 'text-[#D9B4B0]';

  const subColor = isLight
    ? 'text-[#E9D2CD]'
    : 'text-[#786761]';

  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon: Radiant Petal & Play Dew Emblem */}
      <div className={`relative flex items-center justify-center ${symbolSizes[size]} shrink-0`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="noriGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E9D2CD" />
              <stop offset="50%" stopColor="#D9B4B0" />
              <stop offset="100%" stopColor="#786761" />
            </linearGradient>
            <radialGradient id="noriDewGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#E9D2CD" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D9B4B0" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Outer soft glow ring */}
          <circle
            cx="22"
            cy="22"
            r="19"
            stroke="url(#noriGlowGrad)"
            strokeWidth="1.2"
            strokeDasharray="3 2"
            opacity={isLight ? 0.65 : 0.5}
          />

          {/* Elegant petal loop representing "Nori" (놀이 - playful loop / harmony) */}
          <path
            d="M22 8C27 15 34 19 34 25C34 30.5 28.5 35 22 35C15.5 35 10 30.5 10 25C10 19 17 15 22 8Z"
            stroke="url(#noriGlowGrad)"
            strokeWidth="1.4"
            fill={isLight ? 'rgba(233, 210, 205, 0.15)' : 'rgba(217, 180, 176, 0.12)'}
          />

          {/* Central radiant beauty spark / inner glow */}
          <circle cx="22" cy="24" r="3.2" fill="url(#noriGlowGrad)" />
          <path
            d="M22 17V19M22 29V31M15 24H17M27 24H29"
            stroke="url(#noriGlowGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Typography: NORI TOUR */}
      <div className="flex flex-col text-left">
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
          <div className="flex items-center gap-1.5 mt-0.5 leading-none">
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.26em] uppercase font-light ${subColor}`}
            >
              SEOUL • CURATED K-BEAUTY
            </span>
            <span className="text-[9px] text-[#D9B4B0] font-serif">놀이</span>
          </div>
        )}
      </div>
    </div>
  );
};

