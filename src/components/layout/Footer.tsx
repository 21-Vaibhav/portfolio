import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 0",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* Copyright */}
        <span
          style={{
            fontSize: "0.875rem",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          {new Date().getFullYear()} © Your Name
        </span>

        {/* Social Media Links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text)", textDecoration: "none" }}
          >
            <Github size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text)", textDecoration: "none" }}
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text)", textDecoration: "none" }}
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Date & Time */}
        <div
          style={{
            marginTop: "0.75rem",
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
          }}
        >
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          • Partly sunny •{" "}
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
