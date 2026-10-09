import type { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: "udgam-campus-ambassador",
    role: "Campus Ambassador",
    organization: "UDGAM'26 — IIT Guwahati",
    duration: "November 2025 — February 2026",
    type: "Leadership",
    description: "Represented IIT Guwahati's annual flagship entrepreneurship & techno-cultural summit across the campus community. Led peer outreach and coordinated participation drives.",
    badge: "IIT GUWAHATI"
  },
  {
    id: "codex-ctf-treasurer",
    role: "Treasurer",
    organization: "CodeX Capture The Flag",
    type: "Leadership",
    description: "Serving as Treasurer of CodeX Capture The Flag, a coding and presentation club, contributing to financial management, club operations, event planning, and the growth of the technical community.",
    badge: "CODEX CTF"
  },
  {
    id: "hackathon-code-veda",
    role: "Hackathon Competitor",
    organization: "Code Veda 2.0 & Ignition Hack 2.0",
    type: "Hackathon",
    description: "Collaborated under sprint timelines to architect innovative software and algorithmic prototypes alongside fellow developers.",
    badge: "HACKATHONS"
  }
];

export const factsStats = [
  {
    value: "2024",
    label: "B.Tech Journey Started",
    detail: "CSE — AI Specialization @ ABESIT",
    accent: "cyan" as const
  },
  {
    value: "6 Weeks",
    label: "AI Internship",
    detail: "IBM SkillBuild / Edunet Foundation",
    accent: "pink" as const
  },
  {
    value: "4",
    label: "Featured AI/ML Projects",
    detail: "NLP, ML Models & EDA Systems",
    accent: "purple" as const
  },
  {
    value: "AI/ML",
    label: "Primary Focus",
    detail: "Machine Learning & Data Science",
    accent: "emerald" as const
  }
];
