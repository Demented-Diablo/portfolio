# Gavin Sharma — Portfolio

Personal portfolio website built with React and Vite. Showcases projects, skills, and a bit about who I am outside of code.

**Live:** [gavin-sharma.com](https://gavin-sharma.com)

---

## Tech Stack

| Area | Tech |
|---|---|
| Framework | React 19 + Vite 6 |
| Routing | React Router v7 |
| Styling | CSS Modules + Bootstrap 5 |
| Animations | GSAP 3 |
| Image Storage | Supabase Storage |
| Hosting | AWS S3 + Route 53 + HTTPS |
| Carousels | Swiper 11 |
| Icons | Devicon, React Icons |

---

## Pages

- **`/`** — Landing page with hero, projects carousel, about section, and contact
- **`/extras`** — Games I play, Steam/Epic links, VSCO photography
- **`/resume`** — Inline PDF viewer with download button
- **`/contact`** — Contact form

---

## Running Locally

```bash
npm install
npm run dev
Runs on http://localhost:5173

Building

npm run build
Output goes to dist/. Deploy by syncing dist/ to your S3 bucket.

Project Structure

src/
├── components/       # Header, Footer, Home, About, Projects, Contact, AboutExtras
├── pages/            # LandingPage, AboutExtrasPage, ResumePage
├── styles/           # Per-component CSS files
└── main.jsx          # App entry point

public/
└── Resume.pdf        # Served at /Resume.pdf
Deployment (AWS S3)
Run npm run build
Sync dist/ to your S3 bucket
Upload public/Resume.pdf to the bucket root
S3 static hosting is configured with index.html as both the index and error document (required for React Router client-side routing)
Route 53 handles DNS, CloudFront or S3 bucket policy handles HTTPS
Notes
All images are hosted on Supabase Storage and loaded with a fade-in on load to avoid flash
Background images use a fixed position: fixed div rather than background-attachment: fixed to avoid a Chrome bug where overflow on a parent element silently reverts fixed attachment to scroll
/extras uses a plain <a href> (not React Router <Link>) so the browser does a real navigation — this guarantees the page starts at the top regardless of scroll position on the previous page
