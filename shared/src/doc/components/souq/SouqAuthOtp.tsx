import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { DocAuthProgress } from '../DocAuthProgress';
import { DocOtpInput } from '../DocOtpInput';
import { DocSentToChip } from '../DocSentToChip';
import { btnPrimarySouq, SouqBackButton, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function SouqAuthOtp({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <header className="relative shrink-0 px-4 pt-4 pb-2">
        <SouqBackButton onClick={nav.back} label={backLabel} />
      </header>

      <div className="relative flex-1 flex flex-col px-6 pt-3 pb-4 min-h-0 overflow-y-auto no-scrollbar">
        <DocAuthProgress step={2} variant="v1" stepLabel={t('auth.otp.step')} className="mb-4 shrink-0" />

        <h1
          id="souq-otp-title"
          className="font-heading font-extrabold text-2xl text-[#1E4988] tracking-tight leading-tight shrink-0"
        >
          {t('auth.otp.title')}
        </h1>
        <p id="souq-otp-desc" className="text-sm text-[#5A5A5A] mt-2 leading-relaxed shrink-0">
          {t('auth.otp.subtitle')}
        </p>

        <div className="mt-5 shrink-0">
          <DocSentToChip
            variant="v1"
            sentToLabel={t('auth.otp.sentToLabel')}
            changeLabel={t('auth.otp.changePhone')}
            onChange={nav.back}
          />
        </div>

        <div className="mt-8 shrink-0" aria-labelledby="souq-otp-title" aria-describedby="souq-otp-desc">
          <DocOtpInput variant="v1" label={t('auth.otp.label')} filledCount={5} />
        </div>

        <p className="mt-6 text-sm text-[#5A5A5A] text-center shrink-0">
          {t('auth.otp.resendPrompt')}{' '}
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="font-semibold text-[#7A7A7A] cursor-not-allowed inline min-h-[44px] px-1 align-middle"
          >
            {t('auth.otp.resendIn')}
          </button>
        </p>
      </div>

      <StickyFooter variant="v1">
        <button
          type="button"
          onClick={nav.next}
          className={`${btnPrimarySouq} flex items-center justify-center gap-2`}
        >
          {t('action.confirm')}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
      </StickyFooter>
    </div>
  );
}
