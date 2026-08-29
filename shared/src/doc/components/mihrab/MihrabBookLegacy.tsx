import React from 'react';
import { Calendar } from 'lucide-react';
import { MOCK_SERVICES, MOCK_SLOTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { btnPrimaryMihrab, DocField, inputMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

type LegacyId = 'book-services' | 'book-slots' | 'book-discount';

const BOOKING_STEPS: Record<LegacyId, { step: number; total: number; labelEn: string; labelAr: string }> = {
  'book-services': { step: 2, total: 5, labelEn: 'Choose services', labelAr: 'اختر الخدمات' },
  'book-slots': { step: 3, total: 5, labelEn: 'Pick a time', labelAr: 'اختر الوقت' },
  'book-discount': { step: 4, total: 5, labelEn: 'Promo code', labelAr: 'كود الخصم' },
};

function LegacyStepper({ id, locale }: { id: LegacyId; locale: string }) {
  const meta = BOOKING_STEPS[id];
  return (
    <div className="px-4 py-3 bg-[#FFF8EC] border-b border-[#E8E2D4] shrink-0">
      <div className="flex items-center justify-between mb-2">
        <span className="type-caption text-[#5A5A5A] font-semibold ltr-isolate">
          {locale === 'ar' ? `الخطوة ${meta.step} من ${meta.total}` : `Step ${meta.step} of ${meta.total}`}
        </span>
        <span className="type-caption text-[#1E4988] font-semibold">{locale === 'ar' ? meta.labelAr : meta.labelEn}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: meta.total }, (_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i < meta.step ? 'bg-[#F89826]' : 'bg-[#E8E2D4]'}`} />
        ))}
      </div>
    </div>
  );
}

interface Props {
  id: LegacyId;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function MihrabBookLegacy({ id, nav, t, backLabel, locale }: Props) {
  const title =
    id === 'book-services' ? t('book.services.title') : id === 'book-slots' ? t('book.slots.title') : t('book.discount.title');

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={title} onBack={nav.back} backLabel={backLabel} />
      <LegacyStepper id={id} locale={locale} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-3 min-h-0">
        {id === 'book-services' &&
          MOCK_SERVICES.map((svc) => (
            <label key={svc.id} className="mihrab-card flex items-center gap-3 px-4 py-3.5 bg-white cursor-pointer">
              <input type="checkbox" readOnly checked={svc.id === 'svc-1'} className="w-5 h-5 accent-[#F89826]" />
              <div className="flex-1 min-w-0">
                <p className="type-body font-semibold">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                <p className="type-caption text-[#7A7A7A] ltr-isolate">{svc.durationMinutes} min</p>
              </div>
              <span className="type-body font-semibold ltr-isolate shrink-0">₪{svc.priceIls}</span>
            </label>
          ))}

        {id === 'book-slots' && (
          <>
            <div className="mihrab-card p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#1E4988]" aria-hidden />
                <span className="type-body font-semibold ltr-isolate">29 Aug 2026</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center type-caption text-[#7A7A7A] mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }, (_, i) => (
                  <span
                    key={i}
                    className={`py-1.5 rounded-[6px] type-caption ltr-isolate ${i + 1 === 29 ? 'bg-[#F89826] text-white font-bold' : 'text-[#343434]'}`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {MOCK_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={nav.next}
                  className={`min-h-[44px] px-4 py-2 rounded-[10px] type-body-sm font-semibold ltr-isolate cursor-pointer touch-manipulation ${
                    slot === '10:00' ? 'bg-[#F89826] text-white' : 'bg-white border border-[#E8E2D4]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </>
        )}

        {id === 'book-discount' && (
          <>
            <div className="mihrab-card p-4 bg-white space-y-2">
              <DocField label={t('book.discount.placeholder')} variant="v2">
                <input readOnly value="WELCOME10" className={`${inputMihrab} ltr-isolate uppercase`} />
              </DocField>
              <p className="type-body-sm text-[#187A28] font-semibold">{t('book.discount.applied')}</p>
            </div>
            <div className="mihrab-card p-4 bg-white space-y-2 type-body-sm">
              <div className="flex justify-between text-[#5A5A5A]">
                <span>Subtotal</span>
                <span className="ltr-isolate">₪120</span>
              </div>
              <div className="flex justify-between text-[#F89826]">
                <span>Discount</span>
                <span className="ltr-isolate">-₪12</span>
              </div>
              <div className="flex justify-between type-h4 pt-2 border-t border-[#E8E2D4]">
                <span>Total</span>
                <span className="ltr-isolate">₪108</span>
              </div>
            </div>
          </>
        )}
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={btnPrimaryMihrab}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
