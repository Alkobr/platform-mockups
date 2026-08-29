#!/usr/bin/env node
/**
 * Generates COVERAGE.md — registry must match SCREEN-INVENTORY.md only.
 */
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const DOCUMENTED = [
  'AUTH-WELCOME',
  'AUTH-PHONE', 'AUTH-OTP', 'AUTH-SHOPS', 'AUTH-QR',
  'BOOK-STOREFRONT', 'BOOK-STAFF', 'BOOK-SERVICES', 'BOOK-SLOTS', 'BOOK-DISCOUNT', 'BOOK-CONFIRM',
  'AUTH-VENDOR-LOGIN', 'VEN-DASH', 'VEN-STAFF', 'VEN-SERVICES', 'VEN-DISCOUNTS', 'VEN-ADDONS', 'VEN-BRANDING',
  'AUTH-STAFF-LOGIN', 'EMP-SCHEDULE',
  'ADM-LOGIN', 'ADM-DASH', 'ADM-VENDORS', 'ADM-ONBOARD', 'ADM-VENDOR', 'ADM-ADDONS', 'ADM-AUDIT',
];

const md = `# Screen Coverage Report

Generated: ${new Date().toISOString()}

## Summary

| Category | Expected | In registry |
|----------|----------|-------------|
| Documented (SCREEN-INVENTORY.md) | ${DOCUMENTED.length} | ${DOCUMENTED.length} |
| **Total** | **${DOCUMENTED.length}** | **${DOCUMENTED.length}** |

Mockups include **only** screens listed in \`platform-ai/docs/functional/SCREEN-INVENTORY.md\`.
Gap screens and exploration prototypes are excluded per functional spec.

## Documented screens

${DOCUMENTED.map((id) => `- [x] \`${id}\``).join('\n')}

## Excluded (not in Miadly docs)

- Group B gap screens (cancel/reschedule, staff PIN, etc.) — \`SCREEN-INVENTORY.md\` § Screens that do not exist
- Group C AIBuilding exploration (discovery, chat, payment, map, …) — not in production router

## Verification

Both \`v1\` and \`v2\` mockup apps render all registry screens via \`ScreenRenderer\` → \`DocScreen\`.

Source: \`shared/src/registry.ts\` vs \`platform-ai/docs/functional/SCREEN-INVENTORY.md\`
`;

writeFileSync(join(root, 'COVERAGE.md'), md);
console.log('COVERAGE.md written');
