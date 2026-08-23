import type { ContactInfo, TechnicalSkills, EducationItem, Project, ExperienceItem } from "../types/content";

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
        skills: ["Git", "VS Code", "Docker", "PostgreSQL", "PostGIS", "GA4", "Data Studio", "PowerBI", "Pantheon", "Excel", "SharePoint", "Microsoft Office"]
    },
];

export const education: EducationItem = {
    institution: "University of Guelph",
    dateRange: "Sep. 2024 - April 2029",
    major: "Bachelor of Computing, Computer Science (Co-op)",
    minor: "Completing an Area of Emphasis in Artificial Intelligence",
};

export const projects: Project[] = [
    {
        title: "Real-Time Global Sentiment & Ambient Intelligence Platform",
        year: "2026",
        techStack: ["Go", "TypeScript", "React", "PostgreSQL/PostGIS", "WebSocket", "D3.js", "Data Visualization", "External API Calls"],
        description: "A real-time analytics platform processing 1M+ data points/day from social news aggregation, RSS, and weather sources across 50 regions, enabling live global sentiment tracking. Includes an AI-powered webcam ranking pipeline that scores live video streams by aesthetic category using a local Ollama LLM API, surfacing top results as interactive nodes on a globe in real time.",
        link: null,
        repoUrl: "https://github.com/EvanML13/Real-Time-Global-Sentiment-Ambient-Intelligence-Platform",
    },
    {
        title: "NBA Game Outcome Prediction System",
        year: "2025",
        techStack: ["Python", "Pandas", "NumPy", "scikit-learn/sklearn"],
        description: "An end-to-end machine learning pipeline analyzing 10 seasons (~12,000 games) of NBA data to predict game outcomes, achieving 64% accuracy on unseen games using cross-validation — a 10% improvement over baseline through feature engineering and selection.",
        link: null,
        repoUrl: "https://github.com/EvanML13/NBA-Game-Outcome-Prediction-System", 
    },
];

export const experience: ExperienceItem[] = [
    {
        organization: "University of Guelph Communications & Marketing",
        dateRange: "June 2026 - Dec. 2026",
        role: "Website Coordinator / Web Analyst Co-op",
        location: "Guelph, Ontario",
        bullets: [
            "Improved the University of Guelph's web experience for 40,000+ students, faculty, staff, and visitors by creating and optimizing content across Drupal, WordPress, and SharePoint using HTML/CSS, UX/UI, SEO, AODA, and WCAG 2.0 Level AA accessibility standards.",
            "Enhanced the accuracy and reliability of website performance data by implementing, validating, and troubleshooting GA4 and Google Tag Manager events, conversions, and key interactions, enabling data-driven evaluation of website and marketing performance.",
            "Enabled data-driven website and marketing decisions across campus departments by developing Data Studio dashboards and analytics reports that analyze user behavior, engagement, and web performance to identify usability issues, optimization opportunities, and actionable recommendations.",
        ],
    },
    {
        organization: "Guelph Independent Living",
        dateRange: "May 2026 - June 2026", 
        role: "Digital Computer Operator (Digitization Support)",
        location: "Guelph, Ontario",
        bullets: [
            "Digitized and processed large volumes of physical records using document scanning and Optical Character Recognition technologies, converting paper-based information into searchable, structured digital records.",
            "Maintained high accuracy, consistency, and compliance with organizational record-keeping standards within Microsoft SharePoint, OneDrive, Adobe Acrobat, and Excel.",
            "Troubleshot and resolved document scanning, OCR processing, file formatting, and data integrity issues, improving overall workflow efficiency and reliability.",
            "Collaborated across departments to support website content updates, digital communications, and organizational projects while maintaining accurate documentation and delivering administrative and technical support."
        ],
    },
    {
        organization: "Waterloo Catholic District School Board, St. Elizabeth School",
        dateRange: "June 2025",
        role: "Volunteer IT Coordinator",
        location: "Cambridge, Ontario",
        bullets: [
            "Configured and deployed 15+ hardware and software systems, improving setup efficiency and reducing technical downtime during daily operations.",
            "Diagnosed and resolved technical and network issues, reducing recurring disruptions and ensuring consistent system uptime for students.",
            "Developed and managed data systems, organizing information and creating adaptable workflows and schedules to support operational needs.",
            "Communicated technical guidelines to non-technical users, reducing support requests and improving independent system usage.",
        ],
    },
    {
        organization: "Cambridge Public Library",
        dateRange: "Nov. 2021 - Aug. 2024",
        role: "Student Shelver",
        location: "Cambridge, Ontario",
        bullets: [
            "Organized and shelved 200+ library materials per shift, improving accessibility and reducing retrieval time for patrons",
            "Assisted patrons daily with locating resources and navigating library systems, supporting a positive user experience",
            "Maintained accurate catalog organization and collaborated with team members, ensuring efficient daily operations."
        ],
    },
];
