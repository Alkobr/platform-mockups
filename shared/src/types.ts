export type ScreenRole =
  | 'shared'
  | 'customer'
  | 'vendor'
  | 'employee'
  | 'super-admin';

export type ScreenGroup = 'A';

export type FrameType = 'phone' | 'tablet';

export type ScreenState = 'default' | 'loading' | 'empty' | 'error';

export type MockVariant = 'v1' | 'v2';

export interface ScreenMeta {
  id: string;
  docId?: string;
  route: string;
  role: ScreenRole;
  group: ScreenGroup;
  frame: FrameType;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  entryPoints?: string[];
  exitPoints?: string[];
  exploration?: boolean;
}

export interface ScreenRenderProps {
  meta: ScreenMeta;
  state: ScreenState;
  variant: MockVariant;
  onNavigate?: (screenId: string) => void;
}

export type Locale = 'ar' | 'en';

export interface Shop {
  id: string;
  nameEn: string;
  nameAr: string;
  type: string;
  logo?: string;
  rating: number;
  addressEn: string;
  addressAr: string;
}

export interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  durationMinutes: number;
  priceIls: number;
  isActive: boolean;
}

export interface Employee {
  id: string;
  fullName: string;
  specialtyEn: string;
  specialtyAr: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  serviceNameEn: string;
  serviceNameAr: string;
  customerName: string;
  employeeName: string;
  scheduledAt: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';
  priceIls: number;
  shopNameEn: string;
  shopNameAr: string;
}

export interface VendorSummary {
  id: string;
  shopName: string;
  status: 'pending' | 'approved' | 'suspended' | 'rejected';
  ownerEmail: string;
  phone: string;
}
