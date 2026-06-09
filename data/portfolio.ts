// data/portfolio.ts

// ── Personal ─────────────────────────────────────────────────────────────────
export interface PersonalInfo {
  readonly name: string;
  readonly bio: string;
  readonly email: string;
}

// ── Skills ───────────────────────────────────────────────────────────────────
export type Skill = string; // kept as a named type for future extension

// ── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceEntry {
  readonly title: string;
  readonly company: string;
  /** Full date range string, e.g. "Mar 2026 – Jun 2026" or just "2025" */
  readonly date: string;
}

// ── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  /** Binary-style ID, e.g. "000.001" */
  readonly id: string;
  readonly title: string;
  /** ≤150 characters */
  readonly description: string;
  readonly techStack: readonly string[];
  readonly liveUrl?: string;
  readonly githubUrl?: string;
}

// ── Education ────────────────────────────────────────────────────────────────
export interface EducationEntry {
  readonly qualification: string;
  readonly institution: string;
  /** Formatted date range, e.g. "Dec 2022 – Jun 2026" */
  readonly date: string;
  /** CGPA, percentage string, etc. e.g. "CGPA: 7.24" */
  readonly grade: string;
}

// ── Social Links ─────────────────────────────────────────────────────────────
export type SocialPlatform =
  | "email"
  | "github"
  | "linkedin"
  | "whatsapp"
  | "instagram"
  | "twitter";

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly href: string;
  readonly label: string;
}

// ── Hero / Boot Sequence ──────────────────────────────────────────────────────
export type BootLine = string;

// ── Root Portfolio Data ───────────────────────────────────────────────────────
export interface PortfolioData {
  readonly personal: PersonalInfo;
  readonly bootLines: readonly BootLine[];
  readonly roles: readonly string[];
  readonly skills: readonly Skill[];
  readonly experience: readonly ExperienceEntry[];
  readonly projects: readonly Project[];
  readonly education: readonly EducationEntry[];
  readonly social: readonly SocialLink[];
}

// ── Constants ─────────────────────────────────────────────────────────────────
export const PORTFOLIO: PortfolioData = {
  personal: {
    name: "Bharath MM",
    bio: "I'm a Software Engineer with hands-on experience building production-grade web applications, AI-powered systems, and analytics platforms. Currently working at Mphasis Limited, I build intelligent Jira dashboards, LLM chatbots with RAG, and document intelligence interfaces. I bridge full-stack engineering with modern AI — turning complex systems into clean, reliable products.",
    email: "bharathmm563@gmail.com",
  },
  bootLines: [
    "> boot_sequence: software_engineer.bharath",
    "> user: bharath.mm()",
    "> role_detected: fullstack.ai.developer",
    "> permissions_granted: web_apps.ai_systems.llm_integrations",
    "> user_profile: production_grade.engineer",
  ],
  roles: ["Software Engineer", "Full Stack Developer", "AI Builder"],
  skills: [
    "JavaScript", "TypeScript", "Python", "Java", "C++", "SQL",
    "React", "Next.js", "Angular", "Node.js", "Flask",
    "MongoDB", "PostgreSQL", "LLMs", "RAG", "Prompt Engineering",
    "Git", "Tailwind CSS",
  ],
  experience: [
    {
      title: "Trainee Associate Software Engineer",
      company: "Mphasis Limited",
      date: "Mar 2026 – Jun 2026",
    },
    {
      title: "Software Testing Intern",
      company: "Prodigy InfoTech",
      date: "2025",
    },
    {
      title: "Snowflake Intern",
      company: "Snowflake",
      date: "2025",
    },
  ],
  projects: [
    {
      id: "000.001",
      title: "CharTier",
      description: "Community-driven platform where users rate and discuss fictional characters from movies, series, and anime using tier rankings.",
      techStack: ["Next.js", "React", "Tailwind", "MongoDB", "NextAuth"],
      liveUrl: "https://char-tier.vercel.app/",
      githubUrl: "https://github.com/BHARATHMM562/chartier",
    },
    {
      id: "000.010",
      title: "WHO OWNS THIS?",
      description: "Team-based task ownership system ensuring every task has exactly one owner for accountability.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      liveUrl: "https://who-owns-this.vercel.app/",
      githubUrl: "https://github.com/BHARATHMM562/who-owns-this",
    },
    {
      id: "000.011",
      title: "Wispr Flow Clone",
      description: "Desktop voice-to-text application with real-time transcription and a minimal, productivity-focused UI.",
      techStack: ["React", "Vite", "Tauri", "Deepgram"],
      githubUrl: "https://github.com/BHARATHMM562/Wispr-Flow-Clone",
    },
    {
      id: "000.100",
      title: "The Ascent",
      description: "2D platformer game featuring multiple levels, enemies, moving platforms, and life mechanics.",
      techStack: ["Godot", "GDScript"],
      githubUrl: "https://github.com/BHARATHMM562/The_Ascent",
    },
    {
      id: "000.101",
      title: "NoteNest",
      description: "Note-taking web app with category filtering and persistent storage inspired by NoteKeeper.",
      techStack: ["React", "JavaScript", "JSON Server"],
      githubUrl: "https://github.com/BHARATHMM562/NoteNest",
    },
    {
      id: "000.110",
      title: "Railway Crack Detection System",
      description: "Arduino-based prototype to detect railway track cracks using ultrasonic sensors.",
      techStack: ["Arduino", "Ultrasonic Sensors", "Embedded C"],
    },
    {
      id: "000.111",
      title: "Water Rover",
      description: "Autonomous aquatic rover designed to detect and clean floating waste using real-time sensors.",
      techStack: ["IoT", "Raspberry Pi", "Python", "Sensors"],
    },
  ],
  education: [
    {
      qualification: "B.Tech in Computer Science & Engineering",
      institution: "Presidency University, Bangalore",
      date: "Dec 2022 – Jun 2026",
      grade: "CGPA: 7.24",
    },
    {
      qualification: "Pre-University Course (PUC)",
      institution: "Sree Vijaya PU College, Chintamani",
      date: "May 2021 – Apr 2022",
      grade: "75.33%",
    },
    {
      qualification: "ICSE SSLC",
      institution: "Jyothi English Medium School, Chintamani",
      date: "May 2019 – Apr 2020",
      grade: "73.17%",
    },
  ],
  social: [
    { platform: "email",     href: "mailto:bharathmm563@gmail.com",          label: "Email" },
    { platform: "github",    href: "https://github.com/BHARATHMM562",         label: "GitHub" },
    { platform: "linkedin",  href: "https://linkedin.com/in/bharathmm-dev",   label: "LinkedIn" },
    { platform: "whatsapp",  href: "https://wa.me/917676730739",              label: "WhatsApp" },
    { platform: "instagram", href: "https://www.instagram.com/bharath_mm562", label: "Instagram" },
    { platform: "twitter",   href: "https://x.com/BharathMM562",              label: "Twitter/X" },
  ],
} as const;
