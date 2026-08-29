import React from 'react';
import { SharedDocScreen } from '@shared/doc/DocScreen';
import { MiadlyLogo } from '../../components/MiadlyLogo';

export function DocScreen({
  id,
  variant = 'v2',
  onNavigate,
}: {
  id: string;
  variant?: 'v1' | 'v2';
  onNavigate?: (targetId: string) => void;
}) {
  return (
    <SharedDocScreen
      id={id}
      variant={variant}
      onNavigate={onNavigate}
      renderLogo={(context) =>
        context === 'welcome' ? (
          <MiadlyLogo layout="vertical" language="bilingual" size="lg" />
        ) : (
          <MiadlyLogo layout="vertical" language="bilingual" size="md" className="mx-auto mb-4" />
        )
      }
    />
  );
}
