import React from 'react';
import { MOCK_EMPLOYEES, MOCK_SERVICES, MOCK_SLOTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MOCK_MEDIA } from '../../mockMedia';
import { DocAuthProgress } from '../DocAuthProgress';
import { btnPrimarySouq, SouqBackButton, StickyFooter } from '../ui';

const BOOKING_DATES = ['Thu 28', 'Fri 29', 'Sat 30', 'Sun 31', 'Mon 1'];

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function SouqBookFlow({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <header className="shrink-0 px-4 pt-4 pb-2 border-b border-gray-100">
        <SouqBackButton onClick={nav.back} label={backLabel} />
        <h1 className="font-heading font-extrabold text-xl text-[#1E4988] mt-3">{t('book.flow.title')}</h1>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-6 min-h-0">
        <DocAuthProgress step={1} variant="v1" stepLabel={t('book.flow.stepChoose')} />

        <section aria-labelledby="souq-book-staff">
          <h2 id="souq-book-staff" className="font-heading font-bold text-sm text-[#343434] mb-3">
            {t('book.staff.title')}
          </h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {MOCK_EMPLOYEES.map((emp, i) => (
              <button
                key={emp.id}
                type="button"
                className="shrink-0 flex flex-col items-center gap-2 w-[4.5rem] cursor-pointer touch-manipulation"
              >
                <div
                  className={`w-[4.25rem] h-[4.25rem] rounded-full bg-cover bg-center border-[3px] ${
                    i === 0 ? 'border-[#1E4988]' : 'border-gray-200 opacity-75'
                  }`}
                  style={{ backgroundImage: `url(${MOCK_MEDIA.staffAvatars[i]})` }}
                />
                <p className="text-[11px] font-semibold text-center leading-tight">{emp.fullName.split(' ')[0]}</p>
              </button>
            ))}
          </div>
        </section>

        <section aria-labelledby="souq-book-service">
          <h2 id="souq-book-service" className="font-heading font-bold text-sm text-[#343434] mb-3">
            {t('book.services.title')}
          </h2>
          <div className="space-y-2">
            {MOCK_SERVICES.slice(0, 3).map((svc, i) => (
              <button
                key={svc.id}
                type="button"
                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-start cursor-pointer touch-manipulation ${
                  i === 0 ? 'border-[#1E4988] bg-[#F0F4FA] ring-1 ring-[#1E4988]/20' : 'border-gray-200 bg-white'
                }`}
              >
                <div
                  className="w-14 h-14 rounded-lg bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url(${MOCK_MEDIA.serviceThumbs[i]})` }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                  <p className="text-xs text-[#7A7A7A] ltr-isolate">{svc.durationMinutes} min</p>
                </div>
                <span className="text-[#1E4988] font-bold text-sm ltr-isolate shrink-0">₪{svc.priceIls}</span>
              </button>
            ))}
          </div>
        </section>

        <section aria-labelledby="souq-book-time">
          <h2 id="souq-book-time" className="font-heading font-bold text-sm text-[#343434] mb-3">
            {t('book.slots.title')}
          </h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {BOOKING_DATES.map((d, i) => (
              <button
                key={d}
                type="button"
                className={`shrink-0 px-3.5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer touch-manipulation ${
                  i === 1 ? 'bg-[#1E4988] text-white shadow-ds-button-primary' : 'bg-[#F8F9FA] border border-gray-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {MOCK_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`py-2.5 rounded-xl text-sm font-semibold ltr-isolate cursor-pointer touch-manipulation ${
                  slot === '10:00' ? 'bg-[#1E4988] text-white' : 'bg-[#F8F9FA] border border-gray-200'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </section>
      </div>

      <StickyFooter variant="v1">
        <button type="button" onClick={nav.next} className={btnPrimarySouq}>
          {t('action.continue')}
        </button>
      </StickyFooter>
    </div>
  );
}
