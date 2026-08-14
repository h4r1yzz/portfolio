export const site = {
  name: "Harry Chandra",
  roles: ["Software Engineer", "AI Engineer"],
  location: "Hong Kong",
  description:
    "Building software around AI, data systems, and useful products.",
  intro:
    "Building software around AI, data systems, and useful products.",
  marquee: "Harry Chandra · ",
} as const;

export const work = [
  {
    role: "AI Engineer",
    company: "Carbon AI",
    date: "Dec 2025 – Aug 2026",
    description:
      "Built production-grade AI systems focused on multi-agent workflows, Retrieval-Augmented Generation (RAG), and scalable backend services. Designed and evaluated LLM pipelines using LangChain, LangGraph, Ragas, pgvector, and Vertex AI, and deployed cloud-native infrastructure on Google Cloud Platform.",
  },
  {
    role: "Data Science",
    company: "RosaryLabs",
    date: "Mar 2025 – Sept 2025",
    description:
      "Designed a search engine workflow with MCP integration for dynamic tool use and multi-turn reasoning, evaluated LLM performance with DeepEval and custom metrics, and explored Qdrant and sparse embeddings for RAG.",
  },
  {
    role: "Software Engineer Intern",
    company: "Consolsys",
    date: "Oct 2024 – Jan 2025",
    description:
      "Integrated Stimulsoft reporting into the Tellering system using Angular and C#, ensured accurate transaction journaling with effective debugging practices, and migrated and optimized data workflows from MSSQL to PostgreSQL.",
  },
  {
    role: "Web Developer Intern",
    company: "Strattonshire Venture",
    date: "Oct 2023 – Jan 2024",
    description:
      "Developed an administration system with Laravel and MongoDB to streamline administrative tasks, while collaborating with the development team to implement improvements and provide responsive frontend support.",
  },
] as const;

export const education = [
  {
    school: "Hong Kong University of Science and Technology",
    degree: "MSc Information Technology",
    date: "2026 – 2027",
  },
  {
    school: "University Tunku Abdul Rahman",
    degree: "B.Sc. Computer Science",
    date: "2021 – 2024",
  },
] as const;

export const projects = [
  {
    id: "well-log-analysis",
    year: "2025",
    title: "Well Log Analysis",
    summary: "AI-assisted well log interpretation",
    description:
      "A smart geological data analysis platform built with Flask that leverages LangChain, LangGraph, and MCP to dynamically process LAS well-log files, execute real-time Python analysis, and deliver interactive visual insights through Plotly dashboards.",
    href: "https://github.com/h4r1yzz/mcp_langchain",
    image: "/image/welllog.gif",
  },
  {
    id: "neurograde",
    year: "2025",
    title: "NeuroGrade",
    summary: "Deep learning for MRI tumor detection",
    description:
      "Deep learning solution that uses MRI scans to detect brain tumors and generate segmentation masks, combining human expertise with AI to get more accurate results, streamline workflows, and help doctors get better understanding in complex cases.",
    href: "https://github.com/h4r1yzz/Healthcare",
    image: "/image/healthcare.gif",
  },
  {
    id: "medx",
    year: "2026",
    title: "medX",
    summary: "Smarter blood-test analysis for clinics & hospitals",
    description:
      "Helps doctors make sense of blood test results, and bridges small clinics with hospitals so care stays connected across both.",
    href: "#",
    image: "",
    badge: "coming soon!",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "Python"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "LangChain"],
  },
  {
    title: "AI & tools",
    items: ["OpenAI", "Cursor"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Google Cloud", "Azure"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Apache Airflow"],
  },
] as const;

export const photos = [
  {
    src: "/photos/office-team.jpg",
    alt: "Team at the office",
    caption: "Carbon Ai Team",
  },
  {
    src: "/photos/mermaid-statue.jpg",
    alt: "Mermaid statue",
    caption: "Took it at China ",
  },
  {
    src: "/photos/hackathon-trophy.jpg",
    alt: "Hackathon trophy",
    caption: "1st runner up in hackathon",
  },
  {
    src: "/photos/event-selfie.jpg",
    alt: "Event with friends",
    caption: "With Co-founder of Cleve AI",
  },
  {
    src: "/photos/team-photo.jpg",
    alt: "Team photo",
    caption: "Rosary Labs team picture",
  },
] as const;

export const moreLinks = [
  { title: "About", meta: "Who, What, Why", href: "/about" },
  { title: "Stack", meta: "Tools & meta", href: "/stack" },
] as const;

export const elsewhereLinks = [
  { title: "Photos", meta: "full gallery", href: "/photos" },
  { title: "Visits", meta: "live map", href: "/visits" },
] as const;

export const connectLinks = [
  {
    title: "GitHub",
    meta: "code & projects",
    href: "https://github.com/h4r1yzz",
    external: true,
  },
  {
    title: "LinkedIn",
    meta: "work & experience",
    href: "https://www.linkedin.com/in/harry-chandra-180870179/",
    external: true,
  },
  {
    title: "Email",
    meta: "get in touch",
    href: "mailto:harrychandratsjan@gmail.com",
    external: false,
  },
  {
    title: "Resume",
    meta: "download PDF",
    href: "/resume.pdf",
    external: true,
  },
] as const;
