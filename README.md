# Ritz Interiors Group — Premium Multi-page Website

A real React + Vite + React Router prototype for Ritz Interiors Group, built from the approved art direction and the supplied project imagery.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects are already included in `public/_redirects`.
- The contact form uses Netlify Forms (`project-inquiry`).

## Routes

- `/`
- `/projects`
- `/projects/:slug`
- `/expertise`
- `/bespoke`
- `/process`
- `/studio`
- `/contact`

## Notes before final client launch

- EN content is implemented. The header is structured for a later independent FR version; no mixed-language page content is used.
- No unverified phone number or email address has been invented.
- Project dates, awards, team size and other unsupported claims are intentionally omitted.
- Replace or extend project metadata only when Ritz supplies confirmed names, dates and locations.
