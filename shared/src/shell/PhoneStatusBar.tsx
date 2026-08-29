import React from 'react';

export type PhoneStatusBarVariant = 'light' | 'dark' | 'overlay';

interface PhoneStatusBarProps {
  variant?: PhoneStatusBarVariant;
  time?: string;
  className?: string;
  /** Match the phone frame interior — avoids a visible colour band under the status bar. */
  surface?: 'white' | 'cream';
}

function WifiIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 12" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <path d="M8 10.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" fill={color} />
      <path d="M4.8 7.1a4.8 4.8 0 0 1 6.4 0" stroke={color} strokeWidth="1.35" strokeLinecap="round" />
      <path d="M1.8 4.2a8.8 8.8 0 0 1 12.4 0" stroke={color} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function DynamicIslandPill() {
  return (
    <div
      style={{
        width: 112,
        height: 26,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 9999,
        backgroundColor: '#000',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#0B0F19',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#1B2234' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#059669',
            boxShadow: '0 0 4px #059669',
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#080D1A',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'linear-gradient(to top right, #1E3A8A, rgba(59,130,246,0.7))',
            }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * iOS status bar — 3-column grid keeps time, island, and icons on one row always.
 */
export function PhoneStatusBar({
  variant = 'light',
  time = '9:41',
  className = '',
  surface = 'white',
}: PhoneStatusBarProps) {
  const isDarkHero = variant === 'overlay' || variant === 'dark';
  const ink = isDarkHero ? '#FFFFFF' : '#2D3139';
  const bg = isDarkHero
    ? 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.25), transparent)'
    : surface === 'cream'
      ? 'linear-gradient(to bottom, rgba(255,244,222,0.96), rgba(255,244,222,0.75), transparent)'
      : 'linear-gradient(to bottom, rgba(255,255,255,0.96), rgba(255,255,255,0.75), transparent)';

  return (
    <div
      dir="ltr"
      aria-hidden
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: '76px 1fr 98px',
        alignItems: 'center',
        width: '100%',
        height: 44,
        minHeight: 44,
        paddingLeft: 20,
        paddingRight: 20,
        boxSizing: 'border-box',
        background: bg,
        backdropFilter: isDarkHero ? undefined : 'blur(2px)',
        color: ink,
        userSelect: 'none',
        overflow: 'hidden',
        filter: isDarkHero ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.6))' : undefined,
      }}
    >
      {/* Col 1 — time (never wraps) */}
      <span
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: 13,
          fontWeight: 600,
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {time}
      </span>

      {/* Col 2 — Dynamic Island centered */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <DynamicIslandPill />
      </div>

      {/* Col 3 — indicators */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 5,
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 12, flexShrink: 0 }}>
          {[3.5, 5.5, 8, 10.5].map((h) => (
            <div
              key={h}
              style={{ width: 3, height: h, borderRadius: 1, backgroundColor: ink, flexShrink: 0 }}
            />
          ))}
        </div>
        <span style={{ fontSize: 9, fontWeight: 800, lineHeight: 1, flexShrink: 0 }}>5G</span>
        <WifiIcon color={ink} />
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div
            style={{
              width: 20,
              height: 11,
              border: `1.5px solid ${ink}`,
              borderRadius: 3,
              padding: 1.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ height: '100%', width: '88%', borderRadius: 1.5, backgroundColor: '#34C759' }} />
          </div>
          <div
            style={{
              width: 1.5,
              height: 4,
              marginLeft: -0.5,
              borderRadius: '0 1px 1px 0',
              backgroundColor: ink,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const PHONE_STATUS_BAR_HEIGHT_CLASS = 'h-11';
export const PHONE_STATUS_BAR_COMPACT_SCALE = 280 / 390;
