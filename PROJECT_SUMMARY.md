# Portfolio Project Summary

This document serves as a comprehensive log of all architectural, structural, and UI/UX decisions implemented in the `my-portfolio` project to date. 

## 1. Core Architecture & Stack
- **Framework**: React.js initialized via Vite.
- **Styling**: Tailwind CSS configured to scan all JSX files.
- **Routing**: `react-router-dom` implemented for seamless SPA navigation between the main landing page and internal project case studies.
- **Animations**: `framer-motion` installed and applied globally.
- **Form Handling**: `@emailjs/browser` installed and wired into the Contact component for serverless email forwarding.

## 2. Global Design System (`src/index.css`)
- **Color Palette**: Minimalist high-contrast variables established (`--bg`, `--ink`, `--ink-2`, `--ink-3`, `--rule`).
- **Typography**: 
  - **Headings**: `Playfair Display` (elegance and high contrast).
  - **Body**: `Inter` (readability).
  - **Labels/Tags**: `IBM Plex Mono` (technical, mechanical feel).
- **Animation Standard**: Every animated element across the site uses a uniform `framer-motion` sequence: 
  - Slide up (`y: 30` to `y: 0`) and fade in (`opacity: 0` to `1`).
  - Easing: `easeOut` over `0.6s`.
  - Trigger: `viewport={{ once: false }}` (replays repeatedly on scroll).
  - Staggering: `delay: index * 0.1` applied sequentially to sibling elements.

## 3. Main Landing Components
All components sit inside `src/components/` and are rendered sequentially on the `/` route via `App.jsx`.

### Navbar
- Sticky top positioning with a solid bottom border (`var(--rule)`).
- Left side: "CHARAN KURADA" (13px IBM Plex Mono).
- Right side: Smooth-scrolling anchor links navigating to section IDs.

### Hero
- Focused, text-centric layout (profile image removed for maximum typographic impact).
- Constrained text wrapper (`max-w-[800px]`) to enforce specific, highly readable line-wrapping on the `56px` Playfair heading ("I build systems that think...").
- CTA buttons targeting internal sections and external documents.

### Projects
- Minimalist side-by-side card grid constrained to `max-w-[1100px]`.
- Stripped down styling: No border-radius, `1px` rule borders, white backgrounds.
- Elements: Project number, Title (`28px`), single-line truncated description, tech tags, and React Router `<Link>` buttons routing to detailed case studies.

### About
- 2-column layout with a massive `4rem` gap.
- **Left**: Bold `42px` intro and `18px` Inter body paragraphs with `1.8` line height.
- **Right**: A `280px` perfect-circle placeholder reserved for a portrait.

### Skills (Stack)
- Transformed from a standard table into a custom "Pill Group" vertical stack (`max-w-[1100px]` aligned container).
- Maps categories (e.g., "Frontend", "AI/NLP") to freely wrapping, inline-flex pills.
- Pills strictly feature `0` border-radius and raw 1px borders to maintain the technical aesthetic.

### Blog (Writing)
- 3-column responsive grid mapping 3 technical articles.
- Cards feature Playfair titles, Plex Mono tags, and a unified bottom "Coming Soon" border row.

### Contact
- `720px` centered layout.
- Fully functional EmailJS form (Name, Email, Message textarea with `resize-y`).
- Manages React state for `sending`, `success`, and `error` UI feedback loops.
- Bottom section maps clean, border-animated inline links for direct Email, LinkedIn, and GitHub contact.

## 4. Internal Pages (Case Studies)
Stored in `src/pages/`, mapping to exact URLs via `App.jsx`. Both follow a strict `800px` centered reading layout with top/bottom return links.

### CVInsights (`/projects/cvinsights`)
- Detailed breakdown of a deterministic resume scoring engine.
- Features: Problem/Solution mapping, a horizontally scrollable pipeline architecture block, a beautifully aligned flex-based scoring rubric, and a 2-column tech stack table.

### CJ Assist (`/projects/cj-assist`)
- Detailed breakdown of a multi-provider AI comparison platform.
- Features parallel design mirroring CVInsights, mapping out exact LLM architectures, pure frontend design philosophies, and localStorage persistence tracking.
