# Gabriel Garalde — Personal Portfolio

---

## Live Website

🔗 **https://pikazoi.github.io/gabriel-portfolio**

---

**Screenshots**:

---

## Description

A personal portfolio website for Gabriel Garalde — a creative technologist specializing in 3D animation (Blender), audio engineering (Audacity), and music production (FL Studio). The site features a dark, sophisticated aesthetic inspired by the Reverse: 1999 game interface, complete with art deco design elements, a custom animated cursor, and smooth Framer Motion transitions.

---

## Technologies Used

| Category | Tools |
|---|---|
| **Frontend Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **UI Components** | shadcn/ui (custom) + Radix UI primitives |
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS v3 |
| **Font** | Bodoni Moda (Google Fonts) |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages + GitHub Actions |

---

## Features

- **Custom animated cursor** — dual-element cursor with lag effect and hover/click states
- **Profile image uploader** — click the frame to upload your photo
- **Skills section** — animated 100 WPM counter + skill bars
- **Projects** — expandable cards with YouTube video embed support
- **Education** — STI College Tanay displayed in an elegant timeline layout
- **Contact** — click-to-copy email and phone with mailto/tel links
- **Art deco aesthetic** — inspired by Reverse: 1999, with ornamental borders and warm amber tones
- **Fully responsive** — works on mobile, tablet, and desktop
- **Smooth scroll** — section-linked navigation with active indicators

---


---


---

## Project Structure

```
gabriel-portfolio/
├── .github/workflows/deploy.yml   ← Auto-deploy GitHub Action
├── src/
│   ├── components/
│   │   ├── ui/                    ← shadcn Card, Badge, Button
│   │   ├── Cursor.tsx             ← Custom animated cursor
│   │   ├── Navigation.tsx         ← Fixed top nav
│   │   ├── Hero.tsx               ← Profile section
│   │   ├── Skills.tsx             ← Skills + WPM counter
│   │   ├── Projects.tsx           ← Projects + video embed
│   │   ├── Education.tsx          ← STI College Tanay
│   │   └── Contact.tsx            ← Email + phone
│   ├── lib/utils.ts               ← shadcn utility (cn)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  ← Global styles + cursor CSS
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---
