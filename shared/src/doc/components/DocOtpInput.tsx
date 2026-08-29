import React from 'react';
import type { MockVariant } from '../../types';

export const MOCK_OTP_PHONE = '+972 50-123-4567';
const MOCK_DIGITS = ['4', '8', '2', '1', '9'];

interface Props {
  variant: MockVariant;
  label: string;
  /** Mock entry progress: digits entered; focus sits on the next empty cell. */
  filledCount?: number;
}

export function DocOtpInput({ variant, label, filledCount = 5 }: Props) {
  const isSouq = variant === 'v1';

  const cellBase =
    'w-full h-12 min-h-[48px] text-center text-xl font-bold ltr-isolate rounded-xl border transition-colors duration-200 focus:outline-none';

  const cellSouq = {
    idle: `${cellBase} border-gray-200 bg-[#F8F9FA] text-[#343434]`,
    filled: `${cellBase} border-[#1E4988]/40 bg-white text-[#343434]`,
    active: `${cellBase} border-[#1E4988] bg-white text-[#343434] ring-2 ring-[#1E4988]/20`,
  };

  const cellMihrab = {
    idle: `${cellBase} rounded-[10px] border-[#D6D0C4] bg-[#FFF8EC] text-[#343434]`,
    filled: `${cellBase} rounded-[10px] border-[#F89826]/40 bg-white text-[#343434]`,
    active: `${cellBase} rounded-[10px] border-[#F89826] bg-white text-[#343434] ring-2 ring-[#F89826]/25`,
  };

  const styles = isSouq ? cellSouq : cellMihrab;

  return (
    <div
      className="grid grid-cols-6 gap-2 w-full"
      role="group"
      aria-label={label}
    >
      {Array.from({ length: 6 }).map((_, index) => {
        const isFilled = index < filledCount;
        const isActive = index === filledCount;
        const cellClass = isActive ? styles.active : isFilled ? styles.filled : styles.idle;

        return (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            readOnly
            maxLength={1}
            value={isFilled ? MOCK_DIGITS[index] ?? '' : ''}
            aria-label={`${label} ${index + 1}`}
            className={cellClass}
          />
        );
      })}
    </div>
  );
}
