import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({ title, description, link }: BlogCardProps) => {
  const cardStyle = {
    padding: "var(--space-4)",
    borderRadius: "8px",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    transition: "background-color 0.2s",
    cursor: "pointer",
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
        <div style={{ color: "var(--color-text-secondary)" }}>
          <ChevronRight size={18} />
        </div>
      </div>

      <p
        style={{
          marginTop: "var(--space-2)",
          color: "var(--color-text-secondary)",
        }}
      >
        {description}
      </p>
    </>
  );

  return (
    <div style={cardStyle}>
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
    </div>
  );
};

export default BlogCard;
