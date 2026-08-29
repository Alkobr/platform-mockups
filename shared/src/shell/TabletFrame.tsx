import React from 'react';
import { StatusBar } from './StatusBar';

interface TabletFrameProps {
  children: React.ReactNode;
  label?: string;
  compact?: boolean;
}

export function TabletFrame({ children, label, compact }: TabletFrameProps) {
  const w = compact ? 'w-[280px] h-[200px]' : 'w-full max-w-[900px] h-[560px] max-h-[70vh]';

  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <span className="text-[10px] font-semibold text-ink-muted text-center max-w-[280px] truncate">
          {label}
        </span>
      )}
      <div
        className={`${w} bg-bg-surface rounded-xl border border-edge-default overflow-hidden shadow-md flex flex-col`}
      >
        {!compact && <StatusBar />}
        <div className="flex-1 overflow-hidden relative bg-bg-default">{children}</div>
      </div>
    </div>
  );
}
