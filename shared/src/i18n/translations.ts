import type { Locale } from '../types';

export type TranslationKey =
  | 'app.name'
  | 'nav.home'
  | 'nav.explore'
  | 'nav.bookings'
  | 'nav.offers'
  | 'nav.account'
  | 'nav.back'
  | 'action.continue'
  | 'action.confirm'
  | 'action.cancel'
  | 'action.retry'
  | 'action.save'
  | 'action.signOut'
  | 'action.book'
  | 'action.apply'
  | 'action.skip'
  | 'state.loading'
  | 'state.empty'
  | 'state.error'
  | 'state.errorHint'
  | 'auth.welcome.title'
  | 'auth.welcome.customer'
  | 'auth.welcome.vendor'
  | 'auth.welcome.staff'
  | 'auth.phone.label'
  | 'auth.phone.title'
  | 'auth.phone.subtitle'
  | 'auth.phone.hint'
  | 'auth.phone.step'
  | 'auth.phone.placeholder'
  | 'auth.phone.dialCode'
  | 'auth.otp.label'
  | 'auth.otp.title'
  | 'auth.otp.subtitle'
  | 'auth.otp.sentTo'
  | 'auth.otp.sentToLabel'
  | 'auth.otp.changePhone'
  | 'auth.otp.resendPrompt'
  | 'auth.otp.step'
  | 'auth.otp.resend'
  | 'auth.otp.resendIn'
  | 'auth.shops.title'
  | 'auth.shops.empty'
  | 'auth.qr.title'
  | 'auth.qr.hint'
  | 'book.storefront.hours'
  | 'book.storefront.switchShop'
  | 'book.staff.title'
  | 'book.services.title'
  | 'book.slots.title'
  | 'book.discount.title'
  | 'book.discount.placeholder'
  | 'book.confirm.title'
  | 'book.confirm.summary'
  | 'book.flow.title'
  | 'book.flow.stepChoose'
  | 'book.flow.stepConfirm'
  | 'cust.bookings.upcoming'
  | 'cust.bookings.completed'
  | 'cust.bookings.cancelled'
  | 'ven.dash.today'
  | 'ven.dash.appointments'
  | 'ven.dash.manage'
  | 'ven.section.hint'
  | 'ven.staff.add'
  | 'book.discount.applied'
  | 'emp.schedule.title'
  | 'emp.schedule.confirm'
  | 'emp.schedule.noShow'
  | 'adm.login.title'
  | 'adm.dash.metrics'
  | 'locked.feature'
  | 'gallery.title'
  | 'gallery.modeGallery'
  | 'gallery.modeDevice'
  | 'gallery.groupA'
  | 'gallery.groupB'
  | 'gallery.groupC'
  | 'gallery.exploration'
  | 'brand.primary'
  | 'brand.accent';

const ar: Record<TranslationKey, string> = {
  'app.name': 'ميادلي',
  'nav.home': 'الرئيسية',
  'nav.explore': 'استكشاف',
  'nav.bookings': 'حجوزاتي',
  'nav.offers': 'العروض',
  'nav.account': 'حسابي',
  'nav.back': 'رجوع',
  'action.continue': 'متابعة',
  'action.confirm': 'تأكيد',
  'action.cancel': 'إلغاء',
  'action.retry': 'إعادة المحاولة',
  'action.save': 'حفظ',
  'action.signOut': 'تسجيل الخروج',
  'action.book': 'احجز موعد',
  'action.apply': 'تطبيق',
  'action.skip': 'تخطي',
  'state.loading': 'جاري التحميل…',
  'state.empty': 'لا يوجد محتوى',
  'state.error': 'حدث خطأ',
  'state.errorHint': 'تحقق من الاتصال وحاول مرة أخرى',
  'auth.welcome.title': 'مرحباً بك في ميادلي',
  'auth.welcome.customer': 'دخول كزبون',
  'auth.welcome.vendor': 'دخول كمتجر',
  'auth.welcome.staff': 'دخول كموظف',
  'auth.phone.label': 'رقم الهاتف',
  'auth.phone.title': 'ما رقم هاتفك؟',
  'auth.phone.subtitle': 'سنرسل رمز التحقق عبر واتساب أولاً، ثم SMS عند الحاجة',
  'auth.phone.hint': 'يصل الرمز خلال دقيقة — لا نشارك رقمك مع المتاجر',
  'auth.phone.step': 'الخطوة 1 من 2',
  'auth.phone.placeholder': '05X XXX XXXX',
  'auth.phone.dialCode': 'رمز الدولة',
  'auth.otp.label': 'رمز التحقق',
  'auth.otp.title': 'أدخل رمز التحقق',
  'auth.otp.subtitle': 'تحقق من واتساب أو SMS',
  'auth.otp.sentTo': 'أُرسل إلى +972 50-123-4567',
  'auth.otp.sentToLabel': 'أُرسل الرمز إلى',
  'auth.otp.changePhone': 'تغيير',
  'auth.otp.resendPrompt': 'لم يصلك الرمز؟',
  'auth.otp.step': 'الخطوة 2 من 2',
  'auth.otp.resend': 'إعادة إرسال الرمز',
  'auth.otp.resendIn': 'إعادة الإرسال خلال 24 ث',
  'auth.shops.title': 'متاجرك',
  'auth.shops.empty': 'لا توجد متاجر مرتبطة',
  'auth.qr.title': 'مسح QR',
  'auth.qr.hint': 'وجّه الكاميرا نحو رمز المتجر',
  'book.storefront.hours': 'ساعات العمل',
  'book.storefront.switchShop': 'تبديل المتجر',
  'book.staff.title': 'اختر الموظف',
  'book.services.title': 'اختر الخدمة',
  'book.slots.title': 'اختر الموعد',
  'book.discount.title': 'كود الخصم',
  'book.discount.placeholder': 'أدخل الكود',
  'book.discount.applied': '✓ تم تطبيق خصم 10%',
  'book.confirm.title': 'تأكيد الحجز',
  'book.confirm.summary': 'ملخص الحجز',
  'book.flow.title': 'احجز موعد',
  'book.flow.stepChoose': 'الخطوة 1 من 2',
  'book.flow.stepConfirm': 'الخطوة 2 من 2',
  'cust.bookings.upcoming': 'قادمة',
  'cust.bookings.completed': 'مكتملة',
  'cust.bookings.cancelled': 'ملغاة',
  'ven.dash.today': 'اليوم',
  'ven.dash.appointments': 'المواعيد',
  'ven.dash.manage': 'إدارة المتجر',
  'ven.section.hint': 'أدر هذا القسم لمتجرك من هنا.',
  'ven.staff.add': 'إضافة موظف',
  'emp.schedule.title': 'جدولي',
  'emp.schedule.confirm': 'تأكيد',
  'emp.schedule.noShow': 'لم يحضر',
  'adm.login.title': 'Super Miadly',
  'adm.dash.metrics': 'مؤشرات المنصة',
  'locked.feature': 'هذه الميزة غير مفعّلة لمتجرك',
  'gallery.title': 'معاينة الشاشات',
  'gallery.modeGallery': 'معرض',
  'gallery.modeDevice': 'جهاز',
  'gallery.groupA': 'موثّق (27)',
  'gallery.groupB': 'فجوات (8)',
  'gallery.groupC': 'استكشاف',
  'gallery.exploration': 'ما بعد V1',
  'brand.primary': 'أساسي',
  'brand.accent': 'إجراء',
};

const en: Record<TranslationKey, string> = {
  'app.name': 'Miadly',
  'nav.home': 'Home',
  'nav.explore': 'Explore',
  'nav.bookings': 'Bookings',
  'nav.offers': 'Offers',
  'nav.account': 'Account',
  'nav.back': 'Back',
  'action.continue': 'Continue',
  'action.confirm': 'Confirm',
  'action.cancel': 'Cancel',
  'action.retry': 'Retry',
  'action.save': 'Save',
  'action.signOut': 'Sign out',
  'action.book': 'Book appointment',
  'action.apply': 'Apply',
  'action.skip': 'Skip',
  'state.loading': 'Loading…',
  'state.empty': 'Nothing here yet',
  'state.error': 'Something went wrong',
  'state.errorHint': 'Check your connection and try again',
  'auth.welcome.title': 'Welcome to Miadly',
  'auth.welcome.customer': 'Sign in as customer',
  'auth.welcome.vendor': 'Sign in as shop owner',
  'auth.welcome.staff': 'Sign in as staff',
  'auth.phone.label': 'Phone number',
  'auth.phone.title': 'What’s your number?',
  'auth.phone.subtitle': 'We’ll send a code on WhatsApp first, SMS if needed',
  'auth.phone.hint': 'Code arrives within a minute — your number stays private',
  'auth.phone.step': 'Step 1 of 2',
  'auth.phone.placeholder': '05X XXX XXXX',
  'auth.phone.dialCode': 'Country code',
  'auth.otp.label': 'Verification code',
  'auth.otp.title': 'Enter verification code',
  'auth.otp.subtitle': 'Check WhatsApp or SMS for your code',
  'auth.otp.sentTo': 'Sent to +972 50-123-4567',
  'auth.otp.sentToLabel': 'Code sent to',
  'auth.otp.changePhone': 'Change',
  'auth.otp.resendPrompt': "Didn't receive the code?",
  'auth.otp.step': 'Step 2 of 2',
  'auth.otp.resend': 'Resend code',
  'auth.otp.resendIn': 'Resend in 24s',
  'auth.shops.title': 'Your shops',
  'auth.shops.empty': 'No linked shops',
  'auth.qr.title': 'Scan QR',
  'auth.qr.hint': 'Point camera at shop QR code',
  'book.storefront.hours': 'Working hours',
  'book.storefront.switchShop': 'Switch shop',
  'book.staff.title': 'Choose staff',
  'book.services.title': 'Choose service',
  'book.slots.title': 'Choose time',
  'book.discount.title': 'Promo code',
  'book.discount.placeholder': 'Enter code',
  'book.discount.applied': '✓ 10% off applied',
  'book.confirm.title': 'Confirm booking',
  'book.confirm.summary': 'Booking summary',
  'book.flow.title': 'Book appointment',
  'book.flow.stepChoose': 'Step 1 of 2',
  'book.flow.stepConfirm': 'Step 2 of 2',
  'cust.bookings.upcoming': 'Upcoming',
  'cust.bookings.completed': 'Completed',
  'cust.bookings.cancelled': 'Cancelled',
  'ven.dash.today': 'Today',
  'ven.dash.appointments': 'Appointments',
  'ven.dash.manage': 'Manage shop',
  'ven.section.hint': 'Manage this section for your shop.',
  'ven.staff.add': 'Add staff',
  'emp.schedule.title': 'My schedule',
  'emp.schedule.confirm': 'Confirm',
  'emp.schedule.noShow': 'No-show',
  'adm.login.title': 'Super Miadly',
  'adm.dash.metrics': 'Platform metrics',
  'locked.feature': 'This feature is not active for your shop',
  'gallery.title': 'Screen preview',
  'gallery.modeGallery': 'Gallery',
  'gallery.modeDevice': 'Device',
  'gallery.groupA': 'Documented (27)',
  'gallery.groupB': 'Gaps (8)',
  'gallery.groupC': 'Exploration',
  'gallery.exploration': 'Post-V1',
  'brand.primary': 'Primary',
  'brand.accent': 'Accent',
};

export const translations: Record<Locale, Record<TranslationKey, string>> = { ar, en };

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] ?? key;
}

export function formatPrice(locale: Locale, amount: number): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-IL' : 'en-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatTime(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-IL' : 'en-IL', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatDate(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-IL' : 'en-IL', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(date);
}
