import type { ContactInfo, TechnicalSkills } from "../types/content";

export const contactInfo: ContactInfo = {
    name: "Evan Leonard",
    email: "eleona04@uoguelph.ca",
    linkedin: "https://www.linkedin.com/in/evan-leonard-495240405",
    github: "https://github.com/EvanML13",
};

export const skills: TechnicalSkills[] = [
    {
        category: "Languages",
        skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "Go", "SQL", "HTML/CSS", "PHP", "R"],
    },
    {
        category: "Frameworks",
        skills: ["React", "WordPress", "Next.js", "Drupal"]
    },
    {
        category: "Developer Tools",
        skills: ["Git", "VS Code", "Docker", "PostgreSQL", "PostGIS", "GA4", "LookerStudio", "PowerBI", "Pantheon", "Excel", "SharePoint", "Microsoft Office"]
    },
];

