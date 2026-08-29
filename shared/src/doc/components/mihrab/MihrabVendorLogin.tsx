import React from 'react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import type { RenderDocLogo } from '../../docTypes';
import { btnVendorMihrab, DocField, inputMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

interface Props {
  renderLogo: RenderDocLogo;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
}

export function MihrabVendorLogin({ renderLogo, nav, t, backLabel }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('auth.welcome.vendor')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 px-4 py-6 flex flex-col items-center min-h-0 overflow-y-auto no-scrollbar">
        {renderLogo('vendor')}
        <div className="w-full mihrab-card p-4 mt-6 space-y-4 bg-white">
          <DocField label="Email" variant="v2">
            <input readOnly placeholder="owner@shop.com" className={inputMihrab} autoComplete="email" />
          </DocField>
          <DocField label="Password" variant="v2">
            <input readOnly type="password" placeholder="••••••••" className={inputMihrab} autoComplete="current-password" />
          </DocField>
        </div>
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={btnVendorMihrab}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
