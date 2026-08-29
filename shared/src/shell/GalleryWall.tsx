import React from 'react';
import type { ScreenMeta, ScreenState } from '../types';
import { ROLE_LABELS, ROLE_ORDER } from '../registry';
import { DeviceFrame, type FrameScreenBg } from './DeviceFrame';
import { TabletFrame } from './TabletFrame';
import { useLanguage } from '../i18n';

export type ViewMode = 'gallery' | 'device';

interface GalleryWallProps {
  screens: ScreenMeta[];
  renderScreen: (meta: ScreenMeta, state: ScreenState) => React.ReactNode;
  screenState: ScreenState;
  groupFilter?: 'A' | 'all';
  screenBg?: FrameScreenBg;
}

export function GalleryWall({
  screens,
  renderScreen,
  screenState,
  groupFilter = 'all',
  screenBg = 'white',
}: GalleryWallProps) {
  const { locale, t } = useLanguage();

  const filtered =
    groupFilter === 'all' ? screens : screens.filter((s) => s.group === groupFilter);

  const byRole = ROLE_ORDER.map((role) => ({
    role,
    label: ROLE_LABELS[role][locale],
    items: filtered.filter((s) => s.role === role),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="space-y-10 p-4 pb-16">
      {byRole.map(({ role, label, items }) => (
        <section key={role}>
          <h2 className="type-h2 text-ink-primary mb-4 sticky top-0 bg-bg-default/95 py-2 z-10">
            {label}
            <span className="type-caption text-ink-muted ms-2">({items.length})</span>
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {items.map((meta) => {
              const title = locale === 'ar' ? meta.titleAr : meta.titleEn;
              const Frame = meta.frame === 'tablet' ? TabletFrame : DeviceFrame;
              return (
                <Frame key={meta.id} label={meta.docId ?? meta.id} compact screenBg={screenBg} screenId={meta.id}>
                  <div className="h-full w-full overflow-hidden">{renderScreen(meta, screenState)}</div>
                </Frame>
              );
            })}
          </div>
        </section>
      ))}
      {filtered.length === 0 && (
        <p className="text-center text-ink-muted type-body">{t('state.empty')}</p>
      )}
    </div>
  );
}

interface ScreenPickerProps {
  screens: ScreenMeta[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ScreenPicker({ screens, selectedId, onSelect }: ScreenPickerProps) {
  const { locale } = useLanguage();

  return (
    <select
      value={selectedId}
      onChange={(e) => onSelect(e.target.value)}
      className="type-body-sm px-3 py-2 rounded-lg border border-edge-default bg-bg-surface text-ink-primary max-w-[240px]"
      aria-label="Select screen"
    >
      {screens.map((s) => (
        <option key={s.id} value={s.id}>
          {s.docId ? `${s.docId} — ` : ''}
          {locale === 'ar' ? s.titleAr : s.titleEn}
        </option>
      ))}
    </select>
  );
}
