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
    id: "design-system",
    title: "Interfaces Design System",
    description:
      "The Interfaces Design System is currently in the alpha stage and still under active development. If you're interested in gaining early access and are willing to provide valuable feedback to help shape its future, we'd love to have you on board.",
    link: "/projects/design-system",
    status: "active",
    details:
      "A comprehensive design system focusing on minimalist and modern UI components.",
  },
  {
    id: "charts-supply",
    title: "Charts Supply",
    description:
      "Charts solution for Framer helps you build data-driven charts. It seamlessly integrates with Google Sheets and databases, allowing you to tell compelling stories with real data.",
    externalLink: "https://charts.supply/",
    status: "active",
    details: "An integrated charting solution for designers and developers.",
  },
  {
    id: "3d-assets",
    title: "Dimensions Supply",
    description:
      "A 3D asset store. Resources for digital product designers. Coming in Q3 2025.",
    status: "coming soon",
    details:
      "A curated marketplace for high-quality 3D assets targeted at product designers.",
  },
];
