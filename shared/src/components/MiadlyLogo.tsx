import React from 'react';

export function MiadlyLogo({ size = 'md', bilingual = true }: { size?: 'sm' | 'md'; bilingual?: boolean }) {
  const text = size === 'sm' ? 'type-h4' : 'type-h2';
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`${size === 'sm' ? 'w-10 h-10' : 'w-14 h-14'} rounded-xl bg-brand-primary flex items-center justify-center`}>
        <span className="text-ink-inverse font-bold text-lg">M</span>
      </div>
      {bilingual ? (
        <>
          <span className={`${text} text-brand-primary font-bold`}>Miadly</span>
          <span className="type-caption text-ink-muted">ميادلي</span>
        </>
      ) : (
        <span className={`${text} text-brand-primary font-bold`}>Miadly</span>
      )}
    </div>
  );
}

export function MiadlySymbol({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <div className={`${className} rounded-2xl bg-brand-primary flex items-center justify-center`}>
      <span className="text-ink-inverse text-2xl font-bold">M</span>
    </div>
  );
}
