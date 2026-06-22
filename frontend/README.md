# Damarara Tea & Coffee — Website

Official website for **Damarara Tea & Coffee Ltd.**, a premium Rwandan tea and coffee brand from the northern highlands. Built as a fully client-side React application with no backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Compiler | React Compiler (`babel-plugin-react-compiler`) |
| Language | JavaScript (JSX) — no TypeScript |

---

## Project Structure

```
damarara-website/
└── frontend/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src/
    │   ├── assets/
    │   │   ├── damarara_logo.jpg
    │   │   ├── hero.png
    │   │   ├── damarara-products.png
    │   │   └── product_images/
    │   │       ├── 01.jpeg  — Instant Coffee jars + box (gift set)
    │   │       ├── 02.jpeg  — Instant Coffee jars (alternate angle)
    │   │       ├── 03.jpeg  — Instant Coffee sachets (box of 50)
    │   │       ├── 04.jpeg  — Dark Roasted Ground Coffee bags
    │   │       ├── 05.jpeg  — Rwanda Coffee Blend (lifestyle)
    │   │       ├── 06.jpeg  — Coffee Yacu Arabica bags
    │   │       ├── 07.jpeg  — Damarara Rwanda Tea bags + box
    │   │       ├── 08.jpeg  — Premium Rwandan Tea full range
    │   │       ├── 09.jpeg  — Premium Rwandan Tea variety set
    │   │       └── 10.jpeg  — Founder & CEO portrait
    │   ├── components/
    │   │   ├── Navbar.jsx   — Fixed header, mobile sidebar drawer
    │   │   ├── Hero.jsx     — Auto-sliding hero section (homepage)
    │   │   └── Footer.jsx   — Site-wide footer
    │   ├── pages/
    │   │   ├── About.jsx    — About page
    │   │   ├── Products.jsx — Products catalogue page
    │   │   ├── History.jsx  — Heritage & journey page
    │   │   └── Contact.jsx  — Contact form + customer review form
    │   ├── App.jsx          — Root component, router, global layout
    │   ├── main.jsx         — Entry point
    │   └── index.css        — Tailwind import + custom keyframes
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    └── package.json
```

---

## Pages

### `/` — Home
Full-screen auto-advancing hero slideshow. Three product images rotate every 5 seconds with a 1.5 s cross-fade. An animated text card slides in from the left with a tagline, two paragraphs, and CTA buttons ("Explore Products" / "Our Story"). Dot indicators at the bottom allow manual navigation.

### `/about` — About Us
Three-section page:
1. **Hero image section** — Full-width tea plantation background with a dark overlay, left-aligned brand story text, and a "Learn More" CTA linking to `/history`.
2. **Founder section** — Horizontal card with the Founder & CEO's circular portrait on the left and four icon-trait pills on the right (Sustainability Champion, East Africa & Beyond, Excellence in Every Batch, Farmer Community Builder).
3. **Pillars section** — Three-column grid: Our Mission, Our Vision, Our Values — each with a Lucide icon in an orange circle.

### `/products` — Our Products
Dark page with warm orange/rust radial glow background. Centered "OUR PRODUCTS" heading. 3-column responsive grid (1 on mobile, 2 on tablet, 3 on desktop). Each card shows a product photo, a category badge (Coffee / Tea), product name, and a short description. Cards lift slightly on hover with a subtle image zoom. All 9 product photos are used.

### `/history` — Our Heritage
Warm espresso-toned background (radial gradient, not flat black). Centred "Our Heritage" header at the top. Below, a two-column layout:
- **Left (sticky)** — Heritage story with a large drop-cap "I", three body paragraphs, and a stat row (1,800m+ Elevation · 100% Hand-Picked · Rwanda Origin).
- **Right** — "The Journey" vertical timeline with 4 numbered steps and Lucide icons: Highland Harvest → Expert Processing → Quality Control → Refined Packaging.

### `/contact` — Get In Touch
Two sections:
1. **Contact section** — Left: three hover-lift info cards (Email, Phone, Location) and three social-media pills (Instagram, Facebook, X). Right: a dark form card with a top orange gradient stripe, Name + Email side by side, Subject, Message textarea, and Send button. Submitting shows a confirmation state.
2. **Review section** — "Share Your Experience" with an interactive 5-star rating (hover + click, live label: Poor → Excellent), Name, optional Product selector, Review textarea, and Submit button. Submitting shows the selected stars and a thank-you state.

---

## Shared Components

### `Navbar`
Fixed to the top on all pages (`z-9999`). Dark semi-transparent background with `backdrop-blur`.
- **Desktop (lg+):** Logo + brand name left, five nav links right.
- **Mobile:** Hamburger icon opens a full-height slide-in sidebar from the left with an overlay. Body scroll is locked while open.

### `Footer`
Rendered on every page below the route content. Four-column grid:
- **Brand column:** Logo, tagline, four social icon buttons (Instagram, Facebook, X, LinkedIn) as square tiles.
- **Products column:** Five product category links.
- **Company column:** About, History, Products, Contact links.
- **Follow column:** Social platform links with their SVG brand icons.
- **Bottom bar:** Copyright + "Proudly Rwandan." left, Privacy Policy + Terms of Use right.

---

## Brand Palette

| Token | Hex | Usage |
|---|---|---|
| Near-black | `#0f0c11` | Primary page background |
| Deep espresso | `#140d09` / `#110a06` | History page background |
| Footer dark | `#08050a` | Footer background |
| Orange accent | `#e07748` | Primary brand colour, headings, icons |
| Rust | `#cc5832` | Gradient partner, underline bars |
| Cream | `#f1ece8` | High-emphasis body text |
| Muted cream | `#cfc7c9` / `#a89b9a` | Body text, descriptions |
| Muted dark | `#7a6f6c` | Footer text |

---

## Running Locally

```bash
cd frontend
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # ESLint check
```

---

## Current Status

| Page | Status |
|---|---|
| Home (Hero) | ✅ Complete |
| About | ✅ Complete |
| Products | ✅ Complete |
| History | ✅ Complete |
| Contact + Reviews | ✅ Complete |
| Navbar | ✅ Complete |
| Footer | ✅ Complete |
| Backend / API | ⬜ Not started |
| Form submission | ⬜ Frontend only (no backend wired) |
| Authentication | ⬜ Not started |

---

## Notes

- The contact and review forms are **frontend-only** — submissions show a confirmation state but do not send data anywhere. A backend or a service like EmailJS / Formspree needs to be connected.
- Social media links (`href="#"`) are placeholders — replace with real profile URLs when accounts are ready.
- The founder photo (`10.jpeg`) and all product photos are real brand assets stored in `src/assets/product_images/`.
- The About page hero uses an Unsplash image (tea plantation at sunset). Replace with a proprietary photo when available.
