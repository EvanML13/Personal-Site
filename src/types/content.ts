export interface ContactInfo {
    name: string;
    email: string;
    linkedin: string;
    github: string;
}

export interface TechnicalSkills {
    category: string;
    skills: string[]; 
}

export interface EducationItem {
    institution: string;
    dateRange: string;
    major: string;
    details: string[] | null;
}

export interface Project {
    title: string;
    year: string; 
    techStack: string[];
    description: string;
    link: string | null;
    repoUrl: string;
}

export interface ExperienceItem {
    organization: string;
    dateRange: string;
    role: string;
    location: string;
    bullets: string[]; 
}

export interface ReflectionSection {
    header: string;
    content: string;
}

export interface Goal {
    title: string;
    description: string;
    relatedGoal: string[];
    achived: boolean;
    reflection: string;
}
