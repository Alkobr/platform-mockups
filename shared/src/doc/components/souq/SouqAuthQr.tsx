import React from 'react';
import { ScanLine } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { btnPrimarySouq, SouqScreenHeader, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function SouqAuthQr({ nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={t('auth.qr.title')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 flex flex-col items-center justify-center gap-5 px-6 min-h-0">
        <div
          className="w-60 h-60 rounded-3xl border-2 border-dashed border-[#1E4988] bg-[#F0F4FA] flex items-center justify-center relative overflow-hidden"
          role="img"
          aria-label={t('auth.qr.title')}
        >
          <ScanLine className="w-20 h-20 text-[#1E4988] opacity-40" aria-hidden />
          <div className="absolute inset-x-8 top-1/2 h-0.5 bg-[#F89826]/70 motion-safe:animate-pulse" aria-hidden />
        </div>
        <p className="text-center text-[#5A5A5A] text-sm leading-relaxed max-w-xs">{t('auth.qr.hint')}</p>
      </div>

      <StickyFooter variant="v1">
        <button type="button" onClick={nav.next} className={btnPrimarySouq}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
