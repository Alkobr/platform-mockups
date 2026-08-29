import React, { createContext, useContext, useMemo } from 'react';

export interface NavContextValue {
  screenId: string;
  navigate: (screenId: string) => void;
}

const NavContext = createContext<NavContextValue>({
  screenId: 'proto-home',
  navigate: () => {},
});

export function NavProvider({
  screenId,
  navigate,
  children,
}: {
  screenId: string;
  navigate: (screenId: string) => void;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ screenId, navigate }), [screenId, navigate]);
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  return useContext(NavContext);
}
