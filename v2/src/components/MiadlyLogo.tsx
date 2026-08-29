import React from 'react';

interface MiadlySymbolProps {
  size?: number | string;
  className?: string;
  variant?: 'color' | 'blue' | 'orange' | 'white' | 'dark' | 'monochrome';
  withBackground?: boolean;
}

/**
 * The Master Miadly Symbol:
 * Represents the harmonious intersection of the letter "M", two people/elements converging
 * at the scheduled appointment ("ميعاد"), with an orange accent spark marking the precise point of connection.
 */
export const MiadlySymbol: React.FC<MiadlySymbolProps> = ({
  size = 32,
  className = '',
  variant = 'color',
  withBackground = false,
}) => {
  let primaryFill = '#1E4988';
  let accentFill = '#F89826';

  if (variant === 'blue') {
    primaryFill = '#1E4988';
    accentFill = '#1E4988';
  } else if (variant === 'orange') {
    primaryFill = '#F89826';
    accentFill = '#F89826';
  } else if (variant === 'white') {
    primaryFill = '#FFFFFF';
    accentFill = '#FFFFFF';
  } else if (variant === 'dark' || variant === 'monochrome') {
    primaryFill = '#343434';
    accentFill = '#343434';
  }

  const svgContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      aria-label="Miadly Brand Symbol"
    >
      {/* Left Pillar / Ascender Arch (Primary Blue: Trust & Stability) */}
      <path
        d="M20 78V36C20 27.1634 27.1634 20 36 20C44.8366 20 52 27.1634 52 36V78"
        stroke={primaryFill}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right Connecting Apex / Rendezvous Arch (Converging Bridge) */}
      <path
        d="M50 78V42C50 33.1634 57.1634 26 66 26C74.8366 26 82 33.1634 82 42V78"
        stroke={primaryFill}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dynamic Meeting Point & Time Synchronizer (Accent Orange: Energy & Action) */}
      <circle
        cx="66"
        cy="26"
        r="6.5"
        fill={accentFill}
      />

      {/* Subtle Central Convergence Touchpoint Node */}
      <path
        d="M36 50C36 43.3726 41.3726 38 48 38C54.6274 38 60 43.3726 60 50"
        stroke={accentFill}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (withBackground) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-2xl p-2.5 shadow-sm bg-[#1E4988] text-white ${className}`}
        style={{ width: typeof size === 'number' ? size * 1.35 : size, height: typeof size === 'number' ? size * 1.35 : size }}
      >
        {svgContent}
      </div>
    );
  }

  return svgContent;
};

interface MiadlyWordmarkProps {
  language?: 'en' | 'ar' | 'bilingual';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'blue' | 'white' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const MiadlyWordmark: React.FC<MiadlyWordmarkProps> = ({
  language = 'en',
  size = 'md',
  variant = 'color',
  className = '',
  showTagline = false,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  let textColor = 'text-[#1E4988]';
  let dotColor = 'text-[#F89826]';
  let tagColor = 'text-[#5A5A5A]';

  if (variant === 'blue') {
    textColor = 'text-[#1E4988]';
    dotColor = 'text-[#1E4988]';
    tagColor = 'text-[#1E4988]/80';
  } else if (variant === 'white') {
    textColor = 'text-white';
    dotColor = 'text-[#F89826]';
    tagColor = 'text-white/80';
  } else if (variant === 'dark') {
    textColor = 'text-[#343434]';
    dotColor = 'text-[#F89826]';
    tagColor = 'text-[#5A5A5A]';
  }

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Wordmark Typographic Lockup */}
      <div className="flex items-baseline gap-2">
        {(language === 'en' || language === 'bilingual') && (
          <span className={`font-serif font-extrabold tracking-tight ${sizeClasses[size]} ${textColor} leading-none`}>
            Miadly
            <span className={dotColor}>.</span>
          </span>
        )}

        {language === 'bilingual' && (
          <span className="text-[#D6D0C4] font-light text-base select-none">|</span>
        )}

        {(language === 'ar' || language === 'bilingual') && (
          <span
            className={`font-sans font-extrabold tracking-normal ${sizeClasses[size]} ${textColor} leading-none`}
            style={{ fontFamily: "'IBM Plex Sans Arabic', 'Cairo', sans-serif" }}
          >
            ميعادّلي
          </span>
        )}
      </div>

      {showTagline && (
        <span className={`font-semibold tracking-[0.16em] uppercase mt-1 ${taglineSizes[size]} ${tagColor}`}>
          {language === 'ar' ? 'مواعيد • عناية • أسلوب' : 'Appointments • Style • Care'}
        </span>
      )}
    </div>
  );
};

interface MiadlyLogoProps {
  layout?: 'horizontal' | 'vertical' | 'symbol-only' | 'wordmark-only';
  language?: 'en' | 'ar' | 'bilingual';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'blue' | 'orange' | 'white' | 'dark' | 'monochrome';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const MiadlyLogo: React.FC<MiadlyLogoProps> = ({
  layout = 'horizontal',
  language = 'en',
  size = 'md',
  variant = 'color',
  showTagline = false,
  className = '',
  onClick,
}) => {
  const symbolSizeMap = {
    sm: 24,
    md: 32,
    lg: 44,
    xl: 60,
  };

  const currentSymbolSize = symbolSizeMap[size];

  if (layout === 'symbol-only') {
    return (
      <div onClick={onClick} className={`inline-flex items-center ${onClick ? 'cursor-pointer' : ''} ${className}`}>
        <MiadlySymbol size={currentSymbolSize} variant={variant} />
      </div>
    );
  }

  if (layout === 'wordmark-only') {
    return (
      <div onClick={onClick} className={`inline-flex items-center ${onClick ? 'cursor-pointer' : ''} ${className}`}>
        <MiadlyWordmark
          language={language}
          size={size}
          variant={variant === 'white' ? 'white' : variant === 'dark' ? 'dark' : 'color'}
          showTagline={showTagline}
        />
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-center justify-center text-center gap-3 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-[#E8E2D4]/70 flex items-center justify-center">
          <MiadlySymbol size={currentSymbolSize} variant={variant} />
        </div>
        <MiadlyWordmark
          language={language}
          size={size}
          variant={variant === 'white' ? 'white' : variant === 'dark' ? 'dark' : 'color'}
          showTagline={showTagline}
          className="items-center"
        />
      </div>
    );
  }

  // Default: Horizontal lockup
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <MiadlySymbol size={currentSymbolSize} variant={variant} />
      <MiadlyWordmark
        language={language}
        size={size}
        variant={variant === 'white' ? 'white' : variant === 'dark' ? 'dark' : 'color'}
        showTagline={showTagline}
      />
    </div>
  );
};

/**
 * Standalone App Icon Component for App Store / Launcher preview
 */
export const MiadlyAppIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-2xl bg-gradient-to-br from-[#1E4988] to-[#123160] p-[16%] flex items-center justify-center shadow-lg border border-white/20 relative overflow-hidden shrink-0 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(248,152,38,0.22),transparent_70%)] pointer-events-none" />
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* White structural arches */}
        <path
          d="M20 78V36C20 27.1634 27.1634 20 36 20C44.8366 20 52 27.1634 52 36V78"
          stroke="#FFFFFF"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 78V42C50 33.1634 57.1634 26 66 26C74.8366 26 82 33.1634 82 42V78"
          stroke="#FFFFFF"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent Orange Spark */}
        <circle cx="66" cy="26" r="7.5" fill="#F89826" />
        <path
          d="M36 50C36 43.3726 41.3726 38 48 38C54.6274 38 60 43.3726 60 50"
          stroke="#F89826"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
