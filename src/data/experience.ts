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
    title: "Artificial Intelligence Engineer Intern",
    company: "Zof AI",
    location: "San Francisco, California — Remote",
    dates: "February 2026 – May 2026",
    highlights: [
      "Evaluated end-to-end product workflows, identifying usability issues, missing functionality, and potential failure points.",
      "Conducted product demonstrations and gathered feedback from prospective users on workflows, pain points, and product requirements.",
      "Translated customer feedback into product improvement priorities and supported product testing, positioning, and customer-facing activities.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Logiciel Limited",
    companyUrl: "https://logicielghana.com/",
    location: "Accra, Ghana",
    dates: "November 2023 – January 2025",
    highlights: [
      "Led an engineering team through the migration from Next.js 14 to Next.js 15 and adoption of Turbopack, improving local development performance, shortening feedback cycles, and saving 14 developer-hours per month.",
      "Reorganized the TypeScript codebase using Clean Architecture, creating reusable data-ingestion and analytics modules that reduced developer onboarding time by 30% and saved 12 hours per implementation.",
      "Partnered with UI/UX designers in Figma to redesign key dashboard workflows, reducing average user journey steps from 10 to 7 while improving navigation and presentation of analytical insights.",
    ],
  },
  {
    title: "Data Engineer — Future Lab",
    company: "GRUNDFOS Ghana Limited",
    companyUrl: "https://www.grundfos.com/gh",
    location: "Accra, Ghana",
    dates: "August 2022 – May 2023",
    highlights: [
      "Built Python ETL workflows to ingest customer and IoT data from APIs and internal systems, then clean, validate, transform, and prepare it for analytics, machine learning, and data science workflows.",
      "Worked with MongoDB and MySQL-backed systems using Python and ORMs to query and process large datasets.",
      "Wrote reusable Python workflows for deduplication, missing-value handling, normalization, and data-quality checks.",
      "Collaborated with data scientists, software engineers, and designers on innovation projects within the Future Lab team.",
      "Also contributed to an Angular-based ticketing application across frontend development, APIs, and backend integration.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Foresight Consulting Ltd",
    location: "Manchester, United Kingdom",
    dates: "February 2021 – June 2022",
    highlights: [
      "Analyzed and cleaned business datasets using Python, pandas, and Excel, resolving missing values, duplicate records, and inconsistent formatting.",
      "Performed exploratory data analysis, KPI analysis, and trend analysis to identify patterns and summarize business performance.",
      "Created Tableau dashboards, charts, and visualizations to communicate analytical findings and make key trends easier to interpret.",
    ],
  },
];
