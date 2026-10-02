# Go Youn Jung — Portfolio

A premium, dark-themed, highly interactive personal portfolio for a UX/UI designer.
Built with React, Tailwind CSS and Framer Motion, featuring smooth scroll transitions,
micro-interactions and a 3D stacked card deck.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 (via Vite 8) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 13 |
| Icons | lucide-react |

## Getting Started

```bash
npm install
npm run dev      # dev server on http://127.0.0.1:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Design System

| Token | Value |
|---|---|
| Primary background | `#0d1116` |
| Surface / cards | `#14181f` |
| Primary accent | `#00df8f` |
| Accent gradient | `#00df8f` → `#00b373` |
| Primary text | `#ffffff` |
| Secondary text | `#9ca3af` |
| Borders | `rgba(255, 255, 255, 0.1)` |

**Typography** — `Outfit` for display headings (tight tracking, `leading-[0.9]`),
`Inter` for body copy. Labels are uppercase with wide tracking.

## Project Structure

```
src/
├── App.jsx                  # main container
├── main.jsx                 # React entry point
├── index.css                # Tailwind directives + global styles
└── components/
    ├── Navbar.jsx           # fixed glass navbar, smooth-scroll links
    ├── Hero.jsx             # headline, CTAs, draggable hanging ID badge
    ├── About.jsx            # bio, stats, "My Toolkit" skill chips
    ├── RecentWorks.jsx      # 3D stacked card deck + detail panel
    ├── Services.jsx         # 6-stage accordion
    └── Footer.jsx           # contact CTA, links, copyright
```

## Sections

- **Hero** (`#home`) — massive `DESIGN` watermark, outlined `EXPERIENCES.` heading,
  and a draggable ID badge with lanyard physics (`dragElastic`, `dragSnapToOrigin`).
- **About** (`#about`) — multidisciplinary bio, `20+ Awards` / `100% Commitment` stats,
  and a glassmorphism toolkit card with neon glow-on-hover chips.
- **Recent Works** (`#work`) — interactive 3D card stack. Clicking the front card cycles
  it to the back; clicking a back card pulls it to the front. Details cross-fade via
  `AnimatePresence mode="wait"`.
- **Services** (`#services`) — `BRIEFING → ANALYTICS → PROTOTYPING → DESIGN → ADAPTIVE → THE FINAL`,
  animated accordion with height transitions.
- **Footer** (`#contact`) — `CONTACT` watermark, email CTA, menu and social links.

## Customizing Content

- **Portrait** — replace `public/images/portrait.jpg`. The badge crops with
  `object-cover object-top`, so a head-and-shoulders shot works best.
- **Projects** — edit the `projects` array in `src/components/RecentWorks.jsx` and
  replace `public/images/shot-1.jpg` … `shot-4.jpg`.
- **Skills** — edit the `skills` array in `src/components/About.jsx`.
- **Accordion stages** — edit the `stages` array in `src/components/Services.jsx`.
- **Social links & email** — edit the `socials` array and `mailto:` in `src/components/Footer.jsx`.

## Accessibility & Responsiveness

Mobile-first Tailwind utilities; layouts collapse to a single column on small screens.
Sections reveal with `whileInView` and `viewport={{ once: true, margin: "-100px" }}`,
which respects reduced motion through Framer Motion defaults.

## License

Personal portfolio project. All rights reserved.
