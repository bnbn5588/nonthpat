# Nonthpat Wongkham — Personal Portfolio

Personal portfolio website built with Next.js 14, showcasing professional experience, projects, and contact information. Deployed on Vercel.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui (Radix UI) |
| Icons | Lucide React, React Icons |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |

## Pages

| Route | Description |
|---|---|
| `/` | About Me, Experience, Education, Achievements, Certifications, Skills |
| `/projects` | Showcase of 4 projects with screenshots and links |
| `/contact` | Email, Phone, LinkedIn, GitHub |

## Projects Showcased

1. **Line Bot Development** — Expense tracking bot using JavaScript, NodeJS, Firebase, and Oracle ATP
2. **Android Development** — Surveillance data app using Kotlin, Google Sheets API, and Opendata API
3. **Backend API** — Task Management REST API using NodeJS, Express.js, and PostgreSQL on Vercel
4. **IMDB Sentiment Analysis** — CNN+LSTM hybrid model using Python, Scikit-Learn, Pandas, and NumPy

## Features

- Dark mode toggle with `localStorage` persistence and `prefers-color-scheme` support
- Dynamic Open Graph image for link previews on LinkedIn, Twitter, etc.
- Per-page SEO metadata with `title` template
- Auto-generated `/sitemap.xml` and `/robots.txt` for search engine crawling
- Active navigation state highlighting current page
- Responsive layout (`p-6` on mobile, `p-12` on desktop)
- Vercel Analytics and Speed Insights for performance monitoring

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with global metadata
│   ├── page.tsx             # Home entry point
│   ├── home.tsx             # Home page content
│   ├── opengraph-image.tsx  # Dynamic OG image
│   ├── sitemap.ts           # Auto-generated sitemap.xml
│   ├── robots.ts            # Auto-generated robots.txt
│   ├── projects/            # /projects route
│   └── contact/             # /contact route
├── components/
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer
│   ├── theme-toggle.tsx     # Dark mode toggle
│   └── ui/                  # shadcn/ui components
└── lib/
    └── utils.ts             # cn() utility
public/
├── img/                     # Project screenshots
└── doc/                     # PDF certificates and documents
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deployed on Vercel. The `VERCEL_URL` environment variable is used automatically to generate correct sitemap and OG image URLs in production.
