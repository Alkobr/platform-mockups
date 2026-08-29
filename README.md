# Miadly Phone Mockups

Two design directions for the **27 documented Miadly screens** from `platform-ai/docs/functional/SCREEN-INVENTORY.md`.

| Version | Direction | Run |
|---------|-----------|-----|
| **v1** | Souq (discovery-led) | `npm run dev:v1` → http://localhost:3001 |
| **v2** | Mihrab (task-led Arabic-first) | `npm run dev:v2` → http://localhost:3002 |

## Modes

- **Gallery** — all screens as phone/tablet frames, grouped by role
- **Device** — single interactive phone with screen picker

Toggle with the header control. Switch language (ar/en) and UI state (default / loading / empty / error) in gallery mode.

## Structure

```
platform-mockups/
  shared/     @miadly/mock-shared — registry, i18n, data, shell
  v1/         Souq mockup app
  v2/         Mihrab mockup app
  COVERAGE.md generated screen coverage vs docs
```

## Coverage

```bash
npm run coverage
```

See [DESIGN.md](./DESIGN.md) for the brand contract.
