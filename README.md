# Abdelkarim Soussane — Portfolio

Personal developer portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Features a scroll-driven project stack, custom contact form, animated process and pricing sections, and a devicons-powered tech stack grid.

**Live site:** _link after deployment_

---

## Tech Stack

- **Framework** — Next.js 16 (App Router, webpack)
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion v12
- **Language** — TypeScript
- **Contact form** — Formspree
- **Fonts** — Bebas Neue (headings), JetBrains Mono (body)

---

## Project Structure

```
src/
  app/
    page.tsx          # All sections — single-page layout
    layout.tsx        # Font loading, metadata
    globals.css       # Base styles, keyframe animations
  components/
    framer/           # Framer-exported components + custom runtime shim
public/
  profile.jpg         # Profile photo
  logo.svg            # Logo (navbar + footer)
  digicard.png        # Project image
  surfoodsave.png     # Project image
  secondhand.png      # Project image
  convertiverse.png   # Project image
  cv.pdf              # CV (English)
  cv-zh.pdf           # CV (Chinese)
```

---

## Key Customisation Points

All content is defined at the top of `src/app/page.tsx`:

| Constant        | What it controls                                                    |
| --------------- | ------------------------------------------------------------------- |
| `const A`       | Accent colour (currently `#a78bfa`)                                 |
| `PROJECTS`      | Project cards — title, description, tags, image, GitHub, demo links |
| `PROCESS_STEPS` | Work process section — 4 steps                                      |
| `PRICING_PLANS` | Pricing cards — name, price, features                               |
| `TOOLS`         | Tech stack grid — icons pulled from devicons CDN                    |
| `EXPERIENCE`    | Timeline entries                                                    |
| `SKILLS`        | Skill groups                                                        |
| `TESTIMONIALS`  | Testimonial cards                                                   |
| `FAQ_ITEMS`     | Accordion questions and answers                                     |
| `FORMSPREE_ID`  | Contact form endpoint ID                                            |

---

## Local Development

```bash
npm install
npm run dev -- --port 3001
```

Open [http://localhost:3001](http://localhost:3001).

> Turbopack is disabled (`--webpack` flag) for ARM64 compatibility.

---

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io):

1. Sign up at formspree.io with your email
2. Create a new form → copy the form ID
3. Replace `FORMSPREE_ID` in `src/app/page.tsx`

---

## License

© 2025 Abdelkarim Soussane. All rights reserved.
