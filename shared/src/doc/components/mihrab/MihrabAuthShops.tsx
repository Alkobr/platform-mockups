import React from 'react';
import { ChevronRight, QrCode, Store } from 'lucide-react';
import { MOCK_SHOPS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MihrabHeaderBar } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function MihrabAuthShops({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('auth.shops.title')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-3 min-h-0">
        <div className="mihrab-card divide-y divide-[#E8E2D4] overflow-hidden">
          {MOCK_SHOPS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => nav.action('selectShop')}
              className="w-full flex items-center gap-3 px-4 py-3.5 min-h-[56px] text-start bg-white hover:bg-[#FFF8EC] cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F89826]"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#E8EEF6] flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-[#1E4988]" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="type-body font-semibold text-[#343434]">{locale === 'ar' ? s.nameAr : s.nameEn}</p>
                <p className="type-caption text-[#7A7A7A] truncate">{locale === 'ar' ? s.addressAr : s.addressEn}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#7A7A7A] shrink-0" aria-hidden />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => nav.action('linkShop')}
          className="w-full flex items-center justify-center gap-2 min-h-[48px] py-3 type-body-sm text-[#1E4988] font-semibold rounded-[10px] border border-dashed border-[#1E4988] cursor-pointer touch-manipulation hover:bg-[#FFF8EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F89826]"
        >
          <QrCode className="w-5 h-5" aria-hidden />
          {t('auth.qr.title')}
        </button>
      </div>
    </div>
  );
}
