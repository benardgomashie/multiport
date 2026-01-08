# MultiPort - Benard Gomashie Portfolio

A modern, multi-persona portfolio website showcasing three distinct professional identities:

- **Founder & Product Leader** - Healthcare innovation & startup journey
- **Software Engineer** - Full-stack development & technical expertise
- **Researcher & Technologist** - Academic research & blockchain systems

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Project Structure

```
multiport/
├── app/                    # Next.js app router pages
│   ├── founder/           # Founder persona page
│   ├── developer/         # Developer persona page
│   ├── researcher/        # Researcher persona page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── lib/                   # Utilities and data
│   └── data/             # Persona content data
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### 🎨 Design
- Clean, modern UI with color-coded persona themes
- Responsive design (mobile-first)
- Smooth transitions and animations
- Accessible navigation

### 🚀 Performance
- Server-side rendering with Next.js
- Optimized images
- Code splitting
- Fast page loads

### 🎯 SEO
- Unique meta tags for each page
- Semantic HTML
- OpenGraph tags
- Structured data

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

```bash
npm run build
```

## Customization

### Update Content

Edit the data files in `lib/data/`:
- `founder.ts` - Founder profile content
- `developer.ts` - Developer profile content
- `researcher.ts` - Researcher profile content

### Change Colors

Edit `tailwind.config.ts` to modify persona colors:

```typescript
colors: {
  founder: {
    light: "#6EE7B7",
    DEFAULT: "#10B981",
    dark: "#059669",
  },
  // ... other colors
}
```

### Add/Remove Sections

Components are modular. Edit page files in `app/` to add or remove sections.

## Contact

**Benard Yao Gomashie**
- Email: benardgomashie@gmail.com
- Phone: +233 55 814 9177
- Location: Accra, Ghana
- Website: [https://yomhealth.com](https://yomhealth.com)

## License

© 2026 Benard Yao Gomashie. All rights reserved.
  
