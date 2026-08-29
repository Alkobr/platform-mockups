import React from 'react';
import { Building2 } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { btnPrimaryMihrab, DocField, inputMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function MihrabStaffLogin({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('auth.welcome.staff')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 px-4 py-6 flex flex-col justify-center min-h-0">
        <div className="mihrab-card p-4 bg-white space-y-4">
          <div className="flex items-center gap-2 type-body-sm text-[#5A5A5A]">
            <Building2 className="w-4 h-4" aria-hidden />
            Nour Salon
          </div>
          <DocField label="PIN" variant="v2">
            <input
              readOnly
              placeholder="• • • •"
              className={`${inputMihrab} text-center text-2xl tracking-widest ltr-isolate`}
              inputMode="numeric"
            />
          </DocField>
        </div>
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={btnPrimaryMihrab}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
