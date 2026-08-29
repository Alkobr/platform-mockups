import React from 'react';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import type { MockVariant } from '../../types';

/** Shared interactive primitives — ui-ux-pro-max: 44px targets, cursor-pointer, focus rings */
export const btnPrimarySouq =
  'w-full min-h-[48px] rounded-xl font-semibold text-white bg-[#1E4988] shadow-ds-button-primary transition-colors duration-200 cursor-pointer touch-manipulation hover:bg-[#183A6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4988]';
export const btnAccentSouq =
  'min-h-[48px] rounded-xl font-semibold text-white bg-[#F89826] shadow-ds-button-accent transition-colors duration-200 cursor-pointer touch-manipulation hover:bg-[#E0861C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F89826]';
export const btnPrimaryMihrab =
  'w-full min-h-[48px] rounded-[10px] type-button text-white bg-[#F89826] shadow-md transition-colors duration-200 cursor-pointer touch-manipulation hover:bg-[#E0861C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F89826]';
export const btnVendorMihrab =
  'w-full min-h-[48px] rounded-[10px] type-button text-white bg-[#1E4988] shadow-md transition-colors duration-200 cursor-pointer touch-manipulation hover:bg-[#183A6E]';

export function SouqBackButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#1E4988] border border-gray-200 shadow-md transition-colors duration-200 cursor-pointer touch-manipulation hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988]"
    >
      <ArrowLeft className="w-5 h-5 stroke-[2]" />
    </button>
  );
}

export function MihrabBackButton({ onClick, label, isRTL }: { onClick: () => void; label: string; isRTL?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="p-2 min-h-[44px] min-w-[44px] rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
    >
      <ChevronLeft size={22} className={`stroke-[2.5] ${isRTL ? 'rotate-180' : ''}`} />
    </button>
  );
}

export function MihrabHeaderBar({
  title,
  onBack,
  backLabel,
}: {
  title: string;
  onBack?: () => void;
  backLabel: string;
}) {
  return (
    <header className="flex items-center gap-3 px-4 py-3 bg-white border-b border-[#E8E2D4] shrink-0">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label={backLabel}
          className="type-body-sm text-[#1E4988] font-semibold min-h-[44px] min-w-[44px] flex items-center cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988] rounded-lg px-1"
        >
          ←
        </button>
      )}
      <h1 className="type-h3 text-[#343434] flex-1 truncate">{title}</h1>
    </header>
  );
}

export function SouqScreenHeader({
  title,
  onBack,
  backLabel,
}: {
  title: string;
  onBack?: () => void;
  backLabel: string;
}) {
  return (
    <header className="shrink-0 px-4 pt-4 pb-3 border-b border-gray-100 bg-white">
      {onBack && <SouqBackButton onClick={onBack} label={backLabel} />}
      <h1 className="font-heading font-extrabold text-xl text-[#1E4988] tracking-tight mt-3">{title}</h1>
    </header>
  );
}

export function DocField({
  label,
  children,
  variant = 'v1',
}: {
  label: string;
  children: React.ReactNode;
  variant?: MockVariant;
}) {
  return (
    <div className="space-y-1.5">
      <label className={variant === 'v1' ? 'text-sm font-semibold text-[#343434]' : 'type-label'}>{label}</label>
      {children}
    </div>
  );
}

export const inputSouq =
  'w-full min-h-[48px] px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#343434] placeholder:text-[#7A7A7A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988]';
export const inputMihrab =
  'w-full min-h-[48px] px-4 py-3 rounded-[10px] bg-white border border-[#D6D0C4] text-[#343434] placeholder:text-[#7A7A7A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F89826]';

export function StickyFooter({ variant, children }: { variant: MockVariant; children: React.ReactNode }) {
  return (
    <div
      className={`shrink-0 p-4 border-t safe-bottom ${
        variant === 'v2' ? 'bg-white border-[#E8E2D4] shadow-[0_-4px_12px_rgba(52,52,52,0.06)]' : 'bg-white border-gray-100'
      }`}
    >
      {children}
    </div>
  );
}

export function CoverImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" decoding="async" />;
}
