import React from 'react';
import { SharedDocScreen } from '@shared/doc/DocScreen';
import { MiadlyLogo } from '../../components/common/MiadlyLogo';

export function DocScreen({ id, onNavigate }: { id: string; onNavigate?: (targetId: string) => void }) {
  return (
    <SharedDocScreen
      id={id}
      variant="v1"
      onNavigate={onNavigate}
      renderLogo={(context) =>
        context === 'welcome' ? (
          <MiadlyLogo variant="bilingual" size="lg" />
        ) : (
          <MiadlyLogo variant="primary" size="md" className="mx-auto mb-4" />
        )
      }
    />
  );
}
