import React from 'react';
import { MOCK_EMPLOYEES, MOCK_SERVICES } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MOCK_MEDIA } from '../../mockMedia';
import { btnPrimarySouq, SouqScreenHeader, StickyFooter } from '../ui';

const noop = () => {};

type VenSectionId = 'ven-staff' | 'ven-services' | 'ven-discounts' | 'ven-addons' | 'ven-branding';

interface Props {
  id: VenSectionId;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function SouqVenSection({ id, nav, t, backLabel, locale }: Props) {
  const title = id.replace('ven-', '').replace(/^\w/, (c) => c.toUpperCase());
  const showFooter = id !== 'ven-services';

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={title} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 p-4 space-y-3 overflow-y-auto no-scrollbar min-h-0">
        {id === 'ven-staff' &&
          MOCK_EMPLOYEES.map((emp, i) => (
            <div key={emp.id} className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 shadow-ds-card bg-white">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${MOCK_MEDIA.staffAvatars[i]})` }}
                role="img"
                aria-label={emp.fullName}
              />
              <div className="min-w-0">
                <p className="font-semibold text-[#343434]">{emp.fullName}</p>
                <p className="text-sm text-[#7A7A7A]">{locale === 'ar' ? emp.specialtyAr : emp.specialtyEn}</p>
              </div>
            </div>
          ))}

        {id === 'ven-services' &&
          MOCK_SERVICES.map((svc, i) => (
            <div key={svc.id} className="flex gap-3 p-3 rounded-2xl border border-gray-200 shadow-ds-card bg-white">
              <div
                className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${MOCK_MEDIA.serviceThumbs[i]})` }}
                role="img"
                aria-hidden
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#343434]">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                <p className="text-sm text-[#7A7A7A] ltr-isolate">
                  {svc.durationMinutes} min · ₪{svc.priceIls}
                </p>
              </div>
            </div>
          ))}

        {(id === 'ven-discounts' || id === 'ven-addons' || id === 'ven-branding') && (
          <div className="rounded-2xl border border-gray-200 p-4 shadow-ds-card bg-white">
            <p className="text-[#5A5A5A] text-sm leading-relaxed">{t('ven.section.hint')}</p>
          </div>
        )}
      </div>

      {showFooter && (
        <StickyFooter variant="v1">
          <button type="button" onClick={noop} className={btnPrimarySouq}>
            {id === 'ven-staff' ? t('ven.staff.add') : t('action.save')}
          </button>
        </StickyFooter>
      )}
    </div>
  );
}
