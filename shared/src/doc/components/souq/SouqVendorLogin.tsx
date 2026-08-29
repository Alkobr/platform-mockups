import React from 'react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import type { RenderDocLogo } from '../../docTypes';
import { btnPrimarySouq, DocField, inputSouq, SouqScreenHeader, StickyFooter } from '../ui';

interface Props {
  renderLogo: RenderDocLogo;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function SouqVendorLogin({ renderLogo, nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={t('auth.welcome.vendor')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 px-6 py-6 flex flex-col items-center min-h-0 overflow-y-auto no-scrollbar">
        {renderLogo('vendor')}
        <div className="w-full max-w-sm mt-6 rounded-2xl bg-white border border-gray-200 shadow-ds-card p-5 space-y-4">
          <DocField label="Email">
            <input readOnly placeholder="owner@shop.com" className={inputSouq} autoComplete="email" />
          </DocField>
          <DocField label="Password">
            <input readOnly type="password" placeholder="••••••••" className={inputSouq} autoComplete="current-password" />
          </DocField>
        </div>
      </div>

      <StickyFooter variant="v1">
        <button type="button" onClick={nav.next} className={btnPrimarySouq}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
