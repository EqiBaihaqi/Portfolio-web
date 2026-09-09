export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Mobile" | "IoT & Full-Stack" | "Enterprise Mobile" | "AI & Community";
  badge: string;
  period: string;
  description: string;
  featured: boolean;
  bentoSpan: string; // e.g. 'col-span-12 lg:col-span-7'
  iconName: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  modalDetails: {
    overview: string;
    architectureTitle: string;
    architectureDetails: string[];
    technicalHighlights: string[];
    challengesAndSolutions: {
      challenge: string;
      solution: string;
    }[];
    deliverables: string[];
    githubUrl?: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Current Role" | "Full-Time" | "Internship" | "Certified Program";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  details: string[];
  toeic?: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  headline: string;
  bio: string;
  status: string;
  location: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
  yearsOfExperience: string;
  projectsCompleted: string;
  gpa: string;
  toeicScore: string;
}
