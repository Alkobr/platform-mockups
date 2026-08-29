import React from 'react';
import { PhoneStatusBar } from './PhoneStatusBar';

/** @deprecated Use PhoneStatusBar — kept for TabletFrame compatibility */
export function StatusBar() {
  return <PhoneStatusBar className="sticky top-0" />;
}
