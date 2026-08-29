/**
 * Customer flow navigation — aligned with platform-ai/docs/functional/SCREEN-FLOWS.md
 *
 * **Fast path (mockup default):** fewer taps for gallery/demo.
 *   Welcome → Phone → OTP → Storefront → Book (combined) → Confirm
 *
 * **Full spec screens** (book-services, book-slots, book-discount) remain in the
 * registry for individual gallery review; they are not on the default next chain.
 */

export const DOC_NEXT: Partial<Record<string, string>> = {
  'auth-phone': 'auth-otp',
  'auth-otp': 'book-storefront',
  'auth-qr': 'auth-shops',
  'book-storefront': 'book-staff',
  'book-staff': 'book-confirm',
  'book-services': 'book-slots',
  'book-slots': 'book-confirm',
  'book-discount': 'book-confirm',
  'book-confirm': 'book-storefront',
  'auth-vendor-login': 'ven-dash',
  'auth-staff-login': 'emp-schedule',
  'adm-login': 'adm-dash',
  'adm-onboard': 'adm-vendor',
};

export const DOC_BACK: Partial<Record<string, string>> = {
  'auth-phone': 'auth-welcome',
  'auth-otp': 'auth-phone',
  'auth-shops': 'auth-otp',
  'auth-qr': 'auth-shops',
  'auth-vendor-login': 'auth-welcome',
  'auth-staff-login': 'auth-welcome',
  'book-staff': 'book-storefront',
  'book-services': 'book-staff',
  'book-slots': 'book-services',
  'book-discount': 'book-slots',
  'book-confirm': 'book-staff',
  'ven-staff': 'ven-dash',
  'ven-services': 'ven-dash',
  'ven-discounts': 'ven-dash',
  'ven-addons': 'ven-dash',
  'ven-branding': 'ven-dash',
  'emp-schedule': 'auth-welcome',
  'adm-vendors': 'adm-dash',
  'adm-onboard': 'adm-vendors',
  'adm-vendor': 'adm-vendors',
  'adm-addons': 'adm-dash',
  'adm-audit': 'adm-dash',
};

export const DOC_ACTIONS: Partial<Record<string, Record<string, string>>> = {
  'auth-welcome': {
    customer: 'auth-phone',
    vendor: 'auth-vendor-login',
    staff: 'auth-staff-login',
  },
  'auth-shops': {
    selectShop: 'book-storefront',
    linkShop: 'auth-qr',
  },
  'auth-otp': {
    multiShop: 'auth-shops',
  },
  'book-storefront': {
    switchShop: 'auth-shops',
  },
  'ven-dash': {
    staff: 'ven-staff',
    services: 'ven-services',
    discounts: 'ven-discounts',
    addons: 'ven-addons',
    branding: 'ven-branding',
  },
  'adm-sidebar': {
    dash: 'adm-dash',
    vendors: 'adm-vendors',
    addons: 'adm-addons',
    audit: 'adm-audit',
  },
  'adm-vendors': {
    onboard: 'adm-onboard',
    openVendor: 'adm-vendor',
  },
};

export function docNext(screenId: string): string | undefined {
  return DOC_NEXT[screenId];
}

export function docBack(screenId: string): string | undefined {
  return DOC_BACK[screenId];
}

export function docAction(screenId: string, action: string): string | undefined {
  return DOC_ACTIONS[screenId]?.[action];
}

export const DOC_FLOW_SCREEN_IDS = new Set([
  'auth-welcome',
  'auth-phone',
  'auth-otp',
  'auth-shops',
  'auth-qr',
  'book-storefront',
  'book-staff',
  'book-services',
  'book-slots',
  'book-discount',
  'book-confirm',
  'auth-vendor-login',
  'auth-staff-login',
  'ven-dash',
  'ven-staff',
  'ven-services',
  'ven-discounts',
  'ven-addons',
  'ven-branding',
  'emp-schedule',
  'adm-login',
  'adm-dash',
  'adm-vendors',
  'adm-onboard',
  'adm-vendor',
  'adm-addons',
  'adm-audit',
]);
