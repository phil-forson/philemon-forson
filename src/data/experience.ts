export interface ProfessionalExperience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  dates: string;
  highlights: string[];
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    title: "AI Software Engineer Intern (Product Engineering Focus)",
    company: "Zof AI",
    location: "San Francisco, California (Remote)",
    dates: "February 2026 – May 2026",
    highlights: [
      "Reviewed the product from software development and user perspectives, testing end-to-end workflows and identifying confusing steps, missing features, usability problems, and failure points",
      "Conducted product demonstrations for potential customers, gathered feedback, and documented requested features",
      "Compared customer expectations with existing product capabilities, identified gaps and improvement priorities, and re-tested updated workflows",
    ],
  },
  {
    title: "Software Developer",
    company: "Logiciel Ghana Limited",
    companyUrl: "https://logicielghana.com/",
    location: "Accra, Ghana",
    dates: "November 2023 – January 2025",
    highlights: [
      "Engineered a scalable Clean Architecture framework, cutting onboarding time by 30% and code defects by 40%",
      "Developed the project from Next.js 13 to Next.js 15 and implemented Turbopack, increasing local development speed by 40%",
      "Assessed frontend with Figma prototypes, reducing design rework by 25%",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Grundfos",
    companyUrl: "https://www.grundfos.com/gh",
    location: "Accra, Ghana",
    dates: "January 2022 – April 2023",
    highlights: [
      "Designed and built a ticket booking system with Angular, improving efficiency by 30% and lowering churn by 20%",
      "Constructed scalable microservices with NestJS, reducing response times by 40%",
      "Analyzed raw data with Tableau, driving 25% faster performance and 15% higher user engagement",
    ],
  },
];
