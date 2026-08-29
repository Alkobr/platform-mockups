import React from 'react';
import { MOCK_APPOINTMENTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { SouqScreenHeader } from '../ui';

const noop = () => {};

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function SouqEmpSchedule({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={t('emp.schedule.title')} onBack={() => nav.go('auth-welcome')} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 min-h-0">
        {MOCK_APPOINTMENTS.map((apt) => (
          <div key={apt.id} className="rounded-2xl bg-white border border-gray-200 shadow-ds-card overflow-hidden">
            <div className="h-1.5 bg-[#1E4988]" aria-hidden />
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start gap-3">
                <div className="min-w-0">
                  <p className="font-heading font-bold text-[#343434]">{apt.customerName}</p>
                  <p className="text-sm text-[#7A7A7A]">{locale === 'ar' ? apt.serviceNameAr : apt.serviceNameEn}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[#E8EEF6] text-[#1E4988] shrink-0">{apt.status}</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={noop}
                  className="flex-1 min-h-[44px] py-2.5 rounded-xl bg-[#1E4988] text-white text-sm font-semibold cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {t('emp.schedule.confirm')}
                </button>
                <button
                  type="button"
                  onClick={noop}
                  className="flex-1 min-h-[44px] py-2.5 rounded-xl border border-gray-200 text-sm font-semibold bg-white cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988]"
                >
                  {t('emp.schedule.noShow')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
