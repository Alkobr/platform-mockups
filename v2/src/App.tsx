import React, { useCallback, useState } from 'react';
import { LanguageProvider, useLanguage } from '@shared/i18n';
import { VariantProvider } from '@shared/VariantContext';
import { NavProvider } from '@shared/navigation/NavContext';
import { SCREEN_REGISTRY } from '@shared/registry';
import type { ScreenMeta, ScreenState } from '@shared/types';
import { DeviceFrame, GalleryWall, ScreenPicker, TabletFrame, type ViewMode } from '@shared/shell';
import { ScreenRenderer } from './screens/ScreenRenderer';

function MockApp() {
  const { locale, toggleLocale, t } = useLanguage();
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [selectedId, setSelectedId] = useState('auth-welcome');
  const [screenState, setScreenState] = useState<ScreenState>('default');

  const selected = SCREEN_REGISTRY.find((s) => s.id === selectedId) ?? SCREEN_REGISTRY[0];

  const handleNavigate = useCallback(
    (id: string) => {
      setSelectedId(id);
      setViewMode('device');
    },
    []
  );

  const renderScreen = (meta: ScreenMeta, state: ScreenState) => (
    <NavProvider screenId={meta.id} navigate={handleNavigate}>
      <ScreenRenderer meta={meta} state={state} />
    </NavProvider>
  );

  return (
    <div className="min-h-screen bg-bg-default">
      <header className="sticky top-0 z-50 bg-bg-surface border-b border-edge-default px-4 py-3 flex flex-wrap items-center gap-3">
        <h1 className="type-h3 text-brand-primary">{t('app.name')} — Mihrab v2</h1>
        <div className="flex flex-wrap gap-2 ms-auto items-center">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'gallery' ? 'device' : 'gallery')}
            className="type-body-sm px-3 py-2 rounded-lg border border-edge-default bg-bg-surface"
          >
            {viewMode === 'gallery' ? t('gallery.modeDevice') : t('gallery.modeGallery')}
          </button>
          <select
            value={screenState}
            onChange={(e) => setScreenState(e.target.value as ScreenState)}
            className="type-body-sm px-2 py-2 rounded-lg border border-edge-default"
          >
            <option value="default">Default</option>
            <option value="loading">Loading</option>
            <option value="empty">Empty</option>
            <option value="error">Error</option>
          </select>
          <button
            type="button"
            onClick={toggleLocale}
            className="type-body-sm px-3 py-2 rounded-lg bg-brand-primary text-ink-inverse min-h-[44px]"
          >
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </header>

      {viewMode === 'gallery' ? (
        <GalleryWall
          screens={SCREEN_REGISTRY}
          renderScreen={renderScreen}
          screenState={screenState}
          screenBg="white"
        />
      ) : (
        <div className="p-6 flex flex-col items-center gap-4">
          <ScreenPicker screens={SCREEN_REGISTRY} selectedId={selectedId} onSelect={setSelectedId} />
          {selected.frame === 'tablet' ? (
            <TabletFrame label={selected.docId ?? selected.id}>
              {renderScreen(selected, screenState)}
            </TabletFrame>
          ) : (
            <DeviceFrame label={selected.docId ?? selected.id} screenBg="white" screenId={selected.id}>
              {renderScreen(selected, screenState)}
            </DeviceFrame>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <VariantProvider variant="v2">
        <MockApp />
      </VariantProvider>
    </LanguageProvider>
  );
}
