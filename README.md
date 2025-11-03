# Ben Efron · Computational Neuroscience Portfolio

A statically generated personal site built with Next.js 14, React 18, Tailwind CSS, and Framer Motion. The site highlights research focus areas, an animated career timeline, publications, and technical skills with a crisp dark theme inspired by Cvless portfolios.

## Features

- **Hero spotlight** with quick stats and primary calls-to-action.
- **Research highlight** section combining narrative copy with imagery.
- **Focus area grid** presenting domains of expertise at a glance.
- **Animated trajectory timeline** driven by Framer Motion.
- **Publications** list with quick links to external resources.
- **Skills column layout** and contact cards for rapid outreach.

## Getting Started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Production build and lint checks:

```bash
npm run lint
npm run build
```

The dev server runs on [http://localhost:3000](http://localhost:3000) by default.

## Project Structure

- `app/` – App Router layout, global styles, and page composition.
- `components/` – Reusable UI sections (hero, focus grid, timeline, etc.).
- `content/data.ts` – Structured data feeding hero, stats, focus areas, timeline, publications, and contact info.
- `public/` – Static assets (images, documents).
- `.vscode/tasks.json` – VS Code task to launch the Next.js dev server.

## Deployment

The site builds as a fully static export via `npm run build`. Deploy by serving the generated `.next` output on any static hosting solution that supports Next.js (GitHub Pages via actions, Vercel, Netlify, etc.).

## License

All content © Ben Efron. Code is provided without an explicit license; contact the author for reuse permissions.
