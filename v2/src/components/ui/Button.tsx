import React from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'destructive';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary text-ink-inverse hover:bg-brand-primary-hover active:bg-brand-primary-active',
  accent: 'bg-brand-accent text-ink-primary hover:bg-brand-accent-hover active:bg-brand-accent-active',
  secondary: 'bg-bg-surface text-ink-primary border border-edge-default hover:bg-bg-subtle',
  ghost: 'bg-transparent text-ink-primary hover:bg-brand-primary-subtle',
  destructive: 'bg-status-error text-ink-inverse hover:opacity-90',
};

export function Button({
  variant = 'primary',
  loading,
  fullWidth,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`type-button min-h-[44px] px-4 py-3 rounded-lg transition-colors duration-[var(--motion-normal)] focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2 disabled:opacity-[0.38] flex items-center justify-center gap-2 ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
