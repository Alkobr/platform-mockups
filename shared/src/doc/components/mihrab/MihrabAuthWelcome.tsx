import React from 'react';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import type { RenderDocLogo } from '../../docTypes';
import { btnPrimaryMihrab } from '../ui';

interface Props {
  renderLogo: RenderDocLogo;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  locale: string;
}

const linkBtn =
  'min-h-[44px] px-3 type-body-sm font-semibold text-[#1E4988] rounded-lg cursor-pointer touch-manipulation hover:text-[#183A6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988]';

export function MihrabAuthWelcome({ renderLogo, nav, t, locale }: Props) {
  const isAr = locale === 'ar';

  return (
    <div className="relative w-full h-full bg-white flex flex-col px-6 pt-12 pb-8 overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center text-center min-h-0">
        {renderLogo('welcome')}
        <h1 className="type-h2 text-[#343434] tracking-tight mt-6">{t('auth.welcome.title')}</h1>
        <p className="type-body-sm text-[#5A5A5A] mt-2 max-w-xs leading-relaxed">
          {isAr ? 'مواعيدك في الوقت المناسب' : 'Appointments at the right moment'}
        </p>
      </div>

      <div className="shrink-0 max-w-sm mx-auto w-full space-y-4">
        <button
          type="button"
          onClick={() => nav.action('customer')}
          className={`${btnPrimaryMihrab} text-[#343434]`}
        >
          {t('auth.welcome.customer')}
        </button>

        <div className="flex items-center justify-center gap-1">
          <button type="button" onClick={() => nav.action('vendor')} className={linkBtn}>
            {t('auth.welcome.vendor')}
          </button>
          <span className="text-[#7A7A7A]" aria-hidden>
            ·
          </span>
          <button type="button" onClick={() => nav.action('staff')} className={linkBtn}>
            {t('auth.welcome.staff')}
          </button>
        </div>

        <p className="type-caption text-[#7A7A7A] text-center leading-relaxed pt-1">
          {isAr ? 'بالمتابعة، أنت توافق على الشروط والخصوصية' : 'By continuing, you agree to our Terms & Privacy'}
        </p>
      </div>
    </div>
  );
}
