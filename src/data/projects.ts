export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  externalLink?: string;
  status?: "active" | "coming soon";
  details?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "payment-fraud-detection",
    title: "Payment Fraud detection system",
    description:
      "Developed a distributed payment processing middleware using Kafka, Redis, PostgreSQL, and FastAPI with asynchronous microservice communication. Implemented real-time fraud detection, idempotency, saga orchestration, and CDC pipelines for reliable transaction processing. Integrated Docker, Kubernetes, Prometheus, Grafana, and CI/CD to achieve scalability, fault tolerance, and end-to-end observability.",
    link: "https://github.com/21-Vaibhav/",
    status: "active",
    tags: ["Kafka", "Redis", "PostgreSQL", "FastAPI", "Docker", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    id: "areca-nut-disease-detection",
    title: "Areca Nut Disease Detection",
    description:
      "ResNet50 transfer learning model classifying 6 disease categories, 92% accuracy. Built with a TensorFlow/Keras training pipeline and a FastAPI inference endpoint.",
    link: "https://github.com/21-Vaibhav/",
    status: "active",
    tags: ["TensorFlow", "Keras", "ResNet50", "Computer Vision", "FastAPI"],
  },
  {
    id: "runtech",
    title: "Runtech (in progress)",
    description:
      "Built a local-first running analytics platform using FastAPI, SQLite, and Strava APIs to track fitness, fatigue, and training readiness. Implemented a decision engine that converts physiological signals into personalized workout recommendations under defined constraints. Added data quality validation, anomaly detection, feedback tracking, and LLM-generated training insights for explainable performance optimization.",
    link: "https://github.com/21-Vaibhav/",
    status: "coming soon",
    tags: ["FastAPI", "SQLite", "Strava API", "LLM", "Python", "Data Quality"],
  },
  {
    id: "hackernews-backend",
    title: "Hacker News Backend & DevOps",
    description:
      "A feature-complete social news platform backend built with TypeScript, Hono, and Prisma. Integrated with PostgreSQL, JWT auth, and containerized CI/CD for Azure deployment.",
    link: "https://github.com/21-Vaibhav/hackernews-server.git",
    status: "active",
    tags: ["TypeScript", "Hono", "Prisma", "PostgreSQL", "Docker", "Azure"],
  },
  {
    id: "restaurant-uptime-monitor",
    title: "Restaurant Uptime Monitoring API",
    description:
      "Backend analytics monitoring restaurant uptime based on dynamic hours and periodic status checks. Employs linear interpolation for reports.",
    link: "https://github.com/21-Vaibhav/Loop-backend-task.git",
    status: "active",
    tags: ["Python", "FastAPI", "PostgreSQL", "Analytics"],
  },
  {
    id: "local-cpp-coding-platform",
    title: "Local C++ Coding Platform",
    description:
      "A code compilation sandbox environment allowing users to write and run C++ tests using local compilers.",
    link: "https://github.com/21-Vaibhav/Online-coding-platform.git",
    status: "active",
    tags: ["C++", "FastAPI", "React"],
  },
];
