import React from 'react';
import { Clock } from 'lucide-react';
import { MOCK_SERVICES } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { DocAuthProgress } from '../DocAuthProgress';
import { btnPrimaryMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
  shopName: string;
}

export function MihrabBookConfirm({ nav, t, backLabel, locale, shopName }: Props) {
  const service = MOCK_SERVICES[0];

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('book.confirm.title')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 min-h-0">
        <DocAuthProgress step={2} variant="v2" stepLabel={t('book.flow.stepConfirm')} className="mb-5" />

        <div className="mihrab-card p-4 bg-white space-y-3 type-body-sm">
          <div className="flex justify-between gap-3">
            <span className="text-[#5A5A5A] shrink-0">Shop</span>
            <span className="font-semibold text-end">{shopName}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-[#5A5A5A] shrink-0">Service</span>
            <span className="text-end">{locale === 'ar' ? service.nameAr : service.nameEn}</span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <span className="text-[#5A5A5A] shrink-0">Date</span>
            <span className="flex items-center gap-1 ltr-isolate">
              <Clock className="w-4 h-4" aria-hidden />
              29 Aug · 10:00
            </span>
          </div>
          <div className="flex justify-between type-h4 pt-2 border-t border-[#E8E2D4]">
            <span>Total</span>
            <span className="ltr-isolate">₪{service.priceIls}</span>
          </div>
        </div>
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={btnPrimaryMihrab}>
          {t('action.confirm')}
        </button>
      </StickyFooter>
    </div>
  );
}
