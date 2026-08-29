# Screen Coverage Report

Generated: 2026-08-29T13:18:19.056Z

## Summary

| Category | Expected | In registry |
|----------|----------|-------------|
| Documented (SCREEN-INVENTORY.md) | 27 | 27 |
| **Total** | **27** | **27** |

Mockups include **only** screens listed in `platform-ai/docs/functional/SCREEN-INVENTORY.md`.
Gap screens and exploration prototypes are excluded per functional spec.

## Documented screens

- [x] `AUTH-WELCOME`
- [x] `AUTH-PHONE`
- [x] `AUTH-OTP`
- [x] `AUTH-SHOPS`
- [x] `AUTH-QR`
- [x] `BOOK-STOREFRONT`
- [x] `BOOK-STAFF`
- [x] `BOOK-SERVICES`
- [x] `BOOK-SLOTS`
- [x] `BOOK-DISCOUNT`
- [x] `BOOK-CONFIRM`
- [x] `AUTH-VENDOR-LOGIN`
- [x] `VEN-DASH`
- [x] `VEN-STAFF`
- [x] `VEN-SERVICES`
- [x] `VEN-DISCOUNTS`
- [x] `VEN-ADDONS`
- [x] `VEN-BRANDING`
- [x] `AUTH-STAFF-LOGIN`
- [x] `EMP-SCHEDULE`
- [x] `ADM-LOGIN`
- [x] `ADM-DASH`
- [x] `ADM-VENDORS`
- [x] `ADM-ONBOARD`
- [x] `ADM-VENDOR`
- [x] `ADM-ADDONS`
- [x] `ADM-AUDIT`

## Excluded (not in Miadly docs)

- Group B gap screens (cancel/reschedule, staff PIN, etc.) — `SCREEN-INVENTORY.md` § Screens that do not exist
- Group C AIBuilding exploration (discovery, chat, payment, map, …) — not in production router

## Verification

Both `v1` and `v2` mockup apps render all registry screens via `ScreenRenderer` → `DocScreen`.

Source: `shared/src/registry.ts` vs `platform-ai/docs/functional/SCREEN-INVENTORY.md`
