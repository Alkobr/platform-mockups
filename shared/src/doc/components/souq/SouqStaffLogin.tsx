import React from 'react';
import { Building2 } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { btnPrimarySouq, DocField, inputSouq, SouqScreenHeader, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function SouqStaffLogin({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={t('auth.welcome.staff')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 min-h-0">
        <div className="w-16 h-16 rounded-2xl bg-[#E8EEF6] flex items-center justify-center">
          <Building2 className="w-8 h-8 text-[#1E4988]" aria-hidden />
        </div>
        <div className="text-center">
          <p className="font-heading font-bold text-lg text-[#343434]">Nour Salon</p>
          <p className="text-sm text-[#7A7A7A] mt-1">{t('auth.welcome.staff')}</p>
        </div>
        <DocField label="PIN" variant="v1">
          <input
            readOnly
            placeholder="• • • •"
            className={`${inputSouq} w-48 text-center text-3xl tracking-[0.5em] ltr-isolate`}
            inputMode="numeric"
          />
        </DocField>
      </div>

      <StickyFooter variant="v1">
        <button type="button" onClick={nav.next} className={btnPrimarySouq}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
