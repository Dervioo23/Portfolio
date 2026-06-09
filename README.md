# Dervio Rahmatdianto — Portfolio

A modern, interactive, responsive, and premium personal portfolio for an **Applied AI Engineer & Automation System Builder**. Built with React, Tailwind CSS, and Framer Motion, with a cinematic image-sequence hero.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom dark navy / blue-gray + soft cyan design system)
- **Framer Motion** (smooth, functional animations)
- Canvas-based **image-sequence hero** (plays 192 frames like a looping muted video — lightweight, ~4 MB)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Project Structure

```
.
├── index.html                 # SEO meta, fonts, hero poster preload
├── public/
│   ├── sequence/              # 192 hero frames (ezgif-frame-001..192.jpg)
│   └── images/                # showcase-1.png (OG + about), showcase-2.png
├── src/
│   ├── App.jsx                # section composition
│   ├── index.css              # design tokens, glass/buttons, reduced-motion
│   ├── i18n/
│   │   ├── translations.js    # ← EDIT ALL TEXT/LINKS HERE (English + Indonesian)
│   │   └── LanguageContext.jsx# language state (persisted), useLang() hook
│   └── components/
│       ├── Navbar.jsx
│       ├── HeroSection.jsx
│       ├── ImageSequence.jsx  # the canvas frame player
│       ├── AboutSection.jsx
│       ├── ExpertiseSection.jsx
│       ├── ProjectsSection.jsx
│       ├── SkillsSection.jsx
│       ├── ExperienceTimeline.jsx
│       ├── ProcessSection.jsx
│       ├── ServicesSection.jsx
│       ├── ContactSection.jsx
│       ├── Footer.jsx
│       └── ui/                # Icons, Reveal, SectionHeading, Particles
```

## Customizing

- **All copy, projects, skills, experience, and links** live in [`src/i18n/translations.js`](src/i18n/translations.js), with parallel `en` and `id` (Indonesian) bundles. Edit both languages there — components read the active one via `useLang()`.
- **Language switch**: the navbar has an ID / EN toggle. The choice is saved to `localStorage` and defaults to the browser language. Language-independent values (links, tech-stack names, accents, icons) are shared at the top of `translations.js`.
- **Contact / social links**: update `email`, `linkedin`, `github`, `whatsapp` in the shared `links` object at the top of `translations.js`. GitHub and WhatsApp are placeholders (`#`) — replace when ready.
- **Project links**: each project has `links.caseStudy`, `links.demo`, `links.source` (placeholders `#`).
- **Colors**: tweak the palette in [`tailwind.config.js`](tailwind.config.js) (`navy`, `cyanic`).
- **Fonts**: Inter / Space Grotesk / Sora, loaded in `index.html`.

## The Hero Image Sequence

The hero uses [`ImageSequence.jsx`](src/components/ImageSequence.jsx) instead of a `<video>` tag, because the source asset is a frame sequence. It behaves like `autoplay muted loop playsInline object-cover`:

- Preloads frames, shows a **poster** (`/sequence/ezgif-frame-096.jpg`) until ready — no empty flash.
- **`prefers-reduced-motion`** → renders a single static frame (no animation).
- **Pauses when the tab is hidden** to save CPU/battery.
- **Falls back** to the poster image if frames fail to load.

To swap in a real `.mp4` later, replace `<ImageSequence />` in `HeroSection.jsx` with a `<video autoPlay muted loop playsInline className="h-full w-full object-cover" poster="/images/showcase-1.png">`.

To regenerate frames from a new clip:
```bash
# example with ffmpeg
ffmpeg -i hero.mp4 -vf fps=24 public/sequence/ezgif-frame-%03d.jpg
```
Then update `frameCount` / `fps` props in `HeroSection.jsx`.

## Deploy

This is a static site. After `npm run build`, deploy the `/dist` folder to any static host:

- **Vercel / Netlify**: framework preset **Vite**, build command `npm run build`, output `dist`.
- **GitHub Pages / Cloudflare Pages**: upload `dist`.

---

© 2026 Dervio Rahmatdianto. Built with AI, data, and real-world systems.
