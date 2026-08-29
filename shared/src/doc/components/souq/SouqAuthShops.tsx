import React from 'react';
import { ChevronRight, MapPin, QrCode, Star } from 'lucide-react';
import { MOCK_SHOPS } from '../../../data';
import type { TranslationKey } from '../../../i18n';
import type { DocNav } from '../../docNav';
import { MOCK_MEDIA } from '../../mockMedia';
import { SouqScreenHeader } from '../ui';

const linkShopBtn =
  'w-full flex items-center justify-center gap-2 min-h-[52px] py-3 rounded-2xl border-2 border-dashed border-[#1E4988] text-[#1E4988] font-semibold bg-white cursor-pointer touch-manipulation hover:bg-[#F0F4FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988] transition-colors duration-200';

interface Props {
  nav: DocNav;
  t: (key: TranslationKey) => string;
  backLabel: string;
  locale: string;
}

export function SouqAuthShops({ nav, t, backLabel, locale }: Props) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <SouqScreenHeader title={t('auth.shops.title')} onBack={nav.back} backLabel={backLabel} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-4 min-h-0">
        {MOCK_SHOPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => nav.action('selectShop')}
            className="w-full text-start group cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E4988] rounded-2xl"
          >
            <div className="rounded-2xl overflow-hidden shadow-ds-card border border-gray-200 bg-white transition-shadow duration-200 group-hover:shadow-ds-elevated">
              <div className="h-28 bg-cover bg-center relative" style={{ backgroundImage: `url(${MOCK_MEDIA.shopCovers[i]})` }}>
                <div className="absolute top-3 end-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-bold shadow-sm">
                  <Star className="w-3 h-3 text-[#F89826] fill-[#F89826]" aria-hidden />
                  <span className="ltr-isolate">{s.rating}</span>
                </div>
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-[#343434]">{locale === 'ar' ? s.nameAr : s.nameEn}</p>
                  <p className="text-xs text-[#7A7A7A] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 shrink-0" aria-hidden />
                    <span className="truncate">{locale === 'ar' ? s.addressAr : s.addressEn}</span>
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1E4988] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
              </div>
            </div>
          </button>
        ))}

        <button type="button" onClick={() => nav.action('linkShop')} className={linkShopBtn}>
          <QrCode className="w-5 h-5" aria-hidden />
          {t('auth.qr.title')}
        </button>
      </div>
    </div>
  );
}
