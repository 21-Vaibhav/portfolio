import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--space-3) 0", // Leaner header
        width: "100%",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Align elements properly
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "var(--color-text)",
            textDecoration: "none",
          }}
        >
            21  
        </Link>
        {/* Navigation */}
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "var(--space-6)",
              padding: 0,
              margin: 0,
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "Home", target: "/#hero" },
              { name: "Services", target: "/#services" },
              { name: "Projects", target: "/#projects" },
              { name: "Skills", target: "/#skills" },
              { name: "About", target: "/#about" },
              { name: "Contact", target: "/#contact" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.target}
                  style={{
                    color: "var(--color-text)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Light Mode Button on Right */}
        <ThemeToggle /> {/* Set to white */}
      </div>
    </header>
  );
};

export default Header;
