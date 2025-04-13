import {
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiPrisma,
  SiPostman,
  SiDocker,
 SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import ProjectCard from "../components/ui/ProjectCard";
import ToolIcon from "../components/ui/ToolIcon";

// fdsjfksld
const HomePage = () => {
  // Tools and technologies
const tools = [
  {
    name: "React",
    icon: <SiReact className="text-black dark:text-white" size={24} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-black dark:text-white" size={24} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Git",
    icon: <SiGit className="text-black dark:text-white" size={24} />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black dark:text-white" size={24} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-black dark:text-white" size={24} />,
  },
];


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-12)",
      }}
    >
      {/* Profile Section */}
      <section style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--space-2)",
              }}
            >
              Vaibhav G
            </h1>
            <p
              style={{
                color: "var(--color-text-secondary)",
                marginTop: "var(--space-1)",
              }}
            >
              WebDev / B.E. @ SIT Tumkur
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>About me</h2>
        <p style={{ marginBottom: "var(--space-4)" }}>
          Hello! i'm Vaibhav, a web developer, an avid aviation enthusiast, a
          fellow f1 fanatic, and a passionate learner. I love exploring new tech
          and experimenting with it
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          Currently completing my Bachelor's in Information Science(IT) at
          Siddaganga Institute of Technology, Tumkur while developing personal
          projects.
        </p>
        <p>
          Feel free to reach out to me (
          <a href="mailto:vaibhav.1si21is057@gmail.com">Email</a> /
          <a
            href="https://twitter.com/21kafkaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          ) if you have any questions or just want to chat.
        </p>
      </section>

      {/* Projects Section */}
      <section>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "var(--space-4)",
          }}
        >
          What I build
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <ProjectCard
            title="Hacker News Backend & DevOps"
            description="A TypeScript-based backend for a social news platform with authentication, posts, likes, and comments. Fully containerized with a CI/CD pipeline for Azure deployment"
            link="/projects"
          />
          <ProjectCard
            title="Restaurant Uptime Monitoring API"
            description="A backend system that tracks restaurant uptime based on business hours and periodic status checks, providing detailed reports via APIs."
            link="/projects"
          />
          <ProjectCard
            title="Local C++ Coding Platform"
            description="A coding platform that enables users to solve C++ problems using their local g++ compiler with a custom-built code editor."
            link="/projects"
          />
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "var(--space-4)",
          }}
        >
          What I use
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-4)",
          }}
        >
          {tools.map((tool, index) => (
            <ToolIcon key={index} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
