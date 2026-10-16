export const PORTFOLIO_DATA = {
  profile: {
    name: "Sri Charan Kurada",
    degree: "B.Tech in Computer Science and Engineering",
    college: "MVGR College, Vizianagaram",
    role: "Engineering Intelligent Enterprise Systems",
    description: "Computer Science undergraduate with ServiceNow certifications in System Administration (CSA) and Application Development (CAD), focused on building practical enterprise solutions."
  },
  about: {
    headline: "A Computer Science student driven by problem-solving.",
    content: [
      "I'm a Computer Science undergraduate at MVGR College, Vizianagaram, interested in building practical software and exploring enterprise technology, ServiceNow development, and AI/ML.",
      "Through academic and personal projects, I focus on turning technical ideas into useful applications. My ServiceNow CSA and CAD certifications complement my broader interests in software engineering and enterprise solutions."
    ]
  },
  skills: [
    {
      category: "ServiceNow & ITSM",
      items: ["CSA", "CAD", "Application Development", "ITSM", "Workflow Automation", "IntegrationHub"]
    },
    {
      category: "Programming & Databases",
      items: ["Python", "JavaScript", "Java", "SQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Infrastructure & Cloud",
      items: ["AWS", "OCI AI", "Linux", "Docker", "Git", "REST APIs"]
    },
    {
      category: "Tools & Frameworks",
      items: ["React", "FastAPI", "Streamlit", "Framer Motion", "Tailwind CSS", "OpenRouter"]
    }
  ],
  experience: [
    {
      role: "Virtual Intern — Java Full Stack & Android Development",
      company: "EduSkills · AICTE National Internship Portal",
      period: "Jun 2026 – Sep 2026",
      description: "Completed two virtual internships covering Spring Boot, Hibernate (database persistence), Android UI, and WorkManager."
    },
    {
      role: "AI Intern",
      company: "EdiGlobe",
      period: "Jul 2025 – Sep 2025",
      description: ""
    }
  ],
  certifications: [
    { name: "ServiceNow Certified System Administrator (CSA)", issuer: "ServiceNow", highlight: true },
    { name: "ServiceNow Certified Application Developer (CAD)", issuer: "ServiceNow", highlight: true },
    { name: "Oracle OCI AI Foundations Associate", issuer: "Oracle", highlight: false },
    { name: "NDG Linux Essentials", issuer: "Cisco Networking Academy", highlight: false },
    { name: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", highlight: false }
  ],
  projects: [
    {
      id: "cvinsights",
      number: "01",
      title: "CVInsights",
      category: "AI · Talent Acquisition",
      summary: "AI-powered resume analyzer that extracts key skills and calculates match percentages against job descriptions.",
      description: "Developed a high-performance parsing engine using FastAPI and OpenRouter to transform unstructured PDF resumes into structured JSON data for precise matching.",
      caseStudy: {
        overview: "CVInsights is an intelligent talent acquisition tool designed to eliminate manual screening bias and accelerate the hiring process.",
        problem: "Recruiters often struggle with high volumes of resumes, leading to missed talent due to poor keyword matching or overwhelming data.",
        objectives: "Automate resume parsing, quantify skill matches, and provide a structured technical analysis of candidates.",
        contribution: "Architected the backend API, integrated LLM providers for semantic analysis, and implemented PDF processing pipelines.",
        technicalApproach: "The system utilizes FastAPI for asynchronous request handling. It employs a multi-stage pipeline: PDF extraction → Semantic Chunking → LLM-based extraction via OpenRouter → Pydantic validation for structured output.",
        techStack: ["FastAPI", "Python", "OpenRouter", "Pydantic", "PyMuPDF"],
        results: "Achieved significant reduction in screening time and improved the accuracy of technical skill identification compared to traditional keyword searches.",
        links: { github: "https://github.com/knjsricharan/cvinsights", demo: "https://cvinsights.vercel.app" }
      },
      tags: ["FastAPI", "Python", "OpenRouter", "Pydantic"]
    },
    {
      id: "cjassist",
      number: "02",
      title: "CJ Assist",
      category: "Productivity · AI Workspace",
      summary: "A multi-provider AI workspace allowing users to interact with multiple LLMs and visualize data in real-time.",
      description: "Built a unified interface for AI interaction, featuring provider switching and integrated data visualization using Recharts.",
      caseStudy: {
        overview: "CJ Assist serves as a centralized command center for AI interaction, reducing the need to switch between multiple AI platform tabs.",
        problem: "Developers and researchers often use multiple LLMs (GPT, Claude, Gemini) but lack a single interface to compare results and visualize the output.",
        objectives: "Create a seamless UI for multiple AI providers and integrate real-time charting for AI-generated data.",
        contribution: "Developed the frontend architecture using React, implemented state management for multiple AI streams, and integrated Recharts for visualization.",
        technicalApproach: "The application uses a provider-agnostic API layer. It leverages React hooks for real-time streaming responses and a dynamic rendering engine to convert AI-generated data into visual charts.",
        techStack: ["React", "Recharts", "Tailwind CSS", "REST APIs"],
        results: "Created a streamlined workflow for AI research, enabling 1-click comparison between different model responses.",
        links: { github: "https://github.com/knjsricharan/cj-assist", demo: "https://cj-assist.vercel.app" }
      },
      tags: ["React", "Tailwind CSS", "Axios", "Recharts"]
    },
    {
      id: "caganalyzer",
      number: "03",
      title: "CAG Analyzer",
      category: "AI · Data Analysis",
      summary: "Streamlit research app for CSV, JSON, and TXT datasets with Gemini 2.5 Flash and simulated cache token tracking.",
      description: "Deployed a Streamlit application that handles complex datasets, tracking token reuse to optimize LLM costs and response speed.",
      caseStudy: {
        overview: "CAG Analyzer is a research-focused tool that allows users to upload multiple datasets and ask complex cross-dataset questions.",
        problem: "Analyzing correlations across different file formats (CSV, JSON, TXT) manually is time-consuming and prone to error.",
        objectives: "Enable multi-format data ingestion and provide high-context analysis using a large-window LLM.",
        contribution: "Implemented the Streamlit UI, optimized the data ingestion pipeline, and integrated the Gemini 2.5 Flash API.",
        technicalApproach: "The app uses a context-aware ingestion strategy. Data is pre-processed into a consolidated context window, utilizing Gemini's long-context capability to analyze thousands of rows of data simultaneously.",
        techStack: ["Streamlit", "Gemini 2.5 Flash", "Python", "Pandas"],
        results: "Enabled rapid synthesis of research data, reducing the time to find cross-dataset insights from hours to seconds.",
        links: { github: "https://github.com/knjsricharan/CAG-MultiDatasetAnalysis", demo: "https://knjsc-cag.streamlit.app" }
      },
      tags: ["Python", "Streamlit", "Gemini API", "Pandas"]
    }
  ]
};
