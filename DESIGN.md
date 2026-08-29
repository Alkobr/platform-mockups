# Miadly Design Contract (Mockups)

Brand contract for `platform-mockups/v1` and `platform-mockups/v2`. Both directions MUST use only these tokens.

## Brand colors (locked)

| Role | Hex | Token |
|------|-----|-------|
| Primary | `#1E4988` | `color.brand.primary` |
| Accent (CTA) | `#F89826` | `color.brand.accent` |
| Background | `#FFF4DE` | `color.background.default` |
| Ink | `#343434` | `color.text.primary` |
| Success | `#50F268` | `color.status.success` |
| Error | `#F84A26` | `color.status.error` |

## Typography

- **Arabic + Latin:** IBM Plex Sans Arabic + IBM Plex Sans (Cairo fallback)
- **Scale:** Display 32px, H1 24px, H2 20px, H3 18px, Body 14–16px, Caption 12px
- **Arabic:** no letter-spacing; numerals/currency in LTR isolate

## Spacing & radii

- Base unit: 4px (`space.1` = 4px … `space.16` = 64px)
- Radii: sm 6px, md 10px, lg 12px, xl 16px, full 9999px

## Motion

- fast 120ms, normal 200ms, slow 320ms
- Honor `prefers-reduced-motion`

## Directions

- **v1 Souq:** discovery-led, cream canvas, image-forward cards, 5-tab bottom nav
- **v2 Mihrab:** task-led Arabic-first, white surfaces on cream, border-led, one accent CTA per screen

## Prohibited

- New hex, type sizes, or radii outside tokens
- Dark mode, teal/slate/purple gradients, success green as button fill
- Outfit, Poppins, Inter Display for headings

Source: `platform-ai/docs/design/*`
