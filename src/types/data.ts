import type { Job, Project, Skill } from ".";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
export const EXPERIENCE: Job[] = [
  {
    company: "Sigma World",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    location: "Noida",
    current: true,
    highlights: [
      "Contributing to frontend architecture and scalable UI development",
      "Building reusable React + TypeScript component systems",
      "Collaborating with product and design for pixel-perfect delivery",
    ],
  },
  {
    company: "Madeeasy Group",
    role: "Senior Software Engineer",
    period: "Nov 2024 — Jul 2025",
    location: "Noida",
    highlights: [
      "Led frontend development of MadeEasy Prime — competitive exam platform",
      "Built OTS, Live Class, and VOD modules with Next.js SSR",
      "Integrated Firebase real-time chat for live classroom interactions",
      "Engineered a reusable Login Library shared across multiple products",
    ],
  },
  {
    company: "Ginger Webs (Think Exam)",
    role: "Senior Software Developer",
    period: "Nov 2022 — Oct 2024",
    location: "Noida",
    highlights: [
      "Developed NextIAS — UPSC prep platform for 100k+ users",
      "Built Meniit — NEET/IIT-JEE platform with Next.js SSR",
      "Owned full frontend architecture across multiple EdTech products",
      "Delivered gallery, profile, and test modules on tight deadlines",
    ],
  },
  {
    company: "Mechlin Technologies",
    role: "Software Developer",
    period: "Jun 2021 — Apr 2022",
    location: "Mohali",
    highlights: [
      "Developed IGA LMS — course management and user analytics portal",
      "Built auth and portal configuration modules in React",
    ],
  },
  {
    company: "Digital Impressions",
    role: "Software Developer",
    period: "Aug 2020 — May 2021",
    location: "Old Faridabad, Delhi",
    highlights: [
      "Frontend development with React and modern JavaScript",
      "Worked closely with design and backend engineering teams",
    ],
  },
  {
    company: "Zon Tec",
    role: "Software Developer",
    period: "Aug 2017 — May 2020",
    location: "New Delhi",
    highlights: [
      "Started career building web apps with JavaScript and HTML/CSS",
      "Contributed to full-stack projects across multiple client domains",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "MadeEasy Prime",
    description:
      "Competitive exam preparation platform for GATE and IES with live classes, online tests, video-on-demand, and Firebase real-time chat.",
    tech: ["Next.js", "Node.js", "Firebase", "TypeScript"],
    modules: ["Login Library", "OTS", "Quiz", "VOD", "Live Class", "Chat"],
    url: "https://www.madeeasyprime.com/",
    featured: true,
  },
  {
    name: "NextIAS",
    description:
      "UPSC Civil Services prep platform with structured video content, live classes, and online test series for aspiring IAS officers.",
    tech: ["Next.js", "Node.js", "Firebase", "REST API"],
    modules: ["Login Library", "Profile", "OTS", "VOD", "Live Class", "Gallery"],
    url: "https://www.nextias.com/",
    featured: true,
  },
  {
    name: "Meniit",
    description:
      "EdTech platform for NEET & IIT-JEE students featuring structured mock tests and authenticated learning profiles.",
    tech: ["Next.js", "TypeScript", "REST API"],
    modules: ["Login Auth", "Profile", "Test Module"],
    url: "https://meniit.com",
  },
  {
    name: "IGA LMS",
    description:
      "Enterprise LMS with course management, user analytics, email templates, and advanced admin filters.",
    tech: ["React", "Node.js", "REST API"],
    modules: ["Auth Module", "Portal Config"],
  },
  {
    name: "Equip2go",
    description:
      "E-commerce platform enabling direct warehouse-to-customer purchases with cart and order management.",
    tech: ["React", "Node.js", "REST API"],
    modules: ["Login Auth", "Cart", "Order Module"],
    url: "https://equip2go.com.au",
  },
  {
    name: "KHUSHII NGO",
    description:
      "NGO website with integrated online donation payments to support charitable causes.",
    tech: ["React", "Payment Gateway"],
    modules: ["Payment Integration"],
    url: "https://www.khushii.org",
  },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", level: 95 },
  { name: "Angular", level: 92 },
  // { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "HTML / CSS", level: 92 },
  { name: "Node.js", level: 75 },
  { name: "GraphQL", level: 70 },
  { name: "MySQL", level: 68 },
];

export const TOOLS = [
  "Angular", "TypeScript", "JavaScript", "Node.js",
  "GraphQL", "MySQL", "Tailwind", "Material UI", "Bootstrap",
  "Firebase", "Git", "JIRA", "REST APIs", "Agile / Scrum",
];

export const ROLES = [
  "Senior Frontend Engineer",
  "Angular Specialist",
  // "Next.js Developer",
  "UI Architect",
];