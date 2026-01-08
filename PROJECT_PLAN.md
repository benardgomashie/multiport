# Benard Gomashie - Multi-Persona Portfolio Website
## Project Plan & Specification

**Project Name:** MultiPort  
**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS  
**Target Launch:** Q1 2026  
**Developer:** Benard Gomashie

---

## 1. PROJECT OVERVIEW

A single-page application (SPA) portfolio website showcasing three distinct professional personas:
1. **Founder & Product Leader** - Healthcare innovation & startup journey
2. **Software Engineer** - Full-stack development & technical expertise
3. **Researcher & Technologist** - Academic research & blockchain systems

### Key Goals:
- Professional, modern, and responsive design
- Easy navigation between different professional identities
- Shareable direct links for each persona
- SEO-optimized for all three profiles
- Fast loading and excellent UX

---

## 2. SITE ARCHITECTURE

### 2.1 URL Structure
```
/ (root)                    → Landing page with 3 persona cards
/founder                    → Founder & CEO persona
/developer                  → Software Engineer persona
/researcher                 → Researcher & Technologist persona
/contact                    → Unified contact page
```

### 2.2 Navigation Flow
```
Landing Page (/)
    ├── Hero Section (Name, tagline, photo)
    ├── Three Persona Cards (clickable)
    │   ├── Card 1: Founder & Product Leader
    │   ├── Card 2: Software Engineer
    │   └── Card 3: Researcher & Technologist
    └── Footer (Social links, contact CTA)

Each Persona Page
    ├── Header (with mode switcher)
    ├── Hero/Intro Section
    ├── About/Summary
    ├── Skills/Expertise
    ├── Projects/Experience
    ├── Education/Credentials
    └── CTA (Contact or View Other Personas)
```

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette
**Neutral Base:**
- Background: `#FAFAFA` (light gray)
- Text Primary: `#1A1A1A` (near black)
- Text Secondary: `#6B7280` (gray)

**Persona-Specific Accent Colors:**
- **Founder:** `#10B981` (Green) - Growth, health, innovation
- **Developer:** `#3B82F6` (Blue) - Trust, technology, professionalism
- **Researcher:** `#8B5CF6` (Purple) - Knowledge, academia, blockchain

### 3.2 Typography
- **Headings:** Inter (Bold, 600-700 weight)
- **Body:** Inter (Regular, 400 weight)
- **Code/Technical:** JetBrains Mono

### 3.3 UI Components
- Smooth transitions between sections
- Card-based layouts
- Glassmorphism effects (subtle)
- Smooth scroll animations
- Responsive grid system (mobile-first)

---

## 4. CONTENT STRUCTURE

### 4.1 Landing Page (`/`)
**Hero Section:**
- Name: BENARD YAO GOMASHIE
- Profile photo (profile.jpg)
- Animated tagline: "Founder • Developer • Researcher"
- Location: Accra, Ghana
- Quick social links (GitHub, LinkedIn, Email)

**Persona Cards (3 interactive cards):**
Each card includes:
- Icon/visual representation
- Persona title
- 2-3 sentence description
- "Explore" CTA button
- Hover effect with accent color

**Footer:**
- Copyright
- Contact link
- Social media icons

---

### 4.2 Founder & Product Leader (`/founder`)

**Sections:**

1. **Hero**
   - Title: "Building Healthcare Solutions for Africa"
   - Subtitle: "Founder & CEO of Yom Health"
   - Profile image with green accent

2. **About**
   - Vision statement
   - Startup journey narrative
   - Impact metrics (users reached, professionals onboarded, etc.)

3. **Yom Health Platform**
   - Problem statement
   - Solution overview
   - Key features (GPS matching, Firebase auth, real-time dashboards)
   - Tech stack used
   - Screenshots/mockups (if available)

4. **Leadership Experience**
   - Team coordination
   - Stakeholder management
   - Product strategy
   - Legal & compliance navigation

5. **Impact & Vision**
   - Healthcare access improvement
   - Community engagement
   - Future roadmap

6. **Skills Highlight**
   - Product Strategy
   - System Architecture
   - Team Leadership
   - Stakeholder Communication

7. **CTA**
   - "Let's Build Something Together"
   - Contact form/email

---

### 4.3 Software Engineer (`/developer`)

**Sections:**

1. **Hero**
   - Title: "Full-Stack Developer & Digital Craftsman"
   - Subtitle: "Building scalable web applications with React, Django & Next.js"
   - Profile image with blue accent

2. **Technical Skills**
   - Frontend: React.js, Next.js, JavaScript, TypeScript
   - Backend: Django, Django REST Framework, Python
   - Database: MySQL, PostgreSQL, Firebase
   - Tools: Git, Docker, AWS (basics), Figma

3. **Featured Projects**
   
   **Project 1: Yom Health Platform**
   - Tech stack badges
   - Key features
   - Technical challenges solved
   - GitHub link (if public)

   **Project 2: Nexa (Location-Based Social App)**
   - Description
   - Architecture highlights
   - Tech stack
   - GitHub link

   **Project 3: Freelance Work**
   - Client projects overview
   - Technologies used
   - Problem-solving examples

4. **Professional Experience**
   - Freelance Web Developer (2022-Present)
   - Key achievements
   - Client satisfaction metrics

5. **Technical Approach**
   - Development philosophy
   - Code quality practices
   - Collaboration style

6. **Open Source / GitHub**
   - Link to GitHub profile
   - Notable repositories

7. **CTA**
   - "Available for Freelance & Full-Time Opportunities"
   - Download CV button
   - Contact form

---

### 4.4 Researcher & Technologist (`/researcher`)

**Sections:**

1. **Hero**
   - Title: "Exploring Secure Distributed Systems"
   - Subtitle: "MSc Researcher in Blockchain & Edge Computing"
   - Profile image with purple accent

2. **Research Focus**
   - Secure Edge Computing
   - Blockchain & Smart Contracts
   - IoT Security
   - Decentralized Systems

3. **Master's Research**
   - Thesis Title: "Secure Edge Computing Using Blockchain: An Ethereum-Based Model"
   - Abstract/Summary
   - Key findings
   - Methodology (mixed-method research)
   - Technologies used (Solidity, Ethereum, IPFS, Web3.js)

4. **Academic Background**
   - **MSc Information Technology** (BlueCrest University, 2023-2025)
     - Relevant coursework
     - Research areas
   - **BSc Agricultural Extension** (University of Ghana, 2017-2021)
     - Unique interdisciplinary perspective

5. **Technical Expertise**
   - Ethereum Smart Contracts (Solidity)
   - Web3.js, MetaMask, Ganache, Truffle
   - IPFS (Decentralized Storage)
   - Edge Computing Architecture
   - IoT Security Concepts

6. **Research Projects**
   - Ethereum-based edge security system
   - Smart contract development
   - Decentralized data management

7. **Publications & Writing**
   - Master's thesis (unpublished)
   - Academic interests
   - Future research directions

8. **Research Interests**
   - Edge Computing Security
   - Blockchain Applications
   - Internet of Things (IoT)
   - Decentralized Identity
   - Tech for Social Good

9. **CTA**
   - "Open to Research Collaboration & PhD Opportunities"
   - Download thesis abstract
   - Contact for collaboration

---

### 4.5 Contact Page (`/contact`)

**Unified Contact:**
- Contact form (Name, Email, Subject, Message)
- Direct contact info:
  - Email: benardgomashie@gmail.com
  - Phone: +233 55 814 9177
  - Location: Accra, Ghana
- Social links:
  - GitHub: github.com/benardgomashie
  - LinkedIn: linkedin.com/in/benardgomashie
  - Website: yomhealth.com
- Availability status
- Response time expectation

---

## 5. TECHNICAL IMPLEMENTATION

### 5.1 Project Structure
```
multiport/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── founder/
│   │   └── page.tsx            # Founder persona page
│   ├── developer/
│   │   └── page.tsx            # Developer persona page
│   ├── researcher/
│   │   └── page.tsx            # Researcher persona page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Navigation header with mode switcher
│   ├── Footer.tsx              # Shared footer
│   ├── PersonaCard.tsx         # Landing page persona cards
│   ├── Hero.tsx                # Hero section component
│   ├── SkillBadge.tsx          # Skill tags
│   ├── ProjectCard.tsx         # Project showcase cards
│   ├── TimelineItem.tsx        # Experience timeline
│   └── ContactForm.tsx         # Contact form
├── lib/
│   ├── data/
│   │   ├── founder.ts          # Founder content data
│   │   ├── developer.ts        # Developer content data
│   │   └── researcher.ts       # Researcher content data
│   └── utils.ts                # Utility functions
├── public/
│   ├── profile.jpg             # Profile photo
│   ├── yomhealth-screenshot.png
│   └── icons/
├── types/
│   └── index.ts                # TypeScript types
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── PROJECT_PLAN.md
```

### 5.2 Key Features

**1. Persona Switching**
- Seamless navigation between personas
- URL-based routing (/founder, /developer, /researcher)
- Visual accent color changes
- Mode indicator in header

**2. Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images

**3. Performance**
- Next.js App Router (Server Components)
- Image optimization (next/image)
- Lazy loading for images
- Code splitting
- Static generation where possible

**4. SEO Optimization**
- Unique meta tags for each persona page
- Structured data (JSON-LD)
- Semantic HTML
- OpenGraph tags
- Twitter Cards

**5. Accessibility**
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader friendly
- Color contrast compliance (WCAG AA)

**6. Animations**
- Framer Motion for smooth transitions
- Scroll-triggered animations
- Hover effects
- Page transition animations

---

## 6. DEVELOPMENT PHASES

### Phase 1: Foundation (Day 1)
- [ ] Set up Next.js project
- [ ] Configure Tailwind CSS
- [ ] Set up TypeScript types
- [ ] Create basic project structure
- [ ] Install dependencies (framer-motion, lucide-react)

### Phase 2: Core Components (Day 1-2)
- [ ] Build Header component with mode switcher
- [ ] Build Footer component
- [ ] Create PersonaCard component
- [ ] Build landing page layout
- [ ] Implement responsive navigation

### Phase 3: Landing Page (Day 2)
- [ ] Hero section with profile photo
- [ ] Three persona cards
- [ ] Smooth animations
- [ ] Footer with social links

### Phase 4: Persona Pages (Day 2-3)
- [ ] Founder page layout and content
- [ ] Developer page layout and content
- [ ] Researcher page layout and content
- [ ] Shared components (Hero, Skills, Projects)

### Phase 5: Content Integration (Day 3)
- [ ] Create data files for all content
- [ ] Import all CV information
- [ ] Add project details
- [ ] Add skill lists

### Phase 6: Styling & Polish (Day 4)
- [ ] Implement color-coded persona themes
- [ ] Add animations and transitions
- [ ] Fine-tune responsive design
- [ ] Add hover effects

### Phase 7: Contact & Extras (Day 4)
- [ ] Build contact page
- [ ] Add contact form (or mailto link)
- [ ] Implement form validation (if form)
- [ ] Add downloadable CV link

### Phase 8: Testing & Optimization (Day 5)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Accessibility audit

### Phase 9: Deployment (Day 5)
- [ ] Build for production
- [ ] Deploy to Vercel
- [ ] Configure custom domain (if available)
- [ ] Test live site

---

## 7. DEPENDENCIES

```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "eslint": "^8.x",
    "eslint-config-next": "^15.x"
  }
}
```

---

## 8. SUCCESS METRICS

**User Experience:**
- Page load time < 2 seconds
- Mobile-friendly (Google Mobile-Friendly Test)
- Accessibility score > 90 (Lighthouse)

**SEO:**
- All pages indexed by Google
- Unique meta descriptions
- Proper heading hierarchy

**Engagement:**
- Clear CTAs on each page
- Easy navigation between personas
- Professional presentation

---

## 9. FUTURE ENHANCEMENTS (Post-Launch)

**Phase 2 Features:**
- [ ] Blog section for technical articles
- [ ] Dark mode toggle
- [ ] Project case studies with detailed breakdowns
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] Content Management System (CMS) for easy updates
- [ ] Interactive resume/CV viewer
- [ ] Video introductions for each persona

**Phase 3 Features:**
- [ ] Admin panel for content updates
- [ ] Multi-language support (English + local language)
- [ ] Advanced animations and micro-interactions
- [ ] Integration with GitHub API for live repo stats
- [ ] Contact form with email backend (EmailJS / SendGrid)

---

## 10. NOTES & CONSIDERATIONS

1. **Content Priority:** Focus on storytelling, not just listing credentials
2. **Visual Hierarchy:** Use whitespace effectively, don't overcrowd
3. **Call-to-Actions:** Every page should have a clear next step
4. **Authenticity:** Let personality show through, especially in Founder section
5. **Mobile-First:** Most visitors will be on mobile devices
6. **Loading Speed:** Optimize images (profile.jpg should be < 200KB)
7. **Shareable Links:** Each persona page should work as a standalone landing page
8. **Professional Tone:** Balance technical expertise with accessibility

---

## 11. BRAND VOICE BY PERSONA

**Founder:**
- Visionary, passionate, impact-driven
- "Building solutions that matter"
- Emphasize problem-solving and leadership

**Developer:**
- Technical, precise, collaborative
- "Clean code, scalable solutions"
- Emphasize craftsmanship and reliability

**Researcher:**
- Analytical, curious, academic
- "Exploring the future of technology"
- Emphasize innovation and depth

---

**END OF PLAN**

**Next Steps:**
1. Review and approve plan
2. Gather any additional assets (screenshots, logos, etc.)
3. Begin development (Phase 1)
4. Iterative feedback during build

**Estimated Total Development Time:** 3-5 days (focused work)

---

*Plan created: January 7, 2026*  
*Developer: Benard Gomashie*  
*Framework: Next.js 15 + TypeScript + Tailwind CSS*
