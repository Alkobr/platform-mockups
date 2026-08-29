import React from 'react';
import { Calendar } from 'lucide-react';
import { MOCK_APPOINTMENTS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';

const MANAGE_KEYS = ['staff', 'services', 'discounts', 'addons', 'branding'] as const;

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  locale: string;
}

export function SouqVenDash({ nav, t, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="bg-[#1E4988] text-white px-5 pt-5 pb-8 rounded-b-[28px] shrink-0">
        <p className="text-white/80 text-sm">{t('ven.dash.today')}</p>
        <h1 className="font-heading text-2xl font-bold mt-1">Nour Salon</h1>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { label: t('ven.dash.appointments'), value: '8' },
            { label: 'Staff', value: '3' },
            { label: 'Revenue', value: '₪2.8k' },
            { label: 'Pending', value: '2' },
          ].map((m) => (
            <div key={m.label} className="bg-white/15 rounded-xl p-2 text-center backdrop-blur">
              <p className="font-bold text-lg ltr-isolate">{m.value}</p>
              <p className="text-[10px] text-white/80 mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 -mt-4 space-y-3 pb-4 min-h-0">
        <h2 className="font-heading font-bold pt-3 text-[#343434]">{t('ven.dash.appointments')}</h2>
        {MOCK_APPOINTMENTS.slice(0, 2).map((apt) => (
          <div
            key={apt.id}
            className="rounded-2xl bg-white border border-gray-200 shadow-ds-card p-4 flex gap-3 border-s-4 border-s-[#F89826]"
          >
            <div className="w-11 h-11 rounded-full bg-[#E8EEF6] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#1E4988]" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#343434]">{apt.customerName}</p>
              <p className="text-sm text-[#7A7A7A]">{locale === 'ar' ? apt.serviceNameAr : apt.serviceNameEn}</p>
            </div>
          </div>
        ))}

        <h2 className="font-heading font-bold pt-2 text-[#343434]">{t('ven.dash.manage')}</h2>
        <div className="grid grid-cols-2 gap-2">
          {MANAGE_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => nav.action(key)}
              className="min-h-[48px] py-3 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-[#1E4988] shadow-ds-card capitalize cursor-pointer touch-manipulation hover:border-[#1E4988]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988] transition-colors duration-200"
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
