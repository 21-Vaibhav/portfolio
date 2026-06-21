import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

const HomePage = () => {
  // Only display the top 3 featured projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)",
      }}
    >
      {/* Dynamic CTA button styles */}
      <style dangerouslySetInnerHTML={{__html: `
        html {
          scroll-behavior: smooth;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          background-color: var(--color-primary);
          color: var(--color-background) !important;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 6px;
          text-decoration: none !important;
          transition: background-color 0.2s, transform 0.15s;
          border: 1px solid var(--color-primary);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .cta-button:hover {
          background-color: var(--color-primary-hover);
          border-color: var(--color-primary-hover);
          transform: translateY(-1.5px);
          text-decoration: none !important;
        }
        .cta-button:active {
          transform: translateY(0);
        }
      `}} />

      {/* 1. Hero Section */}
      <section id="hero" style={{ textAlign: "center", padding: "var(--space-8) 0 var(--space-4)" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-4)",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.25rem",
                fontWeight: 600,
                marginBottom: "var(--space-2)",
              }}
            >
              Vaibhav G
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "var(--color-primary)",
                marginBottom: "var(--space-3)",
              }}
            >
              Data Engineer building infrastructure for AI systems
            </p>
            
            {/* Availability Dot Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "6px var(--space-4)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "20px",
                fontSize: "0.8rem",
                marginBottom: "var(--space-4)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#22c55e",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              <span style={{ color: "var(--color-text-secondary)" }}>
                Available for freelance & contract work
              </span>
            </div>


          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services">
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--space-4)", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-2)" }}>
          What I Do
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <ProjectCard
            title="Dashboard & reporting infrastructure for startups"
            description="End-to-end data warehousing, transformation, and reporting layers using BigQuery, Looker Studio, and Metabase."
          />
          <ProjectCard
            title="ETL/ELT pipeline design & automation"
            description="Robust, automated data pipelines using Apache Airflow and GCP Composer for scheduled and reliable ingestion."
          />
          <ProjectCard
            title="RAG/AI system integration for internal tools"
            description="Developing Retrieval-Augmented Generation (RAG) pipelines and LLM-powered internal tools using LangChain and vector databases."
          />
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects">
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "var(--space-4)",
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "var(--space-2)",
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={`/projects`}
              status={project.status}
            />
          ))}
        </div>
      </section>

      {/* 4. Skills/Tech Stack Section */}
      <section id="skills">
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "var(--space-4)",
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "var(--space-2)",
          }}
        >
          Skills & Technologies
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {[
            {
              category: "Languages",
              skills: ["Python", "SQL"],
            },
            {
              category: "Cloud & Data Infrastructure",
              skills: ["GCP (BigQuery, Composer/Airflow)", "PySpark", "Medallion Architecture", "ETL/ELT pipeline design"],
            },
            {
              category: "Machine Learning & AI",
              skills: ["LangChain", "FAISS", "RAG pipelines", "TensorFlow/Keras", "scikit-learn", "HuggingFace basics"],
            },
            {
              category: "Tools & Frameworks",
              skills: ["FastAPI", "Streamlit", "Docker", "Git"],
            },
          ].map((cat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "var(--space-4)",
              }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "var(--space-2)" }}>
                {cat.category}
              </h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {cat.skills.map((skill, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      marginBottom: "var(--space-1)",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                    }}
                  >
                    <span style={{ color: "var(--color-primary)" }}>•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. About/Bio Section */}
      <section id="about">
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--space-4)", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-2)" }}>
          About Me
        </h2>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I am a Data Engineer at <strong>Quantiphi Analytics</strong> in Bengaluru (~1 year experience).
          I focus on building scalable data infrastructure, designing ETL/ELT pipelines, and implementing Medallion Architecture.
          My core expertise includes BigQuery, Apache Airflow, Python, PySpark, and Google Cloud Platform (GCP).
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I completed my BE in Information Science and Engineering from{" "}
          <strong>Siddaganga Institute of Technology, Tumkur (2021–2025)</strong>.
          I'm passionate about engineering data flows that feed machine learning models, vector databases, and real-time analytical systems.
        </p>

        {/* Certifications */}
        <div style={{ marginTop: "var(--space-4)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "var(--space-2)" }}>Certifications</h3>
          <ul
            style={{
              paddingLeft: "1.25rem",
              listStyleType: "disc",
              color: "var(--color-text-secondary)",
            }}
          >
            <li>Google Cloud Certified - Associate Cloud Engineer (ACE)</li>
            <li>Google Cloud Certified - Associate Data Practitioner (ADP)</li>
          </ul>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" style={{ paddingBottom: "var(--space-8)" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--space-4)", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-2)" }}>
          Get in Touch
        </h2>
        <p style={{ marginBottom: "var(--space-4)" }}>
          Feel free to reach out if you have any questions, want to chat, or have contract/freelance data engineering projects.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-6)",
            marginBottom: "var(--space-6)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:vaibhav.govindraju@gmail.com">
              vaibhav.govindraju@gmail.com
            </a>
          </div>
          <div>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/2112vaibhav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/2112vaibhav/
            </a>
          </div>
        </div>


      </section>
    </div>
  );
};

export default HomePage;
