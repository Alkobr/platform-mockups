import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { DocAuthProgress } from '../DocAuthProgress';
import { DocPhoneInput } from '../DocPhoneInput';
import { btnPrimarySouq, SouqBackButton, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function SouqAuthPhone({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <header className="relative shrink-0 px-4 pt-4 pb-2 flex items-center justify-between gap-3">
        <SouqBackButton onClick={nav.back} label={backLabel} />
      </header>

      <div className="relative flex-1 flex flex-col px-6 pt-3 pb-4 min-h-0 overflow-y-auto no-scrollbar">
        <DocAuthProgress step={1} variant="v1" stepLabel={t('auth.phone.step')} className="mb-3 shrink-0" />

        <h1 className="font-heading font-extrabold text-2xl text-[#1E4988] tracking-tight leading-tight shrink-0">
          {t('auth.phone.title')}
        </h1>
        <p className="text-sm text-[#5A5A5A] mt-2 leading-relaxed max-w-[300px] shrink-0">{t('auth.phone.subtitle')}</p>

        <div className="mt-8 shrink-0">
          <label htmlFor="souq-auth-phone" className="block text-xs font-bold text-[#343434] mb-2">
            {t('auth.phone.label')}
          </label>
          <DocPhoneInput
            id="souq-auth-phone"
            variant="v1"
            placeholder={t('auth.phone.placeholder')}
            dialCodeLabel={t('auth.phone.dialCode')}
            hint={t('auth.phone.hint')}
            hintId="souq-auth-phone-hint"
          />
        </div>
      </div>

      <StickyFooter variant="v1">
        <button
          type="button"
          onClick={nav.next}
          className={`${btnPrimarySouq} flex items-center justify-center gap-2`}
        >
          {t('action.continue')}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
      </StickyFooter>
    </div>
  );
}
