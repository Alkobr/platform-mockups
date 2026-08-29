import React from 'react';
import type { ScreenMeta, ScreenState } from '@shared/types';
import { PhoneChrome } from '@shared/shell';
import { useLanguage } from '@shared/i18n';
import { useNav } from '@shared/navigation/NavContext';
import { DocScreen } from './doc/DocScreens';

function StateWrapper({
  state,
  children,
}: {
  state: ScreenState;
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  if (state === 'loading') {
    return (
      <div className="h-full bg-white flex flex-col items-center justify-center gap-3 p-6">
        <div className="w-10 h-10 border-3 border-[#1E4988] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#5A5A5A]">{t('state.loading')}</p>
      </div>
    );
  }
  if (state === 'empty') {
    return (
      <div className="h-full bg-white flex flex-col items-center justify-center p-6 text-center">
        <p className="font-heading font-bold text-lg text-[#343434]">{t('state.empty')}</p>
      </div>
    );
  }
  if (state === 'error') {
    return (
      <div className="h-full bg-white flex flex-col items-center justify-center p-6 text-center gap-3">
        <p className="font-heading font-bold text-lg text-[#F84A26]">{t('state.error')}</p>
        <p className="text-sm text-[#5A5A5A]">{t('state.errorHint')}</p>
      </div>
    );
  }
  return <>{children}</>;
}

function ScreenContent({ meta }: { meta: ScreenMeta }) {
  const { navigate } = useNav();
  const content = <DocScreen id={meta.id} onNavigate={navigate} />;

  if (meta.frame === 'tablet') {
    return <div className="h-full overflow-y-auto">{content}</div>;
  }

  return (
    <PhoneChrome meta={meta} className="bg-white text-[#343434]">
      <div className="relative h-full min-h-0 flex flex-col overflow-hidden overflow-y-auto">{content}</div>
    </PhoneChrome>
  );
}

interface ScreenRendererProps {
  meta: ScreenMeta;
  state: ScreenState;
}

export function ScreenRenderer({ meta, state }: ScreenRendererProps) {
  return (
    <StateWrapper state={state}>
      <ScreenContent meta={meta} />
    </StateWrapper>
  );
}
