import type React from 'react';

export type DocLogoContext = 'welcome' | 'vendor';
export type RenderDocLogo = (context: DocLogoContext) => React.ReactNode;

export interface DocScreenProps {
  id: string;
  renderLogo: RenderDocLogo;
  onNavigate?: (targetId: string) => void;
}
