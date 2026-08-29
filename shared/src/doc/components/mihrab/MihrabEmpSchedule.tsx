import React from 'react';
import { MOCK_APPOINTMENTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MihrabHeaderBar } from '../ui';

const noop = () => {};

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function MihrabEmpSchedule({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('emp.schedule.title')} onBack={() => nav.go('auth-welcome')} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-2 min-h-0">
        {MOCK_APPOINTMENTS.map((apt) => (
          <div key={apt.id} className="mihrab-card bg-white overflow-hidden">
            <div className="px-4 py-3 border-b border-[#E8E2D4] flex justify-between items-center gap-3">
              <div className="min-w-0">
                <p className="type-body font-semibold">{apt.customerName}</p>
                <p className="type-caption text-[#7A7A7A]">{locale === 'ar' ? apt.serviceNameAr : apt.serviceNameEn}</p>
              </div>
              <span className="type-caption px-2 py-0.5 rounded-full bg-[#FEF3E4] text-[#1E4988] font-semibold shrink-0">
                {apt.status}
              </span>
            </div>
            <div className="flex divide-x divide-[#E8E2D4]">
              <button
                type="button"
                onClick={noop}
                className="flex-1 min-h-[44px] py-3 type-body-sm font-semibold text-[#F89826] cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F89826]"
              >
                {t('emp.schedule.confirm')}
              </button>
              <button
                type="button"
                onClick={noop}
                className="flex-1 min-h-[44px] py-3 type-body-sm font-semibold text-[#5A5A5A] cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988]"
              >
                {t('emp.schedule.noShow')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
