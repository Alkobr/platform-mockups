import React from 'react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { DocAuthProgress } from '../DocAuthProgress';
import { DocOtpInput } from '../DocOtpInput';
import { DocSentToChip } from '../DocSentToChip';
import { btnPrimaryMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function MihrabAuthOtp({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('auth.otp.label')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 flex flex-col px-6 pt-5 pb-4 min-h-0 overflow-y-auto no-scrollbar">
        <DocAuthProgress step={2} variant="v2" stepLabel={t('auth.otp.step')} className="mb-4 shrink-0" />

        <h1
          id="mihrab-otp-title"
          className="type-h2 text-[#343434] tracking-tight leading-tight shrink-0"
        >
          {t('auth.otp.title')}
        </h1>
        <p id="mihrab-otp-desc" className="type-body-sm text-[#5A5A5A] mt-2 leading-relaxed shrink-0">
          {t('auth.otp.subtitle')}
        </p>

        <div className="mt-5 shrink-0">
          <DocSentToChip
            variant="v2"
            sentToLabel={t('auth.otp.sentToLabel')}
            changeLabel={t('auth.otp.changePhone')}
            onChange={nav.back}
          />
        </div>

        <div className="mt-8 shrink-0" aria-labelledby="mihrab-otp-title" aria-describedby="mihrab-otp-desc">
          <DocOtpInput variant="v2" label={t('auth.otp.label')} filledCount={5} />
        </div>

        <p className="mt-6 type-body-sm text-[#5A5A5A] text-center shrink-0">
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

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={`${btnPrimaryMihrab} text-[#343434]`}>
          {t('action.confirm')}
        </button>
      </StickyFooter>

      <div className="w-28 h-1 bg-[#343434]/80 rounded-full mx-auto mb-3 shrink-0 safe-bottom" aria-hidden />
    </div>
  );
}
