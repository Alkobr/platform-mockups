import React from 'react';
import { MOCK_SERVICES, MOCK_SLOTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MOCK_MEDIA } from '../../mockMedia';
import { btnPrimarySouq, DocField, inputSouq, SouqScreenHeader, StickyFooter } from '../ui';

const BOOKING_DATES = ['Thu 28', 'Fri 29', 'Sat 30', 'Sun 31', 'Mon 1'];

type LegacyId = 'book-services' | 'book-slots' | 'book-discount';

interface Props {
  id: LegacyId;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function SouqBookLegacy({ id, nav, t, backLabel, locale }: Props) {
  const title =
    id === 'book-services' ? t('book.services.title') : id === 'book-slots' ? t('book.slots.title') : t('book.discount.title');

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={title} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 min-h-0">
        {id === 'book-services' && (
          <div className="grid grid-cols-2 gap-3">
            {MOCK_SERVICES.map((svc, i) => (
              <button
                key={svc.id}
                type="button"
                onClick={nav.next}
                className={`text-start rounded-2xl overflow-hidden border bg-white shadow-ds-card cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988] ${
                  svc.id === 'svc-1' ? 'border-[#1E4988] ring-2 ring-[#1E4988]/20' : 'border-gray-200'
                }`}
              >
                <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${MOCK_MEDIA.serviceThumbs[i]})` }} />
                <div className="p-3">
                  <p className="font-semibold text-sm text-[#343434]">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                  <p className="text-xs text-[#7A7A7A] ltr-isolate mt-0.5">{svc.durationMinutes} min</p>
                  <p className="text-[#1E4988] font-bold mt-1 ltr-isolate">₪{svc.priceIls}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {id === 'book-slots' && (
          <div className="space-y-5">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {BOOKING_DATES.map((d, i) => (
                <button
                  key={d}
                  type="button"
                  className={`shrink-0 min-h-[44px] px-4 py-3 rounded-2xl text-sm font-semibold cursor-pointer touch-manipulation ${
                    i === 1 ? 'bg-[#1E4988] text-white shadow-ds-button-primary' : 'bg-[#F8F9FA] border border-gray-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {MOCK_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={nav.next}
                  className={`min-h-[44px] py-3 rounded-xl text-sm font-semibold ltr-isolate cursor-pointer touch-manipulation ${
                    slot === '10:00' ? 'bg-[#1E4988] text-white' : 'bg-[#F8F9FA] border border-gray-200'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {id === 'book-discount' && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 p-4 bg-[#FEF3E4]/50">
              <DocField label={t('book.discount.placeholder')}>
                <input readOnly value="WELCOME10" className={`${inputSouq} ltr-isolate uppercase font-bold tracking-wider`} />
              </DocField>
              <p className="text-sm text-[#187A28] mt-2 font-medium">{t('book.discount.applied')}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4 space-y-2 shadow-ds-card bg-white">
              <div className="flex justify-between text-[#5A5A5A] text-sm">
                <span>Subtotal</span>
                <span className="ltr-isolate">₪120</span>
              </div>
              <div className="flex justify-between text-[#F89826] text-sm">
                <span>Discount</span>
                <span className="ltr-isolate">-₪12</span>
              </div>
              <div className="flex justify-between font-heading font-bold text-xl pt-2 border-t text-[#343434]">
                <span>Total</span>
                <span className="ltr-isolate">₪108</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {id !== 'book-services' && (
        <StickyFooter variant="v1">
          <button type="button" onClick={nav.next} className={btnPrimarySouq}>
            {t('action.continue')}
          </button>
        </StickyFooter>
      )}
    </div>
  );
}
