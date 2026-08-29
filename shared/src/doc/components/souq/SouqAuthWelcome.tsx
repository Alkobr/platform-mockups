import React from 'react';
import { ChevronRight, Store, User, Users } from 'lucide-react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import type { RenderDocLogo } from '../../docTypes';
import { MOCK_MEDIA } from '../../mockMedia';
import { btnPrimarySouq, CoverImage } from '../ui';

interface Props {
  renderLogo: RenderDocLogo;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  locale: string;
}

const roleRow =
  'w-full flex items-center gap-3 min-h-[52px] px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#F8F9FA] text-start transition-colors duration-200 cursor-pointer touch-manipulation hover:border-[#1E4988]/30 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4988]';

export function SouqAuthWelcome({ renderLogo, nav, t, locale }: Props) {
  const isAr = locale === 'ar';

  const secondaryRoles = [
    { key: 'vendor' as const, icon: Store, label: t('auth.welcome.vendor') },
    { key: 'staff' as const, icon: Users, label: t('auth.welcome.staff') },
  ];

  return (
    <div className="flex flex-col h-full min-h-0 bg-white text-[#343434] overflow-hidden">
      <div className="relative h-[36%] min-h-[150px] max-h-[240px] shrink-0">
        <CoverImage
          src={MOCK_MEDIA.welcomeHero}
          alt={isAr ? 'صالون تجميل' : 'Salon interior'}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-white pointer-events-none" />
      </div>

      <div className="flex-1 flex flex-col px-4 -mt-5 pb-6 min-h-0">
        <div className="flex-1 bg-white rounded-2xl border border-[#E8E2D4] shadow-ds-elevated px-5 pt-5 pb-5 flex flex-col min-h-0">
          <div className="flex flex-col items-center text-center shrink-0">
            {renderLogo('welcome')}
            <p className="text-[11px] text-[#7A7A7A] mt-2 font-medium">
              {isAr ? 'مواعيدك في الوقت المناسب' : 'Appointments synchronized at the right moment'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 mb-5 shrink-0">
            {MOCK_MEDIA.shopCovers.map((src, i) => (
              <div
                key={src}
                className={`w-10 h-10 rounded-full border-2 border-white shadow-ds-card overflow-hidden bg-gray-100 ${i > 0 ? '-ms-2' : ''}`}
              >
                <CoverImage src={src} alt="" className="w-full h-full" />
              </div>
            ))}
            <span className="text-[11px] text-[#5A5A5A] font-medium ms-1">
              {isAr ? '+120 صالون موثّق' : '120+ verified salons'}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-xl text-[#1E4988] tracking-tight text-center mb-1 shrink-0">
            {t('auth.welcome.title')}
          </h1>
          <p className="text-xs text-[#5A5A5A] text-center leading-relaxed mb-5 shrink-0">
            {isAr ? 'اختر كيف تريد المتابعة' : 'Choose how you want to continue'}
          </p>

          <div className="mt-auto space-y-3 shrink-0">
            <button
              type="button"
              onClick={() => nav.action('customer')}
              className={`${btnPrimarySouq} flex items-center justify-center gap-2`}
            >
              <User className="w-4 h-4" aria-hidden />
              {t('auth.welcome.customer')}
            </button>

            <div className="relative flex items-center py-0.5">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="px-3 text-[10px] font-semibold text-[#7A7A7A] uppercase tracking-wide">
                {isAr ? 'أو' : 'or'}
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <div className="space-y-2">
              {secondaryRoles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.key}
                    type="button"
                    onClick={() => nav.action(role.key)}
                    className={roleRow}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E8EEF6] text-[#1E4988] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={2.2} aria-hidden />
                    </div>
                    <span className="flex-1 font-heading font-bold text-sm text-[#343434]">{role.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#7A7A7A] shrink-0" aria-hidden />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
