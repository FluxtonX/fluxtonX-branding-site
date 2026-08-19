import nasir from "@/assets/team-nasir.webp";
import mudassir from "@/assets/team-mudassir.webp";
import ubaid from "@/assets/team-ubaid.webp";
import rahmat from "@/assets/team-rahmat.webp";
import ikram from "@/assets/team-ikram.webp";
import aziz from "@/assets/team-aziz.webp";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge?: string;
  category: "Leadership" | "Full-Stack" | "Mobile" | "Design" | "AI & Cloud";
  isLeadership?: boolean;
  isFeatured?: boolean;
  bio: string;
  img: string;
  linkedin: string;
  github?: string;
  website?: string;
  skills: string[];
  venture?: {
    name: string;
    role: string;
    url?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "muhammad-nasir",
    name: "Muhammad Nasir",
    role: "CEO & Founder | Business Developer",
    badge: "Founder & CEO",
    category: "Leadership",
    isLeadership: true,
    isFeatured: true,
    bio: "Founder and CEO of FluxtonX. Guiding corporate strategy, technology consulting, and global enterprise partnerships to help startups and enterprises scale mission-critical digital products.",
    img: nasir,
    linkedin: "https://www.linkedin.com/in/muhammad-nasir-970926177/",
    skills: ["Executive Strategy", "Digital Transformation", "Product Leadership", "Global Partnerships", "Tech Consulting"],
  },
  {
    id: "muhammad-mudassir",
    name: "Muhammad Mudassir",
    role: "Lead Full-Stack Software Architect",
    badge: "Lead Software Architect",
    category: "Full-Stack",
    isLeadership: false,
    isFeatured: false,
    bio: "Founder of MedVoryx and Lead Full-Stack Software Architect at FluxtonX. Specializes in building high-scale cloud architectures, AI-driven automation platforms, enterprise SaaS ecosystems, and robust full-stack web applications.",
    img: mudassir,
    linkedin: "https://www.linkedin.com/in/muhammad-mudassir5/",
    github: "https://github.com/muhammadmudassir",
    website: "https://medvoryx.com",
    skills: ["Full-Stack Architecture", "AI & Cloud Platforms", "Next.js / React / TypeScript", "Distributed Systems", "SaaS Engineering", "Enterprise Security"],
    venture: {
      name: "MedVoryx",
      role: "Founder",
      url: "https://medvoryx.com",
    },
  },
  {
    id: "obaid-ullah",
    name: "Obaid Ullah",
    role: "Senior Full-Stack Web Developer",
    badge: "Core Engineering",
    category: "Full-Stack",
    isLeadership: false,
    bio: "Senior Full-Stack Engineer with deep experience in crafting high-concurrency web systems, resilient backend APIs, modern React/Node.js ecosystems, and database architectures.",
    img: ubaid,
    linkedin: "https://www.linkedin.com/in/obaid-ullah-b01835266/",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST & GraphQL APIs", "Cloud Infrastructure"],
  },
  {
    id: "afnan-fahim",
    name: "Afnan Fahim",
    role: "Full-Stack Web Developer",
    badge: "Full-Stack Engineer",
    category: "Full-Stack",
    isLeadership: false,
    bio: "Full-Stack Developer building modern, scalable web platforms and interactive cloud solutions. Specializes in React, Next.js, TypeScript, Node.js, and performant REST API architectures with clean, maintainable code.",
    img: "/afnan.jpeg",
    linkedin: "https://www.linkedin.com/in/afnan-fahim/",
    github: "https://github.com/Afnan-Fahim",
    website: "https://afnan-portfolio-6076b.web.app/",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Full-Stack Architecture", "REST APIs", "Modern Web Platforms"],
  },
  {
    id: "umar-sadiq",
    name: "Umar Sadiq",
    role: "Senior Flutter & Mobile Developer",
    badge: "Flutter & Mobile Specialist",
    category: "Mobile",
    isLeadership: false,
    bio: "Flutter Developer with 4+ years of experience building high-performance Android, iOS & Web apps. Expert in Flutter, Dart, Firebase, React, TypeScript, Node.js, MongoDB, REST APIs, AI integrations, and Clean Architecture with modern UI/UX.",
    img: "/umar.jpeg",
    linkedin: "https://github.com/Umarsadiq112233",
    github: "https://github.com/Umarsadiq112233",
    website: "https://portfolio-fc84f.firebaseapp.com/",
    skills: ["Flutter", "Dart", "Firebase", "Cross-Platform Mobile", "React", "TypeScript", "Node.js", "Clean Architecture"],
  },
  {
    id: "rahmat-u",
    name: "Rahmat U",
    role: "Lead UI/UX Product Designer",
    badge: "Design Leadership",
    category: "Design",
    isLeadership: false,
    bio: "Lead UI/UX Product Designer combining human-centered research with scalable design systems to create elegant, intuitive digital experiences across web and mobile platforms.",
    img: rahmat,
    linkedin: "https://www.linkedin.com/in/rahmat-u-9a63b1243/",
    skills: ["UI/UX Design", "Enterprise Design Systems", "Figma", "User Journey Mapping", "Interactive Prototyping"],
  },
  {
    id: "ikramudin",
    name: "Ikramudin",
    role: "Lead Mobile Application Developer",
    badge: "Mobile Engineering",
    category: "Mobile",
    isLeadership: false,
    bio: "Lead Mobile Developer specializing in building high-performance, cross-platform applications using Flutter and native integrations with offline-first capabilities.",
    img: ikram,
    linkedin: "https://www.linkedin.com/in/ikramudin/",
    skills: ["Flutter", "Cross-Platform Mobile", "iOS & Android", "State Management", "Performance Optimization"],
  },
  {
    id: "aziz-ur-rehman",
    name: "Aziz Ur Rehman",
    role: "Senior Flutter & Mobile Developer",
    badge: "Mobile Engineering",
    category: "Mobile",
    isLeadership: false,
    bio: "Senior Mobile Engineer delivering smooth, responsive mobile experiences, custom animations, clean architecture, and reliable API integrations for global enterprise clients.",
    img: aziz,
    linkedin: "https://www.linkedin.com/in/aziz-ur-rehman-a37b22241/",
    skills: ["Flutter", "Dart", "Mobile Architecture", "REST APIs", "Clean Code"],
  },
];
