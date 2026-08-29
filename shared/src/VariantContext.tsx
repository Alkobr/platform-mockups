import React, { createContext, useContext } from 'react';
import type { MockVariant } from './types';

const VariantContext = createContext<MockVariant>('v2');

export function VariantProvider({ variant, children }: { variant: MockVariant; children: React.ReactNode }) {
  return <VariantContext.Provider value={variant}>{children}</VariantContext.Provider>;
}

export function useVariant(): MockVariant {
  return useContext(VariantContext);
}
