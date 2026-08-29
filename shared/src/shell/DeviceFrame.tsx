import React from 'react';
import { PhoneStatusBar, PHONE_STATUS_BAR_COMPACT_SCALE } from './PhoneStatusBar';
import { getPhoneStatusBarVariant } from './statusBarVariant';

export type FrameScreenBg = 'white' | 'cream';

interface DeviceFrameProps {
  children: React.ReactNode;
  label?: string;
  compact?: boolean;
  screenBg?: FrameScreenBg;
  /** Registry screen id — enables fixed iOS status bar overlay */
  screenId?: string;
}

export function DeviceFrame({
  children,
  label,
  compact,
  screenBg = 'white',
  screenId,
}: DeviceFrameProps) {
  const innerBg = screenBg === 'cream' ? 'bg-[#FFF4DE]' : 'bg-white';
  const showStatusBar = Boolean(screenId);
  const scale = compact ? PHONE_STATUS_BAR_COMPACT_SCALE : 1;

  const statusBarOverlay = showStatusBar ? (
    <div
      className="absolute top-0 left-0 z-[100] pointer-events-none"
      dir="ltr"
      style={
        compact
          ? {
              width: `${100 / scale}%`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }
          : { width: '100%' }
      }
    >
      <PhoneStatusBar variant={getPhoneStatusBarVariant(screenId!)} surface={screenBg} />
    </div>
  ) : null;

  const viewport = (
    <div className="flex-1 min-h-0 overflow-hidden relative">
      {statusBarOverlay}
      {children}
    </div>
  );

  if (compact) {
    return (
      <div className="flex flex-col items-center gap-2">
        {label && (
          <span className="text-[10px] font-semibold text-ink-muted text-center max-w-[280px] truncate">
            {label}
          </span>
        )}
        <div
          className={`w-[280px] h-[606px] ${innerBg} rounded-[32px] border-[7px] border-[#121212] overflow-hidden shadow-xl flex flex-col`}
        >
          {viewport}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[390px] h-[820px] max-h-[85vh] bg-[#121212] rounded-[50px] p-[6px] shadow-2xl mx-auto">
      <div className={`w-full h-full ${innerBg} rounded-[42px] overflow-hidden flex flex-col relative`}>
        {viewport}
      </div>
    </div>
  );
}
