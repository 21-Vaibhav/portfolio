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
          Just a curious dev doing his thing.
        </p>
      </section>

      {/* Introduction */}
      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          Hi, I'm Vaibhav 👋
        </h2>
        <p style={{ marginBottom: "var(--space-4)" }}>
          A passionate web developer, aviation geek, Formula 1 fanatic, and an
          endlessly curious tech explorer. I enjoy building performant and
          meaningful digital experiences.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I'm currently pursuing my Bachelor's in Information Science at{" "}
          <strong>Siddaganga Institute of Technology, Tumkur</strong>. Outside
          the classroom, you'll find me working on personal projects, tinkering
          with backend stacks, and exploring dev tools.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          Whether it's APIs, databases, or DevOps — I love learning by doing.
          I'm deeply driven by a need to figure things out and solve real-world
          problems with code.
        </p>
        <p>
          Feel free to say hi (
          <a href="mailto:vaibhav.1si21is057@gmail.com">Email</a> /
          <a
            href="https://twitter.com/21kafkaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          ) — always up for a good chat.
        </p>
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
