import React from 'react';
import type { MockVariant } from '../../types';

const MOCK_PHONE = '50-123-4567';

interface Props {
  id: string;
  variant: MockVariant;
  placeholder: string;
  dialCodeLabel: string;
  hint?: string;
  hintId?: string;
}

export function DocPhoneInput({ id, variant, placeholder, dialCodeLabel, hint, hintId }: Props) {
  const isSouq = variant === 'v1';

  const shell = isSouq
    ? 'rounded-2xl border border-gray-200 bg-white shadow-ds-card overflow-hidden flex items-stretch min-h-[52px] transition-colors duration-200 focus-within:border-[#1E4988] focus-within:ring-2 focus-within:ring-[#1E4988]/15'
    : 'rounded-[10px] border border-[#D6D0C4] bg-white overflow-hidden flex items-stretch min-h-[52px] transition-colors duration-200 focus-within:border-[#F89826] focus-within:ring-1 focus-within:ring-[#F89826]';

  const dial = isSouq
    ? 'px-3.5 flex items-center gap-2 bg-[#F8F9FA] border-e border-gray-200 shrink-0'
    : 'px-3 flex items-center gap-2 bg-[#FFF8EC] border-e border-[#D6D0C4] shrink-0';

  const input =
    'flex-1 min-w-0 px-4 py-3 text-base text-[#343434] bg-white focus:outline-none ltr-isolate placeholder:text-[#7A7A7A]';

  return (
    <div className="space-y-2">
      <div className={shell}>
        <div className={dial} aria-label={dialCodeLabel}>
          <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold shrink-0 ${
              isSouq ? 'bg-[#E8EEF6] text-[#1E4988]' : 'bg-white border border-[#E8E2D4] text-[#1E4988]'
            }`}
            aria-hidden
          >
            IL
          </span>
          <span className="font-semibold text-[#343434] ltr-isolate">+972</span>
        </div>
        <input
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          readOnly
          value={MOCK_PHONE}
          placeholder={placeholder}
          className={input}
          aria-describedby={hintId}
        />
      </div>
      {hint && hintId && (
        <p id={hintId} className={`${isSouq ? 'text-[11px]' : 'type-caption'} text-[#7A7A7A] leading-relaxed`}>
          {hint}
        </p>
      )}
    </div>
  );
}
