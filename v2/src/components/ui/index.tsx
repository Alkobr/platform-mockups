import React from 'react';
import { useVariant } from '@shared/VariantContext';

export { Button } from './Button';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md';
}

export function Card({ children, className = '', padding = 'md' }: CardProps) {
  const variant = useVariant();
  const pad = padding === 'sm' ? 'p-3' : 'p-4';
  const cardClass = variant === 'v1' ? 'souq-card' : 'mihrab-card';
  return <div className={`${cardClass} ${pad} ${className}`}>{children}</div>;
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

export function FormField({ label, children, error }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="type-label text-ink-secondary">{label}</label>
      {children}
      {error && (
        <p className="type-caption text-status-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full min-h-[44px] px-3 rounded-lg border border-edge-default bg-bg-surface type-body text-ink-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
      {...props}
    />
  );
}

interface ChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Chip({ label, selected, disabled, onClick }: ChipProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`min-h-[44px] min-w-[44px] px-3 rounded-lg type-body-sm transition-colors ${
        selected
          ? 'bg-brand-primary text-ink-inverse'
          : disabled
            ? 'bg-bg-subtle text-ink-muted border border-edge-subtle opacity-50'
            : 'bg-bg-surface text-ink-primary border border-edge-default hover:border-brand-primary'
      }`}
    >
      {label}
    </button>
  );
}

type BadgeVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info';

const badgeStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-bg-subtle text-ink-secondary',
  brand: 'bg-brand-primary-subtle text-brand-primary',
  success: 'bg-status-success/30 text-status-success-fg',
  warning: 'bg-brand-accent-subtle text-brand-accent-active',
  danger: 'bg-status-error/15 text-status-error',
  info: 'bg-brand-primary-subtle text-brand-primary',
};

export function StatusBadge({ label, variant = 'neutral' }: { label: string; variant?: BadgeVariant }) {
  return (
    <span className={`type-caption px-2 py-0.5 rounded-full font-semibold ${badgeStyles[variant]}`}>
      {label}
    </span>
  );
}

export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-edge-subtle rounded-lg ${className}`} />;
}

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center gap-2 min-h-[120px]">
      <p className="type-h4 text-ink-primary">{title}</p>
      {description && <p className="type-body-sm text-ink-muted">{description}</p>}
      {action}
    </div>
  );
}

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export function ErrorState({ message, onRetry, retryLabel = 'Retry' }: ErrorStateProps) {
  return (
    <EmptyState
      title={message}
      action={
        onRetry && (
          <button type="button" onClick={onRetry} className="type-button text-brand-primary mt-2">
            {retryLabel}
          </button>
        )
      }
    />
  );
}

export function LockedFeature({ message }: { message: string }) {
  return (
    <Card className="border-brand-accent/40 bg-brand-accent-subtle/50">
      <p className="type-body-sm text-ink-secondary text-center">{message}</p>
    </Card>
  );
}

interface AppBarProps {
  title: string;
  onBack?: () => void;
  backLabel?: string;
}

export function AppBar({ title, onBack, backLabel }: AppBarProps) {
  const variant = useVariant();
  if (variant === 'v1') {
    return (
      <header className="souq-appbar px-4 py-4 shrink-0">
        <h1 className="type-h3 font-bold">{title}</h1>
      </header>
    );
  }
  return (
    <header className="flex items-center gap-3 px-4 py-3 bg-bg-surface border-b border-edge-subtle shrink-0">
      {onBack && (
        <button type="button" onClick={onBack} className="type-body-sm text-brand-primary min-h-[44px] min-w-[44px]">
          {backLabel ?? '←'}
        </button>
      )}
      <h1 className="type-h3 text-ink-primary flex-1 truncate">{title}</h1>
    </header>
  );
}

interface BottomNavProps {
  items: { id: string; label: string; active?: boolean }[];
}

export function BottomNav({ items }: BottomNavProps) {
  return (
    <nav className="flex border-t border-edge-subtle bg-bg-surface shrink-0">
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex-1 flex flex-col items-center justify-center min-h-[56px] type-caption ${
            item.active ? 'text-brand-primary font-semibold' : 'text-ink-muted'
          }`}
        >
          <span className="w-5 h-5 rounded-full bg-current opacity-30 mb-0.5" />
          {item.label}
        </div>
      ))}
    </nav>
  );
}
