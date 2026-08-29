import React, { useState } from 'react';
import {
  Check,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Share2,
  Star,
} from 'lucide-react';
import { MOCK_SERVICES } from '../../../data';
import { MOCK_MEDIA } from '../../mockMedia';
import { btnPrimarySouq, CoverImage, SouqBackButton } from '../ui';
import type { DocNav } from '../../docNav';

interface Props {
  shopName: string;
  address: string;
  rating: number;
  locale: string;
  bookLabel: string;
  servicesTitle: string;
  nav: DocNav;
  onBack?: () => void;
  backLabel: string;
}

/** v1 Souq storefront — one scroll region + sticky book bar (room for bottom nav) */
export function SouqStorefront({
  shopName,
  address,
  rating,
  locale,
  bookLabel,
  servicesTitle,
  nav,
  onBack,
  backLabel,
}: Props) {
  const [selectedId, setSelectedId] = useState('svc-1');
  const [saved, setSaved] = useState(false);
  const services = MOCK_SERVICES.slice(0, 4);
  const selected = services.find((s) => s.id === selectedId);
  const total = selected?.priceIls ?? 0;

  const quickActions = [
    { label: 'Website', icon: Globe },
    { label: 'Message', icon: MessageCircle },
    { label: 'Call', icon: Phone },
    { label: 'Direction', icon: Navigation },
  ];

  return (
    <div className="relative flex flex-col h-full min-h-0 bg-white text-[#343434]">
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar overscroll-contain">
        <div className="relative h-40 bg-gray-900 shrink-0">
          <CoverImage src={MOCK_MEDIA.shopCovers[0]} alt={shopName} className="w-full h-full opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />
          {onBack && (
            <div className="absolute top-2.5 start-3 end-3 flex items-center justify-between z-20">
              <SouqBackButton onClick={onBack} label={backLabel} />
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Share"
                  className="w-10 h-10 min-h-[44px] rounded-xl bg-white/95 flex items-center justify-center text-[#1E4988] shadow-md cursor-pointer touch-manipulation"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label={saved ? 'Remove from favorites' : 'Save to favorites'}
                  onClick={() => setSaved(!saved)}
                  className="w-10 h-10 min-h-[44px] rounded-xl bg-white/95 flex items-center justify-center shadow-md cursor-pointer touch-manipulation"
                >
                  <Heart className={`w-4 h-4 ${saved ? 'fill-[#F89826] text-[#F89826]' : 'text-[#343434]'}`} />
                </button>
              </div>
            </div>
          )}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#1E4988] text-white px-3 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-lg border border-white/80">
              <Star className="w-3 h-3 fill-[#F89826] text-[#F89826]" aria-hidden />
              <span className="ltr-isolate">{rating}</span>
              <span className="text-white/80 font-normal">(120+)</span>
            </div>
          </div>
        </div>

        <div className="px-4 pt-4 pb-3 border-b border-gray-100">
          <h1 className="font-heading font-extrabold text-xl text-[#1E4988] text-center leading-tight">{shopName}</h1>
          <p className="text-[11px] text-[#5A5A5A] text-center mt-0.5">
            {locale === 'ar' ? 'صالون معتمد • حجز فوري' : 'Verified salon • Instant booking'}
          </p>
          <div className="flex items-center justify-center gap-1 text-[11px] text-[#5A5A5A] mt-2">
            <MapPin className="w-3.5 h-3.5 text-[#F89826] shrink-0 fill-[#F89826]" aria-hidden />
            <span className="truncate max-w-[260px]">{address}</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            {quickActions.map((act) => (
              <button
                key={act.label}
                type="button"
                aria-label={act.label}
                className="w-10 h-10 min-h-[44px] rounded-xl bg-[#E8EEF6] text-[#1E4988] flex items-center justify-center hover:bg-[#1E4988] hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation border border-blue-100/80"
              >
                <act.icon className="w-4 h-4 stroke-[2]" />
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-3 pb-4">
          <h2 className="font-heading font-extrabold text-sm text-[#1E4988] mb-2">{servicesTitle}</h2>
          <div className="space-y-2">
            {services.map((svc, i) => {
              const name = locale === 'ar' ? svc.nameAr : svc.nameEn;
              const isSelected = svc.id === selectedId;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedId(svc.id)}
                  className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border text-start transition-colors duration-200 cursor-pointer touch-manipulation min-h-[56px] ${
                    isSelected
                      ? 'border-[#1E4988] bg-[#E8EEF6]/50 ring-1 ring-[#1E4988]/20'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <CoverImage src={MOCK_MEDIA.serviceThumbs[i]} alt={name} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#343434] leading-tight truncate">{name}</p>
                    <p className="text-[11px] text-[#7A7A7A] ltr-isolate">{svc.durationMinutes} min</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="font-bold text-sm text-[#1E4988] ltr-isolate">₪{svc.priceIls}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#1E4988]" aria-hidden />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="shrink-0 bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
        <button type="button" onClick={nav.next} className={`${btnPrimarySouq} flex items-center justify-center gap-2 py-3`}>
          <span>{bookLabel}</span>
          {total > 0 && (
            <span className="bg-white/20 px-2 py-0.5 rounded-md text-xs font-semibold ltr-isolate">₪{total}</span>
          )}
        </button>
      </div>
    </div>
  );
}
