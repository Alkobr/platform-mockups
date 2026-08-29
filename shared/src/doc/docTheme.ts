import type { MockVariant } from '../types';

export interface DocTheme {
  /** Phone screen canvas */
  canvas: string;
  /** Standard page shell (stack screens) */
  shell: string;
  /** Welcome / auth hero background */
  welcome: string;
  /** Admin tablet shell */
  admin: string;
  headerBorder: string;
  headerTitle: string;
  backBtn: string;
  backIcon: string;
  card: string;
  cardElevated: string;
  input: string;
  inputMuted: string;
  mutedText: string;
  primaryText: string;
  /** Default filled CTA */
  btnPrimary: string;
  /** Booking / high-energy CTA (Souq: orange; Mihrab: same orange, stronger shadow) */
  btnAccent: string;
  btnOutlinePrimary: string;
  btnOutlineNeutral: string;
  btnGhost: string;
  slotSelected: string;
  slotDefault: string;
  otpCell: string;
  chip: string;
  chipActive: string;
  navTile: string;
  storefrontPage: string;
  storefrontHero: string;
  link: string;
  sidebarActive: string;
  sidebarIdle: string;
  metricValue: string;
  successText: string;
  sectionHeading: string;
  welcomePanel: string;
  iconWell: string;
  qrFrame: string;
  empActionPrimary: string;
  empActionSecondary: string;
  checkboxAccent: string;
  /** Vendor / admin login — blue in Mihrab, same as primary in Souq */
  btnVendorPrimary: string;
  adminSidebarBorder: string;
  storefrontHeroTitle: string;
}

export const DOC_THEMES: Record<MockVariant, DocTheme> = {
  v1: {
    canvas: 'bg-white',
    shell: 'bg-white',
    welcome: 'bg-[#F8F9FA]',
    admin: 'bg-[#F8F9FA]',
    headerBorder: 'border-gray-100',
    headerTitle: 'font-heading text-lg font-bold text-[#343434]',
    backBtn: 'w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0 bg-white',
    backIcon: 'w-5 h-5 text-[#343434]',
    card: 'rounded-2xl border border-gray-200 bg-white p-4 shadow-ds-card',
    cardElevated: 'rounded-2xl border border-gray-200 bg-white p-4 shadow-ds-elevated',
    input: 'w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 text-[#343434]',
    inputMuted: 'px-3 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 text-[#343434] font-medium',
    mutedText: 'text-[#5A5A5A] type-body-sm',
    primaryText: 'text-[#343434]',
    btnPrimary: 'w-full min-h-[48px] rounded-xl font-semibold text-white bg-[#1E4988] shadow-ds-button-primary',
    btnAccent: 'w-full min-h-[48px] rounded-xl font-semibold text-white bg-[#F89826] shadow-ds-button-accent',
    btnOutlinePrimary: 'w-full min-h-[48px] rounded-xl border-2 border-[#1E4988] text-[#1E4988] font-semibold bg-white',
    btnOutlineNeutral: 'w-full min-h-[48px] rounded-xl border border-gray-200 text-[#343434] font-semibold bg-white',
    btnGhost: 'w-full text-sm text-[#1E4988] font-semibold py-2',
    slotSelected: 'py-2 rounded-lg text-sm font-medium ltr-isolate bg-[#1E4988] text-white',
    slotDefault: 'py-2 rounded-lg text-sm font-medium ltr-isolate bg-[#F8F9FA] border border-gray-200 text-[#343434]',
    otpCell: 'w-11 h-12 rounded-xl border-2 border-[#1E4988] bg-[#E8EEF6] flex items-center justify-center font-bold text-lg ltr-isolate',
    chip: 'text-xs px-2 py-1 rounded-full bg-[#E8EEF6] text-[#1E4988]',
    chipActive: 'text-xs px-2 py-1 rounded-full bg-green-50 text-green-700',
    navTile: 'py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#1E4988] bg-white',
    storefrontPage: 'bg-white',
    storefrontHero: 'h-44 bg-gradient-to-br from-[#1E4988] to-[#183A6E] relative',
    link: 'text-sm text-[#1E4988] font-semibold',
    sidebarActive: 'bg-[#E8EEF6] text-[#1E4988]',
    sidebarIdle: 'text-[#5A5A5A]',
    metricValue: 'text-2xl font-bold text-[#1E4988] ltr-isolate',
    successText: 'text-sm text-[#50F268] mt-2 font-medium',
    sectionHeading: 'font-heading font-bold text-[#343434]',
    welcomePanel: '',
    iconWell: 'w-14 h-14 rounded-xl bg-[#E8EEF6] flex items-center justify-center shrink-0',
    qrFrame: 'w-56 h-56 rounded-2xl border-2 border-dashed border-[#1E4988] bg-[#F8F9FA] flex items-center justify-center',
    empActionPrimary: 'flex-1 py-2 rounded-lg bg-[#1E4988] text-white text-sm font-semibold',
    empActionSecondary: 'flex-1 py-2 rounded-lg border border-gray-200 text-sm font-semibold bg-white',
    checkboxAccent: 'accent-[#1E4988]',
    btnVendorPrimary: 'w-full min-h-[48px] rounded-xl font-semibold text-white bg-[#1E4988] shadow-ds-button-primary',
    adminSidebarBorder: 'border-e border-gray-200',
    storefrontHeroTitle: 'font-heading text-2xl font-bold',
  },
  v2: {
    canvas: 'bg-[#FFF4DE]',
    shell: 'bg-[#FFF4DE]',
    welcome: 'bg-[#FFF4DE]',
    admin: 'bg-[#FFF8EC]',
    headerBorder: 'border-[#E8E2D4]/70',
    headerTitle: 'type-h3 text-[#343434]',
    backBtn: 'w-10 h-10 rounded-[10px] border border-[#E8E2D4] flex items-center justify-center shrink-0 bg-white hover:border-[#1E4988]',
    backIcon: 'w-5 h-5 text-[#343434] stroke-[2.5]',
    card: 'mihrab-card p-4 shadow-xs',
    cardElevated: 'mihrab-card p-4 shadow-md',
    input: 'w-full px-4 py-3 rounded-[10px] bg-white border border-[#D6D0C4] text-[#343434] focus:border-[#F89826]',
    inputMuted: 'px-3 py-3 rounded-[10px] bg-[#FFF8EC] border border-[#D6D0C4] text-[#343434] font-semibold',
    mutedText: 'text-[#5A5A5A] type-body-sm',
    primaryText: 'text-[#343434]',
    btnPrimary: 'w-full min-h-[48px] rounded-[10px] type-button text-white bg-[#F89826] shadow-md hover:bg-[#E0861C]',
    btnAccent: 'w-full min-h-[48px] rounded-[10px] type-button text-white bg-[#F89826] shadow-md hover:bg-[#E0861C]',
    btnOutlinePrimary: 'w-full min-h-[48px] rounded-[10px] border-2 border-[#1E4988] text-[#1E4988] font-semibold bg-white',
    btnOutlineNeutral: 'w-full min-h-[48px] rounded-[10px] border border-[#E8E2D4] text-[#343434] font-semibold bg-white',
    btnGhost: 'w-full text-sm text-[#1E4988] font-semibold py-2',
    slotSelected: 'py-2 rounded-[10px] text-sm font-semibold ltr-isolate bg-[#F89826] text-white shadow-sm',
    slotDefault: 'py-2 rounded-[10px] text-sm font-medium ltr-isolate bg-white border border-[#E8E2D4] text-[#343434]',
    otpCell: 'w-11 h-12 rounded-[10px] border-2 border-[#F89826] bg-[#FFF4DE] flex items-center justify-center font-bold text-lg ltr-isolate',
    chip: 'text-xs px-2 py-1 rounded-full bg-[#FEF3E4] text-[#1E4988] font-semibold',
    chipActive: 'text-xs px-2 py-1 rounded-full bg-[#E8FEF0] text-[#187A28] font-semibold',
    navTile: 'py-2.5 rounded-[10px] border border-[#E8E2D4] text-sm font-semibold text-[#1E4988] bg-white shadow-xs',
    storefrontPage: 'bg-[#FFF4DE]',
    storefrontHero: 'h-44 bg-gradient-to-br from-[#1E4988] via-[#183A6E] to-[#142F59] relative',
    link: 'text-sm text-[#1E4988] font-semibold',
    sidebarActive: 'bg-[#FEF3E4] text-[#1E4988] font-semibold',
    sidebarIdle: 'text-[#5A5A5A]',
    metricValue: 'text-2xl font-bold text-[#1E4988] ltr-isolate',
    successText: 'text-sm text-[#187A28] mt-2 font-semibold',
    sectionHeading: 'type-h3 text-[#343434]',
    welcomePanel: 'w-full rounded-[12px] border border-[#E8E2D4] bg-white p-4 shadow-md space-y-3',
    iconWell: 'w-14 h-14 rounded-[10px] bg-[#FEF3E4] border border-[#E8E2D4] flex items-center justify-center shrink-0',
    qrFrame: 'w-56 h-56 rounded-[12px] border-2 border-dashed border-[#F89826] bg-[#FFF8EC] flex items-center justify-center',
    empActionPrimary: 'flex-1 py-2 rounded-[10px] bg-[#F89826] text-white text-sm font-semibold shadow-sm',
    empActionSecondary: 'flex-1 py-2 rounded-[10px] border border-[#E8E2D4] text-sm font-semibold bg-white',
    checkboxAccent: 'accent-[#F89826]',
    btnVendorPrimary: 'w-full min-h-[48px] rounded-[10px] type-button text-white bg-[#1E4988] shadow-md',
    adminSidebarBorder: 'border-e border-[#E8E2D4]',
    storefrontHeroTitle: 'type-h1 font-bold',
  },
};

export function getDocTheme(variant: MockVariant = 'v1'): DocTheme {
  return DOC_THEMES[variant];
}
