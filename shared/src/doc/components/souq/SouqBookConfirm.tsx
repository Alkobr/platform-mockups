import React from 'react';
import { Clock } from 'lucide-react';
import { MOCK_SERVICES } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MOCK_MEDIA } from '../../mockMedia';
import { DocAuthProgress } from '../DocAuthProgress';
import { btnAccentSouq, SouqBackButton, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
  shopName: string;
}

export function SouqBookConfirm({ nav, t, backLabel, locale, shopName }: Props) {
  const service = MOCK_SERVICES[0];

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <header className="shrink-0 px-4 pt-4 pb-2 border-b border-gray-100">
        <SouqBackButton onClick={nav.back} label={backLabel} />
        <h1 className="font-heading font-extrabold text-xl text-[#1E4988] mt-3">{t('book.confirm.title')}</h1>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 min-h-0">
        <DocAuthProgress step={2} variant="v1" stepLabel={t('book.flow.stepConfirm')} className="mb-5" />

        <div className="rounded-2xl overflow-hidden shadow-ds-elevated bg-white border border-gray-200">
          <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${MOCK_MEDIA.shopCovers[0]})` }} />
          <div className="p-4 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-[#5A5A5A] shrink-0">Shop</span>
              <span className="font-semibold text-end">{shopName}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-[#5A5A5A] shrink-0">Service</span>
              <span className="text-end">{locale === 'ar' ? service.nameAr : service.nameEn}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[#5A5A5A] shrink-0">When</span>
              <span className="flex items-center gap-1 font-semibold ltr-isolate">
                <Clock className="w-4 h-4" aria-hidden />
                29 Aug · 10:00
              </span>
            </div>
            <div className="flex justify-between font-heading font-bold text-lg pt-2 border-t border-gray-100">
              <span>Total</span>
              <span className="ltr-isolate">₪{service.priceIls}</span>
            </div>
          </div>
        </div>
      </div>

      <StickyFooter variant="v1">
        <button type="button" onClick={nav.next} className={`${btnAccentSouq} w-full`}>
          {t('action.confirm')}
        </button>
      </StickyFooter>
    </div>
  );
}
