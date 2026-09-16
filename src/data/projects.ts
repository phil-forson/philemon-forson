export const PROJECT_CATEGORIES = [
  "All",
  "AI / ML",
  "Computer Vision",
  "GenAI / RAG",
  "Data Science",
  "Full-Stack",
  "Backend",
  "Desktop",
  "Mobile",
] as const;

export type ProjectCategory = Exclude<(typeof PROJECT_CATEGORIES)[number], "All">;

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status?: "Live" | "Completed" | "In Development";
}

export const getPrimaryCategory = (project: Project): ProjectCategory =>
  project.categories[0];

export const projectMatchesCategory = (
  project: Project,
  category: (typeof PROJECT_CATEGORIES)[number]
): boolean => {
  if (category === "All") {
    return true;
  }

  return project.categories.includes(category);
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Traffic Intelligence Platform",
    description:
      "End-to-end computer vision platform for vehicle and pedestrian detection, multi-object tracking, trajectory analysis, and traffic analytics. Includes real-time detection, directional counting, FastAPI inference, annotated playback, speed estimation, license-plate OCR, and VLM-based event analysis with semantic retrieval.",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "YOLO",
      "ByteTrack",
      "FastAPI",
      "Docker",
    ],
    categories: ["Computer Vision", "AI / ML", "Full-Stack"],
    liveUrl: "http://traffic.5.161.68.137.sslip.io",
    featured: true,
    status: "Live",
  },
  {
    id: 2,
    title: "Credex — Explainable Credit Risk Modeling Platform",
    description:
      "End-to-end credit risk platform built from 1.1M+ transaction records, combining predictive modeling, explainability, APIs, and a web interface. Addresses class imbalance and temporal feature engineering, benchmarks XGBoost against a deep neural network (AUC 0.945), and serves SHAP explanations through a Flask API and Next.js frontend.",
    technologies: [
      "Python",
      "SQL",
      "XGBoost",
      "TensorFlow",
      "SHAP",
      "Flask",
      "Next.js",
      "Docker",
    ],
    categories: ["AI / ML", "Data Science", "Full-Stack"],
    githubUrl: "https://github.com/phil-forson/credit-risk-web",
    liveUrl: "https://credit-risk-web.vercel.app/",
    featured: true,
    status: "Live",
  },
  {
    id: 3,
    title: "Soccer Match LLM Analyst",
    description:
      "Full-stack AI application for soccer match search and video discovery using RAG, semantic retrieval, ranking logic, and a Next.js/FastAPI architecture. Uses SentenceTransformers and ChromaDB with recency-aware ranking, home/away team interpretation, official-source prioritization, and automated filtering of simulations and low-quality content.",
    technologies: [
      "Python",
      "Next.js",
      "FastAPI",
      "GPT-4",
      "ChromaDB",
      "SentenceTransformers",
      "Docker",
    ],
    categories: ["GenAI / RAG", "AI / ML", "Full-Stack"],
    githubUrl: "https://github.com/phil-forson/soccer-mind",
    liveUrl: "https://soccer-mind.vercel.app",
    featured: true,
    status: "Live",
  },
  {
    id: 4,
    title: "Apartment Prediction",
    description:
      "A Next.js application that predicts apartment prices using machine learning models. Features an interactive interface for users to input property details and receive price predictions.",
    technologies: ["Next.js", "TypeScript", "R", "Machine Learning", "Python"],
    categories: ["Data Science", "Full-Stack"],
    githubUrl: "https://github.com/phil-forson/apartment-prediction",
    liveUrl: "https://apartment-prediction.vercel.app",
    featured: false,
    status: "Live",
  },
  {
    id: 5,
    title: "E-commerce Backend",
    description:
      "A robust backend API for e-commerce applications built with NestJS. Features user authentication, product management, order processing, and comprehensive testing suite.",
    technologies: ["NestJS", "TypeScript", "Node.js"],
    categories: ["Backend"],
    githubUrl: "https://github.com/phil-forson/ecommerce-backend",
    featured: false,
    status: "Completed",
  },
  {
    id: 6,
    title: "Stock Market Web App",
    description:
      "A modern web application for tracking and analyzing stock market data. Built with Vite and React, featuring real-time market data visualization and interactive charts.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    categories: ["Full-Stack"],
    githubUrl: "https://github.com/phil-forson/stock-market-web-app",
    featured: false,
  },
  {
    id: 7,
    title: "Algorithmic Trading Data Science",
    description:
      "A comprehensive data science project focused on algorithmic trading strategies. Features financial data analysis, trading algorithms, and market prediction models using Python.",
    technologies: ["Python", "Data Science", "Machine Learning"],
    categories: ["Data Science", "AI / ML"],
    githubUrl:
      "https://github.com/phil-forson/Algorithmic-Trading-Data-Science-Project",
    featured: false,
    status: "Completed",
  },
  {
    id: 8,
    title: "Shoprite Inventory Management",
    description:
      "A comprehensive Windows Forms application for managing Shoprite's inventory system. Features user authentication, inventory tracking, and business management tools built with C#.",
    technologies: ["C#", ".NET", "Windows Forms"],
    categories: ["Desktop"],
    githubUrl: "https://github.com/phil-forson/Shoprite-Inventory-Management",
    featured: false,
    status: "Completed",
  },
  {
    id: 9,
    title: "CropApp",
    description:
      "A React Native mobile application for crop management and agricultural assistance. Features user authentication, data management, and Firebase integration for real-time updates.",
    technologies: ["React Native", "JavaScript", "Firebase"],
    categories: ["Mobile"],
    githubUrl: "https://github.com/phil-forson/CropApp",
    featured: false,
    status: "In Development",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
