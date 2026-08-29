import React from 'react';
import { Shield } from 'lucide-react';
import { docAction } from '../../navigation/docFlows';
import { MOCK_METRICS, MOCK_VENDORS } from '../../data';
import type { DocNav } from '../docNav';
import type { TranslationKey } from '../../i18n';
import type { MockVariant } from '../../types';

interface AdminProps {
  id: string;
  variant: MockVariant;
  nav: DocNav;
  t: (key: TranslationKey) => string;
  locale: string;
}

export function renderAdminDocScreen({ id, variant, nav, t }: AdminProps) {
  const isSouq = variant === 'v1';
  const sidebar = docAction('adm-sidebar', 'dash')
    ? [
        { key: 'dash', label: t('adm.dash.metrics') },
        { key: 'vendors', label: 'Vendors' },
        { key: 'addons', label: 'Add-ons' },
        { key: 'audit', label: 'Audit' },
      ]
    : [];
  const activeSidebar =
    id === 'adm-dash'
      ? 'dash'
      : id === 'adm-vendors' || id === 'adm-onboard' || id === 'adm-vendor'
        ? 'vendors'
        : id === 'adm-addons'
          ? 'addons'
          : id === 'adm-audit'
            ? 'audit'
            : 'dash';

  const shellBg = 'bg-white';
  const cardClass = isSouq
    ? 'rounded-2xl border border-gray-200 bg-white p-4 shadow-ds-card'
    : 'mihrab-card p-4 bg-white';
  const sidebarActive = isSouq ? 'bg-[#E8EEF6] text-[#1E4988]' : 'bg-[#FEF3E4] text-[#1E4988] font-semibold';
  const sidebarIdle = 'text-[#5A5A5A]';
  const inputClass = isSouq
    ? 'w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200'
    : 'w-full px-4 py-3 rounded-[10px] bg-white border border-[#D6D0C4]';
  const btnClass = isSouq
    ? 'w-full min-h-[48px] rounded-xl font-semibold text-white bg-[#1E4988] shadow-ds-button-primary'
    : 'w-full min-h-[48px] rounded-[10px] type-button text-white bg-[#1E4988] shadow-md';

  return (
    <div className={`relative w-full h-full ${shellBg} flex flex-col overflow-hidden min-w-[720px]`}>
      <div className="bg-[#1E4988] text-white px-6 py-4 flex items-center gap-3">
        <Shield className="w-6 h-6" />
        <span className={isSouq ? 'font-heading font-bold text-lg' : 'type-h3 font-bold'}>Super Miadly</span>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <aside className={`w-48 bg-white ${isSouq ? 'border-e border-gray-200' : 'border-e border-[#E8E2D4]'} p-3 space-y-1 shrink-0`}>
          {sidebar.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                const target = docAction('adm-sidebar', item.key);
                if (target) nav.go(target);
              }}
              className={`w-full text-start px-3 py-2 rounded-lg text-sm font-medium ${activeSidebar === item.key ? sidebarActive : sidebarIdle}`}
            >
              {item.label}
            </button>
          ))}
        </aside>
        <main className="flex-1 p-6 overflow-auto space-y-4">
          {id === 'adm-login' ? (
            <div className={`${cardClass} max-w-md mx-auto mt-12 space-y-3`}>
              <h1 className={isSouq ? 'font-heading text-xl font-bold text-center' : 'type-h2 text-center'}>{t('adm.login.title')}</h1>
              <input readOnly placeholder="Email" className={inputClass} />
              <input readOnly type="password" placeholder="Password" className={inputClass} />
              <button type="button" onClick={nav.next} className={btnClass}>
                {t('action.continue')}
              </button>
            </div>
          ) : id === 'adm-onboard' ? (
            <div className={`${cardClass} max-w-lg space-y-3`}>
              <h1 className={isSouq ? 'font-heading text-xl font-bold' : 'type-h2'}>Onboard vendor</h1>
              <input readOnly placeholder="Shop name" className={inputClass} />
              <input readOnly placeholder="Owner email" className={inputClass} />
              <button type="button" onClick={nav.next} className={btnClass}>
                {t('action.continue')}
              </button>
            </div>
          ) : isSouq ? (
            <>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { l: 'Vendors', v: MOCK_METRICS.totalVendors },
                  { l: 'Pending', v: MOCK_METRICS.pendingOnboarding },
                  { l: 'Active', v: MOCK_METRICS.activeVendors },
                  { l: 'Revenue', v: `₪${MOCK_METRICS.grossRevenue.toLocaleString()}` },
                ].map((m) => (
                  <div key={m.l} className={cardClass}>
                    <p className="text-2xl font-bold text-[#1E4988] ltr-isolate">{m.v}</p>
                    <p className="text-xs text-[#7A7A7A]">{m.l}</p>
                  </div>
                ))}
              </div>
              {id === 'adm-vendors' && (
                <button type="button" onClick={() => nav.action('onboard')} className={btnClass}>
                  + Onboard vendor
                </button>
              )}
              {MOCK_VENDORS.map((v) => (
                <button key={v.id} type="button" onClick={() => nav.action('openVendor')} className="w-full text-start">
                  <div className={`${cardClass} flex justify-between items-center`}>
                    <div>
                      <p className="font-semibold">{v.shopName}</p>
                      <p className="text-sm text-[#7A7A7A] ltr-isolate">{v.ownerEmail}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${v.status === 'approved' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>{v.status}</span>
                  </div>
                </button>
              ))}
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-3">
                {[
                  { l: 'Vendors', v: MOCK_METRICS.totalVendors },
                  { l: 'Pending', v: MOCK_METRICS.pendingOnboarding },
                  { l: 'Active', v: MOCK_METRICS.activeVendors },
                  { l: 'Revenue', v: `₪${MOCK_METRICS.grossRevenue.toLocaleString()}` },
                ].map((m) => (
                  <div key={m.l} className={`${cardClass} min-w-[140px]`}>
                    <p className="type-h3 text-[#1E4988] ltr-isolate">{m.v}</p>
                    <p className="type-caption text-[#7A7A7A]">{m.l}</p>
                  </div>
                ))}
              </div>
              {id === 'adm-vendors' && (
                <button type="button" onClick={() => nav.action('onboard')} className={btnClass}>
                  + Onboard vendor
                </button>
              )}
              <div className="mihrab-card overflow-hidden divide-y divide-[#E8E2D4] bg-white">
                {MOCK_VENDORS.map((v) => (
                  <button key={v.id} type="button" onClick={() => nav.action('openVendor')} className="w-full flex items-center justify-between px-4 py-3 text-start hover:bg-[#FFF8EC]">
                    <div>
                      <p className="type-body font-semibold">{v.shopName}</p>
                      <p className="type-caption text-[#7A7A7A] ltr-isolate">{v.ownerEmail}</p>
                    </div>
                    <span className={`type-caption px-2 py-0.5 rounded-full ${v.status === 'approved' ? 'bg-[#E8FEF0] text-[#187A28]' : 'bg-[#FEF3E4] text-[#F89826]'}`}>{v.status}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
