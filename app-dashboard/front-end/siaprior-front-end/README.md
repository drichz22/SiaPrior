# SiaPrior (Next.js App Router + TypeScript)

A minimal, working architecture that mirrors your wireframes: login, signup, dashboard seat maps, gauge, prediction line chart, violation bar chart, and info page.

## Quick start
```bash
pnpm create next-app@latest siaprior-next --ts --src-dir --app --eslint --tailwind false
cd siaprior-next
# Replace the generated files with the contents of this repo OR simply unzip the provided archive here.
pnpm i
pnpm dev
```

Alternatively, if you downloaded this project as-is:
```bash
pnpm i
pnpm dev
```

## Notes
- No external chart libs; charts are tiny SVG components (`SimpleLine`, `SimpleBar`, `Gauge`).
- Styling uses plain CSS in `src/app/globals.css`.
- You can swap SVG charts for Recharts/Chart.js later if desired.
