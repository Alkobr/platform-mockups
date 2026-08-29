import React from 'react';
import { useLanguage, type TranslationKey } from '../../i18n';
import { MOCK_SHOPS } from '../../data';
import { createDocNav } from '../docNav';
import type { DocNav } from '../docNav';
import type { DocScreenProps } from '../docTypes';
import { renderAdminDocScreen } from './AdminDocScreen';
import { DocPhoneFrame } from '../components/BottomNav';
import { SouqAuthOtp } from '../components/souq/SouqAuthOtp';
import { SouqAuthPhone } from '../components/souq/SouqAuthPhone';
import { SouqAuthQr } from '../components/souq/SouqAuthQr';
import { SouqAuthShops } from '../components/souq/SouqAuthShops';
import { SouqAuthWelcome } from '../components/souq/SouqAuthWelcome';
import { SouqBookConfirm } from '../components/souq/SouqBookConfirm';
import { SouqBookFlow } from '../components/souq/SouqBookFlow';
import { SouqBookLegacy } from '../components/souq/SouqBookLegacy';
import { SouqEmpSchedule } from '../components/souq/SouqEmpSchedule';
import { SouqStaffLogin } from '../components/souq/SouqStaffLogin';
import { SouqStorefront } from '../components/souq/SouqStorefront';
import { SouqVenDash } from '../components/souq/SouqVenDash';
import { SouqVenSection } from '../components/souq/SouqVenSection';
import { SouqVendorLogin } from '../components/souq/SouqVendorLogin';

export function SouqDocScreen({ id, renderLogo, onNavigate }: DocScreenProps) {
  const { t, locale } = useLanguage();
  const nav = createDocNav(id, onNavigate);
  const shop = MOCK_SHOPS[0];
  const shopName = locale === 'ar' ? shop.nameAr : shop.nameEn;
  const backLabel = t('nav.back');

  if (id.startsWith('adm-')) {
    return renderAdminDocScreen({ id, variant: 'v1', nav, t, locale });
  }

  return (
    <DocPhoneFrame variant="v1" screenId={id}>
      {renderSouqScreen({ id, renderLogo, nav, t, locale, shop, shopName, backLabel })}
    </DocPhoneFrame>
  );
}

function renderSouqScreen({
  id,
  renderLogo,
  nav,
  t,
  locale,
  shop,
  shopName,
  backLabel,
}: {
  id: string;
  renderLogo: DocScreenProps['renderLogo'];
  nav: DocNav;
  t: (key: TranslationKey) => string;
  locale: string;
  shop: (typeof MOCK_SHOPS)[0];
  shopName: string;
  backLabel: string;
}) {
  switch (id) {
    case 'auth-welcome':
      return <SouqAuthWelcome renderLogo={renderLogo} nav={nav} t={t} locale={locale} />;
    case 'auth-phone':
      return <SouqAuthPhone nav={nav} t={t} backLabel={backLabel} />;
    case 'auth-otp':
      return <SouqAuthOtp nav={nav} t={t} backLabel={backLabel} />;
    case 'auth-shops':
      return <SouqAuthShops nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'auth-qr':
      return <SouqAuthQr nav={nav} t={t} backLabel={backLabel} />;
    case 'book-storefront':
      return (
        <SouqStorefront
          shopName={shopName}
          address={locale === 'ar' ? shop.addressAr : shop.addressEn}
          rating={shop.rating}
          locale={locale}
          bookLabel={t('action.book')}
          servicesTitle={t('book.services.title')}
          nav={nav}
          backLabel={backLabel}
        />
      );
    case 'book-staff':
      return <SouqBookFlow nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'book-services':
    case 'book-slots':
    case 'book-discount':
      return <SouqBookLegacy id={id} nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'book-confirm':
      return <SouqBookConfirm nav={nav} t={t} backLabel={backLabel} locale={locale} shopName={shopName} />;
    case 'auth-vendor-login':
      return <SouqVendorLogin renderLogo={renderLogo} nav={nav} t={t} backLabel={backLabel} />;
    case 'auth-staff-login':
      return <SouqStaffLogin nav={nav} t={t} backLabel={backLabel} />;
    case 'ven-dash':
      return <SouqVenDash nav={nav} t={t} locale={locale} />;
    case 'ven-staff':
    case 'ven-services':
    case 'ven-discounts':
    case 'ven-addons':
    case 'ven-branding':
      return <SouqVenSection id={id} nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'emp-schedule':
      return <SouqEmpSchedule nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    default:
      return (
        <div className="p-4 bg-white h-full">
          <p className="text-[#5A5A5A]">Screen: {id}</p>
        </div>
      );
  }
}
