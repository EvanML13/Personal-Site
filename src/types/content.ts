export interface TechnicalSkills {
    language: string[]
    operatingSystem: string[]
    developmentTool: string[]
}

export interface EducationItem {
    institution: string;
    dates: string;
    major: string;
    minor: string;
}

export interface Project {
    title: string;
    date: string; 
    techStack: string[];
    bullets: string[];
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