import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";


interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  isExternal?: boolean;
  status?: "active" | "coming soon";
}

const ProjectCard = ({
  title,
  description,
  link,
  isExternal = false,
  status,
}: ProjectCardProps) => {
  const cardStyle = {
    padding: "var(--space-4)",
    borderRadius: "8px",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    transition: "background-color 0.2s",
    cursor: link ? "pointer" : "default",
  };

  const CardContent = () => (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 500,
          }}
        >
          {title}
        </h3>
        {link && (
          <div style={{ color: "var(--color-text-secondary)" }}>
            {isExternal ? (
              <ArrowUpRight size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </div>
        )}
      </div>

      <p
        style={{
          marginTop: "var(--space-2)",
          color: "var(--color-text-secondary)",
        }}
      >
        {description}
      </p>

      {status && (
        <div style={{ marginTop: "var(--space-2)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
            }}
          >
            {status === "coming soon" && "Coming soon"}
          </span>
        </div>
      )}
    </>
  );

  return (
    <div style={cardStyle}>
      {link ? (
        isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-text)",
              textDecoration: "none",
              display: "block",
            }}
          >
            <CardContent />
          </a>
        ) : (
          <Link
            to={link}
            style={{
              color: "var(--color-text)",
              textDecoration: "none",
              display: "block",
            }}
          >
            <CardContent />
          </Link>
        )
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default ProjectCard;
