export interface PersonaData {
  title: string;
  subtitle: string;
  about: string[];
  skills: string[];
  experience?: ExperienceItem[];
  projects?: ProjectItem[];
  education?: EducationItem[];
  highlights?: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  achievements?: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus?: string[];
  achievements?: string[];
}

export type PersonaType = "founder" | "developer" | "researcher";
