export const site = {
  name: "Harry Chandra",
  roles: ["Software Engineer", "AI Engineer"],
  location: "Hong Kong",
  description:
    "Building software around AI, data systems, and useful products.",
  intro:
    "Software engineer building at the intersection of AI, data, and full-stack product development.",
  marquee: "Harry Chandra · ",
} as const;

export const work = [
  {
    role: "Data Science",
    company: "RosaryLabs",
    date: "Mar 2025 – Sept 2025",
    description:
      "Designed a search engine workflow with MCP integration for dynamic tool use and multi-turn reasoning, evaluated LLM performance with DeepEval and custom metrics, and explored Qdrant and sparse embeddings for RAG.",
  },
  {
    role: "Software Engineer",
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
] as const;

export const skills = [
  "TypeScript",
  "Python",
  "Next.js",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Apache Airflow",
] as const;

export const photos = [
  {
    src: "/photos/office-team.jpg",
    alt: "Team at the office",
    caption: "Team at the office",
  },
  {
    src: "/photos/mermaid-statue.jpg",
    alt: "Mermaid statue",
    caption: "Mermaid statue, Kuala Lumpur",
  },
  {
    src: "/photos/hackathon-trophy.jpg",
    alt: "Hackathon trophy",
    caption: "Hackathon winner with the team",
  },
  {
    src: "/photos/event-selfie.jpg",
    alt: "Event with friends",
    caption: "With friends at an event",
  },
  {
    src: "/photos/team-photo.jpg",
    alt: "Team photo",
    caption: "Team photo",
  },
] as const;

export const moreLinks = [
  { title: "About", meta: "Who, What, Why", href: "/about" },
  { title: "Stack", meta: "Tools & meta", href: "/stack" },
] as const;

export const elsewhereLinks = [
  { title: "miniscira", meta: "ai search", href: "#" },
  { title: "Writing", meta: "notes & essays", href: "#" },
  { title: "Photos", meta: "full gallery", href: "/photos" },
  { title: "Visits", meta: "live map", href: "/visits" },
  { title: "Colophon", meta: "stack & meta", href: "/stack" },
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
