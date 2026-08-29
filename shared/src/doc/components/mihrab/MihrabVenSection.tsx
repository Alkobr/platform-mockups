import React from 'react';
import { Users } from 'lucide-react';
import { MOCK_EMPLOYEES, MOCK_SERVICES } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { btnVendorMihrab, MihrabHeaderBar, StickyFooter } from '../ui';

const noop = () => {};

type VenSectionId = 'ven-staff' | 'ven-services' | 'ven-discounts' | 'ven-addons' | 'ven-branding';

interface Props {
  id: VenSectionId;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function MihrabVenSection({ id, nav, t, backLabel, locale }: Props) {
  const title = id.replace('ven-', '').replace(/^\w/, (c) => c.toUpperCase());
  const showFooter = id !== 'ven-services';

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <MihrabHeaderBar title={title} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-2 min-h-0">
        {id === 'ven-staff' &&
          MOCK_EMPLOYEES.map((emp) => (
            <div key={emp.id} className="mihrab-card flex items-center justify-between px-4 py-3 bg-white">
              <div className="min-w-0">
                <p className="type-body font-semibold">{emp.fullName}</p>
                <p className="type-caption text-[#7A7A7A]">{locale === 'ar' ? emp.specialtyAr : emp.specialtyEn}</p>
              </div>
              <Users className="w-5 h-5 text-[#1E4988] shrink-0" aria-hidden />
            </div>
          ))}

        {id === 'ven-services' &&
          MOCK_SERVICES.map((svc) => (
            <div key={svc.id} className="mihrab-card flex items-center justify-between px-4 py-3 bg-white">
              <div className="min-w-0">
                <p className="type-body font-semibold">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                <p className="type-caption text-[#7A7A7A] ltr-isolate">
                  {svc.durationMinutes} min · ₪{svc.priceIls}
                </p>
              </div>
              <span
                className={`type-caption px-2 py-0.5 rounded-full shrink-0 ${svc.isActive ? 'bg-[#E8FEF0] text-[#187A28]' : 'bg-[#FFF8EC] text-[#7A7A7A]'}`}
              >
                {svc.isActive ? 'Active' : 'Off'}
              </span>
            </div>
          ))}

        {(id === 'ven-discounts' || id === 'ven-addons' || id === 'ven-branding') && (
          <div className="mihrab-card p-4 bg-white">
            <p className="type-body-sm text-[#5A5A5A] leading-relaxed">{t('ven.section.hint')}</p>
          </div>
        )}
      </div>

      {showFooter && (
        <StickyFooter variant="v2">
          <button type="button" onClick={noop} className={btnVendorMihrab}>
            {id === 'ven-staff' ? t('ven.staff.add') : t('action.save')}
          </button>
        </StickyFooter>
      )}
    </div>
  );
}
