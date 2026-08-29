import React from 'react';

export type LogoVariant =
  | 'primary' // Symbol + "Miadly"
  | 'arabic' // Symbol + "ميعادّلي"
  | 'bilingual' // Symbol + "Miadly" + "ميعادّلي"
  | 'bilingual-stacked'
  | 'symbol-only'
  | 'wordmark-only'
  | 'arabic-only'
  | 'app-icon';

export type LogoColorMode = 'default' | 'monochrome' | 'reverse' | 'blue-only';

interface MiadlyLogoProps {
  variant?: LogoVariant;
  colorMode?: LogoColorMode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  customHeight?: number;
  className?: string;
  showSubtitle?: boolean;
}

export const MiadlyLogo: React.FC<MiadlyLogoProps> = ({
  variant = 'primary',
  colorMode = 'default',
  size = 'md',
  customHeight,
  className = '',
  showSubtitle = false,
}) => {
  // Color resolution based on mode
  const primaryColor =
    colorMode === 'reverse'
      ? '#FFFFFF'
      : colorMode === 'monochrome'
      ? '#343434'
      : '#1E4988';

  const accentColor =
    colorMode === 'reverse'
      ? '#FFFFFF'
      : colorMode === 'monochrome'
      ? '#343434'
      : colorMode === 'blue-only'
      ? '#1E4988'
      : '#F89826';

  const textColor =
    colorMode === 'reverse'
      ? '#FFFFFF'
      : colorMode === 'monochrome'
      ? '#343434'
      : '#1E4988';

  const subtitleColor =
    colorMode === 'reverse'
      ? 'rgba(255,255,255,0.7)'
      : colorMode === 'monochrome'
      ? '#7A7A7A'
      : '#5A5A5A';

  // Size sizing map for symbol
  const symbolSizeMap = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 44,
    xl: 56,
    '2xl': 72,
    custom: customHeight || 32,
  };

  const symbolDim = customHeight || symbolSizeMap[size] || 32;

  /**
   * The Official Master Symbol of Miadly:
   * Abstract geometric fusion of:
   * 1. The letter 'M' arch rhythm
   * 2. The Arabic 'م' (Meem) circular head & flowing baseline terminal
   * 3. Two intersecting synchronization arcs representing "Meeting at the right moment"
   * 4. The vibrant Orange (#F89826) focal pulse dot
   */
  const renderSymbolSVG = (sDim: number) => (
    <svg
      width={sDim}
      height={sDim}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      {/* Primary Blue interlocking arches - forming 'M' & 'م' */}
      <path
        d="M9 36V20C9 14.4772 13.4772 10 19 10C22.6138 10 25.7644 11.9168 27.5 14.8C29.2356 11.9168 32.3862 10 36 10C41.5228 10 46 14.4772 46 20V36"
        stroke={primaryColor}
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary fluid connector representing the scheduling timeline / handshake loop */}
      <path
        d="M9 25C9 31.0751 13.9249 36 20 36H28C34.0751 36 39 31.0751 39 25"
        stroke={primaryColor}
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeOpacity={colorMode === 'reverse' ? 0.85 : 0.9}
      />
      {/* Accent Orange punctum dot - "The Exact Scheduled Moment" */}
      <circle cx="27.5" cy="23" r="4.2" fill={accentColor} />
    </svg>
  );

  // App Icon version with squircle background
  if (variant === 'app-icon') {
    const iconRadius = Math.round(symbolDim * 0.24);
    return (
      <div
        className={`inline-flex items-center justify-center shrink-0 shadow-ds-button-primary ${className}`}
        style={{
          width: symbolDim,
          height: symbolDim,
          backgroundColor: '#1E4988',
          borderRadius: `${iconRadius}px`,
        }}
      >
        <svg
          width={Math.round(symbolDim * 0.68)}
          height={Math.round(symbolDim * 0.68)}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 36V20C9 14.4772 13.4772 10 19 10C22.6138 10 25.7644 11.9168 27.5 14.8C29.2356 11.9168 32.3862 10 36 10C41.5228 10 46 14.4772 46 20V36"
            stroke="#FFFFFF"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 25C9 31.0751 13.9249 36 20 36H28C34.0751 36 39 31.0751 39 25"
            stroke="#FFFFFF"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeOpacity={0.88}
          />
          <circle cx="27.5" cy="23" r="4.2" fill="#F89826" />
        </svg>
      </div>
    );
  }

  // Symbol only
  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderSymbolSVG(symbolDim)}
      </div>
    );
  }

  // Font size calculation for wordmarks
  const fontSizeClass =
    size === 'xs'
      ? 'text-sm'
      : size === 'sm'
      ? 'text-base'
      : size === 'md'
      ? 'text-xl'
      : size === 'lg'
      ? 'text-2xl'
      : size === 'xl'
      ? 'text-3xl'
      : 'text-4xl';

  const arabicSizeClass =
    size === 'xs'
      ? 'text-xs'
      : size === 'sm'
      ? 'text-sm'
      : size === 'md'
      ? 'text-base'
      : size === 'lg'
      ? 'text-xl'
      : size === 'xl'
      ? 'text-2xl'
      : 'text-3xl';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Symbol Icon */}
      {variant !== 'wordmark-only' && variant !== 'arabic-only' && (
        <div className="shrink-0">{renderSymbolSVG(symbolDim)}</div>
      )}

      {/* Wordmarks based on variant */}
      <div className="flex flex-col justify-center">
        {/* Variant: Primary (English) */}
        {variant === 'primary' && (
          <div className="flex items-baseline gap-1">
            <span
              className={`font-heading font-extrabold tracking-tight leading-none ${fontSizeClass}`}
              style={{ color: textColor }}
            >
              Miad<span style={{ color: accentColor }}>ly</span>
            </span>
          </div>
        )}

        {/* Variant: Arabic Only */}
        {variant === 'arabic' && (
          <div className="flex items-baseline" dir="rtl">
            <span
              className={`font-arabic font-black tracking-normal leading-none ${arabicSizeClass}`}
              style={{ color: textColor }}
            >
              ميعادّ<span style={{ color: accentColor }}>لي</span>
            </span>
          </div>
        )}

        {/* Variant: Bilingual Horizontal */}
        {variant === 'bilingual' && (
          <div className="flex items-center gap-2">
            <span
              className={`font-heading font-extrabold tracking-tight leading-none ${fontSizeClass}`}
              style={{ color: textColor }}
            >
              Miad<span style={{ color: accentColor }}>ly</span>
            </span>
            <span
              className="text-[#D6D0C4] font-light select-none text-xs"
              style={{ color: colorMode === 'reverse' ? 'rgba(255,255,255,0.4)' : '#D6D0C4' }}
            >
              |
            </span>
            <span
              className={`font-arabic font-extrabold leading-none ${arabicSizeClass}`}
              dir="rtl"
              style={{ color: textColor }}
            >
              ميعادّلي
            </span>
          </div>
        )}

        {/* Variant: Bilingual Stacked */}
        {variant === 'bilingual-stacked' && (
          <div className="flex flex-col">
            <span
              className={`font-heading font-extrabold tracking-tight leading-none ${fontSizeClass}`}
              style={{ color: textColor }}
            >
              Miad<span style={{ color: accentColor }}>ly</span>
            </span>
            <span
              className={`font-arabic font-bold opacity-85 leading-tight ${arabicSizeClass} mt-0.5`}
              dir="rtl"
              style={{ color: subtitleColor }}
            >
              ميعادّلي
            </span>
          </div>
        )}

        {/* Variant: Wordmark Only (English) */}
        {variant === 'wordmark-only' && (
          <span
            className={`font-heading font-extrabold tracking-tight leading-none ${fontSizeClass}`}
            style={{ color: textColor }}
          >
            Miad<span style={{ color: accentColor }}>ly</span>
          </span>
        )}

        {/* Variant: Arabic Only */}
        {variant === 'arabic-only' && (
          <span
            className={`font-arabic font-black leading-none ${arabicSizeClass}`}
            dir="rtl"
            style={{ color: textColor }}
          >
            ميعادّ<span style={{ color: accentColor }}>لي</span>
          </span>
        )}

        {/* Optional Subtitle / Tagline */}
        {showSubtitle && (
          <span
            className="text-[10px] font-medium tracking-wide mt-0.5"
            style={{ color: subtitleColor }}
          >
            Smart Beauty & Appointments
          </span>
        )}
      </div>
    </div>
  );
};
