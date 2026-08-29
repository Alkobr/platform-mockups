import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { MOCK_APPOINTMENTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MihrabHeaderBar } from '../ui';

const MANAGE_KEYS = ['staff', 'services', 'discounts', 'addons', 'branding'] as const;

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function MihrabVenDash({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={t('ven.dash.today')} onBack={() => nav.go('auth-welcome')} backLabel={backLabel} />

      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar shrink-0">
        {[
          { label: t('ven.dash.appointments'), value: '8' },
          { label: 'Staff', value: '3' },
          { label: 'Revenue', value: '₪2,840' },
          { label: 'Pending', value: '2' },
        ].map((m) => (
          <div key={m.label} className="mihrab-card shrink-0 px-4 py-2.5 bg-white min-w-[88px]">
            <p className="type-h4 text-[#1E4988] ltr-isolate">{m.value}</p>
            <p className="type-caption text-[#7A7A7A] whitespace-nowrap">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4 space-y-2 min-h-0">
        <p className="type-label text-[#5A5A5A] py-1">{t('ven.dash.appointments')}</p>
        {MOCK_APPOINTMENTS.slice(0, 2).map((apt) => (
          <div key={apt.id} className="mihrab-card flex items-center gap-3 px-4 py-3 bg-white">
            <Calendar className="w-5 h-5 text-[#F89826] shrink-0" aria-hidden />
            <div className="flex-1 min-w-0">
              <p className="type-body font-semibold truncate">{apt.customerName}</p>
              <p className="type-caption text-[#7A7A7A]">{locale === 'ar' ? apt.serviceNameAr : apt.serviceNameEn}</p>
            </div>
          </div>
        ))}

        <p className="type-label text-[#5A5A5A] pt-3 pb-1">{t('ven.dash.manage')}</p>
        <div className="mihrab-card divide-y divide-[#E8E2D4] overflow-hidden">
          {MANAGE_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => nav.action(key)}
              className="w-full flex items-center justify-between px-4 py-3.5 min-h-[48px] bg-white text-start capitalize type-body-sm font-semibold text-[#1E4988] cursor-pointer touch-manipulation hover:bg-[#FFF8EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F89826]"
            >
              {key}
              <ChevronRight className="w-4 h-4 text-[#7A7A7A]" aria-hidden />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
