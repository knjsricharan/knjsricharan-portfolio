# Charan Kurada — Portfolio

Minimalist, high-performance personal portfolio built with React, Vite, and Tailwind CSS.

> *I build systems that think, not just tools that respond.*

---

## Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite |
| **Styling** | Vanilla CSS Design Tokens + Tailwind CSS |
| **Animations** | Framer Motion (directional scroll reveals, stagger transitions) |
| **Routing** | React Router DOM v7 (SPA with detailed case study routes) |
| **Theming** | Custom CSS Variables Theme Engine with `localStorage` sync |
| **Icons** | Lucide React |
| **Forms** | EmailJS (Serverless contact form forwarding) |
| **Typography** | DM Serif Display · Inter · IBM Plex Mono |

---

## Features

- **4-Theme Switcher**:
  - **Light**: Crisp, high-contrast minimal theme (`#F5F5F5` / `#FFFFFF`).
  - **Beige**: Warm, editorial paper & linen aesthetic (`#F4EFEA` / `#FAF6F0`).
  - **Dark Grey**: Sleek slate & anthracite dark mode (`#1E2024` / `#25282E`).
  - **Dark**: Deep obsidian OLED black mode (`#0C0C0D` / `#141517`).
  - **Top-Level Palette Icon**: Minimal icon toggle in both desktop and mobile navigation bars.
  - **Swatch Dropdown**: Each theme row displays an authentic color circle swatch on the left and the theme name on the right.
  - **Persistent & Reactive**: Persists in `localStorage`, syncs across browser tabs, and applies zero-FOUC pre-hydration script in `index.html`.
- **Interactive Cursor & Dynamic Particle Canvas**: Custom floating dot and ring cursor with an ambient particle system that dynamically matches the active theme's palette.
- **Galaxy Background Particles (`BackgroundTypography.jsx`)**: A 320-dot star field scattered across the full screen behind the giant **CJ08** watermark, with the following behavior:
  - **Idle Drift & Twinkle**: At rest, every dot gently floats (slow per-dot sine drift, per-dot phases so they never move in unison) and blinks like stars in space via the CSS `particle-drift` keyframes (opacity pulse + ±20px orbit drift).
  - **Hover Ring (Mouse)**: Moving the cursor page-wide pulls nearby dots into a subtle circular ring around the pointer; the ring centre follows the cursor with a smooth, slightly delayed ease. Leaving the page dissolves the ring back to rest.
  - **Click / Tap Gather**: Clicking or tapping anywhere gathers nearby dots into a circle centered exactly on that point; the dots animate smoothly into the circle (quick taps hold it ~650ms for visibility, then it gently dissolves).
  - **Touch Drag Follow**: Dragging a finger across the screen keeps the particle interaction centred on the touch position.
  - **Scroll Parallax**: Page scroll drives a small, cinematic depth-based particle shift (capped ≈40px) plus a tiny organic wave. The **CJ08 watermark itself stays static** — only the particles move.
  - **Performance**: Single idling `requestAnimationFrame` loop (sleeps when nothing moves), cached particle base positions with zero layout reads per frame, writes throttled to sub-pixel changes, no React re-renders, and a minimal set of passive pointer/touch/scroll listeners (Pointer Events with mouse/touch fallback).
  - **Accessibility**: Fully disabled under `prefers-reduced-motion` (dots remain static), including mid-session preference changes.
- **Directional Scroll Reveals**: Smooth entry animations driven by Framer Motion and intersection observers.
- **Scroll Progress Indicator**: High-precision top progress bar tracking scroll depth.
- **Detailed Project Case Studies**: Dedicated routes for in-depth engineering breakdowns, architecture diagrams, and stack specifications.

---

## Project Structure

```
src/
├── assets/                  # Static media and images
├── components/
│   ├── About.jsx            # Bio, profile portrait, education, and skill pills
│   ├── BackgroundTypography.jsx # Galaxy star-field particles, hover ring / tap gather / scroll parallax, CJ08 watermark
│   ├── Blog.jsx             # Technical writing preview cards
│   ├── Contact.jsx          # EmailJS-integrated contact form
│   ├── Cursor.jsx           # Custom cursor and theme-reactive particle canvas
│   ├── Experience.jsx       # Internship and educational history timeline
│   ├── Footer.jsx           # Minimal footer with social and email links
│   ├── Hero.jsx             # Headline, statement, and primary CTA buttons
│   ├── Navbar.jsx           # Sticky frosted glass nav with active section tracking
│   ├── Projects.jsx         # Case study preview cards with routing
│   ├── Skills.jsx           # Reusable technical tag components
│   └── ThemeSwitcher.jsx    # Top-level palette toggle with swatch dropdown
├── context/
│   └── ThemeContext.jsx     # Global theme state, localStorage, and tab sync
├── hooks/
│   ├── useDirectionalReveal.js  # Directional viewport scroll reveal hook
│   ├── useMotion.js             # Motion preference detection
│   ├── useScrollDirection.js    # Scroll direction tracker
│   └── useScrollReveal.js       # Intersection observer reveal hook
├── pages/
│   ├── CAGDetail.jsx        # Case study — Multi-Dataset Research Analyzer
│   ├── CJAssistDetail.jsx   # Case study — Multi-Provider AI Platform
│   └── CVInsightsDetail.jsx # Case study — AI Resume Analyzer & Scoring
├── App.jsx                  # Main routes and scroll progress indicator
├── main.jsx                 # Application entry point with ThemeProvider
├── index.css                # Design tokens, typography, and theme variables
└── App.css                  # Component-specific styles
```

---

## Design Principles

- **Editorial Brutalism**: Raw `1px` rule borders, sharp edges, generous whitespace, and balanced typography without superfluous decorations.
- **Typographic Hierarchy**:
  - **Headings**: `DM Serif Display` for editorial elegance.
  - **Body**: `Inter` for clarity and comfortable reading.
  - **Labels, Tags & Navigation**: `IBM Plex Mono` for a technical, disciplined feel.
- **Smooth Theming Transitions**: CSS custom properties configure background, surface, text, rule, and particle colors with seamless 250ms crossfades across the entire site.

---

## Featured Projects

### 1. CVInsights
Cloud-deployed AI resume analyzer with REST APIs, deterministic ATS scoring, multi-format parsing (PDF, DOCX, HTML), JSON schema validation, and OpenRouter fallback routing.  
`FastAPI` · `Python` · `OpenRouter` · `React`  
- [Live Demo →](https://cvinsights.vercel.app)
- [GitHub Repository →](https://github.com/knjsricharan/cvinsights)

### 2. CJ Assist
Multi-provider AI comparison workspace evaluating responses from OpenAI, Anthropic, and open-source models with real-time latency and cost telemetry.  
`React` · `Tailwind CSS` · `Axios` · `OpenRouter`  
- [Live Demo →](https://cj-assist.vercel.app)
- [GitHub Repository →](https://github.com/knjsricharan/cj-assist)

### 3. CAG Multi-Dataset Research Analyzer
Streamlit application analyzing multi-format datasets (CSV, JSON, TXT) with Gemini 2.5 Flash, token-reuse tracking, and multi-file aggregations.  
`Python` · `Streamlit` · `Gemini API` · `Pandas`  
- [GitHub Repository →](https://github.com/knjsricharan/CAG)

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/knjsricharan/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available locally at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## Configuration

### EmailJS (Contact Form)
To connect the contact form to your own EmailJS account, update the credentials in [Contact.jsx](src/components/Contact.jsx):
```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```
Keys can be obtained from [emailjs.com](https://www.emailjs.com/).

---

## Connect

- **Email**: [sricharan812006@gmail.com](mailto:sricharan812006@gmail.com)
- **LinkedIn**: [Sri Charan Kurada](https://www.linkedin.com/in/sri-charan-kurada-605638297)
- **GitHub**: [knjsricharan](https://github.com/knjsricharan)

---

## License

This project is open-source under the [MIT License](LICENSE).
