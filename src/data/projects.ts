export const PROJECT_CATEGORIES = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Desktop",
  "Mobile",
  "Machine Learning",
] as const;

export type ProjectCategory = Exclude<(typeof PROJECT_CATEGORIES)[number], "All">;

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status?: "Live" | "Completed" | "In Development";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Apartment Prediction",
    description:
      "A Next.js application that predicts apartment prices using machine learning models. Features an interactive interface for users to input property details and receive price predictions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "R",
      "Machine Learning",
      "Python",
    ],
    category: "Full-Stack",
    githubUrl: "https://github.com/phil-forson/apartment-prediction",
    liveUrl: "https://apartment-prediction.vercel.app",
    featured: true,
    status: "Live",
  },
  {
    id: 2,
    title: "Stock Market Web App",
    description:
      "A modern web application for tracking and analyzing stock market data. Built with Vite and React, featuring real-time market data visualization and interactive charts.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/phil-forson/stock-market-web-app",
    featured: false,
  },
  {
    id: 3,
    title: "E-commerce Backend",
    description:
      "A robust backend API for e-commerce applications built with NestJS. Features user authentication, product management, order processing, and comprehensive testing suite.",
    technologies: ["NestJS", "TypeScript", "Node.js"],
    category: "Backend",
    githubUrl: "https://github.com/phil-forson/ecommerce-backend",
    featured: true,
    status: "Completed",
  },
  {
    id: 4,
    title: "Algorithmic Trading Data Science",
    description:
      "A comprehensive data science project focused on algorithmic trading strategies. Features financial data analysis, trading algorithms, and market prediction models using Python.",
    technologies: ["Python", "Data Science", "Machine Learning"],
    category: "Machine Learning",
    githubUrl:
      "https://github.com/phil-forson/Algorithmic-Trading-Data-Science-Project",
    featured: true,
    status: "Completed",
  },
  {
    id: 5,
    title: "Shoprite Inventory Management",
    description:
      "A comprehensive Windows Forms application for managing Shoprite's inventory system. Features user authentication, inventory tracking, and business management tools built with C#.",
    technologies: ["C#", ".NET", "Windows Forms"],
    category: "Desktop",
    githubUrl: "https://github.com/phil-forson/Shoprite-Inventory-Management",
    featured: false,
    status: "Completed",
  },
  {
    id: 6,
    title: "CropApp",
    description:
      "A React Native mobile application for crop management and agricultural assistance. Features user authentication, data management, and Firebase integration for real-time updates.",
    technologies: ["React Native", "JavaScript", "Firebase"],
    category: "Mobile",
    githubUrl: "https://github.com/phil-forson/CropApp",
    featured: false,
    status: "In Development",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
