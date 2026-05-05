# Charan Kurada — Portfolio

Minimalist, high-performance personal portfolio built with React, Vite, and Tailwind CSS.

> I build systems that think, not just tools that respond.


## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM |
| Forms | EmailJS |
| Fonts | Playfair Display · Inter · IBM Plex Mono |

## Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky navigation with smooth-scroll links
│   ├── Hero.jsx          # Headline, sub-statement, and CTA buttons
│   ├── Projects.jsx      # Side-by-side project cards with routing
│   ├── About.jsx         # Bio section with profile photo
│   ├── Skills.jsx        # Categorized skill pills (Stack)
│   ├── Blog.jsx          # 3-column writing preview cards
│   ├── Contact.jsx       # EmailJS-powered contact form
│   └── Footer.jsx        # Minimal footer with social links
├── pages/
│   ├── CVInsightsDetail.jsx   # Case study — AI resume analyzer
│   └── CJAssistDetail.jsx     # Case study — Multi-provider AI platform
├── App.jsx               # Router configuration
├── main.jsx              # Entry point
└── index.css             # Design tokens and global styles
```

## Design Principles

- **Brutalist Minimalism** — No border-radius, no shadows, no gradients. Sharp edges and high contrast.
- **Typographic Hierarchy** — Playfair Display for headings, Inter for body, IBM Plex Mono for labels and tags.
- **Scroll Animations** — Every section slides up and fades in via Framer Motion, re-triggering on each viewport entry.
- **Left-Aligned Layout** — All content is strictly left-aligned within a 1100px container.

## Featured Projects

### CVInsights
AI-powered resume analyzer with deterministic scoring and ATS evaluation.  
`FastAPI` · `Python` · `OpenRouter`  
[GitHub →](https://github.com/knjsricharan/cvinsights)

### CJ Assist
Multi-provider AI comparison platform with real-time cost and latency tracking.  
`React` · `Axios` · `OpenRouter`  
[GitHub →](https://github.com/knjsricharan/cj-assist)

## Run Locally

```bash
git clone https://github.com/knjsricharan/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

## Configuration

### EmailJS (Contact Form)
Update these values in `src/components/Contact.jsx`:
```
YOUR_SERVICE_ID
YOUR_TEMPLATE_ID
YOUR_PUBLIC_KEY
```
Get your keys at [emailjs.com](https://www.emailjs.com/).

## Connect

- **Email** — sricharan812006@gmail.com
- **LinkedIn** — [Sri Charan Kurada](https://www.linkedin.com/in/sri-charan-kurada-605638297)
- **GitHub** — [knjsricharan](https://github.com/knjsricharan)

## License

MIT
