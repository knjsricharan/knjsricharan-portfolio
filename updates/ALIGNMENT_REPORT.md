# Alignment Report — Resume ↔ Site Audit

> Generated: 2026-10-14

## Source Files
- **Resume**: `updates/resume (1).pdf`
- **CAG README**: `updates/CAD-MultiDatasetAnalysis.md`

---

## Section Mapping

| Resume Item | Site Section | Status | Notes |
|---|---|---|---|
| **Summary** | Hero (headline + sub-statement), About (bio) | ⚠ Different | Resume: "CS undergrad (CGPA 8.70), ServiceNow CSA, application support, incident management, IT infrastructure, SQL, Linux, cloud deployment…" — Site hero: "AI/ML Developer · Full-Stack · Python & FastAPI" and "Student developer shipping production-grade AI backends". Site omits ServiceNow, ITSM focus, CGPA, cloud deployment, and relocation openness. |
| **Education** | *(missing)* | ❌ Missing | Resume lists MVGR (B.Tech CSE, 8.70 CGPA, 2023-2027), Tirumala Junior College (Intermediate, 96.2%, 2021-2023), Sri Chaitanya School (SSC, 599/600, 2020-2021). Site has no education section. |
| **Technical Skills** | Skills.jsx | ⚠ Different | Resume has 7 categories (IT Ops & Service Mgmt, Infra & Cloud, Databases & Programming, Scripting & Automation, Tools & Platforms, Additional, Soft Skills). Site has 8 different categories (Languages, Frontend, Backend, AI/NLP, Data Processing, System Design, Deployment & Tools, Additional) with many skills not on the resume. |
| **Certifications** | *(missing)* | ❌ Missing | Resume lists: ServiceNow CSA & CAD (2026), OCI AI Foundations (2025), NDG Linux Essentials (2024), Python Essentials 1 & 2 (2024). |
| **Experience** | *(missing)* | ❌ Missing | Resume lists: EduSkills AICTE (Jun-Sep 2026, Java Full Stack & Android), EdiGlobe (Jul-Sep 2025, AI Intern). |
| **Projects – CVInsights** | Projects.jsx card + CVInsightsDetail.jsx | ⚠ Different | Description differs from resume wording. Tags contain items not on resume but used in project. Links match. |
| **Projects – CJ Assist** | Projects.jsx card + CJAssistDetail.jsx | ⚠ Different | Description differs from resume wording. Links match. |
| **Projects – CAG** | *(missing)* | ❌ Missing | No card, no detail page, no route. |
| **Achievements & Leadership** | *(missing)* | ❌ Missing | 4 items listed on resume. |
| **Contact – Email** | Contact.jsx, Footer.jsx | ✅ Match | sricharan812006@gmail.com |
| **Contact – LinkedIn** | Contact.jsx, Footer.jsx | ✅ Match | linkedin.com/in/sri-charan-kurada-605638297 |
| **Contact – GitHub** | Hero.jsx, Navbar.jsx, Contact.jsx, Footer.jsx | ✅ Match | github.com/knjsricharan |

---

## Detailed Mismatches

### Hero
| Element | Resume Says | Site Says |
|---|---|---|
| Label | N/A | "AI/ML Developer · Full-Stack · Python & FastAPI" |
| Sub-statement | "CS undergraduate (CGPA 8.70) and ServiceNow CSA with a foundation in application support…" | "Student developer shipping production-grade AI backends…" |

### About
| Element | Resume Says | Site Says |
|---|---|---|
| Bio para 1 | CS undergrad, ServiceNow CSA, app support, incident mgmt, IT infra, SQL, Linux, cloud | "student developer building AI-powered systems…" |
| Bio para 2 | Open to shift-based support work and relocation | "Currently undergoing ServiceNow training…" |
| Quick Stat: Stack | SQL, Python, Linux | "Python, FastAPI" |

### Skills
Site skills not on resume but retained because used in listed projects: pdfplumber, python-docx, BeautifulSoup, Axios, Recharts, httpx, Pydantic.

### Documentation Font Mismatch
- `index.css` loads **DM Serif Display** ✅
- `README.md` says **Playfair Display** ❌
- `PROJECT_SUMMARY.md` says **Playfair Display** ❌

### Contact.jsx EmailJS
- Service ID, template ID, public key are inline literals — need config object with TODO.

---

## Items Not Placed on Site
| Resume Item | Reason |
|---|---|
| Phone number | Personal info — not appropriate for public portfolio |
| Declaration | Not relevant to portfolio |
