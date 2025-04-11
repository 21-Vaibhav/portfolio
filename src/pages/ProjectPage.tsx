import { projects } from "../data/projects"; // Adjust the import path as necessary

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    maxWidth: "900px",
    margin: "auto",
    padding: "3rem 1rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#fff", // Ensuring white text
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#1e1e1e", // Slightly lighter than black for a softer contrast
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(255, 255, 255, 0.05)", // Subtle soft glow effect
    textAlign: "left",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.08)", // Light border for better separation
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardDescription: {
    fontSize: "0.9rem",
    marginBottom: "0.75rem",
  },
  cardDetails: {
    fontSize: "0.8rem",
    marginBottom: "1rem",
  },
  linkContainer: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "1rem",
  },
  link: {
    fontSize: "0.875rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    borderBottom: "1px solid white",
  },
  status: {
    position: "absolute",
    top: "-10px", // Move it slightly above the card
    right: "10px",
    padding: "6px 10px",
    borderRadius: "8px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: "#000", // Black text
    backgroundColor: "#fff", // White background
    textTransform: "uppercase",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  },
};

const ProjectsPage = () => {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Projects</h1>
      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{project.title}</h2>
            <p style={styles.cardDescription}>{project.description}</p>
            {project.details && (
              <p style={styles.cardDetails}>{project.details}</p>
            )}

            {/* Links */}
            <div style={styles.linkContainer}>
              {project.link && (
                <a href={project.link} style={styles.link}>
                  View Project →
                </a>
              )}
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Visit Website →
                </a>
              )}
            </div>

            {/* Status */}
            {project.status && (
              <span style={styles.status}>{project.status}</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
