import type { PhoneStatusBarVariant } from './PhoneStatusBar';

const OVERLAY_STATUS_BAR_IDS = new Set(['book-storefront']);

export function getPhoneStatusBarVariant(screenId: string): PhoneStatusBarVariant {
  if (OVERLAY_STATUS_BAR_IDS.has(screenId)) return 'overlay';
  return 'light';
}

export function isOverlayStatusBarScreen(screenId: string): boolean {
  return OVERLAY_STATUS_BAR_IDS.has(screenId);
}
