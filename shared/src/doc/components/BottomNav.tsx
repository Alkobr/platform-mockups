import React from 'react';
import { Calendar, Compass, Home, MessageSquare, Search, Tag, User } from 'lucide-react';
import { useLanguage } from '../../i18n';
import type { MockVariant } from '../../types';

const CUSTOMER_SCREENS = new Set([
  'book-storefront',
  'book-staff',
  'book-services',
  'book-slots',
  'book-discount',
  'book-confirm',
  'auth-shops',
]);

export function showsDocBottomNav(screenId: string) {
  return CUSTOMER_SCREENS.has(screenId);
}

interface BottomNavProps {
  variant: MockVariant;
  activeScreen: string;
}

export function DocBottomNav({ variant, activeScreen }: BottomNavProps) {
  const { t } = useLanguage();

  if (variant === 'v1') {
    const tabs = [
      { id: 'book-storefront', label: t('nav.home'), icon: Home },
      { id: 'auth-shops', label: t('nav.explore'), icon: Compass },
      { id: 'book-confirm', label: t('nav.bookings'), icon: Calendar },
      { id: 'book-storefront', label: 'Chat', icon: MessageSquare, badge: true },
      { id: 'auth-welcome', label: t('nav.account'), icon: User },
    ];
    const active =
      activeScreen === 'auth-shops'
        ? 'auth-shops'
        : activeScreen.startsWith('book-')
          ? activeScreen
          : 'book-storefront';

    return (
      <nav
        aria-label="Main navigation"
        className="shrink-0 bg-white border-t border-gray-100 px-2 pt-2 pb-3 flex items-center justify-around z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
      >
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = tab.id === active || (i === 0 && active === 'book-storefront');
          return (
            <button
              key={`${tab.id}-${i}`}
              type="button"
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] px-2 rounded-xl transition-colors duration-200 cursor-pointer touch-manipulation ${
                isActive ? 'text-[#1E4988]' : 'text-[#7A7A7A] hover:text-[#343434]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              {'badge' in tab && tab.badge && (
                <span className="absolute top-1 end-1 w-2 h-2 bg-[#F89826] rounded-full ring-2 ring-white" aria-hidden />
              )}
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    );
  }

  const tabs = [
    { id: 'book-storefront', label: t('nav.home'), icon: Home },
    { id: 'auth-shops', label: t('nav.explore'), icon: Search },
    { id: 'book-discount', label: t('nav.offers'), icon: Tag },
    { id: 'auth-welcome', label: t('nav.account'), icon: User },
  ];
  const active = activeScreen.startsWith('book-') ? activeScreen : 'book-storefront';

  return (
    <nav
      aria-label="Main navigation"
      className="shrink-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D4] pt-2 pb-2 px-4 select-none"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active || (tab.id === 'book-storefront' && active.startsWith('book-'));
          return (
            <button
              key={tab.id}
              type="button"
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 px-3 transition-colors duration-200 cursor-pointer touch-manipulation ${
                isActive ? 'text-[#F89826]' : 'text-[#343434] hover:text-[#1E4988]'
              }`}
            >
              <Icon size={20} className={`stroke-[2.2] mb-0.5 ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[10px] leading-none whitespace-nowrap ${isActive ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F89826] absolute -bottom-0.5" aria-hidden />}
            </button>
          );
        })}
      </div>
      <div className="w-28 h-1 bg-[#343434]/80 rounded-full mx-auto mt-2" aria-hidden />
    </nav>
  );
}

interface DocPhoneFrameProps {
  variant: MockVariant;
  screenId: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function DocPhoneFrame({ variant, screenId, children, footer }: DocPhoneFrameProps) {
  const showNav = showsDocBottomNav(screenId);
  return (
    <div className={`relative w-full h-full flex flex-col overflow-hidden bg-white`}>
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">{children}</div>
      {footer}
      {showNav && <DocBottomNav variant={variant} activeScreen={screenId} />}
    </div>
  );
}
