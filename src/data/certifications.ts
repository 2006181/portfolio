import type { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: "cisco-python-essentials",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    category: "Programming & Foundations",
    skills: ["Python", "Control Flow", "Functions", "Data Structures"],
    highlight: true
  },
  {
    id: "tata-genai-analytics",
    title: "GenAI-Powered Data Analytics Simulation",
    issuer: "Tata Group / Forage",
    category: "AI & Analytics",
    skills: ["Generative AI", "Data Analytics", "Executive Insights", "Problem Solving"],
    highlight: true
  },
  {
    id: "deloitte-technology-simulation",
    title: "Technology Job Simulation",
    issuer: "Deloitte / Forage",
    category: "Consulting & Tech Systems",
    skills: ["Technology Consulting", "Client Deliverables", "System Design"],
    highlight: false
  },
  {
    id: "deloitte-cybersecurity-simulation",
    title: "Cybersecurity Job Simulation",
    issuer: "Deloitte / Forage",
    category: "Security & Protocols",
    skills: ["Threat Assessment", "Security Controls", "Data Protection"],
    highlight: false
  },
  {
    id: "dsa-certification",
    title: "Data Structures & Algorithms Certification",
    issuer: "Technical Academy",
    category: "Core Computer Science",
    skills: ["Arrays", "Linked Lists", "Sorting", "Searching", "Time Complexity"],
    highlight: false
  }
];
