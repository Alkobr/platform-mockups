import type { MockVariant } from '../types';
import type { DocScreenProps } from './docTypes';
import { MihrabDocScreen } from './screens/MihrabDocScreen';
import { SouqDocScreen } from './screens/SouqDocScreen';

export type { DocLogoContext, RenderDocLogo } from './docTypes';

export function SharedDocScreen({
  variant = 'v1',
  ...props
}: DocScreenProps & { variant?: MockVariant }) {
  if (variant === 'v2') {
    return <MihrabDocScreen {...props} />;
  }
  return <SouqDocScreen {...props} />;
}
