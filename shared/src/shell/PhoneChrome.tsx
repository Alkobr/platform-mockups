import React from 'react';
import type { ScreenMeta } from '../types';
import { PHONE_STATUS_BAR_HEIGHT_CLASS } from './PhoneStatusBar';
import { isOverlayStatusBarScreen } from './statusBarVariant';

interface PhoneChromeProps {
  meta: ScreenMeta;
  children: React.ReactNode;
  className?: string;
}

/**
 * Layout helper for phone screens.
 * Status bar visuals live on DeviceFrame (absolute overlay).
 * This adds a top spacer on standard screens so content clears the indicators.
 */
export function PhoneChrome({ meta, children, className = '' }: PhoneChromeProps) {
  if (meta.frame !== 'phone') {
    return <>{children}</>;
  }

  const overlay = isOverlayStatusBarScreen(meta.id);

  return (
    <div className={`relative flex flex-col h-full min-h-0 overflow-hidden ${className}`}>
      {!overlay && <div className={`${PHONE_STATUS_BAR_HEIGHT_CLASS} shrink-0`} aria-hidden />}
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">{children}</div>
    </div>
  );
}
