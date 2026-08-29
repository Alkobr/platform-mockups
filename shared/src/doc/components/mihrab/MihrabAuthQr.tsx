import React from 'react';
import { ScanLine } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { btnPrimaryMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function MihrabAuthQr({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('auth.qr.title')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 min-h-0">
        <div
          className="mihrab-card w-56 h-56 flex items-center justify-center border-2 border-dashed border-[#F89826] bg-[#FFF8EC]"
          role="img"
          aria-label={t('auth.qr.title')}
        >
          <ScanLine className="w-16 h-16 text-[#F89826] opacity-60" aria-hidden />
        </div>
        <p className="type-body-sm text-[#5A5A5A] text-center max-w-xs leading-relaxed">{t('auth.qr.hint')}</p>
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={btnPrimaryMihrab}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
