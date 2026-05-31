# Gabriel Garalde — Personal Portfolio

> A refined, art deco-inspired personal portfolio website showcasing creative work in 3D animation, audio production, and music creation.

---

## Live Website

🔗 **[https://[your-github-username].github.io/gabriel-portfolio](https://github.com)**

*(Replace `[your-github-username]` with your actual GitHub username after deployment)*

---

## Screenshot

```
[ Add a screenshot of your website here after deployment ]
```

> To add a screenshot: Take a screenshot, save it as `screenshot.png` in the project root, then update this file.

---

## Description

A personal portfolio website for Gabriel Alde — a creative technologist specializing in 3D animation (Blender), audio engineering (Audacity), and music production (FL Studio). The site features a dark, sophisticated aesthetic inspired by the Reverse: 1999 game interface, complete with art deco design elements, a custom animated cursor, and smooth Framer Motion transitions.

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

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/[your-username]/gabriel-portfolio.git
cd gabriel-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173/gabriel-portfolio/
```

---

## How to Deploy to GitHub Pages

### Option A — Automatic (Recommended)

1. Push your code to a GitHub repository named `gabriel-portfolio`
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will auto-deploy on every push to `main`

### Option B — Manual

```bash
npm run deploy
```

---

## Configuration Notes

Before deploying, confirm the `base` in `vite.config.ts` matches your repo name:

```ts
// vite.config.ts
export default defineConfig({
  base: '/gabriel-portfolio/',   // ← must match your GitHub repo name
  ...
})
```

---

## Customization

| What | Where |
|---|---|
| Profile photo | Click the framed box in the Hero section |
| Project videos | Click any project card → paste YouTube URL |
| Name / title | `src/components/Hero.tsx` |
| Contact info | `src/components/Contact.tsx` |
| Colors | `src/index.css` CSS variables + `tailwind.config.js` |

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

*Designed with ◆ by Gabriel Garalde*
