import React from 'react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { DocAuthProgress } from '../DocAuthProgress';
import { DocPhoneInput } from '../DocPhoneInput';
import { btnPrimaryMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function MihrabAuthPhone({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('auth.phone.label')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 flex flex-col px-6 pt-6 pb-4 min-h-0 overflow-y-auto no-scrollbar">
        <DocAuthProgress step={1} variant="v2" stepLabel={t('auth.phone.step')} className="mb-2 shrink-0" />

        <h1 className="type-h2 text-[#343434] tracking-tight leading-tight shrink-0">{t('auth.phone.title')}</h1>
        <p className="type-body-sm text-[#5A5A5A] mt-2 leading-relaxed max-w-xs shrink-0">{t('auth.phone.subtitle')}</p>

        <div className="mt-8 shrink-0">
          <label htmlFor="mihrab-auth-phone" className="type-label text-[#343434] block mb-2">
            {t('auth.phone.label')}
          </label>
          <DocPhoneInput
            id="mihrab-auth-phone"
            variant="v2"
            placeholder={t('auth.phone.placeholder')}
            dialCodeLabel={t('auth.phone.dialCode')}
            hint={t('auth.phone.hint')}
            hintId="mihrab-auth-phone-hint"
          />
        </div>
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={`${btnPrimaryMihrab} text-[#343434]`}>
          {t('action.continue')}
        </button>
      </StickyFooter>

      <div className="w-28 h-1 bg-[#343434]/80 rounded-full mx-auto mb-3 shrink-0 safe-bottom" aria-hidden />
    </div>
  );
}
