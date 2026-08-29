import React from 'react';
import type { MockVariant } from '../../types';

interface Props {
  step: 1 | 2;
  variant: MockVariant;
  stepLabel: string;
  className?: string;
}

export function DocAuthProgress({ step, variant, stepLabel, className = '' }: Props) {
  const isSouq = variant === 'v1';
  const active = isSouq ? 'bg-[#1E4988]' : 'bg-[#F89826]';
  const inactive = 'bg-[#E8E2D4]';

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex gap-1.5 flex-1" aria-hidden>
          <span className={`h-1 flex-1 rounded-full ${step >= 1 ? active : inactive}`} />
          <span className={`h-1 flex-1 rounded-full ${step >= 2 ? active : inactive}`} />
        </div>
        <span
          className={`text-[11px] font-bold uppercase tracking-wide shrink-0 ${
            isSouq ? 'text-[#1E4988]' : 'text-[#F89826]'
          }`}
        >
          {stepLabel}
        </span>
      </div>
    </div>
  );
}
