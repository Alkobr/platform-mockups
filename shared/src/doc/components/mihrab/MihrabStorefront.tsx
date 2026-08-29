import React, { useState } from 'react';
import { Globe, MapPin, MessageSquare, Phone, Share2, Star } from 'lucide-react';
import { MOCK_SERVICES } from '../../../data';
import { MOCK_MEDIA } from '../../mockMedia';
import { btnPrimaryMihrab, CoverImage, MihrabBackButton } from '../ui';
import type { DocNav } from '../../docNav';

interface Props {
  shopName: string;
  address: string;
  rating: number;
  locale: string;
  isRTL: boolean;
  detailsLabel: string;
  bookLabel: string;
  tabOverview: string;
  tabServices: string;
  openLabel: string;
  nav: DocNav;
  onBack: () => void;
  backLabel: string;
}

/** v2 Mihrab storefront — one scroll region + sticky book bar (room for bottom nav) */
export function MihrabStorefront({
  shopName,
  address,
  rating,
  locale,
  isRTL,
  detailsLabel,
  bookLabel,
  tabOverview,
  tabServices,
  openLabel,
  nav,
  onBack,
  backLabel,
}: Props) {
  const [tab, setTab] = useState<'Overview' | 'Services'>('Services');
  const services = MOCK_SERVICES.slice(0, 4);

  return (
    <div className="relative w-full h-full bg-white flex flex-col min-h-0 overflow-hidden">
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar overscroll-contain">
        <div className="relative w-full h-44 overflow-hidden bg-[#343434] shrink-0">
          <CoverImage src={MOCK_MEDIA.shopCovers[0]} alt={shopName} className="w-full h-full object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />
          <div className="absolute top-0 left-0 right-0 z-20 pt-2.5 px-3">
            <div className="flex items-center justify-between">
              <MihrabBackButton onClick={onBack} label={backLabel} isRTL={isRTL} />
              <h2 className="text-sm font-bold text-white tracking-wide drop-shadow-md">{detailsLabel}</h2>
              <div className="w-9" aria-hidden />
            </div>
          </div>
        </div>

        <div className="relative -mt-5 rounded-t-[24px] bg-white px-4 pt-4 pb-4 shadow-[0_-4px_20px_rgba(52,52,52,0.08)] border-t border-[#E8E2D4]">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold text-[#343434] tracking-tight truncate">{shopName}</h1>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div className="flex items-center gap-0.5 text-[11px] text-[#343434]">
                  <Star size={12} className="text-[#F89826] fill-[#F89826]" aria-hidden />
                  <span className="font-bold ltr-isolate">{rating.toFixed(1)}</span>
                  <span className="text-[#7A7A7A]">(120)</span>
                </div>
                <div className="flex items-center text-[11px] text-[#5A5A5A] min-w-0">
                  <MapPin size={12} className="text-[#F89826] me-0.5 shrink-0 fill-[#F89826]" aria-hidden />
                  <span className="truncate">{address}</span>
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#50F268]/20 text-[#187A28] border border-[#50F268]/40 shrink-0">
              {openLabel}
            </span>
          </div>

          <div className="flex items-center border-b border-[#E8E2D4] mt-3 mb-3">
            {[
              { id: 'Overview' as const, label: tabOverview },
              { id: 'Services' as const, label: tabServices },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex-1 py-2 text-center text-sm font-semibold relative cursor-pointer touch-manipulation min-h-[44px] transition-colors duration-200 ${
                  tab === t.id ? 'text-[#F89826] font-bold' : 'text-[#7A7A7A] hover:text-[#343434]'
                }`}
              >
                {t.label}
                {tab === t.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F89826] rounded-full" />}
              </button>
            ))}
          </div>

          {tab === 'Overview' && (
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: 'Website', icon: Globe },
                { label: 'Message', icon: MessageSquare },
                { label: 'Call', icon: Phone },
                { label: 'Share', icon: Share2 },
              ].map((action) => (
                <button
                  key={action.label}
                  type="button"
                  aria-label={action.label}
                  className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-[#FFF8EC] border border-[#E8E2D4] hover:bg-[#FEF3E4] transition-colors duration-200 cursor-pointer touch-manipulation min-h-[44px]"
                >
                  <action.icon size={18} className="text-[#F89826]" aria-hidden />
                  <span className="text-[9px] font-bold text-[#F89826] mt-0.5">{action.label}</span>
                </button>
              ))}
            </div>
          )}

          {tab === 'Services' && (
            <div className="mihrab-card divide-y divide-[#E8E2D4] overflow-hidden">
              {services.map((svc) => (
                <div key={svc.id} className="flex items-center justify-between px-3 py-2.5 bg-white gap-3">
                  <div className="min-w-0">
                    <p className="type-body-sm font-semibold truncate">{locale === 'ar' ? svc.nameAr : svc.nameEn}</p>
                    <p className="type-caption text-[#7A7A7A] ltr-isolate">{svc.durationMinutes} min</p>
                  </div>
                  <span className="type-body-sm font-bold text-[#1E4988] ltr-isolate shrink-0">₪{svc.priceIls}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="shrink-0 z-30 bg-white border-t border-[#E8E2D4] px-4 py-3 shadow-[0_-4px_16px_rgba(52,52,52,0.06)]">
        <button type="button" onClick={nav.next} className={`${btnPrimaryMihrab} py-3 text-[#343434]`}>
          {bookLabel}
        </button>
      </div>
    </div>
  );
}
