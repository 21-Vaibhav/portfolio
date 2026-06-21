const AboutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-12)",
      }}
    >
      {/* Heading */}
      <section style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>About Me</h1>
        <p
          style={{
            color: "var(--color-text-secondary)",
            marginTop: "var(--space-1)",
          }}
        >
          Data Engineer building infrastructure for AI systems.
        </p>
      </section>

      {/* Introduction */}
      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          Hi, I'm Vaibhav 👋
        </h2>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I am a Data Engineer at <strong>Quantiphi Analytics</strong> in Bengaluru (~1 year experience).
          I focus on building scalable data infrastructure, designing ETL/ELT pipelines, and implementing Medallion Architecture.
          My core expertise includes BigQuery, Apache Airflow, Python, PySpark, and Google Cloud Platform (GCP).
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I graduated with a BE in Information Science and Engineering from{" "}
          <strong>Siddaganga Institute of Technology, Tumkur (2021–2025)</strong>.
          I'm passionate about engineering data flows that feed machine learning models, vector databases, and real-time analytical systems.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I am also open to freelance or contract data engineering projects, helping startups establish their initial data lakes,
          automate workflows, and construct analytical dashboards.
        </p>
        <p>
          Feel free to say hi (
          <a href="mailto:vaibhav.govindraju@gmail.com">Email</a> /{" "}
          <a
            href="https://www.linkedin.com/in/2112vaibhav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ) — always up for a good chat.
        </p>
      </section>

      {/* Certifications */}
      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Certifications</h2>
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
      </section>

      {/* Bonus: Interests section */}
      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Random facts</h2>
        <ul
          style={{
            paddingLeft: "1.25rem",
            listStyleType: "disc",
            color: "var(--color-text-secondary)",
          }}
        >
          <li>I think dark mode is a human right.</li>
          <li>I love planes more than people.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
