# Pradnish Portfolio

This project is a cinematic, dark-mode personal portfolio website for Pradnish Chintada. It is built with React, Vite, Tailwind CSS, and GSAP to create a premium single-page experience inspired by modern award-winning portfolio layouts.

The portfolio is structured as a long-form landing page with a hero section, about narrative, project showcase, skills cloud, experience timeline, contact form, and footer CTA. Every section is designed to feel premium, immersive, and motion-driven.

## Overview

- Stack: React 18 + Vite + Tailwind CSS + GSAP + react-icons
- Style: premium dark aesthetic, sharp typography, rich gradients, soft borders, and high-contrast motion
- Experience: single-page portfolio with smooth scroll navigation and interactive cards
- Goal: present the developer as a full-stack product builder with both design and engineering capability

## Project structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── public/
│   ├── audio/
│   │   └── loop.mp3
│   ├── fonts/
│   │   ├── circularweb-book.woff2
│   │   ├── general.woff2
│   │   ├── robert-medium.woff2
│   │   ├── robert-regular.woff2
│   │   └── zentry-regular.woff2
│   ├── img/
│   │   ├── about.webp
│   │   ├── about2.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.mp4
│   │   ├── gallery-3.gif
│   │   ├── gallery-4.png
│   │   ├── gallery-5.webp
│   │   └── ...
│   ├── videos/
│   │   ├── hero-1.mp4
│   │   ├── hero-2.mp4
│   │   ├── hero-3.mp4
│   │   ├── hero-4.mp4
│   │   ├── feature-1.mp4
│   │   ├── feature-2.mp4
│   │   ├── feature-3.mp4
│   │   ├── feature-4.mp4
│   │   └── feature-5.mp4
│   └── resume.pdf
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── About.jsx
│       ├── AnimatedTitle.jsx
│       ├── Button.jsx
│       ├── Contact.jsx
│       ├── Experience.jsx
│       ├── Features.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Story.jsx
│       ├── VideoPreview.jsx
│       └── ...
├── dist/
└── README.md
```

## Main app composition

The full portfolio is assembled in [src/App.jsx](src/App.jsx):

```jsx
<main className="relative min-h-screen w-screen overflow-x-hidden bg-obsidian">
  <NavBar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />
  <Footer />
</main>
```

This gives the website a classic one-page portfolio flow: top navigation → hero → story → work → skills → journey → contact → footer.

## Detailed section breakdown

### 1) Navbar
File: [src/components/Navbar.jsx](src/components/Navbar.jsx)

Purpose:
- Fixed top navigation for quick anchor scrolling
- Contains portfolio branding and section links
- Includes an audio toggle with animated equalizer bars

Behavior:
- Uses `useWindowScroll` from `react-use`
- Shows/hides the nav based on scroll direction
- Adds a floating glass-like effect when the user scrolls down
- Uses GSAP to animate nav translate and opacity
- Links point to: About, Projects, Skills, Experience, Contact

Key features:
- `floating-nav` class gives a surfaced dark card look
- `indicator-line` bars animate when audio is active
- `nav-hover-btn` creates underline reveal on hover

### 2) Hero section
File: [src/components/Hero.jsx](src/components/Hero.jsx)

Purpose:
- Establishes the cinematic first impression
- Shows the developer identity and immediate call-to-action

Visual structure:
- Full viewport video background with layered motion
- Large text: “Pradnish” and “PRAD.”
- Subheading: “Full Stack Dev. Designer. Problem Solver.”
- CTA button: “View My Work” scrolls down to projects

Interaction details:
- `currentIndex` cycles through four background videos
- `hasClicked` toggles a mini-video expansion effect
- `next-video` overlay expands from center to full frame
- Pressing the mini preview triggers a transform/scale animation
- Loader spinner appears while videos are still loading

Animation details:
- `gsap.set` and `gsap.from` used for mask transitions
- `clipPath` creates a custom polygon reveal
- `ScrollTrigger` ties the video panel to scroll behavior
- `power1.inOut` easing creates smooth motion

### 3) About section
File: [src/components/About.jsx](src/components/About.jsx)

Purpose:
- Personal introduction and positioning
- Frames the portfolio around front-end engineering and product building

Structure:
- Section label: “About Me”
- Animated title built from word-by-word reveal
- Centered clip-path image expansion
- Short bio text with strong positioning language

Animation details:
- ScrollTrigger timeline with `pin: true` creates a cinematic reveal
- `.mask-clip-path` expands from a 200×200 card to full-screen reveal
- Text is revealed as the image sits in front of the content

### 4) Projects section
File: [src/components/Projects.jsx](src/components/Projects.jsx)

Purpose:
- Showcase selected work and technical depth
- Highlights real projects with live/demo and GitHub links

Card behavior:
- `BentoTilt` uses mouse-move tracking to create a 3D tilt effect
- Cards rotate along X and Y axes based on cursor position
- Background media (video or image) is layered with dark overlays
- Hover buttons show a radial gradient spotlight

Projects represented:
- Hotel Sentiment
- GroomIQ
- UniRide
- SRM Sports Council / club related product
- Additional portfolio-style showcase cards with project media

Each project card includes:
- big title in custom specialty font
- summary description
- technology badges
- Live and Code actions

### 5) Skills section
File: [src/components/Skills.jsx](src/components/Skills.jsx)

Purpose:
- Display technical stack and toolset in a clean, scannable way

Layout:
- Left column: animated title
- Right column: grouped skill sets

Skill groups:
- Frontend
- Backend & Databases
- Tools, Design & CS

Animation details:
- Each category reveals pill chips with staggered opacity and Y movement
- ScrollTrigger starts animation when a group enters the viewport
- Hovering a pill adds glow, border color, and warm amber highlight

### 6) Experience and education section
File: [src/components/Experience.jsx](src/components/Experience.jsx)

Purpose:
- Show progression, internships, education, and credibility

Sections included:
- Work experience: Software Development Intern at Purple Techno Solutions
- Education: B.Tech CSE at SRM University AP and Class 12th details
- Certifications/credentials panel

Timeline behavior:
- Left and right columns animate in from opposite sides
- Timeline nodes use vertical line with amber/indigo accent colors
- Resume button opens `/resume.pdf`

### 7) Contact section
File: [src/components/Contact.jsx](src/components/Contact.jsx)

Purpose:
- Turn the portfolio into a direct lead-generation funnel
- Invite recruiters, clients, and collaborators to reach out

Features:
- Orange CTA banner: “Let’s Build Together”
- Large heading with bold animated typography
- Contact form with Name, Email, Subject, Message
- Form submission triggers a `mailto:` action to `prdns.chintada27@gmail.com`

UX detail:
- The banner and button are interactive and behave like premium call-to-action cards
- The form uses a clean dark input design with warm focus states

### 8) Footer
File: [src/components/Footer.jsx](src/components/Footer.jsx)

Purpose:
- Close the experience with navigation, contact information, and social links

Footer content:
- Tagline: “Building Scalable Software for the Future.”
- Quick links to key sections
- Contact email and location
- GitHub and LinkedIn links
- Copyright line

Animation details:
- Large background watermark text “PRADNISH” animates in from below on scroll
- ScrollTrigger is refreshed for late-loading assets and fonts

## Reusable UI components

### [src/components/Button.jsx](src/components/Button.jsx)
- Reusable CTA component with animated top and bottom labels
- Supports icons, custom classnames, and click handlers
- Used across hero, experience, and call-to-action sections

### [src/components/AnimatedTitle.jsx](src/components/AnimatedTitle.jsx)
- Breaks large headline text into word-by-word animated reveals
- Accepts HTML tags like `<b>` to emphasize letters inside heading lines
- Very central to the portfolio’s visual personality

### [src/components/VideoPreview.jsx](src/components/VideoPreview.jsx)
- Creates a parallax-style mouse movement wrapper around a video or media element
- Uses 3D transform and opposite-direction offset to simulate depth

### [src/components/Features.jsx](src/components/Features.jsx)
- Additional concept section for “metagame layer” or launchpad-type content
- Not currently mounted in the main app, but demonstrates the reusable bento-card and media-panel pattern used in the project

### [src/components/Story.jsx](src/components/Story.jsx)
- Another experimental storytelling section using layered imagery, SVG filters, and a floating image effect
- Also not currently mounted in [src/App.jsx](src/App.jsx), but it reflects the same motion-visual language as the rest of the portfolio

## Style system and visual design

The design language is defined in [src/index.css](src/index.css). Key design choices include:

- Dark base palette: black, charcoal, soft obsidian, and warm amber highlights
- Premium typography layering using local font files
- Custom utility classes for:
  - floating nav
  - absolute centering
  - special-font headings
  - animated title words
  - bento grid cards
  - image masks and clip-path patterns
- CSS-based loading animation for the hero preloader

Custom font stack:
- `circular-web`
- `general`
- `robert-medium`
- `robert-regular`
- `zentry`

Primary color emphasis:
- amber: main accent color for CTAs, highlights, and visual energy
- frost/white: clean readability and contrast
- obsidian: background palette to create a premium tech aesthetic

## Detailed user flow

### Entry flow
1. User lands on the portfolio full-screen hero.
2. The page loads with a subtle loading animation while background videos initialize.
3. The user sees a large cinematic name, subtitle, and a strong CTA.
4. Clicking “View My Work” scrolls directly to the projects section.

### Discovery flow
5. User scrolls down to the About section.
6. Image expands using a clip reveal, creating a premium reveal effect.
7. The biography establishes the developer’s positioning and technical skill set.

### Portfolio evaluation flow
8. User enters the project gallery and sees project cards with media previews.
9. Mouse movement tilts cards in 3D and reveals glowing CTA overlays.
10. Each project has a quick “Live” or “Code” entry point for deeper browsing.

### Skill and trust flow
11. User sees grouped skill pills with staggered entrance animations.
12. The overall skill stack confirms capability across frontend, backend, AI, tools, and product engineering.
13. The experience timeline shows maturity and professional momentum.

### Conversion flow
14. User reaches the contact section and sees a strong collaborative call-to-action.
15. The form opens the user’s email client with a prefilled message addressed to the portfolio owner.
16. The footer gives quick links and social paths to continue exploring.

## Animation and effect stack

### GSAP
- Hero video transitions
- Scroll-driven reveal animations
- Word-by-word title reveals
- Card entrance and movement animations
- Footer watermark motion

### CSS + Tailwind effects
- Hover underlines in navigation
- Gradient overlays on project cards
- Soft glow borders on active elements
- Dark glass surfaces and layered panels
- Rounded clip paths for cinematic imagery

### Interaction effects
- 3D mouse tilt on project cards
- Radial spotlight hover overlays
- Scroll-linked clip expansion in About
- Mini-video expansion in Hero
- Floating nav behavior with scroll direction detection
- Audio indicator pulse animation

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open:

- http://localhost:5173/

## Production build

```bash
npm run build
```

## Notes

- This is a single-page portfolio designed to feel like an immersive media experience rather than a standard static resume.
- Some media-rich components (like [src/components/Story.jsx](src/components/Story.jsx) and [src/components/Features.jsx](src/components/Features.jsx)) are present as design experiments and are not currently wired into the main page flow.
- The portfolio heavily emphasizes motion, premium visual polish, and professional storytelling.

## Summary

This website is not just a portfolio; it is a visual product experience. It combines storytelling, motion design, technical credibility, and strong conversion paths into one dark, premium interface that positions Pradnish Chintada as a capable engineer and modern product builder.
