export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  externalLink?: string;
  status?: "active" | "coming soon";
  details?: string;
}

export const projects: Project[] = [
  {
    id: "hackernews-backend",
    title: "Hacker News Backend & DevOps",
    description:
      "The Hacker News Backend is a feature-complete implementation of a social news aggregation platform, supporting authentication, user management, posts, likes, and comments. The project is also fully containerized and integrated with a CI/CD pipeline for deployment on Azure.",
    link: "/projects/hackernews-backend",
    status: "active",
    details:
      "A TypeScript-based backend built with Hono and Prisma, utilizing Supabase (PostgreSQL) for storage. It features JWT-based authentication, paginated content retrieval, and role-based access controls. The DevOps aspect includes Dockerization and an automated CI/CD pipeline using GitHub Actions and Azure services.",
  },
  {
    id: "restaurant-uptime-monitor",
    title: "Restaurant Uptime Monitoring API",
    description:
      "A backend system for monitoring restaurant uptime and downtime based on business hours and periodic status checks. Generates detailed reports for restaurant owners.",
    link: "/projects/restaurant-uptime-monitor",
    status: "active",
    details:
      "Built with a database-backed approach to process real-time status data, business hours, and time zones. Uses linear interpolation to estimate uptime and downtime. Provides APIs for triggering report generation and fetching results in CSV format.",
  },
  {
    id: "local-cpp-coding-platform",
    title: "Local C++ Coding Platform",
    description:
      "A coding platform that enables users to solve C++ problems using their local g++ compiler with a custom-built code editor.",
    link: "/projects/local-cpp-coding-platform",
    status: "active",
    details:
      "Features a plugin-free code editor, real-time execution using a local compiler, and the ability for users to add their own coding challenges.",
  },
];
