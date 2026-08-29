import React from 'react';
import { Phone } from 'lucide-react';
import type { MockVariant } from '../../types';
import { MOCK_OTP_PHONE } from './DocOtpInput';

interface Props {
  variant: MockVariant;
  sentToLabel: string;
  changeLabel: string;
  onChange: () => void;
}

export function DocSentToChip({ variant, sentToLabel, changeLabel, onChange }: Props) {
  const isSouq = variant === 'v1';

  return (
    <div
      className={`flex items-center gap-3 px-3.5 py-3 ${
        isSouq
          ? 'rounded-xl bg-[#F8F9FA] border border-gray-200'
          : 'rounded-[10px] bg-[#FFF8EC] border border-[#E8E2D4]'
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
          isSouq ? 'bg-[#E8EEF6] text-[#1E4988]' : 'bg-white border border-[#E8E2D4] text-[#1E4988]'
        }`}
      >
        <Phone className="w-4 h-4" strokeWidth={2.2} aria-hidden />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`${isSouq ? 'text-[11px]' : 'type-caption'} text-[#7A7A7A]`}>{sentToLabel}</p>
        <p className={`${isSouq ? 'text-sm' : 'type-body-sm'} font-semibold text-[#343434] ltr-isolate truncate`}>
          {MOCK_OTP_PHONE}
        </p>
      </div>
      <button
        type="button"
        onClick={onChange}
        className={`shrink-0 text-xs font-semibold min-h-[44px] px-2 cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 rounded-lg ${
          isSouq
            ? 'text-[#1E4988] hover:text-[#183A6E] focus-visible:outline-[#1E4988]'
            : 'text-[#F89826] hover:text-[#E0861C] focus-visible:outline-[#F89826]'
        }`}
      >
        {changeLabel}
      </button>
    </div>
  );
}
