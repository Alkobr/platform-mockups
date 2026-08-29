import React from 'react';
import { useLanguage } from '../../i18n';
import { MOCK_SHOPS } from '../../data';
import { createDocNav } from '../docNav';
import type { DocScreenProps } from '../docTypes';
import { renderAdminDocScreen } from './AdminDocScreen';
import { DocPhoneFrame } from '../components/BottomNav';
import { MihrabAuthOtp } from '../components/mihrab/MihrabAuthOtp';
import { MihrabAuthPhone } from '../components/mihrab/MihrabAuthPhone';
import { MihrabAuthQr } from '../components/mihrab/MihrabAuthQr';
import { MihrabAuthShops } from '../components/mihrab/MihrabAuthShops';
import { MihrabAuthWelcome } from '../components/mihrab/MihrabAuthWelcome';
import { MihrabBookConfirm } from '../components/mihrab/MihrabBookConfirm';
import { MihrabBookFlow } from '../components/mihrab/MihrabBookFlow';
import { MihrabBookLegacy } from '../components/mihrab/MihrabBookLegacy';
import { MihrabEmpSchedule } from '../components/mihrab/MihrabEmpSchedule';
import { MihrabStaffLogin } from '../components/mihrab/MihrabStaffLogin';
import { MihrabStorefront } from '../components/mihrab/MihrabStorefront';
import { MihrabVenDash } from '../components/mihrab/MihrabVenDash';
import { MihrabVenSection } from '../components/mihrab/MihrabVenSection';
import { MihrabVendorLogin } from '../components/mihrab/MihrabVendorLogin';

export function MihrabDocScreen({ id, renderLogo, onNavigate }: DocScreenProps) {
  const { t, locale } = useLanguage();
  const nav = createDocNav(id, onNavigate);
  const shop = MOCK_SHOPS[0];
  const shopName = locale === 'ar' ? shop.nameAr : shop.nameEn;
  const isRTL = locale === 'ar';
  const backLabel = t('nav.back');

  if (id.startsWith('adm-')) {
    return renderAdminDocScreen({ id, variant: 'v2', nav, t, locale });
  }

  return (
    <DocPhoneFrame variant="v2" screenId={id}>
      <MihrabDocScreenInner
        id={id}
        renderLogo={renderLogo}
        nav={nav}
        t={t}
        locale={locale}
        isRTL={isRTL}
        shop={shop}
        shopName={shopName}
        backLabel={backLabel}
      />
    </DocPhoneFrame>
  );
}

function MihrabDocScreenInner({
  id,
  renderLogo,
  nav,
  t,
  locale,
  isRTL,
  shop,
  shopName,
  backLabel,
}: {
  id: string;
  renderLogo: DocScreenProps['renderLogo'];
  nav: ReturnType<typeof createDocNav>;
  t: ReturnType<typeof useLanguage>['t'];
  locale: string;
  isRTL: boolean;
  shop: (typeof MOCK_SHOPS)[0];
  shopName: string;
  backLabel: string;
}) {
  switch (id) {
    case 'auth-welcome':
      return <MihrabAuthWelcome renderLogo={renderLogo} nav={nav} t={t} locale={locale} />;
    case 'auth-phone':
      return <MihrabAuthPhone nav={nav} t={t} backLabel={backLabel} />;
    case 'auth-otp':
      return <MihrabAuthOtp nav={nav} t={t} backLabel={backLabel} />;
    case 'auth-shops':
      return <MihrabAuthShops nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'auth-qr':
      return <MihrabAuthQr nav={nav} t={t} backLabel={backLabel} />;
    case 'book-storefront':
      return (
        <MihrabStorefront
          shopName={shopName}
          address={locale === 'ar' ? shop.addressAr : shop.addressEn}
          rating={shop.rating}
          locale={locale}
          isRTL={isRTL}
          detailsLabel={locale === 'ar' ? 'التفاصيل' : 'Details'}
          bookLabel={t('action.book')}
          tabOverview={locale === 'ar' ? 'نظرة عامة' : 'Overview'}
          tabServices={t('book.services.title')}
          openLabel={locale === 'ar' ? 'مفتوح' : 'Open'}
          nav={nav}
          onBack={nav.back}
          backLabel={backLabel}
        />
      );
    case 'book-staff':
      return <MihrabBookFlow nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'book-confirm':
      return <MihrabBookConfirm nav={nav} t={t} backLabel={backLabel} locale={locale} shopName={shopName} />;
    case 'book-services':
    case 'book-slots':
    case 'book-discount':
      return <MihrabBookLegacy id={id} nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'auth-vendor-login':
      return <MihrabVendorLogin renderLogo={renderLogo} nav={nav} t={t} backLabel={backLabel} />;
    case 'auth-staff-login':
      return <MihrabStaffLogin nav={nav} t={t} backLabel={backLabel} />;
    case 'ven-dash':
      return <MihrabVenDash nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'ven-staff':
    case 'ven-services':
    case 'ven-discounts':
    case 'ven-addons':
    case 'ven-branding':
      return <MihrabVenSection id={id} nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    case 'emp-schedule':
      return <MihrabEmpSchedule nav={nav} t={t} backLabel={backLabel} locale={locale} />;
    default:
      return (
        <div className="p-4 bg-white h-full">
          <p className="type-body-sm text-[#5A5A5A]">Screen: {id}</p>
        </div>
      );
  }
}
