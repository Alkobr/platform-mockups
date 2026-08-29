import type { ScreenMeta } from '../types';

/** Auth and admin login — no bottom tab bar (not in Miadly functional spec). */
export const AUTH_FLOW_SCREEN_IDS = new Set([
  'auth-welcome',
  'auth-phone',
  'auth-otp',
  'auth-shops',
  'auth-qr',
  'auth-vendor-login',
  'auth-staff-login',
  'adm-login',
]);

export function isAuthFlowScreen(screenId: string): boolean {
  return AUTH_FLOW_SCREEN_IDS.has(screenId);
}

/** Miadly has no customer tab bar in SCREEN-INVENTORY — doc mockups stay flow-only. */
export function shouldShowPhoneBottomNav(_meta: ScreenMeta): boolean {
  return false;
}
