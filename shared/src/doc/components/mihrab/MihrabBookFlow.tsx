import React from 'react';
import { Check, Circle } from 'lucide-react';
import { MOCK_EMPLOYEES, MOCK_SERVICES, MOCK_SLOTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { DocAuthProgress } from '../DocAuthProgress';
import { btnPrimaryMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

const BOOKING_DATES = ['Thu 28', 'Fri 29', 'Sat 30', 'Sun 31', 'Mon 1'];

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function MihrabBookFlow({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('book.flow.title')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-5 min-h-0">
        <DocAuthProgress step={1} variant="v2" stepLabel={t('book.flow.stepChoose')} />

        <section aria-labelledby="mihrab-book-staff">
          <h2 id="mihrab-book-staff" className="type-label mb-2">
            {t('book.staff.title')}
          </h2>
          <div className="space-y-2">
            {MOCK_EMPLOYEES.map((emp, i) => (
              <button
                key={emp.id}
                type="button"
                className={`w-full mihrab-card flex items-center gap-3 px-4 py-3 text-start bg-white cursor-pointer touch-manipulation ${
                  i === 0 ? 'ring-2 ring-[#F89826]' : ''
                }`}
              >
                {i === 0 ? (
                  <Check className="w-5 h-5 text-[#F89826] shrink-0" aria-hidden />
                ) : (
                  <Circle className="w-5 h-5 text-[#E8E2D4] shrink-0" aria-hidden />
                )}
                <div className="flex-1 min-w-0">
                  <p className="type-body font-semibold">{emp.fullName}</p>
                  <p className="type-caption text-[#7A7A7A]">{locale === 'ar' ? emp.specialtyAr : emp.specialtyEn}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section aria-labelledby="mihrab-book-service">
          <h2 id="mihrab-book-service" className="type-label mb-2">
            {t('book.services.title')}
          </h2>
          <div className="space-y-2">
            {MOCK_SERVICES.slice(0, 3).map((svc) => (
              <label
                key={svc.id}
                className="mihrab-card flex items-center gap-3 px-4 py-3 bg-white cursor-pointer"
              >
                <input type="radio" readOnly checked={svc.id === 'svc-1'} className="w-5 h-5 accent-[#F89826]" />
                <div className="flex-1 min-w-0">
                  <p className="type-body font-semibold">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                  <p className="type-caption text-[#7A7A7A] ltr-isolate">{svc.durationMinutes} min</p>
                </div>
                <span className="type-body font-semibold ltr-isolate shrink-0">₪{svc.priceIls}</span>
              </label>
            ))}
          </div>
        </section>

        <section aria-labelledby="mihrab-book-time">
          <h2 id="mihrab-book-time" className="type-label mb-2">
            {t('book.slots.title')}
          </h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {BOOKING_DATES.map((d, i) => (
              <button
                key={d}
                type="button"
                className={`shrink-0 px-3 py-2 rounded-[10px] type-body-sm font-semibold cursor-pointer touch-manipulation ${
                  i === 1 ? 'bg-[#F89826] text-white' : 'bg-white border border-[#E8E2D4]'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {MOCK_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`px-4 py-2 rounded-[10px] type-body-sm font-semibold ltr-isolate cursor-pointer touch-manipulation ${
                  slot === '10:00' ? 'bg-[#F89826] text-white' : 'bg-white border border-[#E8E2D4]'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </section>
      </div>

      <StickyFooter variant="v2">
        <button type="button" onClick={nav.next} className={btnPrimaryMihrab}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
