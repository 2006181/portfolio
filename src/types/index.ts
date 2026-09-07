export interface Skill {
  name: string;
  category: 'Programming' | 'Machine Learning' | 'Data Science' | 'ML Engineering' | 'Tools & Database' | 'Other';
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  accent: 'cyan' | 'pink' | 'purple' | 'yellow' | 'emerald';
  skills: Skill[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  mlAlgorithm: string;
  evaluationMetrics: string[];
  keyLearning: string;
  highlights: string[];
  visualType: 'regression' | 'classification' | 'eda';
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  deliverables: string[];
  skillsApplied: string[];
}

export interface JourneyStep {
  step: number;
  stage: string;
  topic: string;
  focus: string;
  status: 'mastered' | 'completed' | 'in-progress' | 'exploring';
  details: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  period: string;
  specialization?: string;
  coursework?: string[];
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  skills: string[];
  highlight?: boolean;
}

export interface AchievementItem {
  id: string;
  role: string;
  organization: string;
  duration?: string;
  type: 'Leadership' | 'Community' | 'Hackathon';
  description: string;
  badge: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
  accent: 'cyan' | 'pink' | 'purple' | 'emerald';
}
