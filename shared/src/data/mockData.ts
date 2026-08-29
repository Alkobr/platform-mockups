import type { Appointment, Employee, Service, Shop, VendorSummary } from '../types';

export const MOCK_SHOPS: Shop[] = [
  {
    id: 'shop-1',
    nameEn: 'Nour Salon',
    nameAr: 'صالون نور',
    type: 'salon',
    rating: 4.8,
    addressEn: '12 Ibn Gabirol St, Tel Aviv',
    addressAr: 'شارع إبن جبيرول 12، تل أبيب',
  },
  {
    id: 'shop-2',
    nameEn: 'Barber House',
    nameAr: 'بيت الحلاق',
    type: 'barbershop',
    rating: 4.6,
    addressEn: '5 Herzl St, Haifa',
    addressAr: 'شارع Herzl 5، حيفا',
  },
  {
    id: 'shop-3',
    nameEn: 'Glow Spa',
    nameAr: 'سبا Glow',
    type: 'spa',
    rating: 4.9,
    addressEn: '3 Ben Yehuda, Jerusalem',
    addressAr: 'بن يehuda 3، القدس',
  },
];

export const MOCK_SERVICES: Service[] = [
  { id: 'svc-1', nameEn: 'Haircut', nameAr: 'قص شعر', durationMinutes: 45, priceIls: 120, isActive: true },
  { id: 'svc-2', nameEn: 'Beard trim', nameAr: 'تهذيب لحية', durationMinutes: 20, priceIls: 60, isActive: true },
  { id: 'svc-3', nameEn: 'Color treatment', nameAr: 'صبغة', durationMinutes: 90, priceIls: 280, isActive: true },
  { id: 'svc-4', nameEn: 'Manicure', nameAr: 'مانيكير', durationMinutes: 40, priceIls: 95, isActive: true },
];

export const MOCK_EMPLOYEES: Employee[] = [
  { id: 'emp-1', fullName: 'Sara Cohen', specialtyEn: 'Stylist', specialtyAr: 'مصففة', isAvailable: true },
  { id: 'emp-2', fullName: 'Ahmad Khalil', specialtyEn: 'Barber', specialtyAr: 'حلاق', isAvailable: true },
  { id: 'emp-3', fullName: 'Maya Levi', specialtyEn: 'Colorist', specialtyAr: 'متخصصة صبغ', isAvailable: false },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    serviceNameEn: 'Haircut',
    serviceNameAr: 'قص شعر',
    customerName: 'Yousef Mansour',
    employeeName: 'Sara Cohen',
    scheduledAt: '2026-08-29T10:00:00',
    status: 'confirmed',
    priceIls: 120,
    shopNameEn: 'Nour Salon',
    shopNameAr: 'صالون نور',
  },
  {
    id: 'apt-2',
    serviceNameEn: 'Beard trim',
    serviceNameAr: 'تهذيب لحية',
    customerName: 'Omar Haddad',
    employeeName: 'Ahmad Khalil',
    scheduledAt: '2026-08-29T14:30:00',
    status: 'pending',
    priceIls: 60,
    shopNameEn: 'Nour Salon',
    shopNameAr: 'صالون نور',
  },
  {
    id: 'apt-3',
    serviceNameEn: 'Manicure',
    serviceNameAr: 'مانيكير',
    customerName: 'Lina Azmi',
    employeeName: 'Maya Levi',
    scheduledAt: '2026-08-28T16:00:00',
    status: 'completed',
    priceIls: 95,
    shopNameEn: 'Glow Spa',
    shopNameAr: 'سبا Glow',
  },
];

export const MOCK_VENDORS: VendorSummary[] = [
  { id: 'v-1', shopName: 'Nour Salon', status: 'approved', ownerEmail: 'owner@nour.local', phone: '0501234567' },
  { id: 'v-2', shopName: 'Barber House', status: 'pending', ownerEmail: 'hi@barber.local', phone: '0509876543' },
  { id: 'v-3', shopName: 'Glow Spa', status: 'approved', ownerEmail: 'spa@glow.local', phone: '0521112233' },
];

export const MOCK_SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00'];

export const MOCK_METRICS = {
  totalVendors: 42,
  pendingOnboarding: 5,
  activeVendors: 37,
  grossRevenue: 128400,
  activeAddOns: 12,
};

export const BRAND_COLORS = [
  { name: 'Primary', token: 'color.brand.primary', hex: '#1E4988' },
  { name: 'Accent', token: 'color.brand.accent', hex: '#F89826' },
  { name: 'Background', token: 'color.background.default', hex: '#FFF4DE' },
  { name: 'Ink', token: 'color.text.primary', hex: '#343434' },
  { name: 'Success', token: 'color.status.success', hex: '#50F268' },
  { name: 'Error', token: 'color.status.error', hex: '#F84A26' },
] as const;
